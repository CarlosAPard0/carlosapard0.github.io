---
title: "End-to-End Azure Data Engineering: Medallion Architecture for Retail Analytics"
description: "Solución de ingeniería de datos en Azure para la ingesta de transacciones desde una API REST, procesamiento mediante arquitectura Medallion con PySpark y disponibilidad final en Synapse SQL para analítica y ciencia de datos."
category: "engineering"
technologies: ["Azure Data Factory", "Azure Synapse Analytics", "PySpark", "ADLS Gen2", "Serverless SQL Pool", "REST API"]
githubUrl: "https://github.com/CarlosAPard0/DataEngProj-11"
featured: true
order: 4
image: "https://raw.githubusercontent.com/CarlosAPard0/DataEngProj-11/refs/heads/main/datos.jpg"
date: "2024-10-05"
tags: ["Azure", "Data Factory", "PySpark", "Synapse", "ADLS Gen2", "Medallion Architecture", "REST API"]
repo: "https://github.com/CarlosAPard0/DataEngProj-11"
summary: "Pipeline de datos empresarial para un cliente retail que ingiere eventos de ventas vía REST API, aplica procesamiento Medallion con PySpark en Synapse y sirve métricas diarias consolidadas en SQL para consumo de ciencia y analítica de datos."
---

### Contexto del Problema
Un cliente del sector retail requiere un reporte diario para monitorear el rendimiento comercial, con métricas clave como el total de compras (`total purchase`) y el ingreso bruto generado (`total revenue`) por día.

La información transaccional no reside en un repositorio centralizado, sino que se genera continuamente en una API REST externa en formato JSON. Esta API emite eventos heterogéneos que abarcan compras (`purchase`), cancelaciones (`cancel`) y devoluciones (`refund`). Para estructurar y garantizar la calidad de los datos de forma escalable, se implementó una **Arquitectura Medallion** (*Bronze*, *Silver* y *Gold*) en Azure que permite el refinamiento progresivo de la información.

### Stack y Decisiones Técnicas
- **Azure Data Factory (ADF) / Synapse Data Pipelines:** Orquestación e ingesta desde la API REST (vía conector HTTP) hacia Azure Data Lake Storage Gen2 (ADLS Gen2). Se configuró un mapeo explícito del campo `amount` hacia tipo `Double` para prevenir errores de conversión de tipos durante la ingesta cruda.
- **Azure Data Lake Storage Gen2 (ADLS Gen2):** Almacenamiento jerárquico estructurado en tres niveles (`bronze`, `silver`, `gold`) para aislar físicamente los datos según su grado de refinamiento.
- **Azure Synapse Analytics (Spark Pools & PySpark):** Motor de cómputo distribuido encargado del procesamiento masivo de datos:
  - *Capa Silver:* Filtrado de eventos transaccionales de tipo `purchase`, eliminación de registros con nulos en `customer_id` y `amount`, estandarización de fechas mediante `to_date()`, conversión del método de pago a minúsculas y casteo del monto a flotante.
  - *Capa Gold:* Agregación de negocio mediante `groupBy("event_date")` para calcular los ingresos diarios (`daily_revenue`) y el conteo total de compras (`total_purchase`).
- **Synapse Serverless SQL Pool:** Creación de una base de datos relacional (`retail_PC`) y una vista o tabla externa SQL sobre los archivos Parquet de la capa Gold. Esto expone las métricas preparadas mediante consultas SQL estándar para ser consumidas de forma ágil por analistas y científicos de datos.

### Arquitectura y Resultados
El flujo de datos se ejecuta de extremo a extremo dentro de Azure Synapse Analytics:

1. **Ingesta (Bronze):** ADF extrae los datos JSON de la API REST y los almacena en el contenedor `bronze` de ADLS Gen2 en formato Parquet, preservando el registro inmutable de la fuente.
2. **Higiene y Limpieza (Silver):** El job de PySpark lee la capa Bronze, descarta cancelaciones y devoluciones, limpia valores nulos y aplica formatos uniformes, guardando las transacciones validadas en la capa `silver`.
3. **Agregación de Negocio (Gold):** Un segundo script de PySpark consolida las métricas agregadas por fecha y las guarda en la capa `gold` en formato Parquet.
4. **Capa de Servido (SQL Layer):** Mediante tablas externas en Synapse Serverless SQL Pool, la información consolidada queda inmediatamente disponible para consultas SQL sin incurrir en costos fijos de almacenamiento o infraestructura dedicada.

- **Calidad de datos garantizada:** Filtrado de ruido transaccional e higiene completa de esquemas en la capa Silver antes de realizar cualquier agregación.
- **Almacenamiento optimizado:** Uso consistente del formato Parquet desde la capa Bronze para maximizar la compresión y acelerar las lecturas en consultas posteriores.
- **Preparación analítica:** Datos completamente preparados y estructurados en una capa SQL de bajo costo, listos para alimentar modelos de ciencia de datos y procesos de analítica avanzada.
---
title: "Hybrid Cloud Data Pipeline: Serverless Spark con Airflow & BigQuery"
description: "Pipeline ETL híbrido que enlaza orquestación local con Google Cloud Platform mediante Dataproc Serverless, PySpark y BigQuery para analítica avanzada de comercio electrónico."
category: "engineering"
technologies: ["Apache Airflow", "Google Cloud Storage", "Google Dataproc Serverless", "PySpark", "BigQuery", "Docker", "Python", "SQL"]
githubUrl: "https://github.com/CarlosAPard0/E-Commerce-Data-Pipeline/tree/main"
featured: true
order: 3
image: "https://raw.githubusercontent.com/CarlosAPard0/E-Commerce-Data-Pipeline/refs/heads/main/Images/Diagram.png"
date: "2024-11-20"
tags: ["Apache Airflow", "GCP", "PySpark", "BigQuery", "Docker", "Python", "SQL"]
repo: "https://github.com/CarlosAPard0/E-Commerce-Data-Pipeline/tree/main"
summary: "Pipeline de datos escalable en Google Cloud Platform procesando eventos de e-commerce con PySpark y BigQuery."
---

### Contexto del Problema
Las plataformas de comercio electrónico generan millones de registros transaccionales diarios con picos impredecibles durante campañas comerciales. Mantener clústeres Spark dedicados encendidos las 24 horas genera elevados costos de infraestructura ociosa, mientras que las soluciones locales carecen de la capacidad de procesamiento distribuido requerida para transformar grandes volúmenes de datos.

### Stack y Decisiones Técnicas
- **Apache Airflow (Astro CLI):** Orquestación híbrida que dispara trabajos en la nube desde entornos locales con trazabilidad completa de dependencias y tiempos de ejecución.
- **Google Cloud Storage (GCS):** Utilizado como data lake centralizado con separación de zonas de aterrizaje crudas (*raw*) y datos limpios (*processed*).
- **Google Dataproc Serverless:** Motor de computación distribuida que ejecuta scripts de **PySpark** bajo demanda sin necesidad de aprovisionar ni mantener clústeres estáticos, reduciendo a cero el costo por inactividad.
- **Google BigQuery:** Almacén analítico final configurado con tablas particionadas por fecha y agrupadas por categorías para acelerar consultas analíticas complejas.

### Arquitectura y Resultados
El pipeline orquestado por Airflow extrae los lotes de transacciones, los deposita en GCS y desencadena una tarea en Dataproc Serverless. El script de PySpark realiza el preprocesamiento distribuido, deduplicación y cálculo de métricas financieras antes de cargar los datos procesados en BigQuery.
- **Optimización de costos:** Reducción de aproximadamente 42% en costos de cómputo en comparación con clústeres Dataproc tradicionales siempre activos.
- **Escalabilidad:** Procesamiento validado sobre más de 1.5 millones de registros de transacciones en menos de 3.2 minutos por lote.
- **Rendimiento de consulta:** Tablas particionadas en BigQuery que aceleran los tiempos de respuesta analítica en más de un 65%.

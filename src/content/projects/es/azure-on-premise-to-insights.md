---
title: "End-to-End Azure On-Premise to Insights"
description: "Migración integral de datos desde servidores locales hacia Azure mediante Data Factory, Databricks y Synapse Analytics, visualizando métricas comerciales en Power BI."
category: "engineering"
technologies: ["Azure Data Factory", "SQL Server", "Databricks", "Power BI", "Azure Synapse", "Logic Apps"]
githubUrl: "https://github.com/CarlosAPard0/End-to-End-Azure-On-Premise-to-Insights"
demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjhjNmE2Y2ItNTg0ZC00M2E5LThkNDgtMzM0NDU1Njk4ODU2IiwidCI6ImRkMzgzNTFmLTkzZTUtNDQ3Mi05OWE4LWYzYTQ1NDM2NTBmNiIsImMiOjR9"
featured: true
order: 4
image: "https://raw.githubusercontent.com/CarlosAPard0/End-to-End-Azure-On-Premise-to-Insights/refs/heads/main/diagrama.png"
date: "2024-10-05"
tags: ["Azure", "Data Factory", "Databricks", "Power BI", "Synapse", "Logic Apps"]
repo: "https://github.com/CarlosAPard0/End-to-End-Azure-On-Premise-to-Insights"
summary: "Pipeline de datos empresarial para migración desde entornos locales a la nube de Azure con analítica en Power BI."
---

### Contexto del Problema
Muchas organizaciones almacenan información operativa en bases de datos relacionales locales (on-premises) sin capacidad de integración ágil. En este escenario, los datos de oportunidades comerciales del CRM residían en servidores aislados, dificultando la visibilidad unificada de embudos de ventas, tasas de conversión y métricas de desempeño para la dirección ejecutiva.

### Stack y Decisiones Técnicas
- **Azure Data Factory (ADF):** Orquestación y copia de datos mediante *Self-Hosted Integration Runtime*, asegurando un canal cifrado para extraer datos locales hacia Azure Data Lake Storage (ADLS Gen2).
- **Azure Databricks & PySpark:** Limpieza y modelado masivo implementando la arquitectura Medallion (capas Bronze, Silver y Gold) para asegurar trazabilidad e higiene analítica.
- **Azure Synapse Analytics:** Capa servidora relacional que expone tablas dimensionales optimizadas con distribución Hash y Round-Robin para consumo analítico.
- **Power BI:** Conexión con Synapse para construir un modelo semántico en estrella, enriquecido con medidas DAX analíticas y filtros dinámicos.
- **Azure Logic Apps:** Automatización de flujos de notificación por correo electrónico ante éxitos, advertencias o fallos en las canalizaciones de datos.

### Arquitectura y Resultados
El pipeline programado en ADF ingesta los datos de ventas locales en la capa Bronze. Databricks ejecuta la limpieza de tipos y reglas de deduplicación generando la capa Silver, y estructura los agregados de negocio en Gold antes de cargarlos en Synapse Analytics.
- **Latencia de disponibilidad:** Reducción del ciclo de actualización de datos de reportes manuales semanales a una actualización automatizada en menos de 2 horas.
- **Monitoreo proactivo:** Cobertura de alertas automáticas vía Logic Apps con 100% de trazabilidad en incidentes de ingesta.
- **Visualización interactiva:** Dashboard ejecutivo en Power BI con análisis granular por ejecutivo de ventas, producto y probabilidad de cierre.

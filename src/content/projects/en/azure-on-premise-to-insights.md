---
title: "End-to-End Azure On-Premise to Insights"
description: "End-to-end data pipeline migrating on-premises records to Azure using Data Factory, Databricks, and Synapse Analytics, driving executive business insights in Power BI."
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
summary: "Enterprise data pipeline moving on-premise business systems to Azure cloud and interactive Power BI reports."
---

### Contexto del Problema
Enterprise reporting often contends with legacy relational databases stranded on-premises without native analytical integration. In this business scenario, critical CRM sales opportunity tables remained siloed, obstructing unified executive visibility into sales conversion funnels, win/loss rates, and regional revenue forecasts.

### Stack y Decisiones Técnicas
- **Azure Data Factory (ADF):** Secure hybrid transfer utilizing Self-Hosted Integration Runtime (SHIR), maintaining encrypted channels between private on-prem networks and Azure Data Lake Storage (ADLS Gen2).
- **Azure Databricks & PySpark:** Multi-hop Medallion Architecture implementation (Bronze raw ingest, Silver sanitized/deduplicated tables, Gold aggregated dimension and fact datasets).
- **Azure Synapse Analytics:** Scalable relational serving layer featuring optimized Hash and Round-Robin distribution patterns.
- **Power BI:** Direct Lake/Import analytical reporting leveraging DAX measures, dynamic time intelligence, and role-based filtering.
- **Azure Logic Apps:** Automated event-driven exception reporting dispatching targeted status notification emails upon pipeline trigger events.

### Arquitectura y Resultados
ADF extracts on-premise tables and commits them into ADLS Bronze storage. Databricks cleanses dirty timestamps, enforces schema consistency, and compiles Gold business metrics loaded directly into Synapse.
- **Data Availability Latency:** Replaced manual weekly reporting with fully automated end-to-end refreshes in under 2 hours.
- **Operational Resiliency:** 100% pipeline observability via Logic Apps exception workflows.
- **Decision Enablement:** Interactive Power BI dashboard evaluating deal size distributions and sales rep win rates in real time.

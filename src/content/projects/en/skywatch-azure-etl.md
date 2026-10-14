---
title: "SkyWatch ETL: Weather Data Architecture on Azure"
description: "Automated end-to-end ETL pipeline integrating the Open-Meteo API with Azure Database for PostgreSQL, orchestrated via Apache Airflow and Docker for resilient alert detection."
category: "engineering"
technologies: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Azure", "ETL", "IaC"]
githubUrl: "https://github.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/tree/main"
featured: true
order: 2
image: "https://raw.githubusercontent.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/refs/heads/main/Diagram/Diagram.png"
date: "2024-12-10"
tags: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Azure", "ETL", "IaC"]
repo: "https://github.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/tree/main"
summary: "Automated meteorological data pipeline in Microsoft Azure orchestrated with Apache Airflow."
---

### Contexto del Problema
Continuous meteorological monitoring requires reliable ingestion of time-series data from public endpoints prone to periodic connection resets and payload drift. The primary objective was to build a fault-tolerant cloud ETL pipeline that continuously retrieves hourly metrics, evaluates anomaly thresholds, and guarantees persistent analytical storage.

### Stack y Decisiones Técnicas
- **Apache Airflow:** Deployed as the orchestrator to schedule modular DAGs, manage task retries with exponential backoff, and provide end-to-end telemetry on pipeline status.
- **Python (Requests, Psycopg2, Pandas):** Utilized for RESTful data extraction, schema verification, and batch relational transformations.
- **Azure Database for PostgreSQL:** Chosen as the managed persistence layer in Azure for robust SQL querying, automated backups, and native time-series support.
- **Docker:** Ensured consistent multi-container environments across development and production execution for the Airflow Webserver, Scheduler, and Worker nodes.

### Arquitectura y Resultados
The pipeline triggers on a scheduled hourly basis. Raw JSON payloads are fetched from the Open-Meteo API, sanitized, and passed through business logic filters that classify weather severity before being committed into PostgreSQL within atomic transactions.
- **Pipeline Reliability:** 99.8% successful task completion rate across 1,200+ continuous hours of live execution.
- **Alert Latency:** Immediate anomaly detection and persistence within 1.8 seconds post-ingestion.
- **Resource Footprint:** Bulk upserts reducing database write-lock overhead and connection pooling limits.

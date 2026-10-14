---
title: "Hybrid Cloud Data Pipeline: Serverless Spark with Airflow & BigQuery"
description: "Hybrid cloud data pipeline bridging local orchestration with Google Cloud infrastructure via Dataproc Serverless, PySpark, and BigQuery for scalable e-commerce analytics."
category: "engineering"
technologies: ["Apache Airflow", "Google Cloud Storage", "Google Dataproc Serverless", "PySpark", "BigQuery", "Docker", "Python", "SQL"]
githubUrl: "https://github.com/CarlosAPard0/E-Commerce-Data-Pipeline/tree/main"
featured: true
order: 3
image: "https://raw.githubusercontent.com/CarlosAPard0/E-Commerce-Data-Pipeline/refs/heads/main/Images/Diagram.png"
date: "2024-11-20"
tags: ["Apache Airflow", "GCP", "PySpark", "BigQuery", "Docker", "Python", "SQL"]
repo: "https://github.com/CarlosAPard0/E-Commerce-Data-Pipeline/tree/main"
summary: "Scalable data pipeline on Google Cloud Platform transforming e-commerce transactions using PySpark and BigQuery."
---

### Contexto del Problema
Modern e-commerce architectures generate extensive transaction logs marked by severe traffic volatility during promotional peaks. Maintaining dedicated, always-on Apache Spark clusters incurs steep idle compute costs, while localized single-node compute quickly collapses under high batch volume pressure.

### Stack y Decisiones Técnicas
- **Apache Airflow (Astro CLI):** Hybrid orchestration engine governing localized pipeline logic that triggers managed GCP cloud jobs securely with least-privilege IAM credentials.
- **Google Cloud Storage (GCS):** Scalable cloud data lake separating raw landing stages from cleansed staging partitions.
- **Google Dataproc Serverless:** Distributed computing backend running dynamic **PySpark** jobs on demand, eliminating the operational overhead and ongoing expenses of idle infrastructure.
- **Google BigQuery:** Columnar analytical storage engine configured with date partitioning and category clustering to accelerate high-cardinality SQL exploration.

### Arquitectura y Resultados
The orchestrated pipeline uploads raw batches into GCS, dispatches a Serverless Dataproc Spark job for schema enforcement and currency conversions, and bulk-loads analytical aggregates into BigQuery.
- **Cost Reduction:** Achieved an estimated 42% cost savings relative to continuously active static VM clusters.
- **Batch Throughput:** Successfully processed 1.5M+ simulated transactional records in under 3.2 minutes per execution.
- **Query Performance:** BigQuery partitioned and clustered layout improved query execution latency by 65%.

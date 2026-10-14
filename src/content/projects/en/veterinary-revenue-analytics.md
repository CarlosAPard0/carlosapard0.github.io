---
title: "Power BI Dashboard - Veterinary Revenue Analytics"
description: "Financial analytics dashboard tracking revenue streams across treatments, surgical procedures, and services, evaluating operational factors impacting profitability."
category: "analysis"
technologies: ["Power BI", "SQL", "DAX", "Power Query", "Financial Analytics"]
githubUrl: "https://github.com/CarlosAPard0"
demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTZmOTVlMjgtYzk1NS00NDcyLWEyNDUtZmUzMDA0Njk0NmRlIiwidCI6ImRkMzgzNTFmLTkzZTUtNDQ3Mi05OWE4LWYzYTQ1NDM2NTBmNiIsImMiOjR9"
featured: false
order: 9
date: "2024-03-20"
tags: ["Power BI", "SQL", "DAX", "Power Query", "Financial Analytics"]
repo: "https://github.com/CarlosAPard0"
summary: "Financial and service performance analytics dashboard in Power BI for veterinary clinical care."
---

### Contexto del Problema
Veterinary medical networks oversee multifaceted revenue operations encompassing preventive visits, elective surgeries, spay/neuter campaigns, boarding, and pharmaceutical retail. Practice managers faced limited unified reporting regarding service margin profitability, clinician case capacity, and seasonal patient appointment downturns.

### Stack y Decisiones Técnicas
- **Power BI:** Chosen as the executive visualization and semantic reporting tool to deliver interactive drill-through financial dashboards.
- **SQL & Power Query:** Executed automated ETL staging queries to clean ledger line-items and normalize heterogeneous clinical procedure codes.
- **Dimensional Data Modeling:** Formulated a clean Star Schema connecting billing transactions to Clinician, Service Category, Animal Species, and Date dimensions.
- **DAX Measures:** Calculated core financial indicators including Average Invoice per Visit, Month-over-Month (MoM) revenue trajectory, and procedure category margin contributions.

### Arquitectura y Resultados
The reporting dashboard delivers transparent executive visibility across clinical departments with instant time-slicing and cross-filtering.
- **Revenue Driver Insight:** Analysis revealed that surgeries and sterilization campaigns generated 42% of gross clinical revenue while constituting only 18% of appointment volume.
- **Inventory Planning:** Seasonality tracking enabled clinical staff to reduce pharmaceutical and surgical consumable waste by an estimated 20%.
- **Clinician Caseload Tracking:** Provided equitable insights into clinician patient workloads and procedural revenue generation.

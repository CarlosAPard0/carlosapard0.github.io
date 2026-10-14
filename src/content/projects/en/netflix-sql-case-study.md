---
title: "Netflix: Data Engineering and Analysis Using SQL (SSMS)"
description: "Data cleaning, relational schema normalization, and exploratory analytics over a complex streaming catalog, optimizing SQL storage and discovering content performance patterns."
category: "analysis"
technologies: ["SQL", "SSMS", "Relational Modeling", "ETL", "Data Normalization"]
githubUrl: "https://github.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study"
featured: false
order: 5
image: "https://raw.githubusercontent.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study/refs/heads/main/Diagram.png"
date: "2024-08-15"
tags: ["SQL", "SSMS", "Relational Modeling", "ETL", "Data Normalization"]
repo: "https://github.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study"
summary: "SQL data engineering case study cleaning, normalizing, and querying raw streaming platform data."
---

### Contexto del Problema
Raw streaming catalog records frequently arrive plagued with data quality anomalies: comma-separated multi-values grouped into single columns (such as multiple directors and nested genre lists), irregular date formats, character encoding errors, and duplicate entries. This unhygienic state impedes robust business intelligence queries and analytical aggregation.

### Stack y Decisiones Técnicas
- **Microsoft SQL Server & SSMS:** Selected as the enterprise relational engine, leveraging T-SQL procedural routines, Clustered/Non-Clustered indexing, and native window functions.
- **Relational Normalization (3NF):** Transitioned a wide, denormalized flat CSV structure into modular entities (`Titles`, `Directors`, `Genres`, `Countries`) joined by many-to-many junction tables.
- **Strict Data Typing:** Converted oversized `NVARCHAR(MAX)` fields to sized datatypes (`DATE`, `INT`, `VARCHAR(n)`), maximizing memory buffer page density.

### Arquitectura y Resultados
The T-SQL pipeline executes procedural staging extraction, cleanses character string corruptions, normalizes delimited lists via `STRING_SPLIT` and `CROSS APPLY`, and structures clean relational tables. Advanced analytical queries were implemented using analytical window functions (`DENSE_RANK`, `PARTITION BY`).
- **Storage Footprint:** Realized an approximate 35% disk footprint reduction through schema normalization and type pruning.
- **Query Performance:** Sub-second execution speeds across multi-table joins analyzing top directors and genre longevity.
- **Data Hygiene:** 100% deduplication and resolution of corrupt string encodings.

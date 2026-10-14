---
title: "Power BI Dashboard - HR Talent Analytics"
description: "Interactive Business Intelligence dashboard identifying employee attrition drivers, evaluating job satisfaction, tenure distributions, and performance ratings using DAX."
category: "analysis"
technologies: ["Power BI", "SQL", "DAX", "Power Query", "Data Modeling"]
githubUrl: "https://github.com/CarlosAPard0"
demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiN2VmYmY4MDItZDMwNS00N2QzLWFmMmMtNGU1OTVhN2NkZjE2IiwidCI6ImRkMzgzNTFmLTkzZTUtNDQ3Mi05OWE4LWYzYTQ1NDM2NTBmNiIsImMiOjR9"
featured: false
order: 8
date: "2024-04-10"
tags: ["Power BI", "SQL", "DAX", "Power Query", "BI Analytics"]
repo: "https://github.com/CarlosAPard0"
summary: "Human Resources analytics dashboard in Power BI tracking turnover rates and workforce metrics."
---

### Contexto del Problema
High employee turnover induces significant operational friction and recruitment costs across corporate structures. Human resources teams frequently lack cohesive semantic data models connecting attrition patterns to salary bands, internal performance evaluations, and workplace satisfaction surveys.

### Stack y Decisiones Técnicas
- **Power BI:** Core platform for semantic data modeling, executive visualization layouts, and self-service analytical exploration.
- **Power Query (M):** Cleansing, transformation, and profiling of disparate human resource rosters, consolidating employee logs into structured dimensions.
- **Star Schema Design:** Constructed a central employee event fact table surrounded by clean Dimension tables (Department, Job Role, Evaluation Rating, Date Calendar).
- **Advanced DAX Formulas:** Authored custom formulas calculating voluntary turnover rate, rolling tenure averages, and weighted job satisfaction indexes.

### Arquitectura y Resultados
The reporting suite features interactive drill-downs filtered across departmental hierarchies, seniority brackets, and salary quartiles.
- **Attrition Diagnosis:** Pinpointed 3 operational departments exhibiting acute turnover risk within the initial 18 months of employment tenure.
- **Retention Driver:** Uncovered a 15% higher retention correlation in employee cohorts enrolled in active continuing education programs.
- **Operational Automation:** Replaced static monthly spreadsheet decks with automated dynamic dashboards featuring immediate cross-filtering response.

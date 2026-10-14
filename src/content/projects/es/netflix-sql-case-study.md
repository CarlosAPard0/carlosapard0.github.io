---
title: "Netflix: Ingeniería y Análisis con SQL (SSMS)"
description: "Limpieza, normalización y consultas analíticas sobre un dataset complejo de streaming, optimizando tipos de datos y modelando esquemas relacionales para métricas de negocio."
category: "analysis"
technologies: ["SQL", "SSMS", "Modelado Relacional", "ETL", "Normalización de Datos"]
githubUrl: "https://github.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study"
featured: false
order: 5
image: "https://raw.githubusercontent.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study/refs/heads/main/Diagram.png"
date: "2024-08-15"
tags: ["SQL", "SSMS", "Modelado Relacional", "ETL", "Normalización de Datos"]
repo: "https://github.com/CarlosAPard0/Netflix-Data-Engineering-Analytics-SQL-Case-Study"
summary: "Ingeniería y análisis de datos en SQL Server transformando un dataset no estructurado de streaming en un modelo relacional analítico."
---

### Contexto del Problema
Los datos no estructurados de catálogos multimedia suelen presentar graves problemas de calidad: valores múltiples concatenados con comas en una sola columna (géneros y directores), fechas con formatos heterogéneos, errores de codificación de caracteres y duplicados. Este estado impide realizar agregaciones precisas, evaluar la duración promedio de contenidos o identificar la productividad de directores a lo largo del tiempo.

### Stack y Decisiones Técnicas
- **Microsoft SQL Server & SSMS:** Motor relacional seleccionado para implementar procedimientos de limpieza atómicos con T-SQL, aprovechando índices clúster y no clúster para acelerar consultas analíticas.
- **Normalización Relacional (Tercera Forma Normal - 3FN):** Descomposición de la tabla plana única en entidades normalizadas independientes (`Titles`, `Directors`, `Genres`, `Countries`) vinculadas mediante tablas puente (*junction tables*).
- **Tipado Estricto:** Conversión de tipos genéricos (`NVARCHAR(MAX)`) a tipos optimizados (`INT`, `DATE`, `VARCHAR` acotados), reduciendo drásticamente el espacio de almacenamiento y paginación en memoria.

### Arquitectura y Resultados
El proceso ejecuta un script ETL en T-SQL que primero aísla y corrige anomalías de texto. Luego utiliza funciones de división (`STRING_SPLIT` y manipulación con `CROSS APPLY`) para poblar las tablas normalizadas, y finalmente ejecuta consultas analíticas avanzadas con funciones de ventana (`DENSE_RANK`, `ROW_NUMBER`, `COUNT OVER`).
- **Eficiencia de almacenamiento:** Reducción del 35% en espacio en disco tras normalización y ajuste estricto de tipos de datos.
- **Capacidad de consulta:** Resolución instantánea (sub-segundo) de métricas de negocio como directores con mayor catálogo por año y géneros de mayor crecimiento.
- **Calidad de datos:** 100% de registros limpios y validados libres de caracteres corruptos o registros duplicados.

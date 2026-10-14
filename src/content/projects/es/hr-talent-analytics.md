---
title: "Dashboard Power BI - Análisis de Talento Humano"
description: "Panel de inteligencia de negocios para el área de Talento Humano orientado a identificar factores críticos de deserción, satisfacción y desempeño laboral mediante DAX y Power BI."
category: "analysis"
technologies: ["Power BI", "SQL", "DAX", "Power Query", "Modelado de Datos"]
githubUrl: "https://github.com/CarlosAPard0"
demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiN2VmYmY4MDItZDMwNS00N2QzLWFmMmMtNGU1OTVhN2NkZjE2IiwidCI6ImRkMzgzNTFmLTkzZTUtNDQ3Mi05OWE4LWYzYTQ1NDM2NTBmNiIsImMiOjR9"
featured: false
order: 8
date: "2024-04-10"
tags: ["Power BI", "SQL", "DAX", "Power Query", "BI Analytics"]
repo: "https://github.com/CarlosAPard0"
summary: "Tablero analítico en Power BI evaluando métricas laborales clave y patrones de rotación en recursos humanos."
---

### Contexto del Problema
La alta rotación de personal genera importantes costes económicos y pérdida de conocimiento dentro de las organizaciones. Los departamentos de recursos humanos a menudo carecen de un modelo analítico unificado para relacionar la deserción de empleados con variables como antigüedad, niveles salariales, evaluaciones de desempeño y encuestas de satisfacción interna.

### Stack y Decisiones Técnicas
- **Power BI:** Plataforma seleccionada para el modelado semántico, visualizaciones dinámicas de alto impacto y publicación de tableros interactivos para la gerencia.
- **Power Query (M):** Extracción, limpieza y perfilado de tablas heterogéneas de nómina y recursos humanos, aplicando tipado estricto y eliminación de duplicados.
- **Modelado Dimensional en Estrella:** Diseño de una tabla de hechos de colaboradores vinculada con dimensiones independientes de tiempo, departamento, nivel de cargo y evaluaciones.
- **DAX (Data Analysis Expressions):** Formulación de métricas analíticas complejas como tasa de deserción voluntaria, índice de retención anual y puntuación media de satisfacción ponderada.

### Arquitectura y Resultados
El tablero estructura vistas interactivas con segmentaciones por departamento, bandas de antigüedad y cuartiles de compensación económica.
- **Diagnóstico de fuga de talento:** Identificación clara de los 3 departamentos con mayor riesgo de deserción durante los primeros 18 meses de contratación.
- **Impacto de medidas:** Correlación demostrada de un 15% mayor retención en cohortes de colaboradores con programas activos de capacitación y desarrollo profesional.
- **Toma de decisiones:** Eliminación de reportes manuales estáticos, proveyendo al equipo directivo un panel de consulta continua con filtros cruzados instantáneos.

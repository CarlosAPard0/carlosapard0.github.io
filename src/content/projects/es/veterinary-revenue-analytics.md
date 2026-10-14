---
title: "Dashboard Power BI - Ingresos en Veterinaria"
description: "Reporte analítico de ingresos por tratamientos, esterilización y servicios clínicos, permitiendo correlacionar factores operativos con rentabilidad financiera."
category: "analysis"
technologies: ["Power BI", "SQL", "DAX", "Power Query", "Finanzas & Analítica"]
githubUrl: "https://github.com/CarlosAPard0"
demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTZmOTVlMjgtYzk1NS00NDcyLWEyNDUtZmUzMDA0Njk0NmRlIiwidCI6ImRkMzgzNTFmLTkzZTUtNDQ3Mi05OWE4LWYzYTQ1NDM2NTBmNiIsImMiOjR9"
featured: false
order: 9
date: "2024-03-20"
tags: ["Power BI", "SQL", "DAX", "Power Query", "Finanzas & Analítica"]
repo: "https://github.com/CarlosAPard0"
summary: "Tablero analítico financiero en Power BI para control de ingresos y servicios en clínicas veterinarias."
---

### Contexto del Problema
Las clínicas veterinarias gestionan una cartera diversificada de ingresos que abarca consultas preventivas, cirugías complejas, planes de esterilización, hospitalización y venta de productos farmacéuticos. La gerencia carecía de un sistema analítico consolidado para identificar la contribución real de cada servicio al margen de rentabilidad y anticipar caídas de ingresos asociadas a la estacionalidad del año.

### Stack y Decisiones Técnicas
- **Power BI:** Plataforma empleada para el diseño visual de cuadros de mando financieros interactivos con segmentación multidimensional.
- **Consultas SQL & Power Query:** Extracción y estandarización de registros de facturación, normalizando códigos de servicio y depurando inconsistencias en transacciones anuladas.
- **Modelado Dimensional:** Construcción de un esquema relacional con tabla de hechos de facturación y dimensiones de servicio, profesional veterinario, especie animal y calendario contable.
- **DAX:** Formulación de métricas financieras especializadas como Ticket Promedio por Consulta, Crecimiento Mes a Mes (MoM) y Margen de Contribución por Categoría de Tratamiento.

### Arquitectura y Resultados
El modelo integra las líneas de servicio en una interfaz ejecutiva con filtros dinámicos por sede y período contable.
- **Concentración de ingresos:** Se detectó que las cirugías especializadas y las esterilizaciones representaban el 42% del volumen de facturación total, a pesar de constituir solo el 18% del total de citas atendidas.
- **Optimización de inventario:** La sincronización de patrones estacionales permitió ajustar el aprovisionamiento de anestésicos y consumibles quirúrgicos con un 20% menos de merma por caducidad.
- **Visibilidad operativa:** Monitoreo transparente del rendimiento y carga asistencial por profesional médico en tiempo real.

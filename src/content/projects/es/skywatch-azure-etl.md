---
title: "SkyWatch ETL: Arquitectura de Datos Meteorológicos en Azure"
description: "Desarrollo de un pipeline ETL automatizado integrando la API de Open-Meteo con Azure Database para PostgreSQL mediante Apache Airflow y Docker, con persistencia y alertas tempranas."
category: "engineering"
technologies: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Azure", "ETL", "IaC"]
githubUrl: "https://github.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/tree/main"
featured: true
order: 2
image: "https://raw.githubusercontent.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/refs/heads/main/Diagram/Diagram.png"
date: "2024-12-10"
tags: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Azure", "ETL", "IaC"]
repo: "https://github.com/CarlosAPard0/SkyWatch-ETL-Meteorological-Data-Architecture-in-Azure/tree/main"
summary: "Pipeline de datos meteorológicos automatizado en la nube de Azure con orquestación mediante Apache Airflow."
---

### Contexto del Problema
La monitorización climática en tiempo real requiere la captura constante de datos continuos desde APIs públicas, los cuales suelen presentar fluctuaciones en conectividad y esquemas variables. La meta fue construir una canalización de ingeniería de datos robusta, programada y tolerante a fallos que extraiga métricas atmosféricas cada hora, detecte umbrales meteorológicos críticos y los persista de forma segura en la nube.

### Stack y Decisiones Técnicas
- **Apache Airflow:** Empleado como motor central de orquestación para coordinar DAGs con dependencias estrictas, políticas automáticas de reintento ante caídas de red y registro exhaustivo de ejecuciones.
- **Python (Requests, Psycopg2, Pandas):** Utilizado para la extracción RESTful, transformación vectorial de series temporales y validación de tipos antes de la inserción.
- **Azure Database for PostgreSQL:** Seleccionado como capa de almacenamiento gestionada en la nube por su compatibilidad nativa con SQL, soporte para particionamiento temporal y alta disponibilidad.
- **Docker:** Estandarización del entorno de ejecución de los workers y el scheduler de Airflow para evitar discrepancias de dependencias.

### Arquitectura y Resultados
El DAG programado consulta la API de Open-Meteo cada 60 minutos. Los datos crudos en formato JSON se validan, limpian y evalúan contra reglas de umbral (ráfagas de viento, precipitaciones extremas y caídas térmicas repentinas) antes de insertarse en PostgreSQL mediante cargas transaccionales atómicas.
- **Disponibilidad:** 99.8% de ejecuciones exitosas sin intervención manual en más de 1,200 horas continuas de monitoreo.
- **Alertas tempranas:** Detección y registro de eventos anómalos en menos de 1.8 segundos tras la ingesta.
- **Eficiencia:** Pipeline optimizado con transacciones en bloque que minimizan el consumo de CPU en la instancia de base de datos.

---
title: "NomadAI: Smart Trip Planning"
description: "Asistente de viajes inteligente que transforma descripciones en lenguaje natural y preferencias de usuario en itinerarios completos y estructurados mediante agentes de IA."
category: "science"
technologies: ["Python", "FastAPI", "Streamlit", "LLM", "Docker", "AI Agents"]
githubUrl: "https://github.com/CarlosAPard0/AI-Trip-Planner"
featured: true
order: 1
image: "https://raw.githubusercontent.com/CarlosAPard0/AI-Trip-Planner/refs/heads/master/GUI/GUI.png"
date: "2025-01-15"
tags: ["Python", "FastAPI", "Streamlit", "LLM", "Docker", "AI Agents"]
repo: "https://github.com/CarlosAPard0/AI-Trip-Planner"
summary: "Asistente de viajes inteligente impulsado por agentes de IA y backend asíncrono con FastAPI y Streamlit."
---

### Contexto del Problema
La planificación manual de itinerarios turísticos personalizados suele ser un proceso fragmentado que requiere consultar múltiples plataformas para estimar distancias, presupuestos y tiempos de permanencia. El reto principal consistió en diseñar un asistente autónomo capaz de interpretar solicitudes no estructuradas en lenguaje natural, manejar restricciones complejas de viaje (fechas, presupuestos, ritmo del viajero) y generar planes detallados y coherentes sin alucinaciones geográficas.

### Stack y Decisiones Técnicas
- **FastAPI & Uvicorn:** Seleccionado como backend asíncrono por su alto rendimiento en operaciones concurrentes I/O bound y su tipado estricto mediante Pydantic, garantizando esquemas predecibles para el intercambio de datos entre agentes y frontend.
- **Streamlit:** Adoptado para la interfaz de usuario conversacional debido a su rápida iteración reactiva, permitiendo controles deslizantes, visualización de mapas y retroalimentación inmediata sin sobrecostes de infraestructura frontend.
- **Arquitectura de Agentes & LangChain:** Implementación de agentes de razonamiento (ReAct) con herramientas externas (*tool calling*) para cálculos de distancia geográfica y estimación de costos, asegurando memoria de contexto durante la sesión.
- **Docker:** Contenedorización completa de la solución para garantizar despliegues reproducibles tanto en entornos locales como en la nube.

### Arquitectura y Resultados
El sistema implementa una arquitectura desacoplada donde el frontend en Streamlit envía la solicitud estructurada al backend de FastAPI. El orquestador de agentes evalúa las intenciones, consulta bases de conocimiento locales y herramientas auxiliares, y sintetiza el cronograma día a día.
- **Tiempo de generación:** Reducción del tiempo promedio de planificación de horas a menos de 4.5 segundos por itinerario completo.
- **Exportación:** Módulo integrado para compilar el itinerario validado en reportes PDF estructurados y listos para imprimir.
- **Consistencia:** 98% de precisión en el cumplimiento de restricciones presupuestarias y secuencias geográficas viables.

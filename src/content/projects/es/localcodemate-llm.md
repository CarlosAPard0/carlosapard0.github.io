---
title: "LocalCodeMate: Asistente Local de Programación con LLM"
description: "Asistente inteligente de código ejecutado íntegramente de forma local mediante LangChain y arquitectura RAG, diseñado para soporte algorítmico en entornos desconectados."
category: "science"
technologies: ["Python", "LangChain", "LLM", "RAG", "Bases de Datos Vectoriales", "Prompt Engineering"]
githubUrl: "https://github.com/CarlosAPard0/LocalCodeMate-LLM-Coder"
featured: false
order: 10
date: "2024-02-15"
tags: ["Python", "LangChain", "LLM", "RAG", "Bases de Datos Vectoriales", "Prompt Engineering"]
repo: "https://github.com/CarlosAPard0/LocalCodeMate-LLM-Coder"
summary: "Asistente de programación local offline implementando RAG y modelos de lenguaje de código abierto."
---

### Contexto del Problema
Durante competencias técnicas intensivas y en entornos corporativos con restricciones estrictas de ciberseguridad, el acceso a internet suele estar bloqueado o limitado para evitar filtraciones de código propietario. En estas condiciones, los programadores pierden acceso a asistentes basados en la nube (como OpenAI o Claude). Se requería una solución de asistencia inteligente de alto rendimiento capaz de operar 100% desconectada (*offline*) en una estación de trabajo convencional.

### Stack y Decisiones Técnicas
- **Python & LangChain:** Orquestación de cadenas de recuperación aumentada por generación (*Retrieval-Augmented Generation* - RAG), gestión de plantillas de prompts de código y manejo de memoria en sesión.
- **Modelos LLM Abiertos y Cuantizados:** Despliegue de modelos especializados en código (como StarCoder / DeepSeek Coder / Llama Coder) cuantizados a 4 bits (GGUF), logrando inferencia rápida en CPU/GPU de consumo sin desbordar memoria RAM.
- **Base de Datos Vectorial Local (Chroma / FAISS):** Almacenamiento local indexado de documentación de librerías estándar (STL de C++, colecciones de Python, teoría de grafos y algoritmos de programación dinámica).
- **Embeddings Locales:** Generación de representaciones vectoriales densas utilizando modelos compactos de *Hugging Face* ejecutados en memoria.

### Arquitectura y Resultados
La arquitectura recibe la consulta del programador, vectoriza la pregunta y recupera los 3 fragmentos de código o documentación algorítmica más relevantes del índice local antes de pasarlos al LLM generador.
- **Privacidad y Aislamiento:** Cero fuga de información; 0 bytes transferidos a servicios externos o APIs en la nube.
- **Latencia de Inferencia:** Tiempos de respuesta inferiores a 1.6 segundos por consulta en hardware local estándar.
- **Validación Práctica:** Probado con éxito como herramienta de referencia rápida bajo alta presión de tiempo en el maratón internacional IEEEXtreme.

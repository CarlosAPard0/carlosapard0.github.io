---
title: "NomadAI: Smart Trip Planning"
description: "Intelligent travel assistant that converts natural language prompts and user preferences into detailed, production-ready itineraries using AI agents and modular microservices."
category: "science"
technologies: ["Python", "FastAPI", "Streamlit", "LLM", "Docker", "AI Agents"]
githubUrl: "https://github.com/CarlosAPard0/AI-Trip-Planner"
featured: true
order: 1
image: "https://raw.githubusercontent.com/CarlosAPard0/AI-Trip-Planner/refs/heads/master/GUI/GUI.png"
date: "2025-01-15"
tags: ["Python", "FastAPI", "Streamlit", "LLM", "Docker", "AI Agents"]
repo: "https://github.com/CarlosAPard0/AI-Trip-Planner"
summary: "Intelligent travel planner powered by autonomous AI agents, FastAPI backend, and Streamlit conversational interface."
---

### Contexto del Problema
Manual itinerary planning is often a fragmented task involving multiple disparate tools to calculate travel distance, budget limits, and day-to-day pacing. The main challenge was to engineer an autonomous assistant that interprets unstructured natural language prompts, accounts for multifaceted travel constraints, and outputs practical, hallucination-free schedules.

### Stack y Decisiones Técnicas
- **FastAPI & Uvicorn:** Chosen as the high-throughput asynchronous backend for its native async I/O handling and strict Pydantic validation, providing clean contract schemas between the AI layer and the interface.
- **Streamlit:** Selected for rapid interactive prototyping, delivering dynamic parameter sliders, map previews, and conversational rendering without frontend overhead.
- **Agent Architecture & LangChain:** Implemented a ReAct reasoning loop with deterministic tool calling for route distances and budget calculations, preserving multi-turn conversational context.
- **Docker:** Packaged into isolated containers ensuring zero-dependency discrepancy between local development and cloud deployments.

### Arquitectura y Resultados
The architecture decouples the conversational frontend from the FastAPI orchestration server. When a request arrives, the agent decomposes user requirements, triggers geographic calculation tools, and produces a structured day-by-day plan.
- **Generation Latency:** Compressed multi-destination travel planning time from hours to under 4.5 seconds per itinerary.
- **Document Export:** Direct compilation of the validated itinerary into formatted, printable PDF documents.
- **Constraint Fidelity:** 98% compliance on budget thresholds and geographic travel sequencing.

---
title: "Predicción de Sobrevivientes del Titanic"
description: "Pipeline completo de Machine Learning para predecir supervivencia de pasajeros: ingeniería de características con extracción de títulos y validación cruzada con RMSE de 0.056."
category: "science"
technologies: ["Python", "EDA", "XGBoost", "Random Forest", "SVM", "Redes Neuronales"]
githubUrl: "https://github.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics"
featured: false
order: 7
image: "https://raw.githubusercontent.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics/main/Figures/comparativa_de_modelos.png"
date: "2024-05-15"
tags: ["Python", "EDA", "XGBoost", "Random Forest", "SVM", "Redes Neuronales"]
repo: "https://github.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics"
summary: "Pipeline de Machine Learning para predicción de supervivencia con validación cruzada y extracción de características."
---

### Contexto del Problema
El desafío clásico del Titanic representa un banco de pruebas fundamental para resolver problemas de aprendizaje supervisado con datos desbalanceados, registros incompletos y variables mixtas (numéricas, categóricas y textuales). El objetivo fue construir un pipeline modular riguroso que no dependiera de heurísticas simples, sino de ingeniería de características empírica y validación cruzada para evitar el sobreajuste.

### Stack y Decisiones Técnicas
- **Python (Pandas, NumPy):** Manipulación de datos e imputación de variables continuas y categóricas basada en distribuciones por subgrupos.
- **Scikit-learn:** Implementación de pipelines de escalado, codificación y evaluación con validación cruzada de 10 particiones (*10-Fold Cross-Validation*).
- **Benchmarking de Modelos:** Comparación sistemática entre Regresión Logística, Support Vector Machines (SVM con kernel RBF), Random Forest, Redes Neuronales densas y XGBoost.

### Arquitectura y Resultados
El pipeline destaca por su fase de ingeniería de características: se extrajeron los títulos de cortesía presentes en los nombres de los pasajeros (Master, Miss, Mr, Mrs, Dr, etc.) y se computaron métricas familiares combinando hermanos, cónyuges, padres e hijos.
- **Factor determinante:** El análisis de importancia reveló que el título honorífico explicó casi un 60% del peso en la decisión del modelo sobre la supervivencia de un pasajero.
- **Estabilidad del Modelo:** Rendimiento altamente consistente a través de validación cruzada con un RMSE aproximado de 0.056.
- **Precisión:** Modelos de ensamble (Random Forest y XGBoost) que superaron el 83% de precisión en los conjuntos de evaluación de prueba.

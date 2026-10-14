---
title: "Predicción de Riesgo de Accidentes"
description: "Sistema predictivo para anticipar incidentes viales mediante factores humanos, ambientales y operativos, implementando XGBoost y análisis riguroso de residuos para evitar sesgos."
category: "science"
technologies: ["Python", "XGBoost", "Scikit-learn", "EDA", "Residual Analysis", "Pandas"]
githubUrl: "https://github.com/CarlosAPard0/Accident_Risk_Prediction"
featured: false
order: 6
image: "https://raw.githubusercontent.com/CarlosAPard0/Accident_Risk_Prediction/refs/heads/main/Figures/realidad_prediccion.png"
date: "2024-06-30"
tags: ["Python", "XGBoost", "Scikit-learn", "EDA", "Residual Analysis", "Machine Learning"]
repo: "https://github.com/CarlosAPard0/Accident_Risk_Prediction"
summary: "Modelo de Machine Learning para predecir riesgos viales con XGBoost y validación de residuos."
---

### Contexto del Problema
Los accidentes viales provocan graves pérdidas humanas y económicas, pero la mayoría de los análisis se realizan de manera reactiva tras ocurrido el siniestro. El objetivo técnico consistió en desarrollar un modelo predictivo capaz de anticipar niveles de riesgo y probabilidades de incidentes evaluando factores climáticos, estado de la calzada, densidad vehicular y patrones de conducta humana.

### Stack y Decisiones Técnicas
- **Python (Pandas, NumPy, Matplotlib, Seaborn):** Utilizado para el análisis exploratorio de datos (EDA), tratamiento de valores atípicos y detección de colinealidad multivariable.
- **Scikit-learn:** Creación de pipelines de transformación estandarizados (codificación One-Hot, escalado de variables continuas) y división estratificada de entrenamiento y prueba.
- **XGBoost:** Algoritmo principal de ensamble basado en árboles potenciados por gradiente (*gradient boosting*), seleccionado por su alta capacidad para modelar relaciones no lineales complejas y su mecanismo de regularización que previene el sobreajuste.
- **Análisis Estadístico de Residuos:** Evaluación metódica de la distribución de los errores del modelo para garantizar que no existan sesgos sistemáticos en zonas de alto peligro.

### Arquitectura y Resultados
El pipeline entrena múltiples modelos de referencia (Regresión Logística, Random Forest, SVM) y los compara contra XGBoost optimizado mediante búsqueda de hiperparámetros.
- **Rendimiento Predictivo:** XGBoost alcanzó el mejor desempeño global, superando a los baselines tradicionales en precisión y curva ROC-AUC.
- **Validación de Residuos:** Los errores exhibieron una distribución normal centrada en cero, descartando subestimaciones sistemáticas del riesgo en situaciones críticas.
- **Importancia de Variables:** Identificación cuantitativa de los factores más influyentes (velocidad relativa, condiciones de iluminación y estado del asfalto) para orientar medidas preventivas basadas en datos.

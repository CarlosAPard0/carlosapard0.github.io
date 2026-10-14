---
title: "Titanic Survival Analytics"
description: "End-to-end Machine Learning pipeline predicting passenger survival: advanced feature engineering with title extraction and stable cross-validation (RMSE ≈ 0.056)."
category: "science"
technologies: ["Python", "EDA", "XGBoost", "Random Forest", "SVM", "Neural Networks"]
githubUrl: "https://github.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics"
featured: false
order: 7
image: "https://raw.githubusercontent.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics/main/Figures/comparativa_de_modelos.png"
date: "2024-05-15"
tags: ["Python", "EDA", "XGBoost", "Random Forest", "SVM", "Neural Networks"]
repo: "https://github.com/CarlosAPard0/Titanic_Survival_Predictor_Analytics"
summary: "Comparative machine learning pipeline for passenger survival prediction with feature extraction and cross-validation."
---

### Contexto del Problema
The classic Titanic survival challenge serves as a benchmark for supervised classification over imperfect datasets featuring missing values, class imbalance, and mixed variable types. The goal was to build a rigorous data science pipeline that moves beyond simple heuristic baselines into feature-engineered modeling backed by cross-validation.

### Stack y Decisiones Técnicas
- **Python (Pandas, NumPy):** Data preprocessing, domain-specific median imputation, and categorical transformation.
- **Scikit-learn:** Construction of unified data transformation pipelines and execution of 10-fold cross-validation routines.
- **Algorithm Benchmarking:** Systematic comparison across Logistic Regression, Support Vector Machines (SVM with RBF kernel), Random Forest, multi-layer Neural Networks, and XGBoost.

### Arquitectura y Resultados
The pipeline emphasizes data-driven feature extraction: social honorific titles were parsed from passenger names, and family size structures were formulated by aggregating sibling, spouse, and parent counts.
- **Dominant Feature:** Honorific title extraction proved to be the single most influential variable, explaining nearly 60% of the model's split decisions for survival likelihood.
- **Cross-Validation Stability:** Highly bounded error metrics across folds with a steady RMSE of approximately 0.056.
- **Accuracy Benchmark:** Ensemble models (XGBoost and Random Forest) attained >83% out-of-sample classification accuracy.

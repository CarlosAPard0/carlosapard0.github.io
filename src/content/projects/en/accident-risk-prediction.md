---
title: "Accident Risk Prediction"
description: "Predictive machine learning system anticipating traffic accidents across human, environmental, and operational features, leveraging XGBoost and residual error analysis."
category: "science"
technologies: ["Python", "XGBoost", "Scikit-learn", "EDA", "Residual Analysis", "Pandas"]
githubUrl: "https://github.com/CarlosAPard0/Accident_Risk_Prediction"
featured: false
order: 6
image: "https://raw.githubusercontent.com/CarlosAPard0/Accident_Risk_Prediction/refs/heads/main/Figures/realidad_prediccion.png"
date: "2024-06-30"
tags: ["Python", "XGBoost", "Scikit-learn", "EDA", "Residual Analysis", "Machine Learning"]
repo: "https://github.com/CarlosAPard0/Accident_Risk_Prediction"
summary: "Predictive machine learning system for traffic accident risk using XGBoost and residual analysis."
---

### Contexto del Problema
Traffic collisions inflict severe economic and human damage, yet conventional risk analysis remains largely reactive post-incident. The objective was to build a machine learning framework capable of forecasting accident occurrence risk and severity by evaluating weather metrics, infrastructure status, traffic density, and driver behavioral indicators.

### Stack y Decisiones Técnicas
- **Python (Pandas, NumPy, Matplotlib, Seaborn):** Utilized for deep exploratory data analysis (EDA), multi-collinearity checks, and missing value processing.
- **Scikit-learn:** Orchestrated preprocessing pipelines (One-Hot encoding, feature scaling) and stratified k-fold dataset splitting.
- **XGBoost:** Adopted as the primary gradient boosting ensemble due to its robust regularization parameters (L1/L2 penalty) and superior performance handling high-dimensional non-linear interactions.
- **Residual Error Analysis:** Implemented statistical validation to verify homoscedasticity and eliminate systematic underestimation of catastrophic risk events.

### Arquitectura y Resultados
The modeling pipeline evaluated baseline algorithms (Logistic Regression, Random Forest, Support Vector Machines) against an extensively tuned XGBoost classifier.
- **Predictive Performance:** XGBoost outperformed all baselines across precision, recall, and ROC-AUC metrics.
- **Error Behavior:** Residual distribution demonstrated a zero-centered normal shape, confirming zero systemic bias in high-risk zones.
- **Feature Importance:** Ranked key operational risk drivers (relative vehicle velocity, lighting conditions, and wet road surfaces) providing actionable targets for preventative safety measures.

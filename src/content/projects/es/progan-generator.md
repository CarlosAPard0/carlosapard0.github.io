---
title: "Generador de Imágenes con Redes GANs (ProGAN)"
description: "Implementación y entrenamiento de redes generativas antagónicas de crecimiento progresivo (ProGAN) en PyTorch para síntesis de imágenes de alta resolución."
category: "science"
technologies: ["PyTorch", "Computer Vision", "GANs", "Deep Learning", "Python"]
githubUrl: "https://github.com/CarlosAPard0/ProGan-Cat-Generator"
featured: false
order: 11
date: "2023-11-10"
tags: ["PyTorch", "Computer Vision", "GANs", "Deep Learning", "Python"]
repo: "https://github.com/CarlosAPard0/ProGan-Cat-Generator"
summary: "Entrenamiento progresivo de redes neuronales generativas antagónicas con PyTorch y visión por computador."
---

### Contexto del Problema
El entrenamiento de Redes Generativas Antagónicas (GANs) tradicionales a resoluciones elevadas suele ser sumamente inestable. El discriminador suele sobrepasar tempranamente al generador, provocando divergencia en los gradientes, imágenes con artefactos severos o el fenómeno de colapso de modo (*mode collapse*), donde el generador solo produce una variedad mínima de salidas repetitivas.

### Stack y Decisiones Técnicas
- **PyTorch:** Framework de Deep Learning seleccionado por su grafo computacional dinámico, facilitando la adición progresiva de capas convolucionales y la manipulación de coeficientes de interpolación lineal ($\alpha$).
- **Arquitectura ProGAN (Progressive Growing):** Estrategia donde el generador y el discriminador comienzan aprendiendo estructuras globales a baja resolución (4x4 píxeles) y gradualmente incorporan nuevas capas convolucionales (8x8, 16x16, 32x32...) manteniendo estabilidad en el juego minimax.
- **WGAN-GP (Wasserstein GAN con Gradient Penalty):** Función de pérdida matemática implementada para evitar la saturación de gradientes y proveer una correlación continua entre la pérdida y la calidad visual de las imágenes generadas.
- **Normalización de Píxeles:** Normalización a nivel de canal por píxel (*pixelwise normalization*) en el generador para prevenir que las magnitudes de señal crezcan descontroladamente.

### Arquitectura y Resultados
El entrenamiento progresivo transiciona suavemente entre capas mediante una fase de desvanecimiento (*fade-in*), donde las nuevas capas de mayor resolución se ponderan gradualmente con el factor $\alpha \in [0, 1]$.
- **Estabilidad de entrenamiento:** Convergencia matemática libre de colapsos de modo a lo largo de todas las fases de resolución.
- **Calidad de imagen:** Generación de detalles faciales y texturas consistentes con fidelidad estructural visiblemente superior a arquitecturas DCGAN clásicas.
- **Gestión de recursos:** Implementación de programación dinámica de tamaño de lote (*minibatch sizing*) adaptada a la VRAM disponible en la GPU.

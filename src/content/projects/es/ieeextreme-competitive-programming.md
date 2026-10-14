---
title: "IEEEXtreme 19.0: Algoritmia y Estructuras de Datos Avanzadas"
description: "Resolución y análisis exhaustivo de problemas complejos de algoritmia y programación competitiva durante la competencia internacional de 24 horas IEEEXtreme 19.0."
category: "science"
technologies: ["Python", "C++", "Algoritmos", "Estructuras de Datos", "Programación Dinámica"]
githubUrl: "https://github.com/CarlosAPard0/IEEEXtreme-19-All-Problems"
featured: false
order: 12
date: "2023-10-28"
tags: ["Python", "C++", "Algoritmos", "Estructuras de Datos", "Programación Dinámica"]
repo: "https://github.com/CarlosAPard0/IEEEXtreme-19-All-Problems"
summary: "Resolución y optimización de desafíos algorítmicos complejos en C++ y Python para la competencia global IEEEXtreme."
---

### Contexto del Problema
La competencia global IEEEXtreme es un maratón ininterrumpido de 24 horas que desafía a miles de participantes a resolver problemas de alta complejidad algorítmica. El reto principal radica en diseñar soluciones óptimas que cumplan con restricciones extremas de tiempo de CPU (habitualmente inferiores a 1.0 segundo) y límites de memoria estrictos, donde cualquier solución con complejidad asintótica subóptima resulta en fallos por tiempo excedido (*Time Limit Exceeded* - TLE). La participación se llevó a cabo de forma individual frente a equipos habituales de 3 integrantes.

### Stack y Decisiones Técnicas
- **C++ (C++20 con STL optimizado):** Lenguaje principal para problemas de alta intensidad computacional, implementando trucos de entrada/salida rápida (`ios_base::sync_with_stdio(false); cin.tie(NULL);`) y estructuras de datos nativas de bajo nivel.
- **Python 3:** Utilizado para problemas que requerían manipulación intensiva de cadenas, aritmética de precisión arbitraria (*BigNum*) y prototipado rápido de algoritmos.
- **Estructuras de Datos Avanzadas:** Implementación de *Segment Trees* con propagación perezosa (*Lazy Propagation*), *Fenwick Trees* (Binary Indexed Trees), *Disjoint Set Union* (DSU) y *Tries*.
- **Técnicas Algorítmicas:** Programación Dinámica multidimensional, optimización por matriz exponencial, algoritmos de grafos (Dijkstra, Bellman-Ford, Tarjan para componentes fuertemente conexas y flujo máximo).

### Arquitectura y Resultados
El proyecto contiene el catálogo completo de problemas resueltos, con código fuente documentado, casos de prueba exhaustivos y justificación teórica de complejidad temporal y espacial $O(N)$ y $O(N \log N)$.
- **Cobertura Completa:** Resolución de todos los problemas del certamen documentados individualmente en un repositorio público de referencia.
- **Optimización Temporal:** 100% de los casos de prueba de evaluación ejecutados dentro de los márgenes milimétricos permitidos.
- **Rendimiento:** Validación de soluciones ante casos límite (*edge cases*) de alta exigencia algorítmica sin desbordamiento de memoria ni errores de recursión profunda.

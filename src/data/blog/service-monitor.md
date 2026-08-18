---
title: "Mi primer ServiceMonitor en OpenShift"
author: "Ricardo Pérez"
tags: ["OpenShift", "Prometheus", "LAB_001"]
description: "Notas iniciales para entender cómo una aplicación termina apareciendo en Prometheus."
pubDate: "2026-08-16"
draft: false
---

Este es un espacio de laboratorio.

La pregunta inicial es sencilla:

**¿Qué necesita una aplicación para que Prometheus pueda empezar a observarla?**

A grandes rasgos necesito:

1. una aplicación que exponga métricas;
2. un `Service`;
3. un `ServiceMonitor`;
4. que Prometheus tenga permitido descubrir ese recurso.

Más adelante voy a documentar aquí el flujo completo y los errores que vaya encontrando.

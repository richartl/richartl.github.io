---
title: "CPU y RAM no me dicen si mi servicio está sano"
author: "Ricardo Pérez"
tags: ["SRE", "Observabilidad", "NOTE_002"]
description: "La infraestructura puede verse bien mientras el usuario sigue esperando demasiado."
pubDate: "2026-08-17"
draft: false
---

Durante mucho tiempo es fácil caer en una idea:

> Si CPU, memoria y disco están bien, la aplicación está bien.

Pero esas son métricas de infraestructura.

Puedo tener una aplicación con CPU al 20% y memoria estable mientras el usuario espera varios segundos por una respuesta.

## Lo que quiero medir

Además de la infraestructura, necesito observar el servicio:

- disponibilidad;
- latencia;
- tasa de errores;
- tráfico.

Por ejemplo, un **p95 de 500 ms** significa que el 95% de las peticiones terminó en 500 ms o menos.

Eso me empieza a decir algo sobre la experiencia real del usuario.

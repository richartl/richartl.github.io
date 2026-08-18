---
title: "SLI, SLO y SLA: así terminé de entenderlos"
author: "Ricardo Pérez"
tags: ["SRE", "Observabilidad", "NOTE_001"]
description: "La forma sencilla en la que empecé a distinguir qué mido, qué objetivo tengo y qué estoy prometiendo."
pubDate: "2026-08-18"
draft: false
---

Cuando empecé a estudiar estos conceptos, las definiciones formales me parecían más complicadas de lo necesario.

La forma que finalmente me funcionó fue esta:

- **SLI:** lo que tengo.
- **SLO:** lo que quiero tener.
- **SLA:** lo que prometo contractualmente.

## SLI

Un **Service Level Indicator** es una medición real del comportamiento del servicio.

Por ejemplo:

```text
Disponibilidad actual: 99.72%
```

Eso no es una meta. Es lo que realmente ocurrió.

## SLO

El **Service Level Objective** es el objetivo interno que quiero alcanzar.

```text
SLO de disponibilidad: 99.9%
```

## SLA

El **Service Level Agreement** ya es un compromiso hacia afuera.

Si prometo contractualmente 99.5% y entrego menos, ya no tengo solamente un problema técnico: puedo tener un problema contractual.

## Lo que me hizo clic

La frase que quiero recordar es:

> SLI = mido. SLO = objetivo. SLA = promesa.

Todavía falta mucho por entender sobre error budgets, ventanas de medición y percentiles, pero esta distinción me dio una base sobre la cual seguir construyendo.

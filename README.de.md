---
layout: page
title: "🇩🇪 Deutsch"
permalink: /de/
lang: de
---

# [essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![OS](https://img.shields.io/badge/OS-Linux%20%7C%20macOS%20%7C%20Windows-blue)
[![CI](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/ci.yml/badge.svg)](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/ci.yml)
[![docker](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/docker.yml/badge.svg)](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/docker.yml)
[![GitHub Pages](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/europanite/essay_subtrex_analysis/actions/workflows/deploy-pages.yml)

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)

!["web_ui"](./assets/images/web_ui.png)

[PlayGround](https://europanite.github.io/essay_subtrex_analysis/)

# Essay SUBTLEX　Analysis

Eine Webanwendung, die einen englischen Essay analysiert und jeden Satz visualisiert.

## Was angezeigt wird

- **X axis:** Wortanzahl des Satzes
- **Y axis:** durchschnittliche Wortschwierigkeit, abgeleitet aus einem SUBTLEX-basierten Häufigkeitswörterbuch
- **Top histogram:** Verteilung der Wortanzahl pro Satz
- **Right histogram:** Verteilung der Satzschwierigkeit
- **Sentence table:** Metriken pro Satz, einschließlich der Anzahl unbekannter Wörter

## Wörterbuchstrategie

Die App versucht, das npm-Paket `subtlex-word-frequencies` zur Laufzeit dynamisch zu laden. Ein fallback mini dictionary ist gebündelt, damit die UI während der lokalen Entwicklung, in Tests und in Fällen, in denen sich der export shape des Pakets von den Erwartungen unterscheidet, weiterhin funktioniert.

`frontend/app/lib/analysis/subtlexLoader.ts` normalisiert mehrere gängige shapes:

- direkte `{ word: score }` maps
- arrays von objects wie `{ word, zipf }`
- objects mit fields wie `frequency`, `count`, `fpm`, `lg10WF` oder `zipf`

## Erste Schritte

### Local Node workflow

```bash
cd frontend/app
npm install
npm start
```

### Docker workflow

```bash
docker compose up --build
```

### Tests

```bash
docker compose -f docker-compose.test.yml up --build --exit-code-from frontend_test
```

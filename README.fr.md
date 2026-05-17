---
layout: page
title: "🇫🇷 Français"
permalink: /fr/
lang: fr
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

Une application web qui analyse une dissertation en anglais et visualise chaque phrase.

## Ce qui est affiché

- **X axis:** nombre de mots de la phrase
- **Y axis:** difficulté moyenne des mots, dérivée d’un dictionnaire de fréquences basé sur SUBTLEX
- **Top histogram:** distribution du nombre de mots par phrase
- **Right histogram:** distribution de la difficulté des phrases
- **Sentence table:** métriques par phrase, y compris le nombre de mots inconnus

## Stratégie du dictionnaire

L’application tente de charger dynamiquement, à l’exécution, le package npm `subtlex-word-frequencies`. Un fallback mini dictionary est inclus afin que l’UI continue de fonctionner pendant le développement local, les tests et les cas où l’export shape du package diffère des attentes.

`frontend/app/lib/analysis/subtlexLoader.ts` normalise plusieurs shapes courantes:

- maps directs `{ word: score }`
- arrays d’objects tels que `{ word, zipf }`
- objects avec des fields comme `frequency`, `count`, `fpm`, `lg10WF` ou `zipf`

## Bien démarrer

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

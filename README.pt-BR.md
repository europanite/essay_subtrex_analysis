---
layout: page
title: "🇧🇷 PT-BR"
permalink: /pt-BR/
lang: pt-BR
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

Uma aplicação web que analisa uma redação em inglês e visualiza cada frase.

## O que ela mostra

- **X axis:** contagem de palavras da frase
- **Y axis:** dificuldade média das palavras derivada de um dicionário de frequência baseado em SUBTLEX
- **Top histogram:** distribuição da contagem de palavras por frase
- **Right histogram:** distribuição da dificuldade das frases
- **Sentence table:** métricas por frase, incluindo contagens de palavras desconhecidas

## Estratégia do dicionário

A aplicação tenta carregar dinamicamente, em tempo de execução, o pacote npm `subtlex-word-frequencies`. Um fallback mini dictionary é incluído para que a UI continue funcionando durante o desenvolvimento local, os testes e os casos em que o export shape do pacote difere do esperado.

`frontend/app/lib/analysis/subtlexLoader.ts` normaliza várias shapes comuns:

- maps diretos `{ word: score }`
- arrays de objects como `{ word, zipf }`
- objects com fields como `frequency`, `count`, `fpm`, `lg10WF` ou `zipf`

## Primeiros passos

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

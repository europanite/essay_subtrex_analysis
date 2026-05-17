---
layout: page
title: "🇰🇷 한국어"
permalink: /ko/
lang: ko
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

<p align="right">
  <a href="./README.md">🇺🇸 English</a> |
  <a href="./README.hi.md">🇮🇳 हिंदी</a> |
  <a href="./README.ja.md">🇯🇵 日本語</a> |
  <a href="./README.zh-CN.md">🇨🇳 简体中文</a> |
  <a href="./README.es.md">🇪🇸 Español</a> |
  <a href="./README.pt-BR.md">🇧🇷 Português (Brasil)</a> |
  <a href="./README.ko.md">🇰🇷 한국어</a> |
  <a href="./README.de.md">🇩🇪 Deutsch</a> |
  <a href="./README.fr.md">🇫🇷 Français</a>
</p>

!["web_ui"](./assets/images/web_ui.png)

[PlayGround](https://europanite.github.io/essay_subtrex_analysis/)

# Essay SUBTLEX　Analysis

영어 에세이를 분석하고 각 문장을 시각화하는 웹 애플리케이션입니다.

## 표시 내용

- **X axis:** 문장의 단어 수
- **Y axis:** SUBTLEX 기반 빈도 사전에서 계산한 평균 단어 난이도
- **Top histogram:** 문장 단어 수 분포
- **Right histogram:** 문장 난이도 분포
- **Sentence table:** 알 수 없는 단어 수를 포함한 문장별 메트릭

## 사전 전략

이 앱은 런타임에 npm 패키지 `subtlex-word-frequencies`를 동적으로 로드하려고 시도합니다. fallback mini dictionary가 함께 포함되어 있어 로컬 개발, 테스트, 그리고 패키지의 export shape가 예상과 다른 경우에도 UI가 계속 동작합니다.

`frontend/app/lib/analysis/subtlexLoader.ts`는 여러 일반적인 shapes를 normalize합니다:

- 직접적인 `{ word: score }` maps
- `{ word, zipf }`와 같은 objects arrays
- `frequency`, `count`, `fpm`, `lg10WF` 또는 `zipf` 같은 fields가 있는 objects

## 시작하기

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

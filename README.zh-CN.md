---
layout: page
title: "🇨🇳 中文"
permalink: /zh-CN/
lang: zh-CN
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

一个用于分析英文作文并可视化每个句子的 Web 应用程序。

## 显示内容

- **X axis:** 句子词数
- **Y axis:** 基于 SUBTLEX 频率词典得出的平均单词难度
- **Top histogram:** 句子词数分布
- **Right histogram:** 句子难度分布
- **Sentence table:** 每个句子的指标，包括未知词数量

## 词典策略

该应用会在运行时尝试动态加载 npm 包 `subtlex-word-frequencies`。同时内置了一个 fallback mini dictionary，因此在本地开发、测试，以及包的 export shape 与预期不同时，UI 仍然可以工作。

`frontend/app/lib/analysis/subtlexLoader.ts` 会 normalize 几种常见 shapes:

- 直接的 `{ word: score }` maps
- 类似 `{ word, zipf }` 的 objects arrays
- 带有 `frequency`, `count`, `fpm`, `lg10WF` 或 `zipf` 等 fields 的 objects

## 开始使用

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

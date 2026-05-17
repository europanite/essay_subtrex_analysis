---
layout: page
title: "🇮🇳 हिन्दी"
permalink: /hi/
lang: hi
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

एक वेब एप्लिकेशन जो अंग्रेज़ी निबंध का विश्लेषण करता है और हर वाक्य को विज़ुअलाइज़ करता है।

## यह क्या दिखाता है

- **X axis:** वाक्य में शब्दों की संख्या
- **Y axis:** SUBTLEX-आधारित फ़्रीक्वेंसी डिक्शनरी से निकाली गई औसत शब्द कठिनाई
- **Top histogram:** वाक्य शब्द-संख्या वितरण
- **Right histogram:** वाक्य कठिनाई वितरण
- **Sentence table:** अज्ञात शब्दों की संख्या सहित प्रत्येक वाक्य के मेट्रिक्स

## डिक्शनरी रणनीति

ऐप रनटाइम पर npm पैकेज `subtlex-word-frequencies` को डायनामिक रूप से लोड करने की कोशिश करता है। एक fallback mini dictionary साथ में शामिल है, ताकि UI लोकल डेवलपमेंट, टेस्ट, और उन मामलों में भी काम करता रहे जहाँ पैकेज का export shape अपेक्षा से अलग हो।

`frontend/app/lib/analysis/subtlexLoader.ts` कई सामान्य shapes को normalize करता है:

- सीधे `{ word: score }` maps
- `{ word, zipf }` जैसे objects की arrays
- `frequency`, `count`, `fpm`, `lg10WF`, या `zipf` जैसे fields वाले objects

## शुरू करना

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

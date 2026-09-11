<!-- P2M_REPORT -->
<!-- GENERATED at 2026-05-25 17:22:11 -->
# Project Export: essay_subtrex_analysis

## Overview

- Root: `/home/skinner/essay_subtrex_analysis`
- Files: **66**
- Total size: **386563 bytes**
- Total LOC: 7985 | SLOC: 7030 | TODOs: 0

### Language mix
- markdown: 16
- javascript: 10
- typescript: 10
- tsx: 10
- plain: 7
- yaml: 6
- json: 3
- html: 2
- dockerfile: 1
- python: 1

### Top 12 largest files (bytes)
- `frontend/app/lib/problems_of_philosophy.txt` — 269539 bytes
- `LICENSE` — 11340 bytes
- `frontend/app/lib/analysis/text.ts` — 9959 bytes
- `frontend/app/components/JointDistributionChart.tsx` — 9315 bytes
- `frontend/app/screens/HomeScreen.tsx` — 8012 bytes
- `frontend/app/lib/analysis/subtlexLoader.ts` — 4439 bytes
- `README.hi.md` — 4097 bytes
- `CODE_OF_CONDUCT.md` — 4085 bytes
- `frontend/app/components/ScatterPlot.tsx` — 4012 bytes
- `frontend/app/components/Histogram.tsx` — 3680 bytes
- `README.fr.md` — 3347 bytes
- `README.es.md` — 3346 bytes

### Top 12 longest files (LOC)
- `frontend/app/lib/problems_of_philosophy.txt` — 4360 LOC
- `frontend/app/lib/analysis/text.ts` — 381 LOC
- `frontend/app/components/JointDistributionChart.tsx` — 368 LOC
- `frontend/app/screens/HomeScreen.tsx` — 239 LOC
- `LICENSE` — 201 LOC
- `frontend/app/lib/analysis/subtlexLoader.ts` — 185 LOC
- `frontend/app/components/ScatterPlot.tsx` — 119 LOC
- `frontend/app/components/Histogram.tsx` — 118 LOC
- `frontend/app/__tests__/analysis.test.ts` — 92 LOC
- `frontend/app/components/TextPanel.tsx` — 92 LOC
- `frontend/app/components/SentenceTable.tsx` — 83 LOC
- `.github/workflows/ci.yml` — 80 LOC

### Project tree (included subset)
```
essay_subtrex_analysis/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy-pages.yml
│   │   ├── docker.yml
│   │   └── pull_request_template.md
│   └── pull_request_template.md
├── frontend/
│   ├── app/
│   │   ├── .expo/
│   │   │   ├── devices.json
│   │   │   └── README.md
│   │   ├── __mocks__/
│   │   │   ├── expoAssetMock.js
│   │   │   ├── expoConstantsMock.js
│   │   │   ├── expoMock.js
│   │   │   ├── expoRouterMock.js
│   │   │   ├── fileMock.js
│   │   │   └── styleMock.js
│   │   ├── __tests__/
│   │   │   ├── analysis.test.ts
│   │   │   └── smoke.test.tsx
│   │   ├── components/
│   │   │   ├── Histogram.tsx
│   │   │   ├── InfoCard.tsx
│   │   │   ├── JointDistributionChart.tsx
│   │   │   ├── ScatterPlot.tsx
│   │   │   ├── SentenceTable.tsx
│   │   │   ├── SettingsBar.tsx
│   │   │   └── TextPanel.tsx
│   │   ├── lib/
│   │   │   ├── analysis/
│   │   │   │   ├── sampleEssay.ts
│   │   │   │   ├── subtlexFallback.ts
│   │   │   │   ├── subtlexLoader.ts
│   │   │   │   ├── text.ts
│   │   │   │   └── types.ts
│   │   │   ├── constants.ts
│   │   │   └── problems_of_philosophy.txt
│   │   ├── public/
│   │   │   ├── 404.html
│   │   │   ├── _config.yml
│   │   │   └── google095bf08db4fb15d0.html
│   │   ├── screens/
│   │   │   └── HomeScreen.tsx
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── babel.config.js
│   │   ├── declarations.d.ts
│   │   ├── index.ts
│   │   ├── jest.config.js
│   │   ├── jest.setup.ts
│   │   ├── jest.setupFiles.js
│   │   ├── metro.config.js
│   │   └── tsconfig.json
│   ├── Dockerfile
│   └── Dockerfile.test
├── script/
│   └── reflowed.py
├── .dockerignore
├── .env.example
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.test.yml
├── docker-compose.yml
├── LICENSE
├── memo.txt
├── README.de.md
├── README.es.md
├── README.fr.md
├── README.hi.md
├── README.ja.md
├── README.ko.md
├── README.md
├── README.pt-BR.md
├── README.zh-CN.md
└── SECURITY.md
```

## Table of contents (files)

- 1. [.dockerignore](#.dockerignore)
- 2. [.env.example](#.env.example)
- 3. [.github/ISSUE_TEMPLATE/bug_report.md](#.github-ISSUE_TEMPLATE-bug_report.md)
- 4. [.github/pull_request_template.md](#.github-pull_request_template.md)
- 5. [.github/workflows/ci.yml](#.github-workflows-ci.yml)
- 6. [.github/workflows/deploy-pages.yml](#.github-workflows-deploy-pages.yml)
- 7. [.github/workflows/docker.yml](#.github-workflows-docker.yml)
- 8. [.github/workflows/pull_request_template.md](#.github-workflows-pull_request_template.md)
- 9. [.gitignore](#.gitignore)
- 10. [CODE_OF_CONDUCT.md](#CODE_OF_CONDUCT.md)
- 11. [CONTRIBUTING.md](#CONTRIBUTING.md)
- 12. [docker-compose.test.yml](#docker-compose.test.yml)
- 13. [docker-compose.yml](#docker-compose.yml)
- 14. [frontend/app/.expo/devices.json](#frontend-app-.expo-devices.json)
- 15. [frontend/app/.expo/README.md](#frontend-app-.expo-README.md)
- 16. [frontend/app/__mocks__/expoAssetMock.js](#frontend-app-__mocks__-expoAssetMock.js)
- 17. [frontend/app/__mocks__/expoConstantsMock.js](#frontend-app-__mocks__-expoConstantsMock.js)
- 18. [frontend/app/__mocks__/expoMock.js](#frontend-app-__mocks__-expoMock.js)
- 19. [frontend/app/__mocks__/expoRouterMock.js](#frontend-app-__mocks__-expoRouterMock.js)
- 20. [frontend/app/__mocks__/fileMock.js](#frontend-app-__mocks__-fileMock.js)
- 21. [frontend/app/__mocks__/styleMock.js](#frontend-app-__mocks__-styleMock.js)
- 22. [frontend/app/__tests__/analysis.test.ts](#frontend-app-__tests__-analysis.test.ts)
- 23. [frontend/app/__tests__/smoke.test.tsx](#frontend-app-__tests__-smoke.test.tsx)
- 24. [frontend/app/app.json](#frontend-app-app.json)
- 25. [frontend/app/App.tsx](#frontend-app-App.tsx)
- 26. [frontend/app/babel.config.js](#frontend-app-babel.config.js)
- 27. [frontend/app/components/Histogram.tsx](#frontend-app-components-Histogram.tsx)
- 28. [frontend/app/components/InfoCard.tsx](#frontend-app-components-InfoCard.tsx)
- 29. [frontend/app/components/JointDistributionChart.tsx](#frontend-app-components-JointDistributionChart.tsx)
- 30. [frontend/app/components/ScatterPlot.tsx](#frontend-app-components-ScatterPlot.tsx)
- 31. [frontend/app/components/SentenceTable.tsx](#frontend-app-components-SentenceTable.tsx)
- 32. [frontend/app/components/SettingsBar.tsx](#frontend-app-components-SettingsBar.tsx)
- 33. [frontend/app/components/TextPanel.tsx](#frontend-app-components-TextPanel.tsx)
- 34. [frontend/app/declarations.d.ts](#frontend-app-declarations.d.ts)
- 35. [frontend/app/index.ts](#frontend-app-index.ts)
- 36. [frontend/app/jest.config.js](#frontend-app-jest.config.js)
- 37. [frontend/app/jest.setup.ts](#frontend-app-jest.setup.ts)
- 38. [frontend/app/jest.setupFiles.js](#frontend-app-jest.setupFiles.js)
- 39. [frontend/app/lib/analysis/sampleEssay.ts](#frontend-app-lib-analysis-sampleEssay.ts)
- 40. [frontend/app/lib/analysis/subtlexFallback.ts](#frontend-app-lib-analysis-subtlexFallback.ts)
- 41. [frontend/app/lib/analysis/subtlexLoader.ts](#frontend-app-lib-analysis-subtlexLoader.ts)
- 42. [frontend/app/lib/analysis/text.ts](#frontend-app-lib-analysis-text.ts)
- 43. [frontend/app/lib/analysis/types.ts](#frontend-app-lib-analysis-types.ts)
- 44. [frontend/app/lib/constants.ts](#frontend-app-lib-constants.ts)
- 45. [frontend/app/lib/problems_of_philosophy.txt](#frontend-app-lib-problems_of_philosophy.txt)
- 46. [frontend/app/metro.config.js](#frontend-app-metro.config.js)
- 47. [frontend/app/public/404.html](#frontend-app-public-404.html)
- 48. [frontend/app/public/_config.yml](#frontend-app-public-_config.yml)
- 49. [frontend/app/public/google095bf08db4fb15d0.html](#frontend-app-public-google095bf08db4fb15d0.html)
- 50. [frontend/app/screens/HomeScreen.tsx](#frontend-app-screens-HomeScreen.tsx)
- 51. [frontend/app/tsconfig.json](#frontend-app-tsconfig.json)
- 52. [frontend/Dockerfile](#frontend-Dockerfile)
- 53. [frontend/Dockerfile.test](#frontend-Dockerfile.test)
- 54. [LICENSE](#LICENSE)
- 55. [memo.txt](#memo.txt)
- 56. [README.de.md](#README.de.md)
- 57. [README.es.md](#README.es.md)
- 58. [README.fr.md](#README.fr.md)
- 59. [README.hi.md](#README.hi.md)
- 60. [README.ja.md](#README.ja.md)
- 61. [README.ko.md](#README.ko.md)
- 62. [README.md](#README.md)
- 63. [README.pt-BR.md](#README.pt-BR.md)
- 64. [README.zh-CN.md](#README.zh-CN.md)
- 65. [script/reflowed.py](#script-reflowed.py)
- 66. [SECURITY.md](#SECURITY.md)

---

## Files

<a id=".dockerignore"></a>
### 1. `.dockerignore`
- Size: 134 bytes | LOC: 16 | SLOC: 16 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: f479c3535a25

#### Brief
.git
.gitignore

#### Auto Summary
.git

#### Content

```
.git
.gitignore
node_modules
**/node_modules
.expo
.expo-shared
dist
web-build
build
coverage
reports
.vscode
.idea
.env
.env.*
*.log
```

<a id=".env.example"></a>
### 2. `.env.example`
- Size: 98 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 25488e266631

#### Brief
# No backend is required for this project.
EXPO_TUNNEL=false

#### Auto Summary
# No backend is required for this project.

#### Content

```
# No backend is required for this project.
EXPO_TUNNEL=false
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
```

<a id=".github-ISSUE_TEMPLATE-bug_report.md"></a>
### 3. `.github/ISSUE_TEMPLATE/bug_report.md`
- Size: 666 bytes | LOC: 30 | SLOC: 24 | TODOs: 0 | Modified: 2026-03-19 12:08:03 | SHA1: 4b4d2b96744a

#### Brief
---
name: Bug Report

#### Auto Summary
Description

#### Content (verbatim)

```markdown
---
name: Bug Report
about: Create a report to help us improve
title: "[Bug] "
labels: bug
assignees: ''
---

## Description
<!-- A clear and concise description of what the bug is -->

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
<!-- A clear and concise description of what you expected to happen -->

## Screenshots
<!-- If applicable, add screenshots to help explain your problem -->

## Environment
- OS: [e.g. Ubuntu 22.04]
- Browser/Version: [e.g. Chrome 117]
- Node/Python Version: [e.g. Node 18, Python 3.10]

## Additional Context
<!-- Add any other context about the problem here -->
```

<a id=".github-pull_request_template.md"></a>
### 4. `.github/pull_request_template.md`
- Size: 744 bytes | LOC: 27 | SLOC: 21 | TODOs: 0 | Modified: 2026-03-22 12:57:49 | SHA1: 1b6e1aab4d9a

#### Brief
# Pull Request

#### Auto Summary
Pull Request

#### Content (verbatim)

```markdown
# Pull Request

## Overview
<!-- Briefly describe the purpose of this PR and the problem it solves   -->

## Changes
<!-- List the main changes made in this PR -->
- 

## Testing
<!-- Describe how you tested the changes -->
- [ ] Built and ran locally without errors
- [ ] All tests passed
- [ ] Verified functionality manually (describe how)

## Related Issues
<!-- Link to related issues if applicable -->
- Closes #

## Checklist
- [ ] Code is clean and free of unnecessary comments/debug prints
- [ ] Proper naming conventions and documentation are followed
- [ ] Updated documentation/README if necessary
- [ ] CI pipeline passes successfully

## Notes for Reviewers
<!-- Additional context or things reviewers should pay attention to -->
```

<a id=".github-workflows-ci.yml"></a>
### 5. `.github/workflows/ci.yml`
- Size: 1738 bytes | LOC: 80 | SLOC: 64 | TODOs: 0 | Modified: 2026-05-17 18:11:31 | SHA1: b13d8692fc95

#### Brief
name: CI

#### Auto Summary
name: CI

#### Content

```yaml
name: CI

on:
  push:
  pull_request:

concurrency:
  group: service-ci-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

jobs:
  test:
    name: Jest on Node ${{ matrix.node }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node: [20, 22, 24]

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Use Node ${{ matrix.node }}
        uses: actions/setup-node@v6
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        working-directory: frontend/app
        run: npm install

      - name: Type check
        working-directory: frontend/app
        run: npx tsc --noEmit

      - name: Run Jest
        working-directory: frontend/app
        run: npm test -- --ci --runInBand --coverage --verbose

      - name: Upload coverage
        if: always()
        uses: actions/upload-artifact@v6
        with:
          name: coverage-node${{ matrix.node }}
          path: frontend/app/coverage
          if-no-files-found: warn

  web-export-smoke:
    name: Expo web export
    needs: test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Use Node 24
        uses: actions/setup-node@v6
        with:
          node-version: 24

      - name: Install dependencies
        working-directory: frontend/app
        run: npm install

      - name: Build
        working-directory: frontend/app
        run: npx expo export -p web

      - name: Upload dist artifact
        if: always()
        uses: actions/upload-artifact@v6
        with:
          name: expo-web-dist
          path: frontend/app/dist
          if-no-files-found: error
```

<a id=".github-workflows-deploy-pages.yml"></a>
### 6. `.github/workflows/deploy-pages.yml`
- Size: 1101 bytes | LOC: 55 | SLOC: 44 | TODOs: 0 | Modified: 2026-05-25 17:06:12 | SHA1: f73b3b3a69d9

#### Brief
name: GitHub Pages

#### Auto Summary
name: GitHub Pages

#### Content

```yaml
name: GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: service-pages
  cancel-in-progress: true

jobs:
  build:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Use Node 24
        uses: actions/setup-node@v6
        with:
          node-version: 24

      - name: Install dependencies
        working-directory: frontend/app
        run: npm install

      - name: Export web bundle
        working-directory: frontend/app
        run: npx expo export -p web

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v5
        with:
          path: frontend/app/dist

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

<a id=".github-workflows-docker.yml"></a>
### 7. `.github/workflows/docker.yml`
- Size: 609 bytes | LOC: 28 | SLOC: 22 | TODOs: 0 | Modified: 2026-05-25 17:06:37 | SHA1: ea4a2b47abb6

#### Brief
name: Docker

#### Auto Summary
name: Docker

#### Content

```yaml
name: Docker

on:
  push:
  pull_request:
  workflow_dispatch:

jobs:
  docker-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v4

      - name: Run tests via docker compose
        run: docker compose -f docker-compose.test.yml up --build --exit-code-from frontend_test

      - name: Upload reports
        if: always()
        uses: actions/upload-artifact@v6
        with:
          name: frontend-reports
          path: reports/frontend
          if-no-files-found: warn
```

<a id=".github-workflows-pull_request_template.md"></a>
### 8. `.github/workflows/pull_request_template.md`
- Size: 744 bytes | LOC: 27 | SLOC: 21 | TODOs: 0 | Modified: 2026-03-19 12:08:03 | SHA1: 1b6e1aab4d9a

#### Brief
# Pull Request

#### Auto Summary
Pull Request

#### Content (verbatim)

```markdown
# Pull Request

## Overview
<!-- Briefly describe the purpose of this PR and the problem it solves   -->

## Changes
<!-- List the main changes made in this PR -->
- 

## Testing
<!-- Describe how you tested the changes -->
- [ ] Built and ran locally without errors
- [ ] All tests passed
- [ ] Verified functionality manually (describe how)

## Related Issues
<!-- Link to related issues if applicable -->
- Closes #

## Checklist
- [ ] Code is clean and free of unnecessary comments/debug prints
- [ ] Proper naming conventions and documentation are followed
- [ ] Updated documentation/README if necessary
- [ ] CI pipeline passes successfully

## Notes for Reviewers
<!-- Additional context or things reviewers should pay attention to -->
```

<a id=".gitignore"></a>
### 9. `.gitignore`
- Size: 419 bytes | LOC: 40 | SLOC: 35 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 834daba3ecec

#### Brief
# Node / package managers
node_modules/

#### Auto Summary
# Node / package managers

#### Content

```
# Node / package managers
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
package-lock.json.*
yarn.lock.*
pnpm-lock.yaml.*

# TypeScript build info
*.tsbuildinfo

# Expo / React Native
.expo/
.expo-shared/
dist/
web-build/
web/
build/
coverage/
reports/

# Native
ios/
android/

# Env / secrets
.env
.env.*.local
*.env
*.env.local

# OS / editor
.DS_Store
.vscode/
.idea/
*.swp
*.swo
*.log
```

<a id="CODE_OF_CONDUCT.md"></a>
### 10. `CODE_OF_CONDUCT.md`
- Size: 4085 bytes | LOC: 68 | SLOC: 50 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 724cc33f0dca

#### Brief
# Contributor Covenant Code of Conduct

#### Auto Summary
Contributor Covenant Code of Conduct

#### Content (verbatim)

```markdown
# Contributor Covenant Code of Conduct

## Our Pledge
We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards
Examples of behavior that contributes to a positive environment include:
- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Taking responsibility and apologizing to those affected by our mistakes
- Focusing on what is best for the community, not just for ourselves

Examples of unacceptable behavior include:
- The use of sexualized language or imagery, and sexual attention or advances
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others’ private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities
Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

## Scope
This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces.

## Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the maintainers of this project. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines
Community leaders will follow these guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

1. **Correction**  
- *Impact*: Use of inappropriate language or other behavior deemed unprofessional.  
- *Consequence*: A private, written warning, with clarity around the nature of the violation and an explanation of why the behavior was inappropriate.

2. **Warning**  
- *Impact*: A violation through a single incident or series of actions.  
- *Consequence*: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time.

3. **Temporary Ban**  
- *Impact*: A serious violation of community standards, including sustained inappropriate behavior.  
- *Consequence*: A temporary ban from any sort of interaction or public communication with the community for a specified period of time.

4. **Permanent Ban**  
- *Impact*: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.  
- *Consequence*: A permanent ban from any sort of public interaction within the
   community.

## Attribution

This Code of Conduct is adapted from the  
- [Contributor Covenant][v2.1], version 2.1, available at [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by  
- [Mozilla’s code of conduct enforcement ladder][mozilla-coc].

For answers to common questions about this code of conduct, see the FAQ at  
- [Contributor Covenant FAQ][faq].

[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
[mozilla-coc]: https://github.com/mozilla/diversity
[faq]: https://www.contributor-covenant.org/faq
```

<a id="CONTRIBUTING.md"></a>
### 11. `CONTRIBUTING.md`
- Size: 834 bytes | LOC: 25 | SLOC: 19 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 12ea21d94090

#### Brief
# Contributing Guidelines

#### Auto Summary
Contributing Guidelines

#### Content (verbatim)

```markdown
# Contributing Guidelines

Thank you for considering contributing to this project!  
We welcome bug reports, feature requests, and pull requests.  
Please follow the guidelines below to make the process smooth for everyone.

---

## How to Contribute

### 1. Reporting Issues
- Check the [issue tracker](../../issues) to avoid duplicates.
- Use the appropriate [issue template](.github/ISSUE_TEMPLATE/) when creating a new issue.
- Provide as much detail as possible (steps to reproduce, expected behavior, environment, etc.).

### 2. Suggesting Features
- Open a new **Feature Request** issue.
- Explain the problem your idea solves.
- Provide examples, use cases, or references if possible.

### 3. Submitting Pull Requests
Fork the repository and create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
```

<a id="docker-compose.test.yml"></a>
### 12. `docker-compose.test.yml`
- Size: 730 bytes | LOC: 24 | SLOC: 24 | TODOs: 0 | Modified: 2026-05-17 18:09:28 | SHA1: beb2480132a5

#### Brief
services:
  frontend_test:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend_test:
    container_name: test
    build:
      context: ./frontend
      dockerfile: Dockerfile.test
    working_dir: /app
    environment:
      CI: "1"
      EXPO_TUNNEL: "false"
      EXPO_DEVTOOLS_LISTEN_ADDRESS: 0.0.0.0
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
      - ./reports/frontend:/reports/frontend
    command: >-
      sh -lc "
        mkdir -p /reports/frontend &&
        npm install &&
        npm test -- --ci --runInBand --verbose --coverage --coverageDirectory=/reports/frontend/coverage;
        status=$$?;
        printf 'docker compose frontend_test exit code: %s\n' \"$$status\" > /reports/frontend/docker-test-result.txt;
        exit \"$$status\"
      "
```

<a id="docker-compose.yml"></a>
### 13. `docker-compose.yml`
- Size: 591 bytes | LOC: 26 | SLOC: 26 | TODOs: 0 | Modified: 2026-03-27 20:10:13 | SHA1: 342d78d0abba

#### Brief
services:
  frontend:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: frontend
    working_dir: /app
    stdin_open: true
    tty: true
    restart: unless-stopped
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
    environment:
      EXPO_TUNNEL: ${EXPO_TUNNEL:-false}
      EXPO_DEVTOOLS_LISTEN_ADDRESS: ${EXPO_DEVTOOLS_LISTEN_ADDRESS:-0.0.0.0}
    ports:
      - "19000:19000"
      - "19001:19001"
      - "19002:19002"
      - "8081:8081"
    command: >
      sh -lc "
        npm install &&
        npx expo start --web
      "
```

<a id="frontend-app-.expo-devices.json"></a>
### 14. `frontend/app/.expo/devices.json`
- Size: 20 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: e65a108cbb97

#### Brief
{
  "devices": []

#### Auto Summary
{

#### Content

```json
{
  "devices": []
}
```

<a id="frontend-app-.expo-README.md"></a>
### 15. `frontend/app/.expo/README.md`
- Size: 751 bytes | LOC: 8 | SLOC: 8 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: ac0ec2a143ee

#### Brief
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.

#### Auto Summary
> Why do I have a folder named ".expo" in my project?

#### Content (verbatim)

```markdown
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
```

<a id="frontend-app-__mocks__-expoAssetMock.js"></a>
### 16. `frontend/app/__mocks__/expoAssetMock.js`
- Size: 262 bytes | LOC: 11 | SLOC: 11 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: b00b982fd435

#### Brief
module.exports = {
  Asset: {

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  Asset: {
    fromModule: () => ({
      uri: "data:text/plain,This is a test sample essay.",
      localUri: "data:text/plain,This is a test sample essay.",
      downloadAsync: async function () {
        return this;
      }
    })
  }
};
```

<a id="frontend-app-__mocks__-expoConstantsMock.js"></a>
### 17. `frontend/app/__mocks__/expoConstantsMock.js`
- Size: 96 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: a9a6e1c50aca

#### Brief
module.exports = {
  default: { expoConfig: {}, manifest: null, appOwnership: "standalone" }

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  default: { expoConfig: {}, manifest: null, appOwnership: "standalone" }
};
```

<a id="frontend-app-__mocks__-expoMock.js"></a>
### 18. `frontend/app/__mocks__/expoMock.js`
- Size: 174 bytes | LOC: 8 | SLOC: 7 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 25bb3ffd2b3d

#### Brief
const dummy = new Proxy({}, { get: () => undefined });

#### Auto Summary
const dummy = new Proxy({}, { get: () => undefined });

#### Content

```javascript
const dummy = new Proxy({}, { get: () => undefined });

module.exports = {
  ...dummy,
  registerRootComponent: () => {},
  installExpoGlobals: () => {},
  default: dummy
};
```

<a id="frontend-app-__mocks__-expoRouterMock.js"></a>
### 19. `frontend/app/__mocks__/expoRouterMock.js`
- Size: 178 bytes | LOC: 7 | SLOC: 7 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 050be304cd17

#### Brief
module.exports = {
  useRouter: () => ({ push: () => {}, replace: () => {}, back: () => {} }),

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  useRouter: () => ({ push: () => {}, replace: () => {}, back: () => {} }),
  useSegments: () => [],
  Slot: () => null,
  Stack: () => null,
  default: {}
};
```

<a id="frontend-app-__mocks__-fileMock.js"></a>
### 20. `frontend/app/__mocks__/fileMock.js`
- Size: 35 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 363ae0ab6342

#### Brief
module.exports = "test-file-stub";

#### Auto Summary
module.exports = "test-file-stub";

#### Content

```javascript
module.exports = "test-file-stub";
```

<a id="frontend-app-__mocks__-styleMock.js"></a>
### 21. `frontend/app/__mocks__/styleMock.js`
- Size: 21 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 6d71154c41bc

#### Brief
module.exports = {};

#### Auto Summary
module.exports = {};

#### Content

```javascript
module.exports = {};
```

<a id="frontend-app-__tests__-analysis.test.ts"></a>
### 22. `frontend/app/__tests__/analysis.test.ts`
- Size: 2457 bytes | LOC: 92 | SLOC: 79 | TODOs: 0 | Modified: 2026-03-22 16:47:19 | SHA1: 330775f3d6d8

#### Brief
import {
  buildHistogram,

#### Auto Summary
import {

#### Content

```typescript
import {
  buildHistogram,
  splitIntoSentences,
  tokenizeSentence
} from "../lib/analysis/text";

test("splits on true sentence-ending periods and question marks", () => {
  expect(splitIntoSentences("One. Two? Three!")).toEqual(["One.", "Two?", "Three!"]);
});

test("does not split on single line breaks inside a paragraph", () => {
  const text = [
    "In the following pages I have confined myself in the main",
    "to those problems of philosophy in regard to which I thought",
    "it possible to say something positive and constructive."
  ].join("\n");

  expect(splitIntoSentences(text)).toEqual([
    "In the following pages I have confined myself in the main to those problems of philosophy in regard to which I thought it possible to say something positive and constructive."
  ]);
});

test("treats blank lines as hard boundaries", () => {
  const text = ["One without a period", "", "Two without a period"].join("\n");

  expect(splitIntoSentences(text)).toEqual([
    "One without a period",
    "Two without a period"
  ]);
});

test("does not split on initials", () => {
  expect(
    splitIntoSentences(
      "I received help from G. E. Moore and J. M. Keynes. Their comments were useful."
    )
  ).toEqual([
    "I received help from G. E. Moore and J. M. Keynes.",
    "Their comments were useful."
  ]);
});

test("does not split on titles and common abbreviations", () => {
  expect(
    splitIntoSentences(
      "Dr. Smith revised the draft. The paper includes tables, etc. and notes."
    )
  ).toEqual([
    "Dr. Smith revised the draft.",
    "The paper includes tables, etc. and notes."
  ]);
});

test("does not split on acronyms and decimals", () => {
  expect(
    splitIntoSentences(
      "The U.S. Navy adopted the rule. The value rose from 3.14 to 6.28."
    )
  ).toEqual([
    "The U.S. Navy adopted the rule.",
    "The value rose from 3.14 to 6.28."
  ]);
});

test("tokenizes contractions", () => {
  expect(tokenizeSentence("It's a small test.")).toEqual([
    "it's",
    "a",
    "small",
    "test"
  ]);
});

test("builds histogram bins", () => {
  const bins = buildHistogram([1, 2, 3, 4, 5], 2);

  expect(bins).toHaveLength(2);
  expect(bins[0].count + bins[1].count).toBe(5);
});

test("builds a single bin when all values are identical", () => {
  const bins = buildHistogram([4, 4, 4], 5);

  expect(bins).toEqual([
    {
      start: 4,
      end: 4,
      count: 3,
      label: "4"
    }
  ]);
});
```

<a id="frontend-app-__tests__-smoke.test.tsx"></a>
### 23. `frontend/app/__tests__/smoke.test.tsx`
- Size: 327 bytes | LOC: 10 | SLOC: 8 | TODOs: 0 | Modified: 2026-03-18 14:05:48 | SHA1: 9acf25bfbea3

#### Brief
import React from "react";
import { render, screen } from "@testing-library/react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { render, screen } from "@testing-library/react-native";
import HomeScreen from "../screens/HomeScreen";

test("renders home screen controls", () => {
  render(<HomeScreen />);

  expect(screen.getByText("Essay input")).toBeTruthy();
  expect(screen.getByText("Load sample")).toBeTruthy();
});
```

<a id="frontend-app-app.json"></a>
### 24. `frontend/app/app.json`
- Size: 793 bytes | LOC: 34 | SLOC: 34 | TODOs: 0 | Modified: 2026-03-27 20:01:35 | SHA1: 9c044413714a

#### Brief
{
  "expo": {

#### Auto Summary
{

#### Content

```json
{
  "expo": {
    "name": "essay_subtrex_analysis",
    "slug": "essay_subtrex_analysis",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#f8fafc"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#f8fafc"
      },
      "edgeToEdgeEnabled": true
    },
    "experiments": {
      "baseUrl": "/essay_subtrex_analysis"
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "output": "single",
      "bundler": "metro"
    }
  }
}
```

<a id="frontend-app-App.tsx"></a>
### 25. `frontend/app/App.tsx`
- Size: 593 bytes | LOC: 19 | SLOC: 18 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: b0f0dfebd0a1

#### Brief
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";
import { CHART_COLORS } from "./lib/constants";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: CHART_COLORS.appBackground }}>
        <SettingsBar />
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}
```

<a id="frontend-app-babel.config.js"></a>
### 26. `frontend/app/babel.config.js`
- Size: 308 bytes | LOC: 18 | SLOC: 18 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: ebe246b14073

#### Brief
module.exports = function (api) {
  api.cache(true);

#### Auto Summary
module.exports = function (api) {

#### Content

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      test: {
        plugins: [
          [
            "transform-inline-environment-variables",
            {
              include: []
            }
          ]
        ]
      }
    }
  };
};
```

<a id="frontend-app-components-Histogram.tsx"></a>
### 27. `frontend/app/components/Histogram.tsx`
- Size: 3680 bytes | LOC: 118 | SLOC: 113 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: f9e609b648f5

#### Brief
import React from "react";
import { Text, View } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { Text, View } from "react-native";
import Svg, { Line, Rect, Text as SvgText } from "react-native-svg";
import type { HistogramBin } from "../lib/analysis/types";

type HistogramProps = {
  bins: HistogramBin[];
  width: number;
  height: number;
  title: string;
  orientation?: "horizontal" | "vertical";
  valueFormatter?: (value: number) => string;
};

function formatRange(start: number, end: number, formatter: (value: number) => string) {
  return `${formatter(start)}-${formatter(end)}`;
}

export default function Histogram({
  bins,
  width,
  height,
  title,
  orientation = "horizontal",
  valueFormatter = (value) => value.toFixed(1)
}: HistogramProps) {
  const padding = 28;
  const innerWidth = Math.max(1, width - padding * 2);
  const innerHeight = Math.max(1, height - padding * 2);
  const maxCount = Math.max(1, ...bins.map((bin) => bin.count));

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>{title}</Text>
      <Svg width={width} height={height}>
        <Rect x={0} y={0} width={width} height={height} fill="#ffffff" rx={16} />
        <Rect
          x={padding}
          y={padding}
          width={innerWidth}
          height={innerHeight}
          fill="#eff6ff"
          rx={10}
        />
        <Line
          x1={padding}
          y1={padding + innerHeight}
          x2={padding + innerWidth}
          y2={padding + innerHeight}
          stroke="#94a3b8"
          strokeWidth={1}
        />
        <Line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + innerHeight}
          stroke="#94a3b8"
          strokeWidth={1}
        />
        {bins.map((bin, index) => {
          if (orientation === "horizontal") {
            const barWidth = innerWidth / Math.max(1, bins.length);
            const barHeight = (bin.count / maxCount) * (innerHeight - 10);
            const x = padding + index * barWidth + 2;
            const y = padding + innerHeight - barHeight;
            return (
              <React.Fragment key={`${bin.start}-${bin.end}`}>
                <Rect
                  x={x}
                  y={y}
                  width={Math.max(2, barWidth - 4)}
                  height={Math.max(1, barHeight)}
                  fill="#93c5fd"
                  rx={4}
                />
                <SvgText
                  x={x + barWidth / 2}
                  y={padding + innerHeight + 14}
                  fontSize="9"
                  fill="#475569"
                  textAnchor="middle"
                >
                  {formatRange(bin.start, bin.end, valueFormatter)}
                </SvgText>
              </React.Fragment>
            );
          }

          const barHeight = innerHeight / Math.max(1, bins.length);
          const barWidth = (bin.count / maxCount) * (innerWidth - 10);
          const x = padding;
          const y = padding + index * barHeight + 2;
          return (
            <React.Fragment key={`${bin.start}-${bin.end}`}>
              <Rect
                x={x}
                y={y}
                width={Math.max(1, barWidth)}
                height={Math.max(2, barHeight - 4)}
                fill="#93c5fd"
                rx={4}
              />
              <SvgText
                x={padding + innerWidth + 2}
                y={y + barHeight / 2 + 2}
                fontSize="9"
                fill="#475569"
              >
                {formatRange(bin.start, bin.end, valueFormatter)}
              </SvgText>
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
}
```

<a id="frontend-app-components-InfoCard.tsx"></a>
### 28. `frontend/app/components/InfoCard.tsx`
- Size: 851 bytes | LOC: 32 | SLOC: 30 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: bbde4751a831

#### Brief
import React, { ReactNode } from "react";
import { Text, View } from "react-native";

#### Auto Summary
import React, { ReactNode } from "react";

#### Content

```tsx
import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { CHART_COLORS } from "../lib/constants";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  grow?: boolean;
};

export default function InfoCard({ title, children, grow = false }: InfoCardProps) {
  return (
    <View
      style={{
        flex: grow ? 1 : undefined,
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 18,
        padding: 16,
        gap: 12,
        shadowColor: "#111827",
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 }
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>{title}</Text>
      {children}
    </View>
  );
}
```

<a id="frontend-app-components-JointDistributionChart.tsx"></a>
### 29. `frontend/app/components/JointDistributionChart.tsx`
- Size: 9315 bytes | LOC: 368 | SLOC: 341 | TODOs: 0 | Modified: 2026-03-22 12:46:45 | SHA1: 7f2da1e000c7

#### Brief
import React, { useEffect, useMemo, useRef } from "react";
import { Platform, Text, View } from "react-native";

#### Auto Summary
import React, { useEffect, useMemo, useRef } from "react";

#### Content

```tsx
import React, { useEffect, useMemo, useRef } from "react";
import { Platform, Text, View } from "react-native";
import type { HistogramBin, SentencePoint } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";

type JointDistributionChartProps = {
  points?: SentencePoint[];
  xBins?: HistogramBin[];
  yBins?: HistogramBin[];
  width: number;
  height: number;
};

const FIXED_BIN_COUNT   =  8;
const FIXED_BIN_COUNT_x = 20;
const FIXED_BIN_COUNT_y = 16;
const FIXED_X_RANGE: [number, number] = [0, 100];
const FIXED_Y_RANGE: [number, number] = [0, 8];
const FIXED_X_BIN_SIZE =
  (FIXED_X_RANGE[1] - FIXED_X_RANGE[0]) / FIXED_BIN_COUNT_x;
const FIXED_Y_BIN_SIZE =
  (FIXED_Y_RANGE[1] - FIXED_Y_RANGE[0]) / FIXED_BIN_COUNT_y;

type PlotlyLike = {
  react: (element: HTMLElement, data: any[], layout: any, config?: any) => Promise<any>;
  purge: (element: HTMLElement) => void;
  Plots?: { resize: (element: HTMLElement) => void };
};

function sentencePreview(sentence: string) {
  return sentence.length > 120 ? `${sentence.slice(0, 117)}...` : sentence;
}

function normalizePoints(points?: SentencePoint[]) {
  return Array.isArray(points) ? points : [];
}

function normalizeBins(bins?: HistogramBin[]) {
  return Array.isArray(bins) ? bins : [];
}

function buildPlotlyFigure(
  rawPoints?: SentencePoint[],
  rawXBins?: HistogramBin[],
  rawYBins?: HistogramBin[]
) {
  const points = normalizePoints(rawPoints);
  const xBins = normalizeBins(rawXBins);
  const yBins = normalizeBins(rawYBins);
  const xValues = points.map((point) => point.wordCount);
  const yValues = points.map((point) => point.averageDifficulty);
  const previews = points.map((point) => sentencePreview(point.sentence));
  const xRange = FIXED_X_RANGE;
  const yRange = FIXED_Y_RANGE;
  const xBinSize = FIXED_X_BIN_SIZE;
  const yBinSize = FIXED_Y_BIN_SIZE;

  const sharedHover = points.map((point) => [
    point.sentence,
    point.wordCount,
    point.uniqueWordCount,
    point.averageDifficulty,
    point.averageZipf,
    point.unknownWordCount
  ]);

  const topHistogram = {
    type: "histogram",
    x: xValues,
    xaxis: "x2",
    yaxis: "y2",
    nbinsx: FIXED_BIN_COUNT_x,
    marker: {
      color: "#2c7bb6",
      line: {
        color: "#1d5d8f",
        width: 1
      }
    },
    opacity: 0.9,
    hovertemplate: "Words per sentence: %{x}<br>Sentences: %{y}<extra></extra>",
    autobinx: false,
    xbins: {
      start: xRange[0],
      end: xRange[1],
      size: xBinSize
    },
    showlegend: false
  };

  const rightHistogram = {
    type: "histogram",
    y: yValues,
    xaxis: "x3",
    yaxis: "y3",
    nbinsy: FIXED_BIN_COUNT_y,
    marker: {
      color: "#2c7bb6",
      line: {
        color: "#1d5d8f",
        width: 1
      }
    },
    opacity: 0.9,
    autobiny: false,
    ybins: {
      start: yRange[0],
      end: yRange[1],
      size: yBinSize
    },
    hovertemplate: "Average difficulty: %{y:.2f}<br>Sentences: %{x}<extra></extra>",
    showlegend: false
  };

  const centerTrace = {
    type: "histogram2dcontour",
    x: xValues,
    y: yValues,
    xaxis: "x",
    yaxis: "y",
    nbinsx: FIXED_BIN_COUNT_x,
    nbinsy: FIXED_BIN_COUNT_y,
    autobinx: false,
    autobiny: false,
    xbins: {
      start: xRange[0],
      end: xRange[1],
      size: xBinSize
    },
    ybins: {
      start: yRange[0],
      end: yRange[1],
      size: yBinSize
    },
    ncontours: FIXED_BIN_COUNT,
    contours: {
      coloring: "heatmap",
      showlabels: false
    },
    colorscale: "Jet",
    colorbar: {
      title: { text: "Density" },
      len: 0.78,
      y: 0.39,
      thickness: 16,
      outlinewidth: 0
    },
    line: {
      color: "rgba(0, 0, 0, 0.28)",
      width: 0.8
    },
    hovertemplate: [
      "Words: %{x}",
      "Difficulty: %{y:.2f}",
      "Density: %{z}",
      "<extra></extra>"
    ].join("<br>"),
    showscale: true,
    showlegend: false
  };

  const layout = {
    autosize: true,
    paper_bgcolor: CHART_COLORS.canvasBackground,
    plot_bgcolor: CHART_COLORS.panelBackground,
    margin: { l: 72, r: 94, t: 20, b: 60 },
    bargap: 0.03,
    hoverlabel: {
      bgcolor: "rgba(35, 31, 40, 0.96)",
      bordercolor: "rgba(255,255,255,0.08)",
      font: { color: "#f8fafc", size: 12 }
    },
    dragmode: false,
    xaxis: {
      domain: [0, 0.78],
      range: xRange,
      title: { text: "Words per sentence", font: { size: 13, color: CHART_COLORS.labelText } },
      gridcolor: CHART_COLORS.grid,
      zeroline: false,
      linecolor: CHART_COLORS.axisLine,
      mirror: false,
      ticks: "outside",
      tickfont: { size: 11, color: CHART_COLORS.axisText }
    },
    yaxis: {
      domain: [0, 0.78],
      range: yRange,
      title: { text: "Average word difficulty", font: { size: 13, color: CHART_COLORS.labelText } },
      gridcolor: CHART_COLORS.grid,
      zeroline: false,
      linecolor: CHART_COLORS.axisLine,
      tickfont: { size: 11, color: CHART_COLORS.axisText }
    },
    xaxis2: {
      domain: [0, 0.78],
      anchor: "y2",
      matches: "x",
      showgrid: false,
      zeroline: false,
      showticklabels: false,
      linecolor: CHART_COLORS.axisLine
    },
    yaxis2: {
      domain: [0.82, 1],
      anchor: "x2",
      showgrid: false,
      zeroline: false,
      tickfont: { size: 10, color: CHART_COLORS.axisText },
      title: { text: "Count", font: { size: 11, color: CHART_COLORS.axisText } }
    },
    xaxis3: {
      domain: [0.82, 1],
      anchor: "y3",
      showgrid: false,
      zeroline: false,
      tickfont: { size: 10, color: CHART_COLORS.axisText },
      title: { text: "Count", font: { size: 11, color: CHART_COLORS.axisText } }
    },
    yaxis3: {
      domain: [0, 0.78],
      anchor: "x3",
      matches: "y",
      showgrid: false,
      zeroline: false,
      showticklabels: false,
      linecolor: CHART_COLORS.axisLine
    },
    showlegend: false,
    font: {
      family: "Arial, Helvetica, sans-serif",
      color: CHART_COLORS.bodyText
    }
  };

  const config = {
    responsive: true,
    displayModeBar: true,
    modeBarButtonsToRemove: [
      "select2d",
      "lasso2d",
      "autoScale2d",
      "toggleSpikelines",
      "hoverClosestCartesian",
      "hoverCompareCartesian"
    ],
    displaylogo: false,
    scrollZoom: false
  };

  return {
    data: [topHistogram, rightHistogram, centerTrace],
    layout,
    config
  };
}

export default function JointDistributionChart({
  points = [],
  xBins = [],
  yBins = [],
  width,
  height
}: JointDistributionChartProps) {
  const containerRef = useRef<any>(null);

  const figure = useMemo(() => buildPlotlyFigure(points, xBins, yBins), [points, xBins, yBins]);

  useEffect(() => {
    if (Platform.OS !== "web") {
      return;
    }

    let cancelled = false;
    let plotly: PlotlyLike | null = null;
    let resizeHandler: (() => void) | null = null;

    const render = async () => {
      const container = containerRef.current as HTMLElement | null;
      if (!container) {
        return;
      }

      const plotlyModule = await import("plotly.js-dist-min");
      if (cancelled) {
        return;
      }

      plotly = (plotlyModule.default ?? plotlyModule) as PlotlyLike;
      await plotly.react(container, figure.data, figure.layout, figure.config);

      resizeHandler = () => {
        if (!plotly || !containerRef.current) {
          return;
        }
        plotly.Plots?.resize(containerRef.current as HTMLElement);
      };

      window.addEventListener("resize", resizeHandler);
    };

    render().catch((error) => {
      console.error("Plotly render failed", error);
    });

    return () => {
      cancelled = true;
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
      }
      const container = containerRef.current as HTMLElement | null;
      if (plotly && container) {
        plotly.purge(container);
      }
    };
  }, [figure]);

  if (Platform.OS !== "web") {
    return (
      <View
        style={{
          width,
          borderWidth: 1,
          borderColor: CHART_COLORS.cardBorder,
          borderRadius: 18,
          backgroundColor: CHART_COLORS.cardBackground,
          padding: 18,
          gap: 8
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
          Plot unavailable on this platform
        </Text>
        <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
          This Plotly build targets Expo Web. Open the project in a browser to see the joint plot.
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        width,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: CHART_COLORS.cardBackground,
        padding: 14,
        gap: 10
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
        Words Distribution
      </Text>
      <View
        ref={containerRef}
        style={{
          width: "100%",
          height,
          backgroundColor: CHART_COLORS.canvasBackground,
          borderRadius: 14,
          overflow: "hidden"
        }}
      />
    </View>
  );
}
```

<a id="frontend-app-components-ScatterPlot.tsx"></a>
### 30. `frontend/app/components/ScatterPlot.tsx`
- Size: 4012 bytes | LOC: 119 | SLOC: 103 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 16750b0ddeb8

#### Brief
import React from "react";
import { Text, View } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Line, Rect, Text as SvgText } from "react-native-svg";
import type { SentencePoint } from "../lib/analysis/types";

type ScatterPlotProps = {
  points: SentencePoint[];
  width: number;
  height: number;
};

function safeBounds(values: number[]) {
  if (!values.length) {
    return { min: 0, max: 1 };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return { min: min - 1, max: max + 1 };
  }

  return { min, max };
}

export default function ScatterPlot({ points, width, height }: ScatterPlotProps) {
  const padding = 42;
  const innerWidth = Math.max(1, width - padding * 2);
  const innerHeight = Math.max(1, height - padding * 2);

  const xBounds = safeBounds(points.map((point) => point.wordCount));
  const yBounds = safeBounds(points.map((point) => point.averageDifficulty));

  const mapX = (value: number) =>
    padding + ((value - xBounds.min) / (xBounds.max - xBounds.min)) * innerWidth;
  const mapY = (value: number) =>
    padding + innerHeight - ((value - yBounds.min) / (yBounds.max - yBounds.min)) * innerHeight;

  const ticks = 5;

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: "700", color: "#0f172a" }}>Sentence scatter plot</Text>
      <Svg width={width} height={height}>
        <Rect x={0} y={0} width={width} height={height} fill="#ffffff" rx={16} />
        <Rect x={padding} y={padding} width={innerWidth} height={innerHeight} fill="#eff6ff" rx={12} />

        {Array.from({ length: ticks + 1 }, (_, index) => {
          const ratio = index / ticks;
          const x = padding + ratio * innerWidth;
          const y = padding + ratio * innerHeight;
          const xValue = xBounds.min + ratio * (xBounds.max - xBounds.min);
          const yValue = yBounds.max - ratio * (yBounds.max - yBounds.min);

          return (
            <React.Fragment key={index}>
              <Line x1={x} y1={padding} x2={x} y2={padding + innerHeight} stroke="#dbeafe" strokeWidth={1} />
              <Line x1={padding} y1={y} x2={padding + innerWidth} y2={y} stroke="#dbeafe" strokeWidth={1} />
              <SvgText x={x} y={padding + innerHeight + 18} fontSize="10" fill="#475569" textAnchor="middle">
                {xValue.toFixed(1)}
              </SvgText>
              <SvgText x={padding - 8} y={y + 3} fontSize="10" fill="#475569" textAnchor="end">
                {yValue.toFixed(1)}
              </SvgText>
            </React.Fragment>
          );
        })}

        <Line x1={padding} y1={padding + innerHeight} x2={padding + innerWidth} y2={padding + innerHeight} stroke="#64748b" strokeWidth={1.2} />
        <Line x1={padding} y1={padding} x2={padding} y2={padding + innerHeight} stroke="#64748b" strokeWidth={1.2} />

        {points.map((point) => (
          <React.Fragment key={point.id}>
            <Circle
              cx={mapX(point.wordCount)}
              cy={mapY(point.averageDifficulty)}
              r={5}
              fill="#1d4ed8"
              stroke="#ffffff"
              strokeWidth={1.5}
            />
            <SvgText
              x={mapX(point.wordCount) + 8}
              y={mapY(point.averageDifficulty) - 6}
              fontSize="10"
              fill="#1e293b"
            >
              {String(point.id)}
            </SvgText>
          </React.Fragment>
        ))}

        <SvgText
          x={padding + innerWidth / 2}
          y={height - 6}
          fontSize="11"
          fill="#334155"
          textAnchor="middle"
        >
          Sentence word count
        </SvgText>

        <SvgText
          x={12}
          y={padding + innerHeight / 2}
          fontSize="11"
          fill="#334155"
          rotation="-90"
          originX={12}
          originY={padding + innerHeight / 2}
          textAnchor="middle"
        >
          Average word difficulty
        </SvgText>
      </Svg>
    </View>
  );
}
```

<a id="frontend-app-components-SentenceTable.tsx"></a>
### 31. `frontend/app/components/SentenceTable.tsx`
- Size: 2869 bytes | LOC: 83 | SLOC: 77 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 320f287295ed

#### Brief
import React from "react";
import { ScrollView, Text, View } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import type { SentencePoint } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";

type SentenceTableProps = {
  sentences: SentencePoint[];
};

const headerStyle = {
  fontSize: 12,
  fontWeight: "700" as const,
  color: CHART_COLORS.axisText
};

const cellStyle = {
  fontSize: 12,
  color: CHART_COLORS.bodyText
};

export default function SentenceTable({ sentences }: SentenceTableProps) {
  return (
    <View
      style={{
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 18,
        padding: 16,
        gap: 12
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", color: CHART_COLORS.titleText }}>
        Sentence metrics
      </Text>

      <ScrollView horizontal>
        <View style={{ minWidth: 900 }}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#e3dde7",
              paddingBottom: 8,
              marginBottom: 8
            }}
          >
            <Text style={[headerStyle, { width: 44 }]}>#</Text>
            <Text style={[headerStyle, { width: 420 }]}>Sentence</Text>
            <Text style={[headerStyle, { width: 110 }]}>Words</Text>
            <Text style={[headerStyle, { width: 130 }]}>Unique words</Text>
            <Text style={[headerStyle, { width: 140 }]}>Avg difficulty</Text>
            <Text style={[headerStyle, { width: 120 }]}>Avg zipf</Text>
            <Text style={[headerStyle, { width: 120 }]}>Unknown</Text>
          </View>

          {sentences.map((sentence, index) => (
            <View
              key={sentence.id}
              style={{
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 4,
                borderRadius: 10,
                backgroundColor: index % 2 === 0 ? "#fbf9fc" : "transparent",
                borderBottomWidth: 1,
                borderBottomColor: "#f3edf6"
              }}
            >
              <Text style={[cellStyle, { width: 44 }]}>{sentence.id}</Text>
              <Text style={[cellStyle, { width: 420, lineHeight: 18 }]}>{sentence.sentence}</Text>
              <Text style={[cellStyle, { width: 110 }]}>{sentence.wordCount}</Text>
              <Text style={[cellStyle, { width: 130 }]}>{sentence.uniqueWordCount}</Text>
              <Text style={[cellStyle, { width: 140 }]}>{sentence.averageDifficulty}</Text>
              <Text style={[cellStyle, { width: 120 }]}>{sentence.averageZipf}</Text>
              <Text style={[cellStyle, { width: 120 }]}>{sentence.unknownWordCount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
```

<a id="frontend-app-components-SettingsBar.tsx"></a>
### 32. `frontend/app/components/SettingsBar.tsx`
- Size: 1104 bytes | LOC: 44 | SLOC: 40 | TODOs: 0 | Modified: 2026-03-18 14:28:40 | SHA1: 4ba95daa84d3

#### Brief
import React from "react";
import {

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  Linking 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { APP_NAME } from "../lib/constants";

export const REPO_URL      = "https://github.com/europanite/essay_subtrex_analysis";

export default function SettingsBar() {
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "#2d2532" }}>
      <StatusBar style="light" backgroundColor="#2d2532" />
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: 16,
          gap: 6
        }}
      >

        <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
          <Text
            style={{
              color: "#fff7ff",
              fontSize: 24,
              fontWeight: "800",
              marginBottom: 12,
              textDecorationLine: "underline",
            }}
          >
            {APP_NAME}
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
```

<a id="frontend-app-components-TextPanel.tsx"></a>
### 33. `frontend/app/components/TextPanel.tsx`
- Size: 2380 bytes | LOC: 92 | SLOC: 87 | TODOs: 0 | Modified: 2026-03-18 11:46:43 | SHA1: fda64d94f65e

#### Brief
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { CHART_COLORS } from "../lib/constants";

type TextPanelProps = {
  value: string;
  onChangeText: (text: string) => void;
  onAnalyze: () => void;
  onLoadSample: () => void;
  busy: boolean;
};

export default function TextPanel({
  value,
  onChangeText,
  onAnalyze,
  onLoadSample,
  busy
}: TextPanelProps) {
  return (
    <View
      style={{
        backgroundColor: CHART_COLORS.cardBackground,
        borderWidth: 1,
        borderColor: CHART_COLORS.cardBorder,
        borderRadius: 22,
        padding: 18,
        gap: 14,
        shadowColor: "#111827",
        shadowOpacity: 0.05,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 }
      }}
    >
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 20, fontWeight: "800", color: CHART_COLORS.titleText }}>
          Essay input
        </Text>
      </View>

      <TextInput
        multiline
        value={value}
        onChangeText={onChangeText}
        placeholder="Paste your essay here."
        textAlignVertical="top"
        style={{
          minHeight: 220,
          borderWidth: 1,
          borderColor: "#d3ccd6",
          borderRadius: 16,
          paddingHorizontal: 14,
          paddingVertical: 12,
          fontSize: 15,
          lineHeight: 23,
          color: CHART_COLORS.bodyText,
          backgroundColor: "#faf8fb"
        }}
      />

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
        <Pressable
          onPress={onAnalyze}
          style={{
            backgroundColor: "#d93ce0",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "700" }}>
            {busy ? "Analyzing..." : "Analyze essay"}
          </Text>
        </Pressable>

        <Pressable
          onPress={onLoadSample}
          style={{
            backgroundColor: "#efe8f3",
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d9d0de"
          }}
        >
          <Text style={{ color: CHART_COLORS.titleText, fontWeight: "700" }}>Load sample</Text>
        </Pressable>
      </View>
    </View>
  );
}
```

<a id="frontend-app-declarations.d.ts"></a>
### 34. `frontend/app/declarations.d.ts`
- Size: 256 bytes | LOC: 14 | SLOC: 12 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: 7d5ac329ed9b

#### Brief
declare module "subtlex-word-frequencies" {
  const value: unknown;

#### Auto Summary
declare module "subtlex-word-frequencies" {

#### Content

```typescript
declare module "subtlex-word-frequencies" {
  const value: unknown;
  export default value;
}

declare module "plotly.js-dist-min" {
  const Plotly: any;
  export default Plotly;
}

declare module "*.txt" {
  const asset: number;
  export default asset;
}
```

<a id="frontend-app-index.ts"></a>
### 35. `frontend/app/index.ts`
- Size: 130 bytes | LOC: 5 | SLOC: 4 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 87304c4bac86

#### Brief
import "@expo/metro-runtime";
import { registerRootComponent } from "expo";

#### Auto Summary
import "@expo/metro-runtime";

#### Content

```typescript
import "@expo/metro-runtime";
import { registerRootComponent } from "expo";
import App from "./App";

registerRootComponent(App);
```

<a id="frontend-app-jest.config.js"></a>
### 36. `frontend/app/jest.config.js`
- Size: 866 bytes | LOC: 18 | SLOC: 18 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: 5b7c2c6cd3a6

#### Brief
module.exports = {
  preset: "jest-expo",

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  preset: "jest-expo",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(png|jpe?g|gif|svg|txt)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^expo($|/.+)": "<rootDir>/__mocks__/expoMock.js",
    "^expo-router($|/.+)": "<rootDir>/__mocks__/expoRouterMock.js",
    "^expo-constants$": "<rootDir>/__mocks__/expoConstantsMock.js",
    "^expo-asset$": "<rootDir>/__mocks__/expoAssetMock.js"
  },
  setupFiles: ["<rootDir>/jest.setupFiles.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-clone-referenced-element|@react-navigation|react-navigation|expo(nent)?|@expo(nent)?/.*|expo-modules-core|expo-.*|@expo/.*|@react-native/polyfills)/)"
  ],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"]
};
```

<a id="frontend-app-jest.setup.ts"></a>
### 37. `frontend/app/jest.setup.ts`
- Size: 89 bytes | LOC: 2 | SLOC: 2 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: d43819fd577e

#### Brief
import "@testing-library/jest-native/extend-expect";
import "@testing-library/jest-dom";

#### Auto Summary
import "@testing-library/jest-native/extend-expect";

#### Content

```typescript
import "@testing-library/jest-native/extend-expect";
import "@testing-library/jest-dom";
```

<a id="frontend-app-jest.setupFiles.js"></a>
### 38. `frontend/app/jest.setupFiles.js`
- Size: 394 bytes | LOC: 9 | SLOC: 8 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: a54886f6cb83

#### Brief
if (!Object.getOwnPropertyDescriptor(globalThis, "__ExpoImportMetaRegistry")) {
  Object.defineProperty(globalThis, "__ExpoImportMetaRegistry", {

#### Auto Summary
if (!Object.getOwnPropertyDescriptor(globalThis, "__ExpoImportMetaRegistry")) {

#### Content

```javascript
if (!Object.getOwnPropertyDescriptor(globalThis, "__ExpoImportMetaRegistry")) {
  Object.defineProperty(globalThis, "__ExpoImportMetaRegistry", {
    configurable: true,
    value: { get: () => null, has: () => false }
  });
}

jest.mock("@react-native/animated", () => ({}), { virtual: true });
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper", () => ({}), { virtual: true });
```

<a id="frontend-app-lib-analysis-sampleEssay.ts"></a>
### 39. `frontend/app/lib/analysis/sampleEssay.ts`
- Size: 608 bytes | LOC: 25 | SLOC: 17 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: c83f4770b056

#### Brief
import { Asset } from "expo-asset";

#### Auto Summary
import { Asset } from "expo-asset";

#### Content

```typescript
import { Asset } from "expo-asset";

const sampleEssayAssetModule = require("../problems_of_philosophy.txt");

export async function loadSampleEssayText() {
  const asset = Asset.fromModule(sampleEssayAssetModule);

  if (!asset.localUri) {
    await asset.downloadAsync();
  }

  const uri = asset.localUri ?? asset.uri;

  if (!uri) {
    throw new Error("Sample essay asset URI is unavailable.");
  }

  const response = await fetch(uri, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to load sample essay: ${response.status}`);
  }

  return (await response.text()).trim();
}
```

<a id="frontend-app-lib-analysis-subtlexFallback.ts"></a>
### 40. `frontend/app/lib/analysis/subtlexFallback.ts`
- Size: 1234 bytes | LOC: 75 | SLOC: 75 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: d8a2bf764b94

#### Brief
export const FALLBACK_SUBTLEX_MAP: Record<string, number> = {
  "the": 7.4,

#### Auto Summary
export const FALLBACK_SUBTLEX_MAP: Record<string, number> = {

#### Content

```typescript
export const FALLBACK_SUBTLEX_MAP: Record<string, number> = {
  "the": 7.4,
  "a": 7.2,
  "and": 7.3,
  "to": 7.3,
  "of": 7.2,
  "in": 7.1,
  "is": 7.1,
  "it": 7.0,
  "that": 6.9,
  "for": 6.9,
  "on": 6.8,
  "with": 6.8,
  "as": 6.8,
  "was": 6.7,
  "are": 6.7,
  "be": 6.8,
  "this": 6.6,
  "have": 6.7,
  "i": 7.0,
  "you": 6.8,
  "we": 6.7,
  "they": 6.6,
  "he": 6.5,
  "she": 6.5,
  "my": 6.6,
  "english": 5.2,
  "essay": 4.8,
  "sentence": 4.9,
  "sentences": 4.8,
  "word": 5.2,
  "words": 5.0,
  "difficult": 4.4,
  "difficulty": 4.3,
  "average": 5.0,
  "frequency": 4.8,
  "practice": 5.1,
  "reading": 5.5,
  "writing": 5.4,
  "study": 5.6,
  "daily": 5.6,
  "life": 6.1,
  "busy": 5.5,
  "days": 5.9,
  "later": 6.0,
  "realized": 4.7,
  "rhythm": 4.2,
  "nuance": 3.8,
  "emphasis": 4.1,
  "longer": 5.8,
  "vocabulary": 4.4,
  "richer": 4.5,
  "confidence": 4.6,
  "grows": 5.0,
  "small": 6.1,
  "continue": 5.2,
  "time": 6.7,
  "now": 6.7,
  "over": 6.9,
  "when": 6.9,
  "because": 6.4,
  "about": 6.7,
  "helped": 5.9,
  "memorizing": 3.7,
  "isolated": 4.2,
  "full": 6.3,
  "notice": 5.8,
  "habit": 5.2,
  "become": 6.2,
  "short": 6.2,
  "young": 5.8,
  "younger": 5.0,
  "believed": 4.9,
  "meant": 5.4
};
```

<a id="frontend-app-lib-analysis-subtlexLoader.ts"></a>
### 41. `frontend/app/lib/analysis/subtlexLoader.ts`
- Size: 4439 bytes | LOC: 185 | SLOC: 153 | TODOs: 0 | Modified: 2026-03-18 23:58:08 | SHA1: 4b70adc1b567

#### Brief
import { FALLBACK_SUBTLEX_MAP } from "./subtlexFallback";
import type { DictionaryLoadResult } from "./types";

#### Auto Summary
import { FALLBACK_SUBTLEX_MAP } from "./subtlexFallback";

#### Content

```typescript
import { FALLBACK_SUBTLEX_MAP } from "./subtlexFallback";
import type { DictionaryLoadResult } from "./types";

let cache: DictionaryLoadResult | null = null;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeSubtlexRawNumber(raw: number): number {
  if (!Number.isFinite(raw) || raw <= 0) {
    return 0;
  }

  return clamp(Math.log10(raw + 1), 0, 8);
}


function readCandidateRawNumber(item: unknown): number | null {
  if (typeof item === "number" && Number.isFinite(item)) {
    return item;
  }

  if (!item || typeof item !== "object") {
    return null;
  }

  const row = item as Record<string, unknown>;
  const candidates = [
    row.zipf,
    row.Zipf,
    row.lg10WF,
    row.log10WF,
    row.log10wf,
    row.frequency,
    row.freq,
    row.fpm,
    row.count,
    row.value
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      return candidate;
    }
  }

  return null;
}

function readCandidateValue(item: unknown): number | null {
  if (typeof item === "number") {
    return normalizeSubtlexRawNumber(item);
  }

  if (!item || typeof item !== "object") {
    return null;
  }

  const row = item as Record<string, unknown>;
  const candidates = [
    row.zipf,
    row.Zipf,
    row.lg10WF,
    row.log10WF,
    row.log10wf,
    row.frequency,
    row.freq,
    row.fpm,
    row.count,
    row.value
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "number") {
      return normalizeSubtlexRawNumber(candidate);
    }
  }

  return null;
}

function readCandidateWord(item: unknown): string | null {
  if (!item || typeof item !== "object") {
    return null;
  }

  const row = item as Record<string, unknown>;
  const candidates = [row.word, row.token, row.lemma, row.text, row.key];

  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim().toLowerCase();
    }
  }

  return null;
}

function normalizeModule(rawModule: unknown): { map: Record<string, number>; rawMap: Record<string, number> } | null {
  const raw =
    rawModule &&
    typeof rawModule === "object" &&
    "default" in (rawModule as Record<string, unknown>)
      ? (rawModule as Record<string, unknown>).default
      : rawModule;

  if (!raw) {
    return null;
  }

  if (Array.isArray(raw)) {
    const map: Record<string, number> = {};
    const rawMap: Record<string, number> = {};
    for (const item of raw) {
      const word = readCandidateWord(item);
      const value = readCandidateValue(item);
      const rawValue = readCandidateRawNumber(item);
      if (word && value !== null) {
        map[word] = value;
        if (rawValue !== null) {
          rawMap[word] = rawValue;
        }
      }
    }
    return Object.keys(map).length ? { map, rawMap } : null;
  }

  if (typeof raw === "object") {
    const source = raw as Record<string, unknown>;
    const map: Record<string, number> = {};
    const rawMap: Record<string, number> = {};

    for (const [key, value] of Object.entries(source)) {
      if (typeof key === "string") {
        const normalizedKey = key.trim().toLowerCase();
        const score = readCandidateValue(value);
        if (normalizedKey && score !== null) {
          map[normalizedKey] = score;
          continue;
        }

        if (typeof value === "number") {
          map[normalizedKey] = normalizeSubtlexRawNumber(value);
          rawMap[normalizedKey] = value;
        }
      }
    }

    return Object.keys(map).length ? { map, rawMap } : null;
  }

  return null;
}

export async function loadSubtlexMap(): Promise<DictionaryLoadResult> {
  if (cache) {
    return cache;
  }

  try {
    const mod = await import("subtlex-word-frequencies");
    const normalized = normalizeModule(mod);

    if (normalized && Object.keys(normalized.map).length > 0) {
      cache = {
        map: normalized.map,
        rawMap: normalized.rawMap,
        dictionaryName: "subtlex-word-frequencies",
        usedFallbackDictionary: false
      };
      return cache;
    }
  } catch (error) {
    // Fallback is intentional. The UI remains usable without crashing.
  }

  cache = {
    map: FALLBACK_SUBTLEX_MAP,
    rawMap: {},
    dictionaryName: "Fallback SUBTLEX starter dictionary",
    usedFallbackDictionary: true
  };
  return cache;
}
```

<a id="frontend-app-lib-analysis-text.ts"></a>
### 42. `frontend/app/lib/analysis/text.ts`
- Size: 9959 bytes | LOC: 381 | SLOC: 321 | TODOs: 0 | Modified: 2026-03-22 16:47:19 | SHA1: 7dea73e8d541

#### Brief
import { loadSubtlexMap } from "./subtlexLoader";
import type {

#### Auto Summary
import { loadSubtlexMap } from "./subtlexLoader";

#### Content

```typescript
import { loadSubtlexMap } from "./subtlexLoader";
import type {
  DifficultyExample,
  EssayAnalysis,
  HistogramBin,
  SentencePoint,
  WordDiagnostic
} from "./types";

export type HistogramBinWithLabel = HistogramBin & {
  label?: string;
};

const FIXED_BIN_COUNT = 8;

const PROTECTED_PERIOD = "\uE000";

function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function protectAcronymPeriods(text: string): string {
  return text.replace(/\b(?:[A-Z]\.){2,}(?=\s+[A-Za-z])/g, (match) =>
    match.replace(/\./g, PROTECTED_PERIOD)
  );
}

function protectSingleInitials(text: string): string {
  return text
    .replace(/\b([A-Z])\.(?=\s+[A-Z]\.)/g, `$1${PROTECTED_PERIOD}`)
    .replace(/\b([A-Z])\.(?=\s+[A-Z][a-z])/g, `$1${PROTECTED_PERIOD}`);
}

function protectCommonAbbreviations(text: string): string {
  return text
    .replace(
      /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St)\.(?=\s+[A-Z])/g,
      `$1${PROTECTED_PERIOD}`
    )
    .replace(
      /\b(etc|vs|cf|fig|eq|no|al|inc|ltd)\.(?=\s+[A-Za-z])/gi,
      (_match, p1: string) => `${p1}${PROTECTED_PERIOD}`
    )
    .replace(/\be\.g\./gi, `e${PROTECTED_PERIOD}g${PROTECTED_PERIOD}`)
    .replace(/\bi\.e\./gi, `i${PROTECTED_PERIOD}e${PROTECTED_PERIOD}`)
    .replace(/\b(?:[A-Za-z]{1,4}\.){2,}(?=\s+[A-Za-z])/g, (match) =>
      match.replace(/\./g, PROTECTED_PERIOD)
    );
}

function protectDecimalPeriods(text: string): string {
  return text.replace(/(\d)\.(\d)/g, `$1${PROTECTED_PERIOD}$2`);
}

function protectEllipses(text: string): string {
  return text.replace(/\.{3,}/g, (match) =>
    match.replace(/\./g, PROTECTED_PERIOD)
  );
}

function protectNonTerminalPeriods(text: string): string {
  return [
    protectEllipses,
    protectDecimalPeriods,
    protectAcronymPeriods,
    protectSingleInitials,
    protectCommonAbbreviations
  ].reduce((acc, fn) => fn(acc), text);
}

function restoreProtectedPeriods(text: string): string {
  return text.replace(new RegExp(PROTECTED_PERIOD, "g"), ".");
}

function normalizeParagraph(paragraph: string): string {
  return paragraph
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function splitIntoSentences(text: string): string[] {
  const paragraphs = text
    .replace(/\r/g, "")
    .split(/\n\s*\n+/)
    .map(normalizeParagraph)
    .filter(Boolean);

  const sentences: string[] = [];

  for (const paragraph of paragraphs) {
    const protectedParagraph = protectNonTerminalPeriods(paragraph);
    const parts =
      protectedParagraph.match(/[^.?]+(?:[.?]|$)/g)?.map((part) => part.trim()) ??
      [];

    for (const part of parts) {
      const restored = restoreProtectedPeriods(part).trim();
      if (restored) {
        sentences.push(restored);
      }
    }
  }

  return sentences;
}

export function tokenizeSentence(sentence: string): string[] {
  return (
    sentence
      .toLowerCase()
      .replace(/[“”‘’]/g, "'")
      .match(/[a-z]+(?:'[a-z]+)?/g) ?? []
  );
}

export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

export function difficultyFromZipf(zipf: number | undefined): number {
  if (typeof zipf !== "number" || !Number.isFinite(zipf)) {
    return 7.5;
  }

  return round(Math.min(8, Math.max(1, 8 - zipf)));
}


const DEFAULT_DIAGNOSTIC_WORDS = [
  "the",
  "truth",
  "knowledge",
  "inferred",
  "hitherto",
  "denotes",
  "hylas",
  "warranties",
  "affirmed"
];

export function buildWordDiagnostics(
  points: SentencePoint[],
  map: Record<string, number>,
  rawMap: Record<string, number>,
  targetWords: string[] = DEFAULT_DIAGNOSTIC_WORDS
): WordDiagnostic[] {
  const counts = new Map<string, number>();

  for (const point of points) {
    for (const word of point.words) {
      counts.set(word, (counts.get(word) ?? 0) + 1);
    }
  }

  return targetWords.map((word) => {
    const normalizedScore = typeof map[word] === "number" ? round(map[word], 3) : null;
    const rawScore = typeof rawMap[word] === "number" ? rawMap[word] : null;
    const difficulty = normalizedScore !== null ? difficultyFromZipf(normalizedScore) : null;

    return {
      word,
      rawScore,
      normalizedScore,
      difficulty,
      occurrencesInEssay: counts.get(word) ?? 0
    };
  });
}

export function buildHistogram(
  values: number[],
  binCount = 10
): HistogramBinWithLabel[] {
  if (values.length === 0 || binCount <= 0) {
    return [];
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  if (min === max) {
    return [
      {
        start: min,
        end: max,
        count: values.length,
        label: `${min}`
      }
    ];
  }

  const width = (max - min) / binCount;

  const bins: HistogramBinWithLabel[] = Array.from({ length: binCount }, (_, index) => {
    const start = min + index * width;
    const end = index === binCount - 1 ? max : start + width;

    return {
      start,
      end,
      count: 0,
      label: `${start.toFixed(1)}–${end.toFixed(1)}`
    };
  });

  for (const value of values) {
    const rawIndex = Math.floor((value - min) / width);
    const index = Math.min(Math.max(rawIndex, 0), binCount - 1);
    bins[index].count += 1;
  }

  return bins;
}



function formatDifficultyRange(start: number, end: number): string {
  if (start === end) {
    return `${start.toFixed(1)}`;
  }
  return `${start.toFixed(1)}–${end.toFixed(1)}`;
}

function wordFitsBin(
  difficulty: number,
  bin: HistogramBinWithLabel,
  isLastBin: boolean
): boolean {
  if (isLastBin) {
    return difficulty >= bin.start && difficulty <= bin.end;
  }
  return difficulty >= bin.start && difficulty < bin.end;
}

function buildDifficultyExamples(
  points: SentencePoint[],
  map: Record<string, number>,
  binCount = 10
): DifficultyExample[] {
  const ranked = new Map<string, { count: number; difficulty: number }>();

  for (const point of points) {
    for (const word of point.words) {
      if (word.length < 3) {
        continue;
      }

      const difficulty = difficultyFromZipf(map[word]);
      const existing = ranked.get(word);

      if (existing) {
        existing.count += 1;
        continue;
      }

      ranked.set(word, {
        count: 1,
        difficulty
      });
    }
  }

  const entries = Array.from(ranked.entries()).map(([word, info]) => ({
    word,
    count: info.count,
    difficulty: info.difficulty
  }));

  if (entries.length === 0) {
    return [];
  }

  const wordBins = buildHistogram(
    entries.map((entry) => entry.difficulty),
    binCount
  );

  return wordBins.map((bin, index) => {
    const isLastBin = index === wordBins.length - 1;
    const midpoint = (bin.start + bin.end) / 2;

    const words = entries
      .filter((entry) => wordFitsBin(entry.difficulty, bin, isLastBin))
      .sort((a, b) => {
        if (b.count !== a.count) {
          return b.count - a.count;
        }
        const distanceA = Math.abs(a.difficulty - midpoint);
        const distanceB = Math.abs(b.difficulty - midpoint);
        if (distanceA !== distanceB) {
          return distanceA - distanceB;
        }
        return a.word.localeCompare(b.word);
      })
      .slice(0, 6)
      .map((entry) => entry.word);

    return {
      start: bin.start,
      end: bin.end,
      rangeLabel: formatDifficultyRange(bin.start, bin.end),
      words
    };
  });
}

export async function analyzeEssay(text: string): Promise<EssayAnalysis> {
  const { map, rawMap, dictionaryName, usedFallbackDictionary } = await loadSubtlexMap();
  const sentences = splitIntoSentences(text);

  const points: SentencePoint[] = sentences.map((sentence, index) => {
    const words = tokenizeSentence(sentence);
    const uniqueWordCount = new Set(words).size;

    const zipfScores = words.map((word) => map[word]);
    const knownScores = zipfScores.filter(
      (score): score is number => typeof score === "number"
    );

    const averageZipf =
      knownScores.length > 0
        ? knownScores.reduce((sum, score) => sum + score, 0) / knownScores.length
        : 0;

    const difficultyScores = words.map((word) => difficultyFromZipf(map[word]));
    const averageDifficulty =
      difficultyScores.length > 0
        ? difficultyScores.reduce((sum, score) => sum + score, 0) / difficultyScores.length
        : 0;

    const unknownWordCount = words.filter((word) => typeof map[word] !== "number").length;

    return {
      id: index + 1,
      sentence,
      words,
      uniqueWordCount,
      wordCount: words.length,
      averageDifficulty: round(averageDifficulty),
      averageZipf: round(averageZipf),
      unknownWordCount
    };
  });

  const wordCounts = points.map((point) => point.wordCount);
  const difficulties = points.map((point) => point.averageDifficulty);
  const xBins = buildHistogram(wordCounts, FIXED_BIN_COUNT);
  const yBins = buildHistogram(difficulties, FIXED_BIN_COUNT);
  const difficultyExamples = buildDifficultyExamples(points, map, FIXED_BIN_COUNT);
  const wordDiagnostics = buildWordDiagnostics(points, map, rawMap);

  const totalWords = points.reduce((sum, point) => sum + point.wordCount, 0);
  const totalUnknownWords = points.reduce((sum, point) => sum + point.unknownWordCount, 0);

  return {
    sentences: points,
    xBins,
    yBins,
    difficultyExamples,
    wordDiagnostics,
    dictionaryName,
    usedFallbackDictionary,
    unknownRate: totalWords ? round((totalUnknownWords / totalWords) * 100) : 0,
    summary: {
      sentenceCount: points.length,
      totalWords,
      averageSentenceLength: points.length ? round(totalWords / points.length) : 0,
      averageSentenceDifficulty: points.length
        ? round(
            points.reduce((sum, point) => sum + point.averageDifficulty, 0) / points.length
          )
        : 0
    }
  };
}
```

<a id="frontend-app-lib-analysis-types.ts"></a>
### 43. `frontend/app/lib/analysis/types.ts`
- Size: 1166 bytes | LOC: 55 | SLOC: 50 | TODOs: 0 | Modified: 2026-03-19 00:27:42 | SHA1: 5e4b510e8721

#### Brief
export type SentencePoint = {
  id: number;

#### Auto Summary
export type SentencePoint = {

#### Content

```typescript
export type SentencePoint = {
  id: number;
  sentence: string;
  words: string[];
  uniqueWordCount: number;
  wordCount: number;
  averageDifficulty: number;
  averageZipf: number;
  unknownWordCount: number;
};

export type HistogramBin = {
  start: number;
  end: number;
  count: number;
};

export type DifficultyExample = {
  start: number;
  end: number;
  rangeLabel: string;
  words: string[];
};

export type WordDiagnostic = {
  word: string;
  rawScore: number | null;
  normalizedScore: number | null;
  difficulty: number | null;
  occurrencesInEssay: number;
};

export type EssayAnalysis = {
  sentences: SentencePoint[];
  xBins: HistogramBin[];
  yBins: HistogramBin[];
  difficultyExamples: DifficultyExample[];
  wordDiagnostics: WordDiagnostic[];
  dictionaryName: string;
  usedFallbackDictionary: boolean;
  unknownRate: number;
  summary: {
    sentenceCount: number;
    totalWords: number;
    averageSentenceLength: number;
    averageSentenceDifficulty: number;
  };
};

export type DictionaryLoadResult = {
  map: Record<string, number>;
  rawMap: Record<string, number>;
  dictionaryName: string;
  usedFallbackDictionary: boolean;
};
```

<a id="frontend-app-lib-constants.ts"></a>
### 44. `frontend/app/lib/constants.ts`
- Size: 523 bytes | LOC: 21 | SLOC: 20 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: 833125ade9b6

#### Brief
export const APP_NAME = "Essay SUBTLEX Analysis";

#### Auto Summary
export const APP_NAME = "Essay SUBTLEX Analysis";

#### Content

```typescript
export const APP_NAME = "Essay SUBTLEX Analysis";

export const CHART_COLORS = {
  appBackground: "#f4f1f5",
  cardBackground: "#ffffff",
  cardBorder: "#d9d2dc",
  canvasBackground: "#efedf0",
  panelBackground: "#ece9ee",
  subtleText: "#6b6471",
  bodyText: "#2f2934",
  titleText: "#241f28",
  axisText: "#4b4550",
  labelText: "#302a35",
  axisLine: "#3b343f",
  grid: "#cfc7d3",
  histogramFill: "#e44be8",
  histogramStroke: "#7c1d7f",
  pointFill: "#f05ae8",
  pointStroke: "#ffffff",
  heatmapStroke: "#7c1d7f"
};
```

<a id="frontend-app-lib-problems_of_philosophy.txt"></a>
### 45. `frontend/app/lib/problems_of_philosophy.txt`
- Size: 269539 bytes | LOC: 4360 | SLOC: 3949 | TODOs: 0 | Modified: 2026-03-18 12:53:55 | SHA1: 6fa4f741ed4c

#### Brief
﻿The Project Gutenberg eBook of The Problems of Philosophy

#### Auto Summary
﻿The Project Gutenberg eBook of The Problems of Philosophy

#### Content

```
﻿The Project Gutenberg eBook of The Problems of Philosophy
    
This eBook is for the use of anyone anywhere in the United States and
most other parts of the world at no cost and with almost no restrictions
whatsoever. You may copy it, give it away or re-use it under the terms
of the Project Gutenberg License included with this eBook or online
at www.gutenberg.org. If you are not located in the United States,
you will have to check the laws of the country where you are located
before using this eBook.

Title: The Problems of Philosophy

Author: Bertrand Russell


        
Release date: June 1, 2004 [eBook #5827]
                Most recently updated: February 27, 2025

Language: English

Other information and formats: www.gutenberg.org/ebooks/5827

Credits: Produced by Gordon Keener, and David Widger


*** START OF THE PROJECT GUTENBERG EBOOK THE PROBLEMS OF PHILOSOPHY ***




THE PROBLEMS OF PHILOSOPHY


By Bertrand Russell




PREFACE

In the following pages I have confined myself in the main to those
problems of philosophy in regard to which I thought it possible to say
something positive and constructive, since merely negative criticism
seemed out of place. For this reason, theory of knowledge occupies a
larger space than metaphysics in the present volume, and some topics
much discussed by philosophers are treated very briefly, if at all.

I have derived valuable assistance from unpublished writings of G. E.
Moore and J. M. Keynes: from the former, as regards the relations
of sense-data to physical objects, and from the latter as regards
probability and induction. I have also profited greatly by the
criticisms and suggestions of Professor Gilbert Murray.

1912




CHAPTER I. APPEARANCE AND REALITY

Is there any knowledge in the world which is so certain that no
reasonable man could doubt it? This question, which at first sight might
not seem difficult, is really one of the most difficult that can
be asked. When we have realized the obstacles in the way of a
straightforward and confident answer, we shall be well launched on the
study of philosophy--for philosophy is merely the attempt to answer
such ultimate questions, not carelessly and dogmatically, as we do in
ordinary life and even in the sciences, but critically, after exploring
all that makes such questions puzzling, and after realizing all the
vagueness and confusion that underlie our ordinary ideas.

In daily life, we assume as certain many things which, on a closer
scrutiny, are found to be so full of apparent contradictions that only a
great amount of thought enables us to know what it is that we really may
believe. In the search for certainty, it is natural to begin with our
present experiences, and in some sense, no doubt, knowledge is to be
derived from them. But any statement as to what it is that our immediate
experiences make us know is very likely to be wrong. It seems to me that
I am now sitting in a chair, at a table of a certain shape, on which I
see sheets of paper with writing or print. By turning my head I see out
of the window buildings and clouds and the sun. I believe that the sun
is about ninety-three million miles from the earth; that it is a hot
globe many times bigger than the earth; that, owing to the earth's
rotation, it rises every morning, and will continue to do so for an
indefinite time in the future. I believe that, if any other normal
person comes into my room, he will see the same chairs and tables and
books and papers as I see, and that the table which I see is the same as
the table which I feel pressing against my arm. All this seems to be
so evident as to be hardly worth stating, except in answer to a man who
doubts whether I know anything. Yet all this may be reasonably doubted,
and all of it requires much careful discussion before we can be sure
that we have stated it in a form that is wholly true.

To make our difficulties plain, let us concentrate attention on the
table. To the eye it is oblong, brown and shiny, to the touch it is
smooth and cool and hard; when I tap it, it gives out a wooden sound.
Any one else who sees and feels and hears the table will agree with this
description, so that it might seem as if no difficulty would arise;
but as soon as we try to be more precise our troubles begin. Although
I believe that the table is 'really' of the same colour all over, the
parts that reflect the light look much brighter than the other parts,
and some parts look white because of reflected light. I know that, if
I move, the parts that reflect the light will be different, so that the
apparent distribution of colours on the table will change. It follows
that if several people are looking at the table at the same moment, no
two of them will see exactly the same distribution of colours, because
no two can see it from exactly the same point of view, and any change in
the point of view makes some change in the way the light is reflected.

For most practical purposes these differences are unimportant, but to
the painter they are all-important: the painter has to unlearn the habit
of thinking that things seem to have the colour which common sense says
they 'really' have, and to learn the habit of seeing things as they
appear. Here we have already the beginning of one of the distinctions
that cause most trouble in philosophy--the distinction between
'appearance' and 'reality', between what things seem to be and what they
are. The painter wants to know what things seem to be, the practical man
and the philosopher want to know what they are; but the philosopher's
wish to know this is stronger than the practical man's, and is more
troubled by knowledge as to the difficulties of answering the question.

To return to the table. It is evident from what we have found, that
there is no colour which pre-eminently appears to be _the_ colour of the
table, or even of any one particular part of the table--it appears to
be of different colours from different points of view, and there is
no reason for regarding some of these as more really its colour than
others. And we know that even from a given point of view the colour will
seem different by artificial light, or to a colour-blind man, or to a
man wearing blue spectacles, while in the dark there will be no colour
at all, though to touch and hearing the table will be unchanged. This
colour is not something which is inherent in the table, but something
depending upon the table and the spectator and the way the light falls
on the table. When, in ordinary life, we speak of _the_ colour of the
table, we only mean the sort of colour which it will seem to have to a
normal spectator from an ordinary point of view under usual conditions
of light. But the other colours which appear under other conditions
have just as good a right to be considered real; and therefore, to avoid
favouritism, we are compelled to deny that, in itself, the table has any
one particular colour.

The same thing applies to the texture. With the naked eye one can see
the grain, but otherwise the table looks smooth and even. If we looked
at it through a microscope, we should see roughnesses and hills and
valleys, and all sorts of differences that are imperceptible to the
naked eye. Which of these is the 'real' table? We are naturally tempted
to say that what we see through the microscope is more real, but that in
turn would be changed by a still more powerful microscope. If, then, we
cannot trust what we see with the naked eye, why should we trust what we
see through a microscope? Thus, again, the confidence in our senses with
which we began deserts us.

The shape of the table is no better. We are all in the habit of judging
as to the 'real' shapes of things, and we do this so unreflectingly that
we come to think we actually see the real shapes. But, in fact, as we
all have to learn if we try to draw, a given thing looks different
in shape from every different point of view. If our table is 'really'
rectangular, it will look, from almost all points of view, as if it had
two acute angles and two obtuse angles. If opposite sides are parallel,
they will look as if they converged to a point away from the spectator;
if they are of equal length, they will look as if the nearer side were
longer. All these things are not commonly noticed in looking at a table,
because experience has taught us to construct the 'real' shape from the
apparent shape, and the 'real' shape is what interests us as practical
men. But the 'real' shape is not what we see; it is something inferred
from what we see. And what we see is constantly changing in shape as we
move about the room; so that here again the senses seem not to give us
the truth about the table itself, but only about the appearance of the
table.

Similar difficulties arise when we consider the sense of touch. It is
true that the table always gives us a sensation of hardness, and we feel
that it resists pressure. But the sensation we obtain depends upon how
hard we press the table and also upon what part of the body we press
with; thus the various sensations due to various pressures or various
parts of the body cannot be supposed to reveal _directly_ any definite
property of the table, but at most to be _signs_ of some property which
perhaps _causes_ all the sensations, but is not actually apparent in any
of them. And the same applies still more obviously to the sounds which
can be elicited by rapping the table.

Thus it becomes evident that the real table, if there is one, is not the
same as what we immediately experience by sight or touch or hearing. The
real table, if there is one, is not _immediately_ known to us at all,
but must be an inference from what is immediately known. Hence, two very
difficult questions at once arise; namely, (1) Is there a real table at
all? (2) If so, what sort of object can it be?

It will help us in considering these questions to have a few simple
terms of which the meaning is definite and clear. Let us give the name
of 'sense-data' to the things that are immediately known in sensation:
such things as colours, sounds, smells, hardnesses, roughnesses, and
so on. We shall give the name 'sensation' to the experience of being
immediately aware of these things. Thus, whenever we see a colour,
we have a sensation _of_ the colour, but the colour itself is a
sense-datum, not a sensation. The colour is that _of_ which we are
immediately aware, and the awareness itself is the sensation. It is
plain that if we are to know anything about the table, it must be
by means of the sense-data--brown colour, oblong shape, smoothness,
etc.--which we associate with the table; but, for the reasons which have
been given, we cannot say that the table is the sense-data, or even
that the sense-data are directly properties of the table. Thus a problem
arises as to the relation of the sense-data to the real table, supposing
there is such a thing.

The real table, if it exists, we will call a 'physical object'. Thus
we have to consider the relation of sense-data to physical objects.
The collection of all physical objects is called 'matter'. Thus our two
questions may be re-stated as follows: (1) Is there any such thing as
matter? (2) If so, what is its nature?

The philosopher who first brought prominently forward the reasons
for regarding the immediate objects of our senses as not existing
independently of us was Bishop Berkeley (1685-1753). His _Three
Dialogues between Hylas and Philonous, in Opposition to Sceptics and
Atheists_, undertake to prove that there is no such thing as matter at
all, and that the world consists of nothing but minds and their ideas.
Hylas has hitherto believed in matter, but he is no match for Philonous,
who mercilessly drives him into contradictions and paradoxes, and makes
his own denial of matter seem, in the end, as if it were almost common
sense. The arguments employed are of very different value: some are
important and sound, others are confused or quibbling. But Berkeley
retains the merit of having shown that the existence of matter is
capable of being denied without absurdity, and that if there are any
things that exist independently of us they cannot be the immediate
objects of our sensations.

There are two different questions involved when we ask whether matter
exists, and it is important to keep them clear. We commonly mean by
'matter' something which is opposed to 'mind', something which we think
of as occupying space and as radically incapable of any sort of thought
or consciousness. It is chiefly in this sense that Berkeley denies
matter; that is to say, he does not deny that the sense-data which we
commonly take as signs of the existence of the table are really signs
of the existence of _something_ independent of us, but he does deny
that this something is non-mental, that it is neither mind nor ideas
entertained by some mind. He admits that there must be something which
continues to exist when we go out of the room or shut our eyes, and that
what we call seeing the table does really give us reason for believing
in something which persists even when we are not seeing it. But he
thinks that this something cannot be radically different in nature from
what we see, and cannot be independent of seeing altogether, though it
must be independent of _our_ seeing. He is thus led to regard the 'real'
table as an idea in the mind of God. Such an idea has the required
permanence and independence of ourselves, without being--as matter would
otherwise be--something quite unknowable, in the sense that we can only
infer it, and can never be directly and immediately aware of it.

Other philosophers since Berkeley have also held that, although the
table does not depend for its existence upon being seen by me, it does
depend upon being seen (or otherwise apprehended in sensation) by
_some_ mind--not necessarily the mind of God, but more often the whole
collective mind of the universe. This they hold, as Berkeley does,
chiefly because they think there can be nothing real--or at any rate
nothing known to be real except minds and their thoughts and feelings.
We might state the argument by which they support their view in some
such way as this: 'Whatever can be thought of is an idea in the mind of
the person thinking of it; therefore nothing can be thought of except
ideas in minds; therefore anything else is inconceivable, and what is
inconceivable cannot exist.'

Such an argument, in my opinion, is fallacious; and of course those who
advance it do not put it so shortly or so crudely. But whether valid or
not, the argument has been very widely advanced in one form or another;
and very many philosophers, perhaps a majority, have held that there is
nothing real except minds and their ideas. Such philosophers are called
'idealists'. When they come to explaining matter, they either say, like
Berkeley, that matter is really nothing but a collection of ideas,
or they say, like Leibniz (1646-1716), that what appears as matter is
really a collection of more or less rudimentary minds.

But these philosophers, though they deny matter as opposed to mind,
nevertheless, in another sense, admit matter. It will be remembered that
we asked two questions; namely, (1) Is there a real table at all? (2) If
so, what sort of object can it be? Now both Berkeley and Leibniz admit
that there is a real table, but Berkeley says it is certain ideas in the
mind of God, and Leibniz says it is a colony of souls. Thus both of them
answer our first question in the affirmative, and only diverge from the
views of ordinary mortals in their answer to our second question. In
fact, almost all philosophers seem to be agreed that there is a real
table: they almost all agree that, however much our sense-data--colour,
shape, smoothness, etc.--may depend upon us, yet their occurrence is
a sign of something existing independently of us, something differing,
perhaps, completely from our sense-data, and yet to be regarded as
causing those sense-data whenever we are in a suitable relation to the
real table.

Now obviously this point in which the philosophers are agreed--the view
that there _is_ a real table, whatever its nature may be--is vitally
important, and it will be worth while to consider what reasons there are
for accepting this view before we go on to the further question as
to the nature of the real table. Our next chapter, therefore, will be
concerned with the reasons for supposing that there is a real table at
all.

Before we go farther it will be well to consider for a moment what it
is that we have discovered so far. It has appeared that, if we take any
common object of the sort that is supposed to be known by the senses,
what the senses _immediately_ tell us is not the truth about the object
as it is apart from us, but only the truth about certain sense-data
which, so far as we can see, depend upon the relations between us and
the object. Thus what we directly see and feel is merely 'appearance',
which we believe to be a sign of some 'reality' behind. But if the
reality is not what appears, have we any means of knowing whether there
is any reality at all? And if so, have we any means of finding out what
it is like?

Such questions are bewildering, and it is difficult to know that even
the strangest hypotheses may not be true. Thus our familiar table,
which has roused but the slightest thoughts in us hitherto, has become a
problem full of surprising possibilities. The one thing we know about it
is that it is not what it seems. Beyond this modest result, so far, we
have the most complete liberty of conjecture. Leibniz tells us it is a
community of souls: Berkeley tells us it is an idea in the mind of God;
sober science, scarcely less wonderful, tells us it is a vast collection
of electric charges in violent motion.

Among these surprising possibilities, doubt suggests that perhaps there
is no table at all. Philosophy, if it cannot _answer_ so many questions
as we could wish, has at least the power of _asking_ questions which
increase the interest of the world, and show the strangeness and wonder
lying just below the surface even in the commonest things of daily life.



CHAPTER II. THE EXISTENCE OF MATTER

In this chapter we have to ask ourselves whether, in any sense at all,
there is such a thing as matter. Is there a table which has a certain
intrinsic nature, and continues to exist when I am not looking, or is
the table merely a product of my imagination, a dream-table in a very
prolonged dream? This question is of the greatest importance. For if
we cannot be sure of the independent existence of objects, we cannot
be sure of the independent existence of other people's bodies, and
therefore still less of other people's minds, since we have no grounds
for believing in their minds except such as are derived from observing
their bodies. Thus if we cannot be sure of the independent existence of
objects, we shall be left alone in a desert--it may be that the whole
outer world is nothing but a dream, and that we alone exist. This is an
uncomfortable possibility; but although it cannot be strictly proved to
be false, there is not the slightest reason to suppose that it is true.
In this chapter we have to see why this is the case.

Before we embark upon doubtful matters, let us try to find some more
or less fixed point from which to start. Although we are doubting the
physical existence of the table, we are not doubting the existence
of the sense-data which made us think there was a table; we are not
doubting that, while we look, a certain colour and shape appear to us,
and while we press, a certain sensation of hardness is experienced by
us. All this, which is psychological, we are not calling in question.
In fact, whatever else may be doubtful, some at least of our immediate
experiences seem absolutely certain.

Descartes (1596-1650), the founder of modern philosophy, invented a
method which may still be used with profit--the method of systematic
doubt. He determined that he would believe nothing which he did not see
quite clearly and distinctly to be true. Whatever he could bring himself
to doubt, he would doubt, until he saw reason for not doubting it.
By applying this method he gradually became convinced that the only
existence of which he could be _quite_ certain was his own. He imagined
a deceitful demon, who presented unreal things to his senses in a
perpetual phantasmagoria; it might be very improbable that such a demon
existed, but still it was possible, and therefore doubt concerning
things perceived by the senses was possible.

But doubt concerning his own existence was not possible, for if he did
not exist, no demon could deceive him. If he doubted, he must exist; if
he had any experiences whatever, he must exist. Thus his own existence
was an absolute certainty to him. 'I think, therefore I am,' he said
(_Cogito, ergo sum_); and on the basis of this certainty he set to work
to build up again the world of knowledge which his doubt had laid in
ruins. By inventing the method of doubt, and by showing that subjective
things are the most certain, Descartes performed a great service to
philosophy, and one which makes him still useful to all students of the
subject.

But some care is needed in using Descartes' argument. 'I think,
therefore I am' says rather more than is strictly certain. It might seem
as though we were quite sure of being the same person to-day as we were
yesterday, and this is no doubt true in some sense. But the real Self is
as hard to arrive at as the real table, and does not seem to have that
absolute, convincing certainty that belongs to particular experiences.
When I look at my table and see a certain brown colour, what is quite
certain at once is not '_I_ am seeing a brown colour', but rather,
'a brown colour is being seen'. This of course involves something (or
somebody) which (or who) sees the brown colour; but it does not of
itself involve that more or less permanent person whom we call 'I'. So
far as immediate certainty goes, it might be that the something which
sees the brown colour is quite momentary, and not the same as the
something which has some different experience the next moment.

Thus it is our particular thoughts and feelings that have primitive
certainty. And this applies to dreams and hallucinations as well as to
normal perceptions: when we dream or see a ghost, we certainly do have
the sensations we think we have, but for various reasons it is held that
no physical object corresponds to these sensations. Thus the certainty
of our knowledge of our own experiences does not have to be limited in
any way to allow for exceptional cases. Here, therefore, we have, for
what it is worth, a solid basis from which to begin our pursuit of
knowledge.

The problem we have to consider is this: Granted that we are certain of
our own sense-data, have we any reason for regarding them as signs of
the existence of something else, which we can call the physical object?
When we have enumerated all the sense-data which we should naturally
regard as connected with the table, have we said all there is to say
about the table, or is there still something else--something not a
sense-datum, something which persists when we go out of the room? Common
sense unhesitatingly answers that there is. What can be bought and sold
and pushed about and have a cloth laid on it, and so on, cannot be
a _mere_ collection of sense-data. If the cloth completely hides the
table, we shall derive no sense-data from the table, and therefore, if
the table were merely sense-data, it would have ceased to exist, and
the cloth would be suspended in empty air, resting, by a miracle, in
the place where the table formerly was. This seems plainly absurd; but
whoever wishes to become a philosopher must learn not to be frightened
by absurdities.

One great reason why it is felt that we must secure a physical object
in addition to the sense-data, is that we want the same object for
different people. When ten people are sitting round a dinner-table,
it seems preposterous to maintain that they are not seeing the same
tablecloth, the same knives and forks and spoons and glasses. But the
sense-data are private to each separate person; what is immediately
present to the sight of one is not immediately present to the sight of
another: they all see things from slightly different points of view, and
therefore see them slightly differently. Thus, if there are to be public
neutral objects, which can be in some sense known to many different
people, there must be something over and above the private and
particular sense-data which appear to various people. What reason, then,
have we for believing that there are such public neutral objects?

The first answer that naturally occurs to one is that, although
different people may see the table slightly differently, still they all
see more or less similar things when they look at the table, and
the variations in what they see follow the laws of perspective and
reflection of light, so that it is easy to arrive at a permanent object
underlying all the different people's sense-data. I bought my table from
the former occupant of my room; I could not buy _his_ sense-data,
which died when he went away, but I could and did buy the confident
expectation of more or less similar sense-data. Thus it is the fact that
different people have similar sense-data, and that one person in a given
place at different times has similar sense-data, which makes us suppose
that over and above the sense-data there is a permanent public object
which underlies or causes the sense-data of various people at various
times.

Now in so far as the above considerations depend upon supposing that
there are other people besides ourselves, they beg the very question at
issue. Other people are represented to me by certain sense-data, such as
the sight of them or the sound of their voices, and if I had no
reason to believe that there were physical objects independent of my
sense-data, I should have no reason to believe that other people exist
except as part of my dream. Thus, when we are trying to show that there
must be objects independent of our own sense-data, we cannot appeal to
the testimony of other people, since this testimony itself consists of
sense-data, and does not reveal other people's experiences unless our
own sense-data are signs of things existing independently of us. We must
therefore, if possible, find, in our own purely private experiences,
characteristics which show, or tend to show, that there are in the world
things other than ourselves and our private experiences.

In one sense it must be admitted that we can never prove the existence
of things other than ourselves and our experiences. No logical absurdity
results from the hypothesis that the world consists of myself and my
thoughts and feelings and sensations, and that everything else is mere
fancy. In dreams a very complicated world may seem to be present, and
yet on waking we find it was a delusion; that is to say, we find that
the sense-data in the dream do not appear to have corresponded with such
physical objects as we should naturally infer from our sense-data. (It
is true that, when the physical world is assumed, it is possible to
find physical causes for the sense-data in dreams: a door banging, for
instance, may cause us to dream of a naval engagement. But although, in
this case, there is a physical cause for the sense-data, there is not a
physical object corresponding to the sense-data in the way in which an
actual naval battle would correspond.) There is no logical impossibility
in the supposition that the whole of life is a dream, in which we
ourselves create all the objects that come before us. But although this
is not logically impossible, there is no reason whatever to suppose that
it is true; and it is, in fact, a less simple hypothesis, viewed as a
means of accounting for the facts of our own life, than the common-sense
hypothesis that there really are objects independent of us, whose action
on us causes our sensations.

The way in which simplicity comes in from supposing that there really
are physical objects is easily seen. If the cat appears at one moment in
one part of the room, and at another in another part, it is natural
to suppose that it has moved from the one to the other, passing over
a series of intermediate positions. But if it is merely a set of
sense-data, it cannot have ever been in any place where I did not see
it; thus we shall have to suppose that it did not exist at all while I
was not looking, but suddenly sprang into being in a new place. If
the cat exists whether I see it or not, we can understand from our own
experience how it gets hungry between one meal and the next; but if
it does not exist when I am not seeing it, it seems odd that appetite
should grow during non-existence as fast as during existence. And if the
cat consists only of sense-data, it cannot be hungry, since no hunger
but my own can be a sense-datum to me. Thus the behaviour of the
sense-data which represent the cat to me, though it seems quite natural
when regarded as an expression of hunger, becomes utterly inexplicable
when regarded as mere movements and changes of patches of colour, which
are as incapable of hunger as a triangle is of playing football.

But the difficulty in the case of the cat is nothing compared to the
difficulty in the case of human beings. When human beings speak--that
is, when we hear certain noises which we associate with ideas, and
simultaneously see certain motions of lips and expressions of face--it
is very difficult to suppose that what we hear is not the expression
of a thought, as we know it would be if we emitted the same sounds. Of
course similar things happen in dreams, where we are mistaken as to the
existence of other people. But dreams are more or less suggested by what
we call waking life, and are capable of being more or less accounted for
on scientific principles if we assume that there really is a physical
world. Thus every principle of simplicity urges us to adopt the natural
view, that there really are objects other than ourselves and our
sense-data which have an existence not dependent upon our perceiving
them.

Of course it is not by argument that we originally come by our belief in
an independent external world. We find this belief ready in ourselves as
soon as we begin to reflect: it is what may be called an _instinctive_
belief. We should never have been led to question this belief but for
the fact that, at any rate in the case of sight, it seems as if the
sense-datum itself were instinctively believed to be the independent
object, whereas argument shows that the object cannot be identical
with the sense-datum. This discovery, however--which is not at all
paradoxical in the case of taste and smell and sound, and only slightly
so in the case of touch--leaves undiminished our instinctive belief that
there _are_ objects _corresponding_ to our sense-data. Since this belief
does not lead to any difficulties, but on the contrary tends to simplify
and systematize our account of our experiences, there seems no good
reason for rejecting it. We may therefore admit--though with a slight
doubt derived from dreams--that the external world does really exist,
and is not wholly dependent for its existence upon our continuing to
perceive it.

The argument which has led us to this conclusion is doubtless less
strong than we could wish, but it is typical of many philosophical
arguments, and it is therefore worth while to consider briefly its
general character and validity. All knowledge, we find, must be built
up upon our instinctive beliefs, and if these are rejected, nothing
is left. But among our instinctive beliefs some are much stronger than
others, while many have, by habit and association, become entangled with
other beliefs, not really instinctive, but falsely supposed to be part
of what is believed instinctively.

Philosophy should show us the hierarchy of our instinctive beliefs,
beginning with those we hold most strongly, and presenting each as much
isolated and as free from irrelevant additions as possible. It should
take care to show that, in the form in which they are finally set forth,
our instinctive beliefs do not clash, but form a harmonious system.
There can never be any reason for rejecting one instinctive belief
except that it clashes with others; thus, if they are found to
harmonize, the whole system becomes worthy of acceptance.

It is of course _possible_ that all or any of our beliefs may be
mistaken, and therefore all ought to be held with at least some slight
element of doubt. But we cannot have _reason_ to reject a belief except
on the ground of some other belief. Hence, by organizing our instinctive
beliefs and their consequences, by considering which among them is most
possible, if necessary, to modify or abandon, we can arrive, on the
basis of accepting as our sole data what we instinctively believe, at an
orderly systematic organization of our knowledge, in which, though the
_possibility_ of error remains, its likelihood is diminished by the
interrelation of the parts and by the critical scrutiny which has
preceded acquiescence.

This function, at least, philosophy can perform. Most philosophers,
rightly or wrongly, believe that philosophy can do much more than
this--that it can give us knowledge, not otherwise attainable,
concerning the universe as a whole, and concerning the nature of
ultimate reality. Whether this be the case or not, the more modest
function we have spoken of can certainly be performed by philosophy, and
certainly suffices, for those who have once begun to doubt the adequacy
of common sense, to justify the arduous and difficult labours that
philosophical problems involve.



CHAPTER III. THE NATURE OF MATTER

In the preceding chapter we agreed, though without being able to
find demonstrative reasons, that it is rational to believe that our
sense-data--for example, those which we regard as associated with my
table--are really signs of the existence of something independent of us
and our perceptions. That is to say, over and above the sensations of
colour, hardness, noise, and so on, which make up the appearance of
the table to me, I assume that there is something else, of which these
things are appearances. The colour ceases to exist if I shut my eyes,
the sensation of hardness ceases to exist if I remove my arm from
contact with the table, the sound ceases to exist if I cease to rap the
table with my knuckles. But I do not believe that when all these things
cease the table ceases. On the contrary, I believe that it is because
the table exists continuously that all these sense-data will reappear
when I open my eyes, replace my arm, and begin again to rap with my
knuckles. The question we have to consider in this chapter is: What
is the nature of this real table, which persists independently of my
perception of it?

To this question physical science gives an answer, somewhat incomplete
it is true, and in part still very hypothetical, but yet deserving of
respect so far as it goes. Physical science, more or less unconsciously,
has drifted into the view that all natural phenomena ought to be reduced
to motions. Light and heat and sound are all due to wave-motions, which
travel from the body emitting them to the person who sees light or feels
heat or hears sound. That which has the wave-motion is either aether or
'gross matter', but in either case is what the philosopher would call
matter. The only properties which science assigns to it are position in
space, and the power of motion according to the laws of motion. Science
does not deny that it _may_ have other properties; but if so, such other
properties are not useful to the man of science, and in no way assist
him in explaining the phenomena.

It is sometimes said that 'light _is_ a form of wave-motion', but this
is misleading, for the light which we immediately see, which we know
directly by means of our senses, is _not_ a form of wave-motion, but
something quite different--something which we all know if we are not
blind, though we cannot describe it so as to convey our knowledge to a
man who is blind. A wave-motion, on the contrary, could quite well be
described to a blind man, since he can acquire a knowledge of space by
the sense of touch; and he can experience a wave-motion by a sea voyage
almost as well as we can. But this, which a blind man can understand, is
not what we mean by _light_: we mean by _light_ just that which a blind
man can never understand, and which we can never describe to him.

Now this something, which all of us who are not blind know, is not,
according to science, really to be found in the outer world: it is
something caused by the action of certain waves upon the eyes and nerves
and brain of the person who sees the light. When it is said that light
_is_ waves, what is really meant is that waves are the physical cause of
our sensations of light. But light itself, the thing which seeing people
experience and blind people do not, is not supposed by science to form
any part of the world that is independent of us and our senses. And very
similar remarks would apply to other kinds of sensations.

It is not only colours and sounds and so on that are absent from the
scientific world of matter, but also _space_ as we get it through sight
or touch. It is essential to science that its matter should be in _a_
space, but the space in which it is cannot be exactly the space we see
or feel. To begin with, space as we see it is not the same as space as
we get it by the sense of touch; it is only by experience in infancy
that we learn how to touch things we see, or how to get a sight of
things which we feel touching us. But the space of science is neutral as
between touch and sight; thus it cannot be either the space of touch or
the space of sight.

Again, different people see the same object as of different shapes,
according to their point of view. A circular coin, for example, though
we should always _judge_ it to be circular, will _look_ oval unless we
are straight in front of it. When we judge that it _is_ circular, we are
judging that it has a real shape which is not its apparent shape, but
belongs to it intrinsically apart from its appearance. But this real
shape, which is what concerns science, must be in a real space, not
the same as anybody's _apparent_ space. The real space is public, the
apparent space is private to the percipient. In different people's
_private_ spaces the same object seems to have different shapes; thus
the real space, in which it has its real shape, must be different from
the private spaces. The space of science, therefore, though _connected_
with the spaces we see and feel, is not identical with them, and the
manner of its connexion requires investigation.

We agreed provisionally that physical objects cannot be quite like
our sense-data, but may be regarded as _causing_ our sensations.
These physical objects are in the space of science, which we may call
'physical' space. It is important to notice that, if our sensations
are to be caused by physical objects, there must be a physical space
containing these objects and our sense-organs and nerves and brain. We
get a sensation of touch from an object when we are in contact with it;
that is to say, when some part of our body occupies a place in physical
space quite close to the space occupied by the object. We see an object
(roughly speaking) when no opaque body is between the object and our
eyes in physical space. Similarly, we only hear or smell or taste an
object when we are sufficiently near to it, or when it touches the
tongue, or has some suitable position in physical space relatively to
our body. We cannot begin to state what different sensations we shall
derive from a given object under different circumstances unless we
regard the object and our body as both in one physical space, for it is
mainly the relative positions of the object and our body that determine
what sensations we shall derive from the object.

Now our sense-data are situated in our private spaces, either the space
of sight or the space of touch or such vaguer spaces as other senses
may give us. If, as science and common sense assume, there is one public
all-embracing physical space in which physical objects are, the relative
positions of physical objects in physical space must more or less
correspond to the relative positions of sense-data in our private
spaces. There is no difficulty in supposing this to be the case. If we
see on a road one house nearer to us than another, our other senses will
bear out the view that it is nearer; for example, it will be reached
sooner if we walk along the road. Other people will agree that the house
which looks nearer to us is nearer; the ordnance map will take the
same view; and thus everything points to a spatial relation between the
houses corresponding to the relation between the sense-data which we see
when we look at the houses. Thus we may assume that there is a physical
space in which physical objects have spatial relations corresponding to
those which the corresponding sense-data have in our private spaces. It
is this physical space which is dealt with in geometry and assumed in
physics and astronomy.

Assuming that there is physical space, and that it does thus correspond
to private spaces, what can we know about it? We can know _only_ what is
required in order to secure the correspondence. That is to say, we can
know nothing of what it is like in itself, but we can know the sort
of arrangement of physical objects which results from their spatial
relations. We can know, for example, that the earth and moon and sun
are in one straight line during an eclipse, though we cannot know what
a physical straight line is in itself, as we know the look of a straight
line in our visual space. Thus we come to know much more about the
_relations_ of distances in physical space than about the distances
themselves; we may know that one distance is greater than another, or
that it is along the same straight line as the other, but we cannot have
that immediate acquaintance with physical distances that we have with
distances in our private spaces, or with colours or sounds or other
sense-data. We can know all those things about physical space which a
man born blind might know through other people about the space of sight;
but the kind of things which a man born blind could never know about the
space of sight we also cannot know about physical space. We can know the
properties of the relations required to preserve the correspondence with
sense-data, but we cannot know the nature of the terms between which the
relations hold.

With regard to time, our _feeling_ of duration or of the lapse of time
is notoriously an unsafe guide as to the time that has elapsed by the
clock. Times when we are bored or suffering pain pass slowly, times when
we are agreeably occupied pass quickly, and times when we are sleeping
pass almost as if they did not exist. Thus, in so far as time is
constituted by duration, there is the same necessity for distinguishing
a public and a private time as there was in the case of space. But in so
far as time consists in an _order_ of before and after, there is no need
to make such a distinction; the time-order which events seem to have is,
so far as we can see, the same as the time-order which they do have. At
any rate no reason can be given for supposing that the two orders are
not the same. The same is usually true of space: if a regiment of men
are marching along a road, the shape of the regiment will look different
from different points of view, but the men will appear arranged in the
same order from all points of view. Hence we regard the order as true
also in physical space, whereas the shape is only supposed to correspond
to the physical space so far as is required for the preservation of the
order.

In saying that the time-order which events seem to have is the same as
the time-order which they really have, it is necessary to guard against
a possible misunderstanding. It must not be supposed that the various
states of different physical objects have the same time-order as the
sense-data which constitute the perceptions of those objects. Considered
as physical objects, the thunder and lightning are simultaneous; that is
to say, the lightning is simultaneous with the disturbance of the air in
the place where the disturbance begins, namely, where the lightning
is. But the sense-datum which we call hearing the thunder does not take
place until the disturbance of the air has travelled as far as to where
we are. Similarly, it takes about eight minutes for the sun's light
to reach us; thus, when we see the sun we are seeing the sun of eight
minutes ago. So far as our sense-data afford evidence as to the physical
sun they afford evidence as to the physical sun of eight minutes ago; if
the physical sun had ceased to exist within the last eight minutes, that
would make no difference to the sense-data which we call 'seeing
the sun'. This affords a fresh illustration of the necessity of
distinguishing between sense-data and physical objects.

What we have found as regards space is much the same as what we find
in relation to the correspondence of the sense-data with their
physical counterparts. If one object looks blue and another red, we may
reasonably presume that there is some corresponding difference between
the physical objects; if two objects both look blue, we may presume a
corresponding similarity. But we cannot hope to be acquainted directly
with the quality in the physical object which makes it look blue or red.
Science tells us that this quality is a certain sort of wave-motion, and
this sounds familiar, because we think of wave-motions in the space we
see. But the wave-motions must really be in physical space, with which
we have no direct acquaintance; thus the real wave-motions have not that
familiarity which we might have supposed them to have. And what holds
for colours is closely similar to what holds for other sense-data. Thus
we find that, although the _relations_ of physical objects have all
sorts of knowable properties, derived from their correspondence with the
relations of sense-data, the physical objects themselves remain unknown
in their intrinsic nature, so far at least as can be discovered by means
of the senses. The question remains whether there is any other method of
discovering the intrinsic nature of physical objects.

The most natural, though not ultimately the most defensible, hypothesis
to adopt in the first instance, at any rate as regards visual
sense-data, would be that, though physical objects cannot, for the
reasons we have been considering, be _exactly_ like sense-data, yet they
may be more or less like. According to this view, physical objects will,
for example, really have colours, and we might, by good luck, see an
object as of the colour it really is. The colour which an object seems
to have at any given moment will in general be very similar, though
not quite the same, from many different points of view; we might thus
suppose the 'real' colour to be a sort of medium colour, intermediate
between the various shades which appear from the different points of
view.

Such a theory is perhaps not capable of being definitely refuted, but
it can be shown to be groundless. To begin with, it is plain that the
colour we see depends only upon the nature of the light-waves that
strike the eye, and is therefore modified by the medium intervening
between us and the object, as well as by the manner in which light is
reflected from the object in the direction of the eye. The intervening
air alters colours unless it is perfectly clear, and any strong
reflection will alter them completely. Thus the colour we see is a
result of the ray as it reaches the eye, and not simply a property of
the object from which the ray comes. Hence, also, provided certain waves
reach the eye, we shall see a certain colour, whether the object from
which the waves start has any colour or not. Thus it is quite gratuitous
to suppose that physical objects have colours, and therefore there is no
justification for making such a supposition. Exactly similar arguments
will apply to other sense-data.

It remains to ask whether there are any general philosophical arguments
enabling us to say that, if matter is real, it must be of such and such
a nature. As explained above, very many philosophers, perhaps most, have
held that whatever is real must be in some sense mental, or at any rate
that whatever we can know anything about must be in some sense mental.
Such philosophers are called 'idealists'. Idealists tell us that what
appears as matter is really something mental; namely, either (as Leibniz
held) more or less rudimentary minds, or (as Berkeley contended) ideas
in the minds which, as we should commonly say, 'perceive' the matter.
Thus idealists deny the existence of matter as something intrinsically
different from mind, though they do not deny that our sense-data are
signs of something which exists independently of our private sensations.
In the following chapter we shall consider briefly the reasons--in my
opinion fallacious--which idealists advance in favour of their theory.



CHAPTER IV. IDEALISM

The word 'idealism' is used by different philosophers in somewhat
different senses. We shall understand by it the doctrine that whatever
exists, or at any rate whatever can be known to exist, must be in
some sense mental. This doctrine, which is very widely held among
philosophers, has several forms, and is advocated on several different
grounds. The doctrine is so widely held, and so interesting in itself,
that even the briefest survey of philosophy must give some account of
it.

Those who are unaccustomed to philosophical speculation may be inclined
to dismiss such a doctrine as obviously absurd. There is no doubt that
common sense regards tables and chairs and the sun and moon and material
objects generally as something radically different from minds and the
contents of minds, and as having an existence which might continue if
minds ceased. We think of matter as having existed long before there
were any minds, and it is hard to think of it as a mere product of
mental activity. But whether true or false, idealism is not to be
dismissed as obviously absurd.

We have seen that, even if physical objects do have an independent
existence, they must differ very widely from sense-data, and can only
have a _correspondence_ with sense-data, in the same sort of way in
which a catalogue has a correspondence with the things catalogued. Hence
common sense leaves us completely in the dark as to the true intrinsic
nature of physical objects, and if there were good reason to regard them
as mental, we could not legitimately reject this opinion merely because
it strikes us as strange. The truth about physical objects _must_ be
strange. It may be unattainable, but if any philosopher believes that
he has attained it, the fact that what he offers as the truth is strange
ought not to be made a ground of objection to his opinion.

The grounds on which idealism is advocated are generally grounds derived
from the theory of knowledge, that is to say, from a discussion of the
conditions which things must satisfy in order that we may be able to
know them. The first serious attempt to establish idealism on such
grounds was that of Bishop Berkeley. He proved first, by arguments which
were largely valid, that our sense-data cannot be supposed to have an
existence independent of us, but must be, in part at least, 'in' the
mind, in the sense that their existence would not continue if there were
no seeing or hearing or touching or smelling or tasting. So far, his
contention was almost certainly valid, even if some of his arguments
were not so. But he went on to argue that sense-data were the only
things of whose existence our perceptions could assure us; and that
to be known is to be 'in' a mind, and therefore to be mental. Hence he
concluded that nothing can ever be known except what is in some mind,
and that whatever is known without being in my mind must be in some
other mind.

In order to understand his argument, it is necessary to understand his
use of the word 'idea'. He gives the name 'idea' to anything which
is _immediately_ known, as, for example, sense-data are known. Thus a
particular colour which we see is an idea; so is a voice which we hear,
and so on. But the term is not wholly confined to sense-data. There will
also be things remembered or imagined, for with such things also we have
immediate acquaintance at the moment of remembering or imagining. All
such immediate data he calls 'ideas'.

He then proceeds to consider common objects, such as a tree, for
instance. He shows that all we know immediately when we 'perceive' the
tree consists of ideas in his sense of the word, and he argues that
there is not the slightest ground for supposing that there is anything
real about the tree except what is perceived. Its being, he says,
consists in being perceived: in the Latin of the schoolmen its '_esse_'
is '_percipi_'. He fully admits that the tree must continue to exist
even when we shut our eyes or when no human being is near it. But this
continued existence, he says, is due to the fact that God continues to
perceive it; the 'real' tree, which corresponds to what we called the
physical object, consists of ideas in the mind of God, ideas more or
less like those we have when we see the tree, but differing in the fact
that they are permanent in God's mind so long as the tree continues
to exist. All our perceptions, according to him, consist in a
partial participation in God's perceptions, and it is because of this
participation that different people see more or less the same tree. Thus
apart from minds and their ideas there is nothing in the world, nor is
it possible that anything else should ever be known, since whatever is
known is necessarily an idea.

There are in this argument a good many fallacies which have been
important in the history of philosophy, and which it will be as well to
bring to light. In the first place, there is a confusion engendered by
the use of the word 'idea'. We think of an idea as essentially something
in somebody's mind, and thus when we are told that a tree consists
entirely of ideas, it is natural to suppose that, if so, the tree
must be entirely in minds. But the notion of being 'in' the mind is
ambiguous. We speak of bearing a person in mind, not meaning that the
person is in our minds, but that a thought of him is in our minds. When
a man says that some business he had to arrange went clean out of his
mind, he does not mean to imply that the business itself was ever in his
mind, but only that a thought of the business was formerly in his mind,
but afterwards ceased to be in his mind. And so when Berkeley says that
the tree must be in our minds if we can know it, all that he really has
a right to say is that a thought of the tree must be in our minds. To
argue that the tree itself must be in our minds is like arguing that a
person whom we bear in mind is himself in our minds. This confusion
may seem too gross to have been really committed by any competent
philosopher, but various attendant circumstances rendered it possible.
In order to see how it was possible, we must go more deeply into the
question as to the nature of ideas.

Before taking up the general question of the nature of ideas, we must
disentangle two entirely separate questions which arise concerning
sense-data and physical objects. We saw that, for various reasons of
detail, Berkeley was right in treating the sense-data which constitute
our perception of the tree as more or less subjective, in the sense that
they depend upon us as much as upon the tree, and would not exist if the
tree were not being perceived. But this is an entirely different point
from the one by which Berkeley seeks to prove that whatever can be
immediately known must be in a mind. For this purpose arguments of
detail as to the dependence of sense-data upon us are useless. It is
necessary to prove, generally, that by being known, things are shown to
be mental. This is what Berkeley believes himself to have done. It
is this question, and not our previous question as to the difference
between sense-data and the physical object, that must now concern us.

Taking the word 'idea' in Berkeley's sense, there are two quite distinct
things to be considered whenever an idea is before the mind. There is
on the one hand the thing of which we are aware--say the colour of my
table--and on the other hand the actual awareness itself, the mental act
of apprehending the thing. The mental act is undoubtedly mental, but is
there any reason to suppose that the thing apprehended is in any sense
mental? Our previous arguments concerning the colour did not prove it to
be mental; they only proved that its existence depends upon the relation
of our sense organs to the physical object--in our case, the table. That
is to say, they proved that a certain colour will exist, in a certain
light, if a normal eye is placed at a certain point relatively to
the table. They did not prove that the colour is in the mind of the
percipient.

Berkeley's view, that obviously the colour must be in the mind, seems
to depend for its plausibility upon confusing the thing apprehended
with the act of apprehension. Either of these might be called an 'idea';
probably either would have been called an idea by Berkeley. The act
is undoubtedly in the mind; hence, when we are thinking of the act,
we readily assent to the view that ideas must be in the mind. Then,
forgetting that this was only true when ideas were taken as acts of
apprehension, we transfer the proposition that 'ideas are in the mind'
to ideas in the other sense, i.e. to the things apprehended by our acts
of apprehension. Thus, by an unconscious equivocation, we arrive at the
conclusion that whatever we can apprehend must be in our minds. This
seems to be the true analysis of Berkeley's argument, and the ultimate
fallacy upon which it rests.

This question of the distinction between act and object in our
apprehending of things is vitally important, since our whole power of
acquiring knowledge is bound up with it. The faculty of being acquainted
with things other than itself is the main characteristic of a mind.
Acquaintance with objects essentially consists in a relation between the
mind and something other than the mind; it is this that constitutes the
mind's power of knowing things. If we say that the things known must be
in the mind, we are either unduly limiting the mind's power of knowing,
or we are uttering a mere tautology. We are uttering a mere tautology if
we mean by '_in_ the mind' the same as by '_before_ the mind', i.e. if
we mean merely being apprehended by the mind. But if we mean this, we
shall have to admit that what, _in this sense_, is in the mind,
may nevertheless be not mental. Thus when we realize the nature of
knowledge, Berkeley's argument is seen to be wrong in substance as well
as in form, and his grounds for supposing that 'ideas'--i.e. the objects
apprehended--must be mental, are found to have no validity whatever.
Hence his grounds in favour of idealism may be dismissed. It remains to
see whether there are any other grounds.

It is often said, as though it were a self-evident truism, that we
cannot know that anything exists which we do not know. It is inferred
that whatever can in any way be relevant to our experience must be at
least capable of being known by us; whence it follows that if matter
were essentially something with which we could not become acquainted,
matter would be something which we could not know to exist, and which
could have for us no importance whatever. It is generally also implied,
for reasons which remain obscure, that what can have no importance for
us cannot be real, and that therefore matter, if it is not composed of
minds or of mental ideas, is impossible and a mere chimaera.

To go into this argument fully at our present stage would be impossible,
since it raises points requiring a considerable preliminary discussion;
but certain reasons for rejecting the argument may be noticed at
once. To begin at the end: there is no reason why what cannot have any
_practical_ importance for us should not be real. It is true that,
if _theoretical_ importance is included, everything real is of _some_
importance to us, since, as persons desirous of knowing the truth about
the universe, we have some interest in everything that the universe
contains. But if this sort of interest is included, it is not the case
that matter has no importance for us, provided it exists even if we
cannot know that it exists. We can, obviously, suspect that it may
exist, and wonder whether it does; hence it is connected with our desire
for knowledge, and has the importance of either satisfying or thwarting
this desire.

Again, it is by no means a truism, and is in fact false, that we cannot
know that anything exists which we do not know. The word 'know' is here
used in two different senses. (1) In its first use it is applicable to
the sort of knowledge which is opposed to error, the sense in which
what we know is _true_, the sense which applies to our beliefs and
convictions, i.e. to what are called _judgements_. In this sense of the
word we know _that_ something is the case. This sort of knowledge may
be described as knowledge of _truths_. (2) In the second use of the word
'know' above, the word applies to our knowledge of _things_, which we
may call _acquaintance_. This is the sense in which we know sense-data.
(The distinction involved is roughly that between _savoir_ and
_connaître_ in French, or between _wissen_ and _kennen_ in German.)

Thus the statement which seemed like a truism becomes, when re-stated,
the following: 'We can never truly judge that something with which we
are not acquainted exists.' This is by no means a truism, but on the
contrary a palpable falsehood. I have not the honour to be acquainted
with the Emperor of China, but I truly judge that he exists. It may
be said, of course, that I judge this because of other people's
acquaintance with him. This, however, would be an irrelevant retort,
since, if the principle were true, I could not know that any one else
is acquainted with him. But further: there is no reason why I should not
know of the existence of something with which nobody is acquainted. This
point is important, and demands elucidation.

If I am acquainted with a thing which exists, my acquaintance gives
me the knowledge that it exists. But it is not true that, conversely,
whenever I can know that a thing of a certain sort exists, I or some one
else must be acquainted with the thing. What happens, in cases where I
have true judgement without acquaintance, is that the thing is known to
me by _description_, and that, in virtue of some general principle, the
existence of a thing answering to this description can be inferred
from the existence of something with which I am acquainted. In order
to understand this point fully, it will be well first to deal with
the difference between knowledge by acquaintance and knowledge by
description, and then to consider what knowledge of general principles,
if any, has the same kind of certainty as our knowledge of the existence
of our own experiences. These subjects will be dealt with in the
following chapters.



CHAPTER V. KNOWLEDGE BY ACQUAINTANCE AND KNOWLEDGE BY DESCRIPTION

In the preceding chapter we saw that there are two sorts of knowledge:
knowledge of things, and knowledge of truths. In this chapter we shall
be concerned exclusively with knowledge of things, of which in turn we
shall have to distinguish two kinds. Knowledge of things, when it is
of the kind we call knowledge by _acquaintance_, is essentially simpler
than any knowledge of truths, and logically independent of knowledge
of truths, though it would be rash to assume that human beings ever,
in fact, have acquaintance with things without at the same time knowing
some truth about them. Knowledge of things by _description_, on the
contrary, always involves, as we shall find in the course of the present
chapter, some knowledge of truths as its source and ground. But first of
all we must make clear what we mean by 'acquaintance' and what we mean
by 'description'.

We shall say that we have _acquaintance_ with anything of which we are
directly aware, without the intermediary of any process of inference
or any knowledge of truths. Thus in the presence of my table I am
acquainted with the sense-data that make up the appearance of my
table--its colour, shape, hardness, smoothness, etc.; all these are
things of which I am immediately conscious when I am seeing and touching
my table. The particular shade of colour that I am seeing may have many
things said about it--I may say that it is brown, that it is rather
dark, and so on. But such statements, though they make me know truths
about the colour, do not make me know the colour itself any better
than I did before so far as concerns knowledge of the colour itself, as
opposed to knowledge of truths about it, I know the colour perfectly and
completely when I see it, and no further knowledge of it itself is even
theoretically possible. Thus the sense-data which make up the
appearance of my table are things with which I have acquaintance, things
immediately known to me just as they are.

My knowledge of the table as a physical object, on the contrary, is not
direct knowledge. Such as it is, it is obtained through acquaintance
with the sense-data that make up the appearance of the table. We have
seen that it is possible, without absurdity, to doubt whether there is
a table at all, whereas it is not possible to doubt the sense-data. My
knowledge of the table is of the kind which we shall call 'knowledge
by description'. The table is 'the physical object which causes
such-and-such sense-data'. This describes the table by means of the
sense-data. In order to know anything at all about the table, we must
know truths connecting it with things with which we have acquaintance:
we must know that 'such-and-such sense-data are caused by a physical
object'. There is no state of mind in which we are directly aware of the
table; all our knowledge of the table is really knowledge of truths, and
the actual thing which is the table is not, strictly speaking, known
to us at all. We know a description, and we know that there is just one
object to which this description applies, though the object itself is
not directly known to us. In such a case, we say that our knowledge of
the object is knowledge by description.

All our knowledge, both knowledge of things and knowledge of truths,
rests upon acquaintance as its foundation. It is therefore important to
consider what kinds of things there are with which we have acquaintance.

Sense-data, as we have already seen, are among the things with which
we are acquainted; in fact, they supply the most obvious and striking
example of knowledge by acquaintance. But if they were the sole example,
our knowledge would be very much more restricted than it is. We should
only know what is now present to our senses: we could not know anything
about the past--not even that there was a past--nor could we know any
truths about our sense-data, for all knowledge of truths, as we shall
show, demands acquaintance with things which are of an essentially
different character from sense-data, the things which are sometimes
called 'abstract ideas', but which we shall call 'universals'. We have
therefore to consider acquaintance with other things besides sense-data
if we are to obtain any tolerably adequate analysis of our knowledge.

The first extension beyond sense-data to be considered is acquaintance
by _memory_. It is obvious that we often remember what we have seen or
heard or had otherwise present to our senses, and that in such cases we
are still immediately aware of what we remember, in spite of the fact
that it appears as past and not as present. This immediate knowledge by
memory is the source of all our knowledge concerning the past: without
it, there could be no knowledge of the past by inference, since we
should never know that there was anything past to be inferred.

The next extension to be considered is acquaintance by _introspection_.
We are not only aware of things, but we are often aware of being aware
of them. When I see the sun, I am often aware of my seeing the sun; thus
'my seeing the sun' is an object with which I have acquaintance. When
I desire food, I may be aware of my desire for food; thus 'my desiring
food' is an object with which I am acquainted. Similarly we may be
aware of our feeling pleasure or pain, and generally of the events which
happen in our minds. This kind of acquaintance, which may be called
self-consciousness, is the source of all our knowledge of mental things.
It is obvious that it is only what goes on in our own minds that can be
thus known immediately. What goes on in the minds of others is known
to us through our perception of their bodies, that is, through the
sense-data in us which are associated with their bodies. But for our
acquaintance with the contents of our own minds, we should be unable to
imagine the minds of others, and therefore we could never arrive at
the knowledge that they have minds. It seems natural to suppose that
self-consciousness is one of the things that distinguish men from
animals: animals, we may suppose, though they have acquaintance with
sense-data, never become aware of this acquaintance. I do not mean
that they _doubt_ whether they exist, but that they have never become
conscious of the fact that they have sensations and feelings, nor
therefore of the fact that they, the subjects of their sensations and
feelings, exist.

We have spoken of acquaintance with the contents of our minds as
_self_-consciousness, but it is not, of course, consciousness of our
_self_: it is consciousness of particular thoughts and feelings. The
question whether we are also acquainted with our bare selves, as opposed
to particular thoughts and feelings, is a very difficult one, upon which
it would be rash to speak positively. When we try to look into ourselves
we always seem to come upon some particular thought or feeling, and not
upon the 'I' which has the thought or feeling. Nevertheless there are
some reasons for thinking that we are acquainted with the 'I', though
the acquaintance is hard to disentangle from other things. To make clear
what sort of reason there is, let us consider for a moment what our
acquaintance with particular thoughts really involves.

When I am acquainted with 'my seeing the sun', it seems plain that I am
acquainted with two different things in relation to each other. On the
one hand there is the sense-datum which represents the sun to me, on the
other hand there is that which sees this sense-datum. All acquaintance,
such as my acquaintance with the sense-datum which represents the sun,
seems obviously a relation between the person acquainted and the object
with which the person is acquainted. When a case of acquaintance is one
with which I can be acquainted (as I am acquainted with my acquaintance
with the sense-datum representing the sun), it is plain that the person
acquainted is myself. Thus, when I am acquainted with my
seeing the sun, the whole fact with which I am acquainted is
'Self-acquainted-with-sense-datum'.

Further, we know the truth 'I am acquainted with this sense-datum'. It
is hard to see how we could know this truth, or even understand what is
meant by it, unless we were acquainted with something which we call 'I'.
It does not seem necessary to suppose that we are acquainted with a more
or less permanent person, the same to-day as yesterday, but it does seem
as though we must be acquainted with that thing, whatever its nature,
which sees the sun and has acquaintance with sense-data. Thus, in some
sense it would seem we must be acquainted with our Selves as opposed
to our particular experiences. But the question is difficult, and
complicated arguments can be adduced on either side. Hence, although
acquaintance with ourselves seems _probably_ to occur, it is not wise to
assert that it undoubtedly does occur.

We may therefore sum up as follows what has been said concerning
acquaintance with things that exist. We have acquaintance in sensation
with the data of the outer senses, and in introspection with the data of
what may be called the inner sense--thoughts, feelings, desires, etc.;
we have acquaintance in memory with things which have been data either
of the outer senses or of the inner sense. Further, it is probable,
though not certain, that we have acquaintance with Self, as that which
is aware of things or has desires towards things.

In addition to our acquaintance with particular existing things, we also
have acquaintance with what we shall call _universals_, that is to say,
general ideas, such as _whiteness_, _diversity_, _brotherhood_, and so
on. Every complete sentence must contain at least one word which stands
for a universal, since all verbs have a meaning which is universal. We
shall return to universals later on, in Chapter IX; for the present, it
is only necessary to guard against the supposition that whatever we can
be acquainted with must be something particular and existent. Awareness
of universals is called _conceiving_, and a universal of which we are
aware is called a _concept_.

It will be seen that among the objects with which we are acquainted
are not included physical objects (as opposed to sense-data), nor other
people's minds. These things are known to us by what I call 'knowledge
by description', which we must now consider.

By a 'description' I mean any phrase of the form 'a so-and-so' or
'the so-and-so'. A phrase of the form 'a so-and-so' I shall call an
'ambiguous' description; a phrase of the form 'the so-and-so' (in the
singular) I shall call a 'definite' description. Thus 'a man' is an
ambiguous description, and 'the man with the iron mask' is a definite
description. There are various problems connected with ambiguous
descriptions, but I pass them by, since they do not directly concern
the matter we are discussing, which is the nature of our knowledge
concerning objects in cases where we know that there is an object
answering to a definite description, though we are not acquainted with
any such object. This is a matter which is concerned exclusively with
definite descriptions. I shall therefore, in the sequel, speak simply of
'descriptions' when I mean 'definite descriptions'. Thus a description
will mean any phrase of the form 'the so-and-so' in the singular.

We shall say that an object is 'known by description' when we know that
it is 'the so-and-so', i.e. when we know that there is one object, and
no more, having a certain property; and it will generally be implied
that we do not have knowledge of the same object by acquaintance. We
know that the man with the iron mask existed, and many propositions
are known about him; but we do not know who he was. We know that the
candidate who gets the most votes will be elected, and in this case we
are very likely also acquainted (in the only sense in which one can
be acquainted with some one else) with the man who is, in fact, the
candidate who will get most votes; but we do not know which of the
candidates he is, i.e. we do not know any proposition of the form 'A is
the candidate who will get most votes' where A is one of the candidates
by name. We shall say that we have 'merely descriptive knowledge' of the
so-and-so when, although we know that the so-and-so exists, and although
we may possibly be acquainted with the object which is, in fact, the
so-and-so, yet we do not know any proposition '_a_ is the so-and-so',
where _a_ is something with which we are acquainted.

When we say 'the so-and-so exists', we mean that there is just one
object which is the so-and-so. The proposition '_a_ is the so-and-so'
means that _a_ has the property so-and-so, and nothing else has. 'Mr.
A. is the Unionist candidate for this constituency' means 'Mr. A. is
a Unionist candidate for this constituency, and no one else is'. 'The
Unionist candidate for this constituency exists' means 'some one is a
Unionist candidate for this constituency, and no one else is'. Thus,
when we are acquainted with an object which is the so-and-so, we know
that the so-and-so exists; but we may know that the so-and-so exists
when we are not acquainted with any object which we know to be the
so-and-so, and even when we are not acquainted with any object which, in
fact, is the so-and-so.

Common words, even proper names, are usually really descriptions. That
is to say, the thought in the mind of a person using a proper name
correctly can generally only be expressed explicitly if we replace the
proper name by a description. Moreover, the description required to
express the thought will vary for different people, or for the same
person at different times. The only thing constant (so long as the name
is rightly used) is the object to which the name applies. But so long as
this remains constant, the particular description involved usually makes
no difference to the truth or falsehood of the proposition in which the
name appears.

Let us take some illustrations. Suppose some statement made about
Bismarck. Assuming that there is such a thing as direct acquaintance
with oneself, Bismarck himself might have used his name directly to
designate the particular person with whom he was acquainted. In this
case, if he made a judgement about himself, he himself might be a
constituent of the judgement. Here the proper name has the direct use
which it always wishes to have, as simply standing for a certain object,
and not for a description of the object. But if a person who knew
Bismarck made a judgement about him, the case is different. What this
person was acquainted with were certain sense-data which he connected
(rightly, we will suppose) with Bismarck's body. His body, as a physical
object, and still more his mind, were only known as the body and the
mind connected with these sense-data. That is, they were known by
description. It is, of course, very much a matter of chance which
characteristics of a man's appearance will come into a friend's mind
when he thinks of him; thus the description actually in the friend's
mind is accidental. The essential point is that he knows that the
various descriptions all apply to the same entity, in spite of not being
acquainted with the entity in question.

When we, who did not know Bismarck, make a judgement about him, the
description in our minds will probably be some more or less vague mass
of historical knowledge--far more, in most cases, than is required to
identify him. But, for the sake of illustration, let us assume that we
think of him as 'the first Chancellor of the German Empire'. Here all
the words are abstract except 'German'. The word 'German' will, again,
have different meanings for different people. To some it will recall
travels in Germany, to some the look of Germany on the map, and so on.
But if we are to obtain a description which we know to be applicable,
we shall be compelled, at some point, to bring in a reference to a
particular with which we are acquainted. Such reference is involved in
any mention of past, present, and future (as opposed to definite dates),
or of here and there, or of what others have told us. Thus it would seem
that, in some way or other, a description known to be applicable to a
particular must involve some reference to a particular with which we
are acquainted, if our knowledge about the thing described is not to be
merely what follows _logically_ from the description. For example, 'the
most long-lived of men' is a description involving only universals,
which must apply to some man, but we can make no judgements concerning
this man which involve knowledge about him beyond what the description
gives. If, however, we say, 'The first Chancellor of the German Empire
was an astute diplomatist', we can only be assured of the truth of our
judgement in virtue of something with which we are acquainted--usually a
testimony heard or read. Apart from the information we convey to others,
apart from the fact about the actual Bismarck, which gives importance
to our judgement, the thought we really have contains the one or more
particulars involved, and otherwise consists wholly of concepts.

All names of places--London, England, Europe, the Earth, the Solar
System--similarly involve, when used, descriptions which start from some
one or more particulars with which we are acquainted. I suspect that
even the Universe, as considered by metaphysics, involves such a
connexion with particulars. In logic, on the contrary, where we are
concerned not merely with what does exist, but with whatever might or
could exist or be, no reference to actual particulars is involved.

It would seem that, when we make a statement about something only known
by description, we often _intend_ to make our statement, not in the form
involving the description, but about the actual thing described. That
is to say, when we say anything about Bismarck, we should like, if we
could, to make the judgement which Bismarck alone can make, namely,
the judgement of which he himself is a constituent. In this we are
necessarily defeated, since the actual Bismarck is unknown to us. But
we know that there is an object B, called Bismarck, and that B was an
astute diplomatist. We can thus _describe_ the proposition we should
like to affirm, namely, 'B was an astute diplomatist', where B is the
object which was Bismarck. If we are describing Bismarck as 'the first
Chancellor of the German Empire', the proposition we should like to
affirm may be described as 'the proposition asserting, concerning the
actual object which was the first Chancellor of the German Empire, that
this object was an astute diplomatist'. What enables us to communicate
in spite of the varying descriptions we employ is that we know there is
a true proposition concerning the actual Bismarck, and that however we
may vary the description (so long as the description is correct) the
proposition described is still the same. This proposition, which is
described and is known to be true, is what interests us; but we are not
acquainted with the proposition itself, and do not know it, though we
know it is true.

It will be seen that there are various stages in the removal from
acquaintance with particulars: there is Bismarck to people who knew him;
Bismarck to those who only know of him through history; the man with
the iron mask; the longest-lived of men. These are progressively further
removed from acquaintance with particulars; the first comes as near to
acquaintance as is possible in regard to another person; in the second,
we shall still be said to know 'who Bismarck was'; in the third, we do
not know who was the man with the iron mask, though we can know many
propositions about him which are not logically deducible from the fact
that he wore an iron mask; in the fourth, finally, we know nothing
beyond what is logically deducible from the definition of the man. There
is a similar hierarchy in the region of universals. Many universals,
like many particulars, are only known to us by description. But here,
as in the case of particulars, knowledge concerning what is known by
description is ultimately reducible to knowledge concerning what is
known by acquaintance.

The fundamental principle in the analysis of propositions containing
descriptions is this: _Every proposition which we can understand must be
composed wholly of constituents with which we are acquainted_.

We shall not at this stage attempt to answer all the objections which
may be urged against this fundamental principle. For the present, we
shall merely point out that, in some way or other, it must be possible
to meet these objections, for it is scarcely conceivable that we can
make a judgement or entertain a supposition without knowing what it is
that we are judging or supposing about. We must attach _some_ meaning
to the words we use, if we are to speak significantly and not utter mere
noise; and the meaning we attach to our words must be something with
which we are acquainted. Thus when, for example, we make a statement
about Julius Caesar, it is plain that Julius Caesar himself is not
before our minds, since we are not acquainted with him. We have in mind
some description of Julius Caesar: 'the man who was assassinated on the
Ides of March', 'the founder of the Roman Empire', or, perhaps, merely
'the man whose name was _Julius Caesar_'. (In this last description,
_Julius Caesar_ is a noise or shape with which we are acquainted.)
Thus our statement does not mean quite what it seems to mean, but means
something involving, instead of Julius Caesar, some description of him
which is composed wholly of particulars and universals with which we are
acquainted.

The chief importance of knowledge by description is that it enables us
to pass beyond the limits of our private experience. In spite of the
fact that we can only know truths which are wholly composed of terms
which we have experienced in acquaintance, we can yet have knowledge by
description of things which we have never experienced. In view of the
very narrow range of our immediate experience, this result is vital, and
until it is understood, much of our knowledge must remain mysterious and
therefore doubtful.



CHAPTER VI. ON INDUCTION

In almost all our previous discussions we have been concerned in
the attempt to get clear as to our data in the way of knowledge of
existence. What things are there in the universe whose existence is
known to us owing to our being acquainted with them? So far, our answer
has been that we are acquainted with our sense-data, and, probably,
with ourselves. These we know to exist. And past sense-data which
are remembered are known to have existed in the past. This knowledge
supplies our data.

But if we are to be able to draw inferences from these data--if we are
to know of the existence of matter, of other people, of the past before
our individual memory begins, or of the future, we must know general
principles of some kind by means of which such inferences can be drawn.
It must be known to us that the existence of some one sort of thing, A,
is a sign of the existence of some other sort of thing, B, either at
the same time as A or at some earlier or later time, as, for example,
thunder is a sign of the earlier existence of lightning. If this were
not known to us, we could never extend our knowledge beyond the
sphere of our private experience; and this sphere, as we have seen, is
exceedingly limited. The question we have now to consider is whether
such an extension is possible, and if so, how it is effected.

Let us take as an illustration a matter about which none of us, in fact,
feel the slightest doubt. We are all convinced that the sun will rise
to-morrow. Why? Is this belief a mere blind outcome of past experience,
or can it be justified as a reasonable belief? It is not easy to find
a test by which to judge whether a belief of this kind is reasonable or
not, but we can at least ascertain what sort of general beliefs would
suffice, if true, to justify the judgement that the sun will rise
to-morrow, and the many other similar judgements upon which our actions
are based.

It is obvious that if we are asked why we believe that the sun will rise
to-morrow, we shall naturally answer 'Because it always has risen every
day'. We have a firm belief that it will rise in the future, because it
has risen in the past. If we are challenged as to why we believe that
it will continue to rise as heretofore, we may appeal to the laws of
motion: the earth, we shall say, is a freely rotating body, and such
bodies do not cease to rotate unless something interferes from outside,
and there is nothing outside to interfere with the earth between now and
to-morrow. Of course it might be doubted whether we are quite certain
that there is nothing outside to interfere, but this is not the
interesting doubt. The interesting doubt is as to whether the laws
of motion will remain in operation until to-morrow. If this doubt is
raised, we find ourselves in the same position as when the doubt about
the sunrise was first raised.

The _only_ reason for believing that the laws of motion will remain in
operation is that they have operated hitherto, so far as our knowledge
of the past enables us to judge. It is true that we have a greater body
of evidence from the past in favour of the laws of motion than we have
in favour of the sunrise, because the sunrise is merely a particular
case of fulfilment of the laws of motion, and there are countless other
particular cases. But the real question is: Do _any_ number of cases
of a law being fulfilled in the past afford evidence that it will be
fulfilled in the future? If not, it becomes plain that we have no ground
whatever for expecting the sun to rise to-morrow, or for expecting the
bread we shall eat at our next meal not to poison us, or for any of the
other scarcely conscious expectations that control our daily lives. It
is to be observed that all such expectations are only _probable_; thus
we have not to seek for a proof that they _must_ be fulfilled, but
only for some reason in favour of the view that they are _likely_ to be
fulfilled.

Now in dealing with this question we must, to begin with, make an
important distinction, without which we should soon become involved
in hopeless confusions. Experience has shown us that, hitherto, the
frequent repetition of some uniform succession or coexistence has been a
_cause_ of our expecting the same succession or coexistence on the next
occasion. Food that has a certain appearance generally has a certain
taste, and it is a severe shock to our expectations when the familiar
appearance is found to be associated with an unusual taste. Things which
we see become associated, by habit, with certain tactile sensations
which we expect if we touch them; one of the horrors of a ghost (in
many ghost-stories) is that it fails to give us any sensations of touch.
Uneducated people who go abroad for the first time are so surprised as
to be incredulous when they find their native language not understood.

And this kind of association is not confined to men; in animals also it
is very strong. A horse which has been often driven along a certain
road resists the attempt to drive him in a different direction. Domestic
animals expect food when they see the person who usually feeds them. We
know that all these rather crude expectations of uniformity are liable
to be misleading. The man who has fed the chicken every day throughout
its life at last wrings its neck instead, showing that more refined
views as to the uniformity of nature would have been useful to the
chicken.

But in spite of the misleadingness of such expectations, they
nevertheless exist. The mere fact that something has happened a certain
number of times causes animals and men to expect that it will happen
again. Thus our instincts certainly cause us to believe that the sun
will rise to-morrow, but we may be in no better a position than the
chicken which unexpectedly has its neck wrung. We have therefore to
distinguish the fact that past uniformities _cause_ expectations as to
the future, from the question whether there is any reasonable ground for
giving weight to such expectations after the question of their validity
has been raised.

The problem we have to discuss is whether there is any reason for
believing in what is called 'the uniformity of nature'. The belief in
the uniformity of nature is the belief that everything that has happened
or will happen is an instance of some general law to which there are no
exceptions. The crude expectations which we have been considering are
all subject to exceptions, and therefore liable to disappoint those who
entertain them. But science habitually assumes, at least as a working
hypothesis, that general rules which have exceptions can be replaced by
general rules which have no exceptions. 'Unsupported bodies in air fall'
is a general rule to which balloons and aeroplanes are exceptions. But
the laws of motion and the law of gravitation, which account for the
fact that most bodies fall, also account for the fact that balloons and
aeroplanes can rise; thus the laws of motion and the law of gravitation
are not subject to these exceptions.

The belief that the sun will rise to-morrow might be falsified if the
earth came suddenly into contact with a large body which destroyed its
rotation; but the laws of motion and the law of gravitation would not
be infringed by such an event. The business of science is to find
uniformities, such as the laws of motion and the law of gravitation,
to which, so far as our experience extends, there are no exceptions.
In this search science has been remarkably successful, and it may be
conceded that such uniformities have held hitherto. This brings us back
to the question: Have we any reason, assuming that they have always held
in the past, to suppose that they will hold in the future?

It has been argued that we have reason to know that the future will
resemble the past, because what was the future has constantly become the
past, and has always been found to resemble the past, so that we really
have experience of the future, namely of times which were formerly
future, which we may call past futures. But such an argument really begs
the very question at issue. We have experience of past futures, but not
of future futures, and the question is: Will future futures resemble
past futures? This question is not to be answered by an argument which
starts from past futures alone. We have therefore still to seek for some
principle which shall enable us to know that the future will follow the
same laws as the past.

The reference to the future in this question is not essential. The same
question arises when we apply the laws that work in our experience to
past things of which we have no experience--as, for example, in geology,
or in theories as to the origin of the Solar System. The question we
really have to ask is: 'When two things have been found to be often
associated, and no instance is known of the one occurring without the
other, does the occurrence of one of the two, in a fresh instance, give
any good ground for expecting the other?' On our answer to this question
must depend the validity of the whole of our expectations as to the
future, the whole of the results obtained by induction, and in fact
practically all the beliefs upon which our daily life is based.

It must be conceded, to begin with, that the fact that two things have
been found often together and never apart does not, by itself, suffice
to _prove_ demonstratively that they will be found together in the next
case we examine. The most we can hope is that the oftener things are
found together, the more probable it becomes that they will be found
together another time, and that, if they have been found together often
enough, the probability will amount _almost_ to certainty. It can
never quite reach certainty, because we know that in spite of frequent
repetitions there sometimes is a failure at the last, as in the case
of the chicken whose neck is wrung. Thus probability is all we ought to
seek.

It might be urged, as against the view we are advocating, that we
know all natural phenomena to be subject to the reign of law, and that
sometimes, on the basis of observation, we can see that only one law
can possibly fit the facts of the case. Now to this view there are two
answers. The first is that, even if _some_ law which has no exceptions
applies to our case, we can never, in practice, be sure that we have
discovered that law and not one to which there are exceptions. The
second is that the reign of law would seem to be itself only probable,
and that our belief that it will hold in the future, or in unexamined
cases in the past, is itself based upon the very principle we are
examining.

The principle we are examining may be called the _principle of
induction_, and its two parts may be stated as follows:

(a) When a thing of a certain sort A has been found to be associated
with a thing of a certain other sort B, and has never been found
dissociated from a thing of the sort B, the greater the number of cases
in which A and B have been associated, the greater is the probability
that they will be associated in a fresh case in which one of them is
known to be present;

(b) Under the same circumstances, a sufficient number of cases of
association will make the probability of a fresh association nearly a
certainty, and will make it approach certainty without limit.

As just stated, the principle applies only to the verification of our
expectation in a single fresh instance. But we want also to know that
there is a probability in favour of the general law that things of the
sort A are _always_ associated with things of the sort B, provided a
sufficient number of cases of association are known, and no cases of
failure of association are known. The probability of the general law is
obviously less than the probability of the particular case, since if the
general law is true, the particular case must also be true, whereas
the particular case may be true without the general law being true.
Nevertheless the probability of the general law is increased by
repetitions, just as the probability of the particular case is. We may
therefore repeat the two parts of our principle as regards the general
law, thus:

(a) The greater the number of cases in which a thing of the sort A has
been found associated with a thing of the sort B, the more probable it
is (if no cases of failure of association are known) that A is always
associated with B;

b) Under the same circumstances, a sufficient number of cases of the
association of A with B will make it nearly certain that A is always
associated with B, and will make this general law approach certainty
without limit.

It should be noted that probability is always relative to certain data.
In our case, the data are merely the known cases of coexistence of A and
B. There may be other data, which _might_ be taken into account, which
would gravely alter the probability. For example, a man who had seen a
great many white swans might argue, by our principle, that on the
data it was _probable_ that all swans were white, and this might be a
perfectly sound argument. The argument is not disproved by the fact that
some swans are black, because a thing may very well happen in spite of
the fact that some data render it improbable. In the case of the swans,
a man might know that colour is a very variable characteristic in many
species of animals, and that, therefore, an induction as to colour is
peculiarly liable to error. But this knowledge would be a fresh datum,
by no means proving that the probability relatively to our previous data
had been wrongly estimated. The fact, therefore, that things often fail
to fulfil our expectations is no evidence that our expectations will not
_probably_ be fulfilled in a given case or a given class of cases. Thus
our inductive principle is at any rate not capable of being _disproved_
by an appeal to experience.

The inductive principle, however, is equally incapable of being _proved_
by an appeal to experience. Experience might conceivably confirm
the inductive principle as regards the cases that have been already
examined; but as regards unexamined cases, it is the inductive principle
alone that can justify any inference from what has been examined to what
has not been examined. All arguments which, on the basis of experience,
argue as to the future or the unexperienced parts of the past or
present, assume the inductive principle; hence we can never use
experience to prove the inductive principle without begging the
question. Thus we must either accept the inductive principle on the
ground of its intrinsic evidence, or forgo all justification of our
expectations about the future. If the principle is unsound, we have no
reason to expect the sun to rise to-morrow, to expect bread to be more
nourishing than a stone, or to expect that if we throw ourselves off
the roof we shall fall. When we see what looks like our best friend
approaching us, we shall have no reason to suppose that his body is not
inhabited by the mind of our worst enemy or of some total stranger. All
our conduct is based upon associations which have worked in the past,
and which we therefore regard as likely to work in the future; and this
likelihood is dependent for its validity upon the inductive principle.

The general principles of science, such as the belief in the reign
of law, and the belief that every event must have a cause, are as
completely dependent upon the inductive principle as are the beliefs of
daily life All such general principles are believed because mankind have
found innumerable instances of their truth and no instances of their
falsehood. But this affords no evidence for their truth in the future,
unless the inductive principle is assumed.

Thus all knowledge which, on a basis of experience tells us something
about what is not experienced, is based upon a belief which experience
can neither confirm nor confute, yet which, at least in its more
concrete applications, appears to be as firmly rooted in us as many
of the facts of experience. The existence and justification of such
beliefs--for the inductive principle, as we shall see, is not the only
example--raises some of the most difficult and most debated problems of
philosophy. We will, in the next chapter, consider briefly what may be
said to account for such knowledge, and what is its scope and its degree
of certainty.



CHAPTER VII. ON OUR KNOWLEDGE OF GENERAL PRINCIPLES

We saw in the preceding chapter that the principle of induction, while
necessary to the validity of all arguments based on experience,
is itself not capable of being proved by experience, and yet is
unhesitatingly believed by every one, at least in all its concrete
applications. In these characteristics the principle of induction does
not stand alone. There are a number of other principles which cannot be
proved or disproved by experience, but are used in arguments which start
from what is experienced.

Some of these principles have even greater evidence than the principle
of induction, and the knowledge of them has the same degree of certainty
as the knowledge of the existence of sense-data. They constitute the
means of drawing inferences from what is given in sensation; and if what
we infer is to be true, it is just as necessary that our principles
of inference should be true as it is that our data should be true. The
principles of inference are apt to be overlooked because of their
very obviousness--the assumption involved is assented to without our
realizing that it is an assumption. But it is very important to realize
the use of principles of inference, if a correct theory of knowledge
is to be obtained; for our knowledge of them raises interesting and
difficult questions.

In all our knowledge of general principles, what actually happens
is that first of all we realize some particular application of the
principle, and then we realize that the particularity is irrelevant, and
that there is a generality which may equally truly be affirmed. This is
of course familiar in such matters as teaching arithmetic: 'two and
two are four' is first learnt in the case of some particular pair of
couples, and then in some other particular case, and so on, until at
last it becomes possible to see that it is true of any pair of couples.
The same thing happens with logical principles. Suppose two men are
discussing what day of the month it is. One of them says, 'At least you
will admit that _if_ yesterday was the 15th to-day must be the 16th.'
'Yes', says the other, 'I admit that.' 'And you know', the first
continues, 'that yesterday was the 15th, because you dined with Jones,
and your diary will tell you that was on the 15th.' 'Yes', says the
second; 'therefore to-day _is_ the 16th.'

Now such an argument is not hard to follow; and if it is granted that
its premisses are true in fact, no one will deny that the conclusion
must also be true. But it depends for its truth upon an instance of a
general logical principle. The logical principle is as follows: 'Suppose
it known that _if_ this is true, then that is true. Suppose it also
known that this _is_ true, then it follows that that is true.' When it
is the case that if this is true, that is true, we shall say that this
'implies' that, and that that 'follows from' this. Thus our principle
states that if this implies that, and this is true, then that is true.
In other words, 'anything implied by a true proposition is true', or
'whatever follows from a true proposition is true'.

This principle is really involved--at least, concrete instances of it
are involved--in all demonstrations. Whenever one thing which we believe
is used to prove something else, which we consequently believe, this
principle is relevant. If any one asks: 'Why should I accept the results
of valid arguments based on true premisses?' we can only answer by
appealing to our principle. In fact, the truth of the principle is
impossible to doubt, and its obviousness is so great that at first sight
it seems almost trivial. Such principles, however, are not trivial to
the philosopher, for they show that we may have indubitable knowledge
which is in no way derived from objects of sense.

The above principle is merely one of a certain number of self-evident
logical principles. Some at least of these principles must be granted
before any argument or proof becomes possible. When some of them have
been granted, others can be proved, though these others, so long as they
are simple, are just as obvious as the principles taken for granted. For
no very good reason, three of these principles have been singled out by
tradition under the name of 'Laws of Thought'.

They are as follows:

(1) _The law of identity_: 'Whatever is, is.'

(2) _The law of contradiction_: 'Nothing can both be and not be.'

(3) _The law of excluded middle_: 'Everything must either be or not be.'

These three laws are samples of self-evident logical principles, but
are not really more fundamental or more self-evident than various other
similar principles: for instance, the one we considered just now, which
states that what follows from a true premiss is true. The name 'laws of
thought' is also misleading, for what is important is not the fact that
we think in accordance with these laws, but the fact that things behave
in accordance with them; in other words, the fact that when we think in
accordance with them we think _truly_. But this is a large question, to
which we must return at a later stage.

In addition to the logical principles which enable us to prove from
a given premiss that something is _certainly_ true, there are other
logical principles which enable us to prove, from a given premiss,
that there is a greater or less probability that something is true. An
example of such principles--perhaps the most important example is the
inductive principle, which we considered in the preceding chapter.

One of the great historic controversies in philosophy is the controversy
between the two schools called respectively 'empiricists' and
'rationalists'. The empiricists--who are best represented by the
British philosophers, Locke, Berkeley, and Hume--maintained that all
our knowledge is derived from experience; the rationalists--who are
represented by the Continental philosophers of the seventeenth century,
especially Descartes and Leibniz--maintained that, in addition to what
we know by experience, there are certain 'innate ideas' and 'innate
principles', which we know independently of experience. It has now
become possible to decide with some confidence as to the truth or
falsehood of these opposing schools. It must be admitted, for the
reasons already stated, that logical principles are known to us, and
cannot be themselves proved by experience, since all proof presupposes
them. In this, therefore, which was the most important point of the
controversy, the rationalists were in the right.

On the other hand, even that part of our knowledge which is _logically_
independent of experience (in the sense that experience cannot prove
it) is yet elicited and caused by experience. It is on occasion of
particular experiences that we become aware of the general laws which
their connexions exemplify. It would certainly be absurd to suppose that
there are innate principles in the sense that babies are born with a
knowledge of everything which men know and which cannot be deduced from
what is experienced. For this reason, the word 'innate' would not now be
employed to describe our knowledge of logical principles. The phrase
'_a priori_' is less objectionable, and is more usual in modern writers.
Thus, while admitting that all knowledge is elicited and caused by
experience, we shall nevertheless hold that some knowledge is _a
priori_, in the sense that the experience which makes us think of it
does not suffice to prove it, but merely so directs our attention that
we see its truth without requiring any proof from experience.

There is another point of great importance, in which the empiricists
were in the right as against the rationalists. Nothing can be known to
_exist_ except by the help of experience. That is to say, if we wish to
prove that something of which we have no direct experience exists, we
must have among our premisses the existence of one or more things of
which we have direct experience. Our belief that the Emperor of China
exists, for example, rests upon testimony, and testimony consists,
in the last analysis, of sense-data seen or heard in reading or being
spoken to. Rationalists believed that, from general consideration as
to what must be, they could deduce the existence of this or that in the
actual world. In this belief they seem to have been mistaken. All the
knowledge that we can acquire _a priori_ concerning existence seems
to be hypothetical: it tells us that if one thing exists, another must
exist, or, more generally, that if one proposition is true, another must
be true. This is exemplified by the principles we have already dealt
with, such as '_if_ this is true, and this implies that, then that is
true', or '_if_ this and that have been repeatedly found connected, they
will probably be connected in the next instance in which one of them is
found'. Thus the scope and power of _a priori_ principles is strictly
limited. All knowledge that something exists must be in part dependent
on experience. When anything is known immediately, its existence is
known by experience alone; when anything is proved to exist, without
being known immediately, both experience and _a priori_ principles must
be required in the proof. Knowledge is called _empirical_ when it rests
wholly or partly upon experience. Thus all knowledge which asserts
existence is empirical, and the only _a priori_ knowledge concerning
existence is hypothetical, giving connexions among things that exist or
may exist, but not giving actual existence.

_A priori_ knowledge is not all of the logical kind we have been
hitherto considering. Perhaps the most important example of non-logical
_a priori_ knowledge is knowledge as to ethical value. I am not speaking
of judgements as to what is useful or as to what is virtuous, for such
judgements do require empirical premisses; I am speaking of judgements
as to the intrinsic desirability of things. If something is useful, it
must be useful because it secures some end; the end must, if we have
gone far enough, be valuable on its own account, and not merely because
it is useful for some further end. Thus all judgements as to what is
useful depend upon judgements as to what has value on its own account.

We judge, for example, that happiness is more desirable than misery,
knowledge than ignorance, goodwill than hatred, and so on. Such
judgements must, in part at least, be immediate and _a priori_. Like our
previous _a priori_ judgements, they may be elicited by experience, and
indeed they must be; for it seems not possible to judge whether anything
is intrinsically valuable unless we have experienced something of
the same kind. But it is fairly obvious that they cannot be proved by
experience; for the fact that a thing exists or does not exist cannot
prove either that it is good that it should exist or that it is bad. The
pursuit of this subject belongs to ethics, where the impossibility of
deducing what ought to be from what is has to be established. In the
present connexion, it is only important to realize that knowledge as to
what is intrinsically of value is _a priori_ in the same sense in
which logic is _a priori_, namely in the sense that the truth of such
knowledge can be neither proved nor disproved by experience.

All pure mathematics is _a priori_, like logic. This was strenuously
denied by the empirical philosophers, who maintained that experience was
as much the source of our knowledge of arithmetic as of our knowledge of
geography. They maintained that by the repeated experience of seeing two
things and two other things, and finding that altogether they made four
things, we were led by induction to the conclusion that two things
and two other things would _always_ make four things altogether. If,
however, this were the source of our knowledge that two and two are
four, we should proceed differently, in persuading ourselves of its
truth, from the way in which we do actually proceed. In fact, a certain
number of instances are needed to make us think of two abstractly,
rather than of two coins or two books or two people, or two of any other
specified kind. But as soon as we are able to divest our thoughts of
irrelevant particularity, we become able to see the general principle
that two and two are four; any one instance is seen to be _typical_, and
the examination of other instances becomes unnecessary.(1)

(1) Cf. A. N. Whitehead, _Introduction to Mathematics_ (Home University
Library).

The same thing is exemplified in geometry. If we want to prove some
property of _all_ triangles, we draw some one triangle and reason about
it; but we can avoid making use of any property which it does not share
with all other triangles, and thus, from our particular case, we obtain
a general result. We do not, in fact, feel our certainty that two and
two are four increased by fresh instances, because, as soon as we have
seen the truth of this proposition, our certainty becomes so great as
to be incapable of growing greater. Moreover, we feel some quality of
necessity about the proposition 'two and two are four', which is
absent from even the best attested empirical generalizations. Such
generalizations always remain mere facts: we feel that there might be a
world in which they were false, though in the actual world they happen
to be true. In any possible world, on the contrary, we feel that two
and two would be four: this is not a mere fact, but a necessity to which
everything actual and possible must conform.

The case may be made clearer by considering a genuinely-empirical
generalization, such as 'All men are mortal.' It is plain that we
believe this proposition, in the first place, because there is no known
instance of men living beyond a certain age, and in the second place
because there seem to be physiological grounds for thinking that an
organism such as a man's body must sooner or later wear out. Neglecting
the second ground, and considering merely our experience of men's
mortality, it is plain that we should not be content with one quite
clearly understood instance of a man dying, whereas, in the case of 'two
and two are four', one instance does suffice, when carefully considered,
to persuade us that the same must happen in any other instance. Also
we can be forced to admit, on reflection, that there may be some doubt,
however slight, as to whether _all_ men are mortal. This may be made
plain by the attempt to imagine two different worlds, in one of which
there are men who are not mortal, while in the other two and two make
five. When Swift invites us to consider the race of Struldbugs who never
die, we are able to acquiesce in imagination. But a world where two
and two make five seems quite on a different level. We feel that such a
world, if there were one, would upset the whole fabric of our knowledge
and reduce us to utter doubt.

The fact is that, in simple mathematical judgements such as 'two and two
are four', and also in many judgements of logic, we can know the general
proposition without inferring it from instances, although some instance
is usually necessary to make clear to us what the general proposition
means. This is why there is real utility in the process of _deduction_,
which goes from the general to the general, or from the general to the
particular, as well as in the process of _induction_, which goes from
the particular to the particular, or from the particular to the general.
It is an old debate among philosophers whether deduction ever gives
_new_ knowledge. We can now see that in certain cases, at least, it does
do so. If we already know that two and two always make four, and we
know that Brown and Jones are two, and so are Robinson and Smith, we can
deduce that Brown and Jones and Robinson and Smith are four. This is
new knowledge, not contained in our premisses, because the general
proposition, 'two and two are four', never told us there were such
people as Brown and Jones and Robinson and Smith, and the particular
premisses do not tell us that there were four of them, whereas the
particular proposition deduced does tell us both these things.

But the newness of the knowledge is much less certain if we take the
stock instance of deduction that is always given in books on logic,
namely, 'All men are mortal; Socrates is a man, therefore Socrates is
mortal.' In this case, what we really know beyond reasonable doubt is
that certain men, A, B, C, were mortal, since, in fact, they have died.
If Socrates is one of these men, it is foolish to go the roundabout way
through 'all men are mortal' to arrive at the conclusion that _probably_
Socrates is mortal. If Socrates is not one of the men on whom our
induction is based, we shall still do better to argue straight from our
A, B, C, to Socrates, than to go round by the general proposition, 'all
men are mortal'. For the probability that Socrates is mortal is greater,
on our data, than the probability that all men are mortal. (This is
obvious, because if all men are mortal, so is Socrates; but if Socrates
is mortal, it does not follow that all men are mortal.) Hence we shall
reach the conclusion that Socrates is mortal with a greater approach to
certainty if we make our argument purely inductive than if we go by way
of 'all men are mortal' and then use deduction.

This illustrates the difference between general propositions known _a
priori_ such as 'two and two are four', and empirical generalizations
such as 'all men are mortal'. In regard to the former, deduction is the
right mode of argument, whereas in regard to the latter, induction is
always theoretically preferable, and warrants a greater confidence in
the truth of our conclusion, because all empirical generalizations are
more uncertain than the instances of them.

We have now seen that there are propositions known _a priori_, and that
among them are the propositions of logic and pure mathematics, as well
as the fundamental propositions of ethics. The question which must
next occupy us is this: How is it possible that there should be such
knowledge? And more particularly, how can there be knowledge of general
propositions in cases where we have not examined all the instances, and
indeed never can examine them all, because their number is infinite?
These questions, which were first brought prominently forward by
the German philosopher Kant (1724-1804), are very difficult, and
historically very important.



CHAPTER VIII. HOW _A PRIORI_ KNOWLEDGE IS POSSIBLE

Immanuel Kant is generally regarded as the greatest of the modern
philosophers. Though he lived through the Seven Years War and the
French Revolution, he never interrupted his teaching of philosophy at
Königsberg in East Prussia. His most distinctive contribution was the
invention of what he called the 'critical' philosophy, which, assuming
as a datum that there is knowledge of various kinds, inquired how such
knowledge comes to be possible, and deduced, from the answer to this
inquiry, many metaphysical results as to the nature of the world.
Whether these results were valid may well be doubted. But Kant
undoubtedly deserves credit for two things: first, for having perceived
that we have _a priori_ knowledge which is not purely 'analytic', i.e.
such that the opposite would be self-contradictory, and secondly,
for having made evident the philosophical importance of the theory of
knowledge.

Before the time of Kant, it was generally held that whatever knowledge
was _a priori_ must be 'analytic'. What this word means will be best
illustrated by examples. If I say, 'A bald man is a man', 'A plane
figure is a figure', 'A bad poet is a poet', I make a purely analytic
judgement: the subject spoken about is given as having at least two
properties, of which one is singled out to be asserted of it. Such
propositions as the above are trivial, and would never be enunciated
in real life except by an orator preparing the way for a piece of
sophistry. They are called 'analytic' because the predicate is obtained
by merely analysing the subject. Before the time of Kant it was thought
that all judgements of which we could be certain _a priori_ were of this
kind: that in all of them there was a predicate which was only part
of the subject of which it was asserted. If this were so, we should be
involved in a definite contradiction if we attempted to deny anything
that could be known _a priori_. 'A bald man is not bald' would assert
and deny baldness of the same man, and would therefore contradict
itself. Thus according to the philosophers before Kant, the law of
contradiction, which asserts that nothing can at the same time have and
not have a certain property, sufficed to establish the truth of all _a
priori_ knowledge.

Hume (1711-76), who preceded Kant, accepting the usual view as to what
makes knowledge _a priori_, discovered that, in many cases which had
previously been supposed analytic, and notably in the case of cause and
effect, the connexion was really synthetic. Before Hume, rationalists at
least had supposed that the effect could be logically deduced from the
cause, if only we had sufficient knowledge. Hume argued--correctly, as
would now be generally admitted--that this could not be done. Hence he
inferred the far more doubtful proposition that nothing could be known
_a priori_ about the connexion of cause and effect. Kant, who had been
educated in the rationalist tradition, was much perturbed by Hume's
scepticism, and endeavoured to find an answer to it. He perceived that
not only the connexion of cause and effect, but all the propositions
of arithmetic and geometry, are 'synthetic', i.e. not analytic: in
all these propositions, no analysis of the subject will reveal the
predicate. His stock instance was the proposition 7 + 5 = 12. He pointed
out, quite truly, that 7 and 5 have to be put together to give 12: the
idea of 12 is not contained in them, nor even in the idea of adding them
together. Thus he was led to the conclusion that all pure mathematics,
though _a priori_, is synthetic; and this conclusion raised a new
problem of which he endeavoured to find the solution.

The question which Kant put at the beginning of his philosophy, namely
'How is pure mathematics possible?' is an interesting and difficult one,
to which every philosophy which is not purely sceptical must find
some answer. The answer of the pure empiricists, that our mathematical
knowledge is derived by induction from particular instances, we have
already seen to be inadequate, for two reasons: first, that the validity
of the inductive principle itself cannot be proved by induction;
secondly, that the general propositions of mathematics, such as 'two
and two always make four', can obviously be known with certainty by
consideration of a single instance, and gain nothing by enumeration of
other cases in which they have been found to be true. Thus our knowledge
of the general propositions of mathematics (and the same applies to
logic) must be accounted for otherwise than our (merely probable)
knowledge of empirical generalizations such as 'all men are mortal'.

The problem arises through the fact that such knowledge is general,
whereas all experience is particular. It seems strange that we should
apparently be able to know some truths in advance about particular
things of which we have as yet no experience; but it cannot easily be
doubted that logic and arithmetic will apply to such things. We do not
know who will be the inhabitants of London a hundred years hence; but
we know that any two of them and any other two of them will make four of
them. This apparent power of anticipating facts about things of which
we have no experience is certainly surprising. Kant's solution of the
problem, though not valid in my opinion, is interesting. It is, however,
very difficult, and is differently understood by different philosophers.
We can, therefore, only give the merest outline of it, and even that
will be thought misleading by many exponents of Kant's system.

What Kant maintained was that in all our experience there are two
elements to be distinguished, the one due to the object (i.e. to what we
have called the 'physical object'), the other due to our own nature. We
saw, in discussing matter and sense-data, that the physical object is
different from the associated sense-data, and that the sense-data are to
be regarded as resulting from an interaction between the physical
object and ourselves. So far, we are in agreement with Kant. But what
is distinctive of Kant is the way in which he apportions the shares of
ourselves and the physical object respectively. He considers that the
crude material given in sensation--the colour, hardness, etc.--is due
to the object, and that what we supply is the arrangement in space
and time, and all the relations between sense-data which result from
comparison or from considering one as the cause of the other or in any
other way. His chief reason in favour of this view is that we seem
to have _a priori_ knowledge as to space and time and causality and
comparison, but not as to the actual crude material of sensation. We can
be sure, he says, that anything we shall ever experience must show the
characteristics affirmed of it in our _a priori_ knowledge, because
these characteristics are due to our own nature, and therefore
nothing can ever come into our experience without acquiring these
characteristics.

The physical object, which he calls the 'thing in itself',(1) he regards
as essentially unknowable; what can be known is the object as we have it
in experience, which he calls the 'phenomenon'. The phenomenon, being
a joint product of us and the thing in itself, is sure to have those
characteristics which are due to us, and is therefore sure to conform
to our _a priori_ knowledge. Hence this knowledge, though true of all
actual and possible experience, must not be supposed to apply outside
experience. Thus in spite of the existence of _a priori_ knowledge, we
cannot know anything about the thing in itself or about what is not
an actual or possible object of experience. In this way he tries to
reconcile and harmonize the contentions of the rationalists with the
arguments of the empiricists.

(1) Kant's 'thing in itself' is identical in _definition_ with
the physical object, namely, it is the cause of sensations. In the
properties deduced from the definition it is not identical, since Kant
held (in spite of some inconsistency as regards cause) that we can know
that none of the categories are applicable to the 'thing in itself'.

Apart from minor grounds on which Kant's philosophy may be criticized,
there is one main objection which seems fatal to any attempt to deal
with the problem of _a priori_ knowledge by his method. The thing to
be accounted for is our certainty that the facts must always conform to
logic and arithmetic. To say that logic and arithmetic are contributed
by us does not account for this. Our nature is as much a fact of the
existing world as anything, and there can be no certainty that it will
remain constant. It might happen, if Kant is right, that to-morrow
our nature would so change as to make two and two become five. This
possibility seems never to have occurred to him, yet it is one which
utterly destroys the certainty and universality which he is anxious
to vindicate for arithmetical propositions. It is true that this
possibility, formally, is inconsistent with the Kantian view that time
itself is a form imposed by the subject upon phenomena, so that our
real Self is not in time and has no to-morrow. But he will still have
to suppose that the time-order of phenomena is determined by
characteristics of what is behind phenomena, and this suffices for the
substance of our argument.

Reflection, moreover, seems to make it clear that, if there is any truth
in our arithmetical beliefs, they must apply to things equally whether
we think of them or not. Two physical objects and two other physical
objects must make four physical objects, even if physical objects cannot
be experienced. To assert this is certainly within the scope of what
we mean when we state that two and two are four. Its truth is just as
indubitable as the truth of the assertion that two phenomena and two
other phenomena make four phenomena. Thus Kant's solution unduly limits
the scope of _a priori_ propositions, in addition to failing in the
attempt at explaining their certainty.

Apart from the special doctrines advocated by Kant, it is very common
among philosophers to regard what is _a priori_ as in some sense mental,
as concerned rather with the way we must think than with any fact of
the outer world. We noted in the preceding chapter the three principles
commonly called 'laws of thought'. The view which led to their being so
named is a natural one, but there are strong reasons for thinking
that it is erroneous. Let us take as an illustration the law of
contradiction. This is commonly stated in the form 'Nothing can both be
and not be', which is intended to express the fact that nothing can at
once have and not have a given quality. Thus, for example, if a tree
is a beech it cannot also be not a beech; if my table is rectangular it
cannot also be not rectangular, and so on.

Now what makes it natural to call this principle a law of _thought_
is that it is by thought rather than by outward observation that we
persuade ourselves of its necessary truth. When we have seen that a tree
is a beech, we do not need to look again in order to ascertain whether
it is also not a beech; thought alone makes us know that this is
impossible. But the conclusion that the law of contradiction is a law
of _thought_ is nevertheless erroneous. What we believe, when we believe
the law of contradiction, is not that the mind is so made that it must
believe the law of contradiction. _This_ belief is a subsequent result
of psychological reflection, which presupposes the belief in the law of
contradiction. The belief in the law of contradiction is a belief about
things, not only about thoughts. It is not, e.g., the belief that if we
_think_ a certain tree is a beech, we cannot at the same time _think_
that it is not a beech; it is the belief that if the tree _is_ a
beech, it cannot at the same time _be_ not a beech. Thus the law of
contradiction is about things, and not merely about thoughts; and
although belief in the law of contradiction is a thought, the law of
contradiction itself is not a thought, but a fact concerning the things
in the world. If this, which we believe when we believe the law of
contradiction, were not true of the things in the world, the fact
that we were compelled to _think_ it true would not save the law of
contradiction from being false; and this shows that the law is not a law
of _thought_.

A similar argument applies to any other _a priori_ judgement. When we
judge that two and two are four, we are not making a judgement about our
thoughts, but about all actual or possible couples. The fact that our
minds are so constituted as to believe that two and two are four, though
it is true, is emphatically not what we assert when we assert that two
and two are four. And no fact about the constitution of our minds could
make it _true_ that two and two are four. Thus our _a priori_ knowledge,
if it is not erroneous, is not merely knowledge about the constitution
of our minds, but is applicable to whatever the world may contain, both
what is mental and what is non-mental.

The fact seems to be that all our _a priori_ knowledge is concerned with
entities which do not, properly speaking, _exist_, either in the mental
or in the physical world. These entities are such as can be named by
parts of speech which are not substantives; they are such entities as
qualities and relations. Suppose, for instance, that I am in my room. I
exist, and my room exists; but does 'in' exist? Yet obviously the word
'in' has a meaning; it denotes a relation which holds between me and my
room. This relation is something, although we cannot say that it exists
_in the same sense_ in which I and my room exist. The relation 'in' is
something which we can think about and understand, for, if we could not
understand it, we could not understand the sentence 'I am in my room'.
Many philosophers, following Kant, have maintained that relations are
the work of the mind, that things in themselves have no relations,
but that the mind brings them together in one act of thought and thus
produces the relations which it judges them to have.

This view, however, seems open to objections similar to those which we
urged before against Kant. It seems plain that it is not thought which
produces the truth of the proposition 'I am in my room'. It may be true
that an earwig is in my room, even if neither I nor the earwig nor any
one else is aware of this truth; for this truth concerns only the earwig
and the room, and does not depend upon anything else. Thus relations, as
we shall see more fully in the next chapter, must be placed in a world
which is neither mental nor physical. This world is of great importance
to philosophy, and in particular to the problems of _a priori_
knowledge. In the next chapter we shall proceed to develop its nature
and its bearing upon the questions with which we have been dealing.



CHAPTER IX. THE WORLD OF UNIVERSALS

At the end of the preceding chapter we saw that such entities as
relations appear to have a being which is in some way different from
that of physical objects, and also different from that of minds and from
that of sense-data. In the present chapter we have to consider what is
the nature of this kind of being, and also what objects there are that
have this kind of being. We will begin with the latter question.

The problem with which we are now concerned is a very old one, since it
was brought into philosophy by Plato. Plato's 'theory of ideas' is an
attempt to solve this very problem, and in my opinion it is one of the
most successful attempts hitherto made. The theory to be advocated in
what follows is largely Plato's, with merely such modifications as time
has shown to be necessary.

The way the problem arose for Plato was more or less as follows. Let
us consider, say, such a notion as _justice_. If we ask ourselves what
justice is, it is natural to proceed by considering this, that, and the
other just act, with a view to discovering what they have in common.
They must all, in some sense, partake of a common nature, which will be
found in whatever is just and in nothing else. This common nature, in
virtue of which they are all just, will be justice itself, the pure
essence the admixture of which with facts of ordinary life produces the
multiplicity of just acts. Similarly with any other word which may be
applicable to common facts, such as 'whiteness' for example. The word
will be applicable to a number of particular things because they all
participate in a common nature or essence. This pure essence is what
Plato calls an 'idea' or 'form'. (It must not be supposed that 'ideas',
in his sense, exist in minds, though they may be apprehended by minds.)
The 'idea' _justice_ is not identical with anything that is just: it is
something other than particular things, which particular things partake
of. Not being particular, it cannot itself exist in the world of sense.
Moreover it is not fleeting or changeable like the things of sense: it
is eternally itself, immutable and indestructible.

Thus Plato is led to a supra-sensible world, more real than the common
world of sense, the unchangeable world of ideas, which alone gives to
the world of sense whatever pale reflection of reality may belong to it.
The truly real world, for Plato, is the world of ideas; for whatever
we may attempt to say about things in the world of sense, we can only
succeed in saying that they participate in such and such ideas, which,
therefore, constitute all their character. Hence it is easy to pass
on into a mysticism. We may hope, in a mystic illumination, to see the
ideas as we see objects of sense; and we may imagine that the ideas
exist in heaven. These mystical developments are very natural, but the
basis of the theory is in logic, and it is as based in logic that we
have to consider it.

The word 'idea' has acquired, in the course of time, many associations
which are quite misleading when applied to Plato's 'ideas'. We shall
therefore use the word 'universal' instead of the word 'idea', to
describe what Plato meant. The essence of the sort of entity that Plato
meant is that it is opposed to the particular things that are given in
sensation. We speak of whatever is given in sensation, or is of the same
nature as things given in sensation, as a _particular_; by opposition
to this, a _universal_ will be anything which may be shared by many
particulars, and has those characteristics which, as we saw, distinguish
justice and whiteness from just acts and white things.

When we examine common words, we find that, broadly speaking, proper
names stand for particulars, while other substantives, adjectives,
prepositions, and verbs stand for universals. Pronouns stand for
particulars, but are ambiguous: it is only by the context or the
circumstances that we know what particulars they stand for. The word
'now' stands for a particular, namely the present moment; but like
pronouns, it stands for an ambiguous particular, because the present is
always changing.

It will be seen that no sentence can be made up without at least one
word which denotes a universal. The nearest approach would be some such
statement as 'I like this'. But even here the word 'like' denotes
a universal, for I may like other things, and other people may like
things. Thus all truths involve universals, and all knowledge of truths
involves acquaintance with universals.

Seeing that nearly all the words to be found in the dictionary stand
for universals, it is strange that hardly anybody except students of
philosophy ever realizes that there are such entities as universals. We
do not naturally dwell upon those words in a sentence which do not stand
for particulars; and if we are forced to dwell upon a word which stands
for a universal, we naturally think of it as standing for some one of
the particulars that come under the universal. When, for example, we
hear the sentence, 'Charles I's head was cut off', we may naturally
enough think of Charles I, of Charles I's head, and of the operation
of cutting off _his_ head, which are all particulars; but we do not
naturally dwell upon what is meant by the word 'head' or the word
'cut', which is a universal: We feel such words to be incomplete and
insubstantial; they seem to demand a context before anything can be
done with them. Hence we succeed in avoiding all notice of universals as
such, until the study of philosophy forces them upon our attention.

Even among philosophers, we may say, broadly, that only those universals
which are named by adjectives or substantives have been much or often
recognized, while those named by verbs and prepositions have been
usually overlooked. This omission has had a very great effect upon
philosophy; it is hardly too much to say that most metaphysics, since
Spinoza, has been largely determined by it. The way this has occurred
is, in outline, as follows: Speaking generally, adjectives and common
nouns express qualities or properties of single things, whereas
prepositions and verbs tend to express relations between two or more
things. Thus the neglect of prepositions and verbs led to the belief
that every proposition can be regarded as attributing a property to a
single thing, rather than as expressing a relation between two or more
things. Hence it was supposed that, ultimately, there can be no such
entities as relations between things. Hence either there can be only
one thing in the universe, or, if there are many things, they cannot
possibly interact in any way, since any interaction would be a relation,
and relations are impossible.

The first of these views, advocated by Spinoza and held in our own day
by Bradley and many other philosophers, is called _monism_; the second,
advocated by Leibniz but not very common nowadays, is called _monadism_,
because each of the isolated things is called a _monad_. Both these
opposing philosophies, interesting as they are, result, in my opinion,
from an undue attention to one sort of universals, namely the sort
represented by adjectives and substantives rather than by verbs and
prepositions.

As a matter of fact, if any one were anxious to deny altogether that
there are such things as universals, we should find that we cannot
strictly prove that there are such entities as _qualities_, i.e. the
universals represented by adjectives and substantives, whereas we
can prove that there must be _relations_, i.e. the sort of universals
generally represented by verbs and prepositions. Let us take in
illustration the universal _whiteness_. If we believe that there is such
a universal, we shall say that things are white because they have the
quality of whiteness. This view, however, was strenuously denied by
Berkeley and Hume, who have been followed in this by later empiricists.
The form which their denial took was to deny that there are such things
as 'abstract ideas '. When we want to think of whiteness, they said, we
form an image of some particular white thing, and reason concerning this
particular, taking care not to deduce anything concerning it which we
cannot see to be equally true of any other white thing. As an account of
our actual mental processes, this is no doubt largely true. In geometry,
for example, when we wish to prove something about all triangles, we
draw a particular triangle and reason about it, taking care not to use
any characteristic which it does not share with other triangles. The
beginner, in order to avoid error, often finds it useful to draw several
triangles, as unlike each other as possible, in order to make sure that
his reasoning is equally applicable to all of them. But a difficulty
emerges as soon as we ask ourselves how we know that a thing is white
or a triangle. If we wish to avoid the universals _whiteness_ and
_triangularity_, we shall choose some particular patch of white or some
particular triangle, and say that anything is white or a triangle if it
has the right sort of resemblance to our chosen particular. But then the
resemblance required will have to be a universal. Since there are many
white things, the resemblance must hold between many pairs of particular
white things; and this is the characteristic of a universal. It will be
useless to say that there is a different resemblance for each pair, for
then we shall have to say that these resemblances resemble each other,
and thus at last we shall be forced to admit resemblance as a universal.
The relation of resemblance, therefore, must be a true universal. And
having been forced to admit this universal, we find that it is no longer
worth while to invent difficult and unplausible theories to avoid the
admission of such universals as whiteness and triangularity.

Berkeley and Hume failed to perceive this refutation of their rejection
of 'abstract ideas', because, like their adversaries, they only thought
of _qualities_, and altogether ignored _relations_ as universals. We
have therefore here another respect in which the rationalists appear to
have been in the right as against the empiricists, although, owing to
the neglect or denial of relations, the deductions made by rationalists
were, if anything, more apt to be mistaken than those made by
empiricists.

Having now seen that there must be such entities as universals, the next
point to be proved is that their being is not merely mental. By this is
meant that whatever being belongs to them is independent of their being
thought of or in any way apprehended by minds. We have already touched
on this subject at the end of the preceding chapter, but we must now
consider more fully what sort of being it is that belongs to universals.

Consider such a proposition as 'Edinburgh is north of London'. Here we
have a relation between two places, and it seems plain that the relation
subsists independently of our knowledge of it. When we come to know that
Edinburgh is north of London, we come to know something which has to
do only with Edinburgh and London: we do not cause the truth of the
proposition by coming to know it, on the contrary we merely apprehend a
fact which was there before we knew it. The part of the earth's surface
where Edinburgh stands would be north of the part where London stands,
even if there were no human being to know about north and south, and
even if there were no minds at all in the universe. This is, of course,
denied by many philosophers, either for Berkeley's reasons or for
Kant's. But we have already considered these reasons, and decided that
they are inadequate. We may therefore now assume it to be true that
nothing mental is presupposed in the fact that Edinburgh is north of
London. But this fact involves the relation 'north of', which is a
universal; and it would be impossible for the whole fact to involve
nothing mental if the relation 'north of', which is a constituent part
of the fact, did involve anything mental. Hence we must admit that the
relation, like the terms it relates, is not dependent upon thought, but
belongs to the independent world which thought apprehends but does not
create.

This conclusion, however, is met by the difficulty that the relation
'north of' does not seem to _exist_ in the same sense in which Edinburgh
and London exist. If we ask 'Where and when does this relation exist?'
the answer must be 'Nowhere and nowhen'. There is no place or time where
we can find the relation 'north of'. It does not exist in Edinburgh any
more than in London, for it relates the two and is neutral as between
them. Nor can we say that it exists at any particular time. Now
everything that can be apprehended by the senses or by introspection
exists at some particular time. Hence the relation 'north of' is
radically different from such things. It is neither in space nor in
time, neither material nor mental; yet it is something.

It is largely the very peculiar kind of being that belongs to universals
which has led many people to suppose that they are really mental. We
can think _of_ a universal, and our thinking then exists in a perfectly
ordinary sense, like any other mental act. Suppose, for example, that
we are thinking of whiteness. Then _in one sense_ it may be said that
whiteness is 'in our mind'. We have here the same ambiguity as we noted
in discussing Berkeley in Chapter IV. In the strict sense, it is not
whiteness that is in our mind, but the act of thinking of whiteness. The
connected ambiguity in the word 'idea', which we noted at the same time,
also causes confusion here. In one sense of this word, namely the sense
in which it denotes the _object_ of an act of thought, whiteness is an
'idea'. Hence, if the ambiguity is not guarded against, we may come to
think that whiteness is an 'idea' in the other sense, i.e. an act of
thought; and thus we come to think that whiteness is mental. But in so
thinking, we rob it of its essential quality of universality. One man's
act of thought is necessarily a different thing from another man's; one
man's act of thought at one time is necessarily a different thing from
the same man's act of thought at another time. Hence, if whiteness were
the thought as opposed to its object, no two different men could think
of it, and no one man could think of it twice. That which many different
thoughts of whiteness have in common is their _object_, and this object
is different from all of them. Thus universals are not thoughts, though
when known they are the objects of thoughts.

We shall find it convenient only to speak of things _existing_ when they
are in time, that is to say, when we can point to some time at which
they exist (not excluding the possibility of their existing at all
times). Thus thoughts and feelings, minds and physical objects exist.
But universals do not exist in this sense; we shall say that they
_subsist_ or _have being_, where 'being' is opposed to 'existence'
as being timeless. The world of universals, therefore, may also be
described as the world of being. The world of being is unchangeable,
rigid, exact, delightful to the mathematician, the logician, the builder
of metaphysical systems, and all who love perfection more than life. The
world of existence is fleeting, vague, without sharp boundaries,
without any clear plan or arrangement, but it contains all thoughts and
feelings, all the data of sense, and all physical objects, everything
that can do either good or harm, everything that makes any difference to
the value of life and the world. According to our temperaments, we shall
prefer the contemplation of the one or of the other. The one we do not
prefer will probably seem to us a pale shadow of the one we prefer, and
hardly worthy to be regarded as in any sense real. But the truth is that
both have the same claim on our impartial attention, both are real,
and both are important to the metaphysician. Indeed no sooner have we
distinguished the two worlds than it becomes necessary to consider their
relations.

But first of all we must examine our knowledge of universals. This
consideration will occupy us in the following chapter, where we shall
find that it solves the problem of _a priori_ knowledge, from which we
were first led to consider universals.



CHAPTER X. ON OUR KNOWLEDGE OF UNIVERSALS

In regard to one man's knowledge at a given time, universals, like
particulars, may be divided into those known by acquaintance, those
known only by description, and those not known either by acquaintance or
by description.

Let us consider first the knowledge of universals by acquaintance. It is
obvious, to begin with, that we are acquainted with such universals as
white, red, black, sweet, sour, loud, hard, etc., i.e. with qualities
which are exemplified in sense-data. When we see a white patch, we are
acquainted, in the first instance, with the particular patch; but by
seeing many white patches, we easily learn to abstract the whiteness
which they all have in common, and in learning to do this we are
learning to be acquainted with whiteness. A similar process will make us
acquainted with any other universal of the same sort. Universals of this
sort may be called 'sensible qualities'. They can be apprehended with
less effort of abstraction than any others, and they seem less removed
from particulars than other universals are.

We come next to relations. The easiest relations to apprehend are those
which hold between the different parts of a single complex sense-datum.
For example, I can see at a glance the whole of the page on which I
am writing; thus the whole page is included in one sense-datum. But I
perceive that some parts of the page are to the left of other parts,
and some parts are above other parts. The process of abstraction in this
case seems to proceed somewhat as follows: I see successively a number
of sense-data in which one part is to the left of another; I perceive,
as in the case of different white patches, that all these sense-data
have something in common, and by abstraction I find that what they have
in common is a certain relation between their parts, namely the relation
which I call 'being to the left of'. In this way I become acquainted
with the universal relation.

In like manner I become aware of the relation of before and after in
time. Suppose I hear a chime of bells: when the last bell of the chime
sounds, I can retain the whole chime before my mind, and I can perceive
that the earlier bells came before the later ones. Also in memory I
perceive that what I am remembering came before the present time. From
either of these sources I can abstract the universal relation of before
and after, just as I abstracted the universal relation 'being to the
left of'. Thus time-relations, like space-relations, are among those
with which we are acquainted.

Another relation with which we become acquainted in much the same way is
resemblance. If I see simultaneously two shades of green, I can see
that they resemble each other; if I also see a shade of red: at the same
time, I can see that the two greens have more resemblance to each other
than either has to the red. In this way I become acquainted with the
universal _resemblance_ or _similarity_.

Between universals, as between particulars, there are relations of which
we may be immediately aware. We have just seen that we can perceive
that the resemblance between two shades of green is greater than the
resemblance between a shade of red and a shade of green. Here we are
dealing with a relation, namely 'greater than', between two relations.
Our knowledge of such relations, though it requires more power of
abstraction than is required for perceiving the qualities of sense-data,
appears to be equally immediate, and (at least in some cases) equally
indubitable. Thus there is immediate knowledge concerning universals as
well as concerning sense-data.

Returning now to the problem of _a priori_ knowledge, which we left
unsolved when we began the consideration of universals, we find
ourselves in a position to deal with it in a much more satisfactory
manner than was possible before. Let us revert to the proposition 'two
and two are four'. It is fairly obvious, in view of what has been said,
that this proposition states a relation between the universal 'two' and
the universal 'four'. This suggests a proposition which we shall
now endeavour to establish: namely, _All _a priori_ knowledge deals
exclusively with the relations of universals_. This proposition is
of great importance, and goes a long way towards solving our previous
difficulties concerning _a priori_ knowledge.

The only case in which it might seem, at first sight, as if our
proposition were untrue, is the case in which an _a priori_ proposition
states that _all_ of one class of particulars belong to some other
class, or (what comes to the same thing) that _all_ particulars having
some one property also have some other. In this case it might seem
as though we were dealing with the particulars that have the property
rather than with the property. The proposition 'two and two are four' is
really a case in point, for this may be stated in the form 'any two
and any other two are four', or 'any collection formed of two twos is a
collection of four'. If we can show that such statements as this really
deal only with universals, our proposition may be regarded as proved.

One way of discovering what a proposition deals with is to ask ourselves
what words we must understand--in other words, what objects we must be
acquainted with--in order to see what the proposition means. As soon as
we see what the proposition means, even if we do not yet know whether
it is true or false, it is evident that we must have acquaintance with
whatever is really dealt with by the proposition. By applying this test,
it appears that many propositions which might seem to be concerned with
particulars are really concerned only with universals. In the special
case of 'two and two are four', even when we interpret it as meaning
'any collection formed of two twos is a collection of four', it is plain
that we can understand the proposition, i.e. we can see what it is that
it asserts, as soon as we know what is meant by 'collection' and 'two'
and 'four'. It is quite unnecessary to know all the couples in the
world: if it were necessary, obviously we could never understand the
proposition, since the couples are infinitely numerous and therefore
cannot all be known to us. Thus although our general statement _implies_
statements about particular couples, _as soon as we know that there are
such particular couples_, yet it does not itself assert or imply that
there are such particular couples, and thus fails to make any statement
whatever about any actual particular couple. The statement made is about
'couple', the universal, and not about this or that couple.

Thus the statement 'two and two are four' deals exclusively with
universals, and therefore may be known by anybody who is acquainted
with the universals concerned and can perceive the relation between them
which the statement asserts. It must be taken as a fact, discovered
by reflecting upon our knowledge, that we have the power of sometimes
perceiving such relations between universals, and therefore of sometimes
knowing general _a priori_ propositions such as those of arithmetic and
logic. The thing that seemed mysterious, when we formerly considered
such knowledge, was that it seemed to anticipate and control experience.
This, however, we can now see to have been an error. _No_ fact
concerning anything capable of being experienced can be known
independently of experience. We know _a priori_ that two things and two
other things together make four things, but we do _not_ know _a priori_
that if Brown and Jones are two, and Robinson and Smith are two, then
Brown and Jones and Robinson and Smith are four. The reason is that this
proposition cannot be understood at all unless we know that there are
such people as Brown and Jones and Robinson and Smith, and this we can
only know by experience. Hence, although our general proposition is _a
priori_, all its applications to actual particulars involve experience
and therefore contain an empirical element. In this way what seemed
mysterious in our _a priori_ knowledge is seen to have been based upon
an error.

It will serve to make the point clearer if we contrast our genuine _a
priori_ judgement with an empirical generalization, such as 'all men are
mortals'. Here as before, we can _understand_ what the proposition
means as soon as we understand the universals involved, namely _man_ and
_mortal_. It is obviously unnecessary to have an individual acquaintance
with the whole human race in order to understand what our proposition
means. Thus the difference between an _a priori_ general proposition
and an empirical generalization does not come in the _meaning_ of the
proposition; it comes in the nature of the _evidence_ for it. In the
empirical case, the evidence consists in the particular instances.
We believe that all men are mortal because we know that there are
innumerable instances of men dying, and no instances of their living
beyond a certain age. We do not believe it because we see a connexion
between the universal _man_ and the universal _mortal_. It is true that
if physiology can prove, assuming the general laws that govern living
bodies, that no living organism can last for ever, that gives a
connexion between _man_ and _mortality_ which would enable us to assert
our proposition without appealing to the special evidence of _men_
dying. But that only means that our generalization has been subsumed
under a wider generalization, for which the evidence is still of the
same kind, though more extensive. The progress of science is constantly
producing such subsumptions, and therefore giving a constantly wider
inductive basis for scientific generalizations. But although this gives
a greater _degree_ of certainty, it does not give a different _kind_:
the ultimate ground remains inductive, i.e. derived from instances, and
not an _a priori_ connexion of universals such as we have in logic and
arithmetic.

Two opposite points are to be observed concerning _a priori_ general
propositions. The first is that, if many particular instances are known,
our general proposition may be arrived at in the first instance by
induction, and the connexion of universals may be only subsequently
perceived. For example, it is known that if we draw perpendiculars
to the sides of a triangle from the opposite angles, all three
perpendiculars meet in a point. It would be quite possible to be first
led to this proposition by actually drawing perpendiculars in many
cases, and finding that they always met in a point; this experience
might lead us to look for the general proof and find it. Such cases are
common in the experience of every mathematician.

The other point is more interesting, and of more philosophical
importance. It is, that we may sometimes know a general proposition in
cases where we do not know a single instance of it. Take such a case as
the following: We know that any two numbers can be multiplied together,
and will give a third called their _product_. We know that all pairs
of integers the product of which is less than 100 have been actually
multiplied together, and the value of the product recorded in the
multiplication table. But we also know that the number of integers is
infinite, and that only a finite number of pairs of integers ever have
been or ever will be thought of by human beings. Hence it follows that
there are pairs of integers which never have been and never will be
thought of by human beings, and that all of them deal with integers the
product of which is over 100. Hence we arrive at the proposition:
'All products of two integers, which never have been and never will
be thought of by any human being, are over 100.' Here is a general
proposition of which the truth is undeniable, and yet, from the very
nature of the case, we can never give an instance; because any two
numbers we may think of are excluded by the terms of the proposition.

This possibility, of knowledge of general propositions of which no
instance can be given, is often denied, because it is not perceived
that the knowledge of such propositions only requires a knowledge of the
relations of universals, and does not require any knowledge of instances
of the universals in question. Yet the knowledge of such general
propositions is quite vital to a great deal of what is generally
admitted to be known. For example, we saw, in our early chapters,
that knowledge of physical objects, as opposed to sense-data, is only
obtained by an inference, and that they are not things with which we are
acquainted. Hence we can never know any proposition of the form 'this
is a physical object', where 'this' is something immediately known. It
follows that all our knowledge concerning physical objects is such that
no actual instance can be given. We can give instances of the associated
sense-data, but we cannot give instances of the actual physical objects.
Hence our knowledge as to physical objects depends throughout upon this
possibility of general knowledge where no instance can be given. And the
same applies to our knowledge of other people's minds, or of any other
class of things of which no instance is known to us by acquaintance.

We may now take a survey of the sources of our knowledge, as they have
appeared in the course of our analysis. We have first to distinguish
knowledge of things and knowledge of truths. In each there are two
kinds, one immediate and one derivative. Our immediate knowledge of
things, which we called _acquaintance_, consists of two sorts, according
as the things known are particulars or universals. Among particulars, we
have acquaintance with sense-data and (probably) with ourselves. Among
universals, there seems to be no principle by which we can decide which
can be known by acquaintance, but it is clear that among those that
can be so known are sensible qualities, relations of space and time,
similarity, and certain abstract logical universals. Our derivative
knowledge of things, which we call knowledge by _description_, always
involves both acquaintance with something and knowledge of truths. Our
immediate knowledge of _truths_ may be called _intuitive_ knowledge,
and the truths so known may be called _self-evident_ truths. Among such
truths are included those which merely state what is given in sense, and
also certain abstract logical and arithmetical principles, and (though
with less certainty) some ethical propositions. Our _derivative_
knowledge of truths consists of everything that we can deduce from
self-evident truths by the use of self-evident principles of deduction.

If the above account is correct, all our knowledge of truths depends
upon our intuitive knowledge. It therefore becomes important to consider
the nature and scope of intuitive knowledge, in much the same way as,
at an earlier stage, we considered the nature and scope of knowledge by
acquaintance. But knowledge of truths raises a further problem, which
does not arise in regard to knowledge of things, namely the problem of
_error_. Some of our beliefs turn out to be erroneous, and therefore
it becomes necessary to consider how, if at all, we can distinguish
knowledge from error. This problem does not arise with regard
to knowledge by acquaintance, for, whatever may be the object of
acquaintance, even in dreams and hallucinations, there is no error
involved so long as we do not go beyond the immediate object: error can
only arise when we regard the immediate object, i.e. the sense-datum,
as the mark of some physical object. Thus the problems connected
with knowledge of truths are more difficult than those connected
with knowledge of things. As the first of the problems connected
with knowledge of truths, let us examine the nature and scope of our
intuitive judgements.



CHAPTER XI. ON INTUITIVE KNOWLEDGE

There is a common impression that everything that we believe ought to be
capable of proof, or at least of being shown to be highly probable. It
is felt by many that a belief for which no reason can be given is an
unreasonable belief. In the main, this view is just. Almost all our
common beliefs are either inferred, or capable of being inferred, from
other beliefs which may be regarded as giving the reason for them. As a
rule, the reason has been forgotten, or has even never been consciously
present to our minds. Few of us ever ask ourselves, for example, what
reason there is to suppose the food we are just going to eat will not
turn out to be poison. Yet we feel, when challenged, that a perfectly
good reason could be found, even if we are not ready with it at the
moment. And in this belief we are usually justified.

But let us imagine some insistent Socrates, who, whatever reason we
give him, continues to demand a reason for the reason. We must sooner
or later, and probably before very long, be driven to a point where we
cannot find any further reason, and where it becomes almost certain that
no further reason is even theoretically discoverable. Starting with the
common beliefs of daily life, we can be driven back from point to point,
until we come to some general principle, or some instance of a general
principle, which seems luminously evident, and is not itself capable
of being deduced from anything more evident. In most questions of
daily life, such as whether our food is likely to be nourishing and not
poisonous, we shall be driven back to the inductive principle, which we
discussed in Chapter VI. But beyond that, there seems to be no further
regress. The principle itself is constantly used in our reasoning,
sometimes consciously, sometimes unconsciously; but there is no
reasoning which, starting from some simpler self-evident principle,
leads us to the principle of induction as its conclusion. And the same
holds for other logical principles. Their truth is evident to us, and we
employ them in constructing demonstrations; but they themselves, or at
least some of them, are incapable of demonstration.

Self-evidence, however, is not confined to those among general
principles which are incapable of proof. When a certain number of
logical principles have been admitted, the rest can be deduced from
them; but the propositions deduced are often just as self-evident as
those that were assumed without proof. All arithmetic, moreover, can
be deduced from the general principles of logic, yet the simple
propositions of arithmetic, such as 'two and two are four', are just as
self-evident as the principles of logic.

It would seem, also, though this is more disputable, that there are some
self-evident ethical principles, such as 'we ought to pursue what is
good'.

It should be observed that, in all cases of general principles,
particular instances, dealing with familiar things, are more evident
than the general principle. For example, the law of contradiction states
that nothing can both have a certain property and not have it. This is
evident as soon as it is understood, but it is not so evident as that a
particular rose which we see cannot be both red and not red. (It is of
course possible that parts of the rose may be red and parts not red, or
that the rose may be of a shade of pink which we hardly know whether to
call red or not; but in the former case it is plain that the rose as a
whole is not red, while in the latter case the answer is theoretically
definite as soon as we have decided on a precise definition of 'red'.)
It is usually through particular instances that we come to be able to
see the general principle. Only those who are practised in dealing with
abstractions can readily grasp a general principle without the help of
instances.

In addition to general principles, the other kind of self-evident truths
are those immediately derived from sensation. We will call such truths
'truths of perception', and the judgements expressing them we will
call 'judgements of perception'. But here a certain amount of care
is required in getting at the precise nature of the truths that are
self-evident. The actual sense-data are neither true nor false. A
particular patch of colour which I see, for example, simply exists: it
is not the sort of thing that is true or false. It is true that there is
such a patch, true that it has a certain shape and degree of brightness,
true that it is surrounded by certain other colours. But the patch
itself, like everything else in the world of sense, is of a radically
different kind from the things that are true or false, and therefore
cannot properly be said to be _true_. Thus whatever self-evident truths
may be obtained from our senses must be different from the sense-data
from which they are obtained.

It would seem that there are two kinds of self-evident truths of
perception, though perhaps in the last analysis the two kinds may
coalesce. First, there is the kind which simply asserts the _existence_
of the sense-datum, without in any way analysing it. We see a patch
of red, and we judge 'there is such-and-such a patch of red', or more
strictly 'there is that'; this is one kind of intuitive judgement of
perception. The other kind arises when the object of sense is complex,
and we subject it to some degree of analysis. If, for instance, we see a
_round_ patch of red, we may judge 'that patch of red is round'. This is
again a judgement of perception, but it differs from our previous kind.
In our present kind we have a single sense-datum which has both colour
and shape: the colour is red and the shape is round. Our judgement
analyses the datum into colour and shape, and then recombines them by
stating that the red colour is round in shape. Another example of this
kind of judgement is 'this is to the right of that', where 'this'
and 'that' are seen simultaneously. In this kind of judgement the
sense-datum contains constituents which have some relation to each
other, and the judgement asserts that these constituents have this
relation.

Another class of intuitive judgements, analogous to those of sense and
yet quite distinct from them, are judgements of _memory_. There is some
danger of confusion as to the nature of memory, owing to the fact that
memory of an object is apt to be accompanied by an image of the object,
and yet the image cannot be what constitutes memory. This is easily seen
by merely noticing that the image is in the present, whereas what is
remembered is known to be in the past. Moreover, we are certainly able
to some extent to compare our image with the object remembered, so
that we often know, within somewhat wide limits, how far our image is
accurate; but this would be impossible, unless the object, as opposed to
the image, were in some way before the mind. Thus the essence of memory
is not constituted by the image, but by having immediately before the
mind an object which is recognized as past. But for the fact of memory
in this sense, we should not know that there ever was a past at all,
nor should we be able to understand the word 'past', any more than a man
born blind can understand the word 'light'. Thus there must be intuitive
judgements of memory, and it is upon them, ultimately, that all our
knowledge of the past depends.

The case of memory, however, raises a difficulty, for it is notoriously
fallacious, and thus throws doubt on the trustworthiness of intuitive
judgements in general. This difficulty is no light one. But let us
first narrow its scope as far as possible. Broadly speaking, memory is
trustworthy in proportion to the vividness of the experience and to its
nearness in time. If the house next door was struck by lightning half a
minute ago, my memory of what I saw and heard will be so reliable that
it would be preposterous to doubt whether there had been a flash at
all. And the same applies to less vivid experiences, so long as they are
recent. I am absolutely certain that half a minute ago I was sitting in
the same chair in which I am sitting now. Going backward over the day,
I find things of which I am quite certain, other things of which I am
almost certain, other things of which I can become certain by thought
and by calling up attendant circumstances, and some things of which I
am by no means certain. I am quite certain that I ate my breakfast this
morning, but if I were as indifferent to my breakfast as a philosopher
should be, I should be doubtful. As to the conversation at breakfast,
I can recall some of it easily, some with an effort, some only with a
large element of doubt, and some not at all. Thus there is a continual
gradation in the degree of self-evidence of what I remember, and a
corresponding gradation in the trustworthiness of my memory.

Thus the first answer to the difficulty of fallacious memory is to say
that memory has degrees of self-evidence, and that these correspond
to the degrees of its trustworthiness, reaching a limit of perfect
self-evidence and perfect trustworthiness in our memory of events which
are recent and vivid.

It would seem, however, that there are cases of very firm belief in a
memory which is wholly false. It is probable that, in these cases, what
is really remembered, in the sense of being immediately before the mind,
is something other than what is falsely believed in, though something
generally associated with it. George IV is said to have at last believed
that he was at the battle of Waterloo, because he had so often said that
he was. In this case, what was immediately remembered was his repeated
assertion; the belief in what he was asserting (if it existed) would
be produced by association with the remembered assertion, and would
therefore not be a genuine case of memory. It would seem that cases of
fallacious memory can probably all be dealt with in this way, i.e. they
can be shown to be not cases of memory in the strict sense at all.

One important point about self-evidence is made clear by the case of
memory, and that is, that self-evidence has degrees: it is not a quality
which is simply present or absent, but a quality which may be more or
less present, in gradations ranging from absolute certainty down to an
almost imperceptible faintness. Truths of perception and some of the
principles of logic have the very highest degree of self-evidence;
truths of immediate memory have an almost equally high degree. The
inductive principle has less self-evidence than some of the other
principles of logic, such as 'what follows from a true premiss must be
true'. Memories have a diminishing self-evidence as they become remoter
and fainter; the truths of logic and mathematics have (broadly speaking)
less self-evidence as they become more complicated. Judgements of
intrinsic ethical or aesthetic value are apt to have some self-evidence,
but not much.

Degrees of self-evidence are important in the theory of knowledge,
since, if propositions may (as seems likely) have some degree of
self-evidence without being true, it will not be necessary to abandon
all connexion between self-evidence and truth, but merely to say that,
where there is a conflict, the more self-evident proposition is to be
retained and the less self-evident rejected.

It seems, however, highly probable that two different notions are
combined in 'self-evidence' as above explained; that one of them,
which corresponds to the highest degree of self-evidence, is really an
infallible guarantee of truth, while the other, which corresponds to
all the other degrees, does not give an infallible guarantee, but only a
greater or less presumption. This, however, is only a suggestion, which
we cannot as yet develop further. After we have dealt with the nature
of truth, we shall return to the subject of self-evidence, in connexion
with the distinction between knowledge and error.



CHAPTER XII. TRUTH AND FALSEHOOD

Our knowledge of truths, unlike our knowledge of things, has an
opposite, namely _error_. So far as things are concerned, we may know
them or not know them, but there is no positive state of mind which can
be described as erroneous knowledge of things, so long, at any rate,
as we confine ourselves to knowledge by acquaintance. Whatever we are
acquainted with must be something; we may draw wrong inferences from
our acquaintance, but the acquaintance itself cannot be deceptive. Thus
there is no dualism as regards acquaintance. But as regards knowledge of
truths, there is a dualism. We may believe what is false as well as
what is true. We know that on very many subjects different people
hold different and incompatible opinions: hence some beliefs must be
erroneous. Since erroneous beliefs are often held just as strongly
as true beliefs, it becomes a difficult question how they are to be
distinguished from true beliefs. How are we to know, in a given case,
that our belief is not erroneous? This is a question of the very
greatest difficulty, to which no completely satisfactory answer is
possible. There is, however, a preliminary question which is rather less
difficult, and that is: What do we _mean_ by truth and falsehood? It is
this preliminary question which is to be considered in this chapter. In
this chapter we are not asking how we can know whether a belief is true
or false: we are asking what is meant by the question whether a belief
is true or false. It is to be hoped that a clear answer to this question
may help us to obtain an answer to the question what beliefs are
true, but for the present we ask only 'What is truth?' and 'What is
falsehood?' not 'What beliefs are true?' and 'What beliefs are false?'
It is very important to keep these different questions entirely
separate, since any confusion between them is sure to produce an answer
which is not really applicable to either.

There are three points to observe in the attempt to discover the nature
of truth, three requisites which any theory must fulfil.

(1) Our theory of truth must be such as to admit of its opposite,
falsehood. A good many philosophers have failed adequately to satisfy
this condition: they have constructed theories according to which all
our thinking ought to have been true, and have then had the greatest
difficulty in finding a place for falsehood. In this respect our theory
of belief must differ from our theory of acquaintance, since in the case
of acquaintance it was not necessary to take account of any opposite.

(2) It seems fairly evident that if there were no beliefs there could
be no falsehood, and no truth either, in the sense in which truth is
correlative to falsehood. If we imagine a world of mere matter, there
would be no room for falsehood in such a world, and although it would
contain what may be called 'facts', it would not contain any truths, in
the sense in which truths are things of the same kind as falsehoods.
In fact, truth and falsehood are properties of beliefs and statements:
hence a world of mere matter, since it would contain no beliefs or
statements, would also contain no truth or falsehood.

(3) But, as against what we have just said, it is to be observed that
the truth or falsehood of a belief always depends upon something which
lies outside the belief itself. If I believe that Charles I died on the
scaffold, I believe truly, not because of any intrinsic quality of my
belief, which could be discovered by merely examining the belief, but
because of an historical event which happened two and a half centuries
ago. If I believe that Charles I died in his bed, I believe falsely: no
degree of vividness in my belief, or of care in arriving at it, prevents
it from being false, again because of what happened long ago, and not
because of any intrinsic property of my belief. Hence, although truth
and falsehood are properties of beliefs, they are properties dependent
upon the relations of the beliefs to other things, not upon any internal
quality of the beliefs.

The third of the above requisites leads us to adopt the view--which has
on the whole been commonest among philosophers--that truth consists in
some form of correspondence between belief and fact. It is, however, by
no means an easy matter to discover a form of correspondence to which
there are no irrefutable objections. By this partly--and partly by the
feeling that, if truth consists in a correspondence of thought with
something outside thought, thought can never know when truth has been
attained--many philosophers have been led to try to find some definition
of truth which shall not consist in relation to something wholly outside
belief. The most important attempt at a definition of this sort is the
theory that truth consists in _coherence_. It is said that the mark of
falsehood is failure to cohere in the body of our beliefs, and that it
is the essence of a truth to form part of the completely rounded system
which is The Truth.

There is, however, a great difficulty in this view, or rather two great
difficulties. The first is that there is no reason to suppose that
only _one_ coherent body of beliefs is possible. It may be that, with
sufficient imagination, a novelist might invent a past for the world
that would perfectly fit on to what we know, and yet be quite different
from the real past. In more scientific matters, it is certain that there
are often two or more hypotheses which account for all the known facts
on some subject, and although, in such cases, men of science endeavour
to find facts which will rule out all the hypotheses except one, there
is no reason why they should always succeed.

In philosophy, again, it seems not uncommon for two rival hypotheses
to be both able to account for all the facts. Thus, for example, it is
possible that life is one long dream, and that the outer world has only
that degree of reality that the objects of dreams have; but although
such a view does not seem inconsistent with known facts, there is no
reason to prefer it to the common-sense view, according to which other
people and things do really exist. Thus coherence as the definition
of truth fails because there is no proof that there can be only one
coherent system.

The other objection to this definition of truth is that it assumes the
meaning of 'coherence' known, whereas, in fact, 'coherence' presupposes
the truth of the laws of logic. Two propositions are coherent when both
may be true, and are incoherent when one at least must be false. Now in
order to know whether two propositions can both be true, we must
know such truths as the law of contradiction. For example, the two
propositions, 'this tree is a beech' and 'this tree is not a beech',
are not coherent, because of the law of contradiction. But if the law of
contradiction itself were subjected to the test of coherence, we should
find that, if we choose to suppose it false, nothing will any longer
be incoherent with anything else. Thus the laws of logic supply the
skeleton or framework within which the test of coherence applies, and
they themselves cannot be established by this test.

For the above two reasons, coherence cannot be accepted as giving the
_meaning_ of truth, though it is often a most important _test_ of truth
after a certain amount of truth has become known.

Hence we are driven back to _correspondence with fact_ as constituting
the nature of truth. It remains to define precisely what we mean by
'fact', and what is the nature of the correspondence which must subsist
between belief and fact, in order that belief may be true.

In accordance with our three requisites, we have to seek a theory of
truth which (1) allows truth to have an opposite, namely falsehood, (2)
makes truth a property of beliefs, but (3) makes it a property wholly
dependent upon the relation of the beliefs to outside things.

The necessity of allowing for falsehood makes it impossible to regard
belief as a relation of the mind to a single object, which could be said
to be what is believed. If belief were so regarded, we should find that,
like acquaintance, it would not admit of the opposition of truth and
falsehood, but would have to be always true. This may be made clear
by examples. Othello believes falsely that Desdemona loves Cassio. We
cannot say that this belief consists in a relation to a single object,
'Desdemona's love for Cassio', for if there were such an object, the
belief would be true. There is in fact no such object, and therefore
Othello cannot have any relation to such an object. Hence his belief
cannot possibly consist in a relation to this object.

It might be said that his belief is a relation to a different object,
namely 'that Desdemona loves Cassio'; but it is almost as difficult to
suppose that there is such an object as this, when Desdemona does not
love Cassio, as it was to suppose that there is 'Desdemona's love for
Cassio'. Hence it will be better to seek for a theory of belief which
does not make it consist in a relation of the mind to a single object.

It is common to think of relations as though they always held between
two terms, but in fact this is not always the case. Some relations
demand three terms, some four, and so on. Take, for instance, the
relation 'between'. So long as only two terms come in, the relation
'between' is impossible: three terms are the smallest number that render
it possible. York is between London and Edinburgh; but if London and
Edinburgh were the only places in the world, there could be nothing
which was between one place and another. Similarly _jealousy_ requires
three people: there can be no such relation that does not involve three
at least. Such a proposition as 'A wishes B to promote C's marriage with
D' involves a relation of four terms; that is to say, A and B and C and
D all come in, and the relation involved cannot be expressed otherwise
than in a form involving all four. Instances might be multiplied
indefinitely, but enough has been said to show that there are relations
which require more than two terms before they can occur.

The relation involved in _judging_ or _believing_ must, if falsehood is
to be duly allowed for, be taken to be a relation between several terms,
not between two. When Othello believes that Desdemona loves Cassio, he
must not have before his mind a single object, 'Desdemona's love for
Cassio', or 'that Desdemona loves Cassio ', for that would require that
there should be objective falsehoods, which subsist independently of
any minds; and this, though not logically refutable, is a theory to be
avoided if possible. Thus it is easier to account for falsehood if
we take judgement to be a relation in which the mind and the various
objects concerned all occur severally; that is to say, Desdemona and
loving and Cassio must all be terms in the relation which subsists when
Othello believes that Desdemona loves Cassio. This relation, therefore,
is a relation of four terms, since Othello also is one of the terms of
the relation. When we say that it is a relation of four terms, we do not
mean that Othello has a certain relation to Desdemona, and has the same
relation to loving and also to Cassio. This may be true of some other
relation than believing; but believing, plainly, is not a relation which
Othello has to _each_ of the three terms concerned, but to _all_ of
them together: there is only one example of the relation of believing
involved, but this one example knits together four terms. Thus the
actual occurrence, at the moment when Othello is entertaining his
belief, is that the relation called 'believing' is knitting together
into one complex whole the four terms Othello, Desdemona, loving, and
Cassio. What is called belief or judgement is nothing but this relation
of believing or judging, which relates a mind to several things other
than itself. An _act_ of belief or of judgement is the occurrence
between certain terms at some particular time, of the relation of
believing or judging.

We are now in a position to understand what it is that distinguishes a
true judgement from a false one. For this purpose we will adopt certain
definitions. In every act of judgement there is a mind which judges, and
there are terms concerning which it judges. We will call the mind the
_subject_ in the judgement, and the remaining terms the _objects_. Thus,
when Othello judges that Desdemona loves Cassio, Othello is the subject,
while the objects are Desdemona and loving and Cassio. The subject and
the objects together are called the _constituents_ of the judgement.
It will be observed that the relation of judging has what is called a
'sense' or 'direction'. We may say, metaphorically, that it puts its
objects in a certain _order_, which we may indicate by means of the
order of the words in the sentence. (In an inflected language, the same
thing will be indicated by inflections, e.g. by the difference between
nominative and accusative.) Othello's judgement that Cassio loves
Desdemona differs from his judgement that Desdemona loves Cassio, in
spite of the fact that it consists of the same constituents, because the
relation of judging places the constituents in a different order in the
two cases. Similarly, if Cassio judges that Desdemona loves Othello,
the constituents of the judgement are still the same, but their order is
different. This property of having a 'sense' or 'direction' is one which
the relation of judging shares with all other relations. The 'sense'
of relations is the ultimate source of order and series and a host of
mathematical concepts; but we need not concern ourselves further with
this aspect.

We spoke of the relation called 'judging' or 'believing' as knitting
together into one complex whole the subject and the objects. In this
respect, judging is exactly like every other relation. Whenever a
relation holds between two or more terms, it unites the terms into a
complex whole. If Othello loves Desdemona, there is such a complex whole
as 'Othello's love for Desdemona'. The terms united by the relation may
be themselves complex, or may be simple, but the whole which results
from their being united must be complex. Wherever there is a relation
which relates certain terms, there is a complex object formed of the
union of those terms; and conversely, wherever there is a complex
object, there is a relation which relates its constituents. When an act
of believing occurs, there is a complex, in which 'believing' is the
uniting relation, and subject and objects are arranged in a certain
order by the 'sense' of the relation of believing. Among the objects,
as we saw in considering 'Othello believes that Desdemona loves Cassio',
one must be a relation--in this instance, the relation 'loving'. But
this relation, as it occurs in the act of believing, is not the relation
which creates the unity of the complex whole consisting of the subject
and the objects. The relation 'loving', as it occurs in the act of
believing, is one of the objects--it is a brick in the structure, not
the cement. The cement is the relation 'believing'. When the belief is
_true_, there is another complex unity, in which the relation which was
one of the objects of the belief relates the other objects. Thus, e.g.,
if Othello believes _truly_ that Desdemona loves Cassio, then there is
a complex unity, 'Desdemona's love for Cassio', which is composed
exclusively of the _objects_ of the belief, in the same order as they
had in the belief, with the relation which was one of the objects
occurring now as the cement that binds together the other objects of the
belief. On the other hand, when a belief is _false_, there is no such
complex unity composed only of the objects of the belief. If Othello
believes _falsely_ that Desdemona loves Cassio, then there is no such
complex unity as 'Desdemona's love for Cassio'.

Thus a belief is _true_ when it _corresponds_ to a certain associated
complex, and _false_ when it does not. Assuming, for the sake of
definiteness, that the objects of the belief are two terms and a
relation, the terms being put in a certain order by the 'sense' of
the believing, then if the two terms in that order are united by the
relation into a complex, the belief is true; if not, it is false. This
constitutes the definition of truth and falsehood that we were in search
of. Judging or believing is a certain complex unity of which a mind is
a constituent; if the remaining constituents, taken in the order which
they have in the belief, form a complex unity, then the belief is true;
if not, it is false.

Thus although truth and falsehood are properties of beliefs, yet they
are in a sense extrinsic properties, for the condition of the truth of
a belief is something not involving beliefs, or (in general) any mind
at all, but only the _objects_ of the belief. A mind, which believes,
believes truly when there is a _corresponding_ complex not involving the
mind, but only its objects. This correspondence ensures truth, and its
absence entails falsehood. Hence we account simultaneously for the two
facts that beliefs (a) depend on minds for their _existence_, (b) do not
depend on minds for their _truth_.

We may restate our theory as follows: If we take such a belief as
'Othello believes that Desdemona loves Cassio', we will call Desdemona
and Cassio the _object-terms_, and loving the _object-relation_. If
there is a complex unity 'Desdemona's love for Cassio', consisting of
the object-terms related by the object-relation in the same order as
they have in the belief, then this complex unity is called the _fact
corresponding to the belief_. Thus a belief is true when there is a
corresponding fact, and is false when there is no corresponding fact.

It will be seen that minds do not _create_ truth or falsehood. They
create beliefs, but when once the beliefs are created, the mind cannot
make them true or false, except in the special case where they concern
future things which are within the power of the person believing, such
as catching trains. What makes a belief true is a _fact_, and this fact
does not (except in exceptional cases) in any way involve the mind of
the person who has the belief.

Having now decided what we _mean_ by truth and falsehood, we have next
to consider what ways there are of knowing whether this or that belief
is true or false. This consideration will occupy the next chapter.



CHAPTER XIII. KNOWLEDGE, ERROR, AND PROBABLE OPINION

The question as to what we mean by truth and falsehood, which we
considered in the preceding chapter, is of much less interest than the
question as to how we can know what is true and what is false. This
question will occupy us in the present chapter. There can be no doubt
that _some_ of our beliefs are erroneous; thus we are led to inquire
what certainty we can ever have that such and such a belief is not
erroneous. In other words, can we ever _know_ anything at all, or do we
merely sometimes by good luck believe what is true? Before we can attack
this question, we must, however, first decide what we mean by 'knowing',
and this question is not so easy as might be supposed.

At first sight we might imagine that knowledge could be defined as 'true
belief'. When what we believe is true, it might be supposed that we had
achieved a knowledge of what we believe. But this would not accord
with the way in which the word is commonly used. To take a very trivial
instance: If a man believes that the late Prime Minister's last name
began with a B, he believes what is true, since the late Prime Minister
was Sir Henry Campbell Bannerman. But if he believes that Mr. Balfour
was the late Prime Minister, he will still believe that the late Prime
Minister's last name began with a B, yet this belief, though true,
would not be thought to constitute knowledge. If a newspaper, by an
intelligent anticipation, announces the result of a battle before any
telegram giving the result has been received, it may by good fortune
announce what afterwards turns out to be the right result, and it may
produce belief in some of its less experienced readers. But in spite of
the truth of their belief, they cannot be said to have knowledge. Thus
it is clear that a true belief is not knowledge when it is deduced from
a false belief.

In like manner, a true belief cannot be called knowledge when it is
deduced by a fallacious process of reasoning, even if the premisses from
which it is deduced are true. If I know that all Greeks are men and that
Socrates was a man, and I infer that Socrates was a Greek, I cannot be
said to _know_ that Socrates was a Greek, because, although my premisses
and my conclusion are true, the conclusion does not follow from the
premisses.

But are we to say that nothing is knowledge except what is validly
deduced from true premisses? Obviously we cannot say this. Such a
definition is at once too wide and too narrow. In the first place, it is
too wide, because it is not enough that our premisses should be _true_,
they must also be _known_. The man who believes that Mr. Balfour was the
late Prime Minister may proceed to draw valid deductions from the true
premiss that the late Prime Minister's name began with a B, but he
cannot be said to _know_ the conclusions reached by these deductions.
Thus we shall have to amend our definition by saying that knowledge
is what is validly deduced from _known_ premisses. This, however, is a
circular definition: it assumes that we already know what is meant
by 'known premisses'. It can, therefore, at best define one sort
of knowledge, the sort we call derivative, as opposed to intuitive
knowledge. We may say: '_Derivative_ knowledge is what is validly
deduced from premisses known intuitively'. In this statement there is
no formal defect, but it leaves the definition of _intuitive_ knowledge
still to seek.

Leaving on one side, for the moment, the question of intuitive
knowledge, let us consider the above suggested definition of derivative
knowledge. The chief objection to it is that it unduly limits knowledge.
It constantly happens that people entertain a true belief, which has
grown up in them because of some piece of intuitive knowledge from which
it is capable of being validly inferred, but from which it has not, as a
matter of fact, been inferred by any logical process.

Take, for example, the beliefs produced by reading. If the newspapers
announce the death of the King, we are fairly well justified in
believing that the King is dead, since this is the sort of announcement
which would not be made if it were false. And we are quite amply
justified in believing that the newspaper asserts that the King is
dead. But here the intuitive knowledge upon which our belief is based
is knowledge of the existence of sense-data derived from looking at
the print which gives the news. This knowledge scarcely rises into
consciousness, except in a person who cannot read easily. A child may be
aware of the shapes of the letters, and pass gradually and painfully to
a realization of their meaning. But anybody accustomed to reading
passes at once to what the letters mean, and is not aware, except on
reflection, that he has derived this knowledge from the sense-data
called seeing the printed letters. Thus although a valid inference from
the-letters to their meaning is possible, and _could_ be performed
by the reader, it is not in fact performed, since he does not in fact
perform any operation which can be called logical inference. Yet
it would be absurd to say that the reader does not _know_ that the
newspaper announces the King's death.

We must, therefore, admit as derivative knowledge whatever is the result
of intuitive knowledge even if by mere association, provided there _is_
a valid logical connexion, and the person in question could become aware
of this connexion by reflection. There are in fact many ways, besides
logical inference, by which we pass from one belief to another: the
passage from the print to its meaning illustrates these ways. These
ways may be called 'psychological inference'. We shall, then, admit such
psychological inference as a means of obtaining derivative knowledge,
provided there is a discoverable logical inference which runs parallel
to the psychological inference. This renders our definition of
derivative knowledge less precise than we could wish, since the word
'discoverable' is vague: it does not tell us how much reflection may be
needed in order to make the discovery. But in fact 'knowledge' is not a
precise conception: it merges into 'probable opinion', as we shall
see more fully in the course of the present chapter. A very precise
definition, therefore, should not be sought, since any such definition
must be more or less misleading.

The chief difficulty in regard to knowledge, however, does not arise
over derivative knowledge, but over intuitive knowledge. So long as we
are dealing with derivative knowledge, we have the test of intuitive
knowledge to fall back upon. But in regard to intuitive beliefs, it is
by no means easy to discover any criterion by which to distinguish
some as true and others as erroneous. In this question it is scarcely
possible to reach any very precise result: all our knowledge of truths
is infected with some degree of doubt, and a theory which ignored this
fact would be plainly wrong. Something may be done, however, to mitigate
the difficulties of the question.

Our theory of truth, to begin with, supplies the possibility of
distinguishing certain truths as _self-evident_ in a sense which ensures
infallibility. When a belief is true, we said, there is a corresponding
fact, in which the several objects of the belief form a single complex.
The belief is said to constitute _knowledge_ of this fact, provided
it fulfils those further somewhat vague conditions which we have been
considering in the present chapter. But in regard to any fact, besides
the knowledge constituted by belief, we may also have the kind of
knowledge constituted by _perception_ (taking this word in its widest
possible sense). For example, if you know the hour of the sunset,
you can at that hour know the fact that the sun is setting: this is
knowledge of the fact by way of knowledge of _truths_; but you can also,
if the weather is fine, look to the west and actually see the setting
sun: you then know the same fact by the way of knowledge of _things_.

Thus in regard to any complex fact, there are, theoretically, two ways
in which it may be known: (1) by means of a judgement, in which its
several parts are judged to be related as they are in fact related; (2)
by means of _acquaintance_ with the complex fact itself, which may (in a
large sense) be called perception, though it is by no means confined to
objects of the senses. Now it will be observed that the second way of
knowing a complex fact, the way of acquaintance, is only possible when
there really is such a fact, while the first way, like all judgement,
is liable to error. The second way gives us the complex whole, and is
therefore only possible when its parts do actually have that relation
which makes them combine to form such a complex. The first way, on the
contrary, gives us the parts and the relation severally, and demands
only the reality of the parts and the relation: the relation may not
relate those parts in that way, and yet the judgement may occur.

It will be remembered that at the end of Chapter XI we suggested that
there might be two kinds of self-evidence, one giving an absolute
guarantee of truth, the other only a partial guarantee. These two kinds
can now be distinguished.

We may say that a truth is self-evident, in the first and most absolute
sense, when we have acquaintance with the fact which corresponds to
the truth. When Othello believes that Desdemona loves Cassio, the
corresponding fact, if his belief were true, would be 'Desdemona's
love for Cassio'. This would be a fact with which no one could have
acquaintance except Desdemona; hence in the sense of self-evidence that
we are considering, the truth that Desdemona loves Cassio (if it were
a truth) could only be self-evident to Desdemona. All mental facts, and
all facts concerning sense-data, have this same privacy: there is only
one person to whom they can be self-evident in our present sense, since
there is only one person who can be acquainted with the mental things
or the sense-data concerned. Thus no fact about any particular existing
thing can be self-evident to more than one person. On the other hand,
facts about universals do not have this privacy. Many minds may be
acquainted with the same universals; hence a relation between universals
may be known by acquaintance to many different people. In all cases
where we know by acquaintance a complex fact consisting of certain terms
in a certain relation, we say that the truth that these terms are so
related has the first or absolute kind of self-evidence, and in these
cases the judgement that the terms are so related _must_ be true. Thus
this sort of self-evidence is an absolute guarantee of truth.

But although this sort of self-evidence is an absolute guarantee of
truth, it does not enable us to be _absolutely_ certain, in the case of
any given judgement, that the judgement in question is true. Suppose
we first perceive the sun shining, which is a complex fact, and thence
proceed to make the judgement 'the sun is shining'. In passing from
the perception to the judgement, it is necessary to analyse the given
complex fact: we have to separate out 'the sun' and 'shining' as
constituents of the fact. In this process it is possible to commit
an error; hence even where a _fact_ has the first or absolute kind of
self-evidence, a judgement believed to correspond to the fact is not
absolutely infallible, because it may not really correspond to the
fact. But if it does correspond (in the sense explained in the preceding
chapter), then it _must_ be true.

The second sort of self-evidence will be that which belongs to
judgements in the first instance, and is not derived from direct
perception of a fact as a single complex whole. This second kind of
self-evidence will have degrees, from the very highest degree down to a
bare inclination in favour of the belief. Take, for example, the case of
a horse trotting away from us along a hard road. At first our certainty
that we hear the hoofs is complete; gradually, if we listen intently,
there comes a moment when we think perhaps it was imagination or the
blind upstairs or our own heartbeats; at last we become doubtful whether
there was any noise at all; then we _think_ we no longer hear anything,
and at last we _know_ we no longer hear anything. In this process, there
is a continual gradation of self-evidence, from the highest degree to
the least, not in the sense-data themselves, but in the judgements based
on them.

Or again: Suppose we are comparing two shades of colour, one blue and
one green. We can be quite sure they are different shades of colour; but
if the green colour is gradually altered to be more and more like the
blue, becoming first a blue-green, then a greeny-blue, then blue,
there will come a moment when we are doubtful whether we can see any
difference, and then a moment when we know that we cannot see any
difference. The same thing happens in tuning a musical instrument, or in
any other case where there is a continuous gradation. Thus self-evidence
of this sort is a matter of degree; and it seems plain that the higher
degrees are more to be trusted than the lower degrees.

In derivative knowledge our ultimate premisses must have some degree of
self-evidence, and so must their connexion with the conclusions deduced
from them. Take for example a piece of reasoning in geometry. It is not
enough that the axioms from which we start should be self-evident: it
is necessary also that, at each step in the reasoning, the connexion of
premiss and conclusion should be self-evident. In difficult reasoning,
this connexion has often only a very small degree of self-evidence;
hence errors of reasoning are not improbable where the difficulty is
great.

From what has been said it is evident that, both as regards intuitive
knowledge and as regards derivative knowledge, if we assume that
intuitive knowledge is trustworthy in proportion to the degree of its
self-evidence, there will be a gradation in trustworthiness, from the
existence of noteworthy sense-data and the simpler truths of logic and
arithmetic, which may be taken as quite certain, down to judgements
which seem only just more probable than their opposites. What we firmly
believe, if it is true, is called _knowledge_, provided it is either
intuitive or inferred (logically or psychologically) from intuitive
knowledge from which it follows logically. What we firmly believe, if it
is not true, is called _error_. What we firmly believe, if it is neither
knowledge nor error, and also what we believe hesitatingly, because it
is, or is derived from, something which has not the highest degree of
self-evidence, may be called _probable opinion_. Thus the greater
part of what would commonly pass as knowledge is more or less probable
opinion.

In regard to probable opinion, we can derive great assistance from
_coherence_, which we rejected as the _definition_ of truth, but may
often use as a _criterion_. A body of individually probable opinions,
if they are mutually coherent, become more probable than any one of them
would be individually. It is in this way that many scientific hypotheses
acquire their probability. They fit into a coherent system of probable
opinions, and thus become more probable than they would be in isolation.
The same thing applies to general philosophical hypotheses. Often in a
single case such hypotheses may seem highly doubtful, while yet, when
we consider the order and coherence which they introduce into a mass of
probable opinion, they become pretty nearly certain. This applies, in
particular, to such matters as the distinction between dreams and
waking life. If our dreams, night after night, were as coherent one with
another as our days, we should hardly know whether to believe the dreams
or the waking life. As it is, the test of coherence condemns the
dreams and confirms the waking life. But this test, though it increases
probability where it is successful, never gives absolute certainty,
unless there is certainty already at some point in the coherent system.
Thus the mere organization of probable opinion will never, by itself,
transform it into indubitable knowledge.



CHAPTER XIV. THE LIMITS OF PHILOSOPHICAL KNOWLEDGE

In all that we have said hitherto concerning philosophy, we have
scarcely touched on many matters that occupy a great space in the
writings of most philosophers. Most philosophers--or, at any rate, very
many--profess to be able to prove, by _a priori_ metaphysical reasoning,
such things as the fundamental dogmas of religion, the essential
rationality of the universe, the illusoriness of matter, the unreality
of all evil, and so on. There can be no doubt that the hope of finding
reason to believe such theses as these has been the chief inspiration of
many life-long students of philosophy. This hope, I believe, is vain. It
would seem that knowledge concerning the universe as a whole is not to
be obtained by metaphysics, and that the proposed proofs that, in virtue
of the laws of logic such and such things _must_ exist and such and such
others cannot, are not capable of surviving a critical scrutiny. In
this chapter we shall briefly consider the kind of way in which such
reasoning is attempted, with a view to discovering whether we can hope
that it may be valid.

The great representative, in modern times, of the kind of view which
we wish to examine, was Hegel (1770-1831). Hegel's philosophy is very
difficult, and commentators differ as to the true interpretation of it.
According to the interpretation I shall adopt, which is that of many, if
not most, of the commentators and has the merit of giving an interesting
and important type of philosophy, his main thesis is that everything
short of the Whole is obviously fragmentary, and obviously incapable of
existing without the complement supplied by the rest of the world. Just
as a comparative anatomist, from a single bone, sees what kind of animal
the whole must have been, so the metaphysician, according to Hegel,
sees, from any one piece of reality, what the whole of reality must
be--at least in its large outlines. Every apparently separate piece of
reality has, as it were, hooks which grapple it to the next piece;
the next piece, in turn, has fresh hooks, and so on, until the whole
universe is reconstructed. This essential incompleteness appears,
according to Hegel, equally in the world of thought and in the world of
things. In the world of thought, if we take any idea which is
abstract or incomplete, we find, on examination, that if we forget
its incompleteness, we become involved in contradictions; these
contradictions turn the idea in question into its opposite, or
antithesis; and in order to escape, we have to find a new, less
incomplete idea, which is the synthesis of our original idea and its
antithesis. This new idea, though less incomplete than the idea we
started with, will be found, nevertheless, to be still not wholly
complete, but to pass into its antithesis, with which it must be
combined in a new synthesis. In this way Hegel advances until he reaches
the 'Absolute Idea', which, according to him, has no incompleteness,
no opposite, and no need of further development. The Absolute Idea,
therefore, is adequate to describe Absolute Reality; but all lower ideas
only describe reality as it appears to a partial view, not as it is
to one who simultaneously surveys the Whole. Thus Hegel reaches the
conclusion that Absolute Reality forms one single harmonious system, not
in space or time, not in any degree evil, wholly rational, and wholly
spiritual. Any appearance to the contrary, in the world we know, can be
proved logically--so he believes--to be entirely due to our fragmentary
piecemeal view of the universe. If we saw the universe whole, as we may
suppose God sees it, space and time and matter and evil and all striving
and struggling would disappear, and we should see instead an eternal
perfect unchanging spiritual unity.

In this conception, there is undeniably something sublime, something to
which we could wish to yield assent. Nevertheless, when the arguments
in support of it are carefully examined, they appear to involve much
confusion and many unwarrantable assumptions. The fundamental tenet
upon which the system is built up is that what is incomplete must be not
self-subsistent, but must need the support of other things before it can
exist. It is held that whatever has relations to things outside itself
must contain some reference to those outside things in its own nature,
and could not, therefore, be what it is if those outside things did not
exist. A man's nature, for example, is constituted by his memories and
the rest of his knowledge, by his loves and hatreds, and so on; thus,
but for the objects which he knows or loves or hates, he could not be
what he is. He is essentially and obviously a fragment: taken as the
sum-total of reality he would be self-contradictory.

This whole point of view, however, turns upon the notion of the 'nature'
of a thing, which seems to mean 'all the truths about the thing'. It is
of course the case that a truth which connects one thing with another
thing could not subsist if the other thing did not subsist. But a
truth about a thing is not part of the thing itself, although it must,
according to the above usage, be part of the 'nature' of the thing.
If we mean by a thing's 'nature' all the truths about the thing, then
plainly we cannot know a thing's 'nature' unless we know all the thing's
relations to all the other things in the universe. But if the word
'nature' is used in this sense, we shall have to hold that the thing
may be known when its 'nature' is not known, or at any rate is not known
completely. There is a confusion, when this use of the word 'nature' is
employed, between knowledge of things and knowledge of truths. We may
have knowledge of a thing by acquaintance even if we know very few
propositions about it--theoretically we need not know any propositions
about it. Thus, acquaintance with a thing does not involve knowledge of
its 'nature' in the above sense. And although acquaintance with a thing
is involved in our knowing any one proposition about a thing, knowledge
of its 'nature', in the above sense, is not involved. Hence, (1)
acquaintance with a thing does not logically involve a knowledge of its
relations, and (2) a knowledge of some of its relations does not involve
a knowledge of all of its relations nor a knowledge of its 'nature' in
the above sense. I may be acquainted, for example, with my toothache,
and this knowledge may be as complete as knowledge by acquaintance ever
can be, without knowing all that the dentist (who is not acquainted
with it) can tell me about its cause, and without therefore knowing its
'nature' in the above sense. Thus the fact that a thing has relations
does not prove that its relations are logically necessary. That is to
say, from the mere fact that it is the thing it is we cannot deduce
that it must have the various relations which in fact it has. This only
_seems_ to follow because we know it already.

It follows that we cannot prove that the universe as a whole forms a
single harmonious system such as Hegel believes that it forms. And if we
cannot prove this, we also cannot prove the unreality of space and time
and matter and evil, for this is deduced by Hegel from the fragmentary
and relational character of these things. Thus we are left to the
piecemeal investigation of the world, and are unable to know the
characters of those parts of the universe that are remote from our
experience. This result, disappointing as it is to those whose hopes
have been raised by the systems of philosophers, is in harmony with
the inductive and scientific temper of our age, and is borne out by the
whole examination of human knowledge which has occupied our previous
chapters.

Most of the great ambitious attempts of metaphysicians have proceeded by
the attempt to prove that such and such apparent features of the actual
world were self-contradictory, and therefore could not be real. The
whole tendency of modern thought, however, is more and more in the
direction of showing that the supposed contradictions were illusory, and
that very little can be proved _a priori_ from considerations of what
_must_ be. A good illustration of this is afforded by space and
time. Space and time appear to be infinite in extent, and infinitely
divisible. If we travel along a straight line in either direction, it
is difficult to believe that we shall finally reach a last point,
beyond which there is nothing, not even empty space. Similarly, if in
imagination we travel backwards or forwards in time, it is difficult to
believe that we shall reach a first or last time, with not even empty
time beyond it. Thus space and time appear to be infinite in extent.

Again, if we take any two points on a line, it seems evident that there
must be other points between them however small the distance between
them may be: every distance can be halved, and the halves can be halved
again, and so on _ad infinitum_. In time, similarly, however little
time may elapse between two moments, it seems evident that there will be
other moments between them. Thus space and time appear to be infinitely
divisible. But as against these apparent facts--infinite extent and
infinite divisibility--philosophers have advanced arguments tending to
show that there could be no infinite collections of things, and that
therefore the number of points in space, or of instants in time, must
be finite. Thus a contradiction emerged between the apparent nature of
space and time and the supposed impossibility of infinite collections.

Kant, who first emphasized this contradiction, deduced the impossibility
of space and time, which he declared to be merely subjective; and since
his time very many philosophers have believed that space and time are
mere appearance, not characteristic of the world as it really is. Now,
however, owing to the labours of the mathematicians, notably Georg
Cantor, it has appeared that the impossibility of infinite collections
was a mistake. They are not in fact self-contradictory, but only
contradictory of certain rather obstinate mental prejudices. Hence the
reasons for regarding space and time as unreal have become inoperative,
and one of the great sources of metaphysical constructions is dried up.

The mathematicians, however, have not been content with showing that
space as it is commonly supposed to be is possible; they have shown also
that many other forms of space are equally possible, so far as logic
can show. Some of Euclid's axioms, which appear to common sense to be
necessary, and were formerly supposed to be necessary by philosophers,
are now known to derive their appearance of necessity from our mere
familiarity with actual space, and not from any _a priori_ logical
foundation. By imagining worlds in which these axioms are false, the
mathematicians have used logic to loosen the prejudices of common
sense, and to show the possibility of spaces differing--some more, some
less--from that in which we live. And some of these spaces differ so
little from Euclidean space, where distances such as we can measure are
concerned, that it is impossible to discover by observation whether our
actual space is strictly Euclidean or of one of these other kinds.
Thus the position is completely reversed. Formerly it appeared that
experience left only one kind of space to logic, and logic showed this
one kind to be impossible. Now, logic presents many kinds of space as
possible apart from experience, and experience only partially decides
between them. Thus, while our knowledge of what is has become less
than it was formerly supposed to be, our knowledge of what may be is
enormously increased. Instead of being shut in within narrow walls, of
which every nook and cranny could be explored, we find ourselves in an
open world of free possibilities, where much remains unknown because
there is so much to know.

What has happened in the case of space and time has happened, to some
extent, in other directions as well. The attempt to prescribe to the
universe by means of _a priori_ principles has broken down; logic,
instead of being, as formerly, the bar to possibilities, has become the
great liberator of the imagination, presenting innumerable alternatives
which are closed to unreflective common sense, and leaving to experience
the task of deciding, where decision is possible, between the many
worlds which logic offers for our choice. Thus knowledge as to what
exists becomes limited to what we can learn from experience--not to
what we can actually experience, for, as we have seen, there is much
knowledge by description concerning things of which we have no direct
experience. But in all cases of knowledge by description, we need some
connexion of universals, enabling us, from such and such a datum, to
infer an object of a certain sort as implied by our datum. Thus in
regard to physical objects, for example, the principle that sense-data
are signs of physical objects is itself a connexion of universals; and
it is only in virtue of this principle that experience enables us to
acquire knowledge concerning physical objects. The same applies to
the law of causality, or, to descend to what is less general, to such
principles as the law of gravitation.

Principles such as the law of gravitation are proved, or rather are
rendered highly probable, by a combination of experience with some
wholly _a priori_ principle, such as the principle of induction. Thus
our intuitive knowledge, which is the source of all our other knowledge
of truths, is of two sorts: pure empirical knowledge, which tells us of
the existence and some of the properties of particular things with
which we are acquainted, and pure _a priori_ knowledge, which gives us
connexions between universals, and enables us to draw inferences from
the particular facts given in empirical knowledge. Our derivative
knowledge always depends upon some pure _a priori_ knowledge and usually
also depends upon some pure empirical knowledge.

Philosophical knowledge, if what has been said above is true, does not
differ essentially from scientific knowledge; there is no special
source of wisdom which is open to philosophy but not to science, and the
results obtained by philosophy are not radically different from those
obtained from science. The essential characteristic of philosophy,
which makes it a study distinct from science, is criticism. It examines
critically the principles employed in science and in daily life; it
searches out any inconsistencies there may be in these principles,
and it only accepts them when, as the result of a critical inquiry, no
reason for rejecting them has appeared. If, as many philosophers have
believed, the principles underlying the sciences were capable, when
disengaged from irrelevant detail, of giving us knowledge concerning
the universe as a whole, such knowledge would have the same claim on our
belief as scientific knowledge has; but our inquiry has not revealed any
such knowledge, and therefore, as regards the special doctrines of the
bolder metaphysicians, has had a mainly negative result. But as regards
what would be commonly accepted as knowledge, our result is in the main
positive: we have seldom found reason to reject such knowledge as the
result of our criticism, and we have seen no reason to suppose man
incapable of the kind of knowledge which he is generally believed to
possess.

When, however, we speak of philosophy as a _criticism_ of knowledge, it
is necessary to impose a certain limitation. If we adopt the attitude
of the complete sceptic, placing ourselves wholly outside all knowledge,
and asking, from this outside position, to be compelled to return within
the circle of knowledge, we are demanding what is impossible, and our
scepticism can never be refuted. For all refutation must begin with
some piece of knowledge which the disputants share; from blank doubt,
no argument can begin. Hence the criticism of knowledge which philosophy
employs must not be of this destructive kind, if any result is to be
achieved. Against this absolute scepticism, no _logical_ argument can be
advanced. But it is not difficult to see that scepticism of this kind
is unreasonable. Descartes' 'methodical doubt', with which modern
philosophy began, is not of this kind, but is rather the kind of
criticism which we are asserting to be the essence of philosophy. His
'methodical doubt' consisted in doubting whatever seemed doubtful; in
pausing, with each apparent piece of knowledge, to ask himself whether,
on reflection, he could feel certain that he really knew it. This is the
kind of criticism which constitutes philosophy. Some knowledge, such as
knowledge of the existence of our sense-data, appears quite indubitable,
however calmly and thoroughly we reflect upon it. In regard to such
knowledge, philosophical criticism does not require that we should
abstain from belief. But there are beliefs--such, for example, as the
belief that physical objects exactly resemble our sense-data--which are
entertained until we begin to reflect, but are found to melt away
when subjected to a close inquiry. Such beliefs philosophy will bid us
reject, unless some new line of argument is found to support them.
But to reject the beliefs which do not appear open to any objections,
however closely we examine them, is not reasonable, and is not what
philosophy advocates.

The criticism aimed at, in a word, is not that which, without reason,
determines to reject, but that which considers each piece of apparent
knowledge on its merits, and retains whatever still appears to be
knowledge when this consideration is completed. That some risk of error
remains must be admitted, since human beings are fallible. Philosophy
may claim justly that it diminishes the risk of error, and that in some
cases it renders the risk so small as to be practically negligible. To
do more than this is not possible in a world where mistakes must occur;
and more than this no prudent advocate of philosophy would claim to have
performed.



CHAPTER XV. THE VALUE OF PHILOSOPHY

Having now come to the end of our brief and very incomplete review of
the problems of philosophy, it will be well to consider, in conclusion,
what is the value of philosophy and why it ought to be studied. It is
the more necessary to consider this question, in view of the fact that
many men, under the influence of science or of practical affairs, are
inclined to doubt whether philosophy is anything better than innocent
but useless trifling, hair-splitting distinctions, and controversies on
matters concerning which knowledge is impossible.

This view of philosophy appears to result, partly from a wrong
conception of the ends of life, partly from a wrong conception of the
kind of goods which philosophy strives to achieve. Physical science,
through the medium of inventions, is useful to innumerable people who
are wholly ignorant of it; thus the study of physical science is to
be recommended, not only, or primarily, because of the effect on the
student, but rather because of the effect on mankind in general. Thus
utility does not belong to philosophy. If the study of philosophy has
any value at all for others than students of philosophy, it must be only
indirectly, through its effects upon the lives of those who study it.
It is in these effects, therefore, if anywhere, that the value of
philosophy must be primarily sought.

But further, if we are not to fail in our endeavour to determine the
value of philosophy, we must first free our minds from the prejudices
of what are wrongly called 'practical' men. The 'practical' man, as
this word is often used, is one who recognizes only material needs, who
realizes that men must have food for the body, but is oblivious of the
necessity of providing food for the mind. If all men were well off, if
poverty and disease had been reduced to their lowest possible point,
there would still remain much to be done to produce a valuable society;
and even in the existing world the goods of the mind are at least as
important as the goods of the body. It is exclusively among the goods of
the mind that the value of philosophy is to be found; and only those who
are not indifferent to these goods can be persuaded that the study of
philosophy is not a waste of time.

Philosophy, like all other studies, aims primarily at knowledge. The
knowledge it aims at is the kind of knowledge which gives unity and
system to the body of the sciences, and the kind which results from a
critical examination of the grounds of our convictions, prejudices, and
beliefs. But it cannot be maintained that philosophy has had any very
great measure of success in its attempts to provide definite answers to
its questions. If you ask a mathematician, a mineralogist, a historian,
or any other man of learning, what definite body of truths has been
ascertained by his science, his answer will last as long as you are
willing to listen. But if you put the same question to a philosopher, he
will, if he is candid, have to confess that his study has not achieved
positive results such as have been achieved by other sciences. It is
true that this is partly accounted for by the fact that, as soon as
definite knowledge concerning any subject becomes possible, this subject
ceases to be called philosophy, and becomes a separate science. The
whole study of the heavens, which now belongs to astronomy, was once
included in philosophy; Newton's great work was called 'the mathematical
principles of natural philosophy'. Similarly, the study of the human
mind, which was a part of philosophy, has now been separated from
philosophy and has become the science of psychology. Thus, to a great
extent, the uncertainty of philosophy is more apparent than real: those
questions which are already capable of definite answers are placed in
the sciences, while those only to which, at present, no definite answer
can be given, remain to form the residue which is called philosophy.

This is, however, only a part of the truth concerning the uncertainty of
philosophy. There are many questions--and among them those that are of
the profoundest interest to our spiritual life--which, so far as we
can see, must remain insoluble to the human intellect unless its powers
become of quite a different order from what they are now. Has the
universe any unity of plan or purpose, or is it a fortuitous concourse
of atoms? Is consciousness a permanent part of the universe, giving
hope of indefinite growth in wisdom, or is it a transitory accident on
a small planet on which life must ultimately become impossible? Are good
and evil of importance to the universe or only to man? Such questions
are asked by philosophy, and variously answered by various philosophers.
But it would seem that, whether answers be otherwise discoverable or
not, the answers suggested by philosophy are none of them demonstrably
true. Yet, however slight may be the hope of discovering an answer, it
is part of the business of philosophy to continue the consideration of
such questions, to make us aware of their importance, to examine all the
approaches to them, and to keep alive that speculative interest in the
universe which is apt to be killed by confining ourselves to definitely
ascertainable knowledge.

Many philosophers, it is true, have held that philosophy could establish
the truth of certain answers to such fundamental questions. They have
supposed that what is of most importance in religious beliefs could be
proved by strict demonstration to be true. In order to judge of such
attempts, it is necessary to take a survey of human knowledge, and to
form an opinion as to its methods and its limitations. On such a subject
it would be unwise to pronounce dogmatically; but if the investigations
of our previous chapters have not led us astray, we shall be compelled
to renounce the hope of finding philosophical proofs of religious
beliefs. We cannot, therefore, include as part of the value of
philosophy any definite set of answers to such questions. Hence, once
more, the value of philosophy must not depend upon any supposed body of
definitely ascertainable knowledge to be acquired by those who study it.

The value of philosophy is, in fact, to be sought largely in its very
uncertainty. The man who has no tincture of philosophy goes through
life imprisoned in the prejudices derived from common sense, from the
habitual beliefs of his age or his nation, and from convictions which
have grown up in his mind without the co-operation or consent of his
deliberate reason. To such a man the world tends to become definite,
finite, obvious; common objects rouse no questions, and unfamiliar
possibilities are contemptuously rejected. As soon as we begin to
philosophize, on the contrary, we find, as we saw in our opening
chapters, that even the most everyday things lead to problems to which
only very incomplete answers can be given. Philosophy, though unable to
tell us with certainty what is the true answer to the doubts which it
raises, is able to suggest many possibilities which enlarge our thoughts
and free them from the tyranny of custom. Thus, while diminishing our
feeling of certainty as to what things are, it greatly increases our
knowledge as to what they may be; it removes the somewhat arrogant
dogmatism of those who have never travelled into the region of
liberating doubt, and it keeps alive our sense of wonder by showing
familiar things in an unfamiliar aspect.

Apart from its utility in showing unsuspected possibilities, philosophy
has a value--perhaps its chief value--through the greatness of the
objects which it contemplates, and the freedom from narrow and personal
aims resulting from this contemplation. The life of the instinctive
man is shut up within the circle of his private interests: family and
friends may be included, but the outer world is not regarded except
as it may help or hinder what comes within the circle of instinctive
wishes. In such a life there is something feverish and confined, in
comparison with which the philosophic life is calm and free. The private
world of instinctive interests is a small one, set in the midst of a
great and powerful world which must, sooner or later, lay our private
world in ruins. Unless we can so enlarge our interests as to include the
whole outer world, we remain like a garrison in a beleagured fortress,
knowing that the enemy prevents escape and that ultimate surrender is
inevitable. In such a life there is no peace, but a constant strife
between the insistence of desire and the powerlessness of will. In one
way or another, if our life is to be great and free, we must escape this
prison and this strife.

One way of escape is by philosophic contemplation. Philosophic
contemplation does not, in its widest survey, divide the universe into
two hostile camps--friends and foes, helpful and hostile, good and
bad--it views the whole impartially. Philosophic contemplation, when it
is unalloyed, does not aim at proving that the rest of the universe is
akin to man. All acquisition of knowledge is an enlargement of the Self,
but this enlargement is best attained when it is not directly sought. It
is obtained when the desire for knowledge is alone operative, by a study
which does not wish in advance that its objects should have this or that
character, but adapts the Self to the characters which it finds in its
objects. This enlargement of Self is not obtained when, taking the Self
as it is, we try to show that the world is so similar to this Self that
knowledge of it is possible without any admission of what seems alien.
The desire to prove this is a form of self-assertion and, like all
self-assertion, it is an obstacle to the growth of Self which it
desires, and of which the Self knows that it is capable. Self-assertion,
in philosophic speculation as elsewhere, views the world as a means to
its own ends; thus it makes the world of less account than Self, and the
Self sets bounds to the greatness of its goods. In contemplation, on
the contrary, we start from the not-Self, and through its greatness the
boundaries of Self are enlarged; through the infinity of the universe
the mind which contemplates it achieves some share in infinity.

For this reason greatness of soul is not fostered by those philosophies
which assimilate the universe to Man. Knowledge is a form of union
of Self and not-Self; like all union, it is impaired by dominion, and
therefore by any attempt to force the universe into conformity with
what we find in ourselves. There is a widespread philosophical tendency
towards the view which tells us that Man is the measure of all things,
that truth is man-made, that space and time and the world of universals
are properties of the mind, and that, if there be anything not created
by the mind, it is unknowable and of no account for us. This view, if
our previous discussions were correct, is untrue; but in addition to
being untrue, it has the effect of robbing philosophic contemplation of
all that gives it value, since it fetters contemplation to Self. What
it calls knowledge is not a union with the not-Self, but a set of
prejudices, habits, and desires, making an impenetrable veil between
us and the world beyond. The man who finds pleasure in such a theory of
knowledge is like the man who never leaves the domestic circle for fear
his word might not be law.

The true philosophic contemplation, on the contrary, finds its
satisfaction in every enlargement of the not-Self, in everything
that magnifies the objects contemplated, and thereby the subject
contemplating. Everything, in contemplation, that is personal or
private, everything that depends upon habit, self-interest, or desire,
distorts the object, and hence impairs the union which the intellect
seeks. By thus making a barrier between subject and object, such
personal and private things become a prison to the intellect. The free
intellect will see as God might see, without a _here_ and _now_,
without hopes and fears, without the trammels of customary beliefs
and traditional prejudices, calmly, dispassionately, in the sole and
exclusive desire of knowledge--knowledge as impersonal, as purely
contemplative, as it is possible for man to attain. Hence also the free
intellect will value more the abstract and universal knowledge into
which the accidents of private history do not enter, than the knowledge
brought by the senses, and dependent, as such knowledge must be, upon
an exclusive and personal point of view and a body whose sense-organs
distort as much as they reveal.

The mind which has become accustomed to the freedom and impartiality of
philosophic contemplation will preserve something of the same freedom
and impartiality in the world of action and emotion. It will view
its purposes and desires as parts of the whole, with the absence of
insistence that results from seeing them as infinitesimal fragments in
a world of which all the rest is unaffected by any one man's deeds. The
impartiality which, in contemplation, is the unalloyed desire for truth,
is the very same quality of mind which, in action, is justice, and in
emotion is that universal love which can be given to all, and not only
to those who are judged useful or admirable. Thus contemplation enlarges
not only the objects of our thoughts, but also the objects of our
actions and our affections: it makes us citizens of the universe, not
only of one walled city at war with all the rest. In this citizenship
of the universe consists man's true freedom, and his liberation from the
thraldom of narrow hopes and fears.

Thus, to sum up our discussion of the value of philosophy; Philosophy
is to be studied, not for the sake of any definite answers to its
questions, since no definite answers can, as a rule, be known to be
true, but rather for the sake of the questions themselves; because
these questions enlarge our conception of what is possible, enrich
our intellectual imagination and diminish the dogmatic assurance which
closes the mind against speculation; but above all because, through the
greatness of the universe which philosophy contemplates, the mind also
is rendered great, and becomes capable of that union with the universe
which constitutes its highest good.




BIBLIOGRAPHICAL NOTE

The student who wishes to acquire an elementary knowledge of philosophy
will find it both easier and more profitable to read some of the works
of the great philosophers than to attempt to derive an all-round view
from handbooks. The following are specially recommended:

     Plato: _Republic_, especially Books VI and VII.
     Descartes: _Meditations_.
     Spinoza: _Ethics_.
     Leibniz: _The Monadology_.
     Berkeley: _Three Dialogues between Hylas and Philonous_.
     Hume: _Enquiry concerning Human Understanding_.
     Kant: _Prolegomena to any Future Metaphysic_.




*** END OF THE PROJECT GUTENBERG EBOOK THE PROBLEMS OF PHILOSOPHY ***


    

Updated editions will replace the previous one—the old editions will
be renamed.

Creating the works from print editions not protected by U.S. copyright
law means that no one owns a United States copyright in these works,
so the Foundation (and you!) can copy and distribute it in the United
States without permission and without paying copyright
royalties. Special rules, set forth in the General Terms of Use part
of this license, apply to copying and distributing Project
Gutenberg™ electronic works to protect the PROJECT GUTENBERG™
concept and trademark. Project Gutenberg is a registered trademark,
and may not be used if you charge for an eBook, except by following
the terms of the trademark license, including paying royalties for use
of the Project Gutenberg trademark. If you do not charge anything for
copies of this eBook, complying with the trademark license is very
easy. You may use this eBook for nearly any purpose such as creation
of derivative works, reports, performances and research. Project
Gutenberg eBooks may be modified and printed and given away—you may
do practically ANYTHING in the United States with eBooks not protected
by U.S. copyright law. Redistribution is subject to the trademark
license, especially commercial redistribution.


START: FULL LICENSE

THE FULL PROJECT GUTENBERG™ LICENSE

PLEASE READ THIS BEFORE YOU DISTRIBUTE OR USE THIS WORK

To protect the Project Gutenberg™ mission of promoting the free
distribution of electronic works, by using or distributing this work
(or any other work associated in any way with the phrase “Project
Gutenberg”), you agree to comply with all the terms of the Full
Project Gutenberg License available with this file or online at
www.gutenberg.org/license.

Section 1. General Terms of Use and Redistributing Project Gutenberg
electronic works

1.A. By reading or using any part of this Project Gutenberg
electronic work, you indicate that you have read, understand, agree to
and accept all the terms of this license and intellectual property
(trademark/copyright) agreement. If you do not agree to abide by all
the terms of this agreement, you must cease using and return or
destroy all copies of Project Gutenberg electronic works in your
possession. If you paid a fee for obtaining a copy of or access to a
Project Gutenberg electronic work and you do not agree to be bound
by the terms of this agreement, you may obtain a refund from the person
or entity to whom you paid the fee as set forth in paragraph 1.E.8.

1.B. “Project Gutenberg” is a registered trademark. It may only be
used on or associated in any way with an electronic work by people who
agree to be bound by the terms of this agreement. There are a few
things that you can do with most Project Gutenberg electronic works
even without complying with the full terms of this agreement. See
paragraph 1.C below. There are a lot of things you can do with Project
Gutenberg electronic works if you follow the terms of this
agreement and help preserve free future access to Project Gutenberg
electronic works. See paragraph 1.E below.

1.C. The Project Gutenberg Literary Archive Foundation (“the
Foundation” or PGLAF), owns a compilation copyright in the collection
of Project Gutenberg electronic works. Nearly all the individual
works in the collection are in the public domain in the United
States. If an individual work is unprotected by copyright law in the
United States and you are located in the United States, we do not
claim a right to prevent you from copying, distributing, performing,
displaying or creating derivative works based on the work as long as
all references to Project Gutenberg are removed. Of course, we hope
that you will support the Project Gutenberg mission of promoting
free access to electronic works by freely sharing Project Gutenberg
works in compliance with the terms of this agreement for keeping the
Project Gutenberg name associated with the work. You can easily
comply with the terms of this agreement by keeping this work in the
same format with its attached full Project Gutenberg License when
you share it without charge with others.

1.D. The copyright laws of the place where you are located also govern
what you can do with this work. Copyright laws in most countries are
in a constant state of change. If you are outside the United States,
check the laws of your country in addition to the terms of this
agreement before downloading, copying, displaying, performing,
distributing or creating derivative works based on this work or any
other Project Gutenberg work. The Foundation makes no
representations concerning the copyright status of any work in any
country other than the United States.

1.E. Unless you have removed all references to Project Gutenberg:

1.E.1. The following sentence, with active links to, or other
immediate access to, the full Project Gutenberg License must appear
prominently whenever any copy of a Project Gutenberg work (any work
on which the phrase “Project Gutenberg” appears, or with which the
phrase “Project Gutenberg” is associated) is accessed, displayed,
performed, viewed, copied or distributed:

    This eBook is for the use of anyone anywhere in the United States and most
    other parts of the world at no cost and with almost no restrictions
    whatsoever. You may copy it, give it away or re-use it under the terms
    of the Project Gutenberg™ License included with this eBook or online
    at www.gutenberg.org. If you
    are not located in the United States, you will have to check the laws
    of the country where you are located before using this eBook.
  
1.E.2. If an individual Project Gutenberg electronic work is
derived from texts not protected by U.S. copyright law (does not
contain a notice indicating that it is posted with permission of the
copyright holder), the work can be copied and distributed to anyone in
the United States without paying any fees or charges. If you are
redistributing or providing access to a work with the phrase “Project
Gutenberg” associated with or appearing on the work, you must comply
either with the requirements of paragraphs 1.E.1 through 1.E.7 or
obtain permission for the use of the work and the Project Gutenberg
trademark as set forth in paragraphs 1.E.8 or 1.E.9.

1.E.3. If an individual Project Gutenberg electronic work is posted
with the permission of the copyright holder, your use and distribution
must comply with both paragraphs 1.E.1 through 1.E.7 and any
additional terms imposed by the copyright holder. Additional terms
will be linked to the Project Gutenberg License for all works
posted with the permission of the copyright holder found at the
beginning of this work.

1.E.4. Do not unlink or detach or remove the full Project Gutenberg
License terms from this work, or any files containing a part of this
work or any other work associated with Project Gutenberg.

1.E.5. Do not copy, display, perform, distribute or redistribute this
electronic work, or any part of this electronic work, without
prominently displaying the sentence set forth in paragraph 1.E.1 with
active links or immediate access to the full terms of the Project
Gutenberg License.

1.E.6. You may convert to and distribute this work in any binary,
compressed, marked up, nonproprietary or proprietary form, including
any word processing or hypertext form. However, if you provide access
to or distribute copies of a Project Gutenberg work in a format
other than “Plain Vanilla ASCII” or other format used in the official
version posted on the official Project Gutenberg website
(www.gutenberg.org), you must, at no additional cost, fee or expense
to the user, provide a copy, a means of exporting a copy, or a means
of obtaining a copy upon request, of the work in its original “Plain
Vanilla ASCII” or other form. Any alternate format must include the
full Project Gutenberg License as specified in paragraph 1.E.1.

1.E.7. Do not charge a fee for access to, viewing, displaying,
performing, copying or distributing any Project Gutenberg works
unless you comply with paragraph 1.E.8 or 1.E.9.

1.E.8. You may charge a reasonable fee for copies of or providing
access to or distributing Project Gutenberg electronic works
provided that:

    • You pay a royalty fee of 20% of the gross profits you derive from
        the use of Project Gutenberg works calculated using the method
        you already use to calculate your applicable taxes. The fee is owed
        to the owner of the Project Gutenberg trademark, but he has
        agreed to donate royalties under this paragraph to the Project
        Gutenberg Literary Archive Foundation. Royalty payments must be paid
        within 60 days following each date on which you prepare (or are
        legally required to prepare) your periodic tax returns. Royalty
        payments should be clearly marked as such and sent to the Project
        Gutenberg Literary Archive Foundation at the address specified in
        Section 4, “Information about donations to the Project Gutenberg
        Literary Archive Foundation.”
    
    • You provide a full refund of any money paid by a user who notifies
        you in writing (or by e-mail) within 30 days of receipt that s/he
        does not agree to the terms of the full Project Gutenberg™
        License. You must require such a user to return or destroy all
        copies of the works possessed in a physical medium and discontinue
        all use of and all access to other copies of Project Gutenberg™
        works.
    
    • You provide, in accordance with paragraph 1.F.3, a full refund of
        any money paid for a work or a replacement copy, if a defect in the
        electronic work is discovered and reported to you within 90 days of
        receipt of the work.
    
    • You comply with all other terms of this agreement for free
        distribution of Project Gutenberg™ works.
    

1.E.9. If you wish to charge a fee or distribute a Project
Gutenberg™ electronic work or group of works on different terms than
are set forth in this agreement, you must obtain permission in writing
from the Project Gutenberg Literary Archive Foundation, the manager of
the Project Gutenberg™ trademark. Contact the Foundation as set
forth in Section 3 below.

1.F.

1.F.1. Project Gutenberg volunteers and employees expend considerable
effort to identify, do copyright research on, transcribe and proofread
works not protected by U.S. copyright law in creating the Project
Gutenberg™ collection. Despite these efforts, Project Gutenberg™
electronic works, and the medium on which they may be stored, may
contain “Defects,” such as, but not limited to, incomplete, inaccurate
or corrupt data, transcription errors, a copyright or other
intellectual property infringement, a defective or damaged disk or
other medium, a computer virus, or computer codes that damage or
cannot be read by your equipment.

1.F.2. LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the “Right
of Replacement or Refund” described in paragraph 1.F.3, the Project
Gutenberg Literary Archive Foundation, the owner of the Project
Gutenberg™ trademark, and any other party distributing a Project
Gutenberg™ electronic work under this agreement, disclaim all
liability to you for damages, costs and expenses, including legal
fees. YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT
LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE
PROVIDED IN PARAGRAPH 1.F.3. YOU AGREE THAT THE FOUNDATION, THE
TRADEMARK OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE
LIABLE TO YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR
INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH
DAMAGE.

1.F.3. LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a
defect in this electronic work within 90 days of receiving it, you can
receive a refund of the money (if any) you paid for it by sending a
written explanation to the person you received the work from. If you
received the work on a physical medium, you must return the medium
with your written explanation. The person or entity that provided you
with the defective work may elect to provide a replacement copy in
lieu of a refund. If you received the work electronically, the person
or entity providing it to you may choose to give you a second
opportunity to receive the work electronically in lieu of a refund. If
the second copy is also defective, you may demand a refund in writing
without further opportunities to fix the problem.

1.F.4. Except for the limited right of replacement or refund set forth
in paragraph 1.F.3, this work is provided to you ‘AS-IS’, WITH NO
OTHER WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE.

1.F.5. Some states do not allow disclaimers of certain implied
warranties or the exclusion or limitation of certain types of
damages. If any disclaimer or limitation set forth in this agreement
violates the law of the state applicable to this agreement, the
agreement shall be interpreted to make the maximum disclaimer or
limitation permitted by the applicable state law. The invalidity or
unenforceability of any provision of this agreement shall not void the
remaining provisions.

1.F.6. INDEMNITY - You agree to indemnify and hold the Foundation, the
trademark owner, any agent or employee of the Foundation, anyone
providing copies of Project Gutenberg™ electronic works in
accordance with this agreement, and any volunteers associated with the
production, promotion and distribution of Project Gutenberg™
electronic works, harmless from all liability, costs and expenses,
including legal fees, that arise directly or indirectly from any of
the following which you do or cause to occur: (a) distribution of this
or any Project Gutenberg work, (b) alteration, modification, or
additions or deletions to any Project Gutenberg work, and (c) any
Defect you cause.

Section 2. Information about the Mission of Project Gutenberg

Project Gutenberg is synonymous with the free distribution of
electronic works in formats readable by the widest variety of
computers including obsolete, old, middle-aged and new computers. It
exists because of the efforts of hundreds of volunteers and donations
from people in all walks of life.

Volunteers and financial support to provide volunteers with the
assistance they need are critical to reaching Project Gutenberg’s
goals and ensuring that the Project Gutenberg collection will
remain freely available for generations to come. In 2001, the Project
Gutenberg Literary Archive Foundation was created to provide a secure
and permanent future for Project Gutenberg and future
generations. To learn more about the Project Gutenberg Literary
Archive Foundation and how your efforts and donations can help, see
Sections 3 and 4 and the Foundation information page at www.gutenberg.org.

Section 3. Information about the Project Gutenberg Literary Archive Foundation

The Project Gutenberg Literary Archive Foundation is a non-profit
501(c)(3) educational corporation organized under the laws of the
state of Mississippi and granted tax exempt status by the Internal
Revenue Service. The Foundation’s EIN or federal tax identification
number is 64-6221541. Contributions to the Project Gutenberg Literary
Archive Foundation are tax deductible to the full extent permitted by
U.S. federal laws and your state’s laws.

The Foundation’s business office is located at 41 Watchung Plaza #516,
Montclair NJ 07042, USA, +1 (862) 621-9288. Email contact links and up
to date contact information can be found at the Foundation’s website
and official page at www.gutenberg.org/contact

Section 4. Information about Donations to the Project Gutenberg
Literary Archive Foundation

Project Gutenberg™ depends upon and cannot survive without widespread
public support and donations to carry out its mission of
increasing the number of public domain and licensed works that can be
freely distributed in machine-readable form accessible by the widest
array of equipment including outdated equipment. Many small donations
($1 to $5,000) are particularly important to maintaining tax exempt
status with the IRS.

The Foundation is committed to complying with the laws regulating
charities and charitable donations in all 50 states of the United
States. Compliance requirements are not uniform and it takes a
considerable effort, much paperwork and many fees to meet and keep up
with these requirements. We do not solicit donations in locations
where we have not received written confirmation of compliance. To SEND
DONATIONS or determine the status of compliance for any particular state
visit www.gutenberg.org/donate.

While we cannot and do not solicit contributions from states where we
have not met the solicitation requirements, we know of no prohibition
against accepting unsolicited donations from donors in such states who
approach us with offers to donate.

International donations are gratefully accepted, but we cannot make
any statements concerning tax treatment of donations received from
outside the United States. U.S. laws alone swamp our small staff.

Please check the Project Gutenberg web pages for current donation
methods and addresses. Donations are accepted in a number of other
ways including checks, online payments and credit card donations. To
donate, please visit: www.gutenberg.org/donate.

Section 5. General Information About Project Gutenberg electronic works

Professor Michael S. Hart was the originator of the Project
Gutenberg concept of a library of electronic works that could be
freely shared with anyone. For forty years, he produced and
distributed Project Gutenberg eBooks with only a loose network of
volunteer support.

Project Gutenberg eBooks are often created from several printed
editions, all of which are confirmed as not protected by copyright in
the U.S. unless a copyright notice is included. Thus, we do not
necessarily keep eBooks in compliance with any particular paper
edition.

Most people start at our website which has the main PG search
facility: www.gutenberg.org.

This website includes information about Project Gutenberg,
including how to make donations to the Project Gutenberg Literary
Archive Foundation, how to help produce our new eBooks, and how to
subscribe to our email newsletter to hear about new eBooks.
```

<a id="frontend-app-metro.config.js"></a>
### 46. `frontend/app/metro.config.js`
- Size: 224 bytes | LOC: 9 | SLOC: 6 | TODOs: 0 | Modified: 2026-03-18 12:27:19 | SHA1: 2faf3df96d3c

#### Brief
const { getDefaultConfig } = require("expo/metro-config");

#### Auto Summary
const { getDefaultConfig } = require("expo/metro-config");

#### Content

```javascript
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

if (!config.resolver.assetExts.includes("txt")) {
  config.resolver.assetExts.push("txt");
}

module.exports = config;
```

<a id="frontend-app-public-404.html"></a>
### 47. `frontend/app/public/404.html`
- Size: 484 bytes | LOC: 12 | SLOC: 12 | TODOs: 0 | Modified: 2026-03-18 14:01:32 | SHA1: 0ece023f9b6b

#### Brief
<!DOCTYPE html><html><head>
  <meta charset="utf-8"><title>Redirecting...</title>

#### Auto Summary
<!DOCTYPE html><html><head>

#### Content

```html
<!DOCTYPE html><html><head>
  <meta charset="utf-8"><title>Redirecting...</title>
  <script>
    (function(){
      var path = window.location.pathname.replace(/\/frontend_expo_template/, '');
      var search = window.location.search || '';
      var hash = window.location.hash || '';
      var url = '/frontend_expo_template/?redirect=' + encodeURIComponent(path + search + hash);
      window.location.replace(url);
    })();
  </script>
</head><body>Redirecting...</body></html>
```

<a id="frontend-app-public-_config.yml"></a>
### 48. `frontend/app/public/_config.yml`
- Size: 255 bytes | LOC: 10 | SLOC: 10 | TODOs: 0 | Modified: 2026-03-18 14:01:32 | SHA1: 0648166169b0

#### Brief
title: "frontend_expo_template"
description: "A Template For Frontend Expo Development."

#### Auto Summary
title: "frontend_expo_template"

#### Content

```yaml
title: "frontend_expo_template"
description: "A Template For Frontend Expo Development."
baseurl: "/frontend_expo_template"
url: "https://europanite.github.io"
theme: minima
markdown: kramdown
plugins:
  - jekyll-feed
  - jekyll-sitemap
highlighter: rouge
```

<a id="frontend-app-public-google095bf08db4fb15d0.html"></a>
### 49. `frontend/app/public/google095bf08db4fb15d0.html`
- Size: 53 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2026-03-18 14:01:32 | SHA1: 6d7f2ccca405

#### Brief
google-site-verification: google095bf08db4fb15d0.html

#### Auto Summary
google-site-verification: google095bf08db4fb15d0.html

#### Content

```html
google-site-verification: google095bf08db4fb15d0.html
```

<a id="frontend-app-screens-HomeScreen.tsx"></a>
### 50. `frontend/app/screens/HomeScreen.tsx`
- Size: 8012 bytes | LOC: 239 | SLOC: 221 | TODOs: 0 | Modified: 2026-03-22 13:00:42 | SHA1: 9a3838bcacb4

#### Brief
import React, { useEffect, useMemo, useState } from "react";
import {

#### Auto Summary
import React, { useEffect, useMemo, useState } from "react";

#### Content

```tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import JointDistributionChart from "../components/JointDistributionChart";
import InfoCard from "../components/InfoCard";
import SentenceTable from "../components/SentenceTable";
import TextPanel from "../components/TextPanel";
import { loadSampleEssayText } from "../lib/analysis/sampleEssay";
import { analyzeEssay } from "../lib/analysis/text";
import type { EssayAnalysis } from "../lib/analysis/types";
import { CHART_COLORS } from "../lib/constants";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const chartWidth = Math.max(320, Math.min(width - 96, 980));
  const [essay, setEssay] = useState("");
  const [analysis, setAnalysis] = useState<EssayAnalysis | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDifficultyGuide, setShowDifficultyGuide] = useState(false);

  const handleLoadSample = async () => {
    try {
      setError(null);
      const sampleText = await loadSampleEssayText();
      setEssay(sampleText);
    } catch (_sampleError) {
      setError("Failed to load the sample essay text.");
    }
  };

  useEffect(() => {
    void handleLoadSample();
  }, []);

  const handleAnalyze = async () => {
    try {
      setBusy(true);
      setError(null);
      const result = await analyzeEssay(essay);
      setAnalysis(result);
      setShowDifficultyGuide(false);
    } catch (_analysisError) {
      setError("Failed to analyze the essay. Please check the input text.");
    } finally {
      setBusy(false);
    }
  };

  const summaryCards = useMemo(() => {
    if (!analysis) {
      return [];
    }

    return [
      { label: "Sentences", value: String(analysis.summary.sentenceCount) },
      { label: "Total words", value: String(analysis.summary.totalWords) },
      { label: "Avg sentence length", value: String(analysis.summary.averageSentenceLength) },
      { label: "Avg difficulty", value: String(analysis.summary.averageSentenceDifficulty) },
      { label: "Unknown-word rate", value: `${analysis.unknownRate}%` }
    ];
  }, [analysis]);

  const difficultyGuide = useMemo(() => {
    if (!analysis) {
      return [];
    }

    return analysis.difficultyExamples.filter((item) => item.words.length > 0);
  }, [analysis]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 18
      }}
    >
      <TextPanel
        value={essay}
        onChangeText={setEssay}
        onAnalyze={handleAnalyze}
        onLoadSample={handleLoadSample}
        busy={busy}
      />

      {!analysis && !busy ? (
        <InfoCard title="How the score works">
          <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
            Average word difficulty is estimated from a SUBTLEX-style frequency dictionary.
            Common words stay lower on the chart, while rarer or unknown words move a sentence upward.
          </Text>
        </InfoCard>
      ) : null}

      {busy ? (
        <InfoCard title="Loading dictionary and calculating metrics">
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ActivityIndicator />
            <Text style={{ color: CHART_COLORS.bodyText, fontSize: 14 }}>
              Loading the dictionary and analyzing each sentence in the browser.
            </Text>
          </View>
        </InfoCard>
      ) : null}

      {error ? (
        <InfoCard title="Analysis error">
          <Text style={{ color: "#b91c1c", fontSize: 14 }}>{error}</Text>
        </InfoCard>
      ) : null}

      {analysis ? (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {summaryCards.map((card) => (
              <View
                key={card.label}
                style={{
                  minWidth: 160,
                  flexGrow: 1,
                  backgroundColor: "#ffffff",
                  borderWidth: 1,
                  borderColor: CHART_COLORS.cardBorder,
                  borderRadius: 18,
                  padding: 16,
                  gap: 6
                }}
              >
                <Text style={{ fontSize: 13, color: CHART_COLORS.axisText }}>{card.label}</Text>
                <Text style={{ fontSize: 22, fontWeight: "800", color: CHART_COLORS.titleText }}>
                  {card.value}
                </Text>
              </View>
            ))}
          </View>

          <JointDistributionChart
            points={analysis.sentences ?? []}
            xBins={analysis.xBins ?? []}
            yBins={analysis.yBins ?? []}
            width={chartWidth}
            height={560}
          />

          {difficultyGuide.length > 0 ? (
            <View style={{ position: "relative", alignSelf: "flex-start" }}>
              <Pressable
                onPress={() => setShowDifficultyGuide((prev) => !prev)}
                style={({ pressed }) => ({
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor: "#d8cde1",
                  backgroundColor: pressed ? "#f3edf7" : "#ffffff"
                })}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: CHART_COLORS.titleText
                  }}
                >
                  Difficulty examples
                </Text>
              </Pressable>

              {showDifficultyGuide ? (
                <View
                  style={{
                    marginTop: 10,
                    width: Math.min(chartWidth, 520)
                  }}
                >
                  <InfoCard title="Difficulty guide from actual words">
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 22,
                        color: CHART_COLORS.bodyText
                      }}
                    >
                      Each band shows example words taken from the current essay. They are grouped by
                      word-level difficulty so you can read the y-axis more intuitively.
                    </Text>

                    <View style={{ gap: 10 }}>
                      {difficultyGuide.map((item) => (
                        <View
                          key={item.rangeLabel}
                          style={{
                            paddingBottom: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: "#ece6f0",
                            gap: 4
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: "700",
                              color: CHART_COLORS.titleText
                            }}
                          >
                            Difficulty {item.rangeLabel}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              lineHeight: 22,
                              color: CHART_COLORS.bodyText
                            }}
                          >
                            {item.words.join(", ")}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </InfoCard>
                </View>
              ) : null}
            </View>
          ) : null}

          <SentenceTable sentences={analysis.sentences} />
        </>
      ) : null}
    </ScrollView>
  );
}
```

<a id="frontend-app-tsconfig.json"></a>
### 51. `frontend/app/tsconfig.json`
- Size: 281 bytes | LOC: 11 | SLOC: 11 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: b821d728befc

#### Brief
{
  "extends": "expo/tsconfig.base",

#### Auto Summary
{

#### Content

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "lib": ["esnext", "dom"],
    "types": ["jest", "@testing-library/jest-dom", "node"],
    "baseUrl": "."
  },
  "include": ["**/*.ts", "**/*.tsx", "**/*.d.ts"]
}
```

<a id="frontend-Dockerfile"></a>
### 52. `frontend/Dockerfile`
- Size: 226 bytes | LOC: 14 | SLOC: 10 | TODOs: 0 | Modified: 2026-05-25 17:09:45 | SHA1: 188149a891db

#### Brief
FROM node:24-bookworm-slim

#### Auto Summary
FROM node:24-bookworm-slim

#### Content

```dockerfile
FROM node:24-bookworm-slim

RUN apt-get update && apt-get install -y \
    libnspr4 \
    libnss3 \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

CMD ["npm", "start"]
```

<a id="frontend-Dockerfile.test"></a>
### 53. `frontend/Dockerfile.test`
- Size: 137 bytes | LOC: 8 | SLOC: 5 | TODOs: 0 | Modified: 2026-05-25 17:09:42 | SHA1: 4a275db06930

#### Brief
FROM node:24-bookworm-slim

#### Auto Summary
FROM node:24-bookworm-slim

#### Content

```
FROM node:24-bookworm-slim

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

CMD ["npm","test","--","--ci","--runInBand","--verbose"]
```

<a id="LICENSE"></a>
### 54. `LICENSE`
- Size: 11340 bytes | LOC: 201 | SLOC: 169 | TODOs: 0 | Modified: 2026-03-18 11:41:43 | SHA1: 64f2208f2896

#### Brief
Apache License
                           Version 2.0, January 2004

#### Auto Summary
Apache License

#### Content

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2025 europanite

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

<a id="memo.txt"></a>
### 55. `memo.txt`
- Size: 1397 bytes | LOC: 35 | SLOC: 34 | TODOs: 0 | Modified: 2026-03-19 00:17:13 | SHA1: 5d27b17c263b

#### Brief
{difficultyGuide.length > 0 ? (
            <InfoCard title="Difficulty guide from actual words">

#### Auto Summary
{difficultyGuide.length > 0 ? (

#### Content

```
          {difficultyGuide.length > 0 ? (
            <InfoCard title="Difficulty guide from actual words">
              <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
                Each band shows example words taken from the current essay. They are grouped by
                word-level difficulty so you can read the y-axis more intuitively.
              </Text>

              <View style={{ gap: 10 }}>
                {difficultyGuide.map((item) => (
                  <View
                    key={item.rangeLabel}
                    style={{
                      paddingBottom: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#ece6f0",
                      gap: 4
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "700",
                        color: CHART_COLORS.titleText
                      }}
                    >
                      Difficulty {item.rangeLabel}
                    </Text>
                    <Text style={{ fontSize: 14, lineHeight: 22, color: CHART_COLORS.bodyText }}>
                      {item.words.join(", ")}
                    </Text>
                  </View>
                ))}
              </View>
            </InfoCard>
          ) : null}
```

<a id="README.de.md"></a>
### 56. `README.de.md`
- Size: 3328 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:17:45 | SHA1: abfe4c5ce4d4

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="README.es.md"></a>
### 57. `README.es.md`
- Size: 3346 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:17:52 | SHA1: 7528af0482d6

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
---
layout: page
title: "🇪🇸 Español"
permalink: /es/
lang: es
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

Una aplicación web que analiza un ensayo en inglés y visualiza cada oración.

## Qué muestra

- **X axis:** número de palabras de la oración
- **Y axis:** dificultad media de las palabras derivada de un diccionario de frecuencias basado en SUBTLEX
- **Top histogram:** distribución del número de palabras por oración
- **Right histogram:** distribución de la dificultad de las oraciones
- **Sentence table:** métricas por oración, incluido el número de palabras desconocidas

## Estrategia del diccionario

La aplicación intenta cargar dinámicamente en tiempo de ejecución el paquete npm `subtlex-word-frequencies`. Se incluye un fallback mini dictionary para que la UI siga funcionando durante el desarrollo local, las pruebas y los casos en los que el export shape del paquete difiere de lo esperado.

`frontend/app/lib/analysis/subtlexLoader.ts` normaliza varias shapes comunes:

- maps directos `{ word: score }`
- arrays de objects como `{ word, zipf }`
- objects con fields como `frequency`, `count`, `fpm`, `lg10WF` o `zipf`

## Primeros pasos

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
```

<a id="README.fr.md"></a>
### 58. `README.fr.md`
- Size: 3347 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:17:56 | SHA1: 8a6d9be72e63

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="README.hi.md"></a>
### 59. `README.hi.md`
- Size: 4097 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:18:00 | SHA1: 2dc03bd88eb7

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="README.ja.md"></a>
### 60. `README.ja.md`
- Size: 3291 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:18:05 | SHA1: be9944d15eed

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
---
layout: page
title: "🇯🇵 日本語"
permalink: /ja/
lang: ja
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

英語エッセイを分析し、各文を可視化するWebアプリケーション。

## 表示内容

- **X axis:** 文の単語数
- **Y axis:** SUBTLEXベースの頻度辞書から算出した平均単語難易度
- **Top histogram:** 文の単語数分布
- **Right histogram:** 文の難易度分布
- **Sentence table:** 未知語数を含む文ごとのメトリクス

## 辞書戦略

このアプリは、npmパッケージ `subtlex-word-frequencies` を実行時に動的ロードしようとする。fallback mini dictionary を同梱しているため、ローカル開発、テスト、またはパッケージの export shape が想定と異なる場合でもUIは動作する。

`frontend/app/lib/analysis/subtlexLoader.ts` は、いくつかの一般的な shapes を normalize する:

- 直接的な `{ word: score }` maps
- `{ word, zipf }` のような objects の arrays
- `frequency`, `count`, `fpm`, `lg10WF`, または `zipf` のような fields を持つ objects

## はじめに

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
```

<a id="README.ko.md"></a>
### 61. `README.ko.md`
- Size: 3285 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:18:10 | SHA1: 38c4a2606e20

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="README.md"></a>
### 62. `README.md`
- Size: 3209 bytes | LOC: 80 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-25 17:08:55 | SHA1: 9ea38158dc1a

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
---
layout: page
title: "🇺🇸 English"
permalink: /
lang: en
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

A web application to analyzes an English essay and visualizes each sentence.

## What it shows

- **X axis:** sentence word count
- **Y axis:** average word difficulty derived from a SUBTLEX-based frequency dictionary
- **Top histogram:** sentence word-count distribution
- **Right histogram:** sentence difficulty distribution
- **Sentence table:** per-sentence metrics including unknown-word counts

## Dictionary strategy

The app attempts to load the npm package `subtlex-word-frequencies` dynamically at runtime. A fallback mini dictionary is bundled so the UI still works during local development, tests, and cases where the package export shape differs from expectations.

`frontend/app/lib/analysis/subtlexLoader.ts` normalizes several common shapes:

- direct `{ word: score }` maps
- arrays of objects such as `{ word, zipf }`
- objects with fields like `frequency`, `count`, `fpm`, `lg10WF`, or `zipf`

## Getting started

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
```

<a id="README.pt-BR.md"></a>
### 63. `README.pt-BR.md`
- Size: 3332 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:18:19 | SHA1: 959c0c05867b

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="README.zh-CN.md"></a>
### 64. `README.zh-CN.md`
- Size: 3137 bytes | LOC: 79 | SLOC: 58 | TODOs: 0 | Modified: 2026-05-17 18:18:23 | SHA1: e7e42eb53826

#### Brief
---
layout: page

#### Auto Summary
[essay_subtrex_analysis](https://github.com/europanite/essay_subtrex_analysis "essay_subtrex_analysis")

#### Content (verbatim)

```markdown
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
```

<a id="script-reflowed.py"></a>
### 65. `script/reflowed.py`
- Size: 679 bytes | LOC: 25 | SLOC: 18 | TODOs: 0 | Modified: 2026-03-18 12:13:40 | SHA1: e56d8ecbce20 | Py: funcs=0                       classes=0                       complexity≈8

#### Brief
import re

#### Auto Summary
Python module with 0 functions and 0 classes.

#### Content

```python
import re

src = "problems_of_philosophy.txt"
dst = "problems_of_philosophy_reflowed.txt"

text = open(src, "r", encoding="utf-8").read()

# Remove Gutenberg header/footer
start = re.search(r"\*\*\* START OF THE PROJECT GUTENBERG EBOOK.*?\*\*\*", text, re.S)
if start:
    text = text[start.end():]

end = re.search(r"\*\*\* END OF THE PROJECT GUTENBERG EBOOK.*?\*\*\*", text, re.S)
if end:
    text = text[:end.start()]

paras = re.split(r"\n\s*\n", text)
paras = [
    " ".join(line.strip() for line in p.splitlines() if line.strip())
    for p in paras
]
text = "\n\n".join(p for p in paras if p.strip())

open(dst, "w", encoding="utf-8").write(text)
print(f"written: {dst}")
```

<a id="SECURITY.md"></a>
### 66. `SECURITY.md`
- Size: 1181 bytes | LOC: 38 | SLOC: 24 | TODOs: 0 | Modified: 2026-03-18 14:28:35 | SHA1: 6fdf65a372f3

#### Brief
# Security Policy

#### Auto Summary
Security Policy

#### Content (verbatim)

```markdown
# Security Policy

## Supported Versions

The following table shows which versions of `essay_subtrex_analysis` are currently being supported with security updates.

| Version | Supported          |
|---------|--------------------|
| main    | :white_check_mark: |

We only provide security updates and fixes for the latest code on the **main** branch.

---

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please help us keep the community safe by following these steps:

- Provide as much detail as possible:
   - A clear description of the vulnerability
   - Steps to reproduce the issue
   - The potential impact
   - Any suggested fixes or mitigations

---

## Security Best Practices for Users

- Always pull the latest image or rebuild the environment to ensure patched dependencies.
- Avoid exposing ports publicly unless necessary.
- Use strong passwords and secrets when connecting to external resources.
- Regularly update Python packages and system dependencies.

---

## Acknowledgements

We deeply appreciate the efforts of security researchers and contributors who help us improve the security of `essay_subtrex_analysis`.
```

[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • <b>한국어</b> • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • [简体中文](../zh-CN/CONTRIBUTING.md) • [繁體中文](../zh-TW/CONTRIBUTING.md)

# Roo Code Chinese SSY 기여 가이드

<<<<<<< HEAD
Cline Pro는 커뮤니티 주도의 프로젝트이며, 모든 기여를 소중하게 생각합니다. 모두를 위한 원활하고 효과적인 프로세스를 위해 **"[Issue-First](#2-핵심-원칙-issue-first-접근법)" 원칙**을 따릅니다. 즉, 모든 작업은 Pull Request를 제출하기 _전에_ 반드시 GitHub Issue와 연결되어야 합니다(자세한 내용은 [PR 정책](#pull-request-pr-정책) 참고). 이 가이드를 꼼꼼히 읽고 기여 방법을 이해해 주세요.
이 가이드는 Cline Pro에 버그 수정, 기능 추가, 문서 개선 등 다양한 방식으로 기여하는 방법을 안내합니다.

## 목차

- [I. 기여 전 준비](#i-기여-전-준비) - [1. 행동 강령](#1-행동-강령) - [2. 프로젝트 로드맵 이해](#2-프로젝트-로드맵-이해)
  <<<<<<< HEAD - [프로바이더 지원](#프로바이더-지원) - [모델 지원](#모델-지원) - [시스템 지원](#시스템-지원) - [문서화](#문서화) - [안정성](#안정성) - [국제화](#국제화) - [3. Roo Code Chinese SSY 커뮤니티 참여](#3-roo-vibecoding-커뮤니티-참여)
  ======= - [신뢰성 우선](#신뢰성-우선) - [향상된 사용자 경험](#향상된-사용자-경험) - [에이전트 성능 선도](#에이전트-성능-선도) - [3. Roo Code 커뮤니티 참여](#3-roo-vibecoding-커뮤니티-참여)
    > > > > > > > 7d755367411806184c611c092d30cd9f4e516ff3
- [II. 기여 내용 찾기 및 계획 세우기](#ii-기여-내용-찾기-및-계획-세우기)
    - [1. 기여 유형](#1-기여-유형)
    - [2. 핵심 원칙: Issue-First 접근법](#2-핵심-원칙-issue-first-접근법)
    - [3. 작업 선택하기](#3-작업-선택하기)
    - [4. 버그 및 이슈 신고](#4-버그-및-이슈-신고)
- [III. 개발 및 제출 프로세스](#iii-개발-및-제출-프로세스)
    - [1. 개발 환경 설정](#1-개발-환경-설정)
    - [2. 코드 작성 가이드라인](#2-코드-작성-가이드라인)
    - [3. 코드 제출: Pull Request (PR) 프로세스](#3-코드-제출-pull-request-pr-프로세스)
        - [드래프트 Pull Request](#드래프트-pull-request)
        - [Pull Request 설명](#pull-request-설명)
        - [Pull Request (PR) 정책](#pull-request-pr-정책)
            - [목표](#목표)
            - [Issue-First 접근법](#issue-first-접근법)
            - [오픈 PR 조건](#오픈-pr-조건)
            - [절차](#절차)
            - [책임](#책임)
- # [IV. 법적 안내](#iv-법적-안내) - [기여 동의서](#기여-동의서)
    Roo Code는 커뮤니티 주도의 프로젝트이며, 모든 기여를 소중하게 생각합니다. 협업을 간소화하기 위해 [Issue-First](#issue-first-접근법) 원칙을 적용하고 있으며, 이는 모든 [Pull Request (PR)](#pull-request-제출)가 먼저 GitHub Issue와 연결되어야 함을 의미합니다. 이 가이드를 주의 깊게 검토해 주세요.

## 목차

- [기여 전 준비](#기여-전-준비)
- [기여 내용 찾기 및 계획 세우기](#기여-내용-찾기-및-계획-세우기)
- [개발 및 제출 프로세스](#개발-및-제출-프로세스)
- [법적 안내](#법적-안내)
    > > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

## 기여 전 준비

### 1. 행동 강령

모든 기여자는 [행동 강령](./CODE_OF_CONDUCT.md)을 준수해야 합니다.

### 2. 프로젝트 로드맵

<<<<<<< HEAD
Cline Pro는 명확한 개발 로드맵을 가지고 있으며, 우리의 우선순위와 미래 방향을 제시합니다. 로드맵을 이해하면 다음과 같은 도움이 됩니다:
=======
로드맵은 프로젝트 방향을 안내합니다. 기여를 다음 핵심 목표에 맞추세요:

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 신뢰성 우선

- diff 편집과 명령 실행의 일관된 신뢰성 보장
- 정기적 사용을 방해하는 마찰점 감소
- 모든 언어 환경과 플랫폼에서의 원활한 작동 보장
- 다양한 AI 제공업체 및 모델에 대한 강력한 지원 확대

### 향상된 사용자 경험

- 명확성과 직관성을 위한 UI/UX 간소화
- 개발자들이 일상적으로 사용하는 도구에 기대하는 높은 기준을 충족하기 위한 지속적인 워크플로우 개선

### 에이전트 성능 선도

<<<<<<< HEAD

- 커스텀 시스템 프롬프트 및 워크플로우를 통한 로컬 모델 지원
- 벤치마킹, 평가, 테스트 케이스

#### 시스템 지원

Roo가 모든 컴퓨터에서 잘 동작하도록 하고 싶습니다:

- 크로스플랫폼 터미널 통합
- Mac, Windows, Linux에서 강력하고 일관된 지원

#### 문서화

모든 사용자와 기여자를 위한 포괄적이고 접근성 높은 문서를 지향합니다:

- 확장된 사용자 가이드 및 튜토리얼
- 명확한 API 문서
- 더 나은 기여자 가이드
- 다국어 문서 리소스
- 인터랙티브 예제 및 코드 샘플

#### 안정성

버그를 크게 줄이고 자동화된 테스트를 늘리고자 합니다:

- 디버그 로깅 스위치
- 버그/지원 요청용 "머신/작업 정보" 복사 버튼

#### 국제화

Roo가 모두의 언어를 사용할 수 있도록 하고 싶습니다:

- 我们希望 Roo Code Chinese SSY 说每个人的语言
- Queremos que Roo Code Chinese SSY hable el idioma de todos
- हम चाहते हैं कि Roo Code Chinese SSY हर किसी की भाषा बोले
- # نريد أن يتحدث Roo Code Chinese SSY لغة الجميع
- 실제 생산성을 측정하는 포괄적인 평가 기준(evals) 수립
- 누구나 이러한 평가를 쉽게 실행하고 해석할 수 있도록 지원
  <<<<<<< HEAD
- 평가 점수의 명확한 향상을 보여주는 Roo Code 개선 제공
    > > > > > > > # 7d755367411806184c611c092d30cd9f4e516ff3
- 평가 점수의 명확한 향상을 보여주는 개선 제공
    > > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

PR에서 이러한 영역과의 연관성을 언급하세요.

### 3. Roo Code Chinese SSY 커뮤니티 참여

<<<<<<< HEAD
Roo Code Chinese SSY 커뮤니티와 소통하는 것은 시작하기에 좋은 방법입니다:

- **주요 방법**:
    1.  [Roo Code Chinese SSY Discord 커뮤니티](https://discord.gg/roocode)에 가입하세요.
    2.  가입 후 **Hannes Rudolph**(Discord: `hrudolph`)에게 DM을 보내 관심을 알리고 안내를 받으세요.
- # **경험자용 대안**: Issue-First 접근법에 익숙하다면 [Kanban 보드](https://github.com/orgs/RooVetGit/projects/1)를 따라가며 GitHub에서 Issue 및 Pull Request로 직접 참여할 수 있습니다.
- **주요 방법:** [Discord](https://discord.gg/roocode)에 가입하고 **Hannes Rudolph (`hrudolph`)**에게 DM을 보내세요.
- **대안:** 경험 많은 기여자는 [GitHub Projects](https://github.com/orgs/RooCodeInc/projects/1)를 통해 직접 참여할 수 있습니다.

## 기여 내용 찾기 및 계획 세우기

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 기여 유형

- **버그 수정:** 코드 문제 해결.
- **새 기능:** 기능 추가.
- **문서화:** 가이드 개선 및 명확성 향상.

### Issue-First 접근법

모든 기여는 GitHub Issue에서 시작해야 합니다.

- **기존 Issue 확인:** [GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues)를 검색하세요.
- **Issue 생성:** 적절한 템플릿 사용:
    - **버그:** "Bug Report" 템플릿.
    - **기능:** "Detailed Feature Proposal" 템플릿. 시작 전 승인 필요.
- **Issue 담당:** 댓글을 달고 공식 할당을 기다리세요.

**승인된 Issue 없는 PR은 닫힐 수 있습니다.**

### 작업 선택하기

- 할당되지 않은 "Good First Issues"를 [GitHub 프로젝트](https://github.com/orgs/RooCodeInc/projects/1)에서 확인하세요.
- 문서 관련은 [Roo Code Docs](https://github.com/RooCodeInc/Roo-Code-Docs)를 참조하세요.

### 버그 신고

- 먼저 기존 신고를 확인하세요.
- ["Bug Report" 템플릿](https://github.com/RooCodeInc/Roo-Code/issues/new/choose)을 사용하여 새 버그를 신고하세요.
- **보안 문제:** [security advisories](https://github.com/RooCodeInc/Roo-Code/security/advisories/new)를 통해 비공개로 신고하세요.

<<<<<<< HEAD

- **Good First Issues**: GitHub의 [Issue [Unassigned] 섹션](https://github.com/orgs/RooVetGit/projects/1) 참고
- **문서화**: 이 `CONTRIBUTING.md`는 코드 기여의 주요 가이드지만, 다른 문서(사용자 가이드, API 문서 등)에 기여하고 싶다면 [Roo Code Chinese SSY Docs 저장소](https://github.com/RooVetGit/Roo-Code-Docs)를 참고하거나 Discord 커뮤니티에 문의하세요.
- # **새 기능 제안**: 1. **초기 아이디어/논의**: 큰 틀의 아이디어나 초기 제안은 [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests)에서 시작하세요. 2. **공식 제안**: 구체적이고 실행 가능한 제안은 [Issues 페이지](https://github.com/RooVetGit/Roo-Code/issues/new/choose)에서 "Detailed Feature Proposal" 템플릿으로 Issue를 만드세요. 이는 **Issue-First 접근법**의 핵심입니다.

## 개발 및 제출 프로세스

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 개발 환경 설정

1. **Fork & Clone:**

<<<<<<< HEAD

1.  **기존 Issue 검색**: [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues)에서 중복 여부 확인
2.  **새 Issue 생성**: 고유하다면 [Issues 페이지](https://github.com/RooVetGit/Roo-Code/issues/new/choose)에서 "Bug Report" 템플릿 사용

> 🔐 **보안 취약점**: 보안 취약점을 발견하면 [GitHub Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new)로 비공개 신고하세요. 공개 Issue는 만들지 마세요.

## III. 개발 및 제출 프로세스

아래 단계에 따라 코딩하고 제출하세요.

### 1. 개발 환경 설정

1.  **Fork & Clone**:
    - GitHub에서 저장소를 포크하세요.
    - 포크한 저장소를 로컬에 클론: `git clone https://github.com/당신의_아이디/Roo-Code.git`
2.  **의존성 설치**: `npm run install:all`
3.  **Webview(개발 모드) 실행**: `npm run dev` (Vite/React 앱의 HMR용)
4.  **확장 디버깅**: VS Code에서 `F5`(또는 **Run** → **Start Debugging**)를 눌러 Cline Pro가 로드된 Extension Development Host 창을 엽니다.

webview(`webview-ui`) 변경은 Hot Module Replacement로 즉시 반영됩니다. 코어 확장(`src`) 변경은 Extension Development Host 재시작 필요.

또는 `.vsix` 패키지 빌드 및 설치:

```sh
npm run build
code --install-extension bin/roo-vibecoding-<version>.vsix
=======
```

git clone https://github.com/당신의_아이디/Roo-Code.git

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

```

2. **의존성 설치:**

```

npm run install:all

```

3. **디버깅:** VS Code에서 `F5`를 눌러 실행하세요.

### 코드 작성 가이드라인

- 하나의 기능 또는 수정당 하나의 집중된 PR.
- ESLint와 TypeScript 모범 사례를 따르세요.
- Issue를 참조하는 명확한 커밋 메시지를 작성하세요(예: `Fixes #123`).
- 철저한 테스트를 제공하세요(`npm test`).
- 제출 전 최신 `main` 브랜치에 리베이스하세요.

### Pull Request 제출

- 초기 피드백을 원한다면 **드래프트 PR**로 시작하세요.
- Pull Request 템플릿에 따라 변경 사항을 명확히 설명하세요.
- UI 변경에 대한 스크린샷/동영상을 제공하세요.
- 문서 업데이트가 필요한지 표시하세요.

### Pull Request 정책

- 사전 승인 및 할당된 Issue를 참조해야 합니다.
- 정책을 준수하지 않는 PR은 닫힐 수 있습니다.
- PR은 CI 테스트를 통과하고, 로드맵에 부합하며, 명확한 문서를 갖추어야 합니다.

### 리뷰 프로세스

- **일일 분류:** 메인테이너의 빠른 검토.
- **주간 심층 리뷰:** 종합적인 평가.
- **피드백에 따라 신속히 반복**하세요.

## 법적 안내

기여함으로써, 귀하의 기여가 Roo Code의 라이선스와 일치하는 Apache 2.0 라이선스 하에 제공됨에 동의합니다.
```

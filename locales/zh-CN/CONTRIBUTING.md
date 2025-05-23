[English](../../CONTRIBUTING.md) • [Català](../ca/CONTRIBUTING.md) • [Deutsch](../de/CONTRIBUTING.md) • [Español](../es/CONTRIBUTING.md) • [Français](../fr/CONTRIBUTING.md) • [हिंदी](../hi/CONTRIBUTING.md) • [Italiano](../it/CONTRIBUTING.md) • [Nederlands](../nl/CONTRIBUTING.md) • [Русский](../ru/CONTRIBUTING.md)

[日本語](../ja/CONTRIBUTING.md) • [한국어](../ko/CONTRIBUTING.md) • [Polski](../pl/CONTRIBUTING.md) • [Português (BR)](../pt-BR/CONTRIBUTING.md) • [Türkçe](../tr/CONTRIBUTING.md) • [Tiếng Việt](../vi/CONTRIBUTING.md) • <b>简体中文</b> • [繁體中文](../zh-TW/CONTRIBUTING.md)

# 参与 Roo Code Chinese SSY 贡献

<<<<<<< HEAD
Roo Code Chinese SSY 是一个由社区驱动的项目，我们非常重视每一位贡献者。为了让每个人的贡献流程顺畅高效，**我们采用“[Issue-First](#2-关键原则-issue-first-方式)”原则。** 这意味着所有工作都必须在提交 Pull Request _之前_ 关联到一个 GitHub Issue（详情见[PR 政策](#pull-request-pr-政策)）。请认真阅读本指南，了解如何参与贡献。
本指南介绍了如何为 Roo Code Chinese SSY 做出贡献，无论是修复 bug、添加新功能还是完善文档。

## 目录

- [I. 贡献前须知](#i-贡献前须知) - [1. 行为准则](#1-行为准则) - [2. 了解项目路线图](#2-了解项目路线图)
  <<<<<<< HEAD - [Provider 支持](#provider-支持) - [模型支持](#模型支持) - [系统支持](#系统支持) - [文档](#文档) - [稳定性](#稳定性) - [国际化](#国际化) - [3. 加入 Roo Code Chinese SSY 社区](#3-加入-roo-vibecoding-社区)
  ======= - [可靠性优先](#可靠性优先) - [增强用户体验](#增强用户体验) - [引领代理性能](#引领代理性能) - [3. 加入 Roo Code 社区](#3-加入-roo-vibecoding-社区)
    > > > > > > > 7d755367411806184c611c092d30cd9f4e516ff3
- [II. 寻找与规划你的贡献](#ii-寻找与规划你的贡献)
    - [1. 贡献类型](#1-贡献类型)
    - [2. 关键原则：Issue-First 方式](#2-关键原则-issue-first-方式)
    - [3. 决定要做什么](#3-决定要做什么)
    - [4. 报告 bug 或问题](#4-报告-bug-或问题)
- [III. 开发与提交流程](#iii-开发与提交流程)
    - [1. 开发环境配置](#1-开发环境配置)
    - [2. 编码规范](#2-编码规范)
    - [3. 提交代码：Pull Request (PR) 流程](#3-提交代码-pull-request-pr-流程)
        - [草稿 Pull Request](#草稿-pull-request)
        - [Pull Request 描述](#pull-request-描述)
        - [Pull Request (PR) 政策](#pull-request-pr-政策)
            - [目标](#目标)
            - [Issue-First 方式](#issue-first-方式)
            - [开放 PR 条件](#开放-pr-条件)
            - [流程](#流程)
            - [责任分工](#责任分工)
- # [IV. 法律声明](#iv-法律声明) - [贡献协议](#贡献协议)
    Roo Code 是一个由社区驱动的项目，我们高度重视每一份贡献。为了简化协作流程，我们采用 [Issue-First](#issue-first-方式) 原则，这意味着所有 [Pull Request (PR)](#提交-pull-request) 必须首先关联到 GitHub Issue。请仔细阅读本指南。

## 目录

- [贡献前须知](#贡献前须知)
- [寻找与规划你的贡献](#寻找与规划你的贡献)
- [开发与提交流程](#开发与提交流程)
- [法律声明](#法律声明)
    > > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

## 贡献前须知

### 1. 行为准则

所有贡献者必须遵守我们的[行为准则](./CODE_OF_CONDUCT.md)。

### 2. 项目路线图

<<<<<<< HEAD
Roo Code Chinese SSY 有清晰的发展路线图，指引我们的优先级和未来方向。了解路线图有助于你：
=======
我们的路线图指引项目方向。请将你的贡献与这些关键目标保持一致：

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 可靠性优先

- 确保差异编辑和命令执行始终可靠
- 减少阻碍常规使用的摩擦点
- 确保在所有语言环境和平台上流畅运行
- 扩展对各种 AI 提供商和模型的强大支持

### 增强用户体验

- 简化用户界面，提高清晰度和直观性
- 持续改进工作流程，满足开发者对日常工具的高期望

### 引领代理性能

<<<<<<< HEAD
<<<<<<< HEAD

- 通过自定义系统提示词和工作流支持本地模型
- Benchmark 测试与用例

#### 系统支持

我们希望 Roo 能在所有电脑上流畅运行：

- 跨平台终端集成
- 强大且一致地支持 Mac、Windows、Linux

#### 文档

我们希望为所有用户和贡献者提供全面、易用的文档：

- 扩展用户指南和教程
- 清晰的 API 文档
- 更好的贡献者指引
- 多语言文档资源
- 交互式示例和代码片段

#### 稳定性

我们希望大幅减少 bug 数量并提升自动化测试覆盖：

- 调试日志开关
- “机器/任务信息”一键复制按钮，便于 bug/支持请求

#### 国际化

我们希望 Roo Code Chinese SSY 说每个人的语言：

- 我们希望 Roo Code Chinese SSY 说每个人的语言
- Queremos que Roo Code Chinese SSY hable el idioma de todos
- हम चाहते हैं कि Roo Code Chinese SSY हर किसी की भाषा बोले
- # نريد أن يتحدث Roo Code Chinese SSY لغة الجميع
- 建立全面的评估基准（evals）来衡量实际工作中的生产力
- 让每个人都能轻松运行和解读这些评估
- 提供 Roo Code 改进，展示明确的评分提升
    > > > > > > > # 7d755367411806184c611c092d30cd9f4e516ff3
- 建立全面的评估基准（evals）衡量实际工作中的生产力
- 让每个人都能轻松运行和解读这些评估
- 提供明显提升评分的改进
    > > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

在 PR 中请提及与这些领域的关联。

### 3. 加入 Roo Code Chinese SSY 社区

<<<<<<< HEAD
加入 Roo Code Chinese SSY 社区是一个很好的起点：

- **主要方式**：
    1.  加入 [Roo Code Chinese SSY Discord 社区](https://discord.gg/roocode)。
    2.  加入后，私信 **Hannes Rudolph**（Discord: `hrudolph`），表达你的兴趣并获取指导。
- # **有经验的贡献者可选**：如果你熟悉 Issue-First 方式，可以直接通过 GitHub 跟进 [看板](https://github.com/orgs/RooVetGit/projects/1)，通过 issue 和 pull request 沟通。
- **主要方式：** 加入我们的 [Discord](https://discord.gg/roocode) 并私信 **Hannes Rudolph (`hrudolph`)**。
- **替代方式：** 有经验的贡献者可通过 [GitHub Projects](https://github.com/orgs/RooCodeInc/projects/1) 直接参与。

## 寻找与规划你的贡献

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 贡献类型

- **Bug 修复：** 解决代码问题。
- **新功能：** 添加新功能。
- **文档：** 完善指南和提高清晰度。

### Issue-First 方式

所有贡献必须从 GitHub Issue 开始。

- **检查现有 issue：** 搜索 [GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues)。
- **创建 issue：** 使用适当模板：
    - **Bug：** "Bug Report" 模板。
    - **功能：** "Detailed Feature Proposal" 模板。开始前需获得批准。
- **认领 issue：** 评论并等待正式分配。

**未关联已批准 issue 的 PR 可能会被关闭。**

### 决定要做什么

- 查看 [GitHub 项目](https://github.com/orgs/RooCodeInc/projects/1) 中未分配的 "Good First Issues"。
- 文档相关，请访问 [Roo Code Docs](https://github.com/RooCodeInc/Roo-Code-Docs)。

### 报告 Bug

- 先检查是否已有相关报告。
- 使用 ["Bug Report" 模板](https://github.com/RooCodeInc/Roo-Code/issues/new/choose) 创建新 bug 报告。
- **安全问题：** 通过 [security advisories](https://github.com/RooCodeInc/Roo-Code/security/advisories/new) 私下报告。

<<<<<<< HEAD

- **Good First Issues**：查看 GitHub [Roo Code Chinese SSY Issues 项目](https://github.com/orgs/RooVetGit/projects/1) 的“未分配 Issue”部分。
- **文档**：虽然本 `CONTRIBUTING.md` 是代码贡献主指南，但如想参与其他文档（如用户指南、API 文档），请查阅 [Roo Code Chinese SSY Docs 仓库](https://github.com/RooVetGit/Roo-Code-Docs) 或在 Discord 社区咨询。
- # **提出新功能**：1. **初步想法/讨论**：广泛或初步想法可在 [GitHub Discussions](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests) 讨论。2. **正式提案**：具体、可执行的建议请用 [issues 页面](https://github.com/RooVetGit/Roo-Code/issues/new/choose) 的“Detailed Feature Proposal”模板新建 issue。这是 **Issue-First 方式** 的关键环节。

## 开发与提交流程

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

### 开发环境配置

1. **Fork & Clone：**

<<<<<<< HEAD

1.  **查找已有 issue**：在 [GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) 检查是否已有人报告。
2.  **新建 issue**：如无重复，请用 [issues 页面](https://github.com/RooVetGit/Roo-Code/issues/new/choose) 的“Bug Report”模板新建。

> 🔐 **安全漏洞**：如发现安全漏洞，请通过 [GitHub Security Advisory Tool](https://github.com/RooVetGit/Roo-Code/security/advisories/new) 私下报告。请勿公开 issue。

## III. 开发与提交流程

按以下步骤进行开发和提交。

### 1. 开发环境配置

1.  **Fork & Clone**：
    - 在 GitHub 上 fork 本仓库
    - 本地克隆你的 fork：`git clone https://github.com/你的用户名/Roo-Code.git`
2.  **安装依赖**：`npm run install:all`
3.  **运行 Webview（开发模式）**：`npm run dev`（适用于 Vite/React 应用，支持 HMR）
4.  **调试扩展**：在 VS Code 按 `F5`（或 **Run** → **Start Debugging**），打开 Roo Code Chinese SSY 的 Extension Development Host 窗口

webview（`webview-ui`）的更改会通过热更新（HMR）即时生效。核心扩展（`src`）的更改需重启 Extension Development Host。

也可以构建并安装 `.vsix` 包：

```sh
npm run build
code --install-extension bin/roo-vibecoding-<版本号>.vsix
=======
```

git clone https://github.com/你的用户名/Roo-Code.git

> > > > > > > d7eec3afa6acde24d3000fde5e5f4f005fad757c

```

2. **安装依赖：**

```

npm run install:all

```

3. **调试：** 在 VS Code 中按 `F5` 打开。

### 编码规范

- 每个 PR 专注于一个功能或修复。
- 遵循 ESLint 和 TypeScript 最佳实践。
- 编写清晰的提交信息，引用相关 issue（如 `Fixes #123`）。
- 提供完整测试（`npm test`）。
- 提交前先在最新 `main` 分支上进行 rebase。

### 提交 Pull Request

- 如需早期反馈，可先提交**草稿 PR**。
- 清晰描述你的更改，遵循 Pull Request 模板。
- 为 UI 变更提供截图/视频。
- 说明是否需要更新文档。

### Pull Request 政策

- 必须引用已批准并分配的 issue。
- 不遵守政策的 PR 可能会被关闭。
- PR 应通过 CI 测试，符合路线图，并有清晰文档。

### 审查流程

- **每日筛查：** 维护者快速检查。
- **每周深入审查：** 全面评估。
- **根据反馈快速迭代**。

## 法律声明

提交贡献即表示你同意你的贡献将基于 Apache 2.0 许可证，与 Roo Code 的许可一致。
```

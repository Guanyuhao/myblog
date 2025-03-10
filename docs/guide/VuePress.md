# VuePress 全面指南

VuePress 是一个简洁高效的静态站点生成器，尤其适合技术文档和个人博客。本指南将帮助您掌握 VuePress 的各项功能，从基础设置到高级定制。

## 目录

- [快速开始](#快速开始)
- [基础配置](#基础配置)
- [内容创作](#内容创作)
- [主题定制](#主题定制)
- [部署与优化](#部署与优化)
- [插件系统](#插件系统)
- [常见问题](#常见问题)

## 快速开始

### 环境准备

确保已安装 Node.js (v12.0.0 以上版本)：

```bash
# 检查 Node.js 版本
node -v
```

### 创建项目

```bash
# 创建并进入项目目录
mkdir my-vuepress-site && cd my-vuepress-site

# 初始化项目
npm init -y

# 安装 VuePress
npm install -D vuepress@next

# 创建文档目录
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

### 添加脚本命令

在 `package.json` 中添加：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 启动开发服务器

```bash
npm run docs:dev
```

## 基础配置

### 配置文件

创建 `.vuepress/config.js` 文件：

```js
module.exports = {
  // 站点配置
  title: '我的个人博客',
  description: '基于VuePress的技术博客',
  
  // 主题配置
  themeConfig: {
    logo: '/images/logo.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: 'auto'
  }
}
```

### 目录结构

推荐的项目结构：

```
docs/
├── .vuepress/           # VuePress配置目录
│   ├── public/          # 静态资源目录
│   │   └── images/      # 图片等资源
│   ├── components/      # 自定义Vue组件
│   ├── styles/          # 自定义样式
│   └── config.js        # 配置文件
├── blog/                # 博客文章目录
│   ├── article1.md      # 文章1
│   └── article2.md      # 文章2
├── about/               # 关于页面
│   └── README.md        # 自我介绍
└── README.md            # 首页
```

## 内容创作

### Markdown 增强

VuePress 支持所有标准 Markdown 语法，并有额外增强：

```markdown
---
title: 文章标题
date: 2023-05-20
tags:
  - JavaScript
  - Vue
author: 作者名
---

# 文章标题

[[toc]]

## 二级标题

::: tip 提示
这是一个提示框
:::

::: warning 警告
这是一个警告框
:::

::: danger 危险
这是一个危险警告框
:::

::: details 点击查看详情
这是详情内容
:::

```

### 在 Markdown 中使用 Vue

直接在 Markdown 文件中使用 Vue 组件：

```markdown
<ClientOnly>
  <CommentBox />
</ClientOnly>

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>
```

### 资源引用

引用静态资源的方式：

```markdown
![图片描述](/images/photo.jpg)

[下载PDF](/assets/document.pdf)
```

## 主题定制

### 使用调色板

创建 `.vuepress/styles/palette.styl` 文件：

```stylus
// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34

// 布局
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
```

### 添加额外样式

创建 `.vuepress/styles/index.styl` 文件：

```stylus
// 全局样式覆盖
.theme-container {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

// 暗色模式适配
@media (prefers-color-scheme: dark) {
  :root {
    --c-bg: #1e1e1e;
    --c-text: #f0f0f0;
  }
}
```

### 自定义布局

创建 `.vuepress/components/CustomLayout.vue` 文件：

```vue
<template>
  <div class="custom-layout">
    <header>自定义头部</header>
    <Content />
    <footer>自定义底部</footer>
  </div>
</template>

<style lang="stylus">
.custom-layout
  max-width 960px
  margin 0 auto
  padding 2rem 1.5rem
</style>
```

## 部署与优化

### 自动部署

使用 GitHub Actions 实现自动部署：

```yaml
name: 部署VuePress网站

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: 安装Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          
      - name: 安装依赖
        run: npm ci
        
      - name: 构建
        run: npm run docs:build
        
      - name: 部署
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: docs/.vuepress/dist
          branch: gh-pages
```

### 性能优化

提高网站性能的关键技巧：

1. **图片优化**：使用WebP格式，合理设置尺寸
2. **延迟加载**：对非关键资源使用懒加载
3. **代码分割**：VuePress自动实现路由级代码分割
4. **缓存控制**：合理设置资源缓存策略
5. **启用PWA**：通过插件支持离线访问

## 插件系统

### 安装和使用插件

```bash
# 安装插件
npm install -D vuepress-plugin-sitemap @vuepress/plugin-pwa

# 在配置中使用
module.exports = {
  plugins: [
    ['sitemap', { hostname: 'https://your-domain.com' }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ]
}
```

### 推荐插件

- **@vuepress/plugin-search**: 提供搜索功能
- **@vuepress/plugin-blog**: 博客功能支持
- **vuepress-plugin-auto-sidebar**: 自动生成侧边栏
- **vuepress-plugin-feed**: 生成RSS订阅源
- **vuepress-plugin-medium-zoom**: 图片缩放功能

## 常见问题

### 图片路径问题

确保图片放在 `.vuepress/public` 目录下，然后在Markdown中使用绝对路径引用：

```markdown
![图片](/images/photo.jpg)
```

### 部署后样式丢失

检查 `config.js` 中的 `base` 配置是否正确：

```js
module.exports = {
  base: '/your-repo-name/',  // 如果部署到GitHub Pages项目站点
  // 或
  base: '/',  // 如果部署到自定义域名或用户站点
}
```

### 移动端适配

VuePress默认支持响应式设计，但可以通过自定义样式进一步优化：

```stylus
// .vuepress/styles/index.styl
@media (max-width: 419px) {
  .theme-container {
    .navbar {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .sidebar {
      width: 100%;
    }
  }
}
```

---

欢迎参考此指南开始您的VuePress之旅。如有问题，可以查阅[官方文档](https://vuepress.vuejs.org/)或提交Issues。

# guanyuhao 的个人博客

这是一个基于VuePress构建的个人博客项目，使用GitHub Actions实现自动构建和部署，托管在GitHub Pages上。

## 项目概览

- **框架**: [VuePress](https://vuepress.vuejs.org/)
- **CI/CD**: GitHub Actions自动化部署
- **托管**: GitHub Pages (https://guanyuhao.github.io)
- **源码仓库**: [guanyuhao/myblog](https://github.com/guanyuhao/myblog)

## 技术特性

- 📝 Markdown驱动的内容创作
- 🚀 自动化构建和部署流程
- 🔍 SEO优化和站点地图生成
- 📱 响应式设计，适配各种设备
- ⚡ 高性能静态站点

## 自动部署流程

本项目使用GitHub Actions实现自动化部署：

1. 当推送到`main`分支时自动触发构建
2. 构建生成的静态文件部署到`guanyuhao.github.io`仓库
3. 访问https://guanyuhao.github.io即可查看最新内容


## 内容创作

1. 在`docs/blog/`目录下创建Markdown文件
2. 文件命名格式推荐：`YYYY-MM-DD-title.md`
3. 添加YAML frontmatter配置文章元数据:

```markdown
---
title: 文章标题
date: 2023-01-01
tags:
标签1
标签2
categories:
分类
author: guanyuhao
---
文章内容...
```
## 环境变量配置

- `DEPLOY_TOKEN`: GitHub个人访问令牌(用于部署)

## 贡献指南

欢迎提交Issue或Pull Request来改进这个项目。

## 许可

[MIT License](LICENSE)

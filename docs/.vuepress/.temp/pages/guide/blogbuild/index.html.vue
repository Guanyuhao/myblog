<template><div><h1 id="vuepress-全面指南" tabindex="-1"><a class="header-anchor" href="#vuepress-全面指南"><span>VuePress 全面指南</span></a></h1>
<p>VuePress 是一个简洁高效的静态站点生成器，尤其适合技术文档和个人博客。本指南将帮助您掌握 VuePress 的各项功能，从基础设置到高级定制。</p>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B">快速开始</a></li>
<li><a href="#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE">基础配置</a></li>
<li><a href="#%E5%86%85%E5%AE%B9%E5%88%9B%E4%BD%9C">内容创作</a></li>
<li><a href="#%E4%B8%BB%E9%A2%98%E5%AE%9A%E5%88%B6">主题定制</a></li>
<li><a href="#%E9%83%A8%E7%BD%B2%E4%B8%8E%E4%BC%98%E5%8C%96">部署与优化</a></li>
<li><a href="#%E6%8F%92%E4%BB%B6%E7%B3%BB%E7%BB%9F">插件系统</a></li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a></li>
</ul>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h3>
<p>确保已安装 Node.js (v12.0.0 以上版本)：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 检查 Node.js 版本</span></span>
<span class="line"><span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 创建并进入项目目录</span></span>
<span class="line"><span class="token function">mkdir</span> my-vuepress-site <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> my-vuepress-site</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化项目</span></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 VuePress</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建文档目录</span></span>
<span class="line"><span class="token function">mkdir</span> docs</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> docs/README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加脚本命令" tabindex="-1"><a class="header-anchor" href="#添加脚本命令"><span>添加脚本命令</span></a></h3>
<p>在 <code v-pre>package.json</code> 中添加：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动开发服务器" tabindex="-1"><a class="header-anchor" href="#启动开发服务器"><span>启动开发服务器</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2>
<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3>
<p>创建 <code v-pre>.vuepress/config.js</code> 文件：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 站点配置</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'我的个人博客'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'基于VuePress的技术博客'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 主题配置</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'/images/logo.png'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'博客'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/blog/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'关于'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/about/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token string">'auto'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h3>
<p>推荐的项目结构：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">docs/</span>
<span class="line">├── .vuepress/           # VuePress配置目录</span>
<span class="line">│   ├── public/          # 静态资源目录</span>
<span class="line">│   │   └── images/      # 图片等资源</span>
<span class="line">│   ├── components/      # 自定义Vue组件</span>
<span class="line">│   ├── styles/          # 自定义样式</span>
<span class="line">│   └── config.js        # 配置文件</span>
<span class="line">├── blog/                # 博客文章目录</span>
<span class="line">│   ├── article1.md      # 文章1</span>
<span class="line">│   └── article2.md      # 文章2</span>
<span class="line">├── about/               # 关于页面</span>
<span class="line">│   └── README.md        # 自我介绍</span>
<span class="line">└── README.md            # 首页</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内容创作" tabindex="-1"><a class="header-anchor" href="#内容创作"><span>内容创作</span></a></h2>
<h3 id="markdown-增强" tabindex="-1"><a class="header-anchor" href="#markdown-增强"><span>Markdown 增强</span></a></h3>
<p>VuePress 支持所有标准 Markdown 语法，并有额外增强：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 文章标题</span>
<span class="line"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2023-05-20</span></span>
<span class="line"><span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> JavaScript</span>
<span class="line">  <span class="token punctuation">-</span> Vue</span>
<span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span> 作者名</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">#</span> 文章标题</span></span>
<span class="line"></span>
<span class="line">[[toc]]</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 二级标题</span></span>
<span class="line"></span>
<span class="line">::: tip 提示</span>
<span class="line">这是一个提示框</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning 警告</span>
<span class="line">这是一个警告框</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger 危险</span>
<span class="line">这是一个危险警告框</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details 点击查看详情</span>
<span class="line">这是详情内容</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-markdown-中使用-vue" tabindex="-1"><a class="header-anchor" href="#在-markdown-中使用-vue"><span>在 Markdown 中使用 Vue</span></a></h3>
<p>直接在 Markdown 文件中使用 Vue 组件：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CommentBox</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">{{ 1 + 1 }}</span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ i }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源引用" tabindex="-1"><a class="header-anchor" href="#资源引用"><span>资源引用</span></a></h3>
<p>引用静态资源的方式：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">/images/photo.jpg</span>)</span></span>
<span class="line"></span>
<span class="line"><span class="token url">[<span class="token content">下载PDF</span>](<span class="token url">/assets/document.pdf</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题定制" tabindex="-1"><a class="header-anchor" href="#主题定制"><span>主题定制</span></a></h2>
<h3 id="使用调色板" tabindex="-1"><a class="header-anchor" href="#使用调色板"><span>使用调色板</span></a></h3>
<p>创建 <code v-pre>.vuepress/styles/palette.styl</code> 文件：</p>
<div class="language-stylus line-numbers-mode" data-highlighter="prismjs" data-ext="styl"><pre v-pre><code><span class="line"><span class="token comment">// 颜色</span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$accentColor</span> <span class="token operator">=</span> <span class="token hexcode">#3eaf7c</span></span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$textColor</span> <span class="token operator">=</span> <span class="token hexcode">#2c3e50</span></span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$borderColor</span> <span class="token operator">=</span> <span class="token hexcode">#eaecef</span></span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$codeBgColor</span> <span class="token operator">=</span> <span class="token hexcode">#282c34</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 布局</span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$navbarHeight</span> <span class="token operator">=</span> <span class="token number">3.6</span><span class="token unit">rem</span></span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$sidebarWidth</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token unit">rem</span></span></span>
<span class="line"><span class="token variable-declaration"><span class="token variable">$contentWidth</span> <span class="token operator">=</span> <span class="token number">740</span><span class="token unit">px</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加额外样式" tabindex="-1"><a class="header-anchor" href="#添加额外样式"><span>添加额外样式</span></a></h3>
<p>创建 <code v-pre>.vuepress/styles/index.styl</code> 文件：</p>
<div class="language-stylus line-numbers-mode" data-highlighter="prismjs" data-ext="styl"><pre v-pre><code><span class="line"><span class="token selector"><span class="token comment">// 全局样式覆盖</span></span>
<span class="line">.theme-container <span class="token punctuation">{</span></span></span>
<span class="line">  <span class="token property-declaration"><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Source Sans Pro"</span><span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">"Segoe UI"</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span> Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">"Fira Sans"</span><span class="token punctuation">,</span> <span class="token string">"Droid Sans"</span><span class="token punctuation">,</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暗色模式适配</span></span>
<span class="line"><span class="token atrule-declaration"><span class="token atrule">@media</span> <span class="token punctuation">(</span>prefers-color-scheme<span class="token punctuation">:</span> dark<span class="token punctuation">)</span> <span class="token punctuation">{</span></span></span>
<span class="line">  <span class="token selector">:root <span class="token punctuation">{</span></span></span>
<span class="line">    <span class="token property-declaration"><span class="token property">--c-bg</span><span class="token punctuation">:</span> <span class="token hexcode">#1e1e1e</span><span class="token punctuation">;</span></span></span>
<span class="line">    <span class="token property-declaration"><span class="token property">--c-text</span><span class="token punctuation">:</span> <span class="token hexcode">#f0f0f0</span><span class="token punctuation">;</span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义布局" tabindex="-1"><a class="header-anchor" href="#自定义布局"><span>自定义布局</span></a></h3>
<p>创建 <code v-pre>.vuepress/components/CustomLayout.vue</code> 文件：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>自定义头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>自定义底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">.custom-layout</span>
<span class="line">  max-width 960px</span>
<span class="line">  margin 0 auto</span>
<span class="line">  padding 2rem 1.5rem</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署与优化" tabindex="-1"><a class="header-anchor" href="#部署与优化"><span>部署与优化</span></a></h2>
<h3 id="自动部署" tabindex="-1"><a class="header-anchor" href="#自动部署"><span>自动部署</span></a></h3>
<p>使用 GitHub Actions 实现自动部署：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署VuePress网站</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line">          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h3>
<p>提高网站性能的关键技巧：</p>
<ol>
<li><strong>图片优化</strong>：使用WebP格式，合理设置尺寸</li>
<li><strong>延迟加载</strong>：对非关键资源使用懒加载</li>
<li><strong>代码分割</strong>：VuePress自动实现路由级代码分割</li>
<li><strong>缓存控制</strong>：合理设置资源缓存策略</li>
<li><strong>启用PWA</strong>：通过插件支持离线访问</li>
</ol>
<h2 id="插件系统" tabindex="-1"><a class="header-anchor" href="#插件系统"><span>插件系统</span></a></h2>
<h3 id="安装和使用插件" tabindex="-1"><a class="header-anchor" href="#安装和使用插件"><span>安装和使用插件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装插件</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress-plugin-sitemap @vuepress/plugin-pwa</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在配置中使用</span></span>
<span class="line">module.exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins: <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'sitemap'</span>, <span class="token punctuation">{</span> hostname: <span class="token string">'https://your-domain.com'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'@vuepress/pwa'</span>, <span class="token punctuation">{</span></span>
<span class="line">      serviceWorker: true,</span>
<span class="line">      updatePopup: <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推荐插件" tabindex="-1"><a class="header-anchor" href="#推荐插件"><span>推荐插件</span></a></h3>
<ul>
<li><strong>@vuepress/plugin-search</strong>: 提供搜索功能</li>
<li><strong>@vuepress/plugin-blog</strong>: 博客功能支持</li>
<li><strong>vuepress-plugin-auto-sidebar</strong>: 自动生成侧边栏</li>
<li><strong>vuepress-plugin-feed</strong>: 生成RSS订阅源</li>
<li><strong>vuepress-plugin-medium-zoom</strong>: 图片缩放功能</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="图片路径问题" tabindex="-1"><a class="header-anchor" href="#图片路径问题"><span>图片路径问题</span></a></h3>
<p>确保图片放在 <code v-pre>.vuepress/public</code> 目录下，然后在Markdown中使用绝对路径引用：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">图片</span>](<span class="token url">/images/photo.jpg</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="部署后样式丢失" tabindex="-1"><a class="header-anchor" href="#部署后样式丢失"><span>部署后样式丢失</span></a></h3>
<p>检查 <code v-pre>config.js</code> 中的 <code v-pre>base</code> 配置是否正确：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/your-repo-name/'</span><span class="token punctuation">,</span>  <span class="token comment">// 如果部署到GitHub Pages项目站点</span></span>
<span class="line">  <span class="token comment">// 或</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>  <span class="token comment">// 如果部署到自定义域名或用户站点</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配"><span>移动端适配</span></a></h3>
<p>VuePress默认支持响应式设计，但可以通过自定义样式进一步优化：</p>
<div class="language-stylus line-numbers-mode" data-highlighter="prismjs" data-ext="styl"><pre v-pre><code><span class="line"><span class="token comment">// .vuepress/styles/index.styl</span></span>
<span class="line"><span class="token atrule-declaration"><span class="token atrule">@media</span> <span class="token punctuation">(</span>max-width<span class="token punctuation">:</span> <span class="token number">419</span><span class="token unit">px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span></span>
<span class="line">  <span class="token selector">.theme-container <span class="token punctuation">{</span></span></span>
<span class="line">    <span class="token selector">.navbar <span class="token punctuation">{</span></span></span>
<span class="line">      <span class="token property-declaration"><span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">rem</span><span class="token punctuation">;</span></span></span>
<span class="line">      <span class="token property-declaration"><span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token unit">rem</span><span class="token punctuation">;</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.sidebar <span class="token punctuation">{</span></span></span>
<span class="line">      <span class="token property-declaration"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">;</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>欢迎参考此指南开始您的VuePress之旅。如有问题，可以查阅<a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>或提交Issues。</p>
</div></template>



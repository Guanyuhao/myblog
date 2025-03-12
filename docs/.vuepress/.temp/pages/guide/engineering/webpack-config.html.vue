<template><div><h1 id="基础到高级的webpack配置详解" tabindex="-1"><a class="header-anchor" href="#基础到高级的webpack配置详解"><span>基础到高级的Webpack配置详解</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#webpack%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5">Webpack基础概念</a></li>
<li><a href="#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE">基础配置</a></li>
<li><a href="#%E5%8A%A0%E8%BD%BD%E5%99%A8loader%E9%85%8D%E7%BD%AE">加载器(Loader)配置</a></li>
<li><a href="#%E6%8F%92%E4%BB%B6plugins%E4%BD%BF%E7%94%A8">插件(Plugins)使用</a></li>
<li><a href="#%E4%BC%98%E5%8C%96%E6%9E%84%E5%BB%BA%E6%80%A7%E8%83%BD">优化构建性能</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2%E4%B8%8E%E6%87%92%E5%8A%A0%E8%BD%BD">代码分割与懒加载</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86">环境配置管理</a></li>
<li><a href="#%E6%A8%A1%E5%9D%97%E7%83%AD%E6%9B%BF%E6%8D%A2hmr">模块热替换(HMR)</a></li>
<li><a href="#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B">高级配置案例</a></li>
<li><a href="#webpack-5%E6%96%B0%E7%89%B9%E6%80%A7">Webpack 5新特性</a></li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E4%B8%8E%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">常见问题与解决方案</a></li>
</ol>
<h2 id="webpack基础概念" tabindex="-1"><a class="header-anchor" href="#webpack基础概念"><span>Webpack基础概念</span></a></h2>
<h3 id="什么是webpack" tabindex="-1"><a class="header-anchor" href="#什么是webpack"><span>什么是Webpack?</span></a></h3>
<p>Webpack是一个现代JavaScript应用程序的静态模块打包器。当Webpack处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个bundle。</p>
<h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h3>
<ol>
<li><strong>入口(Entry)</strong>: 指定webpack开始构建其内部依赖图的起点</li>
<li><strong>输出(Output)</strong>: 告诉webpack在哪里输出所创建的bundle</li>
<li><strong>加载器(Loaders)</strong>: 让webpack能够处理非JavaScript文件</li>
<li><strong>插件(Plugins)</strong>: 用于执行范围更广的任务，如打包优化、资源管理等</li>
<li><strong>模式(Mode)</strong>: 设置development, production或none来启用相应模式下的优化</li>
</ol>
<h3 id="安装与基本使用" tabindex="-1"><a class="header-anchor" href="#安装与基本使用"><span>安装与基本使用</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装webpack和webpack-cli</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建基本的配置文件</span></span>
<span class="line"><span class="token function">touch</span> webpack.config.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2>
<h3 id="最小配置示例" tabindex="-1"><a class="header-anchor" href="#最小配置示例"><span>最小配置示例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 入口文件</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 输出配置</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 模式设置</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多入口配置" tabindex="-1"><a class="header-anchor" href="#多入口配置"><span>多入口配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">'./src/vendor.js'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].[contenthash].js'</span> <span class="token comment">// 使用内容哈希，便于缓存</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源解析配置" tabindex="-1"><a class="header-anchor" href="#资源解析配置"><span>资源解析配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自动解析这些扩展名</span></span>
<span class="line">    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.jsx'</span><span class="token punctuation">,</span> <span class="token string">'.json'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 路径别名</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'components'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src/components'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="加载器-loader-配置" tabindex="-1"><a class="header-anchor" href="#加载器-loader-配置"><span>加载器(Loader)配置</span></a></h2>
<h3 id="javascript和typescript处理" tabindex="-1"><a class="header-anchor" href="#javascript和typescript处理"><span>JavaScript和TypeScript处理</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// JavaScript处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// TypeScript处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'ts-loader'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css和预处理器" tabindex="-1"><a class="header-anchor" href="#css和预处理器"><span>CSS和预处理器</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// CSS处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// SCSS处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token comment">// 将CSS插入到DOM</span></span>
<span class="line">          <span class="token string">'css-loader'</span><span class="token punctuation">,</span>   <span class="token comment">// 解析CSS导入</span></span>
<span class="line">          <span class="token string">'postcss-loader'</span><span class="token punctuation">,</span> <span class="token comment">// 处理CSS兼容性</span></span>
<span class="line">          <span class="token string">'sass-loader'</span>   <span class="token comment">// 将SCSS编译为CSS</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// Less处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'less-loader'</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件和资源加载" tabindex="-1"><a class="header-anchor" href="#文件和资源加载"><span>文件和资源加载</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 图片处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'images/[name].[hash][ext]'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 字体处理</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(woff|woff2|eot|ttf|otf)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'fonts/[name].[hash][ext]'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// XML加载</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.xml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'xml-loader'</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级加载器配置" tabindex="-1"><a class="header-anchor" href="#高级加载器配置"><span>高级加载器配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 链式加载器</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 从JS中提取CSS</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'../'</span> <span class="token comment">// 修正路径问题</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 确保在css-loader前应用其它加载器</span></span>
<span class="line">              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">localIdentName</span><span class="token operator">:</span> <span class="token string">'[name]__[local]___[hash:base64:5]'</span> <span class="token comment">// CSS模块化命名</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'postcss-loader'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                  <span class="token punctuation">[</span><span class="token string">'autoprefixer'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'sass-loader'</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 内联器 - 小文件转换为数据URL</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">// 8KB以下转换为Base64</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件-plugins-使用" tabindex="-1"><a class="header-anchor" href="#插件-plugins-使用"><span>插件(Plugins)使用</span></a></h2>
<h3 id="常用插件配置" tabindex="-1"><a class="header-anchor" href="#常用插件配置"><span>常用插件配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'copy-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 清理输出目录</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 生成HTML文件并自动引入资源</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 提取CSS到单独文件</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'css/[name].[contenthash].css'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 复制静态资源</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'src/assets'</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">'assets'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量与定义常量" tabindex="-1"><a class="header-anchor" href="#环境变量与定义常量"><span>环境变量与定义常量</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> DefinePlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> dotenv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'dotenv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 加载环境变量</span></span>
<span class="line"><span class="token keyword">const</span> env <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>parsed <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> envKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>env<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  prev<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">process.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>next<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>env<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> prev<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 定义全局常量</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'process.env.NODE_ENV'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'API_URL'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token operator">...</span>envKeys</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级插件配置" tabindex="-1"><a class="header-anchor" href="#高级插件配置"><span>高级插件配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> WorkboxPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'workbox-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'compression-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// ServiceWorker生成</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">WorkboxPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 打包分析</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">analyzerMode</span><span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">openAnalyzer</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">reportFilename</span><span class="token operator">:</span> <span class="token string">'bundle-report.html'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// Gzip压缩</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">'gzip'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|css|html|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// 只有大于10KB的资源才会被处理</span></span>
<span class="line">      <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span> <span class="token comment">// 只有压缩率小于这个值的资源才会被处理</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化构建性能" tabindex="-1"><a class="header-anchor" href="#优化构建性能"><span>优化构建性能</span></a></h2>
<h3 id="减小打包体积" tabindex="-1"><a class="header-anchor" href="#减小打包体积"><span>减小打包体积</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'css-minimizer-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 压缩JavaScript</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">parse</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">ecma</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">ecma</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">comparisons</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">inline</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">mangle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">safari10</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">ecma</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">ascii_only</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 压缩CSS</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">minimizerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">'default'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">discardComments</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">removeAll</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 抽离公共模块</span></span>
<span class="line">    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'vendors'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'common'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">reuseExistingChunk</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 将runtime代码提取到单独的文件</span></span>
<span class="line">    <span class="token literal-property property">runtimeChunk</span><span class="token operator">:</span> <span class="token string">'single'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提升构建速度" tabindex="-1"><a class="header-anchor" href="#提升构建速度"><span>提升构建速度</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HardSourceWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'hard-source-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token comment">// 缓存</span></span>
<span class="line">  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'filesystem'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">[</span>__filename<span class="token punctuation">]</span> <span class="token comment">// 当构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 优化解析</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.jsx'</span><span class="token punctuation">,</span> <span class="token string">'.ts'</span><span class="token punctuation">,</span> <span class="token string">'.tsx'</span><span class="token punctuation">,</span> <span class="token string">'.json'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'node_modules'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 告诉webpack哪些模块不做解析处理</span></span>
<span class="line">    <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">jquery|lodash</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置loader的包含和排除路径，减小解析范围</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">include</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 使用缓存提高二次构建速度</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">HardSourceWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 只编译需要的国际化文件</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment[/\\]locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">zh-cn|en-us</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码分割与懒加载" tabindex="-1"><a class="header-anchor" href="#代码分割与懒加载"><span>代码分割与懒加载</span></a></h2>
<h3 id="动态导入和代码分割" tabindex="-1"><a class="header-anchor" href="#动态导入和代码分割"><span>动态导入和代码分割</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">maxInitialRequests</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取包名</span></span>
<span class="line">            <span class="token keyword">const</span> packageName <span class="token operator">=</span> module<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/](.*?)([\\/]|$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// npm包名称可能包含@，进行替换</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">npm.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在代码中使用动态导入</span></span>
<span class="line"><span class="token comment">// App.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">loadAdminModule</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "admin" */</span> <span class="token string">'./admin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>AdminModule<span class="token punctuation">,</span> setAdminModule<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">loadAdmin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadAdminModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">setAdminModule</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token operator">!</span>AdminModule <span class="token operator">?</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>loadAdmin<span class="token punctuation">}</span><span class="token operator">></span>加载管理模块<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token operator">&lt;</span>AdminModule <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预加载与预获取" tabindex="-1"><a class="header-anchor" href="#预加载与预获取"><span>预加载与预获取</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 预获取：浏览器空闲时获取</span></span>
<span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span> <span class="token string">'./path/to/LoginModal.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 预加载：与父chunk并行加载</span></span>
<span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPreload: true */</span> <span class="token string">'./path/to/ChartingLibrary.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境配置管理" tabindex="-1"><a class="header-anchor" href="#环境配置管理"><span>环境配置管理</span></a></h2>
<h3 id="多环境配置文件" tabindex="-1"><a class="header-anchor" href="#多环境配置文件"><span>多环境配置文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.common.js - 公共配置</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].[contenthash].js'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./src/index.html'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.dev.js - 开发环境</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'eval-source-map'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.prod.js - 生产环境</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.common.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mini-css-extract-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'css-minimizer-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'terser-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>common<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">'source-map'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token comment">// CDN前缀可以在这里添加</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'css/[name].[contenthash].css'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量使用" tabindex="-1"><a class="header-anchor" href="#环境变量使用"><span>环境变量使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack serve --config webpack.dev.js --env development"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"build:dev"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.prod.js --env development"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"build:stage"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.prod.js --env staging"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"build:prod"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.prod.js --env production"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'环境变量:'</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 基于环境变量的动态配置</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> env<span class="token punctuation">.</span>production <span class="token operator">?</span> <span class="token string">'production'</span> <span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'process.env.NODE_ENV'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span>production <span class="token operator">?</span> <span class="token string">'production'</span> <span class="token operator">:</span> <span class="token string">'development'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'process.env.API_URL'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span></span>
<span class="line">          env<span class="token punctuation">.</span>production </span>
<span class="line">            <span class="token operator">?</span> <span class="token string">'https://api.example.com/v1'</span> </span>
<span class="line">            <span class="token operator">:</span> env<span class="token punctuation">.</span>staging </span>
<span class="line">              <span class="token operator">?</span> <span class="token string">'https://staging-api.example.com/v1'</span></span>
<span class="line">              <span class="token operator">:</span> <span class="token string">'http://localhost:3001/v1'</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块热替换-hmr" tabindex="-1"><a class="header-anchor" href="#模块热替换-hmr"><span>模块热替换(HMR)</span></a></h2>
<h3 id="基础hmr配置" tabindex="-1"><a class="header-anchor" href="#基础hmr配置"><span>基础HMR配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span><span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用HMR</span></span>
<span class="line">    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 添加HMR插件</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// index.js中启用HMR</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react热更新配置" tabindex="-1"><a class="header-anchor" href="#react热更新配置"><span>React热更新配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|jsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@babel/preset-env'</span><span class="token punctuation">,</span> <span class="token string">'@babel/preset-react'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react-hot-loader/babel'</span><span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// App.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> hot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-hot-loader/root'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hot</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue热更新配置" tabindex="-1"><a class="header-anchor" href="#vue热更新配置"><span>Vue热更新配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'vue-loader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'vue-loader'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vue组件中无需特殊配置，vue-loader已支持HMR</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高级配置案例" tabindex="-1"><a class="header-anchor" href="#高级配置案例"><span>高级配置案例</span></a></h2>
<h3 id="服务端渲染-ssr-配置" tabindex="-1"><a class="header-anchor" href="#服务端渲染-ssr-配置"><span>服务端渲染(SSR)配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.client.js</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.base.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> WebpackManifestPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-manifest-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/client/index.js'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist/public'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'[name].[contenthash].js'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'/'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">WebpackManifestPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">'asset-manifest.json'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.server.js</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> merge <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-merge'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./webpack.base.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> nodeExternals <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-node-externals'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'node'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/server/index.js'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'server.js'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">'/'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nodeExternals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 排除node_modules</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">'isomorphic-style-loader'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">exportOnlyLocals</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微前端配置" tabindex="-1"><a class="header-anchor" href="#微前端配置"><span>微前端配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> ModuleFederationPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>container<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app1'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'./Button'</span><span class="token operator">:</span> <span class="token string">'./src/components/Button'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'./Header'</span><span class="token operator">:</span> <span class="token string">'./src/components/Header'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 主应用配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'host'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">app1</span><span class="token operator">:</span> <span class="token string">'app1@http://localhost:3001/remoteEntry.js'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在宿主应用中使用远程组件</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 动态导入远程组件</span></span>
<span class="line"><span class="token keyword">const</span> RemoteButton <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'app1/Button'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">></span>主应用<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>RemoteButton <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pwa配置" tabindex="-1"><a class="header-anchor" href="#pwa配置"><span>PWA配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> WorkboxPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'workbox-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> WebpackPwaManifest <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-pwa-manifest'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 生成Web应用清单</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">WebpackPwaManifest</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'我的PWA应用'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">short_name</span><span class="token operator">:</span> <span class="token string">'PWA App'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'PWA示例应用'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">background_color</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">theme_color</span><span class="token operator">:</span> <span class="token string">'#31a8f8'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">icons</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">src</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'src/assets/icon.png'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">384</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">destination</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'icons'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 生成Service Worker</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">WorkboxPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">runtimeCaching</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">urlPattern</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(?:png|jpg|jpeg|svg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token string">'CacheFirst'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">cacheName</span><span class="token operator">:</span> <span class="token string">'images'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">expiration</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">maxEntries</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">maxAgeSeconds</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token comment">// 30天</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">urlPattern</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https:\/\/api\.example\.com</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token string">'NetworkFirst'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">cacheName</span><span class="token operator">:</span> <span class="token string">'api-cache'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">networkTimeoutSeconds</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">expiration</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">maxEntries</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">maxAgeSeconds</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token comment">// 5分钟</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">cacheableResponse</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">statuses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// index.js中注册Service Worker</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/service-worker.js'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">registration</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'SW registered: '</span><span class="token punctuation">,</span> registration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'SW registration failed: '</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-5新特性" tabindex="-1"><a class="header-anchor" href="#webpack-5新特性"><span>Webpack 5新特性</span></a></h2>
<h3 id="资源模块配置" tabindex="-1"><a class="header-anchor" href="#资源模块配置"><span>资源模块配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 资源模块-替代file-loader</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/resource'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'images/[hash][ext][query]'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 内联资源-替代url-loader</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.svg$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/inline'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 文本资源-替代raw-loader</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.txt$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset/source'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 自动选择-小于8kb时内联，否则作为独立资源</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(woff|woff2)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'asset'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token operator">*</span> <span class="token number">1024</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持久化缓存" tabindex="-1"><a class="header-anchor" href="#持久化缓存"><span>持久化缓存</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'filesystem'</span><span class="token punctuation">,</span> <span class="token comment">// 使用文件系统缓存</span></span>
<span class="line">    <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">[</span>__filename<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将配置文件添加为构建依赖，当配置更改时缓存失效</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'.webpack_cache'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 自定义缓存目录</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'production-cache'</span><span class="token punctuation">,</span> <span class="token comment">// 缓存名称，用于多环境下的缓存区分</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'1.0'</span> <span class="token comment">// 自定义版本，手动控制缓存失效</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块联邦-module-federation" tabindex="-1"><a class="header-anchor" href="#模块联邦-module-federation"><span>模块联邦 (Module Federation)</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// host应用配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> ModuleFederationPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>container<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'host'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">remote1</span><span class="token operator">:</span> <span class="token string">'remote1@http://localhost:3001/remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">remote2</span><span class="token operator">:</span> <span class="token string">'remote2@http://localhost:3002/remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 远程应用1配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'remote1'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'./Button'</span><span class="token operator">:</span> <span class="token string">'./src/components/Button.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'./Card'</span><span class="token operator">:</span> <span class="token string">'./src/components/Card.js'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 远程应用2配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'remote2'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'./Header'</span><span class="token operator">:</span> <span class="token string">'./src/components/Header.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'./Footer'</span><span class="token operator">:</span> <span class="token string">'./src/components/Footer.js'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">remote1</span><span class="token operator">:</span> <span class="token string">'remote1@http://localhost:3001/remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">          <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.0.0'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tree-shaking增强" tabindex="-1"><a class="header-anchor" href="#tree-shaking增强"><span>Tree Shaking增强</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用树摇，标记未使用的导出</span></span>
<span class="line">    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">pure_funcs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'console.log'</span><span class="token punctuation">]</span> <span class="token comment">// 删除特定函数调用</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"my-project"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"*.css"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"*.scss"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">"src/polyfills.js"</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题与解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题与解决方案"><span>常见问题与解决方案</span></a></h2>
<h3 id="解决路径别名问题" tabindex="-1"><a class="header-anchor" href="#解决路径别名问题"><span>解决路径别名问题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'components'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src/components'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 配置VSCode或其他编辑器，添加jsconfig.json或tsconfig.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"components/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/components/*"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决大型依赖包问题" tabindex="-1"><a class="header-anchor" href="#解决大型依赖包问题"><span>解决大型依赖包问题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'lodash-es'</span><span class="token operator">:</span> <span class="token string">'lodash'</span> <span class="token comment">// 使用较小的替代库</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 使用IgnorePlugin忽略不需要的语言包</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">resourceRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\.\/locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">contextRegExp</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment$</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 或使用ContextReplacementPlugin只加载特定语言</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ContextReplacementPlugin</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment[/\\]locale$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">zh-cn|en-us</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决构建慢的问题" tabindex="-1"><a class="header-anchor" href="#解决构建慢的问题"><span>解决构建慢的问题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> SpeedMeasurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'speed-measure-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> smp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpeedMeasurePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 用SpeedMeasurePlugin包装配置以测量构建速度</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> smp<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...原始配置</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 或者使用多线程加速构建</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'thread-loader'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">'babel-loader'</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理内存溢出问题" tabindex="-1"><a class="header-anchor" href="#处理内存溢出问题"><span>处理内存溢出问题</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// package.json脚本</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"node --max-old-space-size=8192 node_modules/.bin/webpack --config webpack.prod.js"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 或使用多进程构建大型项目</span></span>
<span class="line"><span class="token keyword">const</span> parallelUglifyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-parallel-uglify-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">parallelUglifyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">cacheDir</span><span class="token operator">:</span> <span class="token string">'.cache/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">uglifyJS</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>通过本文的详解，你应该对Webpack的配置有了全面的了解，从基础概念到高级用法，再到性能优化和最佳实践。随着项目的不断发展，可以根据需要逐步应用这些配置，打造出优质的前端构建流程。</p>
</div></template>



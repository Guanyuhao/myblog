<template><div><h1 id="微前端架构实践" tabindex="-1"><a class="header-anchor" href="#微前端架构实践"><span>微前端架构实践</span></a></h1>
<p>微前端是一种前端架构模式，它允许多个独立开发和部署的前端应用组合成一个整体提供给用户。本文将基于我在字节跳动的实际项目经验，深入探讨微前端架构的原理、实施策略和最佳实践。</p>
<h2 id="为什么需要微前端" tabindex="-1"><a class="header-anchor" href="#为什么需要微前端"><span>为什么需要微前端</span></a></h2>
<p>在大型组织中，随着业务的增长，前端应用往往会变得越来越庞大和复杂。这带来了一系列挑战：</p>
<ol>
<li><strong>团队协作困难</strong> - 多团队同时开发单体应用导致冲突和协调成本高</li>
<li><strong>技术栈限制</strong> - 被锁定在遗留技术栈中，难以采用新技术</li>
<li><strong>部署风险高</strong> - 整体应用一起部署，任何问题都可能影响整个系统</li>
<li><strong>代码复杂度高</strong> - 单体应用代码量大，难以维护和理解</li>
<li><strong>扩展性差</strong> - 难以按需加载功能或实现灵活的业务组合</li>
</ol>
<p>微前端架构通过将前端应用分解为小型、自包含的应用来解决这些问题。</p>
<h2 id="微前端核心原则" tabindex="-1"><a class="header-anchor" href="#微前端核心原则"><span>微前端核心原则</span></a></h2>
<p>成功的微前端架构遵循以下核心原则：</p>
<ol>
<li><strong>团队自治</strong> - 每个微前端由一个团队端到端负责</li>
<li><strong>技术栈无关</strong> - 各团队可以选择适合的技术栈</li>
<li><strong>隔离性</strong> - 应用之间不共享状态和依赖</li>
<li><strong>原生浏览器特性</strong> - 尽可能使用标准平台特性而非自定义API</li>
<li><strong>彼此感知</strong> - 微前端之间能够共享必要的上下文和状态</li>
</ol>
<h2 id="微前端实现方式" tabindex="-1"><a class="header-anchor" href="#微前端实现方式"><span>微前端实现方式</span></a></h2>
<h3 id="_1-基于路由的微前端集成" tabindex="-1"><a class="header-anchor" href="#_1-基于路由的微前端集成"><span>1. 基于路由的微前端集成</span></a></h3>
<p>最简单的方式是基于路由将不同应用组合在一起：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用路由配置</span></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// 本地路由</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> HomePage <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> AboutPage <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 微前端路由 - 配置重定向到其他应用</span></span>
<span class="line">  <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/app1/*'</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://app1.example.com'</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'/app1'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/app2/*'</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://app2.example.com'</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'/app2'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<ul>
<li>实现简单，无需特殊框架</li>
<li>应用间完全隔离</li>
</ul>
<p>缺点：</p>
<ul>
<li>体验不连贯，每次跳转都是完整页面刷新</li>
<li>无法在同一页面组合多个微前端</li>
</ul>
<h3 id="_2-iframe集成" tabindex="-1"><a class="header-anchor" href="#_2-iframe集成"><span>2. iframe集成</span></a></h3>
<p>使用iframe嵌入不同应用：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 主应用导航 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token string">'app1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>应用1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token string">'app2'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>应用2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>micro-frontend-container<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token parameter">appName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'micro-frontend-container'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">switch</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'app1'</span><span class="token operator">:</span></span>
<span class="line">        container<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://app1.example.com'</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'app2'</span><span class="token operator">:</span></span>
<span class="line">        container<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://app2.example.com'</span></span>
<span class="line">        <span class="token keyword">break</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 初始加载</span></span>
<span class="line">  <span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token string">'app1'</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<ul>
<li>完美的应用隔离</li>
<li>简单直接，无需复杂框架</li>
</ul>
<p>缺点：</p>
<ul>
<li>iframe有许多限制（样式隔离、跨iframe通信、性能等）</li>
<li>用户体验不佳（历史导航、深度链接等问题）</li>
</ul>
<h3 id="_3-web-components集成" tabindex="-1"><a class="header-anchor" href="#_3-web-components集成"><span>3. Web Components集成</span></a></h3>
<p>使用Web Components封装微前端：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义微前端组件</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MicroFrontend</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'host'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 加载微前端的脚本</span></span>
<span class="line">    <span class="token keyword">const</span> scriptId <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">micro-frontend-script-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>scriptId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderMicroFrontend</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/asset-manifest.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">manifest</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span></span>
<span class="line">        script<span class="token punctuation">.</span>id <span class="token operator">=</span> scriptId</span>
<span class="line">        script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>manifest<span class="token punctuation">[</span><span class="token string">'main.js'</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">        script<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderMicroFrontend</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">renderMicroFrontend</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> mountFunc <span class="token operator">=</span> window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>mountFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 创建挂载点</span></span>
<span class="line">      <span class="token keyword">const</span> mountPoint <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>mountPoint<span class="token punctuation">)</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 挂载微前端</span></span>
<span class="line">      <span class="token function">mountFunc</span><span class="token punctuation">(</span>mountPoint<span class="token punctuation">)</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 保存卸载函数</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>unmountFunc <span class="token operator">=</span> window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">unmount</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">disconnectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>unmountFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unmountFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册自定义元素</span></span>
<span class="line">customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'micro-frontend'</span><span class="token punctuation">,</span> MicroFrontend<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 主应用导航 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-frontend</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App1<span class="token punctuation">"</span></span> <span class="token attr-name">host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:3001<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-frontend</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>micro-frontend</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>App2<span class="token punctuation">"</span></span> <span class="token attr-name">host</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:3002<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>micro-frontend</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个微前端应用需要导出挂载和卸载函数：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// App1的入口文件</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">renderApp1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">containerId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> containerId<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">unmountApp1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">containerId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>containerId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 本地开发模式</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'micro-frontend-container'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<ul>
<li>使用原生Web标准</li>
<li>良好的隔离性</li>
<li>可组合多个微前端在同一页面</li>
</ul>
<p>缺点：</p>
<ul>
<li>需要微前端导出特定的挂载/卸载函数</li>
<li>共享依赖较复杂</li>
</ul>
<h3 id="_4-使用single-spa框架" tabindex="-1"><a class="header-anchor" href="#_4-使用single-spa框架"><span>4. 使用single-spa框架</span></a></h3>
<p><a href="https://single-spa.js.org/" target="_blank" rel="noopener noreferrer">single-spa<ExternalLinkIcon/></a>是一个专门为微前端设计的JavaScript框架：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用入口</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerApplication<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'single-spa'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册微前端应用</span></span>
<span class="line"><span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">app</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@org/app1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">activeWhen</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">location</span><span class="token punctuation">)</span> <span class="token operator">=></span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/app1'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app2'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">app</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@org/app2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">activeWhen</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/app2'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'navbar'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">app</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@org/navbar'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">activeWhen</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动single-spa</span></span>
<span class="line"><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个微前端需要导出特定的生命周期函数：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React微前端</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> navigateToUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'single-spa'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> rootElement</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 必须的生命周期函数</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">    rootElement<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'app1-container'</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>App <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">      rootElement<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<ul>
<li>专门为微前端设计</li>
<li>支持多种框架(React, Vue, Angular等)</li>
<li>提供丰富的生命周期钩子</li>
</ul>
<p>缺点：</p>
<ul>
<li>学习曲线较陡</li>
<li>配置较复杂</li>
</ul>
<h3 id="_5-使用module-federation-webpack-5" tabindex="-1"><a class="header-anchor" href="#_5-使用module-federation-webpack-5"><span>5. 使用Module Federation (webpack 5)</span></a></h3>
<p>Webpack 5引入的Module Federation允许多个构建共享代码和模块：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js (主应用)</span></span>
<span class="line"><span class="token keyword">const</span> ModuleFederationPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack/lib/container/ModuleFederationPlugin'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'host'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">app1</span><span class="token operator">:</span> <span class="token string">'app1@http://localhost:3001/remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">app2</span><span class="token operator">:</span> <span class="token string">'app2@http://localhost:3002/remoteEntry.js'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack.config.js (微前端应用1)</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app1'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'./App'</span><span class="token operator">:</span> <span class="token string">'./src/App'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主应用中使用远程模块：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 动态导入远程模块</span></span>
<span class="line"><span class="token keyword">const</span> RemoteApp1 <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'app1/App'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> RemoteApp2 <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'app2/App'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">></span>主应用<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">      </span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>加载中<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>RemoteApp1 <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">      </span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>加载中<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>RemoteApp2 <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<ul>
<li>原生webpack支持</li>
<li>可共享依赖，避免重复加载</li>
<li>简化模块共享配置</li>
</ul>
<p>缺点：</p>
<ul>
<li>仅限webpack 5项目</li>
<li>配置较复杂</li>
</ul>
<h2 id="微前端实际案例-字节跳动内部平台" tabindex="-1"><a class="header-anchor" href="#微前端实际案例-字节跳动内部平台"><span>微前端实际案例：字节跳动内部平台</span></a></h2>
<p>在字节跳动，我们使用微前端架构重构了一个大型的内部数据分析平台。这个平台涉及多个团队，包括数据可视化、报表系统、指标管理等模块。</p>
<h3 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计"><span>架构设计</span></a></h3>
<p>我们采用了基于qiankun（基于single-spa的封装）的微前端解决方案：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用 (基座应用)</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'//localhost:8081'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#micro-container'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> sharedState<span class="token punctuation">,</span></span>
<span class="line">      eventBus <span class="token comment">// 传递事件总线给微前端</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'reports'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'//localhost:8082'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#micro-container'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">'/reports'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> sharedState<span class="token punctuation">,</span></span>
<span class="line">      eventBus <span class="token comment">// 传递事件总线给微前端</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'metrics'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'//localhost:8083'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#micro-container'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">activeRule</span><span class="token operator">:</span> <span class="token string">'/metrics'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> sharedState<span class="token punctuation">,</span></span>
<span class="line">      eventBus <span class="token comment">// 传递事件总线给微前端</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建共享状态</span></span>
<span class="line"><span class="token keyword">const</span> sharedState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">permissions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">selectedDateRange</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...其他共享状态</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动微前端</span></span>
<span class="line"><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">singular</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨应用通信" tabindex="-1"><a class="header-anchor" href="#跨应用通信"><span>跨应用通信</span></a></h3>
<p>我们使用事件总线模式处理微前端之间的通信：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用中的事件总线</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">EventBus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">off</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> cb <span class="token operator">!==</span> callback<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建全局事件总线实例</span></span>
<span class="line"><span class="token keyword">const</span> eventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">window<span class="token punctuation">.</span>eventBus <span class="token operator">=</span> eventBus <span class="token comment">// 暴露给微前端应用使用</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在主应用中注册共享</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> sharedState<span class="token punctuation">,</span></span>
<span class="line">      eventBus <span class="token comment">// 传递事件总线给微前端</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 其他微前端应用...</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微前端应用中使用事件总线：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 微前端内部使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">setupCommunication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 在全局对象中查找事件总线</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> eventBus <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>eventBus<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 订阅事件</span></span>
<span class="line">    eventBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'dateRangeChanged'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">range</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'日期范围变更:'</span><span class="token punctuation">,</span> range<span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// 更新本应用状态</span></span>
<span class="line">      <span class="token function">updateDateRange</span><span class="token punctuation">(</span>range<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 组件内发布事件</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">handleMetricSelection</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 通知其他应用指标已选择</span></span>
<span class="line">      eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'metricSelected'</span><span class="token punctuation">,</span> metric<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 清理订阅</span></span>
<span class="line">      eventBus<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'dateRangeChanged'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据共享与状态同步" tabindex="-1"><a class="header-anchor" href="#数据共享与状态同步"><span>数据共享与状态同步</span></a></h3>
<p>除了事件通信外，我们还实现了基于React Context的跨应用状态共享：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用中创建全局状态管理</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'zustand'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> useGlobalStore <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">dateRange</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function-variable function">setUser</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">setTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> theme <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">setDateRange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">dateRange</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dateRange <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 将store实例注入微前端</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">getGlobalState</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> useGlobalStore<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      useGlobalStore <span class="token comment">// 传递store hook</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在React微前端中使用：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// 微前端应用中</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">DashboardApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 从props获取全局状态</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> useGlobalStore <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>props</span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用来自主应用的store</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> dateRange<span class="token punctuation">,</span> setDateRange <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useGlobalStore</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dateRange</span><span class="token operator">:</span> state<span class="token punctuation">.</span>dateRange<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">setDateRange</span><span class="token operator">:</span> state<span class="token punctuation">.</span>setDateRange</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用全局状态</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'日期范围更新:'</span><span class="token punctuation">,</span> dateRange<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 加载基于日期范围的数据...</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>dateRange<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// UI渲染...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="性能优化策略" tabindex="-1"><a class="header-anchor" href="#性能优化策略"><span>性能优化策略</span></a></h3>
<p>在字节跳动的微前端实践中，我们采用了多种性能优化策略：</p>
<h4 id="_1-预加载微前端" tabindex="-1"><a class="header-anchor" href="#_1-预加载微前端"><span>1. 预加载微前端</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> registerMicroApps<span class="token punctuation">,</span> start<span class="token punctuation">,</span> prefetchApps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'qiankun'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册应用</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动qiankun</span></span>
<span class="line"><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 预加载其他微应用静态资源</span></span>
<span class="line"><span class="token function">prefetchApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'reports'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'metrics'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-共享运行时依赖" tabindex="-1"><a class="header-anchor" href="#_2-共享运行时依赖"><span>2. 共享运行时依赖</span></a></h4>
<p>我们通过Webpack Module Federation共享公共依赖，减少重复加载：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 微前端webpack配置</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'./App'</span><span class="token operator">:</span> <span class="token string">'./src/App'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^17.0.0'</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">antd</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^4.16.0'</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^4.17.0'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-懒加载微前端" tabindex="-1"><a class="header-anchor" href="#_3-懒加载微前端"><span>3. 懒加载微前端</span></a></h4>
<p>根据用户导航行为动态加载微前端应用：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用路由配置</span></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> Home</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/dashboard/*'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> MicroAppLoader<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/reports/*'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> MicroAppLoader<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'reports'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 微前端加载器组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MicroAppLoader</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 动态加载微前端</span></span>
<span class="line">    <span class="token function">loadMicroApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      name<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">entry</span><span class="token operator">:</span> microApps<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span>entry<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">container</span><span class="token operator">:</span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遇到的挑战与解决方案" tabindex="-1"><a class="header-anchor" href="#遇到的挑战与解决方案"><span>遇到的挑战与解决方案</span></a></h3>
<p>在实施微前端架构过程中，我们遇到了一些挑战：</p>
<h4 id="_1-样式隔离" tabindex="-1"><a class="header-anchor" href="#_1-样式隔离"><span>1. 样式隔离</span></a></h4>
<p>CSS冲突是微前端中的常见问题。我们采用了Shadow DOM和CSS模块化方案：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// qiankun配置</span></span>
<span class="line"><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">strictStyleIsolation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 使用Shadow DOM隔离样式</span></span>
<span class="line">    <span class="token literal-property property">experimentalStyleIsolation</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 或使用运行时样式转换</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于不支持Shadow DOM的场景，我们使用CSS命名空间：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 微前端中的CSS */</span></span>
<span class="line"><span class="token selector">.app-dashboard .button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 应用特定样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 或使用CSS Modules */</span></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 编译后会添加唯一哈希 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-跨应用导航" tabindex="-1"><a class="header-anchor" href="#_2-跨应用导航"><span>2. 跨应用导航</span></a></h4>
<p>为了保持一致的导航体验，我们实现了统一的路由管理：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用中提供的路由服务</span></span>
<span class="line"><span class="token keyword">const</span> routerService <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">navigateTo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>origin<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 添加查询参数</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 使用主应用路由导航</span></span>
<span class="line">    history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 触发路由变化事件</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PopStateEvent</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通过props传递给微前端</span></span>
<span class="line"><span class="token function">registerMicroApps</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      routerService</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-权限管理" tabindex="-1"><a class="header-anchor" href="#_3-权限管理"><span>3. 权限管理</span></a></h4>
<p>跨应用的统一权限管理是另一个挑战：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用中的权限服务</span></span>
<span class="line"><span class="token keyword">const</span> permissionService <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 检查当前用户是否有特定权限</span></span>
<span class="line">  <span class="token function-variable function">hasPermission</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">permissionKey</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> useGlobalStore<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> user<span class="token operator">?.</span>permissions<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>permissionKey<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取当前用户所有权限</span></span>
<span class="line">  <span class="token function-variable function">getUserPermissions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span> useGlobalStore<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> user<span class="token operator">?.</span>permissions <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在微前端中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ProtectedFeature</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> permissionKey<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> permissionService <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>props</span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>permissionService <span class="token operator">||</span> permissionService<span class="token punctuation">.</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>permissionKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> children</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>AccessDenied <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微前端架构的利弊分析" tabindex="-1"><a class="header-anchor" href="#微前端架构的利弊分析"><span>微前端架构的利弊分析</span></a></h2>
<p>基于在字节跳动的实践经验，微前端架构的主要优缺点如下：</p>
<h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h3>
<ol>
<li><strong>团队自主性</strong> - 不同团队可以独立开发、测试和部署</li>
<li><strong>技术栈灵活性</strong> - 允许不同应用使用不同技术栈</li>
<li><strong>增量升级</strong> - 可以逐步现代化遗留系统</li>
<li><strong>独立部署</strong> - 降低部署风险和依赖</li>
<li><strong>按需加载</strong> - 提高首屏加载性能</li>
</ol>
<h3 id="挑战" tabindex="-1"><a class="header-anchor" href="#挑战"><span>挑战</span></a></h3>
<ol>
<li><strong>初始搭建复杂</strong> - 需要额外的架构设计和基础设施</li>
<li><strong>调试难度增加</strong> - 分布式架构使调试更复杂</li>
<li><strong>一致性维护</strong> - 需要额外工作保持用户体验一致性</li>
<li><strong>性能开销</strong> - 可能引入额外的运行时开销</li>
<li><strong>学习曲线</strong> - 团队需要学习新的架构模式</li>
</ol>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<p>基于我们在字节跳动的项目经验，总结以下微前端最佳实践：</p>
<ol>
<li><strong>渐进式采用</strong> - 从一个微前端开始，逐步扩展</li>
<li><strong>设计清晰的边界</strong> - 微前端之间应有明确的职责划分</li>
<li><strong>构建共享组件库</strong> - 确保视觉和交互一致性</li>
<li><strong>统一认证和授权</strong> - 实现无缝的用户体验</li>
<li><strong>自动化部署流程</strong> - 每个微前端应有独立的CI/CD流程</li>
<li><strong>监控和性能追踪</strong> - 实施跨应用的监控系统</li>
<li><strong>文档和示例</strong> - 为开发团队提供清晰的指导</li>
</ol>
<h2 id="何时选择微前端" tabindex="-1"><a class="header-anchor" href="#何时选择微前端"><span>何时选择微前端</span></a></h2>
<p>微前端并非适用于所有场景。以下情况可能适合采用微前端：</p>
<ul>
<li>大型应用需要由多团队并行开发</li>
<li>需要逐步现代化遗留系统</li>
<li>需要组合来自不同来源的功能</li>
<li>应用太大，需要拆分以提高可维护性</li>
</ul>
<p>不建议在以下情况使用微前端：</p>
<ul>
<li>小型应用或团队规模小</li>
<li>应用较简单且不需要频繁更新</li>
<li>技术栈统一且没有遗留系统集成需求</li>
</ul>
<h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2>
<p>微前端架构为大型前端应用开发提供了一种模块化方法，特别适合多团队协作的场景。在字节跳动，我们通过微前端成功地将一个庞大的单体应用拆分为多个独立可维护的系统，大大提高了开发效率和系统稳定性。</p>
<p>然而，微前端也带来了额外的复杂性和挑战。在决定采用此架构前，团队应仔细评估项目需求和团队能力，选择最适合的实现方案。</p>
<h2 id="学习资源" tabindex="-1"><a class="header-anchor" href="#学习资源"><span>学习资源</span></a></h2>
<ul>
<li><a href="https://single-spa.js.org/" target="_blank" rel="noopener noreferrer">single-spa官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://qiankun.umijs.org/" target="_blank" rel="noopener noreferrer">qiankun微前端方案<ExternalLinkIcon/></a></li>
<li><a href="https://webpack.js.org/concepts/module-federation/" target="_blank" rel="noopener noreferrer">Module Federation文档<ExternalLinkIcon/></a></li>
<li><a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank" rel="noopener noreferrer">微前端架构模式<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components MDN文档<ExternalLinkIcon/></a></li>
</ul>
</div></template>



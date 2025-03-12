<template><div><h1 id="html-css基础入门" tabindex="-1"><a class="header-anchor" href="#html-css基础入门"><span>HTML/CSS基础入门</span></a></h1>
<p>HTML和CSS是Web开发的基石。不管前端框架如何变化，这些基础知识始终是每位前端开发者必须掌握的内容。</p>
<h2 id="html基础" tabindex="-1"><a class="header-anchor" href="#html基础"><span>HTML基础</span></a></h2>
<h3 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构"><span>文档结构</span></a></h3>
<p>一个基本的HTML文档结构如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh-CN<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>我的网页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>网页标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>文章标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>版权所有 © 2023<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签"><span>语义化标签</span></a></h3>
<p>HTML5引入了多种语义化标签，正确使用它们可以提高代码可读性和可访问性：</p>
<ul>
<li><code v-pre>&lt;header&gt;</code> - 页眉</li>
<li><code v-pre>&lt;nav&gt;</code> - 导航</li>
<li><code v-pre>&lt;main&gt;</code> - 主要内容</li>
<li><code v-pre>&lt;article&gt;</code> - 独立的内容单元</li>
<li><code v-pre>&lt;section&gt;</code> - 内容区块</li>
<li><code v-pre>&lt;aside&gt;</code> - 侧边栏</li>
<li><code v-pre>&lt;footer&gt;</code> - 页脚</li>
</ul>
<h2 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础"><span>CSS基础</span></a></h2>
<h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器"><span>选择器</span></a></h3>
<p>CSS选择器用于定位HTML元素：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 元素选择器 */</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Arial'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 类选择器 */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* ID选择器 */</span></span>
<span class="line"><span class="token selector">#header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 组合选择器 */</span></span>
<span class="line"><span class="token selector">nav a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 伪类 */</span></span>
<span class="line"><span class="token selector">a:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #0088cc<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型"><span>盒模型</span></a></h3>
<p>理解CSS盒模型是样式布局的关键：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #333<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* 默认情况下, 实际宽度 = 300 + 20*2 + 2*2 = 344px */</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">/* 使用box-sizing变更计算方式 */</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* 此时, 实际宽度 = 300px (内容区会自动减小) */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flexbox布局" tabindex="-1"><a class="header-anchor" href="#flexbox布局"><span>Flexbox布局</span></a></h3>
<p>Flexbox是现代CSS布局的核心：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span> <span class="token comment">/* 水平分布 */</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 垂直居中 */</span></span>
<span class="line">  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span> <span class="token comment">/* 允许换行 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* 平均分配空间 */</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-grid布局" tabindex="-1"><a class="header-anchor" href="#css-grid布局"><span>CSS Grid布局</span></a></h3>
<p>Grid布局提供了更强大的二维布局能力：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.grid-container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 三列等宽 */</span></span>
<span class="line">  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 间距 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.grid-item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">grid-column</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span> <span class="token comment">/* 横跨两列 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计"><span>响应式设计</span></a></h2>
<p>通过媒体查询实现响应式设计：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 基础样式适用于所有设备 */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 平板设备 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">max-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 桌面设备 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">max-width</span><span class="token punctuation">:</span> 970px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css变量与预处理器" tabindex="-1"><a class="header-anchor" href="#css变量与预处理器"><span>CSS变量与预处理器</span></a></h2>
<p>现代CSS开发通常结合变量和预处理器：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* CSS变量 */</span></span>
<span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--secondary-color</span><span class="token punctuation">:</span> #304455<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--font-size-base</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-size-base<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战练习" tabindex="-1"><a class="header-anchor" href="#实战练习"><span>实战练习</span></a></h2>
<p>尝试创建一个简单但完整的个人简历页面，结合所学的HTML和CSS知识。要求：</p>
<ol>
<li>使用语义化HTML标签</li>
<li>应用Flexbox或Grid布局</li>
<li>实现响应式设计</li>
<li>使用CSS变量管理颜色和尺寸</li>
</ol>
<p>在下一篇文章中，我们将学习如何用JavaScript为静态页面添加交互功能。</p>
<h2 id="资源推荐" tabindex="-1"><a class="header-anchor" href="#资源推荐"><span>资源推荐</span></a></h2>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/" target="_blank" rel="noopener noreferrer">MDN Web文档<ExternalLinkIcon/></a> - 最权威的Web技术文档</li>
<li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks<ExternalLinkIcon/></a> - 学习CSS技巧的优质网站</li>
<li><a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer">Flexbox Froggy<ExternalLinkIcon/></a> - 学习Flexbox的游戏</li>
<li><a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">Grid Garden<ExternalLinkIcon/></a> - 学习Grid的游戏</li>
</ul>
</div></template>



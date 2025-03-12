<template><div><h1 id="浏览器渲染原理" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理"><span>浏览器渲染原理</span></a></h1>
<p>了解浏览器如何渲染网页是前端开发者的一项重要技能。这些知识不仅有助于编写高性能的代码，还能帮助我们更好地理解和解决各种前端问题。本文将深入探讨浏览器渲染的核心原理和优化技巧。</p>
<h2 id="浏览器架构概述" tabindex="-1"><a class="header-anchor" href="#浏览器架构概述"><span>浏览器架构概述</span></a></h2>
<p>现代浏览器由多个核心组件组成：</p>
<ol>
<li><strong>用户界面</strong> - 包括地址栏、导航按钮等</li>
<li><strong>浏览器引擎</strong> - 在用户界面和渲染引擎之间传送指令</li>
<li><strong>渲染引擎</strong> - 负责显示请求的内容</li>
<li><strong>网络</strong> - 处理网络请求</li>
<li><strong>JavaScript引擎</strong> - 解析和执行JavaScript代码</li>
<li><strong>UI后端</strong> - 用于绘制基本的窗口小部件</li>
<li><strong>数据存储</strong> - 包括Cookie、localStorage等</li>
</ol>
<p>我们主要关注<strong>渲染引擎</strong>，它负责将HTML、CSS和JavaScript转换为用户可以看到和交互的网页。</p>
<h2 id="关键渲染路径" tabindex="-1"><a class="header-anchor" href="#关键渲染路径"><span>关键渲染路径</span></a></h2>
<p>从接收HTML到在屏幕上显示像素的过程称为&quot;关键渲染路径&quot;(Critical Rendering Path)。这个过程包括以下几个步骤：</p>
<h3 id="_1-构建dom树" tabindex="-1"><a class="header-anchor" href="#_1-构建dom树"><span>1. 构建DOM树</span></a></h3>
<p>浏览器解析HTML文档，将标签转换成DOM节点，构建DOM树。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>浏览器渲染原理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为DOM树：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Document</span>
<span class="line">└── html</span>
<span class="line">    ├── head</span>
<span class="line">    │   ├── title</span>
<span class="line">    │   │   └── "浏览器渲染原理"</span>
<span class="line">    │   └── link</span>
<span class="line">    └── body</span>
<span class="line">        ├── div.container</span>
<span class="line">        │   ├── h1</span>
<span class="line">        │   │   └── "Hello World"</span>
<span class="line">        │   └── p</span>
<span class="line">        │       └── "这是一个示例"</span>
<span class="line">        └── script</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-构建cssom树" tabindex="-1"><a class="header-anchor" href="#_2-构建cssom树"><span>2. 构建CSSOM树</span></a></h3>
<p>浏览器解析CSS（包括外部CSS文件和样式元素），构建CSSOM(CSS对象模型)树。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换为CSSOM树：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">CSSOM</span>
<span class="line">├── body</span>
<span class="line">│   ├── font-family: Arial, sans-serif</span>
<span class="line">│   ├── margin: 0</span>
<span class="line">│   ├── padding: 20px</span>
<span class="line">│   └── .container</span>
<span class="line">│       ├── max-width: 800px</span>
<span class="line">│       ├── margin: 0 auto</span>
<span class="line">│       ├── h1</span>
<span class="line">│       │   └── color: #333</span>
<span class="line">│       └── p</span>
<span class="line">│           ├── color: #666</span>
<span class="line">│           └── line-height: 1.6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSSOM构建是一个阻塞渲染的过程。浏览器必须等待所有CSS被解析完毕后，才能进入下一阶段。</p>
<h3 id="_3-构建渲染树" tabindex="-1"><a class="header-anchor" href="#_3-构建渲染树"><span>3. 构建渲染树</span></a></h3>
<p>浏览器将DOM树和CSSOM树结合起来，创建渲染树(Render Tree)。渲染树只包含需要显示的节点。</p>
<p>不会包含在渲染树中的元素：</p>
<ul>
<li>不可见元素，如<code v-pre>&lt;head&gt;</code>、<code v-pre>&lt;script&gt;</code>、<code v-pre>&lt;meta&gt;</code></li>
<li>被CSS隐藏的元素，如<code v-pre>display: none</code>的元素</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">RenderTree</span>
<span class="line">└── body</span>
<span class="line">    └── div.container</span>
<span class="line">        ├── h1</span>
<span class="line">        │   └── "Hello World"</span>
<span class="line">        └── p</span>
<span class="line">            └── "这是一个示例"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-布局-layout" tabindex="-1"><a class="header-anchor" href="#_4-布局-layout"><span>4. 布局(Layout)</span></a></h3>
<p>浏览器计算渲染树中每个节点的尺寸和位置。布局是一个递归的过程，从根节点开始，确定所有节点的几何信息。</p>
<p>影响布局的因素：</p>
<ul>
<li>视口大小</li>
<li>盒模型属性(width, height, padding, margin, border)</li>
<li>定位方式(static, relative, absolute, fixed)</li>
<li>内容大小</li>
</ul>
<h3 id="_5-绘制-paint" tabindex="-1"><a class="header-anchor" href="#_5-绘制-paint"><span>5. 绘制(Paint)</span></a></h3>
<p>浏览器将每个节点转换为实际的像素。这个过程包括文本渲染、颜色填充、图像绘制、阴影效果等。</p>
<p>绘制通常分为多个层来完成，并由GPU加速。</p>
<h3 id="_6-合成-compositing" tabindex="-1"><a class="header-anchor" href="#_6-合成-compositing"><span>6. 合成(Compositing)</span></a></h3>
<p>将绘制的各个层合成为最终的图像。现代浏览器使用分层合成技术来优化渲染过程。</p>
<h2 id="重绘与重排" tabindex="-1"><a class="header-anchor" href="#重绘与重排"><span>重绘与重排</span></a></h2>
<p>了解重绘(Repaint)和重排(Reflow)对于优化网页性能至关重要。</p>
<h3 id="重排-reflow" tabindex="-1"><a class="header-anchor" href="#重排-reflow"><span>重排(Reflow)</span></a></h3>
<p>当元素的几何属性(大小、位置)发生变化时，浏览器需要重新计算元素的几何属性，这个过程称为重排。</p>
<p>触发重排的操作：</p>
<ul>
<li>添加/删除DOM元素</li>
<li>修改元素尺寸(width, height, padding, margin, border)</li>
<li>修改元素位置(top, left等)</li>
<li>浏览器窗口调整大小</li>
<li>页面初始化</li>
<li>获取某些属性(offsetWidth, getComputedStyle()等)</li>
</ul>
<p>重排是一个昂贵的操作，因为它会影响到渲染树中的其他元素，可能导致级联的重排。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 引起多次重排的糟糕示例</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100px'</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">'200px'</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>margin <span class="token operator">=</span> <span class="token string">'10px'</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token string">'15px'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 优化后的代码</span></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token string">'width: 100px; height: 200px; margin: 10px; padding: 15px;'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 或者使用类名切换</span></span>
<span class="line">element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'new-style'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重绘-repaint" tabindex="-1"><a class="header-anchor" href="#重绘-repaint"><span>重绘(Repaint)</span></a></h3>
<p>当元素的视觉样式(颜色、透明度等)发生变化，但不影响布局时，浏览器会重新绘制元素，这个过程称为重绘。</p>
<p>触发重绘的操作：</p>
<ul>
<li>修改元素颜色(color, background-color)</li>
<li>修改元素可见性(visibility)</li>
<li>修改元素阴影(box-shadow)</li>
</ul>
<p>重绘的代价比重排小，但仍应尽量避免不必要的重绘。</p>
<h2 id="浏览器优化策略" tabindex="-1"><a class="header-anchor" href="#浏览器优化策略"><span>浏览器优化策略</span></a></h2>
<p>浏览器自身实现了许多优化策略来提升渲染性能：</p>
<h3 id="_1-分层渲染" tabindex="-1"><a class="header-anchor" href="#_1-分层渲染"><span>1. 分层渲染</span></a></h3>
<p>浏览器将页面分成多个层进行绘制，有些层可以由GPU加速。</p>
<p>影响分层的CSS属性：</p>
<ul>
<li>transform</li>
<li>opacity</li>
<li>position: fixed</li>
<li>will-change</li>
<li>filter</li>
</ul>
<h3 id="_2-隐式合成" tabindex="-1"><a class="header-anchor" href="#_2-隐式合成"><span>2. 隐式合成</span></a></h3>
<p>浏览器可能会将一些元素提升到独立的层以优化性能。</p>
<h3 id="_3-渲染队列" tabindex="-1"><a class="header-anchor" href="#_3-渲染队列"><span>3. 渲染队列</span></a></h3>
<p>浏览器会将多个样式更改合并到一个渲染队列中，一次性处理，减少重排和重绘的次数。</p>
<h2 id="性能优化实践" tabindex="-1"><a class="header-anchor" href="#性能优化实践"><span>性能优化实践</span></a></h2>
<p>基于浏览器渲染原理，我们可以采取以下措施优化网页性能：</p>
<h3 id="_1-减少重排和重绘" tabindex="-1"><a class="header-anchor" href="#_1-减少重排和重绘"><span>1. 减少重排和重绘</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 避免频繁操作DOM</span></span>
<span class="line"><span class="token comment">// 糟糕的做法</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token string">'&lt;div>'</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">'&lt;/div>'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 优化的做法</span></span>
<span class="line"><span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  div<span class="token punctuation">.</span>textContent <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">  fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-利用css动画和transform" tabindex="-1"><a class="header-anchor" href="#_2-利用css动画和transform"><span>2. 利用CSS动画和transform</span></a></h3>
<p>使用CSS transform和opacity进行动画，而不是修改元素的位置和大小属性。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 糟糕的动画方式 - 会触发重排 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> bad-animation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 优化的动画方式 - 仅触发合成 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> good-animation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-优化css选择器" tabindex="-1"><a class="header-anchor" href="#_3-优化css选择器"><span>3. 优化CSS选择器</span></a></h3>
<p>复杂的CSS选择器会增加CSSOM构建时间。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 复杂低效的选择器 */</span></span>
<span class="line"><span class="token selector">body > div.container > ul > li > a.link</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 更高效的选择器 */</span></span>
<span class="line"><span class="token selector">.link</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-延迟加载和懒加载" tabindex="-1"><a class="header-anchor" href="#_4-延迟加载和懒加载"><span>4. 延迟加载和懒加载</span></a></h3>
<p>非关键资源可以延迟加载，图片可以实现懒加载。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 图片懒加载 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>actual-image.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Lazy loaded image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> lazyImages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'img.lazy'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'IntersectionObserver'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> lazyImageObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">let</span> lazyImage <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span></span>
<span class="line">          lazyImage<span class="token punctuation">.</span>src <span class="token operator">=</span> lazyImage<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span></span>
<span class="line">          lazyImage<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'lazy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          lazyImageObserver<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>lazyImage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    lazyImages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">lazyImage</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      lazyImageObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>lazyImage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-使用合适的渲染提示" tabindex="-1"><a class="header-anchor" href="#_5-使用合适的渲染提示"><span>5. 使用合适的渲染提示</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 告诉浏览器这个元素将要改变transform属性 */</span></span>
<span class="line"><span class="token selector">.animated</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 用于经常变化的元素，但不要过度使用 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能检测工具" tabindex="-1"><a class="header-anchor" href="#性能检测工具"><span>性能检测工具</span></a></h2>
<ul>
<li><strong>Chrome DevTools Performance面板</strong> - 分析渲染性能</li>
<li><strong>Lighthouse</strong> - 网页性能审计工具</li>
<li><strong>WebPageTest</strong> - 在线性能测试工具</li>
</ul>
<h2 id="从项目中学到的经验" tabindex="-1"><a class="header-anchor" href="#从项目中学到的经验"><span>从项目中学到的经验</span></a></h2>
<p>在我参与的字节跳动飞书项目中，我们遇到一个长列表渲染性能问题。通过性能分析发现，频繁的DOM操作和样式计算导致了渲染卡顿。我们采取了以下措施：</p>
<ol>
<li>使用虚拟滚动技术，只渲染可视区域的DOM元素</li>
<li>将动画效果从JS改为CSS transform实现</li>
<li>使用<code v-pre>will-change</code>属性提前告知浏览器哪些元素会变化</li>
<li>将复杂计算放入Web Worker中，避免阻塞主线程</li>
</ol>
<p>这些优化将列表滚动从原来的约15fps提升到了稳定的60fps，极大改善了用户体验。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>浏览器渲染是一个复杂的过程，包括构建DOM树和CSSOM树、创建渲染树、布局、绘制和合成等步骤。了解这些原理可以帮助我们编写更高效的前端代码，优化用户体验。</p>
<p>关键优化策略包括：</p>
<ul>
<li>减少DOM操作，特别是批量修改</li>
<li>避免强制同步布局</li>
<li>使用CSS transform和opacity进行动画</li>
<li>懒加载非关键资源</li>
<li>合理使用渲染提示</li>
</ul>
<p>掌握浏览器渲染原理是成为高级前端开发者的必要条件，它不仅能帮助我们解决性能问题，还能使我们在架构设计和代码编写时做出更明智的决策。</p>
<h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源"><span>参考资源</span></a></h2>
<ul>
<li><a href="https://developers.google.com/web/fundamentals/performance/rendering" target="_blank" rel="noopener noreferrer">渲染性能 - Google Web Fundamentals<ExternalLinkIcon/></a></li>
<li><a href="https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/" target="_blank" rel="noopener noreferrer">浏览器的工作原理 - HTML5 Rocks<ExternalLinkIcon/></a></li>
<li><a href="https://csstriggers.com/" target="_blank" rel="noopener noreferrer">CSS Triggers<ExternalLinkIcon/></a> - 查看哪些CSS属性会触发重排、重绘或合成</li>
<li><a href="https://hpbn.co/" target="_blank" rel="noopener noreferrer">High Performance Browser Networking<ExternalLinkIcon/></a> - Ilya Grigorik著</li>
</ul>
</div></template>



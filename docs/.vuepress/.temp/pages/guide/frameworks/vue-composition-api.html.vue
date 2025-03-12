<template><div><h1 id="vue-composition-api实战指南" tabindex="-1"><a class="header-anchor" href="#vue-composition-api实战指南"><span>Vue Composition API实战指南</span></a></h1>
<p>Vue 3的Composition API是一种全新的组织组件逻辑的方式，提供了比Options API更灵活的代码组织和逻辑复用能力。本文将深入探讨如何在实际项目中应用Composition API。</p>
<h2 id="为什么需要composition-api" tabindex="-1"><a class="header-anchor" href="#为什么需要composition-api"><span>为什么需要Composition API</span></a></h2>
<p>在开发大型Vue应用时，Options API存在几个痛点：</p>
<ol>
<li><strong>相关逻辑分散</strong> - 一个功能的代码被拆分到不同选项中(data, methods, computed等)</li>
<li><strong>代码复用困难</strong> - mixins存在命名冲突、来源不清等问题</li>
<li><strong>TypeScript支持有限</strong> - Options API难以提供完整的类型推导</li>
</ol>
<p>Composition API通过将相关逻辑组合在一起，解决了这些问题。</p>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用"><span>基础使用</span></a></h2>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Count: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Double count: {{ doubleCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 响应式状态</span></span>
<span class="line">    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 方法</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token punctuation">.</span>value<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 计算属性</span></span>
<span class="line">    <span class="token keyword">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 返回要暴露给模板的内容</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token punctuation">,</span></span>
<span class="line">      increment<span class="token punctuation">,</span></span>
<span class="line">      doubleCount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期钩子" tabindex="-1"><a class="header-anchor" href="#生命周期钩子"><span>生命周期钩子</span></a></h2>
<p>Composition API提供了等效的生命周期钩子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUpdated<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component mounted'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component updated'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Component unmounted'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应式系统" tabindex="-1"><a class="header-anchor" href="#响应式系统"><span>响应式系统</span></a></h2>
<p>Vue 3的响应式系统基于ES6 Proxy，主要包括以下API：</p>
<ul>
<li><code v-pre>ref</code> - 适用于基本类型数据</li>
<li><code v-pre>reactive</code> - 适用于对象类型数据</li>
<li><code v-pre>toRefs</code> - 将响应式对象解构为独立的响应式属性</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ref用于基本类型</span></span>
<span class="line">    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// reactive用于对象</span></span>
<span class="line">    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// computed</span></span>
<span class="line">    <span class="token keyword">const</span> doubleAge <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>age <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// watch</span></span>
<span class="line">    <span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Count changed from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>oldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 使用toRefs解构，保持响应性</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token punctuation">,</span></span>
<span class="line">      <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      doubleAge</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑复用-组合式函数" tabindex="-1"><a class="header-anchor" href="#逻辑复用-组合式函数"><span>逻辑复用：组合式函数</span></a></h2>
<p>Composition API最大的优势在于逻辑复用。我们可以创建&quot;组合式函数&quot;(Composables)来封装和复用有状态的逻辑：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// useCounter.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token parameter">initialValue <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token punctuation">.</span>value<span class="token operator">++</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token punctuation">.</span>value<span class="token operator">--</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token punctuation">,</span></span>
<span class="line">    increment<span class="token punctuation">,</span></span>
<span class="line">    decrement<span class="token punctuation">,</span></span>
<span class="line">    doubleCount</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中使用：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Count: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Double: {{ doubleCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useCounter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./composables/useCounter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 直接使用组合式函数</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> increment<span class="token punctuation">,</span> decrement<span class="token punctuation">,</span> doubleCount <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCounter</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token punctuation">,</span></span>
<span class="line">      increment<span class="token punctuation">,</span></span>
<span class="line">      decrement<span class="token punctuation">,</span></span>
<span class="line">      doubleCount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实战案例-数据获取与加载状态" tabindex="-1"><a class="header-anchor" href="#实战案例-数据获取与加载状态"><span>实战案例：数据获取与加载状态</span></a></h2>
<p>创建一个处理数据获取的组合式函数：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// useFetch.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">    error<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Network response was not ok'</span><span class="token punctuation">)</span></span>
<span class="line">      data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      error<span class="token punctuation">.</span>value <span class="token operator">=</span> err<span class="token punctuation">.</span>message</span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 初始加载</span></span>
<span class="line">  <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token punctuation">,</span></span>
<span class="line">    error<span class="token punctuation">,</span></span>
<span class="line">    loading<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">refresh</span><span class="token operator">:</span> fetchData</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中使用：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Error: {{ error }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ data.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ data.body }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>刷新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./composables/useFetch'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> refresh <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts/1'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      data<span class="token punctuation">,</span></span>
<span class="line">      error<span class="token punctuation">,</span></span>
<span class="line">      loading<span class="token punctuation">,</span></span>
<span class="line">      refresh</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span><script setup>语法</span></a></h2>
<p>在Vue 3.2中，引入了更简洁的<code v-pre>&lt;script setup&gt;</code>语法：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Count: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Double: {{ doubleCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 直接在顶层定义响应式状态</span></span>
<span class="line"><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 直接定义函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  count<span class="token punctuation">.</span>value<span class="token operator">++</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 直接定义计算属性</span></span>
<span class="line"><span class="token keyword">const</span> doubleCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 不需要return，所有顶层变量都会自动暴露给模板</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="与typescript结合" tabindex="-1"><a class="header-anchor" href="#与typescript结合"><span>与TypeScript结合</span></a></h2>
<p>Composition API与TypeScript结合使用非常自然：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义类型</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> number</span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string</span>
<span class="line">  <span class="token literal-property property">email</span><span class="token operator">:</span> string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 指定ref类型</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> ref<span class="token operator">&lt;</span>User <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 加载用户数据</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadUser</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.example.com/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  user<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 计算属性也有正确的类型推导</span></span>
<span class="line"><span class="token keyword">const</span> userName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>value<span class="token operator">?.</span>name <span class="token operator">||</span> <span class="token string">'Unknown'</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践与注意事项" tabindex="-1"><a class="header-anchor" href="#最佳实践与注意事项"><span>最佳实践与注意事项</span></a></h2>
<ol>
<li>
<p><strong>组织代码</strong> - 按功能而非选项类型组织代码</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 用户功能相关</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> user<span class="token punctuation">,</span> updateUser <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useUser</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>userId<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 权限相关</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> canEdit<span class="token punctuation">,</span> canDelete <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePermissions</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 表单相关</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> form<span class="token punctuation">,</span> validate<span class="token punctuation">,</span> submitForm <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>避免过早抽象</strong> - 不要为了使用组合式函数而使用它，当看到明确的重复模式时再抽象</p>
</li>
<li>
<p><strong>保持组合式函数小而专注</strong> - 每个组合式函数应该只关注一个功能</p>
</li>
<li>
<p><strong>明确命名约定</strong> - 组合式函数通常以&quot;use&quot;开头</p>
</li>
<li>
<p><strong>处理响应式解构</strong> - 使用<code v-pre>toRefs</code>保持解构后的响应性</p>
</li>
</ol>
<h2 id="实际项目中的应用" tabindex="-1"><a class="header-anchor" href="#实际项目中的应用"><span>实际项目中的应用</span></a></h2>
<p>在我参与的字节跳动飞书人事项目中，我们大量使用Composition API重构了原有代码，主要优势包括：</p>
<ol>
<li>更好的代码组织，相关逻辑集中在一起</li>
<li>跨组件复用逻辑变得简单</li>
<li>与TypeScript结合提供了更好的类型安全</li>
<li>减少了组件大小，提高了可维护性</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Composition API为Vue开发引入了一种全新的思维方式，特别适合构建和维护复杂的大型应用。通过组合式函数，我们可以创建更模块化、更可测试的代码，并实现更优雅的逻辑复用。</p>
<p>虽然学习曲线可能较陡，但掌握Composition API将显著提升您的Vue开发效率和代码质量。对于新项目，我强烈推荐使用这种方式开发Vue应用。</p>
<h2 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h2>
<ul>
<li><a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">Vue 3官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">Vue Composition API RFC<ExternalLinkIcon/></a></li>
<li><a href="https://vueuse.org/" target="_blank" rel="noopener noreferrer">VueUse<ExternalLinkIcon/></a> - 基于Composition API的实用工具集合</li>
</ul>
</div></template>



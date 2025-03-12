<template><div><h1 id="redux完全指南" tabindex="-1"><a class="header-anchor" href="#redux完全指南"><span>Redux完全指南</span></a></h1>
<p>Redux是JavaScript应用的可预测状态容器，尤其适用于React应用。它帮助你编写行为一致、易于测试的应用，并提供出色的开发体验。本文将深入介绍Redux的核心概念、工作原理和最佳实践。</p>
<h2 id="为什么需要redux" tabindex="-1"><a class="header-anchor" href="#为什么需要redux"><span>为什么需要Redux</span></a></h2>
<p>在大型React应用中，组件状态管理变得复杂时，以下问题开始显现：</p>
<ol>
<li><strong>状态分散</strong> - 状态分布在多个组件中，难以追踪和管理</li>
<li><strong>状态共享困难</strong> - 需要通过props多层传递或使用Context API</li>
<li><strong>状态变化不可预测</strong> - 多个组件可能以不同方式修改同一状态</li>
<li><strong>调试困难</strong> - 无法轻松回溯状态变化</li>
</ol>
<p>Redux通过集中管理状态解决了这些问题。</p>
<h2 id="redux核心概念" tabindex="-1"><a class="header-anchor" href="#redux核心概念"><span>Redux核心概念</span></a></h2>
<p>Redux架构基于三个基本原则：</p>
<ol>
<li><strong>单一数据源</strong> - 整个应用的状态存储在单个store的对象树中</li>
<li><strong>状态只读</strong> - 唯一改变状态的方法是触发action</li>
<li><strong>使用纯函数修改</strong> - 使用reducer纯函数描述状态变化</li>
</ol>
<h3 id="_1-store" tabindex="-1"><a class="header-anchor" href="#_1-store"><span>1. Store</span></a></h3>
<p>Store是Redux的核心，它保存整个应用的状态树：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">'./reducers'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-actions" tabindex="-1"><a class="header-anchor" href="#_2-actions"><span>2. Actions</span></a></h3>
<p>Actions是描述发生了什么的简单对象，它们是改变状态的唯一方式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Action类型常量</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD_TODO</span> <span class="token operator">=</span> <span class="token string">'ADD_TODO'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">TOGGLE_TODO</span> <span class="token operator">=</span> <span class="token string">'TOGGLE_TODO'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Action创建函数</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_TODO</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      text<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">TOGGLE_TODO</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-reducers" tabindex="-1"><a class="header-anchor" href="#_3-reducers"><span>3. Reducers</span></a></h3>
<p>Reducers指定状态如何响应actions变化。它是一个纯函数，接收先前的状态和action，返回新状态：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADD_TODO</span><span class="token punctuation">,</span> <span class="token constant">TOGGLE_TODO</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./actions'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">todoReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">ADD_TODO</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>todos<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">TOGGLE_TODO</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">todos</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span></span>
<span class="line">          todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>id</span>
<span class="line">            <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">:</span> todo</span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todoReducer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于复杂应用，可以使用<code v-pre>combineReducers</code>合并多个reducer：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> todos <span class="token keyword">from</span> <span class="token string">'./todosReducer'</span></span>
<span class="line"><span class="token keyword">import</span> auth <span class="token keyword">from</span> <span class="token string">'./authReducer'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> rootReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  todos<span class="token punctuation">,</span></span>
<span class="line">  auth</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> rootReducer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux数据流" tabindex="-1"><a class="header-anchor" href="#redux数据流"><span>Redux数据流</span></a></h2>
<p>Redux遵循严格的单向数据流模式：</p>
<ol>
<li>调用<code v-pre>store.dispatch(action)</code></li>
<li>Redux store调用reducer函数</li>
<li>根reducer将多个子reducer的结果合并成单个状态树</li>
<li>Redux store保存reducer返回的完整状态树</li>
<li>UI组件根据新状态更新</li>
</ol>
<h2 id="在react中使用redux" tabindex="-1"><a class="header-anchor" href="#在react中使用redux"><span>在React中使用Redux</span></a></h2>
<h3 id="设置react-redux" tabindex="-1"><a class="header-anchor" href="#设置react-redux"><span>设置React Redux</span></a></h3>
<p>使用<code v-pre>react-redux</code>库将Redux与React集成：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> redux react-redux</span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> redux react-redux</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="连接组件" tabindex="-1"><a class="header-anchor" href="#连接组件"><span>连接组件</span></a></h3>
<p>使用<code v-pre>Provider</code>和<code v-pre>connect</code>连接组件：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// 入口文件</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">'./reducers'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./components/App'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>rootReducer<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>connect</code>连接组件：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// TodoList.js</span></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../actions'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> todos<span class="token punctuation">,</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    <span class="token function">addTodo</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setText</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Add Todo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span></span>
<span class="line">            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">todos</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todos</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> mapDispatchToProps <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  addTodo<span class="token punctuation">,</span></span>
<span class="line">  toggleTodo</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>TodoList<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用react-redux-hooks" tabindex="-1"><a class="header-anchor" href="#使用react-redux-hooks"><span>使用React Redux Hooks</span></a></h3>
<p>React Redux 7.1引入了Hooks API，提供更简洁的方式连接组件：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../actions'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodo</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setText</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Add Todo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span></span>
<span class="line">            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> TodoList</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理异步操作" tabindex="-1"><a class="header-anchor" href="#处理异步操作"><span>处理异步操作</span></a></h2>
<p>Redux本身只处理同步数据流。处理异步API调用等副作用，需要中间件。</p>
<h3 id="redux-thunk" tabindex="-1"><a class="header-anchor" href="#redux-thunk"><span>Redux Thunk</span></a></h3>
<p><code v-pre>redux-thunk</code>是最简单的异步中间件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> redux-thunk</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span></span>
<span class="line"><span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">'./reducers'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span></span>
<span class="line">  rootReducer<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用thunk创建异步action：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 异步action创建器</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fetchTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_REQUEST'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/todos'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_SUCCESS'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">payload</span><span class="token operator">:</span> data</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_FAILURE'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux-saga" tabindex="-1"><a class="header-anchor" href="#redux-saga"><span>Redux Saga</span></a></h3>
<p>对于复杂的异步流程，<code v-pre>redux-saga</code>提供更强大的方案：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> redux-saga</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">'redux-saga'</span></span>
<span class="line"><span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">'./reducers'</span></span>
<span class="line"><span class="token keyword">import</span> rootSaga <span class="token keyword">from</span> <span class="token string">'./sagas'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span></span>
<span class="line">  rootReducer<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>sagaMiddleware<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>rootSaga<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写saga:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put<span class="token punctuation">,</span> takeEvery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-saga/effects'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Worker Saga</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fetchTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_REQUEST'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> <span class="token string">'/api/todos'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token keyword">yield</span> data<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_SUCCESS'</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> todos <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'FETCH_TODOS_FAILURE'</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Watcher Saga</span></span>
<span class="line"><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">todoSaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span><span class="token string">'FETCH_TODOS'</span><span class="token punctuation">,</span> fetchTodos<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todoSaga</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux-toolkit" tabindex="-1"><a class="header-anchor" href="#redux-toolkit"><span>Redux Toolkit</span></a></h2>
<p>Redux Toolkit是Redux官方推荐的工具集，简化了Redux使用：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @reduxjs/toolkit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用Redux Toolkit创建slice：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice<span class="token punctuation">,</span> createAsyncThunk <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建异步thunk</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> fetchTodos <span class="token operator">=</span> <span class="token function">createAsyncThunk</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'todos/fetchTodos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/todos'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> todosSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'todos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'idle'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> state<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">extraReducers</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">builder</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    builder</span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchTodos<span class="token punctuation">.</span>pending<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'loading'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchTodos<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'succeeded'</span></span>
<span class="line">        state<span class="token punctuation">.</span>items <span class="token operator">=</span> action<span class="token punctuation">.</span>payload</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">addCase</span><span class="token punctuation">(</span>fetchTodos<span class="token punctuation">.</span>rejected<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">'failed'</span></span>
<span class="line">        state<span class="token punctuation">.</span>error <span class="token operator">=</span> action<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> todosSlice<span class="token punctuation">.</span>actions</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todosSlice<span class="token punctuation">.</span>reducer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置store：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span></span>
<span class="line"><span class="token keyword">import</span> todosReducer <span class="token keyword">from</span> <span class="token string">'./todosSlice'</span></span>
<span class="line"><span class="token keyword">import</span> authReducer <span class="token keyword">from</span> <span class="token string">'./authSlice'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> todosReducer<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">auth</span><span class="token operator">:</span> authReducer</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<h3 id="_1-状态规范化" tabindex="-1"><a class="header-anchor" href="#_1-状态规范化"><span>1. 状态规范化</span></a></h3>
<p>对于嵌套或关联数据，规范化状态结构：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 不好的例子 - 嵌套结构</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'JavaScript高级程序设计'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'React实战'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 好的例子 - 规范化结构</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">byId</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token literal-property property">bookIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">byId</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'JavaScript高级程序设计'</span><span class="token punctuation">,</span> <span class="token literal-property property">authorId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'React实战'</span><span class="token punctuation">,</span> <span class="token literal-property property">authorId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">allIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-选择器函数" tabindex="-1"><a class="header-anchor" href="#_2-选择器函数"><span>2. 选择器函数</span></a></h3>
<p>使用选择器(selectors)获取状态，提高重用性并封装状态结构：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// selectors.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTodos</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span>items</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTodoById</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=></span> </span>
<span class="line">  state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCompletedTodos</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> </span>
<span class="line">  state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用选择器：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getTodos<span class="token punctuation">,</span> getCompletedTodos <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../selectors'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span>getTodos<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> completedTodos <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span>getCompletedTodos<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span>总任务数<span class="token operator">:</span> <span class="token punctuation">{</span>todos<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span>已完成<span class="token operator">:</span> <span class="token punctuation">{</span>completedTodos<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span>完成率<span class="token operator">:</span> <span class="token punctuation">{</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>completedTodos<span class="token punctuation">.</span>length <span class="token operator">/</span> todos<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-中间件优化" tabindex="-1"><a class="header-anchor" href="#_3-中间件优化"><span>3. 中间件优化</span></a></h3>
<p>对于日志、崩溃报告等需求，使用中间件而非修改reducer：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span></span>
<span class="line"><span class="token keyword">import</span> logger <span class="token keyword">from</span> <span class="token string">'redux-logger'</span></span>
<span class="line"><span class="token keyword">import</span> rootReducer <span class="token keyword">from</span> <span class="token string">'./reducers'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">crashReporter</span> <span class="token operator">=</span> <span class="token parameter">store</span> <span class="token operator">=></span> <span class="token parameter">next</span> <span class="token operator">=></span> <span class="token parameter">action</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Caught an exception!'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 发送到错误跟踪服务</span></span>
<span class="line">    Sentry<span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">extra</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        action<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">state</span><span class="token operator">:</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">throw</span> err</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span></span>
<span class="line">  rootReducer<span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> crashReporter<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际项目示例" tabindex="-1"><a class="header-anchor" href="#实际项目示例"><span>实际项目示例</span></a></h2>
<p>以下是一个电子商务应用的Redux结构示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── store/</span>
<span class="line">│   ├── index.js         # Store配置</span>
<span class="line">│   ├── rootReducer.js   # 根Reducer</span>
<span class="line">│   ├── auth/            # 认证模块</span>
<span class="line">│   │   ├── slice.js     # Redux Toolkit slice</span>
<span class="line">│   │   ├── selectors.js # 选择器</span>
<span class="line">│   │   └── thunks.js    # 异步thunks</span>
<span class="line">│   ├── products/        # 产品模块</span>
<span class="line">│   │   ├── slice.js</span>
<span class="line">│   │   ├── selectors.js</span>
<span class="line">│   │   └── thunks.js</span>
<span class="line">│   └── cart/            # 购物车模块</span>
<span class="line">│       ├── slice.js</span>
<span class="line">│       ├── selectors.js</span>
<span class="line">│       └── thunks.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我在字节跳动的工作中，我们使用Redux管理大型数据分析平台的状态。通过遵循模块化结构和严格的数据流原则，即使在10+开发人员同时工作的情况下，我们也能保持应用的可维护性和可预测性。</p>
<h2 id="迁移到redux-toolkit" tabindex="-1"><a class="header-anchor" href="#迁移到redux-toolkit"><span>迁移到Redux Toolkit</span></a></h2>
<p>如果你有现有的Redux代码库，可以逐步迁移到Redux Toolkit：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 旧代码</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">ADD_TODO</span> <span class="token operator">=</span> <span class="token string">'ADD_TODO'</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">TOGGLE_TODO</span> <span class="token operator">=</span> <span class="token string">'TOGGLE_TODO'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Action创建器</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addTodo</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_TODO</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> text <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Reducer</span></span>
<span class="line"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">todosReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">ADD_TODO</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span>state<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>todos<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// ...其他case</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用Redux Toolkit重写</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> todosSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'todos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> todosSlice<span class="token punctuation">.</span>actions</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todosSlice<span class="token punctuation">.</span>reducer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux-vs-context-api" tabindex="-1"><a class="header-anchor" href="#redux-vs-context-api"><span>Redux vs. Context API</span></a></h2>
<p>React的Context API提供了共享状态的原生方法，但与Redux相比有不同权衡：</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>Redux</th>
<th>Context API</th>
</tr>
</thead>
<tbody>
<tr>
<td>状态管理</td>
<td>集中式</td>
<td>分散式</td>
</tr>
<tr>
<td>调试工具</td>
<td>强大</td>
<td>有限</td>
</tr>
<tr>
<td>中间件支持</td>
<td>丰富</td>
<td>需自行实现</td>
</tr>
<tr>
<td>性能优化</td>
<td>细粒度订阅</td>
<td>较广泛的重渲染</td>
</tr>
<tr>
<td>学习曲线</td>
<td>陡峭</td>
<td>平缓</td>
</tr>
<tr>
<td>适用场景</td>
<td>大型应用</td>
<td>小到中型应用</td>
</tr>
</tbody>
</table>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Redux提供了一种可预测的状态管理方式，尤其适合复杂的React应用。其核心概念——单一数据源、只读状态和纯函数reducer——共同构成了一个强大而灵活的状态管理解决方案。</p>
<p>虽然学习曲线较陡，但Redux的长期收益显著。随着Redux Toolkit的发展，使用Redux变得更加简单和高效。</p>
<p>在选择状态管理解决方案时，请考虑项目规模、团队熟悉度和应用需求。对于大型、复杂的应用，Redux仍然是一个值得投资的解决方案。</p>
<h2 id="学习资源" tabindex="-1"><a class="header-anchor" href="#学习资源"><span>学习资源</span></a></h2>
<ul>
<li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">Redux Toolkit文档<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank" rel="noopener noreferrer">Redux DevTools Extension<ExternalLinkIcon/></a></li>
<li><a href="https://redux.js.org/style-guide/style-guide" target="_blank" rel="noopener noreferrer">Redux Style Guide<ExternalLinkIcon/></a></li>
<li><a href="https://redux.js.org/faq" target="_blank" rel="noopener noreferrer">Redux常见问题<ExternalLinkIcon/></a></li>
</ul>
</div></template>



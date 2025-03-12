<template><div><h1 id="状态管理方案对比" tabindex="-1"><a class="header-anchor" href="#状态管理方案对比"><span>状态管理方案对比</span></a></h1>
<p>状态管理是现代前端框架中的重要组成部分，选择合适的状态管理方案对于应用的可维护性和性能至关重要。本文将对比主流前端框架中的各种状态管理方案，帮助你为项目选择最合适的解决方案。</p>
<h2 id="状态管理的基本需求" tabindex="-1"><a class="header-anchor" href="#状态管理的基本需求"><span>状态管理的基本需求</span></a></h2>
<p>无论使用哪种框架，状态管理通常需要解决以下问题：</p>
<ol>
<li><strong>全局状态访问</strong> - 跨组件/页面共享数据</li>
<li><strong>状态更新机制</strong> - 如何修改状态并保持一致性</li>
<li><strong>状态组织</strong> - 如何组织和结构化复杂状态</li>
<li><strong>状态追踪</strong> - 调试和追踪状态变化</li>
<li><strong>性能优化</strong> - 避免不必要的更新和渲染</li>
</ol>
<h2 id="react状态管理方案" tabindex="-1"><a class="header-anchor" href="#react状态管理方案"><span>React状态管理方案</span></a></h2>
<h3 id="_1-context-api-usereducer" tabindex="-1"><a class="header-anchor" href="#_1-context-api-usereducer"><span>1. Context API + useReducer</span></a></h3>
<p>React内置的解决方案，适合中小型应用：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// 创建Context</span></span>
<span class="line"><span class="token keyword">const</span> TodoContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义reducer</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">todoReducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'ADD_TODO'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'TOGGLE_TODO'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> </span>
<span class="line">        todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload </span>
<span class="line">          <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> </span>
<span class="line">          <span class="token operator">:</span> todo</span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 提供Context</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>todoReducer<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TodoContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> todos<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TodoContext.Provider</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> todos<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>TodoContext<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> </span>
<span class="line">          <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'TOGGLE_TODO'</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">        <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>无需额外依赖</li>
<li>简单易学</li>
<li>与React紧密集成</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>性能优化需要额外工作</li>
<li>缺乏中间件支持</li>
<li>复杂应用中可能导致Context嵌套地狱</li>
</ul>
<h3 id="_2-redux" tabindex="-1"><a class="header-anchor" href="#_2-redux"><span>2. Redux</span></a></h3>
<p>React生态系统中最流行的状态管理库：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token comment">// 使用Redux Toolkit简化Redux代码</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> configureStore<span class="token punctuation">,</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider<span class="token punctuation">,</span> useSelector<span class="token punctuation">,</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建slice</span></span>
<span class="line"><span class="token keyword">const</span> todoSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'todos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> state<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 导出actions</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> todoSlice<span class="token punctuation">.</span>actions</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">configureStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">reducer</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> todoSlice<span class="token punctuation">.</span>reducer</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在应用中提供store</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TodoApp</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">useSelector</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> </span>
<span class="line">          <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">        <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>成熟稳定的生态系统</li>
<li>强大的开发工具</li>
<li>中间件系统</li>
<li>严格的单向数据流</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>入门学习曲线较陡</li>
<li>模板代码较多(虽然Redux Toolkit已大幅改善)</li>
<li>小型应用可能显得过重</li>
</ul>
<h3 id="_3-mobx" tabindex="-1"><a class="header-anchor" href="#_3-mobx"><span>3. MobX</span></a></h3>
<p>基于观察者模式的状态管理库：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx-react-lite'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoStore</span> <span class="token punctuation">{</span></span>
<span class="line">  todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">completedCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">const</span> TodoList <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token punctuation">{</span>todoStore<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> </span>
<span class="line">            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> todoStore<span class="token punctuation">.</span><span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">已完成: </span><span class="token punctuation">{</span>todoStore<span class="token punctuation">.</span>completedCount<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>更少的模板代码</li>
<li>自动跟踪依赖</li>
<li>响应式编程模型</li>
<li>易于集成到现有代码</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>状态可变性可能导致错误</li>
<li>调试相对困难</li>
<li>与React理念相悖(声明式vs响应式)</li>
</ul>
<h3 id="_4-recoil" tabindex="-1"><a class="header-anchor" href="#_4-recoil"><span>4. Recoil</span></a></h3>
<p>Facebook开发的实验性状态管理库：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> </span>
<span class="line">  RecoilRoot<span class="token punctuation">,</span> </span>
<span class="line">  atom<span class="token punctuation">,</span> </span>
<span class="line">  selector<span class="token punctuation">,</span> </span>
<span class="line">  useRecoilState<span class="token punctuation">,</span> </span>
<span class="line">  useRecoilValue </span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'recoil'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义atoms</span></span>
<span class="line"><span class="token keyword">const</span> todosState <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'todosState'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义selector</span></span>
<span class="line"><span class="token keyword">const</span> todosStatsState <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'todosStatsState'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>todosState<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> totalCount <span class="token operator">=</span> todos<span class="token punctuation">.</span>length</span>
<span class="line">    <span class="token keyword">const</span> completedCount <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length</span>
<span class="line">    <span class="token keyword">const</span> uncompletedCount <span class="token operator">=</span> totalCount <span class="token operator">-</span> completedCount</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      totalCount<span class="token punctuation">,</span></span>
<span class="line">      completedCount<span class="token punctuation">,</span></span>
<span class="line">      uncompletedCount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 提供Recoil根节点</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RecoilRoot</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TodoApp</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RecoilRoot</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span>todosState<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>todosStatsState<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">toggleTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> </span>
<span class="line">      todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id </span>
<span class="line">        <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> </span>
<span class="line">        <span class="token operator">:</span> todo</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> </span>
<span class="line">            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">总数: </span><span class="token punctuation">{</span>stats<span class="token punctuation">.</span>totalCount<span class="token punctuation">}</span><span class="token plain-text">, 已完成: </span><span class="token punctuation">{</span>stats<span class="token punctuation">.</span>completedCount<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>原子化状态设计</li>
<li>良好的性能优化</li>
<li>异步数据处理支持</li>
<li>Facebook官方开发</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>相对较新，生态系统不如Redux丰富</li>
<li>API可能变化(仍在实验阶段)</li>
<li>学习曲线中等</li>
</ul>
<h3 id="_5-zustand" tabindex="-1"><a class="header-anchor" href="#_5-zustand"><span>5. Zustand</span></a></h3>
<p>轻量级状态管理库：</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> create <span class="token keyword">from</span> <span class="token string">'zustand'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">const</span> useTodoStore <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>todos<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> </span>
<span class="line">      todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> <span class="token operator">:</span> todo</span>
<span class="line">    <span class="token punctuation">)</span> </span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> toggleTodo <span class="token operator">=</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>toggleTodo<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> </span>
<span class="line">          <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span></span>
<span class="line">          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line">        <span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">          </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>极其轻量级</li>
<li>API简洁</li>
<li>选择性订阅(性能优势)</li>
<li>无Provider要求</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>较少的约束可能导致代码不一致</li>
<li>生态系统相对较小</li>
<li>复杂应用可能需要更多结构</li>
</ul>
<h2 id="vue状态管理方案" tabindex="-1"><a class="header-anchor" href="#vue状态管理方案"><span>Vue状态管理方案</span></a></h2>
<h3 id="_1-vuex" tabindex="-1"><a class="header-anchor" href="#_1-vuex"><span>1. Vuex</span></a></h3>
<p>Vue的官方状态管理库：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">completedTodos</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">ADD_TODO</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">TOGGLE_TODO</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'ADD_TODO'</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'TOGGLE_TODO'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在Vue组件中使用</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  store<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>todos</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'toggleTodo'</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>与Vue紧密集成</li>
<li>集中式状态管理</li>
<li>开发工具支持</li>
<li>模块化结构</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>模板代码较多</li>
<li>对TypeScript支持有限</li>
<li>Vue 3推荐使用Pinia</li>
</ul>
<h3 id="_2-pinia" tabindex="-1"><a class="header-anchor" href="#_2-pinia"><span>2. Pinia</span></a></h3>
<p>Vue 3的官方推荐状态管理库：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Pinia</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义store</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useTodoStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">completedTodos</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useTodoStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./stores/todo'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">todos</span><span class="token operator">:</span> todoStore<span class="token punctuation">.</span>todos<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">toggleTodo</span><span class="token operator">:</span> todoStore<span class="token punctuation">.</span>toggleTodo</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>轻量级</li>
<li>TypeScript支持极好</li>
<li>开发工具集成</li>
<li>简洁的API(无mutations)</li>
<li>模块化设计</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>相对较新</li>
<li>对Vue 2需要额外适配</li>
</ul>
<h3 id="_3-vue-composition-api" tabindex="-1"><a class="header-anchor" href="#_3-vue-composition-api"><span>3. Vue Composition API</span></a></h3>
<p>Vue 3的Composition API可用于构建自定义状态管理：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Composition API创建共享状态</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 状态</span></span>
<span class="line">  <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 计算属性</span></span>
<span class="line">  <span class="token keyword">const</span> completedTodos <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> </span>
<span class="line">    todos<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 方法</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    todos<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todo <span class="token operator">=</span> todos<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 导出只读状态和方法</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token function">readonly</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    completedTodos<span class="token punctuation">,</span></span>
<span class="line">    addTodo<span class="token punctuation">,</span></span>
<span class="line">    toggleTodo</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建全局单例</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token function">useTodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'todoStore'</span><span class="token punctuation">,</span> todoStore<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在组件中使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'todoStore'</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">todos</span><span class="token operator">:</span> todoStore<span class="token punctuation">.</span>todos<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">toggleTodo</span><span class="token operator">:</span> todoStore<span class="token punctuation">.</span>toggleTodo</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>无需额外库</li>
<li>灵活性高</li>
<li>与组件逻辑相同的编程模型</li>
<li>良好的TypeScript支持</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>缺乏标准化约束</li>
<li>需要自行实现开发工具集成</li>
<li>大型应用可能缺乏结构</li>
</ul>
<h2 id="跨框架状态管理" tabindex="-1"><a class="header-anchor" href="#跨框架状态管理"><span>跨框架状态管理</span></a></h2>
<h3 id="xstate" tabindex="-1"><a class="header-anchor" href="#xstate"><span>XState</span></a></h3>
<p>基于状态机的状态管理库，可用于任何框架：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createMachine<span class="token punctuation">,</span> interpret <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'xstate'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建状态机</span></span>
<span class="line"><span class="token keyword">const</span> todoMachine <span class="token operator">=</span> <span class="token function">createMachine</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'todos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initial</span><span class="token operator">:</span> <span class="token string">'idle'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">states</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token constant">LOADED</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'idle'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token string">'setTodos'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">ADD_TODO</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token string">'addTodo'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">TOGGLE_TODO</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token string">'toggleTodo'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">LOAD_TODOS</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'loading'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      context<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> event<span class="token punctuation">.</span>text<span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> context<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> event<span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">setTodos</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      context<span class="token punctuation">.</span>todos <span class="token operator">=</span> event<span class="token punctuation">.</span>todos</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建service</span></span>
<span class="line"><span class="token keyword">const</span> todoService <span class="token operator">=</span> <span class="token function">interpret</span><span class="token punctuation">(</span>todoMachine<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在React中使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMachine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@xstate/react'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> send<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useMachine</span><span class="token punctuation">(</span>todoMachine<span class="token punctuation">)</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>ul<span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">{</span>state<span class="token punctuation">.</span>context<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>li </span>
<span class="line">            key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span>
<span class="line">            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'TOGGLE_TODO'</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textDecoration</span><span class="token operator">:</span> todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">'line-through'</span> <span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">></span></span>
<span class="line">            <span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在Vue中使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMachine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@xstate/vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> send <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMachine</span><span class="token punctuation">(</span>todoMachine<span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">todos</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>context<span class="token punctuation">.</span>todos<span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'TOGGLE_TODO'</span><span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优点：</strong></p>
<ul>
<li>框架无关</li>
<li>基于状态机的可预测性</li>
<li>可视化开发工具</li>
<li>处理复杂状态转换</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>学习曲线较陡</li>
<li>简单应用可能过度设计</li>
<li>较多模板代码</li>
</ul>
<h2 id="选择建议" tabindex="-1"><a class="header-anchor" href="#选择建议"><span>选择建议</span></a></h2>
<h3 id="小型应用" tabindex="-1"><a class="header-anchor" href="#小型应用"><span>小型应用</span></a></h3>
<ul>
<li><strong>React</strong>: Context API + useReducer 或 Zustand</li>
<li><strong>Vue</strong>: Composition API 或 Pinia</li>
</ul>
<h3 id="中型应用" tabindex="-1"><a class="header-anchor" href="#中型应用"><span>中型应用</span></a></h3>
<ul>
<li><strong>React</strong>: Redux Toolkit 或 Zustand</li>
<li><strong>Vue</strong>: Pinia</li>
</ul>
<h3 id="大型应用" tabindex="-1"><a class="header-anchor" href="#大型应用"><span>大型应用</span></a></h3>
<ul>
<li><strong>React</strong>: Redux Toolkit 或 Recoil</li>
<li><strong>Vue</strong>: Pinia</li>
<li><strong>跨框架</strong>: 考虑XState处理复杂状态逻辑</li>
</ul>
<h3 id="团队因素" tabindex="-1"><a class="header-anchor" href="#团队因素"><span>团队因素</span></a></h3>
<p>除了应用规模外，还应考虑：</p>
<ol>
<li><strong>团队经验</strong> - 使用团队熟悉的技术</li>
<li><strong>学习曲线</strong> - 评估新技术的学习成本</li>
<li><strong>生态系统</strong> - 考虑工具、插件和社区支持</li>
<li><strong>未来维护</strong> - 选择有长期支持的解决方案</li>
</ol>
<h2 id="在字节跳动的实践经验" tabindex="-1"><a class="header-anchor" href="#在字节跳动的实践经验"><span>在字节跳动的实践经验</span></a></h2>
<p>在我在字节跳动的工作中，我们在不同项目中采用了不同的状态管理方案：</p>
<ol>
<li><strong>数据密集型应用</strong>: 使用Redux，利用其强大的中间件系统处理复杂数据流和API调用</li>
<li><strong>中后台管理系统</strong>: 使用Pinia(Vue项目)，简洁API加速开发速度</li>
<li><strong>微前端应用</strong>: 使用XState管理核心业务流程，确保跨框架一致性</li>
</ol>
<p>在实际应用中，我们发现：</p>
<ul>
<li>单一状态树并非银弹，有时混合使用局部和全局状态更合理</li>
<li>开发体验和调试工具对团队效率影响巨大</li>
<li>状态设计比具体选择哪个库更重要</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>选择状态管理方案应基于项目需求、团队经验和长期维护考虑。无论选择哪种方案，保持以下原则：</p>
<ol>
<li><strong>状态分层</strong> - 区分局部/全局状态</li>
<li><strong>单向数据流</strong> - 保持状态变更可预测</li>
<li><strong>最小化状态</strong> - 只存储必要数据</li>
<li><strong>可序列化</strong> - 便于调试和持久化</li>
</ol>
<p>最后，记住工具只是手段，解决问题才是目的。选择最适合你的团队和项目的解决方案。</p>
<h2 id="学习资源" tabindex="-1"><a class="header-anchor" href="#学习资源"><span>学习资源</span></a></h2>
<ul>
<li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener noreferrer">Vuex官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">Pinia官方文档<ExternalLinkIcon/></a></li>
<li><a href="https://xstate.js.org/docs/" target="_blank" rel="noopener noreferrer">XState文档<ExternalLinkIcon/></a></li>
<li><a href="https://reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer">React Context文档<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer">Zustand GitHub<ExternalLinkIcon/></a></li>
<li><a href="https://recoiljs.org/" target="_blank" rel="noopener noreferrer">Recoil官方文档<ExternalLinkIcon/></a></li>
</ul>
</div></template>



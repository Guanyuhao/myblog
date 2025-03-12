<template><div><h1 id="前端监控与异常处理" tabindex="-1"><a class="header-anchor" href="#前端监控与异常处理"><span>前端监控与异常处理</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#%E5%BC%95%E8%A8%80">引言</a></li>
<li><a href="#%E7%9B%91%E6%8E%A7%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84">监控系统架构</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7">性能监控</a></li>
<li><a href="#%E9%94%99%E8%AF%AF%E7%9B%91%E6%8E%A7">错误监控</a></li>
<li><a href="#%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E7%9B%91%E6%8E%A7">用户行为监控</a></li>
<li><a href="#%E7%9B%91%E6%8E%A7%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86">监控数据采集</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5%E7%AD%96%E7%95%A5">数据上报策略</a></li>
<li><a href="#%E5%90%8E%E7%AB%AF%E5%AD%98%E5%82%A8%E4%B8%8E%E5%88%86%E6%9E%90">后端存储与分析</a></li>
<li><a href="#%E5%91%8A%E8%AD%A6%E7%B3%BB%E7%BB%9F">告警系统</a></li>
<li><a href="#%E7%9B%91%E6%8E%A7%E5%8F%AF%E8%A7%86%E5%8C%96">监控可视化</a></li>
<li><a href="#%E5%AE%9E%E8%B7%B5%E6%A1%88%E4%BE%8B">实践案例</a></li>
<li><a href="#%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">最佳实践</a></li>
</ol>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>前端监控是提升用户体验和应用质量的关键环节。一个完善的前端监控系统能够帮助开发团队及时发现问题、分析根因、优化应用，从而提高用户满意度和业务转化率。本文将深入探讨前端监控系统的设计与实现，帮助开发者构建强大而高效的监控解决方案。</p>
<h3 id="为什么需要前端监控" tabindex="-1"><a class="header-anchor" href="#为什么需要前端监控"><span>为什么需要前端监控</span></a></h3>
<ul>
<li><strong>用户体验透明化</strong>：了解真实用户的操作流程和体验痛点</li>
<li><strong>问题快速定位</strong>：缩短从问题发生到发现和解决的时间</li>
<li><strong>性能持续优化</strong>：基于真实数据进行有针对性的性能改进</li>
<li><strong>业务决策支持</strong>：为产品和运营决策提供数据支持</li>
</ul>
<h2 id="监控系统架构" tabindex="-1"><a class="header-anchor" href="#监控系统架构"><span>监控系统架构</span></a></h2>
<p>一个完整的前端监控系统通常包含以下组件：</p>
<h3 id="整体架构" tabindex="-1"><a class="header-anchor" href="#整体架构"><span>整体架构</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">+----------------+     +----------------+     +----------------+</span>
<span class="line">|                |     |                |     |                |</span>
<span class="line">|  数据采集层    | --> |  数据处理层    | --> |  数据应用层    |</span>
<span class="line">|                |     |                |     |                |</span>
<span class="line">+----------------+     +----------------+     +----------------+</span>
<span class="line">       |                      |                      |</span>
<span class="line">       v                      v                      v</span>
<span class="line">  客户端SDK             数据清洗/聚合          可视化展示</span>
<span class="line">  采集插件             实时/离线计算           告警系统</span>
<span class="line">  埋点管理               数据存储             数据分析</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心模块" tabindex="-1"><a class="header-anchor" href="#核心模块"><span>核心模块</span></a></h3>
<ol>
<li><strong>数据采集SDK</strong>：在客户端收集各类监控数据</li>
<li><strong>数据上报服务</strong>：将数据安全高效地传输到服务端</li>
<li><strong>数据处理引擎</strong>：清洗、聚合和分析监控数据</li>
<li><strong>数据存储中心</strong>：高效存储海量监控数据</li>
<li><strong>告警系统</strong>：根据预设规则触发告警</li>
<li><strong>可视化平台</strong>：直观展示监控数据</li>
</ol>
<h3 id="系统设计原则" tabindex="-1"><a class="header-anchor" href="#系统设计原则"><span>系统设计原则</span></a></h3>
<ul>
<li><strong>低侵入性</strong>：监控代码不应影响业务逻辑和用户体验</li>
<li><strong>可扩展性</strong>：支持自定义监控指标和灵活的数据维度</li>
<li><strong>容错性</strong>：监控系统本身的故障不应影响主应用功能</li>
<li><strong>实时性</strong>：关键异常需要实时检测和报告</li>
<li><strong>数据安全</strong>：确保用户隐私和数据合规</li>
</ul>
<h2 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控"><span>性能监控</span></a></h2>
<h3 id="web-vitals监控" tabindex="-1"><a class="header-anchor" href="#web-vitals监控"><span>Web Vitals监控</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 监控核心Web指标</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>onCLS<span class="token punctuation">,</span> onFID<span class="token punctuation">,</span> onLCP<span class="token punctuation">,</span> onTTFB<span class="token punctuation">,</span> onINP<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'web-vitals'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> delta<span class="token punctuation">,</span> id<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token punctuation">,</span> delta<span class="token punctuation">,</span> id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用Beacon API进行数据上报</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      body<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册监控</span></span>
<span class="line"><span class="token function">onCLS</span><span class="token punctuation">(</span>sendToAnalytics<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">onFID</span><span class="token punctuation">(</span>sendToAnalytics<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">onLCP</span><span class="token punctuation">(</span>sendToAnalytics<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">onTTFB</span><span class="token punctuation">(</span>sendToAnalytics<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">onINP</span><span class="token punctuation">(</span>sendToAnalytics<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义性能指标" tabindex="-1"><a class="header-anchor" href="#自定义性能指标"><span>自定义性能指标</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 监控自定义性能指标</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">PerformanceMonitor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>marks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">startMark</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>marks<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">startTime</span><span class="token operator">:</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">endMark</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>marks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> duration <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>marks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span>startTime<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendMetric</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> duration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>marks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">sendMetric</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 上报自定义指标</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'custom-performance'</span><span class="token punctuation">,</span></span>
<span class="line">      name<span class="token punctuation">,</span> </span>
<span class="line">      value</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据上报逻辑</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> monitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceMonitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">monitor<span class="token punctuation">.</span><span class="token function">startMark</span><span class="token punctuation">(</span><span class="token string">'data-loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  monitor<span class="token punctuation">.</span><span class="token function">endMark</span><span class="token punctuation">(</span><span class="token string">'data-loading'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源加载监控" tabindex="-1"><a class="header-anchor" href="#资源加载监控"><span>资源加载监控</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 监控资源加载性能</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">monitorResourceLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> entries <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>initiatorType <span class="token operator">===</span> <span class="token string">'script'</span> <span class="token operator">||</span> </span>
<span class="line">          entry<span class="token punctuation">.</span>initiatorType <span class="token operator">===</span> <span class="token string">'css'</span> <span class="token operator">||</span> </span>
<span class="line">          entry<span class="token punctuation">.</span>initiatorType <span class="token operator">===</span> <span class="token string">'img'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'resource'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">duration</span><span class="token operator">:</span> entry<span class="token punctuation">.</span>duration<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">size</span><span class="token operator">:</span> entry<span class="token punctuation">.</span>transferSize<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">initiatorType</span><span class="token operator">:</span> entry<span class="token punctuation">.</span>initiatorType</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">entryTypes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'resource'</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误监控" tabindex="-1"><a class="header-anchor" href="#错误监控"><span>错误监控</span></a></h2>
<h3 id="javascript错误捕获" tabindex="-1"><a class="header-anchor" href="#javascript错误捕获"><span>JavaScript错误捕获</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 全局错误捕获</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'js-error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> event<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> event<span class="token punctuation">.</span>filename<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">lineno</span><span class="token operator">:</span> event<span class="token punctuation">.</span>lineno<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">colno</span><span class="token operator">:</span> event<span class="token punctuation">.</span>colno<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">stack</span><span class="token operator">:</span> event<span class="token punctuation">.</span>error <span class="token operator">?</span> event<span class="token punctuation">.</span>error<span class="token punctuation">.</span>stack <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 不阻止默认行为</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Promise未捕获异常</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'unhandledrejection'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'promise-error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> event<span class="token punctuation">.</span>reason<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token function">String</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">stack</span><span class="token operator">:</span> event<span class="token punctuation">.</span>reason<span class="token punctuation">.</span>stack <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="框架特定错误处理" tabindex="-1"><a class="header-anchor" href="#框架特定错误处理"><span>框架特定错误处理</span></a></h3>
<h4 id="react错误边界" tabindex="-1"><a class="header-anchor" href="#react错误边界"><span>React错误边界</span></a></h4>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 更新状态，下一次渲染将显示回退UI</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 上报错误</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'react-error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">stack</span><span class="token operator">:</span> error<span class="token punctuation">.</span>stack<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">componentStack</span><span class="token operator">:</span> errorInfo<span class="token punctuation">.</span>componentStack<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 自定义回退UI</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">出错了，请稍后再试</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue错误处理" tabindex="-1"><a class="header-anchor" href="#vue错误处理"><span>Vue错误处理</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Vue 3 全局错误处理</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'vue-error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> err<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">stack</span><span class="token operator">:</span> err<span class="token punctuation">.</span>stack<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">info</span><span class="token operator">:</span> info<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">componentName</span><span class="token operator">:</span> instance<span class="token operator">?.</span>type<span class="token operator">?.</span>name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求异常监控" tabindex="-1"><a class="header-anchor" href="#请求异常监控"><span>请求异常监控</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Fetch API拦截器</span></span>
<span class="line"><span class="token keyword">const</span> originalFetch <span class="token operator">=</span> window<span class="token punctuation">.</span>fetch<span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resource<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> response<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">originalFetch</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span> init<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> endTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 上报请求成功信息</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'api-success'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">typeof</span> resource <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> resource <span class="token operator">:</span> resource<span class="token punctuation">.</span>url<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> init<span class="token operator">?.</span>method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">status</span><span class="token operator">:</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">duration</span><span class="token operator">:</span> endTime <span class="token operator">-</span> startTime</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 处理HTTP错误</span></span>
<span class="line">      <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'api-http-error'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">typeof</span> resource <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> resource <span class="token operator">:</span> resource<span class="token punctuation">.</span>url<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> init<span class="token operator">?.</span>method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">status</span><span class="token operator">:</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">statusText</span><span class="token operator">:</span> response<span class="token punctuation">.</span>statusText<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">duration</span><span class="token operator">:</span> endTime <span class="token operator">-</span> startTime</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理网络错误</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'api-network-error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">typeof</span> resource <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> resource <span class="token operator">:</span> resource<span class="token punctuation">.</span>url<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> init<span class="token operator">?.</span>method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">stack</span><span class="token operator">:</span> error<span class="token punctuation">.</span>stack<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">duration</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户行为监控" tabindex="-1"><a class="header-anchor" href="#用户行为监控"><span>用户行为监控</span></a></h2>
<h3 id="页面访问追踪" tabindex="-1"><a class="header-anchor" href="#页面访问追踪"><span>页面访问追踪</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 页面浏览监控</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">trackPageView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 采集页面加载信息</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> navigationTiming <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'navigation'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'page-view'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> document<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">referrer</span><span class="token operator">:</span> document<span class="token punctuation">.</span>referrer<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">loadTime</span><span class="token operator">:</span> navigationTiming <span class="token operator">?</span> navigationTiming<span class="token punctuation">.</span>loadEventEnd <span class="token operator">:</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 监听路由变化 (SPA)</span></span>
<span class="line">  <span class="token keyword">let</span> lastUrl <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 创建观察器实例</span></span>
<span class="line">  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">!==</span> lastUrl<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> oldUrl <span class="token operator">=</span> lastUrl<span class="token punctuation">;</span></span>
<span class="line">      lastUrl <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 上报页面变化</span></span>
<span class="line">      <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'spa-view'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> lastUrl<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> document<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">from</span><span class="token operator">:</span> oldUrl<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 开始观察文档变化</span></span>
<span class="line">  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户交互追踪" tabindex="-1"><a class="header-anchor" href="#用户交互追踪"><span>用户交互追踪</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 用户交互监控</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">trackUserInteractions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 点击行为追踪</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取事件目标</span></span>
<span class="line">    <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 提取有用信息</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'user-interaction'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'click'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">tag</span><span class="token operator">:</span> target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> target<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">class</span><span class="token operator">:</span> target<span class="token punctuation">.</span>className<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">text</span><span class="token operator">:</span> target<span class="token punctuation">.</span>innerText<span class="token operator">?.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">getElementPath</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 添加自定义数据属性</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>trackid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      data<span class="token punctuation">.</span>trackId <span class="token operator">=</span> target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>trackid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 表单提交追踪</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> form <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'user-interaction'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'form-submit'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">formId</span><span class="token operator">:</span> form<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">formName</span><span class="token operator">:</span> form<span class="token punctuation">.</span>name<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">fields</span><span class="token operator">:</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>form<span class="token punctuation">.</span>elements<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=></span> el<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=></span> el<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取DOM元素路径</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getElementPath</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> currentElement <span class="token operator">=</span> element<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>currentElement <span class="token operator">&amp;&amp;</span> currentElement <span class="token operator">!==</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> selector <span class="token operator">=</span> currentElement<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentElement<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      selector <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentElement<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> siblings <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>currentElement<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>children<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e<span class="token punctuation">.</span>tagName <span class="token operator">===</span> currentElement<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>siblings<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> index <span class="token operator">=</span> siblings<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>currentElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        selector <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">:nth-child(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    path<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    currentElement <span class="token operator">=</span> currentElement<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' > '</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义事件追踪" tabindex="-1"><a class="header-anchor" href="#自定义事件追踪"><span>自定义事件追踪</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 自定义事件记录器</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">EventTracker</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">trackEvent</span><span class="token punctuation">(</span><span class="token parameter">category<span class="token punctuation">,</span> action<span class="token punctuation">,</span> label<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'custom-event'</span><span class="token punctuation">,</span></span>
<span class="line">      category<span class="token punctuation">,</span></span>
<span class="line">      action<span class="token punctuation">,</span></span>
<span class="line">      label<span class="token punctuation">,</span></span>
<span class="line">      value<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">trackSearch</span><span class="token punctuation">(</span><span class="token parameter">keyword<span class="token punctuation">,</span> resultsCount<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">trackEvent</span><span class="token punctuation">(</span><span class="token string">'search'</span><span class="token punctuation">,</span> <span class="token string">'perform'</span><span class="token punctuation">,</span> keyword<span class="token punctuation">,</span> resultsCount<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 额外记录搜索细节</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'search'</span><span class="token punctuation">,</span></span>
<span class="line">      keyword<span class="token punctuation">,</span></span>
<span class="line">      resultsCount<span class="token punctuation">,</span></span>
<span class="line">      source<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">trackConversion</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> currency<span class="token punctuation">,</span> products</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">trackEvent</span><span class="token punctuation">(</span><span class="token string">'conversion'</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 记录转化详情</span></span>
<span class="line">    <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'conversion'</span><span class="token punctuation">,</span></span>
<span class="line">      name<span class="token punctuation">,</span></span>
<span class="line">      value<span class="token punctuation">,</span></span>
<span class="line">      currency<span class="token punctuation">,</span></span>
<span class="line">      products<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> tracker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventTracker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 搜索行为</span></span>
<span class="line">searchButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> keyword <span class="token operator">=</span> searchInput<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">performSearch</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">results</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    tracker<span class="token punctuation">.</span><span class="token function">trackSearch</span><span class="token punctuation">(</span>keyword<span class="token punctuation">,</span> results<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token string">'main-search'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 购买转化</span></span>
<span class="line">checkoutButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  tracker<span class="token punctuation">.</span><span class="token function">trackConversion</span><span class="token punctuation">(</span><span class="token string">'purchase'</span><span class="token punctuation">,</span> cart<span class="token punctuation">.</span>total<span class="token punctuation">,</span> <span class="token string">'USD'</span><span class="token punctuation">,</span> cart<span class="token punctuation">.</span>products<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控数据采集" tabindex="-1"><a class="header-anchor" href="#监控数据采集"><span>监控数据采集</span></a></h2>
<h3 id="sdk初始化配置" tabindex="-1"><a class="header-anchor" href="#sdk初始化配置"><span>SDK初始化配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 前端监控SDK</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MonitoringSDK</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 默认配置</span></span>
<span class="line">      <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'/api/monitoring'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sessionId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">enablePerformance</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">enableError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">enableBehavior</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sampleRate</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token comment">// 采样率</span></span>
<span class="line">      <span class="token literal-property property">maxBatchSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 批量上报数量</span></span>
<span class="line">      <span class="token literal-property property">maxQueueSize</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 最大队列长度</span></span>
<span class="line">      <span class="token literal-property property">reportInterval</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 定时上报间隔</span></span>
<span class="line">      <span class="token operator">...</span>config</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化数据缓冲区</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 生成或获取会话ID</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>sessionId<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>sessionId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateSessionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化各模块</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 设置定时上报</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setupReporting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 页面卸载前发送所有数据</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'beforeunload'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 初始化监控模块</span></span>
<span class="line">  <span class="token function">initModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 启用性能监控</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enablePerformance<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initPerformanceMonitoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 启用错误监控</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enableError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initErrorMonitoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 启用行为监控</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>enableBehavior<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initBehaviorMonitoring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 生成会话ID</span></span>
<span class="line">  <span class="token function">generateSessionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 采样决策</span></span>
<span class="line">  <span class="token function">shouldSample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>sampleRate<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 添加数据到队列</span></span>
<span class="line">  <span class="token function">addToQueue</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 应用采样</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">shouldSample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 添加公共字段</span></span>
<span class="line">    <span class="token keyword">const</span> enrichedData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span>data<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>appId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>userId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sessionId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>sessionId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>version<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">userAgent</span><span class="token operator">:</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> data<span class="token punctuation">.</span>timestamp <span class="token operator">||</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 添加到队列</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>enrichedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 检查是否需要立即上报</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>maxBatchSize<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置定时上报</span></span>
<span class="line">  <span class="token function">setupReporting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>reportInterval<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 发送数据</span></span>
<span class="line">  <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 提取队列数据</span></span>
<span class="line">    <span class="token keyword">const</span> dataToSend <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataQueue<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>maxBatchSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 上报数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendData</span><span class="token punctuation">(</span>dataToSend<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 发送数据到服务器</span></span>
<span class="line">  <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用Beacon API (不阻塞页面卸载)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> success <span class="token operator">=</span> navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span> blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 如果发送失败，使用备选方法</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendWithFetch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendWithFetch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用Fetch API发送数据</span></span>
<span class="line">  <span class="token function">sendWithFetch</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>endpoint<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to send monitoring data:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 其他初始化方法...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> monitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MonitoringSDK</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'https://monitoring.example.com/collect'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'shop-web-app'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'1.2.3'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">userId</span><span class="token operator">:</span> currentUser<span class="token operator">?.</span>id <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sampleRate</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token comment">// 采样50%的用户</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监控数据结构设计" tabindex="-1"><a class="header-anchor" href="#监控数据结构设计"><span>监控数据结构设计</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 监控数据结构示例</span></span>
<span class="line"><span class="token keyword">const</span> monitoringDataSchema <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 公共字段</span></span>
<span class="line">  <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 应用标识</span></span>
<span class="line">    <span class="token literal-property property">sessionId</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 会话ID</span></span>
<span class="line">    <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 用户ID</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token comment">// 时间戳</span></span>
<span class="line">    <span class="token literal-property property">userAgent</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 用户代理</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 页面URL</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'String'</span> <span class="token comment">// 应用版本</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 性能数据</span></span>
<span class="line">  <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'performance'</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 指标名称 (如 LCP, FID, TTI)</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token comment">// 指标值</span></span>
<span class="line">    <span class="token literal-property property">rating</span><span class="token operator">:</span> <span class="token string">'String'</span> <span class="token comment">// 评级 (good, needs-improvement, poor)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 资源加载</span></span>
<span class="line">  <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'resource'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 资源URL</span></span>
<span class="line">    <span class="token literal-property property">initiatorType</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 资源类型 (img, script, css等)</span></span>
<span class="line">    <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token comment">// 加载时间</span></span>
<span class="line">    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token comment">// 资源大小</span></span>
<span class="line">    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'String'</span> <span class="token comment">// 协议</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 错误数据</span></span>
<span class="line">  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">subtype</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// js-error, promise-error, api-error等</span></span>
<span class="line">    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 错误信息</span></span>
<span class="line">    <span class="token literal-property property">stack</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 错误堆栈</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 文件名</span></span>
<span class="line">    <span class="token literal-property property">lineno</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span> <span class="token comment">// 行号</span></span>
<span class="line">    <span class="token literal-property property">colno</span><span class="token operator">:</span> <span class="token string">'Number'</span> <span class="token comment">// 列号</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 用户行为</span></span>
<span class="line">  <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'behavior'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span> <span class="token comment">// 行为类型 (click, input, scroll等)</span></span>
<span class="line">    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'Object'</span><span class="token punctuation">,</span> <span class="token comment">// 交互目标信息</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'String'</span> <span class="token comment">// 元素路径</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 自定义事件</span></span>
<span class="line">  <span class="token literal-property property">customEvent</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'custom'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'String'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'Number'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">extraData</span><span class="token operator">:</span> <span class="token string">'Object'</span> <span class="token comment">// 自定义额外数据</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据上报策略" tabindex="-1"><a class="header-anchor" href="#数据上报策略"><span>数据上报策略</span></a></h2>
<h3 id="高效的上报方式" tabindex="-1"><a class="header-anchor" href="#高效的上报方式"><span>高效的上报方式</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ReportingStrategy</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>sending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>maxRetries <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 添加到上报队列</span></span>
<span class="line">  <span class="token function">addToQueue</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      data<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attempts</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 处理队列</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sending <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>sending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 获取队首数据</span></span>
<span class="line">    <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendData</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 重试逻辑</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>attempts <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxRetries<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        item<span class="token punctuation">.</span>attempts<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 重新放入队列，指数退避</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>sending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>attempts<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to send data after retries'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>sending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 根据情况选择最佳上报方式</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">sendData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 页面卸载时优先使用 sendBeacon</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">'hidden'</span> <span class="token operator">||</span> navigator<span class="token punctuation">.</span>onLine <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendWithBeacon</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 正常情况使用fetch API</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendWithFetch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用Beacon API发送</span></span>
<span class="line">  <span class="token function">sendWithBeacon</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> success <span class="token operator">=</span> navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 如果sendBeacon失败，保存到localStorage</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveToStorage</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Beacon failed'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 使用Fetch API发送</span></span>
<span class="line">  <span class="token function">sendWithFetch</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 降级存储</span></span>
<span class="line">  <span class="token function">saveToStorage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> storedItems <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'monitoring_queue'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'[]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      storedItems<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        data<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 只保留最近的100条</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>storedItems<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        storedItems<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> storedItems<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'monitoring_queue'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>storedItems<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to save to localStorage'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 页面加载时检查是否有存储的数据需要发送</span></span>
<span class="line">  <span class="token function">checkStoredData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> storedItems <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'monitoring_queue'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'[]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>storedItems<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 清空存储</span></span>
<span class="line">        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'monitoring_queue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 批量发送</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendBatch</span><span class="token punctuation">(</span>storedItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to process stored data'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 批量发送</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">sendBatch</span><span class="token punctuation">(</span><span class="token parameter">dataArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/analytics/batch'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>dataArray<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to send batch'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="采样与优先级" tabindex="-1"><a class="header-anchor" href="#采样与优先级"><span>采样与优先级</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">SamplingStrategy</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 不同类型数据的采样率</span></span>
<span class="line">      <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 50%的性能数据</span></span>
<span class="line">      <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>       <span class="token comment">// 100%的错误数据</span></span>
<span class="line">      <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>    <span class="token comment">// 10%的行为数据</span></span>
<span class="line">      <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>      <span class="token comment">// 80%的自定义事件</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 优先采样特定条件的数据</span></span>
<span class="line">      <span class="token literal-property property">highPriorityUsers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 高优先级用户ID列表</span></span>
<span class="line">      <span class="token literal-property property">newUserRate</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>       <span class="token comment">// 新用户的采样率</span></span>
<span class="line">      <span class="token literal-property property">mobileRate</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>        <span class="token comment">// 移动设备的采样率</span></span>
<span class="line">      </span>
<span class="line">      <span class="token operator">...</span>config</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 用户会话信息</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">isNewUser</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">isMobile</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置用户信息</span></span>
<span class="line">  <span class="token function">setUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userId<span class="token punctuation">,</span> isNewUser</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userId <span class="token operator">=</span> userId<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>isNewUser <span class="token operator">=</span> isNewUser<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 根据数据类型和上下文决定是否采样</span></span>
<span class="line">  <span class="token function">shouldSample</span><span class="token punctuation">(</span><span class="token parameter">dataType<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 高优先级用户总是采样</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userId <span class="token operator">&amp;&amp;</span> </span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>highPriorityUsers<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 新用户使用特定采样率</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>isNewUser<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>newUserRate<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 移动设备使用特定采样率</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>isMobile<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>mobileRate<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 错误数据中特定类型总是采样</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>dataType <span class="token operator">===</span> <span class="token string">'error'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 严重错误总是上报</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">'fatal'</span> <span class="token operator">||</span> data<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">'critical'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 其他情况按类型采样</span></span>
<span class="line">    <span class="token keyword">const</span> typeRate <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">[</span>dataType<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0.1</span><span class="token punctuation">;</span> <span class="token comment">// 默认10%</span></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> typeRate<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后端存储与分析" tabindex="-1"><a class="header-anchor" href="#后端存储与分析"><span>后端存储与分析</span></a></h2>
<h3 id="数据处理流水线" tabindex="-1"><a class="header-anchor" href="#数据处理流水线"><span>数据处理流水线</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 后端数据处理流水线 (Node.js伪代码)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> MongoClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongodb'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'redis'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> Kafka <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'kafkajs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 数据处理类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MonitoringPipeline</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 初始化存储客户端</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initStorageClients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化Kafka消费者</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initKafkaConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">initStorageClients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// MongoDB连接</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>mongoClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span><span class="token string">'mongodb://localhost:27017'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>db <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mongoClient<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">'monitoring'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// Redis连接</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">initKafkaConsumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Kafka配置</span></span>
<span class="line">    <span class="token keyword">const</span> kafka <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kafka</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">clientId</span><span class="token operator">:</span> <span class="token string">'monitoring-service'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">brokers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'kafka-broker:9092'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>consumer <span class="token operator">=</span> kafka<span class="token punctuation">.</span><span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">groupId</span><span class="token operator">:</span> <span class="token string">'monitoring-processors'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">topic</span><span class="token operator">:</span> <span class="token string">'monitoring-events'</span><span class="token punctuation">,</span> <span class="token literal-property property">fromBeginning</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 消费消息</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>consumer<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">eachMessage</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> topic<span class="token punctuation">,</span> partition<span class="token punctuation">,</span> message <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据清洗和转换</span></span>
<span class="line">    <span class="token keyword">const</span> processedData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cleanAndTransform</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 按类型存储数据</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>processedData<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'performance'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">storePerformanceData</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'error'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">storeErrorData</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'behavior'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">storeBehaviorData</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'custom'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">storeCustomEventData</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Unknown data type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>processedData<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">cleanAndTransform</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 数据清洗</span></span>
<span class="line">    <span class="token keyword">const</span> cleaned <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>data <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 移除无效字段</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>cleaned<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>cleaned<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> cleaned<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">delete</span> cleaned<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 添加处理时间戳</span></span>
<span class="line">    cleaned<span class="token punctuation">.</span>processedAt <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> cleaned<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">storePerformanceData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存储到MongoDB</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'performance'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新Redis中的实时统计</span></span>
<span class="line">    <span class="token keyword">const</span> metricKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">perf:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">rPush</span><span class="token punctuation">(</span>metricKey<span class="token punctuation">,</span> data<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 限制列表长度</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">lTrim</span><span class="token punctuation">(</span>metricKey<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新最新的性能分数</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>rating<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> scoreKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">score:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">hIncrBy</span><span class="token punctuation">(</span>scoreKey<span class="token punctuation">,</span> data<span class="token punctuation">.</span>rating<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">storeErrorData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存储到MongoDB</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'errors'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 错误计数</span></span>
<span class="line">    <span class="token keyword">const</span> errorKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">error:count:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">hIncrBy</span><span class="token punctuation">(</span>errorKey<span class="token punctuation">,</span> data<span class="token punctuation">.</span>subtype <span class="token operator">||</span> <span class="token string">'unknown'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 如果是严重错误，添加到实时告警队列</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">'critical'</span> <span class="token operator">||</span> data<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">'fatal'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">lPush</span><span class="token punctuation">(</span><span class="token string">'alerts:errors'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">storeBehaviorData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存储到MongoDB</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'behavior'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新行为统计</span></span>
<span class="line">    <span class="token keyword">const</span> behaviorKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">behavior:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>action<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">hIncrBy</span><span class="token punctuation">(</span>behaviorKey<span class="token punctuation">,</span> data<span class="token punctuation">.</span>page <span class="token operator">||</span> <span class="token string">'unknown'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">storeCustomEventData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 存储到MongoDB</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'custom_events'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新自定义事件统计</span></span>
<span class="line">    <span class="token keyword">const</span> eventKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">event:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>category<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>action<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>eventKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 生成日期键 (yyyy-mm-dd)</span></span>
<span class="line">  <span class="token function">getDateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>now<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">String</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动处理流水线</span></span>
<span class="line"><span class="token keyword">const</span> pipeline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MonitoringPipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="告警系统" tabindex="-1"><a class="header-anchor" href="#告警系统"><span>告警系统</span></a></h2>
<h3 id="告警规则设置" tabindex="-1"><a class="header-anchor" href="#告警规则设置"><span>告警规则设置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 告警规则引擎</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AlertRuleEngine</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>rules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 添加规则</span></span>
<span class="line">  <span class="token function">addRule</span><span class="token punctuation">(</span><span class="token parameter">rule</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rule<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 评估数据是否触发告警</span></span>
<span class="line">  <span class="token function">evaluateData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> triggeredRules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> rule <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rules<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">matchesConditions</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> rule<span class="token punctuation">.</span>conditions<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        triggeredRules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">ruleId</span><span class="token operator">:</span> rule<span class="token punctuation">.</span>id<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">ruleName</span><span class="token operator">:</span> rule<span class="token punctuation">.</span>name<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">priority</span><span class="token operator">:</span> rule<span class="token punctuation">.</span>priority<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">formatMessage</span><span class="token punctuation">(</span>rule<span class="token punctuation">.</span>messageTemplate<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          data</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> triggeredRules<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查数据是否满足条件</span></span>
<span class="line">  <span class="token function">matchesConditions</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> conditions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果是AND条件组</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>conditions<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">'AND'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> conditions<span class="token punctuation">.</span>conditions<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">condition</span> <span class="token operator">=></span> </span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">matchesCondition</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> condition<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> </span>
<span class="line">    <span class="token comment">// 如果是OR条件组</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>conditions<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">'OR'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> conditions<span class="token punctuation">.</span>conditions<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">condition</span> <span class="token operator">=></span> </span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">matchesCondition</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> condition<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> </span>
<span class="line">    <span class="token comment">// 单个条件</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">matchesCondition</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> conditions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查单个条件</span></span>
<span class="line">  <span class="token function">matchesCondition</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 嵌套条件组</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">.</span>operator <span class="token operator">&amp;&amp;</span> condition<span class="token punctuation">.</span>conditions<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">matchesConditions</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> condition<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 获取字段值</span></span>
<span class="line">    <span class="token keyword">const</span> fieldPath <span class="token operator">=</span> condition<span class="token punctuation">.</span>field<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> fieldPath<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      value <span class="token operator">=</span> value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 根据条件类型评估</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>condition<span class="token punctuation">.</span>comparison<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'equals'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> value <span class="token operator">===</span> condition<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'notEquals'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> value <span class="token operator">!==</span> condition<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'contains'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>condition<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'greaterThan'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token function">Number</span><span class="token punctuation">(</span>condition<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'lessThan'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>condition<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'in'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>condition<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> condition<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'regex'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>condition<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 格式化告警消息</span></span>
<span class="line">  <span class="token function">formatMessage</span><span class="token punctuation">(</span><span class="token parameter">template<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\${([^}]+)}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> keys <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> value <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> match<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        value <span class="token operator">=</span> value<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">return</span> value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> value <span class="token operator">:</span> match<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">const</span> alertEngine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AlertRuleEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加规则</span></span>
<span class="line">alertEngine<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'error-rate-high'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'错误率过高'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token string">'high'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">conditions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">operator</span><span class="token operator">:</span> <span class="token string">'AND'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">conditions</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'type'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">comparison</span><span class="token operator">:</span> <span class="token string">'equals'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'error-rate'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">comparison</span><span class="token operator">:</span> <span class="token string">'greaterThan'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'pageUrl'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">comparison</span><span class="token operator">:</span> <span class="token string">'contains'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'/checkout'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">messageTemplate</span><span class="token operator">:</span> <span class="token string">'${pageUrl} 页面错误率达到 ${value}%，超过阈值 5%'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 处理告警数据</span></span>
<span class="line"><span class="token keyword">const</span> alertData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'error-rate'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7.5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">pageUrl</span><span class="token operator">:</span> <span class="token string">'/checkout/payment'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> alerts <span class="token operator">=</span> alertEngine<span class="token punctuation">.</span><span class="token function">evaluateData</span><span class="token punctuation">(</span>alertData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>alerts<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 触发告警通知</span></span>
<span class="line">  alerts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">alert</span> <span class="token operator">=></span> <span class="token function">notifyTeam</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="告警通知渠道" tabindex="-1"><a class="header-anchor" href="#告警通知渠道"><span>告警通知渠道</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 告警通知系统</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AlertNotifier</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>channels <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">EmailNotifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">slack</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SlackNotifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sms</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SMSNotifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">webhook</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">WebhookNotifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 告警通知配置</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token string">'slack'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">critical</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'email'</span><span class="token punctuation">,</span> <span class="token string">'slack'</span><span class="token punctuation">,</span> <span class="token string">'sms'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">throttle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 默认每小时最多发送10条同类告警</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">timeWindow</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 严重告警每10分钟最多发送5条</span></span>
<span class="line">        <span class="token literal-property property">critical</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">timeWindow</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 告警历史记录</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 发送告警通知</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token parameter">alert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 确定告警级别</span></span>
<span class="line">    <span class="token keyword">const</span> level <span class="token operator">=</span> alert<span class="token punctuation">.</span>priority <span class="token operator">===</span> <span class="token string">'high'</span> <span class="token operator">||</span> alert<span class="token punctuation">.</span>priority <span class="token operator">===</span> <span class="token string">'critical'</span> </span>
<span class="line">      <span class="token operator">?</span> <span class="token string">'critical'</span> <span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 检查告警频率限制</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isThrottled</span><span class="token punctuation">(</span>alert<span class="token punctuation">,</span> level<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 获取通知渠道</span></span>
<span class="line">    <span class="token keyword">const</span> channels <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 记录告警历史</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">recordAlert</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 并行发送到所有渠道</span></span>
<span class="line">    <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span></span>
<span class="line">      channels<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">channelName</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>channels<span class="token punctuation">[</span>channelName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>channel<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed to send alert via </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>channelName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查是否需要限制告警频率</span></span>
<span class="line">  <span class="token function">isThrottled</span><span class="token punctuation">(</span><span class="token parameter">alert<span class="token punctuation">,</span> level</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> alertKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alert<span class="token punctuation">.</span>ruleId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>alert<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> throttleConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>throttle<span class="token punctuation">[</span>level<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>throttle<span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> maxCount<span class="token punctuation">,</span> timeWindow <span class="token punctuation">}</span> <span class="token operator">=</span> throttleConfig<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 清理过期记录</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token parameter">timestamp</span> <span class="token operator">=></span> now <span class="token operator">-</span> timestamp <span class="token operator">&lt;</span> timeWindow</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 检查是否超过频率限制</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">>=</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 记录告警历史</span></span>
<span class="line">  <span class="token function">recordAlert</span><span class="token punctuation">(</span><span class="token parameter">alert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> alertKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alert<span class="token punctuation">.</span>ruleId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>alert<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>alertHistory<span class="token punctuation">[</span>alertKey<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 邮件通知实现</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">EmailNotifier</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token parameter">alert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 实际邮件发送逻辑</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[EMAIL] 发送告警: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alert<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">'email'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Slack通知实现</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">SlackNotifier</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token parameter">alert</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 构建Slack消息</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">'#monitoring-alerts'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'MonitoringBot'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">icon_emoji</span><span class="token operator">:</span> <span class="token string">':warning:'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">attachments</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">color</span><span class="token operator">:</span> alert<span class="token punctuation">.</span>priority <span class="token operator">===</span> <span class="token string">'high'</span> <span class="token operator">?</span> <span class="token string">'danger'</span> <span class="token operator">:</span> <span class="token string">'warning'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> alert<span class="token punctuation">.</span>ruleName<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> alert<span class="token punctuation">.</span>message<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'优先级'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">value</span><span class="token operator">:</span> alert<span class="token punctuation">.</span>priority<span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">short</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'时间'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">short</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">'Monitoring System'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 实际Slack API调用</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[SLACK] 发送告警: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>alert<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">'slack'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控可视化" tabindex="-1"><a class="header-anchor" href="#监控可视化"><span>监控可视化</span></a></h2>
<h3 id="数据可视化仪表板" tabindex="-1"><a class="header-anchor" href="#数据可视化仪表板"><span>数据可视化仪表板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 前端监控可视化仪表板组件</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MonitoringDashboard</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">containerId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>charts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 时间范围选择</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>timeRange <span class="token operator">=</span> <span class="token string">'24h'</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化仪表板</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 创建仪表板布局</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化图表</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 设置数据刷新计时器</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">startDataRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 注册事件监听</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEventListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">      &lt;div class="dashboard-header"></span>
<span class="line">        &lt;h1>前端监控仪表板&lt;/h1></span>
<span class="line">        &lt;div class="time-range-selector"></span>
<span class="line">          &lt;button data-range="1h">1小时&lt;/button></span>
<span class="line">          &lt;button data-range="24h" class="active">24小时&lt;/button></span>
<span class="line">          &lt;button data-range="7d">7天&lt;/button></span>
<span class="line">          &lt;button data-range="30d">30天&lt;/button></span>
<span class="line">          &lt;button data-range="custom">自定义&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line">      &lt;/div></span>
<span class="line">      &lt;div class="dashboard-grid"></span>
<span class="line">        &lt;div class="card" id="performance-overview"></span>
<span class="line">          &lt;h2>性能概览&lt;/h2></span>
<span class="line">          &lt;div class="chart-container" id="web-vitals-chart">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="card" id="error-overview"></span>
<span class="line">          &lt;h2>错误概览&lt;/h2></span>
<span class="line">          &lt;div class="chart-container" id="error-chart">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="card" id="user-behavior"></span>
<span class="line">          &lt;h2>用户行为&lt;/h2></span>
<span class="line">          &lt;div class="chart-container" id="behavior-chart">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="card" id="resource-loading"></span>
<span class="line">          &lt;h2>资源加载&lt;/h2></span>
<span class="line">          &lt;div class="chart-container" id="resource-chart">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="card full-width" id="real-time-events"></span>
<span class="line">          &lt;h2>实时事件流&lt;/h2></span>
<span class="line">          &lt;div class="events-container" id="events-stream">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">      &lt;/div></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">initCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 初始化核心指标图表</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>webVitals <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceChart</span><span class="token punctuation">(</span><span class="token string">'web-vitals-chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>webVitals<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化错误统计图表</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ErrorChart</span><span class="token punctuation">(</span><span class="token string">'error-chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>errors<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化用户行为图表</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>behavior <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BehaviorChart</span><span class="token punctuation">(</span><span class="token string">'behavior-chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>behavior<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化资源加载图表</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>resources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResourceChart</span><span class="token punctuation">(</span><span class="token string">'resource-chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>resources<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化实时事件流</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>eventStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventStream</span><span class="token punctuation">(</span><span class="token string">'events-stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>eventStream<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">startDataRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 每分钟刷新一次数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>refreshTimer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 立即加载数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">refreshData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 获取时间范围</span></span>
<span class="line">    <span class="token keyword">const</span> timeRange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTimeRangeParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 并行加载各类数据</span></span>
<span class="line">    <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>webVitals<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>timeRange<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>errors<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>timeRange<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>behavior<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>timeRange<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>charts<span class="token punctuation">.</span>resources<span class="token punctuation">.</span><span class="token function">loadData</span><span class="token punctuation">(</span>timeRange<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">getTimeRangeParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> startTime<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeRange<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'1h'</span><span class="token operator">:</span></span>
<span class="line">        startTime <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'24h'</span><span class="token operator">:</span></span>
<span class="line">        startTime <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'7d'</span><span class="token operator">:</span></span>
<span class="line">        startTime <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'30d'</span><span class="token operator">:</span></span>
<span class="line">        startTime <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'custom'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token comment">// 从自定义日期选择器获取</span></span>
<span class="line">        startTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>customDateRange<span class="token punctuation">.</span>start<span class="token punctuation">;</span></span>
<span class="line">        now <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>customDateRange<span class="token punctuation">.</span>end<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        startTime <span class="token operator">=</span> now <span class="token operator">-</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">start</span><span class="token operator">:</span> startTime<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">end</span><span class="token operator">:</span> now</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">registerEventListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 注册时间范围选择事件</span></span>
<span class="line">    <span class="token keyword">const</span> buttons <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.time-range-selector button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    buttons<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">button</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 移除之前的激活状态</span></span>
<span class="line">        buttons<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=></span> b<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 设置新的激活状态</span></span>
<span class="line">        button<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 更新时间范围</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>timeRange <span class="token operator">=</span> button<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>range<span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timeRange <span class="token operator">===</span> <span class="token string">'custom'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showCustomDatePicker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">showCustomDatePicker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 显示自定义日期选择器</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 性能指标图表</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">PerformanceChart</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">containerId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 初始化图表库 (如 Chart.js)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'LCP'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#FF6384'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'FID'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#36A2EB'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'CLS'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'#FFCE56'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">maintainAspectRatio</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">scales</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'time'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">unit</span><span class="token operator">:</span> <span class="token string">'hour'</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">beginAtZero</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token parameter">timeRange</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 从API加载数据</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/performance?start=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>timeRange<span class="token punctuation">.</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;end=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>timeRange<span class="token punctuation">.</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 更新图表数据</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateChart</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to load performance data:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">updateChart</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 转换数据格式</span></span>
<span class="line">    <span class="token keyword">const</span> timestamps <span class="token operator">=</span> data<span class="token punctuation">.</span>timestamps<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新LCP数据</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span>data<span class="token punctuation">.</span>labels <span class="token operator">=</span> timestamps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">ts</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span>data<span class="token punctuation">.</span>datasets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>lcp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span>data<span class="token punctuation">.</span>datasets<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>fid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span>data<span class="token punctuation">.</span>datasets<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>cls<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新图表</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实时错误监控" tabindex="-1"><a class="header-anchor" href="#实时错误监控"><span>实时错误监控</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 实时错误监控组件</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ErrorDetailsView</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">containerId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>containerId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>currentError <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化视图</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">      &lt;div class="error-details-header"></span>
<span class="line">        &lt;h2>错误详情&lt;/h2></span>
<span class="line">        &lt;div class="actions"></span>
<span class="line">          &lt;button id="prev-error">上一个&lt;/button></span>
<span class="line">          &lt;button id="next-error">下一个&lt;/button></span>
<span class="line">          &lt;button id="close-details">关闭&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line">      &lt;/div></span>
<span class="line">      &lt;div class="error-info"></span>
<span class="line">        &lt;div class="error-message">&lt;/div></span>
<span class="line">        &lt;div class="error-metadata"></span>
<span class="line">          &lt;div class="metadata-item"></span>
<span class="line">            &lt;span class="label">时间:&lt;/span></span>
<span class="line">            &lt;span class="value" id="error-time">&lt;/span></span>
<span class="line">          &lt;/div></span>
<span class="line">          &lt;div class="metadata-item"></span>
<span class="line">            &lt;span class="label">浏览器:&lt;/span></span>
<span class="line">            &lt;span class="value" id="error-browser">&lt;/span></span>
<span class="line">          &lt;/div></span>
<span class="line">          &lt;div class="metadata-item"></span>
<span class="line">            &lt;span class="label">操作系统:&lt;/span></span>
<span class="line">            &lt;span class="value" id="error-os">&lt;/span></span>
<span class="line">          &lt;/div></span>
<span class="line">          &lt;div class="metadata-item"></span>
<span class="line">            &lt;span class="label">URL:&lt;/span></span>
<span class="line">            &lt;span class="value" id="error-url">&lt;/span></span>
<span class="line">          &lt;/div></span>
<span class="line">          &lt;div class="metadata-item"></span>
<span class="line">            &lt;span class="label">用户ID:&lt;/span></span>
<span class="line">            &lt;span class="value" id="error-user">&lt;/span></span>
<span class="line">          &lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="error-stack"></span>
<span class="line">          &lt;h3>堆栈信息&lt;/h3></span>
<span class="line">          &lt;pre id="error-stack-trace">&lt;/pre></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="error-context"></span>
<span class="line">          &lt;h3>上下文信息&lt;/h3></span>
<span class="line">          &lt;pre id="error-context-data">&lt;/pre></span>
<span class="line">        &lt;/div></span>
<span class="line">      &lt;/div></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 注册事件处理</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerEventHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">registerEventHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'close-details'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'prev-error'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 显示上一个错误</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onNavigatePrev<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onNavigatePrev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'next-error'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 显示下一个错误</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onNavigateNext<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onNavigateNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 显示错误详情</span></span>
<span class="line">  <span class="token function">showError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>currentError <span class="token operator">=</span> error<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 填充错误信息</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.error-message'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> error<span class="token punctuation">.</span>message<span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-time'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-browser'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>browser<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>os<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token punctuation">.</span>os<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-url'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> error<span class="token punctuation">.</span>url<span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-user'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> error<span class="token punctuation">.</span>userId <span class="token operator">||</span> <span class="token string">'匿名用户'</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-stack-trace'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> error<span class="token punctuation">.</span>stack <span class="token operator">||</span> <span class="token string">'无堆栈信息'</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'error-context-data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>context<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 显示详情面板</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'block'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 隐藏详情面板</span></span>
<span class="line">  <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置导航回调</span></span>
<span class="line">  <span class="token function">setNavigationHandlers</span><span class="token punctuation">(</span><span class="token parameter">onPrev<span class="token punctuation">,</span> onNext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>onNavigatePrev <span class="token operator">=</span> onPrev<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>onNavigateNext <span class="token operator">=</span> onNext<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践案例" tabindex="-1"><a class="header-anchor" href="#实践案例"><span>实践案例</span></a></h2>
<h3 id="电商网站监控案例" tabindex="-1"><a class="header-anchor" href="#电商网站监控案例"><span>电商网站监控案例</span></a></h3>
<p>在我们为一家大型电商网站实施的前端监控系统中，我们面临几个关键挑战：</p>
<ol>
<li><strong>大规模数据处理</strong>：每天处理超过5000万次前端事件</li>
<li><strong>高峰期性能</strong>：促销活动期间流量暴增10倍</li>
<li><strong>跨平台一致性</strong>：需要覆盖Web、移动网页和App</li>
<li><strong>复杂业务流程</strong>：完整购物流程包含超过20个步骤</li>
</ol>
<h4 id="监控架构设计" tabindex="-1"><a class="header-anchor" href="#监控架构设计"><span>监控架构设计</span></a></h4>
<p>我们采用了分层架构来解决这些挑战：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[前端]                 [边缘节点]              [数据处理]                [存储]</span>
<span class="line">+-------------+       +------------+       +----------------+       +------------+</span>
<span class="line">| Web SDK     |       |            |       |                |       |            |</span>
<span class="line">| Mobile SDK  | --->  | Edge       | --->  | Stream         | --->  | 实时数据库   |</span>
<span class="line">| App SDK     |       | Collectors |       | Processors     |       |            |</span>
<span class="line">+-------------+       +------------+       +----------------+       +------------+</span>
<span class="line">                                                  |</span>
<span class="line">                                                  v</span>
<span class="line">                                           +----------------+       +------------+</span>
<span class="line">                                           | Batch          | --->  | 数据仓库     |</span>
<span class="line">                                           | Processors     |       |            |</span>
<span class="line">                                           +----------------+       +------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关键业务监控设计" tabindex="-1"><a class="header-anchor" href="#关键业务监控设计"><span>关键业务监控设计</span></a></h4>
<p>我们特别关注购物车到支付完成的关键业务路径，实施了以下监控策略：</p>
<ol>
<li>
<p><strong>漏斗分析</strong>：定义8个关键步骤形成转化漏斗</p>
<ul>
<li>商品详情页浏览</li>
<li>添加购物车</li>
<li>查看购物车</li>
<li>开始结账</li>
<li>填写配送信息</li>
<li>选择支付方式</li>
<li>提交订单</li>
<li>完成支付</li>
</ul>
</li>
<li>
<p><strong>性能基线</strong>：为每个步骤设置性能基线和监控阈值</p>
<ul>
<li>商品详情页：LCP &lt; 1.5s</li>
<li>购物车加载：LCP &lt; 1.0s</li>
<li>结账流程：每步交互响应 &lt; 200ms</li>
</ul>
</li>
<li>
<p><strong>错误影响分析</strong>：根据业务流程位置评估错误严重性</p>
<ul>
<li>支付流程错误：立即触发高优先级告警</li>
<li>非关键流程错误：聚合后定期报告</li>
</ul>
</li>
</ol>
<h4 id="实施成效" tabindex="-1"><a class="header-anchor" href="#实施成效"><span>实施成效</span></a></h4>
<p>该监控系统实施后取得了显著成效：</p>
<ol>
<li>
<p><strong>性能提升</strong>：</p>
<ul>
<li>结账页面LCP减少40%</li>
<li>首次可交互时间减少35%</li>
<li>整体页面加载时间减少28%</li>
</ul>
</li>
<li>
<p><strong>错误率降低</strong>：</p>
<ul>
<li>关键业务流程错误率降低70%</li>
<li>支付流程相关JS错误减少85%</li>
</ul>
</li>
<li>
<p><strong>转化率提升</strong>：</p>
<ul>
<li>购物车到订单转化率提升15%</li>
<li>移动端完成支付比例提升22%</li>
</ul>
</li>
<li>
<p><strong>运营效益</strong>：</p>
<ul>
<li>问题发现到解决时间从均值4小时缩短至30分钟</li>
<li>每月节省约200工时的人工故障排查时间</li>
</ul>
</li>
</ol>
<h3 id="saas平台监控案例" tabindex="-1"><a class="header-anchor" href="#saas平台监控案例"><span>SaaS平台监控案例</span></a></h3>
<p>在为一家SaaS平台开发监控系统时，我们面临的主要挑战是：</p>
<ol>
<li><strong>多租户环境</strong>：数百个客户有不同的配置和使用模式</li>
<li><strong>差异化SLA</strong>：不同级别客户有不同的服务等级协议</li>
<li><strong>复杂前端应用</strong>：单页应用包含超过100个视图组件</li>
</ol>
<h4 id="定制化监控解决方案" tabindex="-1"><a class="header-anchor" href="#定制化监控解决方案"><span>定制化监控解决方案</span></a></h4>
<p>针对这些挑战，我们设计了以下解决方案：</p>
<ol>
<li>
<p><strong>租户隔离的监控</strong>：</p>
<ul>
<li>为每个租户创建独立的监控空间</li>
<li>支持租户级别的自定义配置和阈值</li>
<li>实现租户级别的数据访问控制</li>
</ul>
</li>
<li>
<p><strong>SLA驱动的告警</strong>：</p>
<ul>
<li>基于客户等级自动调整监控频率和灵敏度</li>
<li>企业级客户问题自动升级为高优先级</li>
<li>告警通知根据客户等级选择不同渠道</li>
</ul>
</li>
<li>
<p><strong>组件级性能跟踪</strong>：</p>
<ul>
<li>实现细粒度组件渲染性能监控</li>
<li>跟踪状态管理性能和组件重渲染</li>
<li>记录组件初始化和交互响应时间</li>
</ul>
</li>
</ol>
<h4 id="技术亮点" tabindex="-1"><a class="header-anchor" href="#技术亮点"><span>技术亮点</span></a></h4>
<p>该项目的技术亮点包括：</p>
<ol>
<li>
<p><strong>自适应采样</strong>：</p>
<ul>
<li>动态调整数据采集频率</li>
<li>在问题发生时自动提高采样率</li>
<li>流量高峰期智能降低非关键数据采样</li>
</ul>
</li>
<li>
<p><strong>上下文感知错误分组</strong>：</p>
<ul>
<li>使用机器学习算法对相似错误进行分组</li>
<li>自动关联错误与代码变更和部署</li>
<li>识别周期性出现的问题模式</li>
</ul>
</li>
<li>
<p><strong>预测性监控</strong>：</p>
<ul>
<li>检测性能退化趋势并提前预警</li>
<li>预测可能的内存泄漏和资源耗尽</li>
<li>根据历史数据预测高流量时段并自动调整监控参数</li>
</ul>
</li>
</ol>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<h3 id="监控系统设计原则" tabindex="-1"><a class="header-anchor" href="#监控系统设计原则"><span>监控系统设计原则</span></a></h3>
<p>根据多年实践经验，以下是设计前端监控系统的关键原则：</p>
<ol>
<li>
<p><strong>以用户体验为中心</strong>：</p>
<ul>
<li>始终将真实用户体验作为首要监控目标</li>
<li>不仅监控技术指标，也关注业务指标和用户行为</li>
<li>区分关键业务流程和非关键流程的监控优先级</li>
</ul>
</li>
<li>
<p><strong>低开销高价值</strong>：</p>
<ul>
<li>最小化监控代码对应用性能的影响</li>
<li>实施智能采样策略，减少数据传输量</li>
<li>优先收集有直接分析价值的数据</li>
</ul>
</li>
<li>
<p><strong>可操作性</strong>：</p>
<ul>
<li>每项监控指标都应对应明确的行动计划</li>
<li>告警消息应包含问题诊断和可能解决方案的信息</li>
<li>建立清晰的错误分类和处理流程</li>
</ul>
</li>
<li>
<p><strong>隐私与合规</strong>：</p>
<ul>
<li>严格遵循数据保护法规(GDPR, CCPA等)</li>
<li>实施数据最小化和匿名化策略</li>
<li>提供透明的监控策略和用户选择机制</li>
</ul>
</li>
</ol>
<h3 id="监控实施路线图" tabindex="-1"><a class="header-anchor" href="#监控实施路线图"><span>监控实施路线图</span></a></h3>
<p>下面是一个阶段性的监控系统实施路线图，适合大多数Web应用：</p>
<h4 id="第一阶段-基础监控" tabindex="-1"><a class="header-anchor" href="#第一阶段-基础监控"><span>第一阶段：基础监控</span></a></h4>
<ul>
<li><strong>错误捕获</strong>：实现基本的JavaScript错误和Promise异常捕获</li>
<li><strong>性能基线</strong>：收集核心Web指标(CWV)数据</li>
<li><strong>健康检查</strong>：监控应用关键功能的可用性</li>
</ul>
<h4 id="第二阶段-增强监控" tabindex="-1"><a class="header-anchor" href="#第二阶段-增强监控"><span>第二阶段：增强监控</span></a></h4>
<ul>
<li><strong>用户行为跟踪</strong>：实现关键业务流程的用户行为分析</li>
<li><strong>资源监控</strong>：添加API请求和资源加载性能监控</li>
<li><strong>自定义事件</strong>：实现业务相关的自定义事件跟踪</li>
</ul>
<h4 id="第三阶段-高级监控" tabindex="-1"><a class="header-anchor" href="#第三阶段-高级监控"><span>第三阶段：高级监控</span></a></h4>
<ul>
<li><strong>会话回放</strong>：选择性记录用户会话以重现问题</li>
<li><strong>预测性分析</strong>：实施趋势分析和异常检测</li>
<li><strong>A/B测试集成</strong>：将监控数据与实验框架集成</li>
</ul>
<h3 id="性能优化与监控系统自身性能" tabindex="-1"><a class="header-anchor" href="#性能优化与监控系统自身性能"><span>性能优化与监控系统自身性能</span></a></h3>
<p>监控系统本身也需要优化以确保不会对应用性能产生负面影响：</p>
<ol>
<li>
<p><strong>轻量级SDK设计</strong>：</p>
<ul>
<li>核心SDK应小于5KB(gzip后)</li>
<li>使用模块化设计，按需加载功能</li>
<li>避免使用重量级第三方依赖</li>
</ul>
</li>
<li>
<p><strong>批处理与缓冲</strong>：</p>
<ul>
<li>批量发送事件而非单独发送</li>
<li>使用内存缓冲区暂存事件数据</li>
<li>实现指数退避的重试策略</li>
</ul>
</li>
<li>
<p><strong>资源消耗限制</strong>：</p>
<ul>
<li>限制监控代码的CPU使用率(&lt;1%)</li>
<li>控制内存使用，防止内存泄漏</li>
<li>使用浏览器空闲时间处理非关键任务</li>
</ul>
</li>
</ol>
<h3 id="跨团队协作最佳实践" tabindex="-1"><a class="header-anchor" href="#跨团队协作最佳实践"><span>跨团队协作最佳实践</span></a></h3>
<p>有效的前端监控需要开发、运维、产品和管理层的紧密协作：</p>
<ol>
<li>
<p><strong>共同确定KPI</strong>：</p>
<ul>
<li>与业务团队共同确定关键监控指标</li>
<li>建立技术指标与业务指标的关联关系</li>
<li>定期回顾和调整监控策略</li>
</ul>
</li>
<li>
<p><strong>监控驱动开发</strong>：</p>
<ul>
<li>在开发新功能前先设计监控策略</li>
<li>将可观测性作为验收标准的一部分</li>
<li>鼓励开发人员主动添加业务相关的自定义事件</li>
</ul>
</li>
<li>
<p><strong>数据驱动决策</strong>：</p>
<ul>
<li>使用监控数据指导产品和技术决策</li>
<li>建立定期的监控数据回顾会议</li>
<li>将监控结果纳入开发团队的KPI</li>
</ul>
</li>
</ol>
<h3 id="故障应对流程" tabindex="-1"><a class="header-anchor" href="#故障应对流程"><span>故障应对流程</span></a></h3>
<p>建立系统化的故障应对流程，确保问题能够快速有效地解决：</p>
<ol>
<li>
<p><strong>分级响应策略</strong>：</p>
<ul>
<li>P0 (关键业务中断)：立即响应，全团队参与</li>
<li>P1 (重要功能受损)：1小时内响应，专人负责</li>
<li>P2 (非关键问题)：工作日内响应，计划修复</li>
<li>P3 (轻微问题)：下一迭代周期处理</li>
</ul>
</li>
<li>
<p><strong>标准化事件处理</strong>：</p>
<ul>
<li>问题确认与分类</li>
<li>初步评估与升级决策</li>
<li>根因分析与修复</li>
<li>验证与复盘</li>
<li>知识库更新</li>
</ul>
</li>
<li>
<p><strong>持续改进循环</strong>：</p>
<ul>
<li>每次重大故障后进行复盘会议</li>
<li>更新监控规则和告警阈值</li>
<li>完善自动化修复和预防措施</li>
</ul>
</li>
</ol>
<p>通过遵循这些最佳实践，团队可以构建出一个强大、可靠且具有成本效益的前端监控系统，不仅能够及时发现并解决问题，还能持续优化应用性能和用户体验。</p>
</div></template>



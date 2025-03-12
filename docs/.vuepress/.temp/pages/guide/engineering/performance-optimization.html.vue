<template><div><h1 id="web应用性能优化策略" tabindex="-1"><a class="header-anchor" href="#web应用性能优化策略"><span>Web应用性能优化策略</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#%E5%BC%95%E8%A8%80">引言</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%A6%82%E8%BF%B0">性能优化概述</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87%E4%B8%8E%E6%B5%8B%E9%87%8F">性能指标与测量</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E4%BC%98%E5%8C%96">网络传输优化</a></li>
<li><a href="#%E8%B5%84%E6%BA%90%E5%8A%A0%E8%BD%BD%E4%BC%98%E5%8C%96">资源加载优化</a></li>
<li><a href="#JavaScript%E4%BC%98%E5%8C%96">JavaScript优化</a></li>
<li><a href="#CSS%E4%BC%98%E5%8C%96">CSS优化</a></li>
<li><a href="#%E5%9B%BE%E5%83%8F%E5%92%8C%E5%A4%9A%E5%AA%92%E4%BD%93%E4%BC%98%E5%8C%96">图像和多媒体优化</a></li>
<li><a href="#%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5">缓存策略</a></li>
<li><a href="#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">移动端性能优化</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E7%9B%91%E6%8E%A7%E4%B8%8E%E5%88%86%E6%9E%90">性能监控与分析</a></li>
<li><a href="#%E5%B8%B8%E8%A7%81%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98%E6%8E%92%E6%9F%A5">常见性能问题排查</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%A1%88%E4%BE%8B%E5%88%86%E6%9E%90">性能优化案例分析</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%A0%B8%E5%AF%B9%E6%B8%85%E5%8D%95">性能优化核对清单</a></li>
<li><a href="#%E6%8E%A8%E8%8D%90%E5%B7%A5%E5%85%B7%E4%B8%8E%E8%B5%84%E6%BA%90">推荐工具与资源</a></li>
</ol>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>随着Web应用的复杂度不断提升，性能优化已成为前端开发中不可忽视的关键环节。一个性能卓越的应用不仅能够提升用户体验，还能为企业带来实际的商业价值。本文档旨在提供一个全面、系统的Web应用性能优化指南，帮助开发者从多个维度提升应用性能。</p>
<h2 id="性能优化概述" tabindex="-1"><a class="header-anchor" href="#性能优化概述"><span>性能优化概述</span></a></h2>
<h3 id="性能对业务的影响" tabindex="-1"><a class="header-anchor" href="#性能对业务的影响"><span>性能对业务的影响</span></a></h3>
<ul>
<li>
<p><strong>用户留存与转化</strong>: 研究表明，页面加载时间每增加1秒，转化率可能下降7%；超过3秒的加载时间会导致53%的用户放弃访问</p>
</li>
<li>
<p><strong>SEO排名</strong>: Google将页面速度作为网站排名的重要指标，性能优化直接影响搜索引擎排名</p>
</li>
<li>
<p><strong>用户体验</strong>: 页面响应迅速、动画流畅的应用会显著提升用户满意度和参与度</p>
</li>
<li>
<p><strong>服务成本</strong>: 高效应用能够减少服务器资源占用，降低运营成本</p>
</li>
</ul>
<h3 id="性能优化原则" tabindex="-1"><a class="header-anchor" href="#性能优化原则"><span>性能优化原则</span></a></h3>
<ol>
<li><strong>用户为中心</strong>: 优先优化影响用户体验的关键路径和交互</li>
<li><strong>测量驱动</strong>: 基于数据和指标进行优化，避免主观臆断</li>
<li><strong>渐进式优化</strong>: 从影响最大的问题开始，循序渐进</li>
<li><strong>全链路优化</strong>: 从网络请求到渲染呈现，覆盖前后端各环节</li>
<li><strong>持续改进</strong>: 将性能优化融入开发流程，而非一次性工作</li>
</ol>
<h2 id="性能指标与测量" tabindex="-1"><a class="header-anchor" href="#性能指标与测量"><span>性能指标与测量</span></a></h2>
<h3 id="核心web指标-core-web-vitals" tabindex="-1"><a class="header-anchor" href="#核心web指标-core-web-vitals"><span>核心Web指标(Core Web Vitals)</span></a></h3>
<h4 id="核心web指标-core-web-vitals-1" tabindex="-1"><a class="header-anchor" href="#核心web指标-core-web-vitals-1"><span>核心Web指标(Core Web Vitals)</span></a></h4>
<ul>
<li>
<p>LCP (Largest Contentful Paint): 最大内容绘制</p>
<ul>
<li>衡量页面主要内容加载速度</li>
<li>良好标准: ≤2.5秒</li>
<li>需要改进：2.5秒~4秒</li>
<li>较差：&gt;4秒</li>
<li>优化方法: 优化服务器响应时间、精简CSS/JS、优化关键渲染路径</li>
</ul>
</li>
<li>
<p>FID (First Input Delay): 首次输入延迟</p>
<ul>
<li>衡量页面交互响应速度</li>
<li>良好标准: ≤100ms</li>
<li>需要改进：100ms~300ms</li>
<li>较差：&gt;300ms</li>
<li>优化方法: 拆分长任务、减少主线程阻塞、使用Web Worker</li>
</ul>
</li>
<li>
<p>CLS (Cumulative Layout Shift): 累积布局偏移</p>
<ul>
<li>衡量页面布局稳定性</li>
<li>良好标准: ≤0.1</li>
<li>需要改进：0.1~0.25</li>
<li>较差：&gt;0.25</li>
<li>优化方法: 为多媒体指定尺寸、合理使用占位符、避免动态插入内容</li>
</ul>
</li>
</ul>
<h4 id="其他重要指标" tabindex="-1"><a class="header-anchor" href="#其他重要指标"><span>其他重要指标</span></a></h4>
<ul>
<li>
<p>TTFB (Time To First Byte)：首字节时间，衡量服务器响应时间</p>
<ul>
<li>良好：≤200ms</li>
<li>需要改进：200ms~400ms</li>
<li>较差：&gt;400ms</li>
<li>影响因素: 网络延迟、服务器处理时间、后端性能</li>
</ul>
</li>
<li>
<p>TTI (Time To Interactive)：可交互时间，衡量页面可交互时间</p>
<ul>
<li>良好：≤5秒</li>
<li>需要改进：5秒~10秒</li>
<li>较差：&gt;10秒</li>
<li>优化方向: 延迟加载非关键资源、减少JavaScript执行时间</li>
</ul>
</li>
<li>
<p>FCP (First Contentful Paint)：首次内容绘制，衡量内容可见时间</p>
<ul>
<li>良好：≤1.8秒</li>
<li>需要改进：1.8秒~3秒</li>
<li>较差：&gt;3秒</li>
<li>优化方向: 减少阻塞渲染的资源、优化关键CSS</li>
</ul>
</li>
</ul>
<h3 id="性能测量方法" tabindex="-1"><a class="header-anchor" href="#性能测量方法"><span>性能测量方法</span></a></h3>
<h4 id="工具选择" tabindex="-1"><a class="header-anchor" href="#工具选择"><span>工具选择</span></a></h4>
<ul>
<li>
<p><strong>Chrome DevTools</strong>: 深入分析网络、渲染、JavaScript执行等性能问题</p>
<ul>
<li>Performance面板: 分析运行时性能</li>
<li>Network面板: 分析网络请求</li>
<li>Memory面板: 分析内存使用</li>
<li>Lighthouse: 综合性能评估</li>
</ul>
</li>
<li>
<p><strong>WebPageTest</strong>: 提供多区域、多设备、多条件下的性能测试</p>
<ul>
<li>支持真实浏览器环境测试</li>
<li>提供详细的性能瀑布图</li>
<li>支持视频录制和视觉比较</li>
</ul>
</li>
<li>
<p><strong>Performance API</strong>: 利用浏览器原生API收集性能数据</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 获取导航性能数据</span></span>
<span class="line"><span class="token keyword">const</span> navigationTiming <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'navigation'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">TTFB: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>navigationTiming<span class="token punctuation">.</span>responseStart <span class="token operator">-</span> navigationTiming<span class="token punctuation">.</span>requestStart<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 监控LCP</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> entries <span class="token operator">=</span> entryList<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> lastEntry <span class="token operator">=</span> entries<span class="token punctuation">[</span>entries<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">LCP: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lastEntry<span class="token punctuation">.</span>startTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'largest-contentful-paint'</span><span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="性能监控策略" tabindex="-1"><a class="header-anchor" href="#性能监控策略"><span>性能监控策略</span></a></h4>
<ul>
<li><strong>实验室测试</strong>: 开发环境中的性能测试，确保发布前质量</li>
<li><strong>真实用户监控(RUM)</strong>: 收集真实用户使用数据，了解实际性能表现</li>
<li><strong>性能预算</strong>: 设定明确的性能指标阈值，作为开发和发布的标准</li>
<li><strong>自动化测试</strong>: 将性能测试集成至CI/CD流程，发现性能退化</li>
</ul>
<h3 id="性能监控方法" tabindex="-1"><a class="header-anchor" href="#性能监控方法"><span>性能监控方法</span></a></h3>
<ul>
<li>了解RUM与合成监控的区别与适用场景</li>
<li>学习设置并维护性能预算</li>
<li>分析实验室数据与用户真实体验数据的差异</li>
</ul>
<h2 id="网络传输优化" tabindex="-1"><a class="header-anchor" href="#网络传输优化"><span>网络传输优化</span></a></h2>
<h3 id="http优化" tabindex="-1"><a class="header-anchor" href="#http优化"><span>HTTP优化</span></a></h3>
<ul>
<li>
<p><strong>启用HTTP/2</strong>: 多路复用、头部压缩、服务器推送</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token comment"># Nginx配置HTTP/2</span></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server_name</span> example.com</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 其他配置...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>尝试HTTP/3(QUIC)</strong>: 基于UDP的传输协议，减少握手延迟</p>
</li>
<li>
<p><strong>减少DNS查询</strong>: 使用DNS预解析，减少域名解析时间</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dns-prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="减少请求数量" tabindex="-1"><a class="header-anchor" href="#减少请求数量"><span>减少请求数量</span></a></h3>
<ul>
<li>
<p><strong>合并资源文件</strong>: 减少HTTP请求数</p>
<ul>
<li>使用构建工具(Webpack/Rollup)合并JavaScript和CSS</li>
<li>采用CSS Sprites合并小图标</li>
<li>使用字体图标或SVG图标替代图片</li>
</ul>
</li>
<li>
<p><strong>延迟加载非关键资源</strong>:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>actual-image.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>延迟加载图片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"DOMContentLoaded"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> lazyImages <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".lazy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> imageObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> img <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span></span>
<span class="line">        img<span class="token punctuation">.</span>src <span class="token operator">=</span> img<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span></span>
<span class="line">        observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  lazyImages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">image</span> <span class="token operator">=></span> imageObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="压缩与传输优化" tabindex="-1"><a class="header-anchor" href="#压缩与传输优化"><span>压缩与传输优化</span></a></h3>
<ul>
<li>
<p><strong>启用Gzip/Brotli压缩</strong>: 减少传输数据量</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token comment"># Nginx配置Gzip</span></span>
<span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain text/css application/json application/javascript</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 其他配置...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用CDN加速</strong>: 将资源分发到离用户更近的节点</p>
<ul>
<li>静态资源CDN化</li>
<li>合理设置缓存策略</li>
<li>使用多CDN策略提高可用性</li>
</ul>
</li>
<li>
<p><strong>预连接和预加载关键资源</strong>:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 预连接 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 预加载关键CSS --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>critical.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 预加载字体 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font.woff2<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font/woff2<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="资源加载优化" tabindex="-1"><a class="header-anchor" href="#资源加载优化"><span>资源加载优化</span></a></h2>
<h3 id="资源优先级管理" tabindex="-1"><a class="header-anchor" href="#资源优先级管理"><span>资源优先级管理</span></a></h3>
<ul>
<li>
<p><strong>识别关键渲染路径(CRP)</strong>: 优先加载影响首屏渲染的资源</p>
</li>
<li>
<p><strong>利用浏览器提示</strong>: 使用preload、prefetch、preconnect等资源提示</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 关键资源预加载 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>critical.js<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>script<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 未来页面资源预获取 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next-page.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>利用Priority Hints(实验特性)</strong>: 明确指定资源加载优先级</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hero.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">importance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>high<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>关键图片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>analytics.js<span class="token punctuation">"</span></span> <span class="token attr-name">importance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>low<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="代码拆分与按需加载" tabindex="-1"><a class="header-anchor" href="#代码拆分与按需加载"><span>代码拆分与按需加载</span></a></h3>
<ul>
<li>
<p><strong>路由级代码拆分</strong>: 基于路由拆分代码包</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React中使用React.lazy和Suspense实现代码拆分</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense<span class="token punctuation">,</span> lazy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./routes/Home'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./routes/About'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Switch<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>组件级懒加载</strong>: 延迟加载非首屏组件</p>
</li>
<li>
<p><strong>按需导入</strong>: 只导入需要使用的模块</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 按需导入lodash方法而不是整个库</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> debounce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lodash-es'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 而不是:</span></span>
<span class="line"><span class="token comment">// import _ from 'lodash';</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="现代打包策略" tabindex="-1"><a class="header-anchor" href="#现代打包策略"><span>现代打包策略</span></a></h3>
<ul>
<li>
<p><strong>Tree Shaking</strong>: 移除未使用的代码</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">usedExports</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Module/NoModule模式</strong>: 为现代浏览器和传统浏览器提供不同版本</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 现代浏览器版本 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app.modern.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token comment">&lt;!-- 传统浏览器版本 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">nomodule</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app.legacy.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>动态导入</strong>: 根据条件动态加载模块</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 用户点击后才加载评论模块</span></span>
<span class="line">button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> loadComments <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./comments.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">loadComments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="javascript优化" tabindex="-1"><a class="header-anchor" href="#javascript优化"><span>JavaScript优化</span></a></h2>
<h3 id="减少主线程阻塞" tabindex="-1"><a class="header-anchor" href="#减少主线程阻塞"><span>减少主线程阻塞</span></a></h3>
<ul>
<li>
<p><strong>代码拆分与异步加载</strong>: 拆分大型JavaScript文件</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>critical.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>non-critical.js<span class="token punctuation">"</span></span> <span class="token attr-name">defer</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>analytics.js<span class="token punctuation">"</span></span> <span class="token attr-name">async</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用Web Workers</strong>: 将密集计算任务移至后台线程</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> complexData<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'处理结果:'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// worker.js</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">complexCalculation</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>任务切片</strong>: 将长任务拆分为小任务，避免阻塞主线程</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 处理1000个数据项</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processItems</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> totalItems <span class="token operator">=</span> items<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> batchSize <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">// 每批处理50项</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">processBatch</span><span class="token punctuation">(</span><span class="token parameter">startIndex</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> endIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> batchSize<span class="token punctuation">,</span> totalItems<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> endIndex<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">processItem</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>endIndex <span class="token operator">&lt;</span> totalItems<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 使用requestAnimationFrame或setTimeout切片任务</span></span>
<span class="line">      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">processBatch</span><span class="token punctuation">(</span>endIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">processBatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="代码质量优化" tabindex="-1"><a class="header-anchor" href="#代码质量优化"><span>代码质量优化</span></a></h3>
<ul>
<li>
<p><strong>避免内存泄漏</strong>: 及时清理事件监听器和引用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>handleResize <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleResize</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">handleResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理调整大小</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 清理事件监听器</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用防抖和节流</strong>: 控制高频事件处理</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 防抖 - 搜索输入</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> searchInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'search'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">searchInput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">search</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 只在用户停止输入500ms后执行</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 节流 - 滚动事件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> lastExec <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> lastExec <span class="token operator">>=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      lastExec <span class="token operator">=</span> now<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">updateNavigation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每200ms最多执行一次</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>优化DOM操作</strong>: 减少重排和重绘</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 不好的做法 - 多次DOM操作</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addItems</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 优化做法 - 文档片段</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addItems</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="渲染性能优化" tabindex="-1"><a class="header-anchor" href="#渲染性能优化"><span>渲染性能优化</span></a></h3>
<ul>
<li>
<p><strong>利用requestAnimationFrame</strong>: 在合适的时机执行动画和视觉更新</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">animateElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'animated'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    position <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>position<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用passive事件监听器</strong>: 提升滚动和触摸事件性能</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'touchstart'</span><span class="token punctuation">,</span> handleTouchStart<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 告诉浏览器不会调用preventDefault()</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>复杂动画使用CSS硬件加速</strong>: 利用GPU加速提升动画性能</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.hardware-accelerated</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span> <span class="token comment">/* 谨慎使用will-change */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="css优化" tabindex="-1"><a class="header-anchor" href="#css优化"><span>CSS优化</span></a></h2>
<h3 id="加载和渲染优化" tabindex="-1"><a class="header-anchor" href="#加载和渲染优化"><span>加载和渲染优化</span></a></h3>
<ul>
<li>
<p><strong>关键CSS内联</strong>: 减少首屏渲染阻塞</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token comment">/* 内联关键CSS，只包含首屏渲染所需的样式 */</span></span>
<span class="line">    <span class="token selector">header</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #f7f7f7<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.hero</span> <span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>hero-small.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>rel<span class="token operator">=</span><span class="token string">'stylesheet'</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>减少CSS选择器复杂度</strong>: 使用高效的CSS选择器</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 避免 */</span></span>
<span class="line"><span class="token selector">.header ul li a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 推荐 */</span></span>
<span class="line"><span class="token selector">.header-link</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>避免@import</strong>: 使用link标签替代CSS中的@import</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 推荐 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>base.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>components.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 避免在CSS中使用 @import --></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="精简和复用css" tabindex="-1"><a class="header-anchor" href="#精简和复用css"><span>精简和复用CSS</span></a></h3>
<ul>
<li>
<p><strong>采用CSS方法论</strong>: BEM、SMACSS或OOCSS实现可维护和优化的CSS</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* BEM命名方法示例 */</span></span>
<span class="line"><span class="token selector">.block</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.block__element</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.block--modifier</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 具体示例 */</span></span>
<span class="line"><span class="token selector">.card</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.card__title</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.card__image</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.card--featured</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用现代CSS特性</strong>: 使用CSS变量、计算函数等减少重复代码</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--primary-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--spacing-unit</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--spacing-unit<span class="token punctuation">)</span> * 2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing-unit<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.button--large</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--spacing-unit<span class="token punctuation">)</span> * 3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>移除未使用的CSS</strong>: 使用PurgeCSS等工具清除未使用样式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// postcss.config.js 示例</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@fullhuman/postcss-purgecss'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./src/**/*.html'</span><span class="token punctuation">,</span> <span class="token string">'./src/**/*.vue'</span><span class="token punctuation">,</span> <span class="token string">'./src/**/*.jsx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">defaultExtractor</span><span class="token operator">:</span> <span class="token parameter">content</span> <span class="token operator">=></span> content<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\w-/:]+(?&lt;!:)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="动画性能优化" tabindex="-1"><a class="header-anchor" href="#动画性能优化"><span>动画性能优化</span></a></h3>
<ul>
<li>
<p><strong>使用transform和opacity进行动画</strong>: 避免触发布局</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 避免 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> bad-animation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 推荐 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> good-animation</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>适当使用will-change属性</strong>: 提前告知浏览器元素将发生变化</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.sidebar</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 仅在动画前添加will-change更高效 */</span></span>
<span class="line"><span class="token selector">.sidebar:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.sidebar.animating</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="图像和多媒体优化" tabindex="-1"><a class="header-anchor" href="#图像和多媒体优化"><span>图像和多媒体优化</span></a></h2>
<h3 id="图像优化" tabindex="-1"><a class="header-anchor" href="#图像优化"><span>图像优化</span></a></h3>
<ul>
<li>
<p><strong>选择合适的图像格式</strong>:</p>
<ul>
<li>PEG: 照片和渐变图像</li>
<li>PNG: 需要透明度的图像</li>
<li>WebP: 现代格式，比JPEG小~30%</li>
<li>AVIF: 新兴格式，提供更高压缩率</li>
<li>SVG: 图标和简单图形</li>
</ul>
</li>
<li>
<p><strong>响应式图像</strong>: 根据设备特性提供不同尺寸图像</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-large.webp<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 800px)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-large.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 800px)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/jpeg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-medium.webp<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 400px)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-medium.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 400px)<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/jpeg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-small.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>响应式图像<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用适当的压缩级别</strong>: 平衡质量和文件大小</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 使用imagemin压缩图像</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> imagemin imagemin-mozjpeg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在构建脚本中使用</span></span>
<span class="line">const imagemin <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">'imagemin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">const imageminMozjpeg <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">'imagemin-mozjpeg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span>async <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">  await imagemin<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'images/*.jpg'</span><span class="token punctuation">]</span>, <span class="token punctuation">{</span></span>
<span class="line">    destination: <span class="token string">'build/images'</span>,</span>
<span class="line">    plugins: <span class="token punctuation">[</span></span>
<span class="line">      imageminMozjpeg<span class="token punctuation">(</span><span class="token punctuation">{</span>quality: <span class="token number">75</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>图像CDN和动态调整</strong>: 使用如Cloudinary或imgix等服务</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 通过Cloudinary动态调整图像 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/sample.jpg<span class="token punctuation">"</span></span></span>
<span class="line">     <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cloudinary优化图像<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="视频优化" tabindex="-1"><a class="header-anchor" href="#视频优化"><span>视频优化</span></a></h3>
<ul>
<li>
<p><strong>提供多种格式和分辨率</strong>: 支持不同设备和带宽</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>metadata<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  Your browser does not support the video tag.</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>视频懒加载</strong>: 仅在需要时加载完整视频</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video-poster.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> lazyVideos <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'video source[data-src]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> videoObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> source <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> video <span class="token operator">=</span> source<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span></span>
<span class="line">      source<span class="token punctuation">.</span>src <span class="token operator">=</span> source<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span></span>
<span class="line">      video<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      observer<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">lazyVideos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">video</span> <span class="token operator">=></span> videoObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>video<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="缓存策略" tabindex="-1"><a class="header-anchor" href="#缓存策略"><span>缓存策略</span></a></h2>
<h3 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存"><span>浏览器缓存</span></a></h3>
<ul>
<li>
<p><strong>设置合适的Cache-Control头</strong>: 控制浏览器缓存行为</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token comment"># Nginx配置示例</span></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /static/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">"public, max-age=31536000, immutable"</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">"no-cache"</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用ETag和Last-Modified</strong>: 支持条件请求，减少不必要的传输</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token directive"><span class="token keyword">location</span> /content/</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">etag</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">"public, max-age=86400"</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Cache Busting</strong>: 通过文件名或查询参数更新缓存</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 构建工具自动添加内容哈希 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.83f7a812.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.72b3z891.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="应用缓存" tabindex="-1"><a class="header-anchor" href="#应用缓存"><span>应用缓存</span></a></h3>
<ul>
<li><strong>Service Worker缓存</strong>: 实现离线访问和快速加载<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// service-worker.js</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span></span>
<span class="line">    caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'v1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">cache</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/styles.css'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/app.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/offline.html'</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span></span>
<span class="line">    caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> response <span class="token operator">||</span> <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">'/offline.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>本地存储优化</strong>: 合理使用localStorage、sessionStorage和IndexedDB<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// localStorage用于小型、不频繁变化的数据</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'preferences'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>userPreferences<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// IndexedDB用于大型、结构化数据</span></span>
<span class="line"><span class="token keyword">const</span> openRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'MyDatabase'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">openRequest<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> store <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token string">'customers'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">keyPath</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  store<span class="token punctuation">.</span><span class="token function">createIndex</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">openRequest<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token string">'customers'</span><span class="token punctuation">,</span> <span class="token string">'readwrite'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> store <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token string">'customers'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  store<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="移动端性能优化" tabindex="-1"><a class="header-anchor" href="#移动端性能优化"><span>移动端性能优化</span></a></h2>
<h3 id="移动特有优化" tabindex="-1"><a class="header-anchor" href="#移动特有优化"><span>移动特有优化</span></a></h3>
<ul>
<li>
<p><strong>触控优化</strong>: 提升触摸交互响应速度</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">touch-action</span><span class="token punctuation">:</span> manipulation<span class="token punctuation">;</span> <span class="token comment">/* 减少点击延迟 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>减少电池消耗</strong>: 优化动画和传感器使用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 在页面可见时才执行动画</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleVisibilityChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">stopAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">startAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'visibilitychange'</span><span class="token punctuation">,</span> handleVisibilityChange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>优化离线体验</strong>: 实现核心功能的离线可用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 注册Service Worker</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/sw.js'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">registration</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service Worker 注册成功:'</span><span class="token punctuation">,</span> registration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service Worker 注册失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="渐进式web应用-pwa" tabindex="-1"><a class="header-anchor" href="#渐进式web应用-pwa"><span>渐进式Web应用(PWA)</span></a></h3>
<ul>
<li>
<p><strong>实现App Shell模型</strong>: 快速显示应用框架，提升体验</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 缓存App Shell</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span></span>
<span class="line">    caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'app-shell-v1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">cache</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/styles/app-shell.css'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/scripts/app-shell.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/images/logo.svg'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">'/images/header-bg.jpg'</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>添加Web App Manifest</strong>: 支持添加到主屏幕</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"我的应用"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"应用"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#3498db"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icon-192.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icon-512.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"512x512"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="性能监控与分析" tabindex="-1"><a class="header-anchor" href="#性能监控与分析"><span>性能监控与分析</span></a></h2>
<h3 id="监控系统搭建" tabindex="-1"><a class="header-anchor" href="#监控系统搭建"><span>监控系统搭建</span></a></h3>
<ul>
<li>
<p><strong>实时用户监控(RUM)</strong>: 收集真实用户数据</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Performance API收集核心Web指标</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">collectWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      list<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 获取指标类型和值</span></span>
<span class="line">        <span class="token keyword">const</span> metricName <span class="token operator">=</span> entry<span class="token punctuation">.</span>name<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> metricValue <span class="token operator">=</span> entry<span class="token punctuation">.</span>startTime <span class="token operator">||</span> entry<span class="token punctuation">.</span>renderTime <span class="token operator">||</span> entry<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 发送到分析服务器</span></span>
<span class="line">        <span class="token function">sendAnalytics</span><span class="token punctuation">(</span>metricName<span class="token punctuation">,</span> metricValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 监控各种指标</span></span>
<span class="line">    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'largest-contentful-paint'</span><span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'layout-shift'</span><span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'first-input'</span><span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Performance monitoring error:'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sendAnalytics</span><span class="token punctuation">(</span><span class="token parameter">metric<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 发送到分析服务器的代码</span></span>
<span class="line">  navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    metric<span class="token punctuation">,</span></span>
<span class="line">    value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">collectWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>性能异常告警</strong>: 当性能下降时触发告警</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 服务端性能监控逻辑(Node.js示例)</span></span>
<span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 收集性能数据的端点</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/analytics'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> metric<span class="token punctuation">,</span> value<span class="token punctuation">,</span> url<span class="token punctuation">,</span> timestamp <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 存储数据</span></span>
<span class="line">  <span class="token function">saveMetricToDatabase</span><span class="token punctuation">(</span>metric<span class="token punctuation">,</span> value<span class="token punctuation">,</span> url<span class="token punctuation">,</span> timestamp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 检查性能退化</span></span>
<span class="line">  <span class="token function">checkPerformanceRegression</span><span class="token punctuation">(</span>metric<span class="token punctuation">,</span> value<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">204</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">checkPerformanceRegression</span><span class="token punctuation">(</span><span class="token parameter">metric<span class="token punctuation">,</span> value<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取该指标的历史平均值</span></span>
<span class="line">  <span class="token function">getAverageValue</span><span class="token punctuation">(</span>metric<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">avgValue</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果当前值比平均值差30%以上，触发告警</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>metric <span class="token operator">===</span> <span class="token string">'LCP'</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">></span> avgValue <span class="token operator">*</span> <span class="token number">1.3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">sendAlert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">LCP性能退化警报: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 当前值 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms, 平均值 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>avgValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sendAlert</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 发送告警(邮件、Slack、PagerDuty等)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">告警: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// alertService.send(message);</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>分析性能瓶颈</strong>: 识别和解决主要问题</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Chrome DevTools中使用Performance API测量关键渲染路径</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">measureCriticalRenderingPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> paintEntries <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'paint'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> navEntry <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'navigation'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> fcp <span class="token operator">=</span> paintEntries<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> entry<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'first-contentful-paint'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'DOM内容加载时间:'</span><span class="token punctuation">,</span> navEntry<span class="token punctuation">.</span>domContentLoadedEventEnd <span class="token operator">-</span> navEntry<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> <span class="token string">'ms'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'首次内容绘制时间:'</span><span class="token punctuation">,</span> fcp<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> <span class="token string">'ms'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'DOM解析时间:'</span><span class="token punctuation">,</span> navEntry<span class="token punctuation">.</span>domInteractive <span class="token operator">-</span> navEntry<span class="token punctuation">.</span>responseEnd<span class="token punctuation">,</span> <span class="token string">'ms'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'资源加载时间:'</span><span class="token punctuation">,</span> navEntry<span class="token punctuation">.</span>loadEventStart <span class="token operator">-</span> navEntry<span class="token punctuation">.</span>domContentLoadedEventEnd<span class="token punctuation">,</span> <span class="token string">'ms'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>用户体验相关分析</strong>: 将性能数据与用户行为关联</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 跟踪性能指标与转化率的关系</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> lcpValue<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取LCP值</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entryList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> entries <span class="token operator">=</span> entryList<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    lcpValue <span class="token operator">=</span> entries<span class="token punctuation">[</span>entries<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'largest-contentful-paint'</span><span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 跟踪转化事件</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#purchase-button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 发送LCP和转化事件的关联数据</span></span>
<span class="line">    <span class="token function">sendAnalytics</span><span class="token punctuation">(</span><span class="token string">'purchase'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">lcp</span><span class="token operator">:</span> lcpValue<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="常见性能问题排查" tabindex="-1"><a class="header-anchor" href="#常见性能问题排查"><span>常见性能问题排查</span></a></h2>
<h3 id="问题诊断流程" tabindex="-1"><a class="header-anchor" href="#问题诊断流程"><span>问题诊断流程</span></a></h3>
<ul>
<li>收集性能数据: 使用Lighthouse、WebPageTest等工具</li>
<li>识别关键瓶颈: 分析测量结果，找出主要问题</li>
<li>针对性优化: 根据瓶颈类型采取对应优化策略</li>
<li>验证优化效果: 重新测量确认改进效果</li>
<li>持续监控: 防止性能退化</li>
</ul>
<h3 id="常见问题与解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题与解决方案"><span>常见问题与解决方案</span></a></h3>
<h4 id="加载慢" tabindex="-1"><a class="header-anchor" href="#加载慢"><span>加载慢</span></a></h4>
<ul>
<li>
<p><strong>诊断</strong>: 大型JavaScript包、过多HTTP请求、未优化的图像</p>
</li>
<li>
<p><strong>解决方案</strong>: 代码拆分、资源压缩、图像优化、使用CDN</p>
</li>
</ul>
<h4 id="交互延迟" tabindex="-1"><a class="header-anchor" href="#交互延迟"><span>交互延迟</span></a></h4>
<ul>
<li>
<p><strong>诊断</strong>: JavaScript长任务、过多事件监听器、复杂DOM操作</p>
</li>
<li>
<p><strong>解决方案</strong>: 任务拆分、事件委托、虚拟滚动、请求节流</p>
</li>
</ul>
<h4 id="视觉不稳定" tabindex="-1"><a class="header-anchor" href="#视觉不稳定"><span>视觉不稳定</span></a></h4>
<ul>
<li><strong>诊断</strong>: 无尺寸图像、动态插入内容、字体加载</li>
<li><strong>解决方案</strong>: 设置图像尺寸、使用占位符、优化字体加载</li>
</ul>
<h4 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏"><span>内存泄漏</span></a></h4>
<p>诊断: 页面长时间运行后变慢、内存使用持续增长
解决方案: 清理事件监听器、避免全局变量、正确使用闭包</p>
<h2 id="性能优化案例分析" tabindex="-1"><a class="header-anchor" href="#性能优化案例分析"><span>性能优化案例分析</span></a></h2>
<h3 id="案例一-电商网站首页优化" tabindex="-1"><a class="header-anchor" href="#案例一-电商网站首页优化"><span>案例一：电商网站首页优化</span></a></h3>
<ul>
<li>
<p><strong>问题</strong>: LCP超过4秒，主要由大型英雄图像和过多JavaScript导致</p>
</li>
<li>
<p><strong>解决方案</strong>:</p>
<ol>
<li>优化英雄图像: 转换为WebP、预加载、响应式图像</li>
<li>延迟加载非关键JavaScript</li>
<li>实现关键CSS内联</li>
</ol>
<p>结果:</p>
<ul>
<li>LCP从4.3秒降至1.8秒</li>
<li>FID从180ms降至65ms</li>
<li>首屏加载时间减少56%</li>
<li>转化率提升12%</li>
</ul>
</li>
</ul>
<h3 id="案例二-spa应用性能优化" tabindex="-1"><a class="header-anchor" href="#案例二-spa应用性能优化"><span>案例二：SPA应用性能优化</span></a></h3>
<ul>
<li>
<p><strong>问题</strong>:</p>
<ol>
<li>初始JavaScript包过大(2.8MB)</li>
<li>交互响应缓慢，长任务阻塞主线程</li>
<li>数据缓存策略缺失，频繁请求API</li>
</ol>
</li>
<li>
<p><strong>解决方案</strong>:</p>
<ol>
<li>路由级代码拆分和延迟加载<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React Router实现</span></span>
<span class="line"><span class="token keyword">const</span> ProductList <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./ProductList'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ProductDetail <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./ProductDetail'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Loading <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Switch<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>ProductList<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/product/:id"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>ProductDetail<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>虚拟列表实现长列表优化<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用react-window简化长列表渲染</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FixedSizeList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-window'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ProductList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> style <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>ProductItem product<span class="token operator">=</span><span class="token punctuation">{</span>items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>FixedSizeList</span>
<span class="line">      height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span>
<span class="line">      width<span class="token operator">=</span><span class="token string">"100%"</span></span>
<span class="line">      itemSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">120</span><span class="token punctuation">}</span></span>
<span class="line">      itemCount<span class="token operator">=</span><span class="token punctuation">{</span>items<span class="token punctuation">.</span>length<span class="token punctuation">}</span></span>
<span class="line">      itemData<span class="token operator">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>Row<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>FixedSizeList<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>实现数据缓存和预取<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用React Query进行数据缓存</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> queryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'products'</span><span class="token punctuation">,</span> fetchProducts<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 5分钟内视为新鲜数据</span></span>
<span class="line">    <span class="token literal-property property">cacheTime</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token comment">// 缓存30分钟</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 预取单个商品详情</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">prefetchProduct</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">productId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    queryCache<span class="token punctuation">.</span><span class="token function">prefetchQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'product'</span><span class="token punctuation">,</span> productId<span class="token punctuation">]</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetchProductDetail</span><span class="token punctuation">(</span>productId<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token comment">/* 组件渲染 */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p><strong>结果</strong>:</p>
<ol>
<li>初始加载时间减少72%</li>
<li>交互响应时间减少85%</li>
<li>内存使用减少60%</li>
<li>页面加载时间减少50%</li>
<li>转化率提升20%</li>
</ol>
</li>
</ul>
<h3 id="案例三-媒体丰富型网站优化" tabindex="-1"><a class="header-anchor" href="#案例三-媒体丰富型网站优化"><span>案例三：媒体丰富型网站优化</span></a></h3>
<ul>
<li>
<p><strong>问题</strong>:</p>
<ol>
<li>CLS得分较高(0.38)，主要由图像和广告加载引起</li>
<li>大量未优化图像导致加载缓慢</li>
<li>第三方脚本阻塞主线程</li>
</ol>
</li>
<li>
<p><strong>解决方案</strong>:</p>
<ol>
<li>为所有图像和嵌入内容预留空间<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-container<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 16/9<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>示例图片<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>图像优化与延迟加载<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 使用多种分辨率和格式 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-400.webp 400w, image-800.webp 800w<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> </span>
<span class="line">    <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-400.jpg 400w, image-800.jpg 800w<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 600px) 400px, 800px<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-400.jpg<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>响应式图像<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>450<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>延迟加载第三方脚本<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 延迟加载非关键第三方脚本</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loadThirdPartyScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://thirdparty.com/analytics.js'</span><span class="token punctuation">;</span></span>
<span class="line">  script<span class="token punctuation">.</span>async <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 页面完全加载后再加载第三方脚本</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">'complete'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">loadThirdPartyScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> loadThirdPartyScript<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</li>
<li>
<p><strong>结果</strong>:</p>
<ol>
<li>CLS从0.38降至0.05</li>
<li>LCP改善48%(3.8秒 → 2.0秒)</li>
<li>首屏图像加载时间减少62%</li>
<li>页面完全加载时间减少35%</li>
</ol>
</li>
</ul>
<h2 id="性能优化核对清单" tabindex="-1"><a class="header-anchor" href="#性能优化核对清单"><span>性能优化核对清单</span></a></h2>
<h3 id="加载性能检查" tabindex="-1"><a class="header-anchor" href="#加载性能检查"><span>加载性能检查</span></a></h3>
<ul>
<li>[ ] 最小化和压缩所有文本资源(HTML/CSS/JavaScript)</li>
<li>[ ] 使用代码拆分和懒加载非关键资源</li>
<li>[ ] 优化图像(格式、尺寸、压缩)并使用响应式图像</li>
<li>[ ] 实施资源预加载策略(preload/prefetch/preconnect)</li>
<li>[ ] 降低第三方资源的影响(延迟加载、自托管字体)</li>
<li>[ ] 实现合理的缓存策略(Cache-Control标头)</li>
<li>[ ] 使用CDN分发静态资源</li>
<li>[ ] 优化Web字体加载</li>
<li>[ ] 减少关键渲染路径中的资源数量</li>
<li>[ ] 内联关键CSS，避免渲染阻塞</li>
</ul>
<h3 id="渲染性能检查" tabindex="-1"><a class="header-anchor" href="#渲染性能检查"><span>渲染性能检查</span></a></h3>
<ul>
<li>[ ] 避免大型复杂的布局和布局抖动</li>
<li>[ ] 减少复杂选择器和多层级DOM树</li>
<li>[ ] 优化animation和transition性能</li>
<li>[ ] 使用适当的transform和opacity进行动画</li>
<li>[ ] 减少回流和重绘操作</li>
<li>[ ] 谨慎使用expensive CSS属性(如box-shadow、filter等)</li>
<li>[ ] 避免频繁DOM操作，使用DocumentFragment</li>
<li>[ ] 使用适当的硬件加速技术</li>
<li>[ ] 优化Canvas/WebGL性能(如果适用)</li>
<li>[ ] 确保布局稳定性(CLS优化)</li>
</ul>
<h3 id="javascript执行检查" tabindex="-1"><a class="header-anchor" href="#javascript执行检查"><span>JavaScript执行检查</span></a></h3>
<ul>
<li>[ ] 避免长时间运行的JavaScript任务(&gt;50ms)</li>
<li>[ ] 使用防抖和节流控制高频事件</li>
<li>[ ] 将密集计算任务移至Web Workers</li>
<li>[ ] 最小化和优化第三方JavaScript</li>
<li>[ ] 异步加载非关键JavaScript</li>
<li>[ ] 使用RequestAnimationFrame进行视觉更新</li>
<li>[ ] 使用资源提示控制脚本加载优先级</li>
<li>[ ] 实现代码分割和树摇动(Tree Shaking)</li>
<li>[ ] 避免内存泄漏和全局变量污染</li>
<li>[ ] 优化事件监听器，使用事件委托</li>
</ul>
<h3 id="移动端性能检查" tabindex="-1"><a class="header-anchor" href="#移动端性能检查"><span>移动端性能检查</span></a></h3>
<ul>
<li>[ ] 确保响应式设计适合各种屏幕尺寸</li>
<li>[ ] 优化触摸事件响应，减少点击延迟</li>
<li>[ ] 考虑低带宽和高延迟网络环境</li>
<li>[ ] 考虑设备CPU和内存限制</li>
<li>[ ] 实现渐进式Web应用功能(Service Worker)</li>
<li>[ ] 设置合理的viewport meta标签</li>
<li>[ ] 减少电池消耗(优化传感器API使用)</li>
<li>[ ] 测试真实移动设备上的性能</li>
<li>[ ] 实现有效的离线支持策略</li>
</ul>
<h3 id="监控与分析检查" tabindex="-1"><a class="header-anchor" href="#监控与分析检查"><span>监控与分析检查</span></a></h3>
<ul>
<li>[ ] 实施真实用户性能监控(RUM)</li>
<li>[ ] 跟踪核心Web指标(LCP、FID、CLS)</li>
<li>[ ] 建立性能预算和自动化测试</li>
<li>[ ] 为性能退化配置告警系统</li>
<li>[ ] 配置定期性能测试和报告</li>
<li>[ ] 分析性能指标与业务指标的关系</li>
<li>[ ] 实施A/B测试评估性能改进效果</li>
<li>[ ] 使用Chrome UX Report或类似工具监控趋势</li>
</ul>
<h2 id="推荐工具与资源" tabindex="-1"><a class="header-anchor" href="#推荐工具与资源"><span>推荐工具与资源</span></a></h2>
<h3 id="性能测量工具" tabindex="-1"><a class="header-anchor" href="#性能测量工具"><span>性能测量工具</span></a></h3>
<ul>
<li><a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener noreferrer">Lighthouse<ExternalLinkIcon/></a> - 网站质量自动化测试工具</li>
<li><a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">WebPageTest<ExternalLinkIcon/></a> - 多条件下的网页性能测试</li>
<li><a href="https://developer.chrome.com/docs/devtools" target="_blank" rel="noopener noreferrer">Chrome DevTools<ExternalLinkIcon/></a> - 浏览器内置开发工具</li>
<li><a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights<ExternalLinkIcon/></a> - 谷歌页面性能分析工具</li>
<li><a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Core Web Vitals<ExternalLinkIcon/></a> - 网站性能核心指标测量</li>
<li><a href="https://github.com/GoogleChrome/lighthouse-ci" target="_blank" rel="noopener noreferrer">Lighthouse CI<ExternalLinkIcon/></a> - 持续集成环境中的性能测试</li>
</ul>
<h3 id="优化工具" tabindex="-1"><a class="header-anchor" href="#优化工具"><span>优化工具</span></a></h3>
<ul>
<li><a href="https://github.com/webpack-contrib/webpack-bundle-analyzer" target="_blank" rel="noopener noreferrer">Webpack Bundle Analyzer<ExternalLinkIcon/></a> - 分析JavaScript包大小</li>
<li><a href="https://github.com/terser/terser" target="_blank" rel="noopener noreferrer">Terser<ExternalLinkIcon/></a> - JavaScript压缩工具</li>
<li><a href="https://purgecss.com/" target="_blank" rel="noopener noreferrer">PurgeCSS<ExternalLinkIcon/></a> - 删除未使用的CSS</li>
<li><a href="https://github.com/imagemin/imagemin" target="_blank" rel="noopener noreferrer">Imagemin<ExternalLinkIcon/></a> - 图像压缩工具</li>
<li><a href="https://squoosh.app/" target="_blank" rel="noopener noreferrer">Squoosh<ExternalLinkIcon/></a> - 图像优化工具</li>
<li><a href="https://github.com/svg/svgo" target="_blank" rel="noopener noreferrer">SVGO<ExternalLinkIcon/></a> - SVG优化工具</li>
<li><a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel<ExternalLinkIcon/></a> - JavaScript编译器</li>
<li><a href="https://postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS<ExternalLinkIcon/></a> - CSS转换工具</li>
</ul>
<h3 id="监控工具" tabindex="-1"><a class="header-anchor" href="#监控工具"><span>监控工具</span></a></h3>
<ul>
<li><a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics<ExternalLinkIcon/></a> - 网站流量分析</li>
<li><a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer">Google Tag Manager<ExternalLinkIcon/></a> - 标签管理工具</li>
<li><a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">Web Vitals JS<ExternalLinkIcon/></a> - 测量核心Web指标的轻量级库</li>
<li><a href="https://newrelic.com/" target="_blank" rel="noopener noreferrer">New Relic<ExternalLinkIcon/></a> - 应用性能监控系统</li>
<li><a href="https://www.datadoghq.com/real-user-monitoring/" target="_blank" rel="noopener noreferrer">Datadog RUM<ExternalLinkIcon/></a> - 实时用户监控</li>
<li><a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">Sentry<ExternalLinkIcon/></a> - 错误跟踪和性能监控</li>
<li><a href="https://speedcurve.com/" target="_blank" rel="noopener noreferrer">SpeedCurve<ExternalLinkIcon/></a> - 前端性能监控和分析</li>
</ul>
<h3 id="学习资源" tabindex="-1"><a class="header-anchor" href="#学习资源"><span>学习资源</span></a></h3>
<ul>
<li><a href="https://web.dev/" target="_blank" rel="noopener noreferrer">Web.dev<ExternalLinkIcon/></a> - Google的Web开发和性能资源</li>
<li><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN Web Docs<ExternalLinkIcon/></a> - Web技术权威文档</li>
<li><a href="https://www.smashingmagazine.com/" target="_blank" rel="noopener noreferrer">Smashing Magazine<ExternalLinkIcon/></a> - 性能优化文章和教程</li>
<li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks<ExternalLinkIcon/></a> - 前端优化技巧和教程</li>
<li><a href="https://calendar.perfplanet.com/" target="_blank" rel="noopener noreferrer">Performance Calendar<ExternalLinkIcon/></a> - Web性能优化年度文章集</li>
<li><a href="https://hpbn.co/" target="_blank" rel="noopener noreferrer">High Performance Browser Networking<ExternalLinkIcon/></a> - Ilya Grigorik的经典著作</li>
</ul>
<h3 id="性能api资源" tabindex="-1"><a class="header-anchor" href="#性能api资源"><span>性能API资源</span></a></h3>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API" target="_blank" rel="noopener noreferrer">Navigation Timing API<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API" target="_blank" rel="noopener noreferrer">Resource Timing API<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Performance_Observer_API" target="_blank" rel="noopener noreferrer">Performance Observer API<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API" target="_blank" rel="noopener noreferrer">User Timing API<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API" target="_blank" rel="noopener noreferrer">Long Tasks API<ExternalLinkIcon/></a></li>
</ul>
<h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2>
<p>Web应用性能优化是一个持续的过程，而非一次性工作。通过遵循本文档中的最佳实践、使用推荐工具进行测量和优化，并不断学习新技术，您可以为用户提供更快、更流畅的Web体验。</p>
<p>记住性能优化的核心原则:</p>
<ul>
<li>测量实际性能，而非臆测</li>
<li>关注用户体验的关键指标</li>
<li>循序渐进，从影响最大的问题开始</li>
<li>建立性能文化，将性能考量融入开发流程的每个环节</li>
</ul>
<p>最终，在竞争激烈的数字世界中，卓越的性能不仅是技术追求，更是提升用户满意度和业务成功的关键因素。</p>
</div></template>



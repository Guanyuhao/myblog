<template><div><h1 id="前端项目架构设计" tabindex="-1"><a class="header-anchor" href="#前端项目架构设计"><span>前端项目架构设计</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#%E5%BC%95%E8%A8%80">引言</a></li>
<li><a href="#%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99">架构设计原则</a></li>
<li><a href="#%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84%E6%A8%A1%E5%BC%8F">前端架构模式</a></li>
<li><a href="#%E6%A8%A1%E5%9D%97%E5%8C%96%E8%AE%BE%E8%AE%A1">模块化设计</a></li>
<li><a href="#%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E7%AD%96%E7%95%A5">状态管理策略</a></li>
<li><a href="#%E8%B7%AF%E7%94%B1%E8%AE%BE%E8%AE%A1">路由设计</a></li>
<li><a href="#%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1">组件设计</a></li>
<li><a href="#API%E5%B1%82%E8%AE%BE%E8%AE%A1">API层设计</a></li>
<li><a href="#%E6%9E%84%E5%BB%BA%E4%B8%8E%E9%83%A8%E7%BD%B2%E6%9E%B6%E6%9E%84">构建与部署架构</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%9E%B6%E6%9E%84">性能优化架构</a></li>
<li><a href="#%E5%8F%AF%E6%89%A9%E5%B1%95%E6%80%A7%E8%AE%BE%E8%AE%A1">可扩展性设计</a></li>
<li><a href="#%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E7%BB%84%E7%BB%87">项目结构组织</a></li>
<li><a href="#%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%9E%B6%E6%9E%84">微前端架构</a></li>
<li><a href="#%E5%AE%9E%E9%99%85%E6%A1%88%E4%BE%8B%E5%88%86%E6%9E%90">实际案例分析</a></li>
<li><a href="#%E6%80%BB%E7%BB%93%E5%92%8C%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5">总结和最佳实践</a></li>
</ol>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>随着Web应用日益复杂化，前端项目的架构设计变得越来越重要。一个优秀的前端架构不仅能提高团队的开发效率，还能确保产品的可维护性、可扩展性和性能。本文将系统地探讨大型前端项目的架构设计思路，帮助开发者构建高质量的前端应用。</p>
<p>前端架构设计需要考虑多种因素：</p>
<ul>
<li>业务复杂度：功能需求的复杂程度</li>
<li>团队结构：开发团队的规模和技能水平</li>
<li>技术选型：框架、库和工具的选择</li>
<li>性能要求：页面加载速度、交互响应时间等</li>
<li>可维护性：代码的可读性、可测试性和可调试性</li>
<li>可扩展性：系统应对业务变化的能力</li>
</ul>
<h2 id="架构设计原则" tabindex="-1"><a class="header-anchor" href="#架构设计原则"><span>架构设计原则</span></a></h2>
<h3 id="solid原则在前端中的应用" tabindex="-1"><a class="header-anchor" href="#solid原则在前端中的应用"><span>SOLID原则在前端中的应用</span></a></h3>
<ol>
<li>
<p><strong>单一职责原则 (SRP)</strong>
单一职责原则（Single Responsibility Principle）：一个类或模块只负责一项职责，避免职责混杂。</p>
<ul>
<li>每个组件或模块应只负责单一功能</li>
<li>例如：将数据获取、状态管理和UI渲染分离</li>
</ul>
</li>
<li>
<p><strong>开放/封闭原则 (OCP)</strong>
开放/封闭原则（Open/Closed Principle）：软件实体（类、模块、函数等）应该对扩展开放，对修改封闭。</p>
<ul>
<li>组件应对扩展开放，对修改封闭</li>
<li>通过props或配置进行功能扩展，避免直接修改组件内部</li>
</ul>
</li>
<li>
<p><strong>里氏替换原则 (LSP)</strong>
里氏替换原则（Liskov Substitution Principle）：子类可以替换父类并保证系统功能不变。</p>
<ul>
<li>子组件应能替换父组件而不影响系统行为</li>
<li>保持一致的API和行为模式</li>
</ul>
</li>
<li>
<p><strong>接口隔离原则 (ISP)</strong>
接口隔离原则（Interface Segregation Principle）：客户端不应依赖它不需要的接口。</p>
<ul>
<li>组件API应精简，避免强制客户依赖不需要的接口</li>
<li>使用属性解构和默认参数简化接口</li>
</ul>
</li>
<li>
<p><strong>依赖倒置原则 (DIP)</strong>
依赖倒置原则（Dependency Inversion Principle）：高层模块不应依赖低层模块，两者应依赖抽象。</p>
<ul>
<li>高层模块不应依赖低层模块，两者都应依赖抽象</li>
<li>使用依赖注入模式管理组件间依赖</li>
</ul>
</li>
</ol>
<h3 id="前端特有设计原则" tabindex="-1"><a class="header-anchor" href="#前端特有设计原则"><span>前端特有设计原则</span></a></h3>
<ol>
<li>
<p><strong>关注点分离</strong></p>
<ul>
<li>将HTML（结构）、CSS（表现）和JavaScript（行为）分离</li>
<li>在组件化框架中体现为组件的内部分层</li>
</ul>
</li>
<li>
<p><strong>渐进增强与优雅降级</strong></p>
<ul>
<li>确保基本功能在所有环境可用</li>
<li>在支持的环境中提供增强功能</li>
</ul>
</li>
<li>
<p><strong>最小知识原则</strong></p>
<ul>
<li>组件只与直接相关的其他组件通信</li>
<li>避免组件之间的过度耦合</li>
</ul>
</li>
<li>
<p><strong>单向数据流</strong></p>
<ul>
<li>数据变化遵循可预测的路径</li>
<li>简化状态跟踪和调试</li>
</ul>
</li>
<li>
<p><strong>可测试性优先</strong></p>
<ul>
<li>架构设计应便于单元测试和集成测试</li>
<li>组件设计时考虑隔离与模拟的可能性</li>
</ul>
</li>
</ol>
<h2 id="前端架构模式" tabindex="-1"><a class="header-anchor" href="#前端架构模式"><span>前端架构模式</span></a></h2>
<h3 id="mvc模式" tabindex="-1"><a class="header-anchor" href="#mvc模式"><span>MVC模式</span></a></h3>
<ul>
<li><strong>模型(Model)</strong>: 管理数据和业务逻辑</li>
<li><strong>视图(View)</strong>: 负责UI渲染</li>
<li><strong>控制器(Controller)</strong>: 处理用户输入，协调模型和视图</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// MVC示例</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoModel</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>onChangeCb <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>onChangeCb <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChangeCb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>onChangeCb <span class="token operator">=</span> callback<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoView</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todoList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'todo-list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">todos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> </span>
<span class="line">      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>todo<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">model<span class="token punctuation">,</span> view</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>view <span class="token operator">=</span> view<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">todos</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'add-todo'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'new-todo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addTodo</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">addTodo</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoController</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TodoModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TodoView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mvvm模式" tabindex="-1"><a class="header-anchor" href="#mvvm模式"><span>MVVM模式</span></a></h3>
<ul>
<li>
<p><strong>模型(Model)</strong>: 管理数据和业务逻辑</p>
</li>
<li>
<p><strong>视图(View)</strong>: 负责UI渲染</p>
</li>
<li>
<p><strong>视图模型(ViewModel)</strong>: 双向绑定模型和视图</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Vue中的MVVM示例</span></span>
<span class="line"><span class="token keyword">const</span> TodoApp <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">newTodo</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>newTodo<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newTodo<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>newTodo <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">    &lt;div></span>
<span class="line">      &lt;input v-model="newTodo" @keyup.enter="addTodo"></span>
<span class="line">      &lt;button @click="addTodo">Add&lt;/button></span>
<span class="line">      &lt;ul></span>
<span class="line">        &lt;li v-for="todo in todos" :key="todo.id">{{ todo.title }}&lt;/li></span>
<span class="line">      &lt;/ul></span>
<span class="line">    &lt;/div></span>
<span class="line">  </span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flux-redux架构" tabindex="-1"><a class="header-anchor" href="#flux-redux架构"><span>Flux/Redux架构</span></a></h3>
<ul>
<li><strong>单向数据流</strong>: 数据沿预定义路径流动</li>
<li><strong>中心化状态</strong>: 使用单一数据源管理状态</li>
<li><strong>不可变数据</strong>: 状态更新通过创建新对象而非修改现有对象</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Redux示例</span></span>
<span class="line"><span class="token comment">// Action Types</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">ADD_TODO</span> <span class="token operator">=</span> <span class="token string">'ADD_TODO'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">TOGGLE_TODO</span> <span class="token operator">=</span> <span class="token string">'TOGGLE_TODO'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Action Creators</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_TODO</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">TOGGLE_TODO</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Reducer</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">todoReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">ADD_TODO</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">title</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token constant">TOGGLE_TODO</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span></span>
<span class="line">        todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>id</span>
<span class="line">          <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">:</span> todo</span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Store</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>todoReducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token string">'学习架构设计'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查看状态</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合式架构" tabindex="-1"><a class="header-anchor" href="#组合式架构"><span>组合式架构</span></a></h3>
<ul>
<li><strong>基于钩子的组合</strong>: 将逻辑拆分为可复用的钩子函数</li>
<li><strong>关注点分离</strong>: 按逻辑功能而非生命周期组织代码</li>
<li><strong>扁平化状态管理</strong>: 简化状态访问路径</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React Hooks组合示例</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 可复用的数据获取钩子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 业务逻辑钩子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">title</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>todos<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span></span>
<span class="line">      todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> <span class="token operator">:</span> todo</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> todos<span class="token punctuation">,</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 组件使用多个钩子组合功能</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> apiTodos<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token string">'/api/todos'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> todos<span class="token punctuation">,</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>newTodo<span class="token punctuation">,</span> setNewTodo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 组件逻辑...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化设计" tabindex="-1"><a class="header-anchor" href="#模块化设计"><span>模块化设计</span></a></h2>
<h3 id="javascript模块化方案演进" tabindex="-1"><a class="header-anchor" href="#javascript模块化方案演进"><span>JavaScript模块化方案演进</span></a></h3>
<ol>
<li>
<p><strong>命名空间模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 命名空间模式</span></span>
<span class="line"><span class="token keyword">var</span> MyApp <span class="token operator">=</span> MyApp <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">MyApp<span class="token punctuation">.</span>utils <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">formatDate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 实现...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">MyApp<span class="token punctuation">.</span>models <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">User</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>CommonJS</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// math.js</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  add</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token keyword">const</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./math'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>AMD (Asynchronous Module Definition)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用RequireJS</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jquery'</span><span class="token punctuation">,</span> <span class="token string">'lodash'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$<span class="token punctuation">,</span> _</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用jQuery和Lodash</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">init</span><span class="token operator">:</span> initialize</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>ES Modules</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// math.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> multiply <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./math.js'</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="模块组织策略" tabindex="-1"><a class="header-anchor" href="#模块组织策略"><span>模块组织策略</span></a></h3>
<ol>
<li>
<p><strong>按功能组织</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── features/</span>
<span class="line">│   ├── auth/</span>
<span class="line">│   │   ├── components/</span>
<span class="line">│   │   ├── services/</span>
<span class="line">│   │   ├── store/</span>
<span class="line">│   │   └── index.js</span>
<span class="line">│   ├── products/</span>
<span class="line">│   │   ├── components/</span>
<span class="line">│   │   ├── services/</span>
<span class="line">│   │   ├── store/</span>
<span class="line">│   │   └── index.js</span>
<span class="line">│   └── cart/</span>
<span class="line">│       ├── components/</span>
<span class="line">│       ├── services/</span>
<span class="line">│       ├── store/</span>
<span class="line">│       └── index.js</span>
<span class="line">└── shared/</span>
<span class="line">    ├── components/</span>
<span class="line">    ├── utils/</span>
<span class="line">    └── constants/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>按类型组织</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── components/</span>
<span class="line">│   ├── Button/</span>
<span class="line">│   ├── Card/</span>
<span class="line">│   └── Modal/</span>
<span class="line">├── containers/</span>
<span class="line">│   ├── Login/</span>
<span class="line">│   ├── Dashboard/</span>
<span class="line">│   └── Settings/</span>
<span class="line">├── services/</span>
<span class="line">│   ├── api.js</span>
<span class="line">│   ├── auth.js</span>
<span class="line">│   └── storage.js</span>
<span class="line">├── store/</span>
<span class="line">│   ├── actions/</span>
<span class="line">│   ├── reducers/</span>
<span class="line">│   └── index.js</span>
<span class="line">└── utils/</span>
<span class="line">    ├── formatter.js</span>
<span class="line">    └── validator.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>混合策略</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── features/</span>
<span class="line">│   ├── auth/</span>
<span class="line">│   ├── products/</span>
<span class="line">│   └── cart/</span>
<span class="line">├── components/</span>
<span class="line">│   └── common/</span>
<span class="line">├── services/</span>
<span class="line">├── store/</span>
<span class="line">└── utils/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="模块边界与接口设计" tabindex="-1"><a class="header-anchor" href="#模块边界与接口设计"><span>模块边界与接口设计</span></a></h3>
<ol>
<li>
<p><strong>明确的公共API</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// feature/auth/index.js - 公共API</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> logout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./services/auth'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> LoginForm <span class="token keyword">from</span> <span class="token string">'./components/LoginForm'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 只导出需要对外暴露的内容</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> logout<span class="token punctuation">,</span> LoginForm <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用方式</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> LoginForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'features/auth'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>内部模块隔离</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// feature/auth/services/auth.js</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 私有函数，不导出</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">validateCredentials</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 实现...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 公共API</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">validateCredentials</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Invalid credentials'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 登录逻辑...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>依赖注入模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 依赖注入示例</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createUserService</span><span class="token punctuation">(</span><span class="token parameter">apiClient<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">await</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error fetching user'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApiClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./api'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./logger'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token function">createUserService</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">createApiClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'/api/v1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  logger</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="状态管理策略" tabindex="-1"><a class="header-anchor" href="#状态管理策略"><span>状态管理策略</span></a></h2>
<h3 id="本地状态管理" tabindex="-1"><a class="header-anchor" href="#本地状态管理"><span>本地状态管理</span></a></h3>
<ol>
<li>
<p><strong>组件内状态</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React状态钩子</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>状态提升</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 父组件管理共享状态</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>todos<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span></span>
<span class="line">      todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> <span class="token operator">:</span> todo</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>TodoForm onAddTodo<span class="token operator">=</span><span class="token punctuation">{</span>addTodo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>TodoList todos<span class="token operator">=</span><span class="token punctuation">{</span>todos<span class="token punctuation">}</span> onToggleTodo<span class="token operator">=</span><span class="token punctuation">{</span>toggleTodo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="全局状态管理" tabindex="-1"><a class="header-anchor" href="#全局状态管理"><span>全局状态管理</span></a></h3>
<ol>
<li>
<p><strong>Context API</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 创建Context</span></span>
<span class="line"><span class="token keyword">const</span> TodoContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 提供状态</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">addTodo</span> <span class="token operator">=</span> <span class="token parameter">text</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>todos<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> text<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">toggleTodo</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setTodos</span><span class="token punctuation">(</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span></span>
<span class="line">      todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>todo<span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed <span class="token punctuation">}</span> <span class="token operator">:</span> todo</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>TodoContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> todos<span class="token punctuation">,</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>children<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>TodoContext<span class="token punctuation">.</span>Provider<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用状态</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TodoItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>TodoContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>li onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>text<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Redux</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 创建Slice</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSlice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@reduxjs/toolkit'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> todosSlice <span class="token operator">=</span> <span class="token function">createSlice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'todos'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">initialState</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">addTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">toggleTodo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> todo <span class="token operator">=</span> state<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token operator">=</span> todosSlice<span class="token punctuation">.</span>actions<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> todosSlice<span class="token punctuation">.</span>reducer<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>MobX</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// MobX状态管理</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mobx'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TodoStore</span> <span class="token punctuation">{</span></span>
<span class="line">  todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      text<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">completedTodosCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> todoStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="状态管理最佳实践" tabindex="-1"><a class="header-anchor" href="#状态管理最佳实践"><span>状态管理最佳实践</span></a></h3>
<ol>
<li>
<p><strong>状态范围最小化</strong></p>
<ul>
<li>
<p>仅在需要共享的组件间使用全局状态</p>
</li>
<li>
<p>对于局部状态，保持在组件内部</p>
</li>
</ul>
</li>
<li>
<p><strong>规范化状态结构</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 扁平化、规范化的状态结构</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entities</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">byId</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"todo1"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"todo1"</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"学习React"</span><span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"todo2"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"todo2"</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"学习Redux"</span><span class="token punctuation">,</span> <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">allIds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"todo1"</span><span class="token punctuation">,</span> <span class="token string">"todo2"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">byId</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">allIds</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">ui</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">todoFilter</span><span class="token operator">:</span> <span class="token string">"SHOW_ALL"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>状态持久化策略</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用redux-persist</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> persistStore<span class="token punctuation">,</span> persistReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux-persist'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">'redux-persist/lib/storage'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> persistConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span></span>
<span class="line">  storage<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">whitelist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token string">'preferences'</span><span class="token punctuation">]</span> <span class="token comment">// 只持久化特定reducer</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> persistedReducer <span class="token operator">=</span> <span class="token function">persistReducer</span><span class="token punctuation">(</span>persistConfig<span class="token punctuation">,</span> rootReducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>persistedReducer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> persistor <span class="token operator">=</span> <span class="token function">persistStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="路由设计" tabindex="-1"><a class="header-anchor" href="#路由设计"><span>路由设计</span></a></h2>
<h3 id="单页应用路由架构" tabindex="-1"><a class="header-anchor" href="#单页应用路由架构"><span>单页应用路由架构</span></a></h3>
<ol>
<li>
<p><strong>声明式路由配置</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React Router配置</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Products <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products/:id"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProductDetail <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"*"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>NotFound <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>路由守卫与权限控制</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 路由守卫组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ProtectedRoute</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLoading <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> navigate<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>LoadingSpinner <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> isAuthenticated <span class="token operator">?</span> children <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/login"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Route</span>
<span class="line">    path<span class="token operator">=</span><span class="token string">"/dashboard"</span></span>
<span class="line">    element<span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">&lt;</span>ProtectedRoute<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Dashboard <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ProtectedRoute<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>代码分割与懒加载</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 路由级代码分割</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/Home'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/About'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/Products'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Products <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="路由状态管理" tabindex="-1"><a class="header-anchor" href="#路由状态管理"><span>路由状态管理</span></a></h3>
<ol>
<li>
<p><strong>URL参数与查询字符串</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用URL管理过滤和分页状态</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ProductList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchParams<span class="token punctuation">,</span> setSearchParams<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> category <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'all'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'page'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleCategoryChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newCategory</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">category</span><span class="token operator">:</span> newCategory<span class="token punctuation">,</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handlePageChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newPage</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> category<span class="token punctuation">,</span> <span class="token literal-property property">page</span><span class="token operator">:</span> newPage<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 组件实现...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>路由与状态管理集成</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Redux与路由集成</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'connected-react-router'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ProductCard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> product <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">viewProduct</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>product<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>viewProduct<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token comment">/* 产品卡片内容 */</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="组件设计" tabindex="-1"><a class="header-anchor" href="#组件设计"><span>组件设计</span></a></h2>
<h3 id="组件分类" tabindex="-1"><a class="header-anchor" href="#组件分类"><span>组件分类</span></a></h3>
<ol>
<li>
<p><strong>展示组件</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 无状态展示组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">{</span> onClick<span class="token punctuation">,</span> children<span class="token punctuation">,</span> variant <span class="token operator">=</span> <span class="token string">'primary'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>button </span>
<span class="line">      className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">btn btn-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span>
<span class="line">      onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>children<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>容器组件</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 容器组件负责数据获取和状态管理</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfileContainer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> userId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setUser</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>userId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>Spinner <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorMessage error<span class="token operator">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserProfile user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 展示组件负责渲染</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"user-profile"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token comment">/* 其他用户信息 */</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>高阶组件(HOC)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 高阶组件示例</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">withData</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent<span class="token punctuation">,</span> dataFetchingFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">WithData</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">dataFetchingFunction</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token function">setData</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">      <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>props<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 依赖于相关props</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>Spinner <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorMessage error<span class="token operator">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用HOC</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fetchUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> UserProfileWithData <span class="token operator">=</span> <span class="token function">withData</span><span class="token punctuation">(</span>UserProfile<span class="token punctuation">,</span> fetchUser<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 渲染</span></span>
<span class="line"><span class="token operator">&lt;</span>UserProfileWithData id<span class="token operator">=</span><span class="token string">"123"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>渲染属性模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 渲染属性模式</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">DataFetcher</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> render <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token operator">&lt;</span>DataFetcher </span>
<span class="line">  url<span class="token operator">=</span><span class="token string">"/api/users/123"</span></span>
<span class="line">  render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>Spinner <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorMessage error<span class="token operator">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="组件设计模式" tabindex="-1"><a class="header-anchor" href="#组件设计模式"><span>组件设计模式</span></a></h3>
<ol>
<li>
<p><strong>复合组件模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 复合组件模式</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Tabs</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> defaultActiveKey <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>activeKey<span class="token punctuation">,</span> setActiveKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultActiveKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 克隆子元素并注入额外的props</span></span>
<span class="line">  <span class="token keyword">const</span> enhancedChildren <span class="token operator">=</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>type <span class="token operator">===</span> TabPane<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isActive</span><span class="token operator">:</span> child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>tabKey <span class="token operator">===</span> activeKey</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> child<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">renderTabHeaders</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>type <span class="token operator">===</span> TabPane<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>div </span>
<span class="line">            className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">tab-header </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>tabKey <span class="token operator">===</span> activeKey <span class="token operator">?</span> <span class="token string">'active'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span>
<span class="line">            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setActiveKey</span><span class="token punctuation">(</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>tabKey<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">></span></span>
<span class="line">            <span class="token punctuation">{</span>child<span class="token punctuation">.</span>props<span class="token punctuation">.</span>tabTitle<span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"tabs-container"</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"tabs-header"</span><span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token function">renderTabHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"tabs-content"</span><span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">{</span>enhancedChildren<span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">TabPane</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> isActive <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isActive<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"tab-pane"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Tabs<span class="token punctuation">.</span>TabPane <span class="token operator">=</span> TabPane<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用复合组件</span></span>
<span class="line"><span class="token operator">&lt;</span>Tabs defaultActiveKey<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>TabPane tabKey<span class="token operator">=</span><span class="token string">"1"</span> tabTitle<span class="token operator">=</span><span class="token string">"个人信息"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>UserInfo <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>TabPane<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>TabPane tabKey<span class="token operator">=</span><span class="token string">"2"</span> tabTitle<span class="token operator">=</span><span class="token string">"账户设置"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>AccountSettings <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>TabPane<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>状态提升模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 状态提升示例</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">FilterableProductTable</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> products <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>filterText<span class="token punctuation">,</span> setFilterText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>inStockOnly<span class="token punctuation">,</span> setInStockOnly<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>SearchBar </span>
<span class="line">        filterText<span class="token operator">=</span><span class="token punctuation">{</span>filterText<span class="token punctuation">}</span> </span>
<span class="line">        inStockOnly<span class="token operator">=</span><span class="token punctuation">{</span>inStockOnly<span class="token punctuation">}</span> </span>
<span class="line">        onFilterTextChange<span class="token operator">=</span><span class="token punctuation">{</span>setFilterText<span class="token punctuation">}</span> </span>
<span class="line">        onInStockChange<span class="token operator">=</span><span class="token punctuation">{</span>setInStockOnly<span class="token punctuation">}</span> </span>
<span class="line">      <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>ProductTable </span>
<span class="line">        products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> </span>
<span class="line">        filterText<span class="token operator">=</span><span class="token punctuation">{</span>filterText<span class="token punctuation">}</span> </span>
<span class="line">        inStockOnly<span class="token operator">=</span><span class="token punctuation">{</span>inStockOnly<span class="token punctuation">}</span> </span>
<span class="line">      <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>容器分离模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 逻辑容器</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfileContainer</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 数据获取和状态管理逻辑</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserProfilePresentation <span class="token punctuation">{</span><span class="token operator">...</span>stateAndCallbacks<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 展示组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfilePresentation</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user<span class="token punctuation">,</span> isEditing<span class="token punctuation">,</span> onEdit<span class="token punctuation">,</span> onSave<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 纯渲染逻辑</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token comment">/* JSX */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> UserProfileContainer<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Provider模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主题Provider</span></span>
<span class="line"><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ThemeProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span> theme <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>children<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用主题的组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ThemedButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">btn-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>theme<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      Themed Button</span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 应用中使用</span></span>
<span class="line"><span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token string">"dark"</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="组件api设计" tabindex="-1"><a class="header-anchor" href="#组件api设计"><span>组件API设计</span></a></h3>
<ol>
<li>
<p><strong>Props命名与结构</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 清晰的props命名和解构</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserCard</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">  <span class="token comment">// 必需props</span></span>
<span class="line">  user<span class="token punctuation">,</span> </span>
<span class="line">  <span class="token comment">// 可选props带默认值</span></span>
<span class="line">  variant <span class="token operator">=</span> <span class="token string">'standard'</span><span class="token punctuation">,</span></span>
<span class="line">  size <span class="token operator">=</span> <span class="token string">'medium'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 布尔标志</span></span>
<span class="line">  isActive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 回调函数</span></span>
<span class="line">  onUserClick<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 自定义渲染</span></span>
<span class="line">  renderActions<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 其他props通过解构传递</span></span>
<span class="line">  <span class="token operator">...</span>otherProps</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div </span>
<span class="line">      className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">user-card </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variant<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isActive <span class="token operator">?</span> <span class="token string">'active'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span>
<span class="line">      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> onUserClick <span class="token operator">&amp;&amp;</span> <span class="token function">onUserClick</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token operator">...</span>otherProps<span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>renderActions <span class="token operator">&amp;&amp;</span> <span class="token function">renderActions</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用PropTypes</span></span>
<span class="line">UserCard<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">user</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">email</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">variant</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'standard'</span><span class="token punctuation">,</span> <span class="token string">'compact'</span><span class="token punctuation">,</span> <span class="token string">'detailed'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">size</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'small'</span><span class="token punctuation">,</span> <span class="token string">'medium'</span><span class="token punctuation">,</span> <span class="token string">'large'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">isActive</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">onUserClick</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">renderActions</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>func</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>组件参考设计</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Ref转发</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> forwardRef<span class="token punctuation">,</span> useImperativeHandle<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> CustomInput <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">CustomInput</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 暴露自定义API</span></span>
<span class="line">  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 只暴露需要的方法</span></span>
<span class="line">    <span class="token function-variable function">focus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">getValue</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用自定义API</span></span>
<span class="line">    <span class="token keyword">const</span> value <span class="token operator">=</span> inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 提交逻辑...</span></span>
<span class="line">    inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>CustomInput ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"输入内容"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="api层设计" tabindex="-1"><a class="header-anchor" href="#api层设计"><span>API层设计</span></a></h2>
<h3 id="数据请求架构" tabindex="-1"><a class="header-anchor" href="#数据请求架构"><span>数据请求架构</span></a></h3>
<ol>
<li>
<p><strong>集中式API客户端</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// API客户端实现</span></span>
<span class="line"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建实例</span></span>
<span class="line"><span class="token keyword">const</span> apiClient <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'/api/v1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 请求拦截器</span></span>
<span class="line">apiClient<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 添加认证信息</span></span>
<span class="line">    <span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token parameter">error</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 响应拦截器</span></span>
<span class="line">apiClient<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span>data<span class="token punctuation">,</span></span>
<span class="line">  <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 集中处理错误</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 认证失败处理</span></span>
<span class="line">      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/login'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> apiClient<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>服务层模式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 用户服务</span></span>
<span class="line"><span class="token keyword">import</span> apiClient <span class="token keyword">from</span> <span class="token string">'./apiClient'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">updateProfile</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">'/users/me'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 产品服务</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> productService <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/products'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">updateProduct</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">deleteProduct</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> apiClient<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/products/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>数据获取Hooks</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React Query数据获取Hook</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> useMutation<span class="token punctuation">,</span> useQueryClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> userService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../services/userService'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useUsers</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'users'</span><span class="token punctuation">,</span> params<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> userService<span class="token punctuation">.</span><span class="token function">getUsers</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 5分钟缓存</span></span>
<span class="line">    <span class="token literal-property property">keepPreviousData</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 保留之前数据减少加载闪烁</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useUser</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">,</span> id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>id <span class="token comment">// 只在id存在时执行查询</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useUpdateProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">useMutation</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> userService<span class="token punctuation">.</span><span class="token function">updateProfile</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 乐观更新</span></span>
<span class="line">      <span class="token function-variable function">onMutate</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 取消相关查询以避免覆盖乐观更新</span></span>
<span class="line">        <span class="token keyword">await</span> queryClient<span class="token punctuation">.</span><span class="token function">cancelQueries</span><span class="token punctuation">(</span><span class="token string">'profile'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 保存之前状态</span></span>
<span class="line">        <span class="token keyword">const</span> previousProfile <span class="token operator">=</span> queryClient<span class="token punctuation">.</span><span class="token function">getQueryData</span><span class="token punctuation">(</span><span class="token string">'profile'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 乐观更新缓存</span></span>
<span class="line">        queryClient<span class="token punctuation">.</span><span class="token function">setQueryData</span><span class="token punctuation">(</span><span class="token string">'profile'</span><span class="token punctuation">,</span> <span class="token parameter">old</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token operator">...</span>old<span class="token punctuation">,</span></span>
<span class="line">          <span class="token operator">...</span>newData</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 返回上下文对象</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> previousProfile <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 错误回滚</span></span>
<span class="line">      <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> newData<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        queryClient<span class="token punctuation">.</span><span class="token function">setQueryData</span><span class="token punctuation">(</span><span class="token string">'profile'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>previousProfile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 成功后使相关查询无效并重新获取</span></span>
<span class="line">      <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span><span class="token string">'profile'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="api错误处理策略" tabindex="-1"><a class="header-anchor" href="#api错误处理策略"><span>API错误处理策略</span></a></h3>
<ol>
<li>
<p><strong>集中式错误处理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 全局错误处理器</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-toastify'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 错误码映射</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">ERROR_MESSAGES</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token number">400</span><span class="token operator">:</span> <span class="token string">'请求参数错误'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">401</span><span class="token operator">:</span> <span class="token string">'未授权，请重新登录'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">403</span><span class="token operator">:</span> <span class="token string">'无权访问该资源'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">404</span><span class="token operator">:</span> <span class="token string">'请求的资源不存在'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">500</span><span class="token operator">:</span> <span class="token string">'服务器内部错误'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">502</span><span class="token operator">:</span> <span class="token string">'网关错误'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">503</span><span class="token operator">:</span> <span class="token string">'服务不可用'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token number">504</span><span class="token operator">:</span> <span class="token string">'网关超时'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 集中处理API错误</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">handleApiError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> status <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>data<span class="token operator">?.</span>message <span class="token operator">||</span> </span>
<span class="line">                  <span class="token constant">ERROR_MESSAGES</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span> <span class="token operator">||</span></span>
<span class="line">                  <span class="token string">'请求失败，请稍后重试'</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 显示错误消息</span></span>
<span class="line">  toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 特殊状态处理</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 清除认证状态</span></span>
<span class="line">    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 重定向到登录</span></span>
<span class="line">    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/login'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 返回处理后的错误消息，方便UI展示</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    status<span class="token punctuation">,</span></span>
<span class="line">    message</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">await</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/some-endpoint'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">handleApiError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 可以在UI中使用message</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>逐级错误处理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 服务层错误处理</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> apiClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 特定服务层面的错误转换</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotFoundError</span><span class="token punctuation">(</span><span class="token string">'用户不存在'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 重新抛出其他错误</span></span>
<span class="line">    <span class="token keyword">throw</span> error<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 组件层错误处理</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> userId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">,</span> userId<span class="token punctuation">]</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 组件级错误处理</span></span>
<span class="line">      <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token keyword">instanceof</span> <span class="token class-name">NotFoundError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 特定错误UI处理</span></span>
<span class="line">          <span class="token function">setShowNotFoundMessage</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 通用错误处理</span></span>
<span class="line">          <span class="token function">handleApiError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>Spinner <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 渲染逻辑...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="前后端接口规范" tabindex="-1"><a class="header-anchor" href="#前后端接口规范"><span>前后端接口规范</span></a></h3>
<ol>
<li>
<p><strong>API路径与版本控制</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// API路径命名规范</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 资源集合</span></span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users         <span class="token comment">// 获取用户列表</span></span>
<span class="line"><span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users        <span class="token comment">// 创建新用户</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 特定资源</span></span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token operator">:</span>id     <span class="token comment">// 获取特定用户</span></span>
<span class="line"><span class="token constant">PUT</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token operator">:</span>id     <span class="token comment">// 更新特定用户</span></span>
<span class="line"><span class="token constant">DELETE</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token operator">:</span>id  <span class="token comment">// 删除特定用户</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 嵌套资源</span></span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token operator">:</span>id<span class="token operator">/</span>orders        <span class="token comment">// 获取用户的订单列表</span></span>
<span class="line"><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token operator">:</span>id<span class="token operator">/</span>orders<span class="token operator">/</span><span class="token operator">:</span>orderId  <span class="token comment">// 获取用户的特定订单</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 不遵循CRUD的操作</span></span>
<span class="line"><span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>auth<span class="token operator">/</span>login   <span class="token comment">// 用户登录</span></span>
<span class="line"><span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>orders<span class="token operator">/</span><span class="token operator">:</span>id<span class="token operator">/</span>cancel  <span class="token comment">// 取消订单</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>API响应格式规范</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 成功响应格式</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 返回的实际数据</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 元数据，如分页信息</span></span>
<span class="line">    <span class="token string-property property">"total"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"limit"</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 错误响应格式</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"success"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"code"</span><span class="token operator">:</span> <span class="token string">"VALIDATION_ERROR"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"输入数据验证失败"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"details"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"field"</span><span class="token operator">:</span> <span class="token string">"email"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"message"</span><span class="token operator">:</span> <span class="token string">"无效的邮箱格式"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>模拟API与前后端并行开发</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用MSW进行API模拟</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> setupWorker<span class="token punctuation">,</span> rest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义处理程序</span></span>
<span class="line"><span class="token keyword">const</span> handlers <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// 获取用户列表</span></span>
<span class="line">  rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 提取查询参数</span></span>
<span class="line">    <span class="token keyword">const</span> page <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'page'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'1'</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 返回模拟数据</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span></span>
<span class="line">      ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'zhangsan@example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'lisi@example.com'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取特定用户</span></span>
<span class="line">  rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/users/:id'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>params<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 模拟用户不存在</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> <span class="token string">'999'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'NOT_FOUND'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'用户不存在'</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 返回模拟用户数据</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span></span>
<span class="line">      ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          id<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> id <span class="token operator">===</span> <span class="token string">'1'</span> <span class="token operator">?</span> <span class="token string">'张三'</span> <span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">email</span><span class="token operator">:</span> id <span class="token operator">===</span> <span class="token string">'1'</span> <span class="token operator">?</span> <span class="token string">'zhangsan@example.com'</span> <span class="token operator">:</span> <span class="token string">'lisi@example.com'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置服务工作者</span></span>
<span class="line"><span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token function">setupWorker</span><span class="token punctuation">(</span><span class="token operator">...</span>handlers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 启动模拟服务</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">startMockServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    worker<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="构建与部署架构" tabindex="-1"><a class="header-anchor" href="#构建与部署架构"><span>构建与部署架构</span></a></h2>
<h3 id="构建流程设计" tabindex="-1"><a class="header-anchor" href="#构建流程设计"><span>构建流程设计</span></a></h3>
<ol>
<li>
<p><strong>构建阶段划分</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 开发构建</span></span>
<span class="line">    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 类型检查</span></span>
<span class="line">    <span class="token string-property property">"type-check"</span><span class="token operator">:</span> <span class="token string">"tsc --noEmit"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 代码质量检查</span></span>
<span class="line">    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint src --ext .js,.jsx,.ts,.tsx"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 单元测试</span></span>
<span class="line">    <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"jest"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 端到端测试</span></span>
<span class="line">    <span class="token string-property property">"test:e2e"</span><span class="token operator">:</span> <span class="token string">"cypress run"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 生产构建</span></span>
<span class="line">    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"npm run type-check &amp;&amp; npm run lint &amp;&amp; npm run test &amp;&amp; vite build"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 预览构建结果</span></span>
<span class="line">    <span class="token string-property property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 分析构建输出</span></span>
<span class="line">    <span class="token string-property property">"analyze"</span><span class="token operator">:</span> <span class="token string">"vite build --mode analyze"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>环境配置管理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .env.development</span></span>
<span class="line"><span class="token constant">VITE_API_URL</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>api</span>
<span class="line"><span class="token constant">VITE_ENABLE_MOCKS</span><span class="token operator">=</span><span class="token boolean">true</span></span>
<span class="line"><span class="token constant">VITE_LOG_LEVEL</span><span class="token operator">=</span>debug</span>
<span class="line"></span>
<span class="line"><span class="token comment">// .env.production</span></span>
<span class="line"><span class="token constant">VITE_API_URL</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com</span>
<span class="line"><span class="token constant">VITE_ENABLE_MOCKS</span><span class="token operator">=</span><span class="token boolean">false</span></span>
<span class="line"><span class="token constant">VITE_LOG_LEVEL</span><span class="token operator">=</span>error</span>
<span class="line"></span>
<span class="line"><span class="token comment">// .env.staging</span></span>
<span class="line"><span class="token constant">VITE_API_URL</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>staging<span class="token operator">-</span>api<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com</span>
<span class="line"><span class="token constant">VITE_ENABLE_MOCKS</span><span class="token operator">=</span><span class="token boolean">false</span></span>
<span class="line"><span class="token constant">VITE_LOG_LEVEL</span><span class="token operator">=</span>info</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用环境变量</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_URL</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> enableMocks <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_ENABLE_MOCKS</span> <span class="token operator">===</span> <span class="token string">'true'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>enableMocks<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">startMockServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>模块打包策略</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rollup-plugin-visualizer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> isAnalyze <span class="token operator">=</span> mode <span class="token operator">===</span> <span class="token string">'analyze'</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 仅在分析模式下启用可视化工具</span></span>
<span class="line">      isAnalyze <span class="token operator">&amp;&amp;</span> <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'dist/stats.html'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">gzipSize</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 代码拆分策略</span></span>
<span class="line">      <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 将React相关库打包到一起</span></span>
<span class="line">            <span class="token string-property property">'vendor-react'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react'</span><span class="token punctuation">,</span> <span class="token string">'react-dom'</span><span class="token punctuation">,</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 将其他依赖第三方库打包到一起</span></span>
<span class="line">            <span class="token string-property property">'vendor-utils'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'lodash'</span><span class="token punctuation">,</span> <span class="token string">'axios'</span><span class="token punctuation">,</span> <span class="token string">'date-fns'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// UI组件库单独打包</span></span>
<span class="line">            <span class="token string-property property">'vendor-ui'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'antd'</span><span class="token punctuation">,</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">]</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 资源内联大小限制</span></span>
<span class="line">      <span class="token literal-property property">assetsInlineLimit</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 源码映射文件生成</span></span>
<span class="line">      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> mode <span class="token operator">!==</span> <span class="token string">'production'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 开发服务器配置</span></span>
<span class="line">    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:8080'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="持续集成与部署" tabindex="-1"><a class="header-anchor" href="#持续集成与部署"><span>持续集成与部署</span></a></h3>
<ol>
<li>
<p><strong>CI/CD流水线</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/ci.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI/CD Pipeline</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> develop<span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> develop<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 质量检查</span></span>
<span class="line">  <span class="token key atrule">quality</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check types</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run type<span class="token punctuation">-</span>check</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lint</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Unit tests</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run test</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 构建</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> quality</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 部署到测试环境</span></span>
<span class="line">  <span class="token key atrule">deploy-staging</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 仅从develop分支部署到测试环境</span></span>
<span class="line">    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.ref == 'refs/heads/develop'</span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Firebase Hosting (Staging)</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.GITHUB_TOKEN }}'</span></span>
<span class="line">          <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'</span></span>
<span class="line">          <span class="token key atrule">projectId</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>app<span class="token punctuation">-</span>staging</span>
<span class="line">          <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 部署到生产环境</span></span>
<span class="line">  <span class="token key atrule">deploy-production</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 仅从main分支部署到生产环境</span></span>
<span class="line">    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.ref == 'refs/heads/main'</span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Firebase Hosting (Production)</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.GITHUB_TOKEN }}'</span></span>
<span class="line">          <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.FIREBASE_SERVICE_ACCOUNT_PROD }}'</span></span>
<span class="line">          <span class="token key atrule">projectId</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>app<span class="token punctuation">-</span>production</span>
<span class="line">          <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>静态资源分发</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// CDN配置</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 配置文件</span></span>
<span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span></span>
<span class="line">    <span class="token operator">?</span> <span class="token string">'https://cdn.example.com/assets/'</span></span>
<span class="line">    <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...其他构建配置</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 缓存配置 (Firebase Hosting示例)</span></span>
<span class="line"><span class="token comment">// firebase.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"hosting"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"public"</span><span class="token operator">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"ignore"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"firebase.json"</span><span class="token punctuation">,</span> <span class="token string">"**/.*"</span><span class="token punctuation">,</span> <span class="token string">"**/node_modules/**"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"**/*.@(js|css)"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"public, max-age=31536000, immutable"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"**/*.@(jpg|jpeg|gif|png|svg|webp)"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"public, max-age=31536000, immutable"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"**/*.@(html|json)"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"headers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"key"</span><span class="token operator">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"public, max-age=0, must-revalidate"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"rewrites"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"source"</span><span class="token operator">:</span> <span class="token string">"**"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"destination"</span><span class="token operator">:</span> <span class="token string">"/index.html"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>自动化版本与发布管理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"version:patch"</span><span class="token operator">:</span> <span class="token string">"npm version patch &amp;&amp; git push &amp;&amp; git push --tags"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"version:minor"</span><span class="token operator">:</span> <span class="token string">"npm version minor &amp;&amp; git push &amp;&amp; git push --tags"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"version:major"</span><span class="token operator">:</span> <span class="token string">"npm version major &amp;&amp; git push &amp;&amp; git push --tags"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"release"</span><span class="token operator">:</span> <span class="token string">"standard-version"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// standard-version配置</span></span>
<span class="line"><span class="token comment">// .versionrc</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"feat"</span><span class="token punctuation">,</span> <span class="token string-property property">"section"</span><span class="token operator">:</span> <span class="token string">"新特性"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"fix"</span><span class="token punctuation">,</span> <span class="token string-property property">"section"</span><span class="token operator">:</span> <span class="token string">"Bug修复"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"chore"</span><span class="token punctuation">,</span> <span class="token string-property property">"hidden"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"docs"</span><span class="token punctuation">,</span> <span class="token string-property property">"section"</span><span class="token operator">:</span> <span class="token string">"文档"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"style"</span><span class="token punctuation">,</span> <span class="token string-property property">"hidden"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"refactor"</span><span class="token punctuation">,</span> <span class="token string-property property">"section"</span><span class="token operator">:</span> <span class="token string">"代码重构"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"perf"</span><span class="token punctuation">,</span> <span class="token string-property property">"section"</span><span class="token operator">:</span> <span class="token string">"性能优化"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token string-property property">"hidden"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"commitUrlFormat"</span><span class="token operator">:</span> <span class="token string">"https://github.com/your-username/your-repo/commit/{{hash}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"compareUrlFormat"</span><span class="token operator">:</span> <span class="token string">"https://github.com/your-username/your-repo/compare/{{previousTag}}...{{currentTag}}"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="运行时环境配置" tabindex="-1"><a class="header-anchor" href="#运行时环境配置"><span>运行时环境配置</span></a></h3>
<ol>
<li>
<p><strong>前端运行时配置</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 运行时配置</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token constant">APP_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token string">"https://api.example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">enableNewUI</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">enableAnalytics</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">betaFeatures</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"light"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 配置服务</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ConfigService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 默认配置</span></span>
<span class="line">  <span class="token keyword">private</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token string">"https://default-api.example.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">features</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">enableNewUI</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">enableAnalytics</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">betaFeatures</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"system"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">private</span> config<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>defaultConfig<span class="token punctuation">,</span></span>
<span class="line">      <span class="token operator">...</span>window<span class="token punctuation">.</span><span class="token constant">APP_CONFIG</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">get</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> defaultValue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">,</span> path<span class="token punctuation">,</span> defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">isFeatureEnabled</span><span class="token punctuation">(</span><span class="token parameter">featureName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">features.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>featureName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConfigService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'apiUrl'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isFeatureEnabled</span><span class="token punctuation">(</span><span class="token string">'enableNewUI'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 启用新UI</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>特性开关(Feature Flags)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 特性开关服务</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">FeatureFlagService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> flags <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> subscribers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 初始化默认标志</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>flags <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">newNavigation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">betaFeatures</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 从API加载标志</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">loadFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/feature-flags'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>flags <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>flags<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Failed to load feature flags'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token parameter">flagName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flags<span class="token punctuation">[</span>flagName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">private</span> <span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flags<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// React Hook</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useFeatureFlag</span><span class="token punctuation">(</span><span class="token parameter">flagName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>isEnabled<span class="token punctuation">,</span> setIsEnabled<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span></span>
<span class="line">    featureFlagService<span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span>flagName<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> featureFlagService<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">flags</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setIsEnabled</span><span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>flags<span class="token punctuation">[</span>flagName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> unsubscribe<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>flagName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> isEnabled<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> showNewNavigation <span class="token operator">=</span> <span class="token function">useFeatureFlag</span><span class="token punctuation">(</span><span class="token string">'newNavigation'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span>showNewNavigation <span class="token operator">?</span> <span class="token operator">&lt;</span>NewNavigation <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>OldNavigation <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="性能优化架构" tabindex="-1"><a class="header-anchor" href="#性能优化架构"><span>性能优化架构</span></a></h2>
<h3 id="性能优化架构设计" tabindex="-1"><a class="header-anchor" href="#性能优化架构设计"><span>性能优化架构设计</span></a></h3>
<ol>
<li>
<p><strong>前端性能预算</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack-bundle-analyzer配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">analyzerMode</span><span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">reportFilename</span><span class="token operator">:</span> <span class="token string">'bundle-report.html'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">openAnalyzer</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">generateStatsFile</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">statsFilename</span><span class="token operator">:</span> <span class="token string">'bundle-stats.json'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 性能预算限制</span></span>
<span class="line">    <span class="token literal-property property">maxAssetSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span> <span class="token comment">// 单个资源最大200KB</span></span>
<span class="line">    <span class="token literal-property property">maxEntrypointSize</span><span class="token operator">:</span> <span class="token number">400000</span><span class="token punctuation">,</span> <span class="token comment">// 入口点最大400KB</span></span>
<span class="line">    <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token string">'warning'</span> <span class="token comment">// 超过限制显示警告</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 性能预算CI检查脚本</span></span>
<span class="line"><span class="token comment">// scripts/check-perf-budget.js</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./bundle-stats.json'</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">BUDGET</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">totalSize</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token comment">// 总体积1MB</span></span>
<span class="line">  <span class="token literal-property property">initialJS</span><span class="token operator">:</span> <span class="token number">400000</span><span class="token punctuation">,</span>  <span class="token comment">// 初始JS不超过400KB</span></span>
<span class="line">  <span class="token literal-property property">initialCSS</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span> <span class="token comment">// 初始CSS不超过100KB</span></span>
<span class="line">  <span class="token literal-property property">maxChunks</span><span class="token operator">:</span> <span class="token number">10</span>       <span class="token comment">// 最大分块数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查总大小</span></span>
<span class="line"><span class="token keyword">const</span> totalSize <span class="token operator">=</span> stats<span class="token punctuation">.</span>assets<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">size<span class="token punctuation">,</span> asset</span><span class="token punctuation">)</span> <span class="token operator">=></span> size <span class="token operator">+</span> asset<span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>totalSize <span class="token operator">></span> <span class="token constant">BUDGET</span><span class="token punctuation">.</span>totalSize<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">❌ 总体积超出预算: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>totalSize <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">KB > </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token constant">BUDGET</span><span class="token punctuation">.</span>totalSize <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">KB</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查其他指标...</span></span>
<span class="line"></span>
<span class="line">process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>failed <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>渲染性能优化架构</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 虚拟滚动列表实现</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">VirtualList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items<span class="token punctuation">,</span> itemHeight<span class="token punctuation">,</span> windowHeight <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>scrollTop<span class="token punctuation">,</span> setScrollTop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> startIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> itemHeight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> endIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span></span>
<span class="line">    items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>scrollTop <span class="token operator">+</span> windowHeight<span class="token punctuation">)</span> <span class="token operator">/</span> itemHeight<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> visibleItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> endIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> containerHeight <span class="token operator">=</span> items<span class="token punctuation">.</span>length <span class="token operator">*</span> itemHeight<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> offsetY <span class="token operator">=</span> startIndex <span class="token operator">*</span> itemHeight<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> container <span class="token operator">=</span> containerRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setScrollTop</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> handleScroll<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> container<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> handleScroll<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div </span>
<span class="line">      ref<span class="token operator">=</span><span class="token punctuation">{</span>containerRef<span class="token punctuation">}</span></span>
<span class="line">      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> windowHeight<span class="token punctuation">,</span> <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> containerHeight<span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'relative'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">{</span>visibleItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span></span>
<span class="line">          <span class="token operator">&lt;</span>div</span>
<span class="line">            key<span class="token operator">=</span><span class="token punctuation">{</span>startIndex <span class="token operator">+</span> index<span class="token punctuation">}</span></span>
<span class="line">            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token punctuation">(</span>startIndex <span class="token operator">+</span> index<span class="token punctuation">)</span> <span class="token operator">*</span> itemHeight<span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">height</span><span class="token operator">:</span> itemHeight</span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">></span></span>
<span class="line">            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>关键渲染路径优化</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 关键CSS内联</span></span>
<span class="line"><span class="token comment">// 构建插件配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'src/index.html'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 内联关键CSS</span></span>
<span class="line">      <span class="token literal-property property">inlineSource</span><span class="token operator">:</span> <span class="token string">'.(css)$'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 延迟加载非关键CSS</span></span>
<span class="line">      <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/non-critical.css'</span><span class="token punctuation">,</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'preload'</span><span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">'style'</span><span class="token punctuation">,</span> <span class="token literal-property property">onload</span><span class="token operator">:</span> <span class="token string">"this.onload=null;this.rel='stylesheet'"</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 路由级代码分割</span></span>
<span class="line"><span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/Home'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/About'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ProductList <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/ProductList'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> ProductDetail <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./pages/ProductDetail'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Loading <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>About <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProductList <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products/:id"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProductDetail <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="可扩展性设计" tabindex="-1"><a class="header-anchor" href="#可扩展性设计"><span>可扩展性设计</span></a></h2>
<h3 id="前端扩展点设计" tabindex="-1"><a class="header-anchor" href="#前端扩展点设计"><span>前端扩展点设计</span></a></h3>
<ol>
<li>
<p><strong>插件系统</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 插件系统实现</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">PluginSystem</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> hooks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 注册插件</span></span>
<span class="line">  <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">plugin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>plugin<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'插件必须有name属性'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 注册钩子</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>hooks<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>hooks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>hookName<span class="token punctuation">,</span> hookFn<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hookFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 初始化插件</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>init <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> plugin<span class="token punctuation">.</span>init <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      plugin<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 执行钩子</span></span>
<span class="line">  <span class="token function">applyHook</span><span class="token punctuation">(</span><span class="token parameter">hookName<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> hookFns <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> hookFns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> hookFn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">hookFn</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取API</span></span>
<span class="line">  <span class="token function">getAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">applyHook</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">applyHook</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 插件示例</span></span>
<span class="line"><span class="token keyword">const</span> analyticsPlugin <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'analytics'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 路由变更钩子</span></span>
<span class="line">    <span class="token string-property property">'router:change'</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> prevRoute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 发送页面浏览事件</span></span>
<span class="line">      <span class="token function">sendPageView</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> route<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 渲染前钩子</span></span>
<span class="line">    <span class="token string-property property">'render:before'</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">component<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 测量渲染时间</span></span>
<span class="line">      performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render-start-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> component<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 渲染后钩子</span></span>
<span class="line">    <span class="token string-property property">'render:after'</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render-end-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      performance<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render-start-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render-end-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>component<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Analytics plugin initialized'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册插件</span></span>
<span class="line"><span class="token keyword">const</span> pluginSystem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PluginSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">pluginSystem<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>analyticsPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用插件系统</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">navigate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> prevRoute <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> newRoute <span class="token operator">=</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 应用路由变更钩子</span></span>
<span class="line">    <span class="token keyword">const</span> finalRoute <span class="token operator">=</span> pluginSystem<span class="token punctuation">.</span><span class="token function">applyHook</span><span class="token punctuation">(</span><span class="token string">'router:change'</span><span class="token punctuation">,</span> newRoute<span class="token punctuation">,</span> prevRoute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 更新路由</span></span>
<span class="line">    window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> finalRoute<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span> navigate <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>主题系统</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主题系统</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ThemeManager</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> themes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#4361ee'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">secondary</span><span class="token operator">:</span> <span class="token string">'#3f37c9'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'#333333'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'#e0e0e0'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">typography</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token string">'12px'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token string">'16px'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token string">'20px'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">'"Segoe UI", Roboto, sans-serif'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token string">'8px'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token string">'16px'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token string">'24px'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'#4cc9f0'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">secondary</span><span class="token operator">:</span> <span class="token string">'#4895ef'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'#1a1a2e'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'#f1f1f1'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'#4e4e50'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">typography</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token string">'12px'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token string">'16px'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token string">'20px'</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token string">'"Segoe UI", Roboto, sans-serif'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token string">'8px'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token string">'16px'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">large</span><span class="token operator">:</span> <span class="token string">'24px'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">private</span> activeTheme <span class="token operator">=</span> <span class="token string">'light'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> subscribers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 从本地存储恢复主题</span></span>
<span class="line">    <span class="token keyword">const</span> savedTheme <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>savedTheme <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>savedTheme<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme <span class="token operator">=</span> savedTheme<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 检测系统主题</span></span>
<span class="line">      <span class="token keyword">const</span> prefersDark <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(prefers-color-scheme: dark)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme <span class="token operator">=</span> prefersDark <span class="token operator">?</span> <span class="token string">'dark'</span> <span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 应用主题</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">applyTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取当前主题</span></span>
<span class="line">  <span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置主题</span></span>
<span class="line">  <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token parameter">themeName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>themeName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme <span class="token operator">=</span> themeName<span class="token punctuation">;</span></span>
<span class="line">      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'theme'</span><span class="token punctuation">,</span> themeName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">applyTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 注册新主题</span></span>
<span class="line">  <span class="token function">registerTheme</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> themeConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">.</span>light<span class="token punctuation">,</span> <span class="token comment">// 默认扩展light主题</span></span>
<span class="line">      <span class="token operator">...</span>themeConfig</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 覆盖主题变量</span></span>
<span class="line">  <span class="token function">override</span><span class="token punctuation">(</span><span class="token parameter">themeName<span class="token punctuation">,</span> overrides</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>themeName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>themeName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>themes<span class="token punctuation">[</span>themeName<span class="token punctuation">]</span><span class="token punctuation">,</span> overrides<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme <span class="token operator">===</span> themeName<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">applyTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 应用CSS变量</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token function">applyTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 设置CSS变量</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--color-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span>typography<span class="token punctuation">.</span>fontSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--font-size-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    root<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--font-family'</span><span class="token punctuation">,</span> theme<span class="token punctuation">.</span>typography<span class="token punctuation">.</span>fontFamily<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>theme<span class="token punctuation">.</span>spacing<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      root<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--spacing-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 设置数据属性</span></span>
<span class="line">    root<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-theme'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeTheme<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 订阅主题变更</span></span>
<span class="line">  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 通知订阅者</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>subscribers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=></span> <span class="token function">callback</span><span class="token punctuation">(</span>theme<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用主题</span></span>
<span class="line"><span class="token keyword">const</span> themeManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThemeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// React Hook</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>themeManager<span class="token punctuation">.</span><span class="token function">getTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> themeManager<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">newTheme</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setTheme</span><span class="token punctuation">(</span>newTheme<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> unsubscribe<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">setTheme</span><span class="token operator">:</span> themeManager<span class="token punctuation">.</span><span class="token function">setTheme</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>themeManager<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isDark</span><span class="token operator">:</span> themeManager<span class="token punctuation">.</span>activeTheme <span class="token operator">===</span> <span class="token string">'dark'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用示例</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ThemeToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> isDark<span class="token punctuation">,</span> setTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>button </span>
<span class="line">      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTheme</span><span class="token punctuation">(</span>isDark <span class="token operator">?</span> <span class="token string">'light'</span> <span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">></span></span>
<span class="line">      切换到<span class="token punctuation">{</span>isDark <span class="token operator">?</span> <span class="token string">'浅色'</span> <span class="token operator">:</span> <span class="token string">'深色'</span><span class="token punctuation">}</span>主题</span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>多语言支持</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// i18n实现</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">I18nManager</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> translations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> currentLocale <span class="token operator">=</span> <span class="token string">'zh-CN'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> subscribers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 从本地存储或浏览器设置获取语言</span></span>
<span class="line">    <span class="token keyword">const</span> savedLocale <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'locale'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>savedLocale<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>currentLocale <span class="token operator">=</span> savedLocale<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>currentLocale <span class="token operator">=</span> navigator<span class="token punctuation">.</span>language <span class="token operator">||</span> <span class="token string">'zh-CN'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 加载语言包</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">loadTranslations</span><span class="token punctuation">(</span><span class="token parameter">locale</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>translations<span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/locales/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>translations<span class="token punctuation">[</span>locale<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed to load translations for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 回退到默认语言</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>locale <span class="token operator">!==</span> <span class="token string">'zh-CN'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadTranslations</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>translations<span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 设置当前语言</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token parameter">locale</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadTranslations</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>currentLocale <span class="token operator">=</span> locale<span class="token punctuation">;</span></span>
<span class="line">    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'locale'</span><span class="token punctuation">,</span> locale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'lang'</span><span class="token punctuation">,</span> locale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifySubscribers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 获取翻译</span></span>
<span class="line">  <span class="token function">translate</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> translations <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>translations<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentLocale<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> text <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> part</span><span class="token punctuation">)</span> <span class="token operator">=></span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">[</span>part<span class="token punctuation">]</span><span class="token punctuation">,</span> translations<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Missing translation for key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> key<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 替换参数</span></span>
<span class="line">    <span class="token keyword">return</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\{(\w+)\}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> p1</span><span class="token punctuation">)</span> <span class="token operator">=></span> params<span class="token punctuation">[</span>p1<span class="token punctuation">]</span> <span class="token operator">||</span> match<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>t<span class="token punctuation">,</span> setLocale<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">I18nManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>translate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">I18nManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">newTranslations</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setLocale</span><span class="token punctuation">(</span>newTranslations<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> unsubscribe<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> t<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="项目结构组织" tabindex="-1"><a class="header-anchor" href="#项目结构组织"><span>项目结构组织</span></a></h2>
<h3 id="推荐的项目结构" tabindex="-1"><a class="header-anchor" href="#推荐的项目结构"><span>推荐的项目结构</span></a></h3>
<ol>
<li>
<p><strong>按功能（Feature）组织</strong>
src/
├── assets/                # 静态资源
│   ├── images/
│   ├── fonts/
│   └── styles/
├── core/                  # 核心模块
│   ├── api/               # API客户端
│   ├── router/            # 路由配置
│   ├── store/             # 全局状态
│   └── hooks/             # 通用Hooks
├── features/              # 功能模块
│   ├── auth/              # 认证功能
│   │   ├── components/    # 组件
│   │   ├── hooks/         # 功能相关Hooks
│   │   ├── services/      # API服务
│   │   ├── store/         # 功能状态
│   │   ├── utils/         # 工具函数
│   │   ├── types.ts       # 类型定义
│   │   └── index.ts       # 公共API
│   ├── products/          # 产品功能
│   │   ├── components/
│   │   └── ...
│   └── checkout/          # 结账功能
│       ├── components/
│       └── ...
├── shared/                # 共享资源
│   ├── components/        # 通用组件
│   ├── hooks/             # 通用Hooks
│   ├── utils/             # 工具函数
│   └── constants/         # 常量
├── App.tsx                # 应用根组件
└── index.tsx              # 入口文件</p>
</li>
<li>
<p><strong>单一特性目录结构</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">features/auth/</span>
<span class="line">├── components/            # 组件</span>
<span class="line">│   ├── LoginForm.tsx</span>
<span class="line">│   ├── RegisterForm.tsx</span>
<span class="line">│   ├── ForgotPassword.tsx</span>
<span class="line">│   └── index.ts           # 导出所有组件</span>
<span class="line">├── hooks/                 # 功能专用Hooks</span>
<span class="line">│   ├── useAuth.ts</span>
<span class="line">│   ├── useLoginForm.ts</span>
<span class="line">│   └── index.ts</span>
<span class="line">├── services/              # API服务</span>
<span class="line">│   ├── authService.ts</span>
<span class="line">│   └── index.ts</span>
<span class="line">├── store/                 # 状态管理</span>
<span class="line">│   ├── authSlice.ts</span>
<span class="line">│   ├── selectors.ts</span>
<span class="line">│   └── index.ts</span>
<span class="line">├── utils/                 # 工具函数</span>
<span class="line">│   ├── validation.ts</span>
<span class="line">│   └── index.ts</span>
<span class="line">├── types.ts               # 类型定义</span>
<span class="line">├── routes.ts              # 路由配置</span>
<span class="line">└── index.ts               # 公共API</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>index.ts作为公共API</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// features/auth/index.ts</span></span>
<span class="line"><span class="token comment">// 只导出需要对外暴露的内容</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 组件</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> LoginForm<span class="token punctuation">,</span> RegisterForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Hooks</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./hooks'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 服务</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> login<span class="token punctuation">,</span> logout<span class="token punctuation">,</span> register <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./services/authService'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 类型</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> User<span class="token punctuation">,</span> LoginCredentials <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 路由</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> authRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./routes'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 不导出内部实现细节</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="文件命名约定" tabindex="-1"><a class="header-anchor" href="#文件命名约定"><span>文件命名约定</span></a></h3>
<ol>
<li>
<p><strong>文件命名约定</strong></p>
<ul>
<li>组件文件: 使用PascalCase (e.g., <code v-pre>Button.tsx</code>, <code v-pre>UserProfile.tsx</code>)</li>
<li>Hooks文件: 使用camelCase，前缀为&quot;use&quot; (e.g., useAuth.ts, useWindowSize.ts)</li>
<li>服务和工具函数: 使用camelCase (e.g., authService.ts, dateUtils.ts)</li>
<li>类型定义: 使用kebab-case或descriptive (e.g., types.ts, auth-types.ts)</li>
<li>测试文件: 使用与被测文件相同的名称，加上.test或.spec后缀 (e.g., Button.test.tsx)</li>
</ul>
</li>
<li>
<p><strong>示例</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">components/</span>
<span class="line">├── Button.tsx</span>
<span class="line">├── Button.test.tsx</span>
<span class="line">├── Button.styles.ts      # 组件样式</span>
<span class="line">├── UserCard/             # 复杂组件目录</span>
<span class="line">│   ├── UserCard.tsx      # 主组件</span>
<span class="line">│   ├── UserAvatar.tsx    # 子组件</span>
<span class="line">│   ├── UserInfo.tsx      # 子组件</span>
<span class="line">│   ├── index.ts          # 导出</span>
<span class="line">│   └── styles.ts         # 样式</span>
<span class="line">└── index.ts              # 导出所有组件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="导入与别名策略" tabindex="-1"><a class="header-anchor" href="#导入与别名策略"><span>导入与别名策略</span></a></h3>
<ol>
<li>
<p><strong>导入别名配置</strong>
// tsconfig.json
{
&quot;compilerOptions&quot;: {
&quot;baseUrl&quot;: &quot;src&quot;,
&quot;paths&quot;: {
&quot;@core/<em>&quot;: [&quot;core/</em>&quot;],
&quot;@features/<em>&quot;: [&quot;features/</em>&quot;],
&quot;@shared/<em>&quot;: [&quot;shared/</em>&quot;],
&quot;@assets/<em>&quot;: [&quot;assets/</em>&quot;],
&quot;@utils/<em>&quot;: [&quot;shared/utils/</em>&quot;],
&quot;@components/<em>&quot;: [&quot;shared/components/</em>&quot;]
}
}
}</p>
<p>// webpack.config.js
const path = require('path');</p>
<p>module.exports = {
// ...其他配置
resolve: {
alias: {
'@core': path.resolve(__dirname, 'src/core'),
'@features': path.resolve(__dirname, 'src/features'),
'@shared': path.resolve(__dirname, 'src/shared'),
'@assets': path.resolve(__dirname, 'src/assets'),
'@utils': path.resolve(__dirname, 'src/shared/utils'),
'@components': path.resolve(__dirname, 'src/shared/components')
}
}
};</p>
</li>
<li>
<p><strong>导入顺序约定</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 推荐的导入顺序</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1. React和第三方库</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 全局/核心导入</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> apiClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@core/api'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 特性/模块导入</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@features/auth'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 共享组件和工具</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@components'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> formatDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@utils/date'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 样式导入</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'./MyComponent.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>内聚的模块导出</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// shared/components/index.ts - 集中导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Card'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Modal'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用时可以从单一来源导入</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Card<span class="token punctuation">,</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@components'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="项目结构最佳实践" tabindex="-1"><a class="header-anchor" href="#项目结构最佳实践"><span>项目结构最佳实践</span></a></h3>
<ol>
<li><strong>遵循有意义的目录结构</strong>
<ul>
<li>目录结构应当反映业务领域和技术架构</li>
<li>相关文件应该放在一起，遵循共同闭包原则</li>
<li>避免过深的嵌套层次（通常不超过4层）</li>
</ul>
</li>
<li><strong>适度重构</strong>
<ul>
<li>定期重新评估项目结构，防止结构老化</li>
<li>模块和组件增长时考虑拆分</li>
<li>频繁一起修改的文件应该放在同一目录下</li>
</ul>
</li>
<li><strong>封装边界明确</strong>
<ul>
<li>使用index.ts文件控制模块的公共API</li>
<li>不向外部暴露内部实现细节</li>
<li>遵循&quot;最小知识原则&quot;，组件只知道直接依赖</li>
</ul>
</li>
<li><strong>文档化</strong>
<ul>
<li>为复杂的模块结构添加README.md</li>
<li>使用JSDoc或类型系统记录API接口</li>
<li>记录非常规的组织方式或特殊约定</li>
</ul>
</li>
</ol>
<h2 id="微前端架构" tabindex="-1"><a class="header-anchor" href="#微前端架构"><span>微前端架构</span></a></h2>
<h3 id="微前端的核心概念" tabindex="-1"><a class="header-anchor" href="#微前端的核心概念"><span>微前端的核心概念</span></a></h3>
<ol>
<li><strong>独立部署</strong>
<ul>
<li>各个微前端可以独立构建、测试和部署</li>
<li>减少大型应用的发布风险</li>
<li>使不同团队能够按照自己的节奏开发</li>
</ul>
</li>
<li><strong>技术栈独立</strong>**
<ul>
<li>不同微前端可以使用不同的前端框架和库</li>
<li>逐步升级旧系统的技术栈</li>
<li>允许团队根据需求选择最适合的技术</li>
</ul>
</li>
<li><strong>团队自治</strong>
<ul>
<li>每个微前端由一个独立的团队负责</li>
<li>清晰的责任边界</li>
<li>减少跨团队沟通协调成本</li>
</ul>
</li>
</ol>
<h3 id="微前端实现方案" tabindex="-1"><a class="header-anchor" href="#微前端实现方案"><span>微前端实现方案</span></a></h3>
<ol>
<li>
<p><strong>基于iframe的集成</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 主应用 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>通用头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token string">'app1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>应用1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token string">'app2'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>应用2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>micro-frontend-container<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>通用底部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">loadApp</span><span class="token punctuation">(</span><span class="token parameter">appName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'micro-frontend-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    container<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>appName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Web Components</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 微前端1 - 使用Web Components</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MicroApp1</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">      &lt;style></span>
<span class="line">        /* 组件级样式，不会泄露 */</span>
<span class="line">        h2 { color: blue; }</span>
<span class="line">      &lt;/style></span>
<span class="line">      &lt;div></span>
<span class="line">        &lt;h2>Micro App 1&lt;/h2></span>
<span class="line">        &lt;p>This is a micro frontend using Web Components&lt;/p></span>
<span class="line">      &lt;/div></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 可以在这里初始化React、Vue等框架</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'micro-app-1'</span><span class="token punctuation">,</span> MicroApp1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 主应用中使用</span></span>
<span class="line"><span class="token operator">&lt;</span>micro<span class="token operator">-</span>app<span class="token operator">-</span><span class="token number">1</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">-</span><span class="token number">1</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>模块联邦 (Webpack Module Federation)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 微前端1的webpack配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> ModuleFederationPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>container<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...其他配置</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'microApp1'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'./MicroApp1'</span><span class="token operator">:</span> <span class="token string">'./src/MicroApp1'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'./Button'</span><span class="token operator">:</span> <span class="token string">'./src/components/Button'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react'</span><span class="token punctuation">,</span> <span class="token string">'react-dom'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 主应用的webpack配置</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> ModuleFederationPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>container<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...其他配置</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'host'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">microApp1</span><span class="token operator">:</span> <span class="token string">'microApp1@http://localhost:3001/remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">microApp2</span><span class="token operator">:</span> <span class="token string">'microApp2@http://localhost:3002/remoteEntry.js'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'react'</span><span class="token punctuation">,</span> <span class="token string">'react-dom'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 主应用中使用微前端</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> MicroApp1 <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'microApp1/MicroApp1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Button <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'microApp1/Button'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>h1<span class="token operator">></span>主应用<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>MicroApp1 <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Button<span class="token operator">></span>共享组件<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>基于路由的集成</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用路由配置</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MainApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>header<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>nav<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/app1"</span><span class="token operator">></span>应用<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span></span>
<span class="line">            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/app2"</span><span class="token operator">></span>应用<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span></span>
<span class="line">        </span>
<span class="line">        <span class="token operator">&lt;</span>Routes<span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/app1/*"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>MicroFrontend name<span class="token operator">=</span><span class="token string">"app1"</span> host<span class="token operator">=</span><span class="token string">"http://localhost:3001"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/app2/*"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>MicroFrontend name<span class="token operator">=</span><span class="token string">"app2"</span> host<span class="token operator">=</span><span class="token string">"http://localhost:3002"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 微前端容器组件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MicroFrontend</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> host <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 动态加载微前端脚本</span></span>
<span class="line">    <span class="token keyword">const</span> scriptId <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">micro-frontend-script-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>scriptId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">renderMicroFrontend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    script<span class="token punctuation">.</span>id <span class="token operator">=</span> scriptId<span class="token punctuation">;</span></span>
<span class="line">    script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/static/js/main.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    script<span class="token punctuation">.</span>onload <span class="token operator">=</span> renderMicroFrontend<span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 调用微前端的卸载方法</span></span>
<span class="line">      window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">unmount</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">unmount</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> host<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 渲染微前端</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">renderMicroFrontend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mount</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mount</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-container</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-container</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="微前端的通信方案" tabindex="-1"><a class="header-anchor" href="#微前端的通信方案"><span>微前端的通信方案</span></a></h3>
<ol>
<li>
<p><strong>基于CustomEvent的通信</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 在微前端1中发送事件</span></span>
<span class="line"><span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'view'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span><span class="token string">'microapp:event'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> </span>
<span class="line">  <span class="token literal-property property">detail</span><span class="token operator">:</span> payload<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bubbles</span><span class="token operator">:</span> <span class="token boolean">true</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在主应用或其他微前端中监听</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'microapp:event'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> payload <span class="token operator">=</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received event from micro app:'</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>全局状态管理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 创建全局状态存储</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MicroAppStore</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">newState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>newState <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> listener <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在全局作用域中初始化</span></span>
<span class="line">window<span class="token punctuation">.</span>microAppStore <span class="token operator">=</span> window<span class="token punctuation">.</span>microAppStore <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">MicroAppStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在微前端中使用</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> window<span class="token punctuation">.</span>microAppStore<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 订阅更新</span></span>
<span class="line"><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Store updated:'</span><span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 更新状态</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alice'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>基于URL的状态共享</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用URL查询参数共享状态</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocation<span class="token punctuation">,</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MicroApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 从URL获取状态</span></span>
<span class="line">  <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> filter <span class="token operator">=</span> query<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'filter'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'all'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'page'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 更新URL状态</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">updateFilters</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newFilter</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'filter'</span><span class="token punctuation">,</span> newFilter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'page'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 重置页码</span></span>
<span class="line">    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">search</span><span class="token operator">:</span> query<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 组件实现...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="微前端架构的挑战与解决方案" tabindex="-1"><a class="header-anchor" href="#微前端架构的挑战与解决方案"><span>微前端架构的挑战与解决方案</span></a></h3>
<ol>
<li>
<p><strong>样式隔离</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// CSS Module方案</span></span>
<span class="line"><span class="token comment">// my-component.module.css</span></span>
<span class="line"><span class="token punctuation">.</span>container <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用</span></span>
<span class="line"><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">'./my-component.module.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>内容<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// CSS-in-JS方案</span></span>
<span class="line"><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">'styled-components'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Container <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  padding: 20px;</span>
<span class="line">  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>textColor<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Container<span class="token operator">></span>内容<span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>依赖共享与重复资源</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// package.json中标记共享依赖</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"micro-app-1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// webpack模块联邦配置共享库</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'microApp1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'remoteEntry.js'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'./App'</span><span class="token operator">:</span> <span class="token string">'./src/App'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.2.0'</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'react-dom'</span><span class="token operator">:</span> <span class="token punctuation">{</span> </span>
<span class="line">      <span class="token literal-property property">singleton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token literal-property property">requiredVersion</span><span class="token operator">:</span> <span class="token string">'^18.2.0'</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>认证与权限管理</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 主应用中的认证服务</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'null'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">credentials</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 登录逻辑...</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>credentials<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> data<span class="token punctuation">.</span>token<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> data<span class="token punctuation">.</span>user<span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// 通知微前端</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span><span class="token string">'auth:login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token punctuation">}</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">return</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 通知微前端</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span><span class="token string">'auth:logout'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴露给微前端</span></span>
<span class="line">window<span class="token punctuation">.</span>authService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 微前端中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isAuthenticated</span><span class="token operator">:</span> window<span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> window<span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isAuthenticated</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">user</span><span class="token operator">:</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>user</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">handleLogout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isAuthenticated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:login'</span><span class="token punctuation">,</span> handleLogin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:logout'</span><span class="token punctuation">,</span> handleLogout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:login'</span><span class="token punctuation">,</span> handleLogin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:logout'</span><span class="token punctuation">,</span> handleLogout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isAuthenticated</span><span class="token operator">:</span> state<span class="token punctuation">.</span>isAuthenticated<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> state<span class="token punctuation">.</span>user<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">login</span><span class="token operator">:</span> window<span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>authService<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">logout</span><span class="token operator">:</span> window<span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>authService<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="实际案例分析" tabindex="-1"><a class="header-anchor" href="#实际案例分析"><span>实际案例分析</span></a></h2>
<h3 id="案例1-大型电商平台架构" tabindex="-1"><a class="header-anchor" href="#案例1-大型电商平台架构"><span>案例1: 大型电商平台架构</span></a></h3>
<p><strong>架构描述</strong>:</p>
<ul>
<li>基于React和Redux的单页应用</li>
<li>按业务领域划分的模块化结构</li>
<li>微前端架构用于集成第三方应用和旧系统
<strong>关键架构决策</strong>:</li>
</ul>
<ol>
<li>
<p><strong>采用Feature-first的目录结构</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">src/</span>
<span class="line">├── features/</span>
<span class="line">│   ├── product-catalog/</span>
<span class="line">│   ├── shopping-cart/</span>
<span class="line">│   ├── checkout/</span>
<span class="line">│   ├── user-account/</span>
<span class="line">│   └── order-management/</span>
<span class="line">├── core/</span>
<span class="line">│   ├── api/</span>
<span class="line">│   ├── auth/</span>
<span class="line">│   └── store/</span>
<span class="line">└── shared/</span>
<span class="line">    ├── components/</span>
<span class="line">    └── utils/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>状态管理分层</strong></p>
<ul>
<li>全局状态: 用户认证、全站配置、购物车</li>
<li>特性状态: 各功能模块自己管理的状态</li>
<li>本地状态: 组件内的UI状态</li>
</ul>
</li>
<li>
<p><strong>性能优化策略</strong></p>
<ul>
<li>路由级代码分割</li>
<li>商品列表虚拟滚动</li>
<li>静态资源CDN分发</li>
<li>服务端渲染关键页面</li>
</ul>
</li>
<li>
<p><strong>跨领域关注点处理</strong></p>
<ul>
<li>统一的错误边界处理</li>
<li>全局的数据加载状态</li>
<li>一致的表单验证策略</li>
</ul>
</li>
</ol>
<h3 id="案例2-saas管理平台架构" tabindex="-1"><a class="header-anchor" href="#案例2-saas管理平台架构"><span>案例2: SaaS管理平台架构</span></a></h3>
<p><strong>架构描述</strong>:</p>
<ul>
<li>基于Vue和Pinia的企业级应用</li>
<li>支持多租户的插件化架构</li>
<li>动态主题和国际化支持
<strong>关键架构决策</strong>:</li>
</ul>
<ol>
<li><strong>采用插件化架构</strong><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 插件定义</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'analytics'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/* 路由配置 */</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">store</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">/* 状态定义 */</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 注册组件、指令等</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'AnalyticsDashboard'</span><span class="token punctuation">,</span> AnalyticsDashboard<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 扩展功能</span></span>
<span class="line">    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$analytics <span class="token operator">=</span> analyticsService<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 主应用加载插件</span></span>
<span class="line"><span class="token keyword">import</span> Analytics <span class="token keyword">from</span> <span class="token string">'./plugins/analytics'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Analytics<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'xxx'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>动态权限控制</strong>
<ul>
<li>基于RBAC模型的权限系统</li>
<li>动态路由生成</li>
<li>组件级权限控制</li>
</ul>
</li>
<li><strong>动态主题实现</strong>
<ul>
<li>CSS变量方案</li>
<li>预设主题切换</li>
<li>自定义主题配置界面</li>
</ul>
</li>
<li><strong>可扩展的表单系统</strong>
<ul>
<li>基于JSON Schema的表单生成器</li>
<li>自定义字段和验证规则</li>
<li>表单状态历史追踪</li>
</ul>
</li>
</ol>
<h3 id="案例3-渐进式重构旧系统" tabindex="-1"><a class="header-anchor" href="#案例3-渐进式重构旧系统"><span>案例3: 渐进式重构旧系统</span></a></h3>
<p><strong>架构描述</strong>:</p>
<ul>
<li>将jQuery老系统逐步迁移到现代框架</li>
<li>基于微前端的混合架构</li>
<li>增量式采用现代开发实践
<strong>关键架构决策</strong>:</li>
</ul>
<ol>
<li>
<p><strong>路由级别微前端集成</strong></p>
<ul>
<li>主应用负责认证和导航</li>
<li>旧页面保持原样</li>
<li>新功能使用React开发</li>
</ul>
</li>
<li>
<p><strong>共享认证状态</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 旧系统中暴露认证状态</span></span>
<span class="line">window<span class="token punctuation">.</span>appAuth <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getToken</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">getUserInfo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'null'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">isAuthenticated</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token operator">!</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 新应用中使用</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span></span>
<span class="line">    window<span class="token punctuation">.</span>appAuth<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">checkAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setIsAuthenticated</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>appAuth<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'storage'</span><span class="token punctuation">,</span> checkAuth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:changed'</span><span class="token punctuation">,</span> checkAuth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'storage'</span><span class="token punctuation">,</span> checkAuth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'auth:changed'</span><span class="token punctuation">,</span> checkAuth<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    isAuthenticated<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">token</span><span class="token operator">:</span> window<span class="token punctuation">.</span>appAuth<span class="token punctuation">.</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> window<span class="token punctuation">.</span>appAuth<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>渐进式API更新</strong></p>
<ul>
<li>包装旧API为Promise风格</li>
<li>新API遵循RESTful设计</li>
<li>使用适配器模式处理差异</li>
</ul>
</li>
<li>
<p><strong>混合式构建流程</strong></p>
<ul>
<li>旧系统保持Gulp构建</li>
<li>新功能使用Webpack</li>
<li>共享静态资源CDN</li>
</ul>
</li>
</ol>
<h3 id="总结和最佳实践" tabindex="-1"><a class="header-anchor" href="#总结和最佳实践"><span>总结和最佳实践</span></a></h3>
<h3 id="架构设计原则回顾" tabindex="-1"><a class="header-anchor" href="#架构设计原则回顾"><span>架构设计原则回顾</span></a></h3>
<p>1.<strong>关注点分离</strong></p>
<ul>
<li>将应用分解为独立、聚焦的模块</li>
<li>分离数据、UI和业务逻辑
2.<strong>单一职责</strong></li>
<li>每个组件、模块只做一件事，做好这一件事</li>
<li>降低耦合，提高复用性
3.<strong>可测试性</strong></li>
<li>架构设计考虑测试需求</li>
<li>便于单元测试和集成测试
4.<strong>渐进式增强</strong></li>
<li>确保基本功能在最简环境可用</li>
<li>根据环境能力增强体验</li>
</ul>
<h3 id="大型前端项目成功的关键因素" tabindex="-1"><a class="header-anchor" href="#大型前端项目成功的关键因素"><span>大型前端项目成功的关键因素</span></a></h3>
<ol>
<li><strong>明确的架构文档</strong>
<ul>
<li>记录架构决策理由</li>
<li>定义清晰的开发规范</li>
<li>保持文档更新</li>
</ul>
</li>
<li><strong>一致的编码标准</strong>
<ul>
<li>使用ESLint、Prettier等工具强制代码风格</li>
<li>通过代码审查确保质量</li>
<li>建立共享的组件库和设计系统</li>
</ul>
</li>
<li><strong>有效的状态管理</strong>
<ul>
<li>选择合适的状态管理策略</li>
<li>避免状态分散和重复</li>
<li>确保状态变更可追踪</li>
</ul>
</li>
<li><strong>性能优先考虑</strong>
<ul>
<li>从设计阶段考虑性能问题</li>
<li>定期性能审计和优化</li>
<li>建立性能测试基准</li>
</ul>
</li>
<li><strong>适应性强的项目结构</strong>
<ul>
<li>选择适合团队和项目的组织结构</li>
<li>允许随项目发展调整</li>
<li>保持一致性但避免过度僵化</li>
</ul>
</li>
</ol>
<h3 id="未来趋势与展望" tabindex="-1"><a class="header-anchor" href="#未来趋势与展望"><span>未来趋势与展望</span></a></h3>
<ol>
<li>
<p><strong>Web组件与微前端</strong></p>
<ul>
<li>标准化组件封装和复用</li>
<li>更细粒度的应用拆分</li>
<li>跨框架组件共享</li>
</ul>
</li>
<li>
<p><strong>服务器组件与流式渲染</strong></p>
<ul>
<li>混合客户端和服务器渲染模式</li>
<li>增量式静态生成(ISR)</li>
<li>流式UI更新</li>
</ul>
</li>
<li>
<p><strong>低代码与可视化开发</strong></p>
<ul>
<li>组件驱动的可视化构建</li>
<li>JSON配置生成UI</li>
<li>业务逻辑与UI分离</li>
</ul>
</li>
<li>
<p><strong>AI辅助开发</strong></p>
<ul>
<li>代码自动补全和生成</li>
<li>智能代码重构</li>
<li>自动文档生成</li>
</ul>
</li>
</ol>
<h3 id="最终建议" tabindex="-1"><a class="header-anchor" href="#最终建议"><span>最终建议</span></a></h3>
<ol>
<li>
<p><strong>保持简单</strong></p>
<ul>
<li>避免过度工程化</li>
<li>只有问题明确时才增加抽象层</li>
<li>从简单解决方案开始，按需演进</li>
</ul>
</li>
<li>
<p><strong>以用户为中心</strong></p>
<ul>
<li>技术选择基于用户体验需求</li>
<li>性能优化关注用户感知</li>
<li>可访问性作为基本要求</li>
</ul>
</li>
<li>
<p><strong>持续改进</strong></p>
<ul>
<li>定期重构和技术债务清理</li>
<li>保持对新技术的了解</li>
<li>从错误中学习并调整架构</li>
</ul>
</li>
<li>
<p><strong>团队协作</strong></p>
<ul>
<li>架构决策需要团队共识</li>
<li>投资于知识共享和培训</li>
<li>建立明确的技术决策流程</li>
</ul>
</li>
</ol>
<p>通过遵循这些原则和实践，团队可以构建出高质量、可维护且灵活的前端架构，从而支持业务长期发展并提供卓越的用户体验。</p>
</div></template>



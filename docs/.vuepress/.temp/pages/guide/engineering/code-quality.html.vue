<template><div><h1 id="前端代码质量保障体系" tabindex="-1"><a class="header-anchor" href="#前端代码质量保障体系"><span>前端代码质量保障体系</span></a></h1>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2>
<ol>
<li><a href="#%E5%BC%95%E8%A8%80">引言</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F%E5%BA%A6%E9%87%8F%E6%8C%87%E6%A0%87">代码质量度量指标</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83%E4%B8%8E%E9%A3%8E%E6%A0%BC%E7%BB%9F%E4%B8%80">代码规范与风格统一</a></li>
<li><a href="#%E9%9D%99%E6%80%81%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90">静态代码分析</a></li>
<li><a href="#%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E7%B3%BB%E7%BB%9F">类型检查系统</a></li>
<li><a href="#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E7%AD%96%E7%95%A5">自动化测试策略</a></li>
<li><a href="#%E4%BB%A3%E7%A0%81%E8%AF%84%E5%AE%A1%E6%9C%BA%E5%88%B6">代码评审机制</a></li>
<li><a href="#%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E4%B8%8E%E9%83%A8%E7%BD%B2">持续集成与部署</a></li>
<li><a href="#%E5%B7%A5%E4%BD%9C%E6%B5%81%E8%87%AA%E5%8A%A8%E5%8C%96">工作流自动化</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E4%B8%8E%E5%AE%89%E5%85%A8%E6%A3%80%E6%B5%8B">性能与安全检测</a></li>
<li><a href="#%E8%B4%A8%E9%87%8F%E5%8F%AF%E8%A7%86%E5%8C%96%E4%B8%8E%E6%8A%A5%E5%91%8A">质量可视化与报告</a></li>
<li><a href="#%E8%B4%A8%E9%87%8F%E6%96%87%E5%8C%96%E5%BB%BA%E8%AE%BE">质量文化建设</a></li>
</ol>
<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言"><span>引言</span></a></h2>
<p>在现代前端开发中，随着项目规模和团队规模的不断扩大，代码质量问题变得日益突出。一个完善的代码质量保障体系不仅能够减少线上问题，提高开发效率，还能降低维护成本，改善开发体验。本文将详细介绍如何构建一套完整的前端代码质量保障流程，帮助团队持续交付高质量的代码。</p>
<h2 id="代码质量度量指标" tabindex="-1"><a class="header-anchor" href="#代码质量度量指标"><span>代码质量度量指标</span></a></h2>
<h3 id="关键质量指标" tabindex="-1"><a class="header-anchor" href="#关键质量指标"><span>关键质量指标</span></a></h3>
<ol>
<li>
<p><strong>可读性与可维护性</strong></p>
<ul>
<li>代码复杂度 (圈复杂度)</li>
<li>函数/文件长度</li>
<li>代码注释率</li>
<li>命名规范符合度</li>
</ul>
</li>
<li>
<p><strong>可靠性</strong></p>
<ul>
<li>静态分析问题数</li>
<li>单元测试覆盖率</li>
<li>关键路径测试覆盖率</li>
<li>已知bug数量和严重程度</li>
</ul>
</li>
<li>
<p><strong>性能指标</strong></p>
<ul>
<li>首次加载时间</li>
<li>交互响应时间</li>
<li>资源体积</li>
<li>内存使用情况</li>
</ul>
</li>
<li>
<p><strong>安全指标</strong></p>
<ul>
<li>已知漏洞数量</li>
<li>依赖包安全问题数量</li>
<li>安全最佳实践符合度</li>
</ul>
</li>
</ol>
<h3 id="指标收集与计算" tabindex="-1"><a class="header-anchor" href="#指标收集与计算"><span>指标收集与计算</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// sonarqube-scanner配置示例</span></span>
<span class="line"><span class="token keyword">const</span> scanner <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'sonarqube-scanner'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">scanner</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">serverUrl</span><span class="token operator">:</span> <span class="token string">'http://sonarqube-server:9000'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SONAR_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'sonar.projectName'</span><span class="token operator">:</span> <span class="token string">'前端项目'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.projectKey'</span><span class="token operator">:</span> <span class="token string">'frontend-project'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.sources'</span><span class="token operator">:</span> <span class="token string">'src'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.tests'</span><span class="token operator">:</span> <span class="token string">'tests'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.javascript.lcov.reportPaths'</span><span class="token operator">:</span> <span class="token string">'coverage/lcov.info'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.testExecutionReportPaths'</span><span class="token operator">:</span> <span class="token string">'test-report.xml'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.javascript.file.suffixes'</span><span class="token operator">:</span> <span class="token string">'.js,.jsx,.ts,.tsx'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'sonar.exclusions'</span><span class="token operator">:</span> <span class="token string">'**/node_modules/**,**/*.test.js'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'SonarQube 分析完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码规范与风格统一" tabindex="-1"><a class="header-anchor" href="#代码规范与风格统一"><span>代码规范与风格统一</span></a></h2>
<h3 id="编码规范定义" tabindex="-1"><a class="header-anchor" href="#编码规范定义"><span>编码规范定义</span></a></h3>
<p>编码规范是保障代码质量的第一道防线，一个好的编码规范应该包括：</p>
<ol>
<li><strong>命名约定</strong>
<ul>
<li>变量/函数/类命名规则</li>
<li>文件命名规则</li>
<li>常量命名规则</li>
</ul>
</li>
<li><strong>代码格式</strong>
<ul>
<li>缩进与空格</li>
<li>行长度限制</li>
<li>括号和空行规则</li>
</ul>
</li>
<li><strong>语言特性使用</strong>
<ul>
<li>ES6+特性使用规范</li>
<li>条件语句规范</li>
<li>错误处理规范</li>
</ul>
</li>
<li><strong>注释规范</strong>
-JSDoc风格注释
<ul>
<li>代码块和函数注释要求</li>
<li>弃用和TODO标记规范</li>
</ul>
</li>
</ol>
<h3 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置"><span>工具配置</span></a></h3>
<h4 id="eslint配置" tabindex="-1"><a class="header-anchor" href="#eslint配置"><span>ESLint配置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">es2021</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:react/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:@typescript-eslint/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:prettier/recommended'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'@typescript-eslint/parser'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'react'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@typescript-eslint'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'react-hooks'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'prettier'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'import'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'jsx-a11y'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 错误预防规则</span></span>
<span class="line">    <span class="token string-property property">'no-console'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'no-debugger'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'no-unused-vars'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span> <span class="token comment">// 使用TypeScript的规则</span></span>
<span class="line">    <span class="token string-property property">'@typescript-eslint/no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'react-hooks/rules-of-hooks'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'react-hooks/exhaustive-deps'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 代码风格规则</span></span>
<span class="line">    <span class="token string-property property">'prettier/prettier'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'react/prop-types'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span> <span class="token comment">// 使用TypeScript类型</span></span>
<span class="line">    <span class="token string-property property">'react/react-in-jsx-scope'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span> <span class="token comment">// 适用于React 17+</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 可访问性规则</span></span>
<span class="line">    <span class="token string-property property">'jsx-a11y/alt-text'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'jsx-a11y/anchor-has-content'</span><span class="token operator">:</span> <span class="token string">'warn'</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 导入规则</span></span>
<span class="line">    <span class="token string-property property">'import/order'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'builtin'</span><span class="token punctuation">,</span> <span class="token string">'external'</span><span class="token punctuation">,</span> <span class="token string">'internal'</span><span class="token punctuation">,</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> <span class="token string">'sibling'</span><span class="token punctuation">,</span> <span class="token string">'index'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'newlines-between'</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">alphabetize</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">'asc'</span><span class="token punctuation">,</span> <span class="token literal-property property">caseInsensitive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'detect'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="prettier配置" tabindex="-1"><a class="header-anchor" href="#prettier配置"><span>Prettier配置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .prettierrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">'as-needed'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'es5'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">'avoid'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">'preserve'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">'css'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">'lf'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stylelint配置-css样式规范" tabindex="-1"><a class="header-anchor" href="#stylelint配置-css样式规范"><span>StyleLint配置（CSS样式规范）</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .stylelintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'stylelint-config-standard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'stylelint-config-recommended-scss'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'stylelint-config-prettier'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-scss'</span><span class="token punctuation">,</span> <span class="token string">'stylelint-order'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'order/properties-alphabetical-order'</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'color-hex-case'</span><span class="token operator">:</span> <span class="token string">'lower'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'color-hex-length'</span><span class="token operator">:</span> <span class="token string">'short'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'no-empty-source'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'global'</span><span class="token punctuation">,</span> <span class="token string">'local'</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规范文档化与共享" tabindex="-1"><a class="header-anchor" href="#规范文档化与共享"><span>规范文档化与共享</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 前端编码规范</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 命名规范</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 变量命名</span></span>
<span class="line"><span class="token list punctuation">-</span> 使用有意义的、可发音的变量名</span>
<span class="line"><span class="token list punctuation">-</span> 使用驼峰式命名法 (camelCase)</span>
<span class="line"><span class="token list punctuation">-</span> 布尔类型变量使用"is", "has", "can"等前缀</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">javascript</span></span>
<span class="line"><span class="token code-block language-javascript"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> yyyymmdd <span class="token operator">=</span> <span class="token string">'2023-03-28'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 推荐</span></span>
<span class="line"><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> formattedDate <span class="token operator">=</span> <span class="token string">'2023-03-28'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> isValid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> 函数命名</span></span>
<span class="line"><span class="token list punctuation">-</span> 函数名应使用动词或动词短语</span>
<span class="line"><span class="token list punctuation">-</span> 使用驼峰式命名法</span>
<span class="line"><span class="token list punctuation">-</span> 函数名应清晰表明函数的功能</span>
<span class="line"></span>
<span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">javascript</span></span>
<span class="line"><span class="token code-block language-javascript"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 推荐</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processUserData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span>
<span class="line">...更多规范...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态代码分析" tabindex="-1"><a class="header-anchor" href="#静态代码分析"><span>静态代码分析</span></a></h2>
<h3 id="深入eslint配置" tabindex="-1"><a class="header-anchor" href="#深入eslint配置"><span>深入ESLint配置</span></a></h3>
<h4 id="自定义规则" tabindex="-1"><a class="header-anchor" href="#自定义规则"><span>自定义规则</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// ESLint自定义规则示例</span></span>
<span class="line"><span class="token comment">// no-large-objects.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'suggestion'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">docs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'防止在代码中直接定义大型对象字面量'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'最佳实践'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">recommended</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'object'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">maxProperties</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">additionalProperties</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">tooLarge</span><span class="token operator">:</span> <span class="token string">'对象包含了{{count}}个属性，超过了最大限制{{max}}。请将其拆分或移至单独文件。'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> option <span class="token operator">=</span> context<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> maxProperties <span class="token operator">=</span> option<span class="token punctuation">.</span>maxProperties <span class="token operator">||</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">ObjectExpression</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>length <span class="token operator">></span> maxProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          context<span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            node<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">messageId</span><span class="token operator">:</span> <span class="token string">'tooLarge'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token literal-property property">count</span><span class="token operator">:</span> node<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>length<span class="token punctuation">,</span></span>
<span class="line">              <span class="token literal-property property">max</span><span class="token operator">:</span> maxProperties</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在eslint配置中使用</span></span>
<span class="line"><span class="token comment">// .eslintrc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ... 其他配置</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// ... 其他插件</span></span>
<span class="line">    <span class="token string">'custom-rules'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ... 其他规则</span></span>
<span class="line">    <span class="token string-property property">'custom-rules/no-large-objects'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxProperties</span><span class="token operator">:</span> <span class="token number">15</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-eslint-插件生态" tabindex="-1"><a class="header-anchor" href="#配置-eslint-插件生态"><span>配置 ESLint 插件生态</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 团队共享的ESLint配置</span></span>
<span class="line"><span class="token comment">// @company/eslint-config/index.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'eslint:recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:react/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:react-hooks/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:@typescript-eslint/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:import/errors'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:import/warnings'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:import/typescript'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:jsx-a11y/recommended'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'plugin:sonarjs/recommended'</span><span class="token punctuation">,</span> <span class="token comment">// 检测代码气味</span></span>
<span class="line">    <span class="token string">'plugin:security/recommended'</span><span class="token punctuation">,</span> <span class="token comment">// 安全规则检查</span></span>
<span class="line">    <span class="token string">'plugin:optimize-regex/recommended'</span><span class="token punctuation">,</span> <span class="token comment">// 正则表达式优化</span></span>
<span class="line">    <span class="token string">'plugin:prettier/recommended'</span> <span class="token comment">// 放在最后</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'@typescript-eslint'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'react'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'react-hooks'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'import'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'jsx-a11y'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'sonarjs'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'security'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'optimize-regex'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'prettier'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ... 其他配置和规则</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码复杂度控制" tabindex="-1"><a class="header-anchor" href="#代码复杂度控制"><span>代码复杂度控制</span></a></h3>
<h4 id="eslint复杂度规则" tabindex="-1"><a class="header-anchor" href="#eslint复杂度规则"><span>ESLint复杂度规则</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .eslintrc.js中的复杂度规则</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ... 其他配置</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ... 其他规则</span></span>
<span class="line">    <span class="token string-property property">'complexity'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 限制圈复杂度不超过10</span></span>
<span class="line">    <span class="token string-property property">'max-depth'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 嵌套块深度不超过4</span></span>
<span class="line">    <span class="token string-property property">'max-len'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">ignoreComments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 行长度限制</span></span>
<span class="line">    <span class="token string-property property">'max-lines-per-function'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">skipBlankLines</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">skipComments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 函数行数限制</span></span>
<span class="line">    <span class="token string-property property">'max-nested-callbacks'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 回调嵌套深度</span></span>
<span class="line">    <span class="token string-property property">'max-params'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 参数数量限制</span></span>
<span class="line">    <span class="token string-property property">'sonarjs/cognitive-complexity'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span> <span class="token comment">// SonarJS认知复杂度</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态分析集成" tabindex="-1"><a class="header-anchor" href="#静态分析集成"><span>静态分析集成</span></a></h3>
<h4 id="sonarqube-sonarcloud-集成" tabindex="-1"><a class="header-anchor" href="#sonarqube-sonarcloud-集成"><span>SonarQube/SonarCloud 集成</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// sonar-project.properties</span></span>
<span class="line">sonar<span class="token punctuation">.</span>projectKey<span class="token operator">=</span>my<span class="token operator">-</span>project</span>
<span class="line">sonar<span class="token punctuation">.</span>projectName<span class="token operator">=</span>My Project</span>
<span class="line">sonar<span class="token punctuation">.</span>projectVersion<span class="token operator">=</span><span class="token number">1.0</span></span>
<span class="line"></span>
<span class="line">sonar<span class="token punctuation">.</span>sources<span class="token operator">=</span>src</span>
<span class="line">sonar<span class="token punctuation">.</span>tests<span class="token operator">=</span>tests</span>
<span class="line">sonar<span class="token punctuation">.</span>exclusions<span class="token operator">=</span>node_modules<span class="token doc-comment comment">/**,coverage/**,dist/**</span>
<span class="line">sonar.test.inclusions=**/</span><span class="token operator">*</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>js<span class="token punctuation">,</span><span class="token operator">**</span><span class="token comment">/*.spec.js,**/</span><span class="token operator">*</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>tsx<span class="token punctuation">,</span><span class="token operator">**</span><span class="token comment">/*.spec.tsx</span>
<span class="line"></span>
<span class="line">sonar.javascript.lcov.reportPaths=coverage/lcov.info</span>
<span class="line">sonar.testExecutionReportPaths=test-report.xml</span>
<span class="line">sonar.typescript.tsconfigPath=tsconfig.json</span>
<span class="line"></span>
<span class="line">sonar.qualitygate.wait=true</span>
<span class="line"></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义质量门禁" tabindex="-1"><a class="header-anchor" href="#自定义质量门禁"><span>自定义质量门禁</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/quality-gate.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Quality Gate</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> develop<span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> develop<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">quality-gate</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lint</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Type check</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run type<span class="token punctuation">-</span>check</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Test with coverage</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run test<span class="token punctuation">:</span>coverage</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SonarCloud Scan</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> SonarSource/sonarcloud<span class="token punctuation">-</span>github<span class="token punctuation">-</span>action@master</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">SONAR_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SONAR_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型检查系统" tabindex="-1"><a class="header-anchor" href="#类型检查系统"><span>类型检查系统</span></a></h2>
<h3 id="typescript配置优化" tabindex="-1"><a class="header-anchor" href="#typescript配置优化"><span>TypeScript配置优化</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// tsconfig.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 目标ECMAScript版本</span></span>
<span class="line">    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"es2018"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span> <span class="token string">"dom.iterable"</span><span class="token punctuation">,</span> <span class="token string">"esnext"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 模块解析配置</span></span>
<span class="line">    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"@components/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/components/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">"@utils/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/utils/*"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 严格类型检查</span></span>
<span class="line">    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"strictFunctionTypes"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"strictBindCallApply"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"strictPropertyInitialization"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"alwaysStrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noUncheckedIndexedAccess"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 额外检查</span></span>
<span class="line">    <span class="token string-property property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noImplicitReturns"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// JSX支持</span></span>
<span class="line">    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react-jsx"</span><span class="token punctuation">,</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 构建相关</span></span>
<span class="line">    <span class="token string-property property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"outDir"</span><span class="token operator">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"forceConsistentCasingInFileNames"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/**/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">,</span> <span class="token string">"coverage"</span><span class="token punctuation">,</span> <span class="token string">"**/*.test.ts"</span><span class="token punctuation">,</span> <span class="token string">"**/*.spec.ts"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型定义最佳实践" tabindex="-1"><a class="header-anchor" href="#类型定义最佳实践"><span>类型定义最佳实践</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 1. 使用准确的类型而非any</span></span>
<span class="line"><span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 推荐</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">DataItem</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  timestamp<span class="token operator">:</span> Date<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token operator">:</span> DataItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 使用类型别名和接口</span></span>
<span class="line"><span class="token comment">// 类型别名用于联合类型、交叉类型或工具类型</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ButtonSize</span> <span class="token operator">=</span> <span class="token string">'small'</span> <span class="token operator">|</span> <span class="token string">'medium'</span> <span class="token operator">|</span> <span class="token string">'large'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ButtonProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  size<span class="token operator">:</span> ButtonSize<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token operator">&amp;</span> CommonProps<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 接口用于对象结构和类实现</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">UserData</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  roles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 函数类型定义</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">FetchFunction<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> RequestInit<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> fetchUsers<span class="token operator">:</span> FetchFunction<span class="token operator">&lt;</span>UserData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 泛型约束</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getProperty</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 字面量类型和常量断言</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span></span>
<span class="line">  animate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span></span>
<span class="line">  timeout<span class="token operator">:</span> <span class="token number">1000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型检查工作流集成" tabindex="-1"><a class="header-anchor" href="#类型检查工作流集成"><span>类型检查工作流集成</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"type-check"</span><span class="token operator">:</span> <span class="token string">"tsc --noEmit"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"type-check:watch"</span><span class="token operator">:</span> <span class="token string">"tsc --noEmit --watch"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># CI集成示例 (.github/workflows/typescript.yml)</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> TypeScript Check</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">type-check</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">    </span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js</span>
<span class="line">      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">      <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">        </span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run type check</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run type<span class="token punctuation">-</span>check</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动化测试策略" tabindex="-1"><a class="header-anchor" href="#自动化测试策略"><span>自动化测试策略</span></a></h2>
<h3 id="测试金字塔实践" tabindex="-1"><a class="header-anchor" href="#测试金字塔实践"><span>测试金字塔实践</span></a></h3>
<p>前端测试金字塔应该包含：</p>
<ol>
<li><strong>单元测试</strong>: 测试独立组件和函数</li>
<li><strong>集成测试</strong>: 测试组件组合</li>
<li><strong>E2E测试</strong>: 测试完整用户流程
比例应该大致为:</li>
</ol>
<ul>
<li>70% 单元测试</li>
<li>20% 集成测试</li>
<li>10% E2E测试</li>
</ul>
<h3 id="单元测试最佳实践" tabindex="-1"><a class="header-anchor" href="#单元测试最佳实践"><span>单元测试最佳实践</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// React组件单元测试 - Jest + React Testing Library</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> fireEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">'@testing-library/user-event'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Button组件'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 基本渲染测试</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'渲染按钮文本'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Button<span class="token operator">></span>点击我<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'点击我'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 交互测试</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'点击按钮调用onClick处理函数'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> handleClick <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>点击我<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'点击我'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledTimes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 属性测试</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'禁用状态下按钮不可点击'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> handleClick <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Button disabled onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>点击我<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> button <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'点击我'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// 快照测试</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'按钮样式匹配快照'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> container <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>点击我<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>firstChild<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 工具函数测试</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> formatCurrency <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../utils/formatters'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'formatCurrency函数'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'正确格式化整数金额'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">formatCurrency</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'CNY'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'¥1,000.00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'正确格式化小数金额'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">formatCurrency</span><span class="token punctuation">(</span><span class="token number">1000.5</span><span class="token punctuation">,</span> <span class="token string">'CNY'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'¥1,000.50'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'处理负数金额'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">formatCurrency</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'CNY'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'-¥1,000.00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'处理不同货币符号'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">formatCurrency</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'USD'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'$1,000.00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">formatCurrency</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">'EUR'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'€1,000.00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集成测试策略" tabindex="-1"><a class="header-anchor" href="#集成测试策略"><span>集成测试策略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 组件集成测试示例 - 测试表单和API交互</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> waitFor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> userEvent <span class="token keyword">from</span> <span class="token string">'@testing-library/user-event'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> rest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> setupServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw/node'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> LoginForm <span class="token keyword">from</span> <span class="token string">'./LoginForm'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟API服务器</span></span>
<span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">setupServer</span><span class="token punctuation">(</span></span>
<span class="line">  rest<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/login'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>username <span class="token operator">===</span> <span class="token string">'testuser'</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">'password123'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'fake-token-123'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Test User'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'用户名或密码错误'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> server<span class="token punctuation">.</span><span class="token function">resetHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">afterAll</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> server<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'LoginForm组件集成测试'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'提交正确的凭据时成功登录'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> onLoginSuccess <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>LoginForm onLoginSuccess<span class="token operator">=</span><span class="token punctuation">{</span>onLoginSuccess<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 填写表单</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">用户名</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'testuser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">密码</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'password123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">登录</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 等待API响应</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">expect</span><span class="token punctuation">(</span>onLoginSuccess<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'fake-token-123'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Test User'</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 检查表单状态</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">加载中</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">queryByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">错误</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'提交错误的凭据时显示错误信息'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>LoginForm onLoginSuccess<span class="token operator">=</span><span class="token punctuation">{</span>jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 填写错误的凭据</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">用户名</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'wronguser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">密码</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'wrongpass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">登录</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 等待错误消息</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">用户名或密码错误</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e2e测试配置" tabindex="-1"><a class="header-anchor" href="#e2e测试配置"><span>E2E测试配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Cypress测试示例</span></span>
<span class="line"><span class="token comment">// cypress/e2e/login.cy.js</span></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'登录流程'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 拦截API请求</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">intercept</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/api/login'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>username <span class="token operator">===</span> <span class="token string">'testuser'</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">'password123'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        req<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'fake-token-123'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Test User'</span> <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        req<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">statusCode</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'用户名或密码错误'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token string">'loginRequest'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'成功登录并重定向到仪表板'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'input[name="username"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'testuser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'input[name="password"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'password123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'button[type="submit"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">'@loginRequest'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'include'</span><span class="token punctuation">,</span> <span class="token string">'/dashboard'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'[data-testid="user-welcome"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'contain'</span><span class="token punctuation">,</span> <span class="token string">'Test User'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'登录失败时显示错误消息'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'input[name="username"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'wronguser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'input[name="password"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'wrongpass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'button[type="submit"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">'@loginRequest'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'[data-testid="error-message"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'be.visible'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'[data-testid="error-message"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'contain'</span><span class="token punctuation">,</span> <span class="token string">'用户名或密码错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'include'</span><span class="token punctuation">,</span> <span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// cypress.config.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cypress'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">viewportWidth</span><span class="token operator">:</span> <span class="token number">1280</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">viewportHeight</span><span class="token operator">:</span> <span class="token number">720</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">screenshotOnRunFailure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 实现node事件监听器</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试覆盖率设置" tabindex="-1"><a class="header-anchor" href="#测试覆盖率设置"><span>测试覆盖率设置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// jest.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 其他Jest配置...</span></span>
<span class="line">  <span class="token literal-property property">collectCoverage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">coverageDirectory</span><span class="token operator">:</span> <span class="token string">'coverage'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">collectCoverageFrom</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'src/**/*.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/**/*.test.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/**/*.stories.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/index.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/serviceWorker.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/reportWebVitals.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/setupTests.{js,jsx,ts,tsx}'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'!src/mocks/**/*.{js,jsx,ts,tsx}'</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">coverageThreshold</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">statements</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">branches</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">functions</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">lines</span><span class="token operator">:</span> <span class="token number">80</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">coverageReporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'lcov'</span><span class="token punctuation">,</span> <span class="token string">'text'</span><span class="token punctuation">,</span> <span class="token string">'html'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码评审机制" tabindex="-1"><a class="header-anchor" href="#代码评审机制"><span>代码评审机制</span></a></h2>
<h3 id="代码评审清单" tabindex="-1"><a class="header-anchor" href="#代码评审清单"><span>代码评审清单</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 代码评审清单</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 功能性</span></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码实现是否符合需求规格</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否处理了边缘情况</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否有适当的错误处理</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码是否处理了安全问题（XSS、CSRF等）</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 可维护性</span></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 命名是否清晰直观</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码结构是否简洁合理</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否消除了重复代码</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 复杂逻辑是否有注释说明</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 性能</span></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否存在潜在的性能问题</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否有不必要的计算或渲染</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否有合适的缓存策略</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 可测试性</span></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码是否易于测试</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否有适当的单元测试</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 测试是否覆盖了关键路径</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 团队约定</span></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否遵循了团队的代码规范</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否符合项目的架构设计</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 是否有符合规范的提交信息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pr-模板配置" tabindex="-1"><a class="header-anchor" href="#pr-模板配置"><span>PR 模板配置</span></a></h3>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- .github/PULL_REQUEST_TEMPLATE.md --></span></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 变更说明</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 请描述此PR解决的问题或实现的功能 --></span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 变更类型</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 功能新增</span>
<span class="line"><span class="token list punctuation">-</span> [ ] Bug修复</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码重构</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 样式变更</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 性能优化</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 测试相关</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 构建相关</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 文档更新</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 其他</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 自测清单</span></span>
<span class="line"></span>
<span class="line"><span class="token list punctuation">-</span> [ ] 本地测试通过</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 单元测试已添加/更新</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 文档已更新</span>
<span class="line"><span class="token list punctuation">-</span> [ ] 代码遵循规范</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 附加信息</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 任何其他信息，如截图、相关链接等 --></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动化评审工具配置" tabindex="-1"><a class="header-anchor" href="#自动化评审工具配置"><span>自动化评审工具配置</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/code-review.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Code Review</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> synchronize<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">code-review</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lint</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Type check</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run type<span class="token punctuation">-</span>check</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Test</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm test</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Codacy Static Analysis</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> codacy/codacy<span class="token punctuation">-</span>analysis<span class="token punctuation">-</span>cli<span class="token punctuation">-</span>action@master</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">project-token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.CODACY_PROJECT_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">upload</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">format</span><span class="token punctuation">:</span> sarif</span>
<span class="line">          <span class="token key atrule">output</span><span class="token punctuation">:</span> codacy<span class="token punctuation">-</span>results.sarif</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SonarCloud Scan</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> SonarSource/sonarcloud<span class="token punctuation">-</span>github<span class="token punctuation">-</span>action@master</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">SONAR_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SONAR_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持续集成与部署" tabindex="-1"><a class="header-anchor" href="#持续集成与部署"><span>持续集成与部署</span></a></h2>
<h3 id="构建ci-cd流水线" tabindex="-1"><a class="header-anchor" href="#构建ci-cd流水线"><span>构建CI/CD流水线</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/ci-cd.yml</span></span>
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
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Lint</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Type check</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run type<span class="token punctuation">-</span>check</span>
<span class="line">        </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Test</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run test<span class="token punctuation">:</span>coverage</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload coverage</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> coverage<span class="token punctuation">-</span>report</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> coverage/</span>
<span class="line">  </span>
<span class="line">  <span class="token comment"># 构建</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> quality</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload build</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>output</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line">  </span>
<span class="line">  <span class="token comment"># 部署(仅主分支)</span></span>
<span class="line">  <span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.ref == 'refs/heads/main' <span class="token important">&amp;&amp;</span> github.event_name == 'push'</span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>output</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Production</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.GITHUB_TOKEN }}'</span></span>
<span class="line">          <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'</span></span>
<span class="line">          <span class="token key atrule">channelId</span><span class="token punctuation">:</span> live</span>
<span class="line">          <span class="token key atrule">projectId</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>app<span class="token punctuation">-</span><span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境隔离策略" tabindex="-1"><a class="header-anchor" href="#环境隔离策略"><span>环境隔离策略</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># 环境配置文件 - firebase.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token key atrule">"hosting"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token key atrule">"target"</span><span class="token punctuation">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"public"</span><span class="token punctuation">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"ignore"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"firebase.json"</span><span class="token punctuation">,</span> <span class="token string">"**/.*"</span><span class="token punctuation">,</span> <span class="token string">"**/node_modules/**"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"rewrites"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token key atrule">"source"</span><span class="token punctuation">:</span> <span class="token string">"**"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token key atrule">"destination"</span><span class="token punctuation">:</span> <span class="token string">"/index.html"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"headers"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token key atrule">"source"</span><span class="token punctuation">:</span> <span class="token string">"**/*.@(js|css)"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token key atrule">"headers"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">              <span class="token key atrule">"key"</span><span class="token punctuation">:</span> <span class="token string">"Cache-Control"</span><span class="token punctuation">,</span></span>
<span class="line">              <span class="token key atrule">"value"</span><span class="token punctuation">:</span> <span class="token string">"max-age=31536000"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token key atrule">"target"</span><span class="token punctuation">:</span> <span class="token string">"staging"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"public"</span><span class="token punctuation">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"ignore"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"firebase.json"</span><span class="token punctuation">,</span> <span class="token string">"**/.*"</span><span class="token punctuation">,</span> <span class="token string">"**/node_modules/**"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"rewrites"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token key atrule">"source"</span><span class="token punctuation">:</span> <span class="token string">"**"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token key atrule">"destination"</span><span class="token punctuation">:</span> <span class="token string">"/index.html"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token key atrule">"target"</span><span class="token punctuation">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"public"</span><span class="token punctuation">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"ignore"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"firebase.json"</span><span class="token punctuation">,</span> <span class="token string">"**/.*"</span><span class="token punctuation">,</span> <span class="token string">"**/node_modules/**"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token key atrule">"rewrites"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token key atrule">"source"</span><span class="token punctuation">:</span> <span class="token string">"**"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token key atrule">"destination"</span><span class="token punctuation">:</span> <span class="token string">"/index.html"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 环境部署工作流 - .github/workflows/deploy.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> develop<span class="token punctuation">,</span> feature/*<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set environment variables</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          if [[ $GITHUB_REF == refs/heads/main ]]; then</span>
<span class="line">            echo "DEPLOY_ENV=production" >> $GITHUB_ENV</span>
<span class="line">            echo "NODE_ENV=production" >> $GITHUB_ENV</span>
<span class="line">          elif [[ $GITHUB_REF == refs/heads/develop ]]; then</span>
<span class="line">            echo "DEPLOY_ENV=staging" >> $GITHUB_ENV</span>
<span class="line">            echo "NODE_ENV=production" >> $GITHUB_ENV</span>
<span class="line">          else</span>
<span class="line">            echo "DEPLOY_ENV=development" >> $GITHUB_ENV</span>
<span class="line">            echo "NODE_ENV=development" >> $GITHUB_ENV</span>
<span class="line">          fi</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npm run build:$DEPLOY_ENV</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Firebase</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> FirebaseExtended/action<span class="token punctuation">-</span>hosting<span class="token punctuation">-</span>deploy@v0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">repoToken</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.GITHUB_TOKEN }}'</span></span>
<span class="line">          <span class="token key atrule">firebaseServiceAccount</span><span class="token punctuation">:</span> <span class="token string">'${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'</span></span>
<span class="line">          <span class="token key atrule">projectId</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>project<span class="token punctuation">-</span>id</span>
<span class="line">          <span class="token key atrule">channelId</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.DEPLOY_ENV <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">target</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> env.DEPLOY_ENV <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本控制与发布策略" tabindex="-1"><a class="header-anchor" href="#版本控制与发布策略"><span>版本控制与发布策略</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .releaserc.js - Semantic Release配置</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">branches</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'main'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'@semantic-release/commit-analyzer'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@semantic-release/release-notes-generator'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@semantic-release/changelog'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@semantic-release/npm'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'@semantic-release/git'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'package.json'</span><span class="token punctuation">,</span> <span class="token string">'CHANGELOG.md'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'@semantic-release/github'</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 提交消息规范</span></span>
<span class="line"></span>
<span class="line">我们使用<span class="token url">[<span class="token content">约定式提交</span>](<span class="token url">https://www.conventionalcommits.org/</span>)</span>格式来规范化提交消息，这有助于自动化版本管理和变更日志生成。</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 提交消息格式</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;类型&gt;[可选范围]: &lt;描述&gt;</p>
<p>[可选正文]</p>
<p>[可选页脚]</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"></span>
<span class="line">## 提交类型</span>
<span class="line"></span>
<span class="line">- `feat`: 新功能</span>
<span class="line">- `fix`: 修复Bug</span>
<span class="line">- `docs`: 仅文档变更</span>
<span class="line">- `style`: 不影响代码含义的变更（空格、格式化、缺少分号等）</span>
<span class="line">- `refactor`: 既不修复bug也不添加特性的代码更改</span>
<span class="line">- `perf`: 改进性能的代码更改</span>
<span class="line">- `test`: 添加或修正测试</span>
<span class="line">- `build`: 影响构建系统或外部依赖的更改</span>
<span class="line">- `ci`: 对CI配置文件和脚本的更改</span>
<span class="line">- `chore`: 其他不修改src或test文件的更改</span>
<span class="line">- `revert`: 恢复先前的提交</span>
<span class="line"></span>
<span class="line">## 示例</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>feat(auth): 添加用户注册功能</p>
<p>实现了用户注册表单和后端API集成</p>
<p>Resolves: #123</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>fix(dashboard): 修复数据加载时的无限循环问题</p>
<p>修复了effect依赖数组缺失导致的问题</p>
<p>Fixes: #456</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h2 id="工作流自动化" tabindex="-1"><a class="header-anchor" href="#工作流自动化"><span>工作流自动化</span></a></h2>
<h3 id="git-hooks-配置" tabindex="-1"><a class="header-anchor" href="#git-hooks-配置"><span>Git Hooks 配置</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky install"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"*.{js,jsx,ts,tsx}"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint --fix"</span><span class="token punctuation">,</span> <span class="token string">"prettier --write"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">".{css,scss,less}"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"prettier --write"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"*.{json,yaml,yml}"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"prettier --write"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动化工作流最佳实践" tabindex="-1"><a class="header-anchor" href="#自动化工作流最佳实践"><span>自动化工作流最佳实践</span></a></h3>
<p>高效的工作流自动化不仅能提高开发效率，还能保证代码质量。以下是一些最佳实践：</p>
<h4 id="_1-保持git提交干净规范" tabindex="-1"><a class="header-anchor" href="#_1-保持git提交干净规范"><span>1. 保持Git提交干净规范</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .husky/pre-commit</span></span>
<span class="line"><span class="token comment">#!/bin/sh</span></span>
<span class="line"><span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行lint-staged进行代码检查和格式化</span></span>
<span class="line">npx lint-staged</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查禁止提交的内容</span></span>
<span class="line">npx commitlint <span class="token parameter variable">--edit</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-一键式开发环境设置" tabindex="-1"><a class="header-anchor" href="#_2-一键式开发环境设置"><span>2. 一键式开发环境设置</span></a></h4>
<p>创建开发环境初始化脚本，确保团队成员统一环境配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// scripts/setup-dev.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> execSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'child_process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检查和安装依赖</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Installing dependencies...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npm install'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 配置环境文件</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span><span class="token string">'.env.local'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Creating local environment file...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  fs<span class="token punctuation">.</span><span class="token function">copyFileSync</span><span class="token punctuation">(</span><span class="token string">'.env.example'</span><span class="token punctuation">,</span> <span class="token string">'.env.local'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化husky</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Setting up Git hooks...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npm run prepare'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 构建依赖项</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Building dependencies...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npm run build:deps'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Development environment setup complete!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-规范化分支管理" tabindex="-1"><a class="header-anchor" href="#_3-规范化分支管理"><span>3. 规范化分支管理</span></a></h4>
<p>在团队项目中实施标准化的分支模型：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .husky/pre-push</span></span>
<span class="line"><span class="token comment">#!/bin/sh</span></span>
<span class="line"><span class="token builtin class-name">.</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>/_/husky.sh"</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">BRANCH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> rev-parse --abbrev-ref HEAD<span class="token variable">)</span></span></span>
<span class="line"><span class="token assign-left variable">PROTECTED_BRANCHES</span><span class="token operator">=</span><span class="token string">"^(main|master|develop)$"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$BRANCH</span> <span class="token operator">=~</span> <span class="token variable">$PROTECTED_BRANCHES</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">  <span class="token builtin class-name">echo</span> <span class="token string">"Direct push to <span class="token variable">$BRANCH</span> is not allowed. Please create a pull request instead."</span></span>
<span class="line">  <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-自动化版本和发布管理" tabindex="-1"><a class="header-anchor" href="#_4-自动化版本和发布管理"><span>4. 自动化版本和发布管理</span></a></h4>
<p>利用标准版本控制工具自动化版本号管理和发布流程：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"># package.json</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"release"</span><span class="token operator">:</span> <span class="token string">"standard-version"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"release:major"</span><span class="token operator">:</span> <span class="token string">"standard-version --release-as major"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"release:minor"</span><span class="token operator">:</span> <span class="token string">"standard-version --release-as minor"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"release:patch"</span><span class="token operator">:</span> <span class="token string">"standard-version --release-as patch"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能与安全检测" tabindex="-1"><a class="header-anchor" href="#性能与安全检测"><span>性能与安全检测</span></a></h2>
<h3 id="性能检测集成" tabindex="-1"><a class="header-anchor" href="#性能检测集成"><span>性能检测集成</span></a></h3>
<p>将性能检测纳入开发流程，及早发现性能问题：</p>
<h4 id="_1-lighthouse-ci配置" tabindex="-1"><a class="header-anchor" href="#_1-lighthouse-ci配置"><span>1. Lighthouse CI配置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// lighthouserc.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">ci</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">collect</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http://localhost:3000/'</span><span class="token punctuation">,</span> <span class="token string">'http://localhost:3000/profile'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">numberOfRuns</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">staticDistDir</span><span class="token operator">:</span> <span class="token string">'./build'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">upload</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'temporary-public-storage'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">assert</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">'lighthouse:recommended'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">assertions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">'first-contentful-paint'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">maxNumericValue</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'interactive'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">maxNumericValue</span><span class="token operator">:</span> <span class="token number">3500</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'largest-contentful-paint'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">maxNumericValue</span><span class="token operator">:</span> <span class="token number">2500</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'cumulative-layout-shift'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">maxNumericValue</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-性能预算实施" tabindex="-1"><a class="header-anchor" href="#_2-性能预算实施"><span>2. 性能预算实施</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js (部分)</span></span>
<span class="line">const <span class="token punctuation">{</span> BundleAnalyzerPlugin <span class="token punctuation">}</span> = require('webpack-bundle-analyzer');</span>
<span class="line">const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 测量构建性能</span></span>
<span class="line">const smp = new SpeedMeasurePlugin();</span>
<span class="line"></span>
<span class="line">module.exports = smp.wrap(<span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 其他配置...</span></span>
<span class="line">  performance<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    hints<span class="token operator">:</span> 'warning'<span class="token punctuation">,</span></span>
<span class="line">    maxEntrypointSize<span class="token operator">:</span> <span class="token number">250000</span><span class="token punctuation">,</span> <span class="token comment">// 入口文件大小限制</span></span>
<span class="line">    maxAssetSize<span class="token operator">:</span> <span class="token number">450000</span><span class="token punctuation">,</span> <span class="token comment">// 单个资源大小限制</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 仅在分析模式下启用</span></span>
<span class="line">    process.env.ANALYZE &amp;&amp; new BundleAnalyzerPlugin()<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span>.filter(Boolean)</span>
<span class="line"><span class="token punctuation">}</span>);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安全检测工具集成" tabindex="-1"><a class="header-anchor" href="#安全检测工具集成"><span>安全检测工具集成</span></a></h3>
<p>保障前端应用安全性的集成方案：</p>
<h4 id="_1-依赖安全审计" tabindex="-1"><a class="header-anchor" href="#_1-依赖安全审计"><span>1. 依赖安全审计</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"scripts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">"security:audit"</span><span class="token builtin class-name">:</span> <span class="token string">"npm audit"</span>,</span>
<span class="line">    <span class="token string">"security:audit:fix"</span><span class="token builtin class-name">:</span> <span class="token string">"npm audit fix"</span>,</span>
<span class="line">    <span class="token string">"security:audit:advanced"</span><span class="token builtin class-name">:</span> <span class="token string">"snyk test"</span>,</span>
<span class="line">    <span class="token string">"security:audit:ci"</span><span class="token builtin class-name">:</span> <span class="token string">"npm audit --audit-level=high"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-owasp-zap集成" tabindex="-1"><a class="header-anchor" href="#_2-owasp-zap集成"><span>2. OWASP ZAP集成</span></a></h4>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/security.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Security Scan</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">schedule</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">'0 1 * * 1'</span> <span class="token comment"># 每周一运行</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">security</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up environment</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">          npm ci</span>
<span class="line">          npm run build</span>
<span class="line">          npm run start:prod &amp;</span>
<span class="line">          sleep 10</span></span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ZAP Scan</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> zaproxy/action<span class="token punctuation">-</span>baseline@v0.4.0</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">target</span><span class="token punctuation">:</span> <span class="token string">'http://localhost:3000'</span></span>
<span class="line">          <span class="token key atrule">rules_file_name</span><span class="token punctuation">:</span> <span class="token string">'.zap/rules.tsv'</span></span>
<span class="line">          <span class="token key atrule">cmd_options</span><span class="token punctuation">:</span> <span class="token string">'-a'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-内容安全策略实施" tabindex="-1"><a class="header-anchor" href="#_3-内容安全策略实施"><span>3. 内容安全策略实施</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// server.js或Next.js配置</span></span>
<span class="line"><span class="token keyword">const</span> helmet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'helmet'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line">  helmet<span class="token punctuation">.</span><span class="token function">contentSecurityPolicy</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">defaultSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">scriptSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">,</span> <span class="token string">"'unsafe-inline'"</span><span class="token punctuation">,</span> <span class="token string">'https://apis.google.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">styleSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">,</span> <span class="token string">"'unsafe-inline'"</span><span class="token punctuation">,</span> <span class="token string">'https://fonts.googleapis.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">imgSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">,</span> <span class="token string">'data:'</span><span class="token punctuation">,</span> <span class="token string">'https://secure.example.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">connectSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">,</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">fontSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">,</span> <span class="token string">'https://fonts.gstatic.com'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">objectSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'none'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">mediaSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'self'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">frameSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"'none'"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="质量可视化与报告" tabindex="-1"><a class="header-anchor" href="#质量可视化与报告"><span>质量可视化与报告</span></a></h2>
<h3 id="团队仪表盘构建" tabindex="-1"><a class="header-anchor" href="#团队仪表盘构建"><span>团队仪表盘构建</span></a></h3>
<p>将质量数据可视化，提高团队对质量的关注：</p>
<h4 id="_1-sonarqube仪表盘配置" tabindex="-1"><a class="header-anchor" href="#_1-sonarqube仪表盘配置"><span>1. SonarQube仪表盘配置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// sonarqube-dashboard.js</span></span>
<span class="line"><span class="token keyword">const</span> SonarqubeScanner <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'sonarqube-scanner'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">SonarqubeScanner</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">serverUrl</span><span class="token operator">:</span> <span class="token string">'http://localhost:9000'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">token</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SONAR_TOKEN</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'sonar.projectName'</span><span class="token operator">:</span> <span class="token string">'前端项目仪表盘'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.projectKey'</span><span class="token operator">:</span> <span class="token string">'frontend-dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.projectVersion'</span><span class="token operator">:</span> <span class="token string">'1.0.0'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.sources'</span><span class="token operator">:</span> <span class="token string">'src'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.tests'</span><span class="token operator">:</span> <span class="token string">'src'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.test.inclusions'</span><span class="token operator">:</span> <span class="token string">'**/*.test.js,**/*.test.ts,**/*.test.tsx'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.javascript.lcov.reportPaths'</span><span class="token operator">:</span> <span class="token string">'coverage/lcov.info'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.testExecutionReportPaths'</span><span class="token operator">:</span> <span class="token string">'test-report.xml'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'sonar.qualitygate.wait'</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 等待质量门禁结果</span></span>
<span class="line">    <span class="token comment">// 代码重复检测配置</span></span>
<span class="line">    <span class="token string-property property">'sonar.cpd.javascript.minimumTokens'</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 可复用组件检测</span></span>
<span class="line">    <span class="token string-property property">'sonar.typescript.tsconfigPath'</span><span class="token operator">:</span> <span class="token string">'tsconfig.json'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-生成综合质量报告" tabindex="-1"><a class="header-anchor" href="#_2-生成综合质量报告"><span>2. 生成综合质量报告</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// scripts/generate-quality-report.js</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> execSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'child_process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 收集测试覆盖率</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收集测试覆盖率...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npm run test:coverage'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 收集代码复杂度指标</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'分析代码复杂度...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'npx eslint --ext .js,.jsx,.ts,.tsx src/ -f json > eslint-report.json'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 收集Bundle分析</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'分析打包体积...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">'ANALYZE=true npm run build'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">stdio</span><span class="token operator">:</span> <span class="token string">'inherit'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 生成综合报告</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'生成综合质量报告...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> testResults <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'coverage/coverage-summary.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> lintResults <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'eslint-report.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> report <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">coverage</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">statements</span><span class="token operator">:</span> testResults<span class="token punctuation">.</span>total<span class="token punctuation">.</span>statements<span class="token punctuation">.</span>pct<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">branches</span><span class="token operator">:</span> testResults<span class="token punctuation">.</span>total<span class="token punctuation">.</span>branches<span class="token punctuation">.</span>pct<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">functions</span><span class="token operator">:</span> testResults<span class="token punctuation">.</span>total<span class="token punctuation">.</span>functions<span class="token punctuation">.</span>pct<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">lines</span><span class="token operator">:</span> testResults<span class="token punctuation">.</span>total<span class="token punctuation">.</span>lines<span class="token punctuation">.</span>pct</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">lintIssues</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">errors</span><span class="token operator">:</span> lintResults<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>severity <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">warnings</span><span class="token operator">:</span> lintResults<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>severity <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 这里可以添加其他指标</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'quality-report.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>report<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'报告已生成: quality-report.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="质量趋势分析" tabindex="-1"><a class="header-anchor" href="#质量趋势分析"><span>质量趋势分析</span></a></h3>
<p>通过持续监测代码质量趋势，发现潜在问题：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// scripts/quality-trend.js</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 读取历史报告</span></span>
<span class="line"><span class="token keyword">const</span> reportDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'quality-reports'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>reportDir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>reportDir<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 当前报告</span></span>
<span class="line"><span class="token keyword">const</span> currentReport <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'quality-report.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 保存历史数据</span></span>
<span class="line"><span class="token keyword">const</span> reportFile <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>reportDir<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'T'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>reportFile<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>currentReport<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 分析趋势</span></span>
<span class="line"><span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>reportDir<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> file<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> trend <span class="token operator">=</span> files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>reportDir<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">date</span><span class="token operator">:</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'.json'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">coverage</span><span class="token operator">:</span> data<span class="token punctuation">.</span>coverage<span class="token punctuation">.</span>statements<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">errors</span><span class="token operator">:</span> data<span class="token punctuation">.</span>lintIssues<span class="token punctuation">.</span>errors<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">warnings</span><span class="token operator">:</span> data<span class="token punctuation">.</span>lintIssues<span class="token punctuation">.</span>warnings</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'质量趋势分析:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>trend<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检测显著变化</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>trend<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> latest <span class="token operator">=</span> trend<span class="token punctuation">[</span>trend<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> previous <span class="token operator">=</span> trend<span class="token punctuation">[</span>trend<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>latest<span class="token punctuation">.</span>coverage <span class="token operator">&lt;</span> previous<span class="token punctuation">.</span>coverage <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'警告: 测试覆盖率显著下降!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>latest<span class="token punctuation">.</span>errors <span class="token operator">></span> previous<span class="token punctuation">.</span>errors <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'警告: 代码错误数量显著增加!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="质量文化建设" tabindex="-1"><a class="header-anchor" href="#质量文化建设"><span>质量文化建设</span></a></h2>
<h3 id="团队代码质量意识培养" tabindex="-1"><a class="header-anchor" href="#团队代码质量意识培养"><span>团队代码质量意识培养</span></a></h3>
<h4 id="_1-质量评估机制" tabindex="-1"><a class="header-anchor" href="#_1-质量评估机制"><span>1. 质量评估机制</span></a></h4>
<p>建立定期的代码质量评估和回顾机制：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 质量考核模板</span></span>
<span class="line"><span class="token keyword">const</span> qualityEvaluation <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">developer</span><span class="token operator">:</span> <span class="token string">'开发者名称'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">period</span><span class="token operator">:</span> <span class="token string">'2023-Q3'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">metrics</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">codeStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'代码风格符合团队规范'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 1-5分</span></span>
<span class="line">      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">testCoverage</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'编写充分的测试用例'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">codeReview</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'积极参与代码评审并采纳反馈'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">documentation</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'提供清晰的文档和注释'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bugRate</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'代码引入的缺陷率'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">overallComments</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">improvementPlan</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-开发最佳实践手册" tabindex="-1"><a class="header-anchor" href="#_2-开发最佳实践手册"><span>2. 开发最佳实践手册</span></a></h4>
<p>创建并维护团队专用的开发最佳实践手册：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 前端开发最佳实践手册</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 1. 编码原则</span></span>
<span class="line"><span class="token list punctuation">-</span> 优先可读性和可维护性</span>
<span class="line"><span class="token list punctuation">-</span> 编写自文档化代码</span>
<span class="line"><span class="token list punctuation">-</span> 组件设计遵循单一职责原则</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 2. 性能优化指南</span></span>
<span class="line"><span class="token list punctuation">-</span> 关键渲染路径优化</span>
<span class="line"><span class="token list punctuation">-</span> 资源加载策略</span>
<span class="line"><span class="token list punctuation">-</span> 渲染性能技巧</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 3. 测试策略</span></span>
<span class="line"><span class="token list punctuation">-</span> 单元测试覆盖核心业务逻辑</span>
<span class="line"><span class="token list punctuation">-</span> 组件测试关注用户交互</span>
<span class="line"><span class="token list punctuation">-</span> 端到端测试保障关键流程</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 4. 安全实践</span></span>
<span class="line"><span class="token list punctuation">-</span> 输入验证和消毒</span>
<span class="line"><span class="token list punctuation">-</span> XSS和CSRF防护</span>
<span class="line"><span class="token list punctuation">-</span> 敏感信息处理</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 5. 代码评审清单</span></span>
<span class="line"><span class="token list punctuation">-</span> 逻辑正确性</span>
<span class="line"><span class="token list punctuation">-</span> 代码可维护性</span>
<span class="line"><span class="token list punctuation">-</span> 性能考量</span>
<span class="line"><span class="token list punctuation">-</span> 安全风险</span>
<span class="line"><span class="token list punctuation">-</span> 测试覆盖</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持续学习与分享机制" tabindex="-1"><a class="header-anchor" href="#持续学习与分享机制"><span>持续学习与分享机制</span></a></h3>
<p>促进团队内部的知识共享和技术提升：</p>
<h4 id="_1-技术分享流程" tabindex="-1"><a class="header-anchor" href="#_1-技术分享流程"><span>1. 技术分享流程</span></a></h4>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 技术分享制度</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 分享频率</span></span>
<span class="line"><span class="token list punctuation">-</span> 每周一次的团队内部分享</span>
<span class="line"><span class="token list punctuation">-</span> 每月一次的部门级分享</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 分享主题建议</span></span>
<span class="line"><span class="token list punctuation">-</span> 新技术/框架探索</span>
<span class="line"><span class="token list punctuation">-</span> 解决方案设计</span>
<span class="line"><span class="token list punctuation">-</span> 疑难问题分析</span>
<span class="line"><span class="token list punctuation">-</span> 性能优化案例</span>
<span class="line"><span class="token list punctuation">-</span> 安全实践分享</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 分享流程</span></span>
<span class="line"><span class="token list punctuation">1.</span> 提前一周确定主题和分享人</span>
<span class="line"><span class="token list punctuation">2.</span> 准备分享材料和演示代码</span>
<span class="line"><span class="token list punctuation">3.</span> 15-30分钟的演讲</span>
<span class="line"><span class="token list punctuation">4.</span> 5-10分钟的问答环节</span>
<span class="line"><span class="token list punctuation">5.</span> 分享资料归档到内部知识库</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-代码质量精进计划" tabindex="-1"><a class="header-anchor" href="#_2-代码质量精进计划"><span>2. 代码质量精进计划</span></a></h4>
<p>建立系统性的质量提升计划：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> 代码质量精进计划</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 短期目标（3个月）</span></span>
<span class="line"><span class="token list punctuation">-</span> 建立核心组件的单元测试覆盖率达到80%</span>
<span class="line"><span class="token list punctuation">-</span> 消除所有Critical和Major级别的Lint警告</span>
<span class="line"><span class="token list punctuation">-</span> 完成主要业务逻辑的TypeScript类型定义</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 中期目标（6个月）</span></span>
<span class="line"><span class="token list punctuation">-</span> 建立端到端测试覆盖核心业务流程</span>
<span class="line"><span class="token list punctuation">-</span> 重构标识出的高复杂度模块</span>
<span class="line"><span class="token list punctuation">-</span> 优化构建流程，减少30%的构建时间</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 长期目标（12个月）</span></span>
<span class="line"><span class="token list punctuation">-</span> 实现持续交付能力，支持多环境自动部署</span>
<span class="line"><span class="token list punctuation">-</span> 建立性能监控系统，实时检测性能退化</span>
<span class="line"><span class="token list punctuation">-</span> 培养团队共同维护质量文化</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> 实施方法</span></span>
<span class="line"><span class="token list punctuation">-</span> 每周质量站会，回顾进度和解决问题</span>
<span class="line"><span class="token list punctuation">-</span> 建立质量导师制度，促进知识共享</span>
<span class="line"><span class="token list punctuation">-</span> 质量指标与绩效挂钩，激励质量意识</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上体系化的质量保障措施，团队可以建立起持续的代码质量改进文化，确保产品的长期健康发展。不仅能减少线上问题和维护成本，还能提升团队的技术实力和工作满意度。</p>
</div></template>



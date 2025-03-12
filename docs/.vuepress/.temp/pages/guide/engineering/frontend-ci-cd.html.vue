<template><div><h1 id="前端ci-cd自动化部署实践" tabindex="-1"><a class="header-anchor" href="#前端ci-cd自动化部署实践"><span>前端CI/CD自动化部署实践</span></a></h1>
<p>持续集成(CI)和持续部署(CD)是现代开发流程中不可或缺的一部分。在我参与的多个项目中，自动化部署显著提高了团队效率，减少了人为错误。本文将分享如何为前端项目搭建一套完整的CI/CD流程。</p>
<h2 id="什么是ci-cd" tabindex="-1"><a class="header-anchor" href="#什么是ci-cd"><span>什么是CI/CD？</span></a></h2>
<ul>
<li><strong>持续集成(Continuous Integration)</strong>: 开发人员频繁地将代码集成到主分支，通过自动化构建和测试确保新代码不会破坏现有功能</li>
<li><strong>持续交付(Continuous Delivery)</strong>: 将代码变更自动发布到预生产环境，等待手动批准后发布到生产环境</li>
<li><strong>持续部署(Continuous Deployment)</strong>: 自动将通过测试的代码变更发布到生产环境</li>
</ul>
<!-- 增加高度限制 -->
<div style="height: 500px;">
  <img src="/guideImg/ci-cd-flow.svg" alt="CI/CD流程图" style="width: 100%; height: 100%;">
</div>
<h2 id="前端ci-cd的价值" tabindex="-1"><a class="header-anchor" href="#前端ci-cd的价值"><span>前端CI/CD的价值</span></a></h2>
<ol>
<li><strong>提高发布频率</strong>：从传统的每周发布到可能每天多次发布</li>
<li><strong>减少人为错误</strong>：避免手动操作带来的失误</li>
<li><strong>快速发现问题</strong>：在开发初期就发现问题</li>
<li><strong>保证代码质量</strong>：通过自动化测试和代码检查提高质量</li>
<li><strong>团队协作更顺畅</strong>：减少合并冲突，提高协作效率</li>
</ol>
<h2 id="工具选择" tabindex="-1"><a class="header-anchor" href="#工具选择"><span>工具选择</span></a></h2>
<p>常用的CI/CD工具:</p>
<ul>
<li><strong>Jenkins</strong>: 功能强大，高度可定制，开源</li>
<li><strong>GitHub Actions</strong>: 与GitHub紧密集成，配置简单</li>
<li><strong>GitLab CI/CD</strong>: 与GitLab一体化，适合自托管GitLab</li>
<li><strong>Circle CI</strong>: 云服务，易于配置</li>
<li><strong>Travis CI</strong>: 开源项目免费使用</li>
</ul>
<p>在字节跳动期间，我们使用内部CI系统，而在其他项目中，我常用Jenkins和GitHub Actions。本文将主要介绍GitHub Actions的配置。</p>
<h2 id="github-actions实战配置" tabindex="-1"><a class="header-anchor" href="#github-actions实战配置"><span>GitHub Actions实战配置</span></a></h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3>
<p>GitHub Actions的几个核心概念:</p>
<ul>
<li><strong>Workflow</strong>(工作流): 一个自动化流程，由一个或多个jobs组成</li>
<li><strong>Event</strong>(事件): 触发workflow的条件，如push、pull request</li>
<li><strong>Job</strong>(作业): workflow中的一个单独的执行单元</li>
<li><strong>Step</strong>(步骤): job中的一个任务</li>
<li><strong>Action</strong>(动作): 可重用的自动化操作</li>
</ul>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3>
<p>在项目根目录创建<code v-pre>.github/workflows/ci-cd.yml</code>:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Frontend CI/CD</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 触发条件</span></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-test</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 检出代码</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 设置Node.js环境</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'16'</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'npm'</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 安装依赖</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 运行代码检查</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run linting</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 运行单元测试</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run tests</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run test</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 构建项目</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build project</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 保存构建产物</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多环境部署配置" tabindex="-1"><a class="header-anchor" href="#多环境部署配置"><span>多环境部署配置</span></a></h3>
<p>为开发、测试和生产环境配置不同的部署流程:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Frontend CI/CD</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main<span class="token punctuation">,</span> develop <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build-and-test</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 前面的步骤相同...</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 保存构建产物</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist/</span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">deploy-dev</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>and<span class="token punctuation">-</span>test</span>
<span class="line">    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.ref == 'refs/heads/develop'</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 下载构建产物</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 部署到开发环境</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Dev</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> easingthemes/ssh<span class="token punctuation">-</span>deploy@main</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">ARGS</span><span class="token punctuation">:</span> <span class="token string">"-avz --delete"</span></span>
<span class="line">          <span class="token key atrule">SOURCE</span><span class="token punctuation">:</span> <span class="token string">"dist/"</span></span>
<span class="line">          <span class="token key atrule">REMOTE_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DEV_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">REMOTE_USER</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DEV_USER <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">TARGET</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DEV_TARGET_DIR <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">deploy-prod</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>and<span class="token punctuation">-</span>test</span>
<span class="line">    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.ref == 'refs/heads/main'</span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span> production <span class="token comment"># 需要手动批准</span></span>
<span class="line">    </span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 下载构建产物</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download build artifacts</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/download<span class="token punctuation">-</span>artifact@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token key atrule">path</span><span class="token punctuation">:</span> dist</span>
<span class="line">      </span>
<span class="line">      <span class="token comment"># 部署到生产环境</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to Production</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> easingthemes/ssh<span class="token punctuation">-</span>deploy@main</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">ARGS</span><span class="token punctuation">:</span> <span class="token string">"-avz --delete"</span></span>
<span class="line">          <span class="token key atrule">SOURCE</span><span class="token punctuation">:</span> <span class="token string">"dist/"</span></span>
<span class="line">          <span class="token key atrule">REMOTE_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PROD_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">REMOTE_USER</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PROD_USER <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">          <span class="token key atrule">TARGET</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PROD_TARGET_DIR <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境变量和密钥" tabindex="-1"><a class="header-anchor" href="#配置环境变量和密钥"><span>配置环境变量和密钥</span></a></h3>
<p>在GitHub仓库的Settings -&gt; Secrets and variables -&gt; Actions中添加以下密钥:</p>
<ul>
<li><code v-pre>SSH_PRIVATE_KEY</code>: SSH私钥</li>
<li><code v-pre>DEV_HOST</code>: 开发服务器主机</li>
<li><code v-pre>DEV_USER</code>: 开发服务器用户名</li>
<li><code v-pre>DEV_TARGET_DIR</code>: 开发服务器部署目录</li>
<li><code v-pre>PROD_HOST</code>: 生产服务器主机</li>
<li><code v-pre>PROD_USER</code>: 生产服务器用户名</li>
<li><code v-pre>PROD_TARGET_DIR</code>: 生产服务器部署目录</li>
</ul>
<h2 id="jenkins配置实例" tabindex="-1"><a class="header-anchor" href="#jenkins配置实例"><span>Jenkins配置实例</span></a></h2>
<p>在比特大陆项目中，我们使用Jenkins构建了一套完整的CI/CD流程。以下是Jenkinsfile示例:</p>
<div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy"><pre v-pre><code><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent <span class="token punctuation">{</span></span>
<span class="line">        docker <span class="token punctuation">{</span></span>
<span class="line">            image <span class="token string">'node:16-alpine'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    stages <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Install'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'npm ci'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Lint &amp; Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            parallel <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Lint'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    steps <span class="token punctuation">{</span></span>
<span class="line">                        sh <span class="token string">'npm run lint'</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                </span>
<span class="line">                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    steps <span class="token punctuation">{</span></span>
<span class="line">                        sh <span class="token string">'npm run test'</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'npm run build'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy Dev'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            when <span class="token punctuation">{</span></span>
<span class="line">                branch <span class="token string">'develop'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">sshagent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jenkins-ssh-key'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    sh <span class="token string">'''</span>
<span class="line">                        rsync -avz --delete dist/ user@dev-server:/path/to/deployment/</span>
<span class="line">                    '''</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy Production'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            when <span class="token punctuation">{</span></span>
<span class="line">                branch <span class="token string">'main'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                input message<span class="token punctuation">:</span> <span class="token string">'确认部署到生产环境?'</span></span>
<span class="line">                <span class="token function">sshagent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jenkins-ssh-key'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    sh <span class="token string">'''</span>
<span class="line">                        rsync -avz --delete dist/ user@prod-server:/path/to/deployment/</span>
<span class="line">                    '''</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    post <span class="token punctuation">{</span></span>
<span class="line">        always <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">cleanWs</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        success <span class="token punctuation">{</span></span>
<span class="line">            slackSend channel<span class="token punctuation">:</span> <span class="token string">'#deployments'</span><span class="token punctuation">,</span></span>
<span class="line">                      color<span class="token punctuation">:</span> <span class="token string">'good'</span><span class="token punctuation">,</span></span>
<span class="line">                      message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"部署成功: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        failure <span class="token punctuation">{</span></span>
<span class="line">            slackSend channel<span class="token punctuation">:</span> <span class="token string">'#deployments'</span><span class="token punctuation">,</span></span>
<span class="line">                      color<span class="token punctuation">:</span> <span class="token string">'danger'</span><span class="token punctuation">,</span></span>
<span class="line">                      message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"部署失败: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<h3 id="_1-环境分离" tabindex="-1"><a class="header-anchor" href="#_1-环境分离"><span>1. 环境分离</span></a></h3>
<p>为不同环境(开发、测试、预生产、生产)配置独立的部署流程:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># 环境变量配置</span></span>
<span class="line">.env.development</span>
<span class="line">.env.staging</span>
<span class="line">.env.production</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-回滚策略" tabindex="-1"><a class="header-anchor" href="#_2-回滚策略"><span>2. 回滚策略</span></a></h3>
<p>确保能够快速回滚到上一个稳定版本:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># GitHub Actions中的回滚作业</span></span>
<span class="line"><span class="token key atrule">rollback</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">needs</span><span class="token punctuation">:</span> deploy<span class="token punctuation">-</span>prod</span>
<span class="line">  <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()</span>
<span class="line">  <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">  <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 部署上一个稳定版本</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Rollback to previous version</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">        # 回滚脚本</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-版本控制" tabindex="-1"><a class="header-anchor" href="#_3-版本控制"><span>3. 版本控制</span></a></h3>
<p>每次部署添加版本标签:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 部署前自动打tag</span></span>
<span class="line"><span class="token function">git</span> tag <span class="token function">v</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> package.json <span class="token operator">|</span> <span class="token function">grep</span> version <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">awk</span> -F: <span class="token string">'{ print $2 }'</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">'s/[",]//g'</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">'[:space:]'</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d%H%M%S<span class="token variable">)</span></span></span>
<span class="line"><span class="token function">git</span> push <span class="token parameter variable">--tags</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-缓存优化" tabindex="-1"><a class="header-anchor" href="#_4-缓存优化"><span>4. 缓存优化</span></a></h3>
<p>缓存依赖以加速构建:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies</span>
<span class="line">  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3</span>
<span class="line">  <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm</span>
<span class="line">    <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles('<span class="token important">**/package-lock.json')</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">      ${{ runner.os }}-node-</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-并行任务" tabindex="-1"><a class="header-anchor" href="#_5-并行任务"><span>5. 并行任务</span></a></h3>
<p>将独立任务并行执行以减少总构建时间:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">lint</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 代码检查任务</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">test</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 单元测试任务</span></span>
<span class="line">  </span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">needs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>lint<span class="token punctuation">,</span> test<span class="token punctuation">]</span></span>
<span class="line">    <span class="token comment"># 构建任务</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真实案例分析" tabindex="-1"><a class="header-anchor" href="#真实案例分析"><span>真实案例分析</span></a></h2>
<p>在字节跳动飞书人事项目中，我们的CI/CD流程包括:</p>
<ol>
<li><strong>代码提交</strong>：提交代码到feature分支</li>
<li><strong>自动检查</strong>：触发ESLint代码检查和Jest单元测试</li>
<li><strong>PR审核</strong>：通过代码审核后合并到develop分支</li>
<li><strong>自动构建</strong>：合并后自动触发构建</li>
<li><strong>测试环境部署</strong>：自动部署到测试环境</li>
<li><strong>功能测试</strong>：QA进行功能测试</li>
<li><strong>预发布</strong>：将验证过的代码合并到staging分支并部署到预发环境</li>
<li><strong>生产部署</strong>：经过预发环境验证后，合并到main分支并部署到生产环境</li>
</ol>
<p>这套流程每天处理超过20次部署，大大提高了团队的开发效率。</p>
<h2 id="监控与通知" tabindex="-1"><a class="header-anchor" href="#监控与通知"><span>监控与通知</span></a></h2>
<p>将部署状态通知集成到工作流中:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Slack Notification</span>
<span class="line">  <span class="token key atrule">uses</span><span class="token punctuation">:</span> 8398a7/action<span class="token punctuation">-</span>slack@v3</span>
<span class="line">  <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">status</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> job.status <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token key atrule">fields</span><span class="token punctuation">:</span> repo<span class="token punctuation">,</span>message<span class="token punctuation">,</span>commit<span class="token punctuation">,</span>author<span class="token punctuation">,</span>action<span class="token punctuation">,</span>eventName<span class="token punctuation">,</span>ref<span class="token punctuation">,</span>workflow</span>
<span class="line">  <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">SLACK_WEBHOOK_URL</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SLACK_WEBHOOK <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token key atrule">if</span><span class="token punctuation">:</span> always()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶主题" tabindex="-1"><a class="header-anchor" href="#进阶主题"><span>进阶主题</span></a></h2>
<ul>
<li><strong>蓝绿部署</strong>：准备两个相同的生产环境，交替部署</li>
<li><strong>金丝雀发布</strong>：逐步将流量引导到新版本</li>
<li><strong>A/B测试集成</strong>：在部署流程中集成A/B测试</li>
<li><strong>性能监控</strong>：自动监控部署后的应用性能</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>构建一套完善的前端CI/CD系统不仅能提高开发效率，还能提升代码质量和用户体验。根据项目规模和团队需求选择合适的工具和策略，循序渐进地实现自动化部署。</p>
<p>在我的职业生涯中，从最初的手动部署到现在的全自动CI/CD流程，我深刻体会到工程化对前端开发的重要性。希望本文能为您实现前端自动化部署提供有价值的参考。</p>
<h2 id="参考资源" tabindex="-1"><a class="header-anchor" href="#参考资源"><span>参考资源</span></a></h2>
<ul>
<li><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">GitHub Actions文档<ExternalLinkIcon/></a></li>
<li><a href="https://www.jenkins.io/doc/" target="_blank" rel="noopener noreferrer">Jenkins用户文档<ExternalLinkIcon/></a></li>
<li><a href="https://martinfowler.com/articles/continuousIntegration.html" target="_blank" rel="noopener noreferrer">Martin Fowler: Continuous Integration<ExternalLinkIcon/></a></li>
<li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer">GitLab CI/CD文档<ExternalLinkIcon/></a></li>
</ul>
</div></template>



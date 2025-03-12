<template><div><h1 id="博客进阶" tabindex="-1"><a class="header-anchor" href="#博客进阶"><span>博客进阶</span></a></h1>
<h2 id="侧边栏手动配置" tabindex="-1"><a class="header-anchor" href="#侧边栏手动配置"><span><a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F" target="_blank" rel="noopener noreferrer">侧边栏<ExternalLinkIcon/></a>手动配置</span></a></h2>
<p>想要使 侧边栏（Sidebar）生效，需要配置 <code>themeConfig.sidebar</code>，基本的配置，需要一个包含了多个链接的数组：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// .vuepress/config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token string">"/page-a"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"/page-b"</span><span class="token punctuation">,</span> <span class="token string">"Explicit link text"</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以省略 <code>.md </code>拓展名，同时以 / 结尾的路径将会被视为<code> */README.md</code>，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 <code>YAML front matter</code> 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为<code>[link, text]</code> 的数组</p>
<h2 id="sidebar-动态配置" tabindex="-1"><a class="header-anchor" href="#sidebar-动态配置"><span>sidebar：动态配置</span></a></h2>
<ul>
<li>快捷配置侧边栏</li>
<li>解决手动更改 <code>sidebar</code> 带来的烦恼</li>
<li><a href="https://github.com/Guanyuhao/myblog" target="_blank" rel="noopener noreferrer">code<ExternalLinkIcon/></a></li>
</ul>
<h3 id="创建好目录结构" tabindex="-1"><a class="header-anchor" href="#创建好目录结构"><span>创建好目录结构</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">myblog</span>
<span class="line">├─── config</span>
<span class="line">|   └───  sidebar.js</span>
<span class="line">├─── utils</span>
<span class="line">|   ├── getFilenames.js</span>
<span class="line">│   └── index.js</span>
<span class="line">├─── docs</span>
<span class="line">│   ├── README.md</span>
<span class="line">│   ├── algorithm</span>
<span class="line">|   |   └─── README.md</span>
<span class="line">│   ├── guide</span>
<span class="line">|   |   ├─── text.md</span>
<span class="line">|   |   └─── README.md</span>
<span class="line">│   └── .vuepress</span>
<span class="line">│       ├── styles</span>
<span class="line">|       |   └─── index.styl</span>
<span class="line">│       ├── public</span>
<span class="line">|       |   └─── yuhao.jpg</span>
<span class="line">│       └── config.js</span>
<span class="line">└── package.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="utils-目录" tabindex="-1"><a class="header-anchor" href="#utils-目录"><span>utils 目录</span></a></h3>
<ul>
<li>为<code>confg</code>文件夹提供所需的工具类。</li>
</ul>
<p><strong>获取 docs 文件目录名字</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> docs <span class="token operator">=</span> rootpath <span class="token operator">+</span> <span class="token string">"/docs/"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">isDir</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">exists</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">getFileDirectory</span><span class="token punctuation">(</span><span class="token parameter">rpath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> fileDirectoryName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>rpath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> fullpath <span class="token operator">=</span> rpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> file<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isDir</span><span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fileDirectoryName<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    fileDirectoryName<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序</span></span>
<span class="line">    <span class="token keyword">return</span> fileDirectoryName<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">file<span class="token punctuation">.</span><span class="token function">getFileDirectory</span><span class="token punctuation">(</span>docs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ['algorithm','guide']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取 docs 目录下.md 后缀的文件</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> docs <span class="token operator">=</span> rootpath <span class="token operator">+</span> <span class="token string">"/docs/"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">isDir</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">exists</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">getFileDirectory</span><span class="token punctuation">(</span><span class="token parameter">rpath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> fileDirectoryName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>rpath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> fullpath <span class="token operator">=</span> rpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> file<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isDir</span><span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fileDirectoryName<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    fileDirectoryName<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> fileDirectoryName<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token parameter">rpath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> filenames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>rpath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> fullpath <span class="token operator">=</span> rpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> file<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> fileinfo <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileinfo<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">===</span> <span class="token string">"README.md"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            file <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            file <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">".md"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          filenames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// console.log(filenames)</span></span>
<span class="line">    filenames<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> filenames<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">file<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span>docs <span class="token operator">+</span> <span class="token string">"guide/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// result</span></span>
<span class="line"><span class="token comment">// ["", "test"];</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config-目录" tabindex="-1"><a class="header-anchor" href="#config-目录"><span>config 目录</span></a></h2>
<ul>
<li>动态生成所需要的配置对象，为<code>public/config.js</code>使用。</li>
<li>目前只有 sidebar,也许以后会增加 nav.js ...</li>
</ul>
<h3 id="config-sidebar-js" tabindex="-1"><a class="header-anchor" href="#config-sidebar-js"><span>config/sidebar.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> rootpath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> docs <span class="token operator">=</span> rootpath <span class="token operator">+</span> <span class="token string">"/docs/"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> genSidebar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>rootpath <span class="token operator">+</span> <span class="token string">"/utils/index.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> filehelper <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>rootpath <span class="token operator">+</span> <span class="token string">"/utils/getFilenames.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">generateObj</span><span class="token punctuation">(</span><span class="token parameter">cnDocNameArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> docDirArr <span class="token operator">=</span> filehelper<span class="token punctuation">.</span><span class="token function">getFileDirectory</span><span class="token punctuation">(</span>docs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  docDirArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> val <span class="token operator">=</span> cnDocNameArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    obj<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">genSidebar</span><span class="token punctuation">(</span></span>
<span class="line">      val<span class="token punctuation">,</span></span>
<span class="line">      filehelper<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>docs<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> obj<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">generateObj</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"算法"</span><span class="token punctuation">,</span> <span class="token string">"指南"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="utils-getfilenames-js" tabindex="-1"><a class="header-anchor" href="#utils-getfilenames-js"><span>utils/getFilenames.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 文件名字的获取</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 排除检查的文件</span></span>
<span class="line"><span class="token keyword">const</span> excludes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">".vuepress"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">filehelper</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token parameter">rpath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> filenames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>rpath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> fullpath <span class="token operator">=</span> rpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> file<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> fileinfo <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileinfo<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">===</span> <span class="token string">"README.md"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            file <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            file <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">".md"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          filenames<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    filenames<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> filenames<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">getFileDirectory</span><span class="token punctuation">(</span><span class="token parameter">rpath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> fileDirectoryName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>rpath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> fullpath <span class="token operator">=</span> rpath <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> file<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>excludes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isDir</span><span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fileDirectoryName<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    fileDirectoryName<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序</span></span>
<span class="line">    <span class="token keyword">return</span> fileDirectoryName<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">exists</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">isDir</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">filehelper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="utils-index-js" tabindex="-1"><a class="header-anchor" href="#utils-index-js"><span>utils/index.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">genSidebar</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span><span class="token punctuation">,</span> collapsable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> sidebarDepth <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      title<span class="token punctuation">,</span></span>
<span class="line">      collapsable<span class="token punctuation">,</span></span>
<span class="line">      sidebarDepth<span class="token punctuation">,</span></span>
<span class="line">      children</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> arr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> utils<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docs-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#docs-vuepress-config-js"><span>docs/.vuepress/config.js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"../../config/sidebar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 其他配置</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    sidebar</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages-and-travis-ci" tabindex="-1"><a class="header-anchor" href="#github-pages-and-travis-ci"><span>GitHub Pages and Travis CI</span></a></h2>
<ol>
<li>在 <code v-pre>docs/.vuepress/config.js</code> 中设置正确的 <code v-pre>base</code>。</li>
<li>项目的根目录创建一个名为 <code v-pre>.travis.yml</code> 的文件；</li>
<li>本地执行 npm install 并且在提交中包含 package-lock.json 因为 npm ci 需要它才能正确执行。！！！🐖</li>
<li>使用 GitHub Pages 部署提供程序模板并遵循 <a href="https://docs.travis-ci.com/user/deployment/pages/" target="_blank" rel="noopener noreferrer">Travis 文档<ExternalLinkIcon/></a></li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js</span>
<span class="line"><span class="token key atrule">node_js</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> lts/*</span>
<span class="line"><span class="token key atrule">install</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> npm ci</span>
<span class="line"><span class="token key atrule">script</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> npm install <span class="token punctuation">-</span>g vuepress</span>
<span class="line">  <span class="token punctuation">-</span> npm run docs<span class="token punctuation">:</span>build</span>
<span class="line">    <span class="token comment"># - cd docs/.vuepress/dist/</span></span>
<span class="line"><span class="token key atrule">deploy</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">provider</span><span class="token punctuation">:</span> pages</span>
<span class="line">  <span class="token key atrule">skip_cleanup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">local_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist/</span>
<span class="line">  <span class="token key atrule">token</span><span class="token punctuation">:</span> $GITHUB_TOKEN <span class="token comment"># a token generated on github allowing travis to push code on you repository</span></span>
<span class="line">  <span class="token key atrule">keep_history</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branch</span><span class="token punctuation">:</span> master</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="created-github-token" tabindex="-1"><a class="header-anchor" href="#created-github-token"><span>Created GITHUB_TOKEN</span></a></h3>
<p><img src="/guideImg/githubSetting.jpg" alt="githubSetting"></p>
<p><img src="/guideImg/DeveloperSetting.jpg" alt="DeveloperSetting"></p>
<p><img src="/guideImg/createdToken.jpg" alt="createdToken"></p>
<p>权限选择除了 <code v-pre>delete_repo</code> 全 ✔</p>
<h3 id="travis-ci" tabindex="-1"><a class="header-anchor" href="#travis-ci"><span>Travis CI</span></a></h3>
<p>Travis CI 是在线托管的 CI 服务，用 Travis 来进行持续集成，不需要自己搭服务器，在网页上点几下就好，用起来更方便。最重要的是，它对开源项目是免费的。</p>
<ol>
<li><code v-pre>github</code> 授权登录 <code v-pre>Travis</code>, 进入 <code v-pre>Setting</code></li>
<li>开启<code v-pre>Travis CI</code> 对 <code v-pre>github</code> 需要 CI 的权限</li>
<li><code v-pre>Setting</code> 当前仓库的所需要的环境变量比如<code v-pre>GITHUB_TOKEN</code></li>
</ol>
<p><img src="/guideImg/travis.jpg" alt="Travis CI"></p>
<p>推送你的代码到的你自己的仓库,打开<code v-pre>Travis</code>产看 job log</p>
<h2 id="添加评论系统" tabindex="-1"><a class="header-anchor" href="#添加评论系统"><span>添加评论系统</span></a></h2>
<ol>
<li>使用由 Vue 驱动并基于 Issue 实现(Vssue)[https://vssue.js.org/zh/guide/]，</li>
<li>在添加评论之前你需要准备 clientID 和 clientSecret，这两个东西的生成是在这里<a href="https://github.com/settings/applications/new" target="_blank" rel="noopener noreferrer"><code v-pre>Register a new OAuth application</code><ExternalLinkIcon/></a></li>
</ol>
<h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件"><span>安装插件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vssue/vuepress-plugin-vssue</span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vssue/api-github-v3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h3>
<p>在<code v-pre>.vuepress/config.js</code> 中添加 plugins:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'@vssue/vuepress-plugin-vssue'</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 设置 `platform` 而不是 `api`</span></span>
<span class="line">      <span class="token literal-property property">platform</span><span class="token operator">:</span> <span class="token string">'github'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'zh'</span><span class="token punctuation">,</span> <span class="token comment">// 语言设置</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 其他的 Vssue 配置</span></span>
<span class="line">      <span class="token literal-property property">owner</span><span class="token operator">:</span> <span class="token string">'OWNER_OF_REPO'</span><span class="token punctuation">,</span> <span class="token comment">// 你的github账户名称</span></span>
<span class="line">      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'NAME_OF_REPO'</span><span class="token punctuation">,</span> <span class="token comment">// 你的Github博客仓库 我填的是soyomo</span></span>
<span class="line">      <span class="token literal-property property">clientId</span><span class="token operator">:</span> <span class="token string">'YOUR_CLIENT_ID'</span><span class="token punctuation">,</span> <span class="token comment">// 你在github上面申请的clientId</span></span>
<span class="line">      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> <span class="token string">'YOUR_CLIENT_SECRET'</span><span class="token punctuation">,</span> <span class="token comment">// 在github上面申请的clientSecret</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后以组件的方式在 md 文档中使用,也就是在 md 文档的最底部加上这样一句就行：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;Vssue title="Vssue Demo" /></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><!-- <Vssue title="vuepress Vssue" /> -->
</div></template>



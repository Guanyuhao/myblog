<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1>
<blockquote>
<p><a href="https://yeasy.gitbooks.io/docker_practice/image/build.html" target="_blank" rel="noopener noreferrer">Docker —— 从入门到实践<ExternalLinkIcon/></a></p>
</blockquote>
<h1 id="docker-基本操作" tabindex="-1"><a class="header-anchor" href="#docker-基本操作"><span>Docker 基本操作</span></a></h1>
<p>开发常用：</p>
<table>
<thead>
<tr>
<th style="text-align:center">images</th>
<th style="text-align:center">查看镜像列表</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">rmi</td>
<td style="text-align:center">删除镜像</td>
</tr>
<tr>
<td style="text-align:center">save</td>
<td style="text-align:center">将指定镜像保存成 tar 归档文件</td>
</tr>
<tr>
<td style="text-align:center">load</td>
<td style="text-align:center">从存档或者 STDIN 加载镜像</td>
</tr>
<tr>
<td style="text-align:center">build</td>
<td style="text-align:center">从一个 DockerFile 构建镜像</td>
</tr>
<tr>
<td style="text-align:center">commit</td>
<td style="text-align:center">从容器创建一个镜像</td>
</tr>
<tr>
<td style="text-align:center">create</td>
<td style="text-align:center">创建一个容器</td>
</tr>
<tr>
<td style="text-align:center">run</td>
<td style="text-align:center">创建一个新的容器并运行一个命令</td>
</tr>
<tr>
<td style="text-align:center">rename</td>
<td style="text-align:center">重命名容器</td>
</tr>
<tr>
<td style="text-align:center">start</td>
<td style="text-align:center">启动容器</td>
</tr>
<tr>
<td style="text-align:center">stop</td>
<td style="text-align:center">停止容器</td>
</tr>
<tr>
<td style="text-align:center">restart</td>
<td style="text-align:center">重启容器</td>
</tr>
<tr>
<td style="text-align:center">rm</td>
<td style="text-align:center">删除容器</td>
</tr>
<tr>
<td style="text-align:center">logs</td>
<td style="text-align:center">获取一个容器的日志</td>
</tr>
<tr>
<td style="text-align:center">exec</td>
<td style="text-align:center">在正在运行的容器中运行命令</td>
</tr>
<tr>
<td style="text-align:center">cp</td>
<td style="text-align:center">从容器和主机文件系统之间拷贝文件</td>
</tr>
<tr>
<td style="text-align:center">ps</td>
<td style="text-align:center">查看容器列表</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># eg</span></span>
<span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">-p</span> <span class="token number">5210</span>:80 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\</span>docker_web:/home/work <span class="token parameter variable">--name</span> llpweb nginx</span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> llpweb /bin/bash</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开宿主机端口 5210</p>
<h1 id="docker-容器网络" tabindex="-1"><a class="header-anchor" href="#docker-容器网络"><span>Docker 容器网络</span></a></h1>
<h2 id="默认网络" tabindex="-1"><a class="header-anchor" href="#默认网络"><span>默认网络</span></a></h2>
<blockquote>
<p>安装 Docker 时，它会自动创建 3 个网络。可以使用 docker network ls 命令列出这些网络</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> network <span class="token function">ls</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:center">NETWORK ID</th>
<th style="text-align:center">NAME</th>
<th>DRIVER</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">7fca4eb8c647</td>
<td style="text-align:center">bridge</td>
<td>bridge</td>
</tr>
<tr>
<td style="text-align:center">9f904ee27bf5</td>
<td style="text-align:center">none</td>
<td>null</td>
</tr>
<tr>
<td style="text-align:center">cf03ee007fb4</td>
<td style="text-align:center">host</td>
<td>host</td>
</tr>
</tbody>
</table>
<ul>
<li>bridge 网络表示所有 Docker 安装中都存在的 docker0 网络。除非使用 <code v-pre>docker run --net=&lt;NETWORK&gt;</code>选项另行指定，否则 Docker 守护进程默认情况下会将容器连接到此网络。在主机上使用 ifconfig 命令，可以看到此网桥是主机的网络堆栈的一部分。</li>
<li>none 网络在一个特定于容器的网络堆栈上添加了一个容器。该容器缺少网络接口。</li>
<li>host 网络在主机网络堆栈上添加一个容器。您可以发现，容器中的网络配置与主机相同</li>
</ul>
<h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># 创建网路</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">-d</span> bridge test-net</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接一个容器到一个网络</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> network connetc test-net container1</span>
<span class="line"><span class="token comment"># docker run -itd --network=test-net images1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用–link选项来指定一个首选别名来连接到另一个容</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> network connect <span class="token parameter variable">--link</span> container1:c1 multi-host-network container2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证这个容器是否已连接到网络</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> network inspect test-net</span>
<span class="line"></span>
<span class="line"><span class="token comment">#从网络删除容器</span></span>
<span class="line"><span class="token function">docker</span> network disconnect</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



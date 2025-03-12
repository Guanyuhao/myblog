<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1>
<p>本文不会介绍 Git 的基本操作，会对一些高级操作进行说明。</p>
<h2 id="rebase-合并" tabindex="-1"><a class="header-anchor" href="#rebase-合并"><span>Rebase 合并</span></a></h2>
<p>该命令可以让和 <code v-pre>merge</code> 命令得到的结果基本是一致的。</p>
<p>通常使用 <code v-pre>merge</code> 操作将分支上的代码合并到 <code v-pre>master</code> 中，分支样子如下所示</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043128.png" alt=""></p>
<p>使用 <code v-pre>rebase</code> 后，会将 <code v-pre>develop</code> 上的 <code v-pre>commit</code> 按顺序移到 <code v-pre>master</code> 的第三个 <code v-pre>commit</code> 后面，分支样子如下所示</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-043129.png" alt=""></p>
<p>Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲突只需要解决一次。</p>
<p>使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。如果 <code v-pre>develop</code> 分支需要 rebase 到 <code v-pre>master</code> 上去，那么应该如下操作</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment">## branch develop</span></span>
<span class="line"><span class="token function">git</span> rebase master</span>
<span class="line"><span class="token function">git</span> checkout master</span>
<span class="line"><span class="token comment">## 用于将 `master` 上的 HEAD 移动到最新的 commit</span></span>
<span class="line"><span class="token function">git</span> merge develop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stash" tabindex="-1"><a class="header-anchor" href="#stash"><span>stash</span></a></h2>
<p><code v-pre>stash</code> 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分支打包的问题，如果这时候你不想 <code v-pre>commit</code> 的话，就可以使用该命令。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> stash</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> stash pop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这样你之前临时保存的代码又回来了</p>
<h2 id="reflog" tabindex="-1"><a class="header-anchor" href="#reflog"><span>reflog</span></a></h2>
<p><code v-pre>reflog</code> 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过 <code v-pre>git reflog</code> 看到移动 HEAD 的哈希值</p>
<p><img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-43130.png" alt=""></p>
<p>从图中可以看出，HEAD 的最后一次移动行为是 <code v-pre>merge</code> 后，接下来分支 <code v-pre>new</code> 就被删除了，那么我们可以通过以下命令找回 <code v-pre>new</code> 分支</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> checkout 37d9aca</span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> new</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：<code v-pre>reflog</code> 记录是时效的，只会保存一段时间内的记录。</p>
<h2 id="reset" tabindex="-1"><a class="header-anchor" href="#reset"><span>Reset</span></a></h2>
<p>如果你想删除刚写的 commit，就可以通过以下命令实现</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>但是 <code v-pre>reset</code> 的本质并不是删除了 commit，而是重新设置了 HEAD 和它指向的 branch。</p>
</div></template>



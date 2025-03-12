---
home: true
heroImage: /yuhao.jpg
heroText: 哈哈的技术博客
tagline: 探索、学习、分享，记录技术成长之路
actionText: 开始阅读 →
actionLink: /guide/
features:
- title: 技术深度
  details: 分享Web开发、Web3开发、注重实践与原理结合
- title: 学习笔记
  details: 记录日常学习过程中的心得体会，整理有价值的知识点和解决方案
- title: 项目实践
  details: 展示个人项目开发过程，分享实际问题的解决思路和技术选型考量
footer: MIT Licensed | Copyright © 2025-present Guanyuhao
---
<div class="features-section">

## 最新文章

<div class="post-list">
  <PostItem 
    title="个人简历" 
    description="我是一名前端开发工程师，喜欢研究技术，喜欢分享，喜欢学习，喜欢思考" 
    link="/about/resume.html" 
    date="2025-03-10" 
  />
  <PostItem 
    title="PDCA循环法：持续改进的高效工作方法" 
    description="PDCA是一种迭代式管理方法，本文介绍如何将其应用于前端开发流程" 
    link="/blog/pdca-methodology.html" 
    date="2023-01-10" 
  />
</div>

## 精选项目

<div class="project-list">
  <ProjectCard 
    title="AntAlpha - 数字资产平台" 
    description="基于Next.js和TypeScript构建的B2B数字资产技术平台，提供Web端和服务商平台服务" 
    tech="Next.js, TypeScript, TailwindCSS" 
    period="2023.6 - 至今" 
    company="比特大陆"
  />
  <ProjectCard 
    title="飞书人事 - HCM系统" 
    description="参与开发HCM系统的组织、人员、电子签模块，采用微前端架构提升开发效率" 
    tech="React, TypeScript, 微前端架构" 
    period="2021.6 - 2023.6" 
    company="字节跳动"
  />
</div>

## 技术栈

<div class="tech-stack">
  <span class="tech-item">JavaScript</span>
  <span class="tech-item">Vue.js</span>
  <span class="tech-item">Node.js</span>
  <span class="tech-item">React</span>
  <span class="tech-item">TypeScript</span>
</div>

## 联系方式

<div class="contact-section">
  <a href="https://github.com/guanyuhao" target="_blank" class="contact-item">
    <svg viewBox="64 64 896 896" focusable="false" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
    GitHub
  </a>
  <a href="mailto:gunyuhao_666@163.com" class="contact-item">
    <svg viewBox="64 64 896 896" focusable="false" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
    Email
  </a>
</div>

</div>

<style>
.features-section {
  padding: 0 0 0 0;
  margin-top: 2.5rem;
}
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
.about-section {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  line-height: 1.6;
}
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}
.tech-item {
  background-color: #3eaf7c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}
.contact-section {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #3eaf7c;
  font-weight: 600;
}
.contact-item img {
  width: 24px;
  height: 24px;
}
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}
@media (max-width: 719px) {
  .post-list {
    grid-template-columns: 1fr;
  }
  .contact-section {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
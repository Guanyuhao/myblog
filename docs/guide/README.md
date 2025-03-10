# 技术指南

欢迎来到我的技术指南专区。这里汇集了我在7年前端开发生涯中积累的知识、经验和最佳实践。无论您是初学者还是有经验的开发者，都能在这里找到有价值的内容。

- [计算机通识](../cs)
- [前端](../FrontEnd)
- [区块链](../Blockchain)
- [算法学习](../algorithm)

## 指南分类

<div class="guide-categories">
  <div class="guide-category">
    <div class="category-icon">📚</div>
    <h3>前端基础</h3>
    <p>夯实前端开发的基础知识，从HTML、CSS到JavaScript核心概念</p>
    <a href="./frontend-basics/" class="category-link">浏览指南</a>
  </div>
  
  <div class="guide-category">
    <div class="category-icon">⚛️</div>
    <h3>Vue & React</h3>
    <p>深入理解主流前端框架，掌握组件设计、状态管理和性能优化</p>
    <a href="./frameworks/" class="category-link">浏览指南</a>
  </div>
  
  <div class="guide-category">
    <div class="category-icon">🔧</div>
    <h3>工程化实践</h3>
    <p>前端工程化最佳实践，包括构建工具、CI/CD和自动化测试</p>
    <a href="./engineering/" class="category-link">浏览指南</a>
  </div>
  
  <div class="guide-category">
    <div class="category-icon">🌐</div>
    <h3>全栈开发</h3>
    <p>Node.js后端开发、API设计和全栈项目架构</p>
    <a href="./fullstack/" class="category-link">浏览指南</a>
  </div>
  
  <div class="guide-category">
    <div class="category-icon">⛓️</div>
    <h3>区块链与Web3</h3>
    <p>区块链开发入门、Web3.js应用开发和智能合约交互</p>
    <a href="./blockchain/" class="category-link">浏览指南</a>
  </div>
  
  <div class="guide-category">
    <div class="category-icon">📱</div>
    <h3>小程序开发</h3>
    <p>微信小程序开发技巧和多端统一开发方案</p>
    <a href="./miniprogram/" class="category-link">浏览指南</a>
  </div>
</div>

## 精选指南

<div class="featured-guides">
  <div class="guide-item">
    <span class="guide-tag">Vue.js</span>
    <h4><a href="./frameworks/vue-composition-api.html">Vue Composition API实战指南</a></h4>
    <p>深入探索Vue 3 Composition API的使用方法，通过实际案例演示如何组织可复用的逻辑</p>
  </div>
  
  <div class="guide-item">
    <span class="guide-tag">工程化</span>
    <h4><a href="./engineering/frontend-ci-cd.html">前端CI/CD自动化部署实践</a></h4>
    <p>从零搭建前端自动化部署流程，实现代码提交到自动测试、构建和发布的完整链路</p>
  </div>
  
  <div class="guide-item">
    <span class="guide-tag">性能优化</span>
    <h4><a href="./engineering/performance-optimization.html">Web应用性能优化策略</a></h4>
    <p>全面的Web性能优化指南，涵盖加载性能、运行时性能和用户体验优化的各个方面</p>
  </div>
  
  <div class="guide-item">
    <span class="guide-tag">区块链</span>
    <h4><a href="./blockchain/web3-integration.html">在Web应用中集成以太坊</a></h4>
    <p>如何在现代Web应用中集成以太坊区块链，实现钱包连接和智能合约交互</p>
  </div>
</div>

## 新手指南

如果您刚开始学习前端开发，以下是我推荐的学习路径：

1. [HTML/CSS基础入门](./frontend-basics/html-css-basics.html) - 网页结构和样式基础
2. [JavaScript核心概念](./frontend-basics/javascript-essentials.html) - 掌握JS语言基础
3. [现代JavaScript特性](./frontend-basics/modern-javascript.html) - ES6+特性和工具
4. [Vue.js入门指南](./frameworks/vue-basics.html) - 第一个Vue应用
5. [React入门指南](./frameworks/react-basics.html) - React基础和应用

## 参与讨论

对任何指南有问题或建议？欢迎在文章评论区留言，或通过以下方式联系我：

- GitHub Issues: [提交问题](https://github.com/guanyuhao/myblog/issues)
- Email: [联系我](mailto:gunyuhao_666@163.com)

<style>
.guide-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.guide-category {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.guide-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.guide-category h3 {
  margin: 0.5rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
  border-bottom: none;
}

.guide-category p {
  color: #4a5568;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.category-link {
  display: inline-block;
  background-color: #3eaf7c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}

.category-link:hover {
  background-color: #2c8c6c;
  text-decoration: none;
}

.featured-guides {
  margin: 2rem 0 3rem;
}

.guide-item {
  background-color: #f8fafc;
  border-left: 4px solid #3eaf7c;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
}

.guide-tag {
  display: inline-block;
  background-color: #e6f7ff;
  color: #0088cc;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.guide-item h4 {
  margin: 0.5rem 0;
  font-size: 1.15rem;
}

.guide-item h4 a {
  color: #2c3e50;
  text-decoration: none;
}

.guide-item h4 a:hover {
  color: #3eaf7c;
}

.guide-item p {
  margin: 0.5rem 0 0;
  color: #4a5568;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .guide-categories {
    grid-template-columns: 1fr;
  }
}
</style>

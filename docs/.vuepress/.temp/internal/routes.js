export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/resume.html", { loader: () => import(/* webpackChunkName: "about_resume.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/about/resume.html.js"), meta: {"title":"关哈哈 - 前端｜鸿蒙开发工程师"} }],
  ["/cs/Docker.html", { loader: () => import(/* webpackChunkName: "cs_Docker.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/cs/Docker.html.js"), meta: {"title":"Docker"} }],
  ["/cs/Git.html", { loader: () => import(/* webpackChunkName: "cs_Git.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/cs/Git.html.js"), meta: {"title":"Git"} }],
  ["/cs/", { loader: () => import(/* webpackChunkName: "cs_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/cs/index.html.js"), meta: {"title":"网络"} }],
  ["/cs/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "cs_数据结构.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/cs/数据结构.html.js"), meta: {"title":"数据结构"} }],
  ["/cs/%E7%AE%97%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "cs_算法.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/cs/算法.html.js"), meta: {"title":"算法"} }],
  ["/algorithm/", { loader: () => import(/* webpackChunkName: "algorithm_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/algorithm/index.html.js"), meta: {"title":"引导"} }],
  ["/algorithm/%E4%BA%8C%E5%8F%89%E6%A0%91.html", { loader: () => import(/* webpackChunkName: "algorithm_二叉树.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/algorithm/二叉树.html.js"), meta: {"title":"js 二叉树"} }],
  ["/blog/pdca-methodology.html", { loader: () => import(/* webpackChunkName: "blog_pdca-methodology.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/blog/pdca-methodology.html.js"), meta: {"title":"PDCA循环法：持续改进的高效工作方法"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"技术指南"} }],
  ["/guide/blockchain/", { loader: () => import(/* webpackChunkName: "guide_blockchain_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/blockchain/index.html.js"), meta: {"title":"区块链与Web3开发指南"} }],
  ["/guide/blogbuild/", { loader: () => import(/* webpackChunkName: "guide_blogbuild_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/blogbuild/index.html.js"), meta: {"title":"VuePress 全面指南"} }],
  ["/guide/blogbuild/advance.html", { loader: () => import(/* webpackChunkName: "guide_blogbuild_advance.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/blogbuild/advance.html.js"), meta: {"title":"博客进阶"} }],
  ["/guide/engineering/", { loader: () => import(/* webpackChunkName: "guide_engineering_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/index.html.js"), meta: {"title":"前端工程化实践"} }],
  ["/guide/engineering/architecture-design.html", { loader: () => import(/* webpackChunkName: "guide_engineering_architecture-design.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/architecture-design.html.js"), meta: {"title":"前端项目架构设计"} }],
  ["/guide/engineering/code-quality.html", { loader: () => import(/* webpackChunkName: "guide_engineering_code-quality.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/code-quality.html.js"), meta: {"title":"前端代码质量保障体系"} }],
  ["/guide/engineering/frontend-ci-cd.html", { loader: () => import(/* webpackChunkName: "guide_engineering_frontend-ci-cd.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/frontend-ci-cd.html.js"), meta: {"title":"前端CI/CD自动化部署实践"} }],
  ["/guide/engineering/monitoring.html", { loader: () => import(/* webpackChunkName: "guide_engineering_monitoring.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/monitoring.html.js"), meta: {"title":"前端监控与异常处理"} }],
  ["/guide/engineering/performance-optimization.html", { loader: () => import(/* webpackChunkName: "guide_engineering_performance-optimization.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/performance-optimization.html.js"), meta: {"title":"Web应用性能优化策略"} }],
  ["/guide/engineering/webpack-config.html", { loader: () => import(/* webpackChunkName: "guide_engineering_webpack-config.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/engineering/webpack-config.html.js"), meta: {"title":"基础到高级的Webpack配置详解"} }],
  ["/guide/frameworks/", { loader: () => import(/* webpackChunkName: "guide_frameworks_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/index.html.js"), meta: {"title":"前端框架指南"} }],
  ["/guide/frameworks/component-design.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_component-design.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/component-design.html.js"), meta: {"title":"组件设计最佳实践"} }],
  ["/guide/frameworks/micro-frontend.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_micro-frontend.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/micro-frontend.html.js"), meta: {"title":"微前端架构实践"} }],
  ["/guide/frameworks/react-basics.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_react-basics.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/react-basics.html.js"), meta: {"title":"React入门指南"} }],
  ["/guide/frameworks/react-hooks.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_react-hooks.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/react-hooks.html.js"), meta: {"title":"React Hooks深度解析"} }],
  ["/guide/frameworks/react-performance.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_react-performance.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/react-performance.html.js"), meta: {"title":"React性能优化策略"} }],
  ["/guide/frameworks/redux-guide.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_redux-guide.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/redux-guide.html.js"), meta: {"title":"Redux完全指南"} }],
  ["/guide/frameworks/state-management-comparison.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_state-management-comparison.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/state-management-comparison.html.js"), meta: {"title":"状态管理方案对比"} }],
  ["/guide/frameworks/vue-basics.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_vue-basics.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/vue-basics.html.js"), meta: {"title":"Vue.js入门指南"} }],
  ["/guide/frameworks/vue-best-practices.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_vue-best-practices.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/vue-best-practices.html.js"), meta: {"title":"Vue.js 项目最佳实践"} }],
  ["/guide/frameworks/vue-composition-api.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_vue-composition-api.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/vue-composition-api.html.js"), meta: {"title":"Vue Composition API实战指南"} }],
  ["/guide/frameworks/vuex-guide.html", { loader: () => import(/* webpackChunkName: "guide_frameworks_vuex-guide.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/vuex-guide.html.js"), meta: {"title":"Vuex状态管理指南"} }],
  ["/guide/frontend-basics/", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/index.html.js"), meta: {"title":"前端基础知识"} }],
  ["/guide/frontend-basics/browser-rendering.html", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_browser-rendering.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/browser-rendering.html.js"), meta: {"title":"浏览器渲染原理"} }],
  ["/guide/frontend-basics/dom-and-events.html", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_dom-and-events.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/dom-and-events.html.js"), meta: {"title":"DOM操作与事件处理"} }],
  ["/guide/frontend-basics/html-css-basics.html", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_html-css-basics.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/html-css-basics.html.js"), meta: {"title":"HTML/CSS基础入门"} }],
  ["/guide/frontend-basics/javascript-essentials.html", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_javascript-essentials.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/javascript-essentials.html.js"), meta: {"title":"JavaScript核心概念"} }],
  ["/guide/frontend-basics/modern-javascript.html", { loader: () => import(/* webpackChunkName: "guide_frontend-basics_modern-javascript.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frontend-basics/modern-javascript.html.js"), meta: {"title":"现代JavaScript特性"} }],
  ["/guide/miniprogram/", { loader: () => import(/* webpackChunkName: "guide_miniprogram_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/miniprogram/index.html.js"), meta: {"title":"小程序开发指南"} }],
  ["/guide/fullstack/", { loader: () => import(/* webpackChunkName: "guide_fullstack_index.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/fullstack/index.html.js"), meta: {"title":"全栈开发指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

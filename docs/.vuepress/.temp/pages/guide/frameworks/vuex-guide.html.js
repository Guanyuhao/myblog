import comp from "/Users/guanhaha/Desktop/code/myblog/docs/.vuepress/.temp/pages/guide/frameworks/vuex-guide.html.vue"
const data = JSON.parse("{\"path\":\"/guide/frameworks/vuex-guide.html\",\"title\":\"Vuex状态管理指南\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Vuex状态管理指南 Vuex是一个专为Vue.js应用程序开发的状态管理模式+库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。本文将深入介绍Vuex的核心概念、工作原理和最佳实践。 什么是状态管理 在Vue应用中，组件之间共享状态(数据)的几种常见方式： Props向下传递 - 父组件向子组件传递数据 ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://guanyuhao.github.io/guide/frameworks/vuex-guide.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"关哈哈\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Vuex状态管理指南\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vuex状态管理指南 Vuex是一个专为Vue.js应用程序开发的状态管理模式+库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。本文将深入介绍Vuex的核心概念、工作原理和最佳实践。 什么是状态管理 在Vue应用中，组件之间共享状态(数据)的几种常见方式： Props向下传递 - 父组件向子组件传递数据 ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-03-11T08:38:33.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-03-11T08:38:33.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Vuex状态管理指南\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2025-03-11T08:38:33.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"什么是状态管理\",\"slug\":\"什么是状态管理\",\"link\":\"#什么是状态管理\",\"children\":[]},{\"level\":2,\"title\":\"Vuex核心概念\",\"slug\":\"vuex核心概念\",\"link\":\"#vuex核心概念\",\"children\":[{\"level\":3,\"title\":\"1. State - 单一状态树\",\"slug\":\"_1-state-单一状态树\",\"link\":\"#_1-state-单一状态树\",\"children\":[]},{\"level\":3,\"title\":\"2. Getters - 派生状态\",\"slug\":\"_2-getters-派生状态\",\"link\":\"#_2-getters-派生状态\",\"children\":[]},{\"level\":3,\"title\":\"3. Mutations - 状态变更\",\"slug\":\"_3-mutations-状态变更\",\"link\":\"#_3-mutations-状态变更\",\"children\":[]},{\"level\":3,\"title\":\"4. Actions - 异步操作\",\"slug\":\"_4-actions-异步操作\",\"link\":\"#_4-actions-异步操作\",\"children\":[]},{\"level\":3,\"title\":\"5. Modules - 模块化状态管理\",\"slug\":\"_5-modules-模块化状态管理\",\"link\":\"#_5-modules-模块化状态管理\",\"children\":[]}]},{\"level\":2,\"title\":\"Vuex插件与高级特性\",\"slug\":\"vuex插件与高级特性\",\"link\":\"#vuex插件与高级特性\",\"children\":[{\"level\":3,\"title\":\"插件\",\"slug\":\"插件\",\"link\":\"#插件\",\"children\":[]},{\"level\":3,\"title\":\"严格模式\",\"slug\":\"严格模式\",\"link\":\"#严格模式\",\"children\":[]}]},{\"level\":2,\"title\":\"Vuex与Vue组合式API\",\"slug\":\"vuex与vue组合式api\",\"link\":\"#vuex与vue组合式api\",\"children\":[]},{\"level\":2,\"title\":\"实际应用示例\",\"slug\":\"实际应用示例\",\"link\":\"#实际应用示例\",\"children\":[]},{\"level\":2,\"title\":\"性能优化\",\"slug\":\"性能优化\",\"link\":\"#性能优化\",\"children\":[]},{\"level\":2,\"title\":\"与Composition API结合\",\"slug\":\"与composition-api结合\",\"link\":\"#与composition-api结合\",\"children\":[]},{\"level\":2,\"title\":\"学习资源\",\"slug\":\"学习资源\",\"link\":\"#学习资源\",\"children\":[]},{\"level\":2,\"title\":\"结语\",\"slug\":\"结语\",\"link\":\"#结语\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]},{\"level\":2,\"title\":\"从Vuex迁移到Pinia\",\"slug\":\"从vuex迁移到pinia\",\"link\":\"#从vuex迁移到pinia\",\"children\":[{\"level\":3,\"title\":\"Pinia与Vuex的主要区别\",\"slug\":\"pinia与vuex的主要区别\",\"link\":\"#pinia与vuex的主要区别\",\"children\":[]},{\"level\":3,\"title\":\"简单迁移示例\",\"slug\":\"简单迁移示例\",\"link\":\"#简单迁移示例\",\"children\":[]}]},{\"level\":2,\"title\":\"实际应用示例\",\"slug\":\"实际应用示例-1\",\"link\":\"#实际应用示例-1\",\"children\":[]},{\"level\":2,\"title\":\"性能优化\",\"slug\":\"性能优化-1\",\"link\":\"#性能优化-1\",\"children\":[]},{\"level\":2,\"title\":\"与Composition API结合\",\"slug\":\"与composition-api结合-1\",\"link\":\"#与composition-api结合-1\",\"children\":[]},{\"level\":2,\"title\":\"学习资源\",\"slug\":\"学习资源-1\",\"link\":\"#学习资源-1\",\"children\":[]},{\"level\":2,\"title\":\"结语\",\"slug\":\"结语-1\",\"link\":\"#结语-1\",\"children\":[]}],\"git\":{\"updatedTime\":1741682313000,\"contributors\":[{\"name\":\"guanhaha\",\"username\":\"guanhaha\",\"email\":\"guanyuhao666@gmail.com\",\"commits\":1,\"url\":\"https://github.com/guanhaha\"}]},\"autoDesc\":true,\"filePathRelative\":\"guide/frameworks/vuex-guide.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

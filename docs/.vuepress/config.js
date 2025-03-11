const { sidebar, enArr } = require("../../config/sidebar")
const baseUrl = (() => {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL
  }
  return "/"
})()

const Vssue = (() => {
  return {
    clientId: process.env.VSSUE_CLIENT_ID || "",
    clientSecret: process.env.VSSUE_CLIENT_SECRET || "",
  }
})()

module.exports = {
  title: "关哈哈",
  description: "但行好事，莫问前程",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/yuhao.jpg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-emoji'))
      md.use(require('markdown-it-anchor'))
      md.use(require('markdown-it-toc-done-right'))
    }
  },
  plugins: [
    // 官方回到顶部插件
    "@vuepress/back-to-top",
    // 页面滚动时自动激活侧边栏链接的插件
    "@vuepress/active-header-links",
    //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    [
      "@vuepress/medium-zoom",
      {
        options: {
          margin: 16,
          background: '#fff',
          scrollOffset: 0
        }
      },
    ],
    // vssue 一个借助issue的评论插件 具体配置见https://vssue.js.org/zh/
    Vssue.clientId
      ? [
          "@vssue/vuepress-plugin-vssue",
          {
            // 设置 `platform` 而不是 `api` 我这里是在github平台
            platform: "github",
            // owner与repo配置 https://github.com/${owner}/${repo}
            owner: "guanyuhao",
            repo: "myblog",
            // 填写自己的OAuth App 信息。详见https://vssue.js.org/zh/options/#repo
            clientId: Vssue.clientId,
            clientSecret: Vssue.clientSecret,
            locale: "zh", //使用的语言  这里是简体中文
            // baseURL: "https://github.com/guanyuhao/myblog"
          },
        ]
      : {}, //平台的 base URL
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-clean-urls'],
    ['sitemap', { hostname: 'https://guanyuhao.github.io' }]
  ],
  //指定额外的需要被监听的文件
  extraWatchFiles: [
    // '.vuepress/foo.js', // 使用相对路径
    // '/path/to/bar.js'   // 使用绝对路径
    "/config/sidebar.js",
  ],
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: "其他",
        items: [
          {
            text: "计算机通识",
            link: "/cs/",
          },
          {
            text: "关于我",
            link: "/about/resume.html",
          },
        ],
      },
      {
        text: "GitHub",
        items: [
          {
            text: "GitHub地址",
            link: "https://github.com/guanyuhao",
          },
        ],
      },
    ],
    sidebar,
  },
  scss: {},
}

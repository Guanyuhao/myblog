// 导入webpack
const webpack = require('webpack')
// 加载环境变量
require('dotenv').config()

// 确保环境变量在浏览器端可用
const envVariables = {
  PHONE_NUMBER: JSON.stringify(process.env.PHONE_NUMBER || '110****995')
}


const Vssue = (() => {
  return {
    clientId: process.env.VSSUE_CLIENT_ID || "",
    clientSecret: process.env.VSSUE_CLIENT_SECRET || "",
  }
})()

// 定义默认电话号码（脱敏版本，用于生产环境）
const defaultPhoneNumber = '176****2308'

module.exports = {
  title: "哈哈的技术博客",
  // title: "关聪-个人简历",
  description: "但行好事，莫问前程",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/yuhao.jpg' }],
    ['meta', { name: 'build-time', content: new Date().getTime() }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
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
      updatePopup: true,
      popupComponent: 'MySWUpdatePopup', // 可选的自定义弹窗组件
      updatePopup: {
        message: "新内容可用",
        buttonText: "刷新"
      }
    }],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-clean-urls'],
    ['sitemap', { hostname: 'https://guanyuhao.github.io' }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return new Date(timestamp).toISOString()
        }
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
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
    sidebar: 'auto',
  },
  scss: {},
  evergreen: true,
  // 添加webpack配置，使环境变量在浏览器端可用
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': envVariables
      })
    ]
  },
}

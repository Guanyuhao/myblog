import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: "关哈哈",
  description: "但行好事，莫问前程",
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/yuhao.jpg' }],
    ['meta', { name: 'build-time', content: `${new Date().getTime()}` }],
    ['meta', { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'Expires', content: '0' }],
  ],
  markdown: {},
  theme: defaultTheme({
    colorMode: 'light',
    colorModeSwitch: false,
    hostname: 'https://guanyuhao.github.io',
    logo: '/yuhao.jpg',
    lastUpdated: true,
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      nprogress: true,
      mediumZoom: true,
      copyCode: true,
      externalLinkIcon: true,
      git: true,
      linksCheck: true,
      prismjs: true,
      seo: true,
      sitemap: true,
    },
    sidebarDepth: 2,
    navbar: [
      {
        text: '其他',
        children: [
          {
            text: '计算机通识',
            link: '/cs/',
          },
          {
            text: "关于我",
            link: "/about/resume.html",
          },
        ],
      },
      {
        text: 'GitHub',
        link: "https://github.com/guanyuhao",
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
    sidebar: 'auto',
  }),
  plugins: [],
  bundler: viteBundler(),
})
const sidebar = require('../../config/sidebar');
console.log(sidebar)
module.exports = {
  title: 'Guanyuhao',
  description: '前端',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/yuhao.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  //指定额外的需要被监听的文件
  extraWatchFiles: [
    // '.vuepress/foo.js', // 使用相对路径
    // '/path/to/bar.js'   // 使用绝对路径
  ],
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [{
        text: '前端算法',
        link: '/algorithm/'
      }, // 内部链接 以docs为根目录
      // {
      //   text: '博客',
      //   link: 'http://obkoro1.com/'
      // }, // 外部链接
      {
        text: 'GitHub',
        items: [{
            text: 'GitHub地址',
            link: 'https://github.com/guanyuhao'
          },
          // {
          //   text: '算法仓库',
          //   link: 'https://github.com/OBKoro1/Brush_algorithm'
          // }
        ]
      }
    ],
    sidebar,
  }
};
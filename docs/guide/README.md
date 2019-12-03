# 指南

- [前端](../FrontEnd)
- [区块链](../Blockchain)
- 种草[Postwoman](https://postwoman.io/)

## 搭建一个类 Vue 文档风格的技术文档/博客 test

- 建议先看一下[官方文档](https://vuepress.vuejs.org/zh/)

- 可能你会搭建出一个类似这样的[文档](https://guanyuhao.github.io/)

- [vuePress 进阶](./博客进阶)

### 全局安装 VuePress

```sh
yarn global add vuepress # 或者：npm install -g vuepress
```

### 项目初始化

```sh
#建好目录 进入目录
mkdir mybloc
cd mybloc

#命令行初始化项目
npm init -y # 或者 yarn init -y

```

### 项目目录中将会创建一个 `package.json` 文件，文件是这个样子

```json
{
  "name": "mybloc",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 在 `myblog` 中新建 `docs` 文件夹

```sh
mkdir docs
```

### 进入`docs`,新建`.vuepress` 文件夹

```sh
cd docs
mkdir .vuepress
```

### 进入`.vuepress`,创建`config.js` 文件

```sh
cd .vuepress
touch config.js
```

### config.js 内容如下

config.js 是 VuePress 必要的配置文件

```js
module.exports = {
  title: "Hello VuePress",
  description: "Just playing around"
};
```

### 继续在`.vuepress` 内创建`public` 文件夹

这个文件夹是用来放置静态资源的，打包出来之后会放在.vuepress/dist/的根目录

```sh
mkdir public
```

### Vuepress[配置](https://vuepress.vuejs.org/zh/config/#palette-styl)

### `index.styl`

VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 .vuepress/styles/index.styl 文件。这是一个 [Stylus](http://stylus-lang.com/) 文件，但你也可以使用正常的 CSS 语法

```stylus
.home{
  .features{
    .feature{
      max-width: unset;
      flex-basis: unset;
    }
  }
}
```

### 首页(像 VuePress 文档主页一样)

在 `docs` 文件夹下面创建一个`README.md`
默认的主题提供了一个首页，像下面一样设置`home:true` 即可，可以把下面的设置放入`README.md`中，待会儿你将会看到跟`VuePress`一样的主页

```md
---
home: true
heroImage: /yuhao.jpg
actionText: Go →
actionLink: /guide/
features:
  - title: 认真苟且，开心有趣
    details: 生活本就随波逐流，沾花惹草意外湿了衣袖
  - title: pretend until you succeed
    details: Vividly imagine yourself as a loser, which makes you unable to win; 
    vividly imagine yourself as a winner, will bring incalculable energy
footer: MIT Licensed | Copyright © guanyuhao
---
```

::: tip 提醒

- 注意添加图片
- 注意修改样式

:::

```
myblog
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── styles
|       |   └─── index.styl
│       ├── public
|       |   └─── yuhao.jpg
│       └── config.js
└── package.json
```

**在 package.json 里添加两个启动命令:**

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 启动你的 VuePress

默认是[localhost:8080](http://localhost:8080)端口

```
npm run docs:dev
```

### 构建

build 生成静态的 HTML 文件,默认会在 `.vuepress/dist` 文件夹下

```
npm run docs:build
```

### 部署--GitHub Pages

1. 将`.vuepress/dist` 文件内容上次到你对应仓库地址就可以了

::: tip 提醒

- 在 `docs/.vuepress/config.js` 中设置正确的 `base`。
- 如果你打算发部到`https://USERNAME.github.io/`,则可以省略这一步，因为 `base` 默认即是`"/"`
- 如果你打算发布到`https://USERNAME.github.io/REPO`（也就是说你的仓库在 `https://github.com/USERNAME/REPO`），则将 base 设置为`"/REPO/"`

:::

2. 在你的项目中，创建一个如下的 `deploy.sh` 文件（请自行判断去掉高亮行的注释）:

```sh{20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

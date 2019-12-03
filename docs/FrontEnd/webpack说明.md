# 聊一聊 webpack

熟练掌握 Webpack 的常用配置,能够自己构建前端环境,并进行项目优化;

## 谈谈你对 webpack 的看法

webpack 是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。它可以很好地管理、打包开发中所用到的 HTML,CSS,JavaScript 和静态文件（图片，字体）等，让开发更高效。对于不同类型的依赖，webpack 有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源。

## webpack 的基本功能和工作原理？

- 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
- 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
- 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
- 模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
- 自动刷新：监听本地源代码的变化，自动构建，刷新浏览器
- 代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

## webpack 构建过程

从 entry 里配置的 module 开始递归解析 entry 依赖的所有 module,
每找到一个 module，就会根据配置的 loader 去找对应的转换规则。

对 module 进行转换后，再解析出当前 module 依赖的 module
这些模块会以 entry 为单位分组，一个 entry 和其所有依赖的 module 被分到一个组 Chunk。

最后 webpack 会把所有 Chunk 转换成文件输出
在整个流程中 webpack 会在恰当的时机执行 plugin 里定义的逻辑

## 打包原理

将所有依赖打包成一个 bundle.js，通过代码分割成单元片段按需加载。

**什么是 entry,output?**

entry 入口，告诉 webpack 要使用哪个模块作为构建项目的起点，默认为./src/index.js

output 出口，告诉 webpack 在哪里输出它打包好的代码以及如何命名，默认为./dist

**什么是 loader，plugins**

loader 是用来告诉 webpack 如何转换某一类型的文件，并且引入到打包出的文件中。

plugins(插件)作用更大，可以打包优化，资源管理和注入环境变量

**什么是 bundle,chunk,module?**

bundle 是 webpack 打包出来的文件

chunk 是 webpack 在进行模块的依赖分析的时候,代码分割出来的代码块

module 是开发中的单个模块

**有哪些常见的 Loader？他们是解决什么问题的？**

file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件;

url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去;

source-map-loader：加载额外的 Source Map 文件，以方便断点调试;

image-loader：加载并且压缩图片文件;

babel-loader：把 ES6 转换成 ES5;

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性;

style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS;

eslint-loader：通过 ESLint 检查 JavaScript 代码;

**webpack 规范**

webpack 默认遵循 commonjs 规范 module.exports

使用 webpack 进行打包时有两种模式：
开发模式：主要是用于测试,代码调试等;
生产模式：要考虑性能问题,要压缩 如果没有插件 就不会压缩;

默认情况下 webpack 的配置文件叫 webpack.config.js，可以通过--config 指定 webpack 的配置文件名 011.配置流程：
你可以尝试配置脚手架吗?可以

**loader**

css 需要两个 loader 来处理：css-loader style-loader

postcss-loader 他提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。

-webkit-transform: rotate(45deg);
transform: rotate(45deg);

mini-css-extract-plugin 以前都是之间引入内部样式，把 css 专门打包成一个 css 文件，在 index.html 文件中引入 css

optimize-css-assets-webpack-plugin css 压缩

terser-webpack-plugin css 压缩 js 不能压缩了,然后有一个插件,能压缩 js

file-loader 是让 webpack 打包图片

url-loader 可以让图片转化 base64，也可以让 webpack 打包图片

webpack 默认情况下不支持 js 的高级语法,所以需要使用 babel;

babel 转化; npm i @babel/core @babel/preset-env babel-loader --save-dev

**plugins**

html-webpack-plugin
根据模块生成一个 html 文件 此时不会在 dist 文件夹下面新建 index 文件了

我需要在 public 新建 index 文件 根据这个模板文件 在内存中生成 index.html 然后自动引入 bundle.js

clean-webpack-plugin 去掉没有用到的模块

# HTML/CSS基础入门

HTML和CSS是Web开发的基石。不管前端框架如何变化，这些基础知识始终是每位前端开发者必须掌握的内容。

## HTML基础

### 文档结构

一个基本的HTML文档结构如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的网页</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>网页标题</h1>
  </header>
  <main>
    <article>
      <h2>文章标题</h2>
      <p>这是一个段落。</p>
    </article>
  </main>
  <footer>
    <p>版权所有 © 2023</p>
  </footer>
</body>
</html>
```

### 语义化标签

HTML5引入了多种语义化标签，正确使用它们可以提高代码可读性和可访问性：

- `<header>` - 页眉
- `<nav>` - 导航
- `<main>` - 主要内容
- `<article>` - 独立的内容单元
- `<section>` - 内容区块
- `<aside>` - 侧边栏
- `<footer>` - 页脚

## CSS基础

### 选择器

CSS选择器用于定位HTML元素：

```css
/* 元素选择器 */
body {
  font-family: 'Arial', sans-serif;
}

/* 类选择器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ID选择器 */
#header {
  background-color: #333;
  color: white;
}

/* 组合选择器 */
nav a {
  text-decoration: none;
}

/* 伪类 */
a:hover {
  color: #0088cc;
}
```

### 盒模型

理解CSS盒模型是样式布局的关键：

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  margin: 30px;
  /* 默认情况下, 实际宽度 = 300 + 20*2 + 2*2 = 344px */
  
  /* 使用box-sizing变更计算方式 */
  box-sizing: border-box;
  /* 此时, 实际宽度 = 300px (内容区会自动减小) */
}
```

### Flexbox布局

Flexbox是现代CSS布局的核心：

```css
.container {
  display: flex;
  justify-content: space-between; /* 水平分布 */
  align-items: center; /* 垂直居中 */
  flex-wrap: wrap; /* 允许换行 */
}

.item {
  flex: 1; /* 平均分配空间 */
  margin: 10px;
}
```

### CSS Grid布局

Grid布局提供了更强大的二维布局能力：

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
  grid-gap: 20px; /* 间距 */
}

.grid-item {
  grid-column: span 2; /* 横跨两列 */
}
```

## 响应式设计

通过媒体查询实现响应式设计：

```css
/* 基础样式适用于所有设备 */
.container {
  width: 100%;
  padding: 15px;
}

/* 平板设备 */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}

/* 桌面设备 */
@media (min-width: 1024px) {
  .container {
    max-width: 970px;
  }
}
```

## CSS变量与预处理器

现代CSS开发通常结合变量和预处理器：

```css
/* CSS变量 */
:root {
  --primary-color: #3eaf7c;
  --secondary-color: #304455;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
```

## 实战练习

尝试创建一个简单但完整的个人简历页面，结合所学的HTML和CSS知识。要求：

1. 使用语义化HTML标签
2. 应用Flexbox或Grid布局
3. 实现响应式设计
4. 使用CSS变量管理颜色和尺寸

在下一篇文章中，我们将学习如何用JavaScript为静态页面添加交互功能。

## 资源推荐

- [MDN Web文档](https://developer.mozilla.org/zh-CN/) - 最权威的Web技术文档
- [CSS-Tricks](https://css-tricks.com/) - 学习CSS技巧的优质网站
- [Flexbox Froggy](https://flexboxfroggy.com/) - 学习Flexbox的游戏
- [Grid Garden](https://cssgridgarden.com/) - 学习Grid的游戏 
# DOM操作与事件处理

DOM(文档对象模型)是HTML和XML文档的编程接口，它将文档表示为节点树，让JavaScript能够访问和操作网页内容。事件处理则允许页面响应用户交互和其他行为。掌握DOM操作和事件处理是前端开发的核心技能。

## DOM基础

### DOM树结构

DOM将文档表示为一个树形结构，树中的每个分支末端都是一个节点(node)，每个节点都包含对象。

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM示例</title>
</head>
<body>
  <div id="container">
    <h1 class="title">DOM操作与事件处理</h1>
    <p>这是一个<span>示例</span>段落。</p>
  </div>
</body>
</html>
```

这个HTML文档的DOM树如下：

```
Document
└── html
    ├── head
    │   └── title
    │       └── "DOM示例"
    └── body
        └── div#container
            ├── h1.title
            │   └── "DOM操作与事件处理"
            └── p
                ├── "这是一个"
                ├── span
                │   └── "示例"
                └── "段落。"
```

### 节点类型

DOM中常见的节点类型：

1. **元素节点(Element Node)** - HTML标签如`<div>`、`<p>`
2. **文本节点(Text Node)** - 标签内的文本内容
3. **属性节点(Attribute Node)** - 元素的属性如`id`、`class`
4. **注释节点(Comment Node)** - HTML注释
5. **文档节点(Document Node)** - 整个文档的根节点

## DOM选择器

### 基本选择方法

```javascript
// 通过ID选择元素
const container = document.getElementById('container');

// 通过类名选择元素(返回HTMLCollection)
const titles = document.getElementsByClassName('title');

// 通过标签名选择元素(返回HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// 通过name属性选择元素(返回NodeList)
const inputs = document.getElementsByName('username');
```

### 现代选择器

```javascript
// 选择第一个匹配的元素
const title = document.querySelector('.title');

// 选择所有匹配的元素(返回NodeList)
const allParagraphs = document.querySelectorAll('p');

// 复杂选择器
const nestedSpan = document.querySelector('#container p span');
```

### HTMLCollection与NodeList的区别

- **HTMLCollection** - 动态集合，DOM变化会实时反映；只包含元素节点
- **NodeList** - 静态集合(大多数情况)，表示节点的快照；可以包含任何节点类型

```javascript
// HTMLCollection例子
const divs = document.getElementsByTagName('div'); // 动态更新

// NodeList例子
const divs2 = document.querySelectorAll('div'); // 静态快照

// 添加新元素后
document.body.appendChild(document.createElement('div'));
console.log(divs.length); // 更新的长度
console.log(divs2.length); // 保持不变
```

## DOM操作

### 创建和添加元素

```javascript
// 创建元素
const newDiv = document.createElement('div');

// 创建文本节点
const text = document.createTextNode('这是新创建的内容');

// 将文本添加到div
newDiv.appendChild(text);

// 添加到DOM树
document.body.appendChild(newDiv);

// 在特定位置插入
const container = document.getElementById('container');
const firstChild = container.firstChild;
container.insertBefore(newDiv, firstChild);

// 使用现代API插入
container.prepend(newDiv); // 在开头插入
container.append(newDiv); // 在末尾插入
container.before(newDiv); // 在元素前插入
container.after(newDiv); // 在元素后插入
```

### 删除和替换元素

```javascript
// 删除元素
const elementToRemove = document.getElementById('toRemove');
elementToRemove.remove(); // 现代方法

// 传统删除方法
elementToRemove.parentNode.removeChild(elementToRemove);

// 替换元素
const oldElement = document.getElementById('old');
const newElement = document.createElement('div');
newElement.textContent = '新元素';
oldElement.parentNode.replaceChild(newElement, oldElement);
```

### 克隆元素

```javascript
const original = document.getElementById('original');

// 浅克隆(不包括子元素)
const shallowClone = original.cloneNode(false);

// 深克隆(包括所有子元素)
const deepClone = original.cloneNode(true);

document.body.appendChild(deepClone);
```

### 操作属性

```javascript
const element = document.getElementById('myElement');

// 获取属性
const id = element.getAttribute('id');
const className = element.className; // 直接属性访问

// 设置属性
element.setAttribute('data-custom', 'value');
element.id = 'newId'; // 直接属性设置

// 检查属性是否存在
const hasAttribute = element.hasAttribute('data-custom');

// 删除属性
element.removeAttribute('data-custom');

// 操作dataset(data-*属性)
element.dataset.user = 'john'; // 设置data-user属性
console.log(element.dataset.user); // 获取data-user属性
```

### 操作样式

```javascript
const box = document.getElementById('box');

// 直接设置内联样式
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.marginTop = '20px';

// 获取计算样式(只读)
const computedStyle = getComputedStyle(box);
console.log(computedStyle.width);

// 添加/删除/切换/检查类
box.classList.add('highlight');
box.classList.remove('old-class');
box.classList.toggle('active'); // 有则删除，无则添加
const hasClass = box.classList.contains('highlight');
```

## DOM遍历

```javascript
const parent = document.getElementById('parent');

// 子节点
const childNodes = parent.childNodes; // 所有子节点(包括文本节点、注释节点)
const children = parent.children; // 所有子元素节点

// 首尾子节点
const firstChild = parent.firstChild; // 第一个子节点(可能是文本节点)
const lastChild = parent.lastChild; // 最后一个子节点

// 首尾子元素
const firstElement = parent.firstElementChild; // 第一个子元素节点
const lastElement = parent.lastElementChild; // 最后一个子元素节点

// 父节点
const parentNode = parent.parentNode; // 父节点
const parentElement = parent.parentElement; // 父元素节点

// 兄弟节点
const nextSibling = parent.nextSibling; // 下一个兄弟节点
const prevSibling = parent.previousSibling; // 上一个兄弟节点

// 兄弟元素
const nextElement = parent.nextElementSibling; // 下一个兄弟元素
const prevElement = parent.previousElementSibling; // 上一个兄弟元素
```

## 事件处理

### 事件模型

DOM事件模型包括三个阶段：

1. **捕获阶段** - 事件从顶层元素(document)向下传播到目标元素
2. **目标阶段** - 事件到达目标元素
3. **冒泡阶段** - 事件从目标元素向上冒泡到顶层元素

### 添加事件监听器

```javascript
const button = document.getElementById('myButton');

// 方法1: addEventListener(推荐)
button.addEventListener('click', function(event) {
  console.log('按钮被点击了!', event);
}, false); // 第三个参数false表示在冒泡阶段触发(默认)

// 方法2: DOM属性(不推荐，因为会覆盖之前的处理函数)
button.onclick = function(event) {
  console.log('按钮点击!');
};

// 方法3: HTML属性(最不推荐)
// <button id="myButton" onclick="handleClick()">点击我</button>
```

### 事件对象

事件处理函数会接收一个事件对象，包含有关事件的信息。

```javascript
document.getElementById('myButton').addEventListener('click', function(event) {
  // 事件类型
  console.log(event.type); // "click"
  
  // 事件目标
  console.log(event.target); // 触发事件的元素
  console.log(event.currentTarget); // 附加事件处理程序的元素
  
  // 鼠标位置
  console.log(event.clientX, event.clientY); // 相对于视口
  console.log(event.pageX, event.pageY); // 相对于文档
  
  // 键盘信息(键盘事件)
  // console.log(event.key, event.code);
  
  // 阻止默认行为
  event.preventDefault();
  
  // 阻止事件传播
  event.stopPropagation();
});
```

### 事件委托

事件委托利用事件冒泡，在父元素上监听事件，处理子元素的交互。这种方法可以减少事件监听器数量，提升性能。

```javascript
// 不使用事件委托 - 为每个按钮添加事件监听器
document.querySelectorAll('#buttonList button').forEach(button => {
  button.addEventListener('click', function(event) {
    console.log('按钮', button.textContent, '被点击了');
  });
});

// 使用事件委托 - 只在父元素上添加一个监听器
document.getElementById('buttonList').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('按钮', event.target.textContent, '被点击了');
  }
});
```

### 常见事件类型

```javascript
// 鼠标事件
element.addEventListener('click', handleClick); // 单击
element.addEventListener('dblclick', handleDoubleClick); // 双击
element.addEventListener('mousedown', handleMouseDown); // 鼠标按下
element.addEventListener('mouseup', handleMouseUp); // 鼠标释放
element.addEventListener('mousemove', handleMouseMove); // 鼠标移动
element.addEventListener('mouseover', handleMouseOver); // 鼠标进入
element.addEventListener('mouseout', handleMouseOut); // 鼠标离开
element.addEventListener('mouseenter', handleMouseEnter); // 鼠标进入(不冒泡)
element.addEventListener('mouseleave', handleMouseLeave); // 鼠标离开(不冒泡)

// 键盘事件
element.addEventListener('keydown', handleKeyDown); // 键盘按下
element.addEventListener('keyup', handleKeyUp); // 键盘释放
element.addEventListener('keypress', handleKeyPress); // 键盘按下(字符键)

// 表单事件
element.addEventListener('submit', handleSubmit); // 表单提交
element.addEventListener('reset', handleReset); // 表单重置
element.addEventListener('input', handleInput); // 输入
element.addEventListener('change', handleChange); // 改变(完成输入后)
element.addEventListener('focus', handleFocus); // 获取焦点
element.addEventListener('blur', handleBlur); // 失去焦点

// 文档/窗口事件
window.addEventListener('load', handleLoad); // 页面和资源加载完成
document.addEventListener('DOMContentLoaded', handleReady); // DOM解析完成
window.addEventListener('resize', handleResize); // 窗口调整大小
window.addEventListener('scroll', handleScroll); // 滚动
document.addEventListener('visibilitychange', handleVisibility); // 页面可见性变化
```

### 自定义事件

```javascript
// 创建自定义事件
const customEvent = new CustomEvent('userAction', {
  bubbles: true, // 是否冒泡
  cancelable: true, // 是否可取消
  detail: { // 自定义数据
    userId: 123,
    action: 'login'
  }
});

// 分发事件
document.dispatchEvent(customEvent);

// 监听自定义事件
document.addEventListener('userAction', function(event) {
  console.log('用户行为:', event.detail.action);
  console.log('用户ID:', event.detail.userId);
});
```

## 实际应用示例

### 动态表单验证

```javascript
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// 实时验证用户名
username.addEventListener('input', function() {
  if (this.value.length < 5) {
    usernameError.textContent = '用户名至少需要5个字符';
    this.classList.add('error');
  } else {
    usernameError.textContent = '';
    this.classList.remove('error');
  }
});

// 实时验证密码
password.addEventListener('input', function() {
  const value = this.value;
  
  if (value.length < 8) {
    passwordError.textContent = '密码至少需要8个字符';
    this.classList.add('error');
    return;
  }
  
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  
  if (!(hasUpperCase && hasLowerCase && hasNumber)) {
    passwordError.textContent = '密码需要包含大写字母、小写字母和数字';
    this.classList.add('error');
  } else {
    passwordError.textContent = '';
    this.classList.remove('error');
  }
});

// 表单提交验证
form.addEventListener('submit', function(event) {
  let hasError = false;
  
  // 触发所有输入字段的验证
  if (username.value.length < 5) {
    usernameError.textContent = '用户名至少需要5个字符';
    username.classList.add('error');
    hasError = true;
  }
  
  const value = password.value;
  if (value.length < 8 || 
      !(/[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value))) {
    passwordError.textContent = '请输入有效的密码';
    password.classList.add('error');
    hasError = true;
  }
  
  if (hasError) {
    event.preventDefault(); // 阻止表单提交
  }
});
```

### 无限滚动列表

```javascript
// 简单的无限滚动实现
function createInfiniteScroll() {
  const container = document.getElementById('infinite-list');
  let itemCount = 0;
  
  // 添加初始项目
  addItems(20);
  
  // 监听滚动事件
  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
      // 用户即将滚动到底部时加载更多
      addItems(10);
    }
  });
  
  // 添加项目到列表
  function addItems(count) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < count; i++) {
      const item = document.createElement('div');
      item.classList.add('list-item');
      item.textContent = `项目 ${++itemCount}`;
      fragment.appendChild(item);
    }
    
    container.appendChild(fragment);
  }
}

// 使用交叉观察器实现的无限滚动(更现代)
function createInfiniteScrollWithObserver() {
  const container = document.getElementById('infinite-list');
  let itemCount = 0;
  
  // 创建观察器
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // 加载器元素进入视口，加载更多内容
      addItems(10);
    }
  });
  
  // 创建并观察加载器元素
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.textContent = '加载中...';
  container.appendChild(loader);
  observer.observe(loader);
  
  // 添加项目到列表
  function addItems(count) {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < count; i++) {
      const item = document.createElement('div');
      item.classList.add('list-item');
      item.textContent = `项目 ${++itemCount}`;
      fragment.appendChild(item);
    }
    
    // 在加载器之前插入新项目
    container.insertBefore(fragment, loader);
  }
  
  // 添加初始项目
  addItems(20);
}
```

## 最佳实践

### 性能优化

1. **使用事件委托** - 减少事件监听器数量
2. **批量DOM操作** - 使用DocumentFragment或修改DOM前分离节点
3. **防抖和节流** - 限制高频事件处理

```javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 应用防抖于搜索输入
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(function() {
  console.log('搜索:', this.value);
  // 执行搜索操作
}, 300));

// 应用节流于滚动事件
window.addEventListener('scroll', throttle(function() {
  console.log('滚动位置:', window.scrollY);
  // 处理滚动
}, 100));
```

### 安全考虑

1. **避免innerHTML** - 容易导致XSS攻击，优先使用textContent
2. **验证用户输入** - 在展示或处理前过滤和验证
3. **避免eval()** - 永远不要使用eval()执行动态代码

```javascript
// 不安全的代码
element.innerHTML = userInput; // 危险!

// 安全的替代方法
element.textContent = userInput; // 安全

// 如果需要插入HTML，可以使用DOMPurify库
// import DOMPurify from 'dompurify';
// element.innerHTML = DOMPurify.sanitize(userInput);
```

## 总结

DOM操作和事件处理是前端开发的基石。熟练掌握这些技术可以让您构建交互丰富、响应迅速的Web应用程序。关键点包括：

- DOM是网页的编程接口，允许JavaScript访问和修改网页内容
- 现代选择器如querySelector和querySelectorAll使得元素选择更加简单
- 事件委托利用事件冒泡提高性能和维护性
- 合理使用批量DOM操作和防抖/节流技术可以优化性能
- 始终考虑安全问题，特别是处理用户输入时

随着Web应用变得越来越复杂，良好的DOM操作和事件处理实践变得尤为重要。虽然现代框架(如React、Vue等)抽象了许多直接DOM操作，但理解底层原理仍然是成为优秀前端开发者的必要条件。

## 学习资源

- [MDN Web Docs - DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)
- [MDN Web Docs - 事件参考](https://developer.mozilla.org/zh-CN/docs/Web/Events)
- [JavaScript.info - 浏览器：文档、事件、接口](https://zh.javascript.info/ui)
- [DOM Enlightenment - Cody Lindley](http://domenlightenment.com/) 
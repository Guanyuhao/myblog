# JavaScript核心概念

JavaScript是前端开发的核心语言，掌握其基础概念对构建交互式网页应用至关重要。本文将介绍JavaScript的核心概念和常用技术。

## 变量与数据类型

JavaScript有几种基本数据类型：

### 基本数据类型

```javascript
// 数字
let age = 25;
let price = 99.99;

// 字符串
let name = "张三";
let greeting = 'Hello World';
let template = `你好，${name}`; // 模板字符串

// 布尔值
let isActive = true;
let hasPermission = false;

// undefined - 未赋值的变量
let undefinedVar;
console.log(undefinedVar); // undefined

// null - 表示没有值
let emptyValue = null;

// Symbol (ES6) - 唯一标识符
const uniqueId = Symbol('id');
```

### 复杂数据类型

```javascript
// 对象
const person = {
  name: '张三',
  age: 30,
  isEmployed: true,
  skills: ['HTML', 'CSS', 'JavaScript']
};

// 访问对象属性
console.log(person.name); // 张三
console.log(person['age']); // 30

// 数组
const colors = ['红', '绿', '蓝'];
console.log(colors[0]); // 红
colors.push('黄'); // 添加元素
console.log(colors.length); // 4
```

### 变量声明

```javascript
// var - 函数作用域，可重复声明，有变量提升
var x = 10;

// let - 块级作用域，不可重复声明，无变量提升
let y = 20;

// const - 块级作用域，声明常量，必须初始化
const z = 30;
```

## 运算符与表达式

```javascript
// 算术运算符
let sum = 5 + 10; // 加法
let difference = 20 - 5; // 减法
let product = 4 * 5; // 乘法
let quotient = 20 / 4; // 除法
let remainder = 10 % 3; // 取余
let power = 2 ** 3; // 指数 (ES7)

// 赋值运算符
let a = 5;
a += 10; // 等同于 a = a + 10
a -= 3; // 等同于 a = a - 3

// 比较运算符
console.log(5 == '5'); // true (值相等)
console.log(5 === '5'); // false (值和类型都要相等)
console.log(10 > 5); // true
console.log(10 <= 10); // true

// 逻辑运算符
console.log(true && false); // 与操作 - false
console.log(true || false); // 或操作 - true
console.log(!true); // 非操作 - false

// 三元运算符
let status = age >= 18 ? '成年' : '未成年';
```

## 条件语句

```javascript
// if 语句
if (age >= 18) {
  console.log('成年人');
} else if (age >= 13) {
  console.log('青少年');
} else {
  console.log('儿童');
}

// switch 语句
const day = new Date().getDay();
switch (day) {
  case 0:
    console.log('星期日');
    break;
  case 6:
    console.log('星期六');
    break;
  default:
    console.log('工作日');
}
```

## 循环语句

```javascript
// for 循环
for (let i = 0; i < 5; i++) {
  console.log(`第${i+1}次循环`);
}

// while 循环
let count = 0;
while (count < 5) {
  console.log(`计数: ${count}`);
  count++;
}

// do-while 循环
let num = 0;
do {
  console.log(`数字: ${num}`);
  num++;
} while (num < 3);

// for...of 循环 (遍历可迭代对象)
const fruits = ['苹果', '香蕉', '橙子'];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in 循环 (遍历对象属性)
const user = { name: '李四', age: 28, job: '工程师' };
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

## 函数

函数是JavaScript中的一等公民，可以像其他值一样被传递和使用。

### 函数声明

```javascript
// 函数声明
function greet(name) {
  return `你好，${name}！`;
}

console.log(greet('王五')); // 你好，王五！

// 函数表达式
const sayHello = function(name) {
  return `Hello, ${name}!`;
};

// 箭头函数 (ES6)
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 默认参数 (ES6)
function createUser(name, age = 18, active = true) {
  return { name, age, active };
}
```

### 作用域与闭包

```javascript
// 全局作用域
const globalVar = '我是全局变量';

function outer() {
  // 函数作用域
  const outerVar = '外部函数变量';
  
  function inner() {
    // 内部函数可以访问外部函数变量
    const innerVar = '内部函数变量';
    console.log(globalVar); // 我是全局变量
    console.log(outerVar); // 外部函数变量
  }
  
  return inner; // 返回内部函数
}

const closureFunc = outer(); // 闭包
closureFunc(); // 即使outer已执行完毕，内部函数仍可访问outerVar
```

### 回调函数

```javascript
// 回调函数 - 传递函数作为参数
function processUserData(name, callback) {
  // 处理数据...
  const userData = { name, id: Date.now() };
  callback(userData); // 执行回调
}

processUserData('赵六', function(data) {
  console.log('处理完成:', data);
});
```

## 对象与原型

JavaScript是基于原型的面向对象语言。

```javascript
// 对象字面量
const car = {
  brand: '特斯拉',
  model: 'Model 3',
  year: 2022,
  start: function() {
    console.log('启动汽车...');
  },
  // 简写方法 (ES6)
  stop() {
    console.log('停止汽车...');
  }
};

// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayInfo = function() {
  console.log(`我是${this.name}，${this.age}岁`);
};

const person1 = new Person('张三', 30);
person1.sayInfo(); // 我是张三，30岁

// 类 (ES6) - 语法糖，底层仍是原型继承
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name}发出声音`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name}汪汪叫`);
  }
}

const dog = new Dog('小黑');
dog.speak(); // 小黑汪汪叫
```

## 数组方法

JavaScript数组提供了许多强大的方法，便于数据操作：

```javascript
const numbers = [1, 2, 3, 4, 5];

// 遍历数组
numbers.forEach(num => console.log(num));

// 映射数组 - 创建新数组
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 过滤数组 - 基于条件创建新数组
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 查找元素
const found = numbers.find(num => num > 3);
console.log(found); // 4

// 检查是否所有元素都满足条件
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// 检查是否有元素满足条件
const hasBigNumber = numbers.some(num => num > 10);
console.log(hasBigNumber); // false

// 累加器 - 将数组减少为单个值
const sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum); // 15
```

## 错误处理

```javascript
// try...catch 语句
try {
  // 可能抛出错误的代码
  const data = JSON.parse('{"name": "测试"'); // 语法错误
} catch (error) {
  console.error('发生错误:', error.message);
}

// finally 子句 - 无论是否有错误都会执行
try {
  console.log('尝试执行');
  throw new Error('手动抛出错误');
} catch (error) {
  console.error('捕获错误:', error.message);
} finally {
  console.log('清理资源');
}

// 自定义错误
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('用户名不能为空');
  }
  return true;
}
```

## 实际应用示例

### 表单验证

```javascript
function validateForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // 用户名验证
  if (username.length < 3) {
    showError('用户名至少需要3个字符');
    return false;
  }
  
  // 邮箱验证
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError('请输入有效的邮箱地址');
    return false;
  }
  
  // 密码验证
  if (password.length < 8) {
    showError('密码至少需要8个字符');
    return false;
  }
  
  return true; // 验证通过
}

function showError(message) {
  const errorElement = document.getElementById('error-message');
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}
```

### 数据处理

```javascript
// 从API获取用户数据并处理
async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    
    const users = await response.json();
    
    // 数据处理
    const activeUsers = users.filter(user => user.active);
    const userNames = activeUsers.map(user => user.name);
    
    // 显示结果
    displayUsers(userNames);
  } catch (error) {
    console.error('获取用户失败:', error);
    showErrorMessage('无法加载用户数据');
  }
}

function displayUsers(names) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  
  names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    userList.appendChild(li);
  });
}
```

## 总结

JavaScript是一门灵活而强大的编程语言，掌握其核心概念对于前端开发至关重要。从变量和数据类型到函数、对象和原型，再到数组方法和错误处理，这些基础构成了编写高效、可维护的JavaScript代码的基石。

随着对这些基础概念的掌握，您可以进一步探索更高级的主题，如异步编程、模块化和设计模式，这些将在后续文章中详细介绍。

## 进一步学习资源

- [MDN JavaScript指南](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://zh.javascript.info/)
- [《JavaScript高级程序设计》](https://book.douban.com/subject/35175321/)
- [ES6标准入门](https://es6.ruanyifeng.com/) 
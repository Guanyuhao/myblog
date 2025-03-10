# 现代JavaScript特性

随着ECMAScript标准的不断发展，JavaScript语言引入了许多现代特性，这些特性大大提高了开发效率和代码质量。本文将介绍ES6(ECMAScript 2015)及后续版本中的关键特性和它们的实际应用。

## ES6(ECMAScript 2015)核心特性

ES6是JavaScript的一次重大更新，引入了许多新语法和功能。

### 块级作用域与变量声明

```javascript
// let - 块级作用域变量
{
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // 错误：x未定义

// const - 常量声明
const PI = 3.14159;
// PI = 3.14; // 错误：不能重新赋值给常量
```

### 箭头函数

```javascript
// 传统函数
function add(a, b) {
  return a + b;
}

// 箭头函数
const add = (a, b) => a + b;

// 多行箭头函数
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};

// 没有参数时
const sayHello = () => console.log('Hello!');

// 单个参数时可省略括号
const double = x => x * 2;

// this绑定 - 箭头函数不会创建自己的this
const counter = {
  count: 0,
  // 传统方法中的this指向调用对象
  increase: function() {
    this.count++;
  },
  // 箭头函数中的this继承自外部作用域
  increaseArrow: () => {
    this.count++; // 这里的this不是counter对象
  }
};
```

### 模板字符串

```javascript
const name = '张三';
const age = 30;

// 传统字符串拼接
console.log('我叫' + name + '，今年' + age + '岁。');

// 模板字符串
console.log(`我叫${name}，今年${age}岁。`);

// 多行字符串
const message = `
  尊敬的${name}：
  
  感谢您使用我们的服务。
  您的账户信息如下：
  - 年龄：${age}
  - 会员状态：${age > 25 ? '高级会员' : '普通会员'}
`;
```

### 解构赋值

```javascript
// 数组解构
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// 对象解构
const person = {
  name: '李四',
  age: 28,
  location: {
    city: '上海',
    country: '中国'
  }
};

const { name, age, location: { city } } = person;
console.log(name); // 李四
console.log(city); // 上海

// 函数参数解构
function printUserInfo({ name, age, job = '未知' }) {
  console.log(`${name}, ${age}岁, 职业: ${job}`);
}

printUserInfo({ name: '王五', age: 32 });
```

### 默认参数与剩余参数

```javascript
// 默认参数
function createUser(name, age = 18, role = 'user') {
  return { name, age, role };
}

console.log(createUser('张三')); // {name: '张三', age: 18, role: 'user'}

// 剩余参数
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### 展开运算符

```javascript
// 数组展开
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 复制数组
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] (不受影响)

// 对象展开
const defaults = { theme: 'light', fontSize: 16 };
const userSettings = { fontSize: 18, showSidebar: true };
const mergedSettings = { ...defaults, ...userSettings };
console.log(mergedSettings);
// { theme: 'light', fontSize: 18, showSidebar: true }
```

### 类语法

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // 实例方法
  sayHello() {
    console.log(`你好，我是${this.name}`);
  }
  
  // 静态方法
  static createAnonymous() {
    return new Person('匿名用户', 0);
  }
  
  // getter
  get info() {
    return `${this.name}, ${this.age}岁`;
  }
  
  // setter
  set info(value) {
    [this.name, this.age] = value.split(',');
  }
}

// 继承
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // 调用父类构造函数
    this.position = position;
  }
  
  // 重写方法
  sayHello() {
    super.sayHello(); // 调用父类方法
    console.log(`我的职位是${this.position}`);
  }
}

const employee = new Employee('李四', 30, '前端工程师');
employee.sayHello();
```

### Promise与异步编程

```javascript
// 创建Promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      if (url.includes('success')) {
        resolve({ data: 'Success data', status: 200 });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

// 使用Promise
fetchData('https://api.example.com/success')
  .then(response => {
    console.log('Data:', response.data);
    return response.status;
  })
  .then(status => {
    console.log('Status:', status);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Request completed');
  });

// Promise链
function processData(rawData) {
  return new Promise(resolve => {
    setTimeout(() => resolve(rawData.toUpperCase()), 500);
  });
}

fetchData('https://api.example.com/success')
  .then(response => response.data)
  .then(data => processData(data))
  .then(processed => console.log('Processed:', processed));

// Promise.all - 并行执行多个Promise
Promise.all([
  fetchData('https://api.example.com/success'),
  fetchData('https://api.example.com/success')
])
  .then(([response1, response2]) => {
    console.log('All requests completed');
  })
  .catch(error => {
    console.error('At least one request failed:', error);
  });
```

### 模块系统

```javascript
// 导出 (module.js)
export const PI = 3.14159;

export function square(x) {
  return x * x;
}

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get area() {
    return PI * square(this.radius);
  }
}

// 默认导出
export default function calculateArea(radius) {
  return PI * radius * radius;
}

// 导入 (app.js)
import calculateArea, { PI, square, Circle } from './module.js';

console.log(PI); // 3.14159
console.log(square(4)); // 16
const circle = new Circle(5);
console.log(circle.area); // 78.53975
```

## ES2016及之后的特性

### ES2016 (ES7)

```javascript
// Array.prototype.includes
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false

// 指数运算符
console.log(2 ** 3); // 8 (2的3次方)
```

### ES2017 (ES8)

```javascript
// async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// 使用async函数
async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log('User:', user.name);
  } catch (error) {
    console.error('Could not display user');
  }
}

// Object.entries
const person = { name: '张三', age: 30, job: '工程师' };
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Object.values
console.log(Object.values(person)); // ['张三', 30, '工程师']

// String padding
console.log('42'.padStart(5, '0')); // 00042
console.log('Hello'.padEnd(10, '!')); // Hello!!!!!
```

### ES2018 (ES9)

```javascript
// Rest/Spread for objects
const { name, age, ...rest } = person;
console.log(rest); // { job: '工程师' }

// Promise.finally
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));

// Asynchronous iteration
async function processItems(items) {
  for await (const item of items) {
    // 处理每个item
  }
}
```

### ES2019 (ES10)

```javascript
// Array.prototype.flat
const nestedArray = [1, [2, [3, 4]]];
console.log(nestedArray.flat()); // [1, 2, [3, 4]]
console.log(nestedArray.flat(2)); // [1, 2, 3, 4]

// Array.prototype.flatMap
const sentences = ['Hello world', 'How are you'];
const words = sentences.flatMap(sentence => sentence.split(' '));
console.log(words); // ['Hello', 'world', 'How', 'are', 'you']

// Object.fromEntries
const entries = [['name', '李四'], ['age', 28]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: '李四', age: 28 }

// String.prototype.trimStart/trimEnd
const greeting = '   Hello world   ';
console.log(greeting.trimStart()); // 'Hello world   '
console.log(greeting.trimEnd()); // '   Hello world'
```

### ES2020 (ES11)

```javascript
// Optional Chaining
const user = {
  name: '王五',
  address: {
    city: '北京'
  }
};

// 传统访问嵌套属性
const city = user && user.address && user.address.city;

// 使用可选链
const city2 = user?.address?.city;
console.log(city2); // 北京

// 空值合并运算符
const count = null;
const defaultCount = count ?? 0; // 如果count为null或undefined，则使用0
console.log(defaultCount); // 0

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('成功'),
  Promise.reject('失败')
]).then(results => {
  console.log(results);
  // [
  //   { status: 'fulfilled', value: '成功' },
  //   { status: 'rejected', reason: '失败' }
  // ]
});

// BigInt
const bigNumber = 9007199254740991n; // 添加n后缀
console.log(bigNumber + 1n); // 9007199254740992n
```

### ES2021 (ES12)及以后

```javascript
// String.prototype.replaceAll
const text = 'hello world, hello universe';
console.log(text.replaceAll('hello', 'hi')); // hi world, hi universe

// Promise.any
Promise.any([
  Promise.reject('失败1'),
  Promise.resolve('成功'),
  Promise.reject('失败2')
]).then(result => {
  console.log(result); // 成功 (返回第一个成功的结果)
});

// 逻辑赋值运算符
let x = 0;
x ||= 10; // 等同于 x = x || 10
console.log(x); // 10

let y = 5;
y &&= y * 2; // 等同于 y = y && y * 2
console.log(y); // 10

let z;
z ??= 3; // 等同于 z = z ?? 3
console.log(z); // 3
```

## 实际应用案例

### 数据处理与转换

```javascript
// 用户数据处理
const users = [
  { id: 1, name: '张三', age: 28, active: true },
  { id: 2, name: '李四', age: 32, active: false },
  { id: 3, name: '王五', age: 24, active: true }
];

// 使用现代特性处理数据
const processUsers = (users) => {
  // 筛选活跃用户
  const activeUsers = users.filter(({active}) => active);
  
  // 提取并转换数据
  return activeUsers.map(({id, name, age}) => ({
    userId: id,
    displayName: name,
    isAdult: age >= 18,
    greeting: `你好，我是${name}`
  }));
};

console.log(processUsers(users));
```

### 异步数据获取

```javascript
// 使用async/await和解构赋值简化API调用
async function fetchUserPosts(userId) {
  try {
    // 并行获取用户和帖子
    const [userResponse, postsResponse] = await Promise.all([
      fetch(`https://api.example.com/users/${userId}`),
      fetch(`https://api.example.com/users/${userId}/posts`)
    ]);
    
    // 检查响应并解析JSON
    if (!userResponse.ok || !postsResponse.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const [user, posts] = await Promise.all([
      userResponse.json(),
      postsResponse.json()
    ]);
    
    // 使用对象展开合并数据
    return {
      ...user,
      posts
    };
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// 使用可选链和空值合并提高代码健壮性
async function displayUserProfile(userId) {
  const userData = await fetchUserPosts(userId);
  
  // 安全访问嵌套属性
  const userName = userData?.name ?? '未知用户';
  const postCount = userData?.posts?.length ?? 0;
  
  console.log(`用户 ${userName} 有 ${postCount} 篇文章`);
  
  // 使用解构和展开处理文章
  if (postCount > 0) {
    const { posts } = userData;
    const recentPosts = posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .map(({ title, date }) => ({
        title,
        formattedDate: new Date(date).toLocaleDateString()
      }));
      
    console.log('最近文章:', recentPosts);
  }
}
```

### 模块化应用架构

```javascript
// api.js - API服务模块
export async function get(endpoint) {
  const response = await fetch(`https://api.example.com/${endpoint}`);
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
}

export async function post(endpoint, data) {
  const response = await fetch(`https://api.example.com/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
}

// userService.js - 用户服务模块
import { get, post } from './api.js';

export async function getUser(id) {
  return get(`users/${id}`);
}

export async function updateUserProfile(id, profileData) {
  return post(`users/${id}/profile`, profileData);
}

// app.js - 主应用
import { getUser, updateUserProfile } from './userService.js';

async function init() {
  try {
    const user = await getUser(123);
    
    // 处理用户数据...
    
    const result = await updateUserProfile(123, {
      name: 'New Name',
      bio: 'Updated bio'
    });
    
    console.log('Profile updated:', result);
  } catch (error) {
    console.error('Application error:', error);
  }
}

init();
```

## 使用现代JavaScript的最佳实践

1. **使用最新语法但考虑兼容性**
   - 利用Babel等工具转译代码以支持旧浏览器
   - 根据目标浏览器确定使用哪些特性

2. **避免过度解构**
   - 仅解构需要的属性，避免性能损失

3. **正确使用async/await**
   - 始终处理异常(使用try/catch)
   - 利用Promise.all进行并行请求
   - 避免在循环中使用await(考虑map + Promise.all)

4. **拥抱函数式编程**
   - 使用map、filter、reduce等高阶函数
   - 保持函数纯净，避免副作用
   - 使用不可变数据结构

5. **模块化开发**
   - 保持模块小而专注
   - 明确导出API
   - 考虑使用命名导出而非默认导出以提高可维护性

## 总结

现代JavaScript特性极大地提升了开发效率和代码质量。从ES6开始的各种新特性使JavaScript成为一门更加强大和表达力丰富的语言。箭头函数、解构赋值、Promise/async/await等特性让代码更简洁、可读性更强，而模块系统则提供了更好的代码组织方式。

掌握这些现代特性将帮助你编写更加简洁、可维护和高效的JavaScript代码。随着JavaScript语言的不断发展，保持学习新特性和最佳实践的习惯对于前端开发者来说至关重要。

## 学习资源

- [MDN Web文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) - 权威的JavaScript参考资料
- [ES6标准入门](https://es6.ruanyifeng.com/) - 阮一峰的ES6教程
- [JavaScript Info](https://zh.javascript.info/) - 现代JavaScript教程
- [Babel文档](https://babeljs.io/docs/) - JavaScript编译器，了解兼容性方案 
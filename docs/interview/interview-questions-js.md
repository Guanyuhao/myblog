---
title: JavaScript 面试题集
sidebar: auto
prev: /interview
next: /interview/interview-questions-algorithm
---

# JavaScript 面试题集

::: tip 提示
本文档收集了10道JavaScript面试题，难度从初级到高级，涵盖闭包、作用域、事件循环、异步编程、数组和对象操作等核心概念。
:::

<div class="navigation-links">
  <a href="/interview/">返回面试题目录</a>
</div>

## 目录
- [初级题目](#初级题目)
  - [题目1: 变量提升与暂时性死区](#题目1-变量提升与暂时性死区)
  - [题目2: 数组去重](#题目2-数组去重)
  - [题目3: this 指向问题](#题目3-this-指向问题)
- [中级题目](#中级题目)
  - [题目4: 闭包实现私有变量](#题目4-闭包实现私有变量)
  - [题目5: Promise 链和错误处理](#题目5-promise-链和错误处理)
  - [题目6: 事件循环与宏任务/微任务](#题目6-事件循环与宏任务微任务)
- [高级题目](#高级题目)
  - [题目7: 实现深拷贝函数](#题目7-实现深拷贝函数)
  - [题目8: 实现防抖(debounce)和节流(throttle)函数](#题目8-实现防抖debounce和节流throttle函数)
  - [题目9: 实现简化版的 Promise](#题目9-实现简化版的-promise)
  - [题目10: 实现柯里化(curry)函数](#题目10-实现柯里化curry函数)

## 初级题目

### 题目1: 变量提升与暂时性死区

**题目描述**:  
解释以下代码的输出结果，并说明原因。

```javascript
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```

**示例输出**:
```
undefined
Uncaught ReferenceError: Cannot access 'b' before initialization
```

**考察点**:
- var 和 let 声明的变量提升机制差异
- 暂时性死区(TDZ)概念理解
- JavaScript 变量声明的生命周期

**解析**:
var 声明的变量 a 会被提升，但初始值为 undefined；而 let 声明的变量 b 也会提升，但会存在暂时性死区，在声明前访问会抛出 ReferenceError。这是 ES6 对变量声明的安全性增强。

**优化思路**:
使用 let 和 const 代替 var 可以避免变量提升带来的问题，提高代码的可预测性和可维护性。

### 题目2: 数组去重

**题目描述**:  
实现一个函数，接收一个数组参数，返回去除重复元素后的新数组。

**示例输入输出**:
```javascript
// 输入
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// 输出
[1, 2, 3, 4, 5]
```

**代码示例**:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 测试
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
```

**考察点**:
- 数组操作
- Set 数据结构的应用
- ES6 扩展运算符

**优化思路**:
- 使用 Set 是最高效的方法，时间复杂度为 O(n)
- 对于需要兼容旧浏览器的情况，可以使用 filter 方法和 indexOf 实现，但时间复杂度会增加到 O(n²)

### 题目3: this 指向问题

**题目描述**:  
预测下面代码的输出结果，并解释 this 的指向。

```javascript
const obj = {
  name: 'Object',
  sayName: function() {
    console.log(this.name);
  },
  child: {
    name: 'Child',
    sayName: function() {
      console.log(this.name);
    }
  }
};

obj.sayName();
obj.child.sayName();
const fn = obj.sayName;
fn();
```

**示例输出**:
```
"Object"
"Child"
undefined (或者浏览器中可能是 window 的 name 属性值)
```

**考察点**:
- this 的动态绑定机制
- 函数调用方式对 this 的影响
- 函数上下文

**解析**:
在 JavaScript 中，this 的值取决于函数的调用方式。对于 obj.sayName()，this 指向 obj；对于 obj.child.sayName()，this 指向 obj.child；而对于独立调用的 fn()，非严格模式下 this 指向全局对象（浏览器中为 window），严格模式下为 undefined。

**优化思路**:
- 使用箭头函数可以保持 this 的词法作用域
- 使用 Function.prototype.bind() 显式绑定 this
- 使用 call 或 apply 方法临时改变 this 指向

## 中级题目

### 题目4: 闭包实现私有变量

**题目描述**:  
实现一个计数器函数，每次调用返回递增的数值。计数器的初始值和递增步长都应该是私有变量，不能被外部直接访问或修改。

**示例输入输出**:
```javascript
const counter = createCounter(10, 2);
console.log(counter()); // 10
console.log(counter()); // 12
console.log(counter()); // 14
```

**代码示例**:
```javascript
function createCounter(initialValue = 0, step = 1) {
  let count = initialValue;
  
  return function() {
    const result = count;
    count += step;
    return result;
  };
}

// 测试
const counter = createCounter(10, 2);
console.log(counter()); // 10
console.log(counter()); // 12
console.log(counter()); // 14
```

**考察点**:
- 闭包概念和应用
- 函数作为一等公民
- 私有变量的实现方式
- 作用域链

**优化思路**:
- 可以扩展为支持多种操作的计数器，如重置、设置新值等
- 使用 ES6 的 class 和 WeakMap 可以实现更优雅的私有变量
- 考虑内存泄漏问题，确保不需要的闭包能被垃圾回收

### 题目5: Promise 链和错误处理

**题目描述**:  
实现一个函数，接收一个数字参数 n，创建一个 Promise 链，每个 Promise 在解决前等待 1 秒，然后返回当前数字加 1。如果参数 n 小于 0，则 Promise 应该被拒绝。

**示例输入输出**:
```javascript
// 输入
chainPromises(1).then(console.log);
// 在约3秒后输出: 4

// 输入
chainPromises(-1).catch(console.error);
// 输出: "Invalid number: -1"
```

**代码示例**:
```javascript
function chainPromises(n) {
  if (n < 0) {
    return Promise.reject(`Invalid number: ${n}`);
  }
  
  return new Promise(resolve => {
    setTimeout(() => resolve(n + 1), 1000);
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => resolve(result + 1), 1000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => resolve(result + 1), 1000);
    });
  });
}

// 测试
chainPromises(1)
  .then(result => console.log(result))
  .catch(error => console.error(error));

chainPromises(-1)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

**考察点**:
- Promise 基本用法
- Promise 链式调用
- 异步错误处理
- setTimeout 与 Promise 结合使用

**优化思路**:
- 使用更动态的方法创建链式调用，如循环或递归
- 可以引入 Promise.all 或 Promise.race 处理多个异步操作
- 考虑使用 async/await 简化代码

### 题目6: 事件循环与宏任务/微任务

**题目描述**:  
预测以下代码的输出顺序，并解释事件循环、宏任务和微任务的关系。

```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('4');
  setTimeout(() => {
    console.log('5');
  }, 0);
});

console.log('6');
```

**示例输出**:
```
1
6
4
2
3
5
```

**考察点**:
- JavaScript 事件循环机制
- 宏任务(macro-task)和微任务(micro-task)的执行顺序
- Promise 和 setTimeout 的任务队列优先级

**解析**:
JavaScript的事件循环遵循先执行同步代码，然后执行微任务队列，最后执行宏任务队列的规则。上述代码中，1和6是同步代码；4是第一个微任务；2是第一个宏任务；3是宏任务中的微任务；5是微任务中的宏任务。

**优化思路**:
- 合理安排任务的优先级，避免事件循环阻塞
- 了解不同浏览器实现差异，确保代码在各平台表现一致
- 使用 queueMicrotask API 可以更明确地添加微任务

## 高级题目

### 题目7: 实现深拷贝函数

**题目描述**:  
实现一个深拷贝函数，能够正确处理对象、数组、基本类型、日期、正则表达式等数据类型，同时要处理循环引用的问题。

**示例输入输出**:
```javascript
// 输入
const obj = { 
  a: 1, 
  b: { c: 2 }, 
  d: [1, 2, 3],
  e: new Date(),
  f: /test/g
};
obj.circular = obj; // 循环引用
const copy = deepClone(obj);

// 输出
// copy 应该是 obj 的深拷贝，且 copy.circular 应指向 copy 自身
```

**代码示例**:
```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // 处理循环引用
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  
  let clone;
  
  // 处理日期
  if (obj instanceof Date) {
    clone = new Date(obj);
    hash.set(obj, clone);
    return clone;
  }
  
  // 处理正则表达式
  if (obj instanceof RegExp) {
    clone = new RegExp(obj.source, obj.flags);
    hash.set(obj, clone);
    return clone;
  }
  
  // 处理数组和对象
  clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);
  
  Object.keys(obj).forEach(key => {
    clone[key] = deepClone(obj[key], hash);
  });
  
  return clone;
}

// 测试
const obj = { 
  a: 1, 
  b: { c: 2 }, 
  d: [1, 2, 3],
  e: new Date(),
  f: /test/g
};
obj.circular = obj; // 循环引用

const copy = deepClone(obj);
console.log(copy);
console.log(copy.circular === copy); // true
console.log(copy.circular === obj); // false
```

**考察点**:
- 深拷贝和浅拷贝的区别
- WeakMap 的应用
- 特殊对象类型的处理
- 循环引用问题解决
- 递归和对象遍历

**优化思路**:
- 使用 Reflect.ownKeys 代替 Object.keys 可以处理 Symbol 属性
- 处理更多特殊类型，如 Map、Set、Error 等
- 考虑使用迭代而非递归，避免栈溢出
- 性能优化：对于简单对象可以尝试使用 JSON.parse(JSON.stringify())

### 题目8: 实现防抖(debounce)和节流(throttle)函数

**题目描述**:  
分别实现防抖(debounce)和节流(throttle)函数，并描述它们的使用场景和区别。

**示例输入输出**:
```javascript
// 防抖：多次触发事件后，只在最后一次触发事件的n毫秒后执行函数
const debouncedFn = debounce(function() {
  console.log('Debounced!');
}, 300);

// 节流：每隔n毫秒最多执行一次函数
const throttledFn = throttle(function() {
  console.log('Throttled!');
}, 300);

// 多次快速调用
for (let i = 0; i < 5; i++) {
  debouncedFn(); // 最终只输出一次 "Debounced!"
  throttledFn();  // 可能输出1-2次 "Throttled!"，取决于循环执行的总时间
}
```

**代码示例**:
```javascript
// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// 节流函数
function throttle(fn, interval) {
  let lastExecTime = 0;
  
  return function(...args) {
    const context = this;
    const now = Date.now();
    
    if (now - lastExecTime >= interval) {
      fn.apply(context, args);
      lastExecTime = now;
    }
  };
}

// 测试防抖
const debouncedLog = debounce(() => console.log('Debounced!'), 300);
// 快速连续调用，300ms后只会输出一次
debouncedLog();
debouncedLog();
debouncedLog();

// 测试节流
const throttledLog = throttle(() => console.log('Throttled!'), 300);
// 快速连续调用，只有第一次会立即执行，之后至少要间隔300ms才会再次执行
throttledLog();
throttledLog();
throttledLog();
```

**考察点**:
- 高阶函数的实现和应用
- JavaScript 中的闭包
- 事件处理优化
- this 指向和参数传递
- 定时器的使用

**优化思路**:
- 为防抖函数添加立即执行选项
- 为节流函数添加前置/后置执行控制
- 考虑使用 requestAnimationFrame 替代 setTimeout 优化性能
- 添加取消功能，允许外部清除定时器

### 题目9: 实现简化版的 Promise

**题目描述**:  
实现一个简化版的 Promise，支持基本的 .then() 链式调用和错误处理，遵循 Promise/A+ 规范的核心概念。

**代码示例**:
```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
      }
    };
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    // 处理可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    
    // 创建新的Promise用于链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      
      if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    
    return promise2;
  }
  
  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected'));
    }
    
    if (x && (typeof x === 'object' || typeof x === 'function')) {
      let used = false;
      
      try {
        const then = x.then;
        
        if (typeof then === 'function') {
          then.call(
            x,
            value => {
              if (used) return;
              used = true;
              this.resolvePromise(promise2, value, resolve, reject);
            },
            reason => {
              if (used) return;
              used = true;
              reject(reason);
            }
          );
        } else {
          resolve(x);
        }
      } catch (error) {
        if (used) return;
        used = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }
  
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
}

// 测试
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise
  .then(value => {
    console.log(value); // "Success!"
    return 'Next value';
  })
  .then(value => {
    console.log(value); // "Next value"
    throw new Error('Something went wrong');
  })
  .catch(error => {
    console.error(error.message); // "Something went wrong"
  });
```

**考察点**:
- Promise A+ 规范理解
- 异步编程机制
- 链式调用设计
- 错误处理机制
- 宏任务与微任务

**优化思路**:
- 添加 Promise.all、Promise.race 等静态方法
- 使用 microtask 队列替代 setTimeout
- 增加更完善的类型检查和错误处理
- 考虑添加 finally 方法

### 题目10: 实现柯里化(curry)函数

**题目描述**:  
实现一个通用的函数柯里化方法，使其能够将多参数函数转换为一系列单参数函数。

**示例输入输出**:
```javascript
// 输入
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);

// 输出
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
```

**代码示例**:
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

// 测试
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
```

**考察点**:
- 函数式编程概念
- 递归和闭包
- 高阶函数
- 参数收集和传递
- 函数上下文(this)

**优化思路**:
- 增加对函数参数长度不确定的支持
- 添加占位符功能，允许参数部分应用
- 优化递归调用，考虑尾递归优化
- 添加性能优化，如记忆化(memoization)

## 总结

以上10道JavaScript面试题涵盖了从基础到高级的核心概念，包括:
- 变量作用域和提升
- this 指向与执行上下文
- 闭包与高阶函数
- 异步编程模型
- Promise 与事件循环
- 函数式编程技术
- 深浅拷贝
- 性能优化技巧

通过深入理解和掌握这些概念，能够帮助你在面试中展示扎实的 JavaScript 功底和解决问题的能力。

## 额外高频面试题

### 题目11: 原型链与继承

**题目描述**:  
请解释 JavaScript 中的原型链和继承机制，并实现一个基于原型的继承示例。

**代码示例**:
```javascript
// ES5 方式实现继承
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  // 调用父类构造函数
  Animal.call(this, name);
  this.breed = breed;
}

// 设置原型链
Dog.prototype = Object.create(Animal.prototype);
// 修复构造函数指向
Dog.prototype.constructor = Dog;

// 重写父类方法
Dog.prototype.speak = function() {
  console.log(`${this.name} barks. It's a ${this.breed}.`);
};

// 添加子类特有方法
Dog.prototype.fetch = function() {
  console.log(`${this.name} fetches the ball.`);
};

// ES6 方式实现相同的继承
class AnimalES6 {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class DogES6 extends AnimalES6 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks. It's a ${this.breed}.`);
  }
  
  fetch() {
    console.log(`${this.name} fetches the ball.`);
  }
}
```

**考察点**:
- 原型链工作机制
- 构造函数和实例关系
- ES5 vs ES6 继承方式
- `__proto__` 和 prototype 区别
- 方法重写与多态

**解析**:
JavaScript 通过原型链实现继承。每个对象都有一个内部链接指向另一个对象（其原型），该原型对象也有自己的原型，以此类推，形成原型链，直到链上对象的原型为 null。当尝试访问对象的属性时，JavaScript 引擎先查找对象本身，若没找到则沿着原型链向上查找。

ES6 的 class 语法在底层仍然使用原型继承，但提供了更清晰的语法和一些额外功能，如 super 调用。

**优化思路**:
- 使用 Object.setPrototypeOf 代替直接修改 __proto__
- 使用组合而非继承来重用代码
- 注意避免原型链过长影响性能

### 题目12: 事件委托与事件机制

**题目描述**:  
解释事件委托的概念和优势，并实现一个事件委托的示例，处理动态添加的元素。

**代码示例**:
```javascript
// HTML 结构
// <ul id="todo-list">
//   <li>Task 1 <button class="delete">×</button></li>
//   <li>Task 2 <button class="delete">×</button></li>
// </ul>
// <button id="add-task">Add Task</button>

document.addEventListener('DOMContentLoaded', function() {
  const todoList = document.getElementById('todo-list');
  const addTaskButton = document.getElementById('add-task');
  let taskCount = 2;
  
  // 使用事件委托处理所有删除按钮的点击
  todoList.addEventListener('click', function(e) {
    // 检查点击的是否是删除按钮
    if (e.target.classList.contains('delete')) {
      // 找到包含此按钮的 li 元素并移除
      const listItem = e.target.closest('li');
      if (listItem) {
        listItem.remove();
      }
    }
  });
  
  // 添加新任务
  addTaskButton.addEventListener('click', function() {
    taskCount++;
    const newTask = document.createElement('li');
    newTask.innerHTML = `Task ${taskCount} <button class="delete">×</button>`;
    todoList.appendChild(newTask);
  });
});
```

**考察点**:
- 事件冒泡与捕获机制
- 事件委托的实现和优势
- DOM 操作与性能优化
- 事件对象的使用

**解析**:
事件委托（Event Delegation）利用事件冒泡机制，在父元素上设置一个事件监听器来管理所有子元素的事件。这种方法的主要优势包括：
1. 减少事件监听器的数量，提高性能
2. 自动处理动态添加的元素
3. 降低内存占用
4. 简化代码，避免为每个子元素单独添加事件

**优化思路**:
- 使用 closest() 方法精确定位目标元素
- 添加更精细的条件检查避免不必要的事件处理
- 考虑使用 dataset 属性传递额外数据
- 实现事件委托时考虑可访问性

### 题目13: JavaScript 垃圾回收机制

**题目描述**:  
解释 JavaScript 中的垃圾回收机制，并讨论常见的内存泄漏情况及如何避免。

**代码示例**:
```javascript
// 内存泄漏示例与解决方案

// 1. 全局变量泄漏
function leakGlobal() {
  leakedVariable = 'I am leaking'; // 没有声明，成为全局变量
}
// 解决方案: 使用严格模式并正确声明变量
'use strict';
function noLeak() {
  let properVariable = 'Properly scoped';
}

// 2. 闭包导致的泄漏
function createLeakyFunction() {
  const hugeData = new Array(1000000).fill('potentially large data');
  
  return function() {
    // 引用了外部作用域的 hugeData，
    // 即使只使用了一次，hugeData 也不会被回收
    console.log(hugeData[0]);
  };
}
// 解决方案: 只保留需要的数据
function createEfficientFunction() {
  const hugeData = new Array(1000000).fill('potentially large data');
  const firstItem = hugeData[0]; // 只保留需要的值
  
  return function() {
    console.log(firstItem);
  };
}

// 3. 事件监听器未移除
function setupEvent() {
  const element = document.getElementById('button');
  const hugeData = new Array(1000000).fill('data');
  
  element.addEventListener('click', function() {
    console.log(hugeData.length);
  });
}
// 解决方案: 移除不再需要的事件监听器
function setupEventProperly() {
  const element = document.getElementById('button');
  const hugeData = new Array(1000000).fill('data');
  
  const handleClick = function() {
    console.log(hugeData.length);
  };
  
  element.addEventListener('click', handleClick);
  
  // 当不再需要时
  return function cleanup() {
    element.removeEventListener('click', handleClick);
  };
}
```

**考察点**:
- 引用计数和标记清除算法
- 内存生命周期
- 常见的内存泄漏模式
- 垃圾回收优化技巧

**解析**:
JavaScript 引擎使用自动垃圾回收机制管理内存。主要算法包括：
1. **标记清除**：定期标记所有可访问的对象，然后清除未标记的对象
2. **引用计数**：跟踪每个对象的引用数量，当引用数为零时回收对象

常见内存泄漏情况包括：
- 意外的全局变量
- 闭包中保留的大型对象引用
- 未移除的事件监听器
- 定时器和回调未清理
- DOM 引用脱离文档后未清除
- 循环引用（尤其在旧版IE中）

**优化思路**:
- 使用 Chrome DevTools Memory 分析内存使用
- 及时清理不再使用的定时器和事件监听器
- 避免保留对大型数据结构的闭包引用
- 使用弱引用（WeakMap、WeakSet）存储对象引用

### 题目14: ES 模块与 CommonJS 对比

**题目描述**:  
比较 ES 模块和 CommonJS 模块系统的异同，并解释各自的使用场景和优缺点。

**代码示例**:
```javascript
// CommonJS 模块示例
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract,
  PI: 3.14159
};

// 使用 CommonJS 模块
const math = require('./math');
console.log(math.add(5, 3)); // 8

// 解构导入
const { add, PI } = require('./math');
console.log(add(PI, 1)); // 4.14159

// ES 模块示例
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

export default {
  add,
  subtract,
  PI
};

// 使用 ES 模块
import { add, PI } from './math.js';
console.log(add(5, 3)); // 8

// 导入默认导出
import math from './math.js';
console.log(math.PI); // 3.14159

// 导入所有导出为一个对象
import * as mathModule from './math.js';
console.log(mathModule.subtract(10, 5)); // 5
```

**考察点**:
- 模块化机制的演进
- 静态与动态导入
- 模块作用域
- 模块解析过程
- 浏览器与Node.js环境差异

**解析**:
**CommonJS**:
- 同步加载模块
- 模块在运行时解析
- 导出是值的副本（浅拷贝）
- 主要用于服务器端 (Node.js)
- 支持动态导入

**ES 模块**:
- 默认异步加载模块
- 静态解析（编译时确定导入导出）
- 导出是绑定引用（实时连接）
- 同时支持浏览器和Node.js
- 支持静态分析和树摇
- 默认严格模式

**优化思路**:
- 使用动态导入 `import()` 优化加载性能
- 使用构建工具(Webpack, Rollup)进行代码分割和树摇
- 在 Node.js 中使用 ES Modules 时注意文件扩展名
- 利用静态导入特性进行代码优化

### 题目15: Web 安全与 XSS 防御

**题目描述**:  
解释跨站脚本攻击(XSS)的工作原理，并实现安全的数据渲染和用户输入处理函数。

**代码示例**:
```javascript
// 不安全的 HTML 渲染
function unsafeRender(userInput) {
  // 危险: 直接将用户输入插入 DOM
  document.getElementById('output').innerHTML = userInput;
}

// 安全的 HTML 渲染
function safeRender(userInput) {
  // 对用户输入进行转义
  const escaped = escapeHTML(userInput);
  document.getElementById('output').innerHTML = escaped;
}

// HTML 转义函数
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 安全的 DOM API 使用
function safeDOMMethod(userInput) {
  // 使用 textContent 而不是 innerHTML
  document.getElementById('output').textContent = userInput;
}

// 使用 DOMPurify 库净化 HTML
function sanitizeHTML(userInput) {
  // 假设已引入 DOMPurify 库
  const clean = DOMPurify.sanitize(userInput);
  document.getElementById('output').innerHTML = clean;
}

// 处理 URL 参数
function safeURL(url) {
  // 验证 URL 是否合法
  try {
    const parsedURL = new URL(url);
    // 只允许特定协议
    if (['http:', 'https:'].includes(parsedURL.protocol)) {
      return url;
    }
    throw new Error('不支持的URL协议');
  } catch (e) {
    console.error('无效的URL:', e);
    return '#'; // 返回安全的默认值
  }
}

// 防止 JSON 注入
function safeJSONParse(jsonString) {
  try {
    // 使用 JSON.parse 而不是 eval
    return JSON.parse(jsonString);
  } catch (e) {
    console.error('无效的JSON字符串:', e);
    return null;
  }
}
```

**考察点**:
- XSS 攻击类型（存储型、反射型、DOM型）
- 安全的 DOM API 使用
- 内容安全策略(CSP)
- 输入验证与过滤
- CSRF 与 XSS 的关系

**解析**:
跨站脚本攻击(XSS)允许攻击者将恶意代码注入到网页中，当其他用户浏览该页面时执行。防御 XSS 的主要方法包括：

1. **输入验证和过滤**：验证用户输入符合预期格式
2. **输出编码**：将特殊字符转换为对应的 HTML 实体
3. **使用安全的 DOM API**：优先使用 textContent 而非 innerHTML
4. **内容安全策略(CSP)**：限制页面可执行的脚本来源
5. **使用现代框架**：如 React、Vue 等默认会转义 HTML
6. **HTTP-only Cookies**：防止 JavaScript 访问敏感 Cookie

**优化思路**:
- 实现全站 CSP 策略
- 使用 sanitize 库如 DOMPurify 处理富文本
- 针对不同上下文使用不同的编码方式
- 定期安全审计和渗透测试
- 实施最小权限原则

### 题目16: 闭包陷阱与循环变量

**题目描述**:  
分析以下代码的输出结果，并解释为什么会出现这种情况。然后提供至少两种不同的修复方法，使得代码按预期工作。

```javascript
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(function() {
      console.log(i);
    });
  }
  return result;
}

const functions = createFunctions();
functions[0](); // ?
functions[1](); // ?
functions[2](); // ?
```

**示例输出**:
```
3
3
3
```

**代码示例(修复方法1 - 使用IIFE)**:
```javascript
function createFunctions() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(
      (function(num) {
        return function() {
          console.log(num);
        };
      })(i)
    );
  }
  return result;
}

const functions = createFunctions();
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2
```

**代码示例(修复方法2 - 使用let)**:
```javascript
function createFunctions() {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(function() {
      console.log(i);
    });
  }
  return result;
}

const functions = createFunctions();
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2
```

**考察点**:
- 闭包与词法作用域
- 变量提升与块级作用域
- var 与 let 的区别
- IIFE (立即调用函数表达式)
- JavaScript 事件循环中的闭包陷阱

**解析**:
原始代码中使用 var 声明的变量 i 没有块级作用域，所以当函数被调用时，它们捕获的都是同一个 i 变量，而循环结束后 i 的值为 3。

修复方法 1 使用 IIFE 创建一个新的作用域，并立即将当前的 i 值传入并保存在该闭包中。

修复方法 2 使用 ES6 的 let 声明，它具有块级作用域，循环的每次迭代都会创建一个新的绑定，每个闭包捕获的是当前迭代的 i 值。

**优化思路**:
- 使用 forEach 或 map 方法替代传统的 for 循环
- 在大型应用中注意闭包数量，避免内存泄漏
- 利用工厂函数创建清晰的闭包结构
- 使用 ES6+ 的特性提高代码可读性

### 题目17: JavaScript 设计模式实现

**题目描述**:  
实现单例模式、观察者模式和模块模式的 JavaScript 版本，并解释每种模式的适用场景。

**代码示例(单例模式)**:
```javascript
// 单例模式
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    const object = new Object({
      name: 'Singleton Instance',
      method: function() {
        return this.name;
      }
    });
    return object;
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// 测试单例
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
```

**代码示例(观察者模式)**:
```javascript
// 观察者模式
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    
    return () => this.off(eventName, callback);
  }
  
  // 取消订阅
  off(eventName, callback) {
    if (!this.events[eventName]) return;
    
    this.events[eventName] = this.events[eventName]
      .filter(eventCallback => eventCallback !== callback);
  }
  
  // 触发事件
  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    
    this.events[eventName].forEach(callback => {
      callback.apply(this, args);
    });
  }
  
  // 只订阅一次
  once(eventName, callback) {
    const onceWrapper = (...args) => {
      callback.apply(this, args);
      this.off(eventName, onceWrapper);
    };
    
    return this.on(eventName, onceWrapper);
  }
}

// 测试观察者模式
const emitter = new EventEmitter();
emitter.on('event', data => console.log(`Event received: ${data}`));
emitter.emit('event', 'Hello World'); // 输出: Event received: Hello World
```

**代码示例(模块模式)**:
```javascript
// 模块模式
const Calculator = (function() {
  // 私有变量和方法
  let result = 0;
  
  function validateNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }
  
  // 公开的API
  return {
    add: function(num) {
      if (validateNumber(num)) {
        result += num;
      }
      return this;
    },
    
    subtract: function(num) {
      if (validateNumber(num)) {
        result -= num;
      }
      return this;
    },
    
    multiply: function(num) {
      if (validateNumber(num)) {
        result *= num;
      }
      return this;
    },
    
    divide: function(num) {
      if (validateNumber(num) && num !== 0) {
        result /= num;
      }
      return this;
    },
    
    getResult: function() {
      return result;
    },
    
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

// 测试模块模式
console.log(
  Calculator.add(5)
    .multiply(2)
    .subtract(3)
    .divide(2)
    .getResult() // 输出: 3.5
);
```

**考察点**:
- 设计模式的实际应用
- 闭包与IIFE的使用
- 模块封装与访问控制
- 发布-订阅模式
- 链式调用
- 单例的懒加载

**解析**:
**单例模式**保证一个类只有一个实例，并提供一个全局访问点，适用于需要协调整个系统行为的场景，如全局状态管理、日志记录器等。

**观察者模式**定义了对象间的一对多依赖关系，当一个对象状态改变时，所有依赖它的对象都会被通知并自动更新。适用于事件处理系统、消息通知和实现响应式编程。

**模块模式**使用闭包创建私有变量和方法，只暴露必要的公共API，是实现信息隐藏和命名空间管理的有效方式。

**优化思路**:
- 使用 ES6 中的 Symbol 实现更安全的私有属性
- 使用 Proxy 增强单例的访问控制
- 结合 Promise 对观察者模式进行异步增强
- 考虑使用 ES 模块替代传统模块模式
- 添加类型检查提高代码健壮性

### 题目18: JavaScript 性能优化技巧

**题目描述**:  
分析以下代码段的性能问题，并提出至少三种不同的优化方法，解释每种方法的原理和预期效果。

```javascript
function processItems(items) {
  // 假设items是一个大数组
  const results = [];
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const newItem = {
      id: item.id,
      name: item.name.toUpperCase(),
      description: item.description,
      timestamp: new Date().toISOString(),
      category: item.tags.length > 0 ? item.tags[0] : 'uncategorized',
      isValid: item.status === 'active' && !item.deleted
    };
    
    if (newItem.isValid) {
      results.push(newItem);
      document.getElementById('results-container').innerHTML += `
        <div class="item" onclick="showDetails(${item.id})">
          <h3>${newItem.name}</h3>
          <p>${newItem.description}</p>
        </div>
      `;
    }
  }
  
  console.log(`Processed ${results.length} valid items out of ${items.length}`);
  return results;
}
```

**优化版本**:
```javascript
function processItems(items) {
  // 优化1: 缓存数组长度和DOM引用
  const len = items.length;
  const resultsContainer = document.getElementById('results-container');
  const results = [];
  let htmlOutput = '';
  const now = new Date().toISOString(); // 优化2: 避免重复创建日期对象
  
  // 优化3: 使用DocumentFragment批量操作DOM
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < len; i++) {
    const item = items[i];
    // 优化4: 条件预先检查，避免不必要的对象创建
    if (item.status !== 'active' || item.deleted) {
      continue;
    }
    
    const newItem = {
      id: item.id,
      name: item.name.toUpperCase(),
      description: item.description,
      timestamp: now,
      category: item.tags?.length > 0 ? item.tags[0] : 'uncategorized',
      isValid: true
    };
    
    results.push(newItem);
    
    // 优化5: 使用模板字符串一次性构建HTML
    htmlOutput += `
      <div class="item" data-id="${item.id}">
        <h3>${newItem.name}</h3>
        <p>${newItem.description}</p>
      </div>
    `;
  }
  
  // 优化6: 一次性更新DOM
  resultsContainer.innerHTML = htmlOutput;
  
  // 优化7: 使用事件委托
  resultsContainer.addEventListener('click', function(e) {
    const itemDiv = e.target.closest('.item');
    if (itemDiv) {
      const itemId = itemDiv.dataset.id;
      showDetails(itemId);
    }
  });
  
  console.log(`Processed ${results.length} valid items out of ${len}`);
  return results;
}
```

**考察点**:
- DOM操作性能
- 循环优化
- 内存管理
- 事件委托
- 条件优化
- 对象创建与重用

**解析**:
原始代码的主要性能问题包括：

1. **频繁的DOM操作**：在循环中使用 `innerHTML +=` 导致DOM重复解析和渲染
2. **重复计算**：每次循环都创建新的日期对象
3. **低效的事件处理**：为每个元素单独添加onclick事件处理器
4. **不必要的对象创建**：即使对象最终不会被使用，也会创建完整对象
5. **重复访问数组长度**：在每次循环迭代中都会重新评估数组长度

优化方法的原理：
- 缓存DOM引用和数组长度减少查找操作
- 使用DocumentFragment或字符串拼接进行批量DOM更新
- 使用事件委托减少事件监听器数量
- 提前进行条件检查避免不必要的计算
- 缓存重复使用的值

**优化思路**:
- 使用虚拟化列表处理非常大的数据集
- 考虑使用Web Workers处理复杂计算
- 实现增量处理或分批处理避免UI阻塞
- 应用函数式编程技术提高代码可读性和性能
- 使用RequestAnimationFrame优化视觉更新

### 题目19: Proxy 和 Reflect API 应用

**题目描述**:  
使用 Proxy 和 Reflect API 实现一个响应式数据绑定系统，当数据变化时自动更新DOM。

**代码示例**:
```javascript
function createReactiveSystem() {
  // 存储依赖关系
  const subscribers = new Map();
  
  // 当前正在执行的副作用函数
  let activeEffect = null;
  
  // 注册副作用函数
  function effect(fn) {
    activeEffect = fn;
    fn(); // 首次执行收集依赖
    activeEffect = null;
    return fn;
  }
  
  // 追踪依赖
  function track(target, key) {
    if (!activeEffect) return;
    
    let depsMap = subscribers.get(target);
    if (!depsMap) {
      depsMap = new Map();
      subscribers.set(target, depsMap);
    }
    
    let deps = depsMap.get(key);
    if (!deps) {
      deps = new Set();
      depsMap.set(key, deps);
    }
    
    deps.add(activeEffect);
  }
  
  // 触发更新
  function trigger(target, key) {
    const depsMap = subscribers.get(target);
    if (!depsMap) return;
    
    const deps = depsMap.get(key);
    if (!deps) return;
    
    deps.forEach(effect => effect());
  }
  
  // 创建响应式对象
  function reactive(obj) {
    return new Proxy(obj, {
      get(target, key, receiver) {
        const result = Reflect.get(target, key, receiver);
        
        // 收集依赖
        track(target, key);
        
        // 如果结果是对象，递归使其响应式
        if (typeof result === 'object' && result !== null) {
          return reactive(result);
        }
        
        return result;
      },
      
      set(target, key, value, receiver) {
        const oldValue = target[key];
        const result = Reflect.set(target, key, value, receiver);
        
        if (oldValue !== value) {
          // 触发更新
          trigger(target, key);
        }
        
        return result;
      },
      
      deleteProperty(target, key) {
        const hadKey = key in target;
        const result = Reflect.deleteProperty(target, key);
        
        if (hadKey && result) {
          // 删除属性也触发更新
          trigger(target, key);
        }
        
        return result;
      }
    });
  }
  
  // 绑定DOM元素
  function bindDOM(state, element, property, attribute) {
    effect(() => {
      element[attribute] = state[property];
    });
  }
  
  return {
    reactive,
    effect,
    bindDOM
  };
}

// 使用示例
const { reactive, bindDOM } = createReactiveSystem();

// 创建响应式状态
const state = reactive({
  message: 'Hello Reactive World',
  count: 0
});

// 绑定到DOM
document.addEventListener('DOMContentLoaded', () => {
  const messageElement = document.getElementById('message');
  const countElement = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  
  bindDOM(state, messageElement, 'message', 'textContent');
  bindDOM(state, countElement, 'count', 'textContent');
  
  incrementButton.addEventListener('click', () => {
    state.count++;
    if (state.count % 10 === 0) {
      state.message = `Reached milestone: ${state.count}`;
    }
  });
});
```

**考察点**:
- Proxy 和 Reflect API
- 响应式编程原理
- 依赖收集与追踪
- 属性拦截与劫持
- 观察者模式的高级应用
- 发布-订阅机制

**解析**:
这段代码实现了一个基本的响应式系统，其工作原理是：

1. **依赖收集**：通过 Proxy 的 get 陷阱在数据属性被访问时收集依赖
2. **变更通知**：通过 Proxy 的 set 和 deleteProperty 陷阱在数据变化时通知依赖
3. **自动更新**：当数据变化时，自动执行依赖于该数据的所有副作用函数

Proxy API 允许我们拦截并自定义对象的基本操作，如属性查找、赋值等。Reflect API 则提供了与 Proxy 处理程序方法对应的方法，用于执行默认操作。

这种响应式系统是现代前端框架（如 Vue 3）的核心机制，使UI能够自动响应数据变化。

**优化思路**:
- 增加批量更新机制避免重复渲染
- 实现计算属性和监听器
- 添加防抖和节流控制更新频率
- 处理数组特殊方法（push、pop等）
- 支持深层嵌套对象的响应式
- 添加生命周期钩子和调试功能

### 题目20: async/await 实现原理与应用

**题目描述**:  
解释 async/await 的工作原理，并重新实现一个简化版的 async 函数运行器，展示其内部如何基于 Promise 和生成器函数工作。

**代码示例**:
```javascript
// 模拟 async/await 实现
function asyncRunner(generatorFn) {
  return function(...args) {
    const generator = generatorFn(...args);
    
    return new Promise((resolve, reject) => {
      function step(nextMethod, arg) {
        let next;
        try {
          next = nextMethod(arg);
        } catch (e) {
          return reject(e);
        }
        
        if (next.done) {
          return resolve(next.value);
        }
        
        // 确保值被Promise包装
        Promise.resolve(next.value)
          .then(
            value => step(generator.next.bind(generator), value),
            error => step(generator.throw.bind(generator), error)
          );
      }
      
      // 启动迭代
      step(generator.next.bind(generator));
    });
  };
}

// 使用自定义runner和生成器模拟async/await
function* fetchUserDataGenerator(userId) {
  try {
    const response = yield fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const user = yield response.json();
    
    // 获取用户的订单
    const ordersResponse = yield fetch(`https://api.example.com/users/${userId}/orders`);
    const orders = yield ordersResponse.json();
    
    // 组合结果
    return {
      user,
      orders,
      timestamp: new Date()
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

// 转换为"async"函数
const fetchUserData = asyncRunner(fetchUserDataGenerator);

// 使用方法与真正的async/await相同
fetchUserData(123)
  .then(data => console.log("User data:", data))
  .catch(error => console.error("Failed:", error));

// 真实的async/await等效代码
async function realFetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const user = await response.json();
    
    // 获取用户的订单
    const ordersResponse = await fetch(`https://api.example.com/users/${userId}/orders`);
    const orders = await ordersResponse.json();
    
    // 组合结果
    return {
      user,
      orders,
      timestamp: new Date()
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
```

**考察点**:
- 生成器函数与迭代器
- Promise 链式调用
- 异步控制流程
- 错误处理机制
- JavaScript 引擎如何处理 async/await
- 协程与暂停执行

**解析**:
async/await 是 JavaScript 中处理异步操作的语法糖，其内部实现基于 Promise 和生成器函数(Generator)。

当 JavaScript 引擎遇到 await 关键字时，它会暂停当前函数的执行，等待 Promise 解决，然后恢复执行并返回解决后的值。

上面的实现展示了这一机制的简化版本：
1. 创建一个生成器函数的包装器
2. 在包装器中初始化生成器并返回一个 Promise
3. 定义一个 step 函数递归处理生成器的每一步
4. 使用 Promise.resolve() 确保 yield 的值总是一个 Promise
5. 根据 Promise 的状态调用生成器的 next() 或 throw() 方法
6. 如果生成器完成，则解析最终结果

**优化思路**:
- 添加并发执行多个 Promise 的能力
- 实现超时控制和取消功能
- 处理 Promise 的 finally 方法
- 增加错误栈追踪增强
- 提供进度跟踪机制
- 优化内存使用（避免潜在的内存泄漏） 
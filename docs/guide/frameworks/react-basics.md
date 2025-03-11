# React入门指南

React是由Facebook开发的JavaScript库，用于构建用户界面，特别是单页应用程序。React以组件化、声明式编程和"一次学习，随处编写"的理念而闻名。本文将帮助你快速入门React开发。

## React核心特性

React的核心功能包括：

1. **组件化架构** - 使用组件作为构建UI的基本单位
2. **虚拟DOM** - 高效更新实际DOM的内存中表示
3. **JSX语法** - 在JavaScript中直接书写类似HTML的标记
4. **单向数据流** - 使应用状态管理更可预测
5. **声明式UI** - 描述界面应有的状态，而非如何达到该状态

## 安装React

### 使用Create React App

创建新的React应用的最简单方法是使用官方脚手架工具：

```bash
# 安装全局脚手架（可选）
npm install -g create-react-app

# 创建新应用
npx create-react-app my-react-app

# 进入项目目录
cd my-react-app

# 启动开发服务器
npm start
```

### CDN引入

也可以通过CDN直接在HTML页面中使用React：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Hello React</title>
</head>
<body>
  <div id="root"></div>

  <!-- 加载React核心库 -->
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  
  <!-- 使用Babel转换JSX -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  
  <!-- 您的React组件 -->
  <script type="text/babel">
    function App() {
      return <h1>Hello, React!</h1>;
    }
    
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
```

## JSX基础

JSX是JavaScript的语法扩展，允许您在JavaScript中编写HTML：

```jsx
const element = <h1>Hello, React!</h1>;
```

JSX可以包含JavaScript表达式，用大括号包裹：

```jsx
const name = 'React用户';
const element = <h1>你好，{name}!</h1>;
```

JSX实际上是`React.createElement()`函数的语法糖：

```jsx
// 使用JSX
const element = <h1 className="greeting">Hello, world!</h1>;

// 等同于以下代码
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### JSX注意事项

1. **属性名使用驼峰命名法**：例如使用`className`而非`class`
2. **所有标签必须闭合**：包括自闭合标签如`<img />`
3. **JSX表达式必须有一个父元素**：使用Fragment避免多余的DOM节点
4. **注释使用`{/* */}`**：在大括号内使用JS样式注释

## React组件

React组件允许您将UI拆分为独立、可复用的部分：

### 函数组件

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 使用组件
const element = <Welcome name="张三" />;
```

### 类组件

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 使用组件
const element = <Welcome name="张三" />;
```

## Props与State

### Props

Props是从父组件传递到子组件的只读数据：

```jsx
function UserInfo(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>年龄: {props.age}</p>
      <p>职业: {props.job}</p>
    </div>
  );
}

// 使用组件并传递props
function App() {
  return (
    <div>
      <UserInfo name="张三" age={28} job="开发工程师" />
      <UserInfo name="李四" age={32} job="设计师" />
    </div>
  );
}
```

### State

State是组件内部管理的可变数据：

```jsx
import React, { useState } from 'react';

function Counter() {
  // 声明一个state变量和更新函数
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击增加
      </button>
    </div>
  );
}
```

使用类组件的state：

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>你点击了 {this.state.count} 次</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          点击增加
        </button>
      </div>
    );
  }
}
```

## 生命周期与Hooks

### 类组件的生命周期

React类组件有以下主要生命周期方法：

```jsx
class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('1. 构造函数执行');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps执行');
    return null;
  }

  componentDidMount() {
    console.log('4. 组件挂载完成');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('5. 是否应该更新组件');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. 获取更新前的快照');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. 组件更新完成');
  }

  componentWillUnmount() {
    console.log('8. 组件即将卸载');
  }

  render() {
    console.log('3. 渲染组件');
    return (
      <div>
        <p>计数: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
          增加
        </button>
      </div>
    );
  }
}
```

### React Hooks

Hooks允许您在函数组件中使用状态和其他React特性：

```jsx
import React, { useState, useEffect } from 'react';

function HooksExample() {
  // useState Hook - 管理状态
  const [count, setCount] = useState(0);
  const [name, setName] = useState('访客');

  // useEffect Hook - 处理副作用
  useEffect(() => {
    // 组件挂载后和更新后执行
    document.title = `${name}的计数器: ${count}`;
    
    // 返回清理函数
    return () => {
      console.log('清理副作用');
    };
  }, [count, name]); // 仅当count或name变化时执行

  return (
    <div>
      <p>
        你好，{name}！ 你点击了 {count} 次
      </p>
      <button onClick={() => setCount(count + 1)}>
        点击增加
      </button>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="输入你的名字"
      />
    </div>
  );
}
```

## 事件处理

React事件处理使用驼峰命名约定：

```jsx
function Click() {
  function handleClick(e) {
    e.preventDefault(); // 阻止默认行为
    console.log('按钮被点击');
  }

  return (
    <button onClick={handleClick}>
      点我
    </button>
  );
}
```

在类组件中绑定this：

```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    
    // 绑定this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

## 条件渲染

在React中实现条件渲染的几种方式：

```jsx
function Greeting({ isLoggedIn }) {
  // 使用if语句
  if (isLoggedIn) {
    return <h1>欢迎回来!</h1>;
  }
  return <h1>请登录</h1>;
}

function LoginControl({ isLoggedIn }) {
  // 使用三元运算符
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton />
        : <LoginButton />
      }
    </div>
  );
}

function ConditionalText({ showText }) {
  // 使用&&运算符
  return (
    <div>
      {showText && <p>这是条件显示的文本</p>}
    </div>
  );
}
```

## 列表渲染

使用map函数渲染列表：

```jsx
function NumberList({ numbers }) {
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  
  return <ul>{listItems}</ul>;
}

// 使用
<NumberList numbers={[1, 2, 3, 4, 5]} />
```

**注意**: 必须为列表项提供唯一的`key`属性。

## 表单处理

### 受控组件

React中的表单元素通常是受控组件：

```jsx
import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('提交的名字: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="提交" />
    </form>
  );
}
```

## 组件通信

React组件间的通信方式：

### 父组件到子组件：Props

```jsx
function Parent() {
  const data = "从父组件传来的数据";
  return <Child message={data} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

### 子组件到父组件：回调函数

```jsx
function Parent() {
  const handleChildData = (data) => {
    console.log("从子组件收到:", data);
  };
  
  return <Child onDataSend={handleChildData} />;
}

function Child({ onDataSend }) {
  return (
    <button onClick={() => onDataSend("子组件的数据")}>
      发送数据到父组件
    </button>
  );
}
```

### 兄弟组件通信：状态提升

```jsx
function Parent() {
  const [shared, setShared] = useState("共享数据");
  
  return (
    <div>
      <SiblingA shared={shared} />
      <SiblingB shared={shared} onUpdate={setShared} />
    </div>
  );
}

function SiblingA({ shared }) {
  return <div>A显示: {shared}</div>;
}

function SiblingB({ shared, onUpdate }) {
  return (
    <div>
      <div>B显示: {shared}</div>
      <button onClick={() => onUpdate("从B更新的数据")}>
        更新共享数据
      </button>
    </div>
  );
}
```

## 实际项目案例：待办事项应用

以下是一个完整的React待办事项应用实例：

```jsx
import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input.trim(),
          completed: false
        }
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>React待办事项</h1>
      
      <div className="add-todo">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && addTodo()}
          placeholder="添加新任务..."
        />
        <button onClick={addTodo}>添加</button>
      </div>
      
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          全部
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          未完成
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          已完成
        </button>
      </div>
      
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
      
      <div className="todo-count">
        {todos.filter(todo => !todo.completed).length} 个待办任务
      </div>
    </div>
  );
}

export default TodoApp;
```

配套的CSS样式：

```css
.todo-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.add-todo {
  display: flex;
  margin-bottom: 20px;
}

.add-todo input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.add-todo button {
  padding: 10px 15px;
  background: #61dafb;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.filters {
  display: flex;
  margin-bottom: 20px;
}

.filters button {
  padding: 8px 12px;
  margin-right: 10px;
  background: #f1f1f1;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filters button.active {
  background: #61dafb;
  color: white;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-list li input {
  margin-right: 10px;
}

.todo-list li span {
  flex: 1;
}

.todo-list li button {
  padding: 5px 10px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-count {
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}
```

## React生态系统

React周围有丰富的生态系统：

1. **React Router** - 路由管理库
2. **Redux/Mobx** - 状态管理库
3. **Next.js** - React服务端渲染框架
4. **Material-UI/Ant Design** - UI组件库
5. **React Native** - 移动应用开发
6. **Gatsby** - 静态网站生成器

## 总结与最佳实践

React的核心优势在于其组件化架构和声明式编程风格。以下是一些最佳实践：

1. **组件设计** - 遵循单一职责原则
2. **状态管理** - 将状态尽可能保持在低层级，必要时提升
3. **性能优化** - 合理使用React.memo、useMemo和useCallback
4. **代码组织** - 按功能而非类型组织文件
5. **Testing** - 使用Jest和React Testing Library进行测试

在我在字节跳动的工作中，我们广泛使用React构建内部管理系统和数据分析平台。React的组件化思想和丰富的生态系统让我们能够快速迭代和构建高质量的应用。

## 学习资源

- [React官方文档](https://react.dev/)
- [React GitHub仓库](https://github.com/facebook/react)
- [React开发者路线图](https://roadmap.sh/react)
- [Awesome React](https://github.com/enaqx/awesome-react) - React资源列表
- [React Patterns](https://reactpatterns.com/) - React设计模式 
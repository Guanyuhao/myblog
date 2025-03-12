# Vue Composition API实战指南

Vue 3的Composition API是一种全新的组织组件逻辑的方式，提供了比Options API更灵活的代码组织和逻辑复用能力。本文将深入探讨如何在实际项目中应用Composition API。

## 为什么需要Composition API

在开发大型Vue应用时，Options API存在几个痛点：

1. **相关逻辑分散** - 一个功能的代码被拆分到不同选项中(data, methods, computed等)
2. **代码复用困难** - mixins存在命名冲突、来源不清等问题
3. **TypeScript支持有限** - Options API难以提供完整的类型推导

Composition API通过将相关逻辑组合在一起，解决了这些问题。

## 基础使用

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <p>Double count: {{ doubleCount }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    // 响应式状态
    const count = ref(0)
    
    // 方法
    function increment() {
      count.value++
    }
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 返回要暴露给模板的内容
    return {
      count,
      increment,
      doubleCount
    }
  }
}
</script>
```

## 生命周期钩子

Composition API提供了等效的生命周期钩子：

```js
import { onMounted, onUpdated, onUnmounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('Component mounted')
    })
    
    onUpdated(() => {
      console.log('Component updated')
    })
    
    onUnmounted(() => {
      console.log('Component unmounted')
    })
  }
}
```

## 响应式系统

Vue 3的响应式系统基于ES6 Proxy，主要包括以下API：

- `ref` - 适用于基本类型数据
- `reactive` - 适用于对象类型数据
- `toRefs` - 将响应式对象解构为独立的响应式属性

```js
import { ref, reactive, toRefs, computed, watch } from 'vue'

export default {
  setup() {
    // ref用于基本类型
    const count = ref(0)
    
    // reactive用于对象
    const user = reactive({
      name: 'John',
      age: 30
    })
    
    // computed
    const doubleAge = computed(() => user.age * 2)
    
    // watch
    watch(count, (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
    })
    
    // 使用toRefs解构，保持响应性
    return {
      count,
      ...toRefs(user),
      doubleAge
    }
  }
}
```

## 逻辑复用：组合式函数

Composition API最大的优势在于逻辑复用。我们可以创建"组合式函数"(Composables)来封装和复用有状态的逻辑：

```js
// useCounter.js
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  const doubleCount = computed(() => count.value * 2)
  
  return {
    count,
    increment,
    decrement,
    doubleCount
  }
}
```

在组件中使用：

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>Double: {{ doubleCount }}</p>
  </div>
</template>

<script>
import { useCounter } from './composables/useCounter'

export default {
  setup() {
    // 直接使用组合式函数
    const { count, increment, decrement, doubleCount } = useCounter(10)
    
    return {
      count,
      increment,
      decrement,
      doubleCount
    }
  }
}
</script>
```

## 实战案例：数据获取与加载状态

创建一个处理数据获取的组合式函数：

```js
// useFetch.js
import { ref, computed } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)
  
  const fetchData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Network response was not ok')
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  // 初始加载
  fetchData()
  
  return {
    data,
    error,
    loading,
    refresh: fetchData
  }
}
```

在组件中使用：

```vue
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <h2>{{ data.title }}</h2>
      <p>{{ data.body }}</p>
    </div>
    <button @click="refresh">刷新</button>
  </div>
</template>

<script>
import { useFetch } from './composables/useFetch'

export default {
  setup() {
    const { data, error, loading, refresh } = useFetch('https://jsonplaceholder.typicode.com/posts/1')
    
    return {
      data,
      error,
      loading,
      refresh
    }
  }
}
</script>
```

在Vue 3.2中，引入了更简洁的`<script setup>`语法：

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <p>Double: {{ doubleCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 直接在顶层定义响应式状态
const count = ref(0)

// 直接定义函数
function increment() {
  count.value++
}

// 直接定义计算属性
const doubleCount = computed(() => count.value * 2)

// 不需要return，所有顶层变量都会自动暴露给模板
</script>
```

## 与TypeScript结合

Composition API与TypeScript结合使用非常自然：

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

// 定义类型
interface User {
  id: number
  name: string
  email: string
}

// 指定ref类型
const user = ref<User | null>(null)

// 加载用户数据
async function loadUser(id: number) {
  const response = await fetch(`https://api.example.com/users/${id}`)
  user.value = await response.json()
}

// 计算属性也有正确的类型推导
const userName = computed(() => user.value?.name || 'Unknown')
</script>
```

## 最佳实践与注意事项

1. **组织代码** - 按功能而非选项类型组织代码
   ```js
   // 用户功能相关
   const { user, updateUser } = useUser(props.userId)
   
   // 权限相关
   const { canEdit, canDelete } = usePermissions(user)
   
   // 表单相关
   const { form, validate, submitForm } = useForm(user)
   ```

2. **避免过早抽象** - 不要为了使用组合式函数而使用它，当看到明确的重复模式时再抽象

3. **保持组合式函数小而专注** - 每个组合式函数应该只关注一个功能

4. **明确命名约定** - 组合式函数通常以"use"开头

5. **处理响应式解构** - 使用`toRefs`保持解构后的响应性

## 实际项目中的应用

在我参与的字节跳动飞书人事项目中，我们大量使用Composition API重构了原有代码，主要优势包括：

1. 更好的代码组织，相关逻辑集中在一起
2. 跨组件复用逻辑变得简单
3. 与TypeScript结合提供了更好的类型安全
4. 减少了组件大小，提高了可维护性

## 总结

Composition API为Vue开发引入了一种全新的思维方式，特别适合构建和维护复杂的大型应用。通过组合式函数，我们可以创建更模块化、更可测试的代码，并实现更优雅的逻辑复用。

虽然学习曲线可能较陡，但掌握Composition API将显著提升您的Vue开发效率和代码质量。对于新项目，我强烈推荐使用这种方式开发Vue应用。

## 相关资源

- [Vue 3官方文档](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Vue Composition API RFC](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [VueUse](https://vueuse.org/) - 基于Composition API的实用工具集合 
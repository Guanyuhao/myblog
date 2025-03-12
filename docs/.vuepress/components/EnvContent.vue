<template>
  <div v-if="shouldRender">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EnvContent',
  props: {
    prod: {
      type: Boolean,
      default: false
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 默认值
      isClient: false
    }
  },
  computed: {
    isProduction() {
      // 优先使用全局注入的属性
      if (this.$isProduction !== undefined) {
        return this.$isProduction;
      }
      
      // 仅在客户端安全地访问process
      if (this.isClient) {
        try {
          return process.env.NODE_ENV === 'production';
        } catch (e) {
          // 捕获任何可能的错误
          console.warn('无法安全访问环境变量，假设为开发环境');
          return false;
        }
      }
      
      // 默认假设为开发环境
      return false;
    },
    shouldRender() {
      // 如果两个prop都没有设置，默认显示内容
      if (!this.prod && !this.dev) {
        return true;
      }
      
      // 根据当前环境和props决定是否显示内容
      if (this.prod && this.isProduction) {
        return true;
      }
      
      if (this.dev && !this.isProduction) {
        return true;
      }
      
      return false;
    }
  },
  // 在组件挂载时设置isClient为true
  mounted() {
    this.isClient = true;
  }
}
</script>

<style scoped>
/* 无需额外样式 */
</style>
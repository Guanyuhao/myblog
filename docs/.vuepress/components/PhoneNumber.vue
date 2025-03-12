<template>
  <span>{{ displayNumber }}</span>
</template>

<script>
export default {
  name: 'PhoneNumber',
  data() {
    return {
      // 默认值，以防环境变量不可用
      defaultPhoneNumber: '17600102308'
    }
  },
  computed: {
    displayNumber() {
      let phoneNumber = this.defaultPhoneNumber;
      let isProd = false;
      
      // 尝试从Vue.prototype获取
      if (this.$phoneNumber !== undefined) {
        phoneNumber = this.$phoneNumber;
      } 
      // 回退到环境变量检查，如果可用
      else if (typeof process !== 'undefined' && process.env && process.env.PHONE_NUMBER) {
        phoneNumber = process.env.PHONE_NUMBER;
      }
      
      // 确定环境
      if (this.$isProduction !== undefined) {
        isProd = this.$isProduction;
      } else if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV) {
        isProd = process.env.NODE_ENV === 'production';
      }
      
      // 在生产环境中，隐藏部分电话号码
      if (isProd) {
        return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      }
      
      // 在开发环境中，显示完整号码
      return phoneNumber;
    }
  }
}
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>

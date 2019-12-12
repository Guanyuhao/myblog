<template>
  <div class="block">
    <div class="col-1">
      <div class="wrap">
        <div class="color" />
      </div>
      <img
        class="logo"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/600d77f01cc211ea8ce5af1aeba16eaa.png"
      />
      <span class="new-york">New York</span>
    </div>
    <div class="col-3">
      <span class="text-4104584854">请输入您的文本</span>
      <img
        class="picture-7608821524"
        src="https://via.placeholder.com/100"
      />
      <div class="div" />
      <img
        class="logo"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/604159301cc211ea9d3953bc49c45f35.png"
      />
      <span class="chicago">Chicago</span>
    </div>
    <div class="col-3">
      <div class="div" />
      <img
        class="logo"
        src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/607401f01cc211eaab50d947cca984e9.png"
      />
      <span class="london">London</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DvcComponent",
  methods: {
  }
}
</script>
<style scoped>
/* 视觉稿宽度为 750, 请设置html的font-size为 37.5px, 以便在布局视口宽度为 375 的页面中自适应 */
.block {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 2.04rem;
}
.col-1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-width: 0.01rem;
  border-style: solid;
  border-radius: 0.05rem;
  border-color: rgba(25,137,250,1.00);
  padding-top: 0.27rem;
  padding-bottom: 0.21rem;
  width: 2.13rem;
  height: 2.04rem;
}
.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 0.19rem;
  background-color: #1989fa;
  width: 0.19rem;
  height: 0.19rem;
}
.color {
  border-radius: 0.05rem;
  background-color: #ffffff;
  width: 0.05rem;
  height: 0.05rem;
}
.logo {
  width: 1.07rem;
  height: 0.67rem;
}
.new-york {
  max-width: 1.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.24rem;
  white-space: pre;
  color: #606266;
  font-family: .SFNSText, .SF NS Text;
  font-size: 0.19rem;
  font-weight: normal;
}
.col-3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.13rem;
  border-width: 0.01rem;
  border-style: solid;
  border-radius: 0.05rem;
  border-color: rgba(220,223,230,1.00);
  padding-top: 0.27rem;
  padding-bottom: 0.21rem;
  width: 2.13rem;
  height: 2.04rem;
}
.text-4104584854 {
  font-size: 0.37rem;
  color: #9ec7ff;
}
.picture-7608821524 {
  width: 1.33rem;
  height: 1.33rem;
}
.div {
  border-width: 0.01rem;
  border-style: solid;
  border-radius: 0.19rem;
  border-color: rgba(213,216,222,1.00);
  width: 0.19rem;
  height: 0.19rem;
}
.chicago {
  max-width: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.24rem;
  white-space: nowrap;
  color: #606266;
  font-family: .SFNSText, .SF NS Text;
  font-size: 0.19rem;
  font-weight: normal;
}
.london {
  max-width: 1.24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.24rem;
  white-space: nowrap;
  color: #5e6166;
  font-family: .SFNSText, .SF NS Text;
  font-size: 0.19rem;
  font-weight: normal;
}
</style>
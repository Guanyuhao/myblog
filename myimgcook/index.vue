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
.block {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 153px;
}
.col-1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-width: 0px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgba(25,137,250,1.00);
  padding-top: 20px;
  padding-bottom: 16px;
  width: 160px;
  height: 153px;
}
.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 14px;
  background-color: #1989fa;
  width: 14px;
  height: 14px;
}
.color {
  border-radius: 4px;
  background-color: #ffffff;
  width: 4px;
  height: 4px;
}
.logo {
  width: 80px;
  height: 50px;
}
.new-york {
  max-width: 99px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  white-space: pre;
  color: #606266;
  font-family: .SFNSText, .SF NS Text;
  font-size: 7px;
  font-weight: normal;
}
.col-3 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  border-width: 0px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgba(220,223,230,1.00);
  padding-top: 20px;
  padding-bottom: 16px;
  width: 160px;
  height: 153px;
}
.text-4104584854 {
  font-size: 14px;
  color: #9ec7ff;
}
.picture-7608821524 {
  width: 100px;
  height: 100px;
}
.div {
  border-width: 0px;
  border-style: solid;
  border-radius: 14px;
  border-color: rgba(213,216,222,1.00);
  width: 14px;
  height: 14px;
}
.chicago {
  max-width: 94px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  white-space: nowrap;
  color: #606266;
  font-family: .SFNSText, .SF NS Text;
  font-size: 7px;
  font-weight: normal;
}
.london {
  max-width: 93px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
  white-space: nowrap;
  color: #5e6166;
  font-family: .SFNSText, .SF NS Text;
  font-size: 7px;
  font-weight: normal;
}
</style>
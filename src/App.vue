<template>
  <div id="app">
    <zh-button>默认按钮</zh-button>
    <br />
    <!-- 带类型的按钮 -->
    <zh-button type="primary">主要按钮</zh-button>
    <zh-button type="warning">警告按钮</zh-button>
    <zh-button type="danger">危险按钮</zh-button>
    <zh-button type="success">成功按钮</zh-button>
    <zh-button type="info">信息按钮</zh-button>
    <!-- 带搜索的按钮 -->
    <zh-button type="info" icon="edit">信息按钮</zh-button>
    <zh-button type="success" icon="edit"></zh-button>
    <zh-button type="success" @click="fn">触发事件</zh-button>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
     fn(){
       alert(12)
     }
  }
};
</script>

<style lang="scss">
</style>

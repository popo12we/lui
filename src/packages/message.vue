<template>
  <transition>
    <div class="elMessage" v-show="visible">
      <div :class="{'success':type==='success','error':type==='error'}">{{message}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      type: '',
      visible: false,
      duration: 3000
    }
  },
  mounted () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.$destroy() // 销毁当前实例
        this.$el.parentNode.removeChild(this.$el) // 销毁dom元素
      }, this.duration)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>

 <style lang="scss">
.elMessage {
  width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #f5ebeb;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);

  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
}

.success {
  width: 100%;
  height: 100%;
  color: #0eee64;
}
.error {
  width: 100%;
  height: 100%;
  color: #ca3131;
}

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 1s linear;
}
.v-enter-to {
  opacity: 1;
}
</style>

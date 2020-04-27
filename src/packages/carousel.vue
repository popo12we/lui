<template>
  <div  class="carousel" :style="{height}" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="viewport">
       <slot></slot>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'Carousel',
  props: {
    height: {
      type: String,
      default: '200px'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 6000
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
     
    }
  },

}
</script>

<style lang="scss">
.carousel {
  position: relative;
  .viewport {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dots span {
    display: inline-block;
    width: 20px;
    height: 10px;
    background: #ccc;
    margin: 5px;
    text-indent: -9999px;
    opacity: 0.5;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
  }
  .arrow-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>

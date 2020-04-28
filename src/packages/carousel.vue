<template>
  <div
    class="carousel"
    :style="{height}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="viewport">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="item in len"
        :key="item"
        :class="{active:item-1 === currentSelected}"
        @click="select(item-1)"
      >{{item-1}}</span>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "Carousel",
  props: {
    height: {
      type: String,
      default: "200px"
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
  data() {
    return {
      currentSelected: this.initialIndex,
      len: 0
    };
  },
  mounted() {
    this.children = this.$children.filter(
      child => child.$options.name === "Carouselitem"
    );
    this.len = this.children.length;
    if (this.loop) {
      this.run();
    }
  },
  methods: {
    select(newIndex) {
     let index = this.currentSelected
      this.reserve = !(newIndex > index)
      if (newIndex === this.len) newIndex = 0
      if (newIndex === -1) newIndex = this.len - 1
      if (index === 0 && newIndex === this.len - 1) this.reverse = true
      if (index === this.len - 1 && newIndex === 0) this.reverse = false
      this.$nextTick(() => {
        this.currentSelected = newIndex
        console.log(this.currentSelected)
      })
    },
    run() {
      this.timer = setInterval(() => {
         let index = this.currentSelected
        let newIndex = index + 1
        this.select(newIndex);
      }, this.delay);
    },
    handleMouseEnter() {
      clearInterval(this.timer);
      this.timer = null;
    },
    handleMouseLeave() {
      this.run();
    }
  }
};
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

<template>
  <transition>
    <div class="carouselitem" v-if="isshow" >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Carouselitem",
  data() {
       let children=this.$parent.$children.filter(child=>child.$options.name==="Carouselitem")
      return{
          index:children.length-1
      }
  },
  computed: {
    isshow() {
      return this.$parent.currentSelected === this.index;
    }
  }
};
</script>

<style  lang="scss">
.carouselitem {
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter {
  transform: translateX(100%);
}

.v-leave-to.reserve {
  transform: translateX(100%);
}
.v-enter.reserve {
  transform: translateX(-100%);
}
.v-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

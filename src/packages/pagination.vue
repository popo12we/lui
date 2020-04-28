<template>
  <ul class="zh-pagination">
    <li>
      <zh-icon icon="left"></zh-icon>
    </li>
    <li>
      <span>1</span>
    </li>
    <li>
      <span>...</span>
    </li>
    <li>
      <span>5</span>
    </li>
    <li>
      <span>...</span>
    </li>
    <li>
      <span>{{total}}</span>
    </li>
    <li>
      <zh-icon icon="right"></zh-icon>
    </li>
  </ul>
</template>

<script>
export default {
  name: "zh-pagination",
  data() {
    return {
      //是否显示上一个...
      showPrevMore: false,
      //是否显示下一个...
      showNextMore: false
    }
  },
  props: {
    total: {
      type: Number,
      default: 1
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped lang="scss">
.zh-pagination li {
  list-style: none;
  display: inline-flex;
  vertical-align: middle;
  user-select: none;
  .active {
    color: red;
  }
  .zh-icon {
    width: 12px;
    height: 12px;
  }
}
</style>

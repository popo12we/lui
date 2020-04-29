<template>
  <ul class="zh-pagination">
    <li>
      <zh-icon icon="left" @click="select(currentPage-1)"></zh-icon>
    </li>
    <li>
      <span @click="select(1)">1</span>
    </li>
    <li v-if="showPrevMore">
      <span>...</span>
    </li>
    <li v-for="item in pagers" :key="item">
      <span @click="select(item)" :class="{active:currentPage===item}">{{item}}</span>
     
    </li>
    <li v-if="showNextMore">
      <span>...</span>
    </li>
    <li>
      <span @click="select(total)">{{total}}</span>
    </li>
    <li>
      <zh-icon icon="right" @click="select(currentPage+1)"></zh-icon>
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
    };
  },
  methods:{
     //点击按钮单选
     select(current){
       //极限值判断
       if(current<1){
         this.current=1
       }
       if(current>this.total){
         this.current=this.total
       }
       //让父组件改currentPage
       this.$emit("update:current-page",current)
     }
  },
  computed: {
    // 最多显示7个按钮
    // 当前是第四页  1 2 3 4 5 6 。。。10
    // 当前显示的是第五页 1 ... 3 4 5 6 7 ... 10
    // 如果当前显示的是第七页 1 ... 5 6 7 8 9 10
    // 1 2 3 4 5 6 7 8 9 10
    pagers() {
      let arr = [];
      //总条数
      let total = this.total;
      //中间值
      let middleValue = Math.floor(this.pagerCount / 2);
      //当前选中值
      let currentPage = this.currentPage;
      //  计算是否显示前面的。。。 还是显示后面的。。。
      let showPrevMore = false;
      let showNextMore = false;
      let pagerCount=this.pagerCount
      if (currentPage > middleValue + 1) showPrevMore = true;
      if (currentPage < total - middleValue-1) showNextMore = true;
      //四种情况
      // 1前有点后没点
      if (showPrevMore && !showNextMore) {
        let start = total - (pagerCount -2)
        for (let i = start; i < total; i++) {
          arr.push(i);
        }
      }
      // 2后有点前没点
      else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount ; i++) {
          arr.push(i);
        }
      }
      // 3前后都有点
      else if (showPrevMore && showNextMore) {
        for (let i = currentPage-2; i < currentPage + 2; i++) {
          arr.push(i);
        }
      }
      // 4前后都没
      else {
        for (let i = 2; i < total; i++) {
          arr.push(i);
        }
      }

      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return arr;
    }
  },
  props: {
    //总条数
    total: {
      type: Number,
      default: 1
    },
    //有几个按钮
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

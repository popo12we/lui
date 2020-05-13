<template>
  <div>
    <ul style="overflow-y:scroll"
     v-infinite-scroll="load"
     infinite-scroll-disabled="hasMore"
     infinite-scroll-delay="delay"
     infinite-scroll-distance="distance"
     infinite-scroll-immediate="immediate"
      class="box"
      ></ul>
    <li v-for="c in count" :key="c">{{c}}</li>
  </div>
</template>

 
<script>
export default {
  data() {
    return {
      count: 0,
      //是否有更多数据
      hasMore:true,
      //节流时间
      delay:200,
      //触底加载阈值
      distance:30,
      //是否立即加载满数据
      immediate:true
    };
  },
  methods: {
    load() {
      this.load += 2;
    }
  }
};
</script>
<style  lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box{
   width: 400px;
   height: 300px;
   border:1px solid green;
}
</style>

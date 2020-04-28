<template>
  <div>
     <zh-pagination :total="total" :page-count="pageCount" :current-page.sync="currentPage"></zh-pagination>
  </div>
</template>

<script>

export default {
   data(){
     return {
       //总条数
       total:10,
       //分页器一共展示多少按钮
       pageCount:7,
       //当前页
       currentPage:1
     }
   }
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>

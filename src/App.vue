<template>
  <div>
    <zh-table 
    :columns="columns1"
     :data="data1"
     @on-select="select"
     @on-select-all="selectAll"
     ></zh-table>
    <!-- <zh-pagination :total="total" :page-count="pageCount" :current-page.sync="currentPage"></zh-pagination> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //总条数
      total: 10,
      //分页器一共展示多少按钮
      pageCount: 5,
      //当前页
      currentPage: 3,
      columns1: [
        {
          type:'selection',
          width:60
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    }
  },
  methods:{
    select(selection,row){
    
    },
    selectAll(selection){
      console.log(selection)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

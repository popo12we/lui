<template>
  <input type="text" :value="value" @input="handleChange"/>
</template>

<script>
// 原生input主要就是输入
export default {
  name:"el-input",
  props:{
      value:String
  },
  methods:{
     handleChange(e){
         //整体校验逻辑是在el-form-item层面校验
        // 所以要找到el-form-item让它处理
         this.$emit("input",e.target.value)
         let parent=this.$parent
         while(parent){
             if(parent.$options.name==="el-form-item"){
                 break
             }else{
                 parent=parent.$parent
             }
         }
         parent.$emit("validate")
     } 
  }
}
</script>

<style>

</style>

<template>
  <input type="text" :value="value" @input="handleChange"/>
</template>

<script>
export default {
  name:"el-input",
  props:{
      value:String
  },
  methods:{
     handleChange(e){
         this.$emit("input",e.target.value)
     } 
  }
}
</script>

<style>

</style>

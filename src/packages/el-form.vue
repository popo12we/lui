<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
   name:"el-form",
   props:{
       model:{
           type:Object,
           default:()=>({})
       },
       rules:Object
   },
   methods:{
       validate(){
           
       }
   }
}
</script>

<style lang="scss">

</style>

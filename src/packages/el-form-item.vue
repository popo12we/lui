<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
    </div>
</template>

<script>
import { Stream } from 'stream';
export default {
 name:"el-form-item",
 props:{
     label:{
         type:String,
         default:""
     },
     prop:String
 }
}
</script>

<style lang="scss">

</style>

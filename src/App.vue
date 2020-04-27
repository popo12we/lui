<template>
  <div>
    <button @click="fn">按钮</button>
  </div>
</template>
<script>
import { Message } from "./packages/message.js";
export default {
  methods: {
    fn() {
      Message({
        type: "success",
        message:"成功"
      })
    }
  }
};
</script>



// 核心就是在message.js里用message.vue的东西
import Vue from 'vue'
import messageComponent from './message.vue'
let MessageClass = Vue.extend(messageComponent)
//挂载到页面上的方法
const Message =options=>{
   let instance=new MessageClass({
      data:options
   })
   instance.$mount()
   // console.log(instance.$el)
   document.body.appendChild(instance.$el)
   instance.visible=true
}

// 调用情况
//  Message.success({
//    message: "提交成功"
//  });
// 调的是下面这种
//  Message({
//    type: "success",
//    message: "提交成功了啊"
//  });
['success', 'error', 'warning'].forEach(type => {
   Message[type]=function(options){
      options.type=type
      return Message(options)
   }
})
export  {Message}
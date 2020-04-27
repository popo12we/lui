import Button from './button.vue'
import Icon from './icon.vue'
import Tree from './tree.vue'
const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(Tree.name, Tree)
}
if (typeof window.Vue !== 'undefined') {
  install(Vue) // 全局直接通过script 引用的方式会默认调用install方法
}
export default { install }



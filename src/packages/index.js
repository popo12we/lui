import Button from './button.vue'
import Icon from './icon.vue'
import Tree from './tree.vue'
import Carousel from './carousel.vue'
import Carouselitem from './carouselitem.vue'
const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(Tree.name, Tree)
  Vue.component(Carousel.name, Carousel)
  Vue.component(Carouselitem.name, Carouselitem)
}
if (typeof window.Vue !== 'undefined') {
  install(Vue) // 全局直接通过script 引用的方式会默认调用install方法
}
export default { install }



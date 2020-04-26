import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Lui from './packages/index'
Vue.use(Lui)
new Vue({
  render: h => h(App),
}).$mount('#app')

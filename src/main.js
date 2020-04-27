import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import lui from './packages/index'
Vue.use(lui)
new Vue({
  render: h => h(App),
}).$mount('#app')

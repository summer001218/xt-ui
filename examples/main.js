import Vue from 'vue'
import App from './App.vue'
import xtUI from '../packages'

Vue.use(xtUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

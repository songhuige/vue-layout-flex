import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/common.css";
import VueFlexLayout from '../packages'

Vue.config.productionTip = false

Vue.use(VueFlexLayout)

new Vue({
  render: h => h(App),
}).$mount('#app')

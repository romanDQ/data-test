import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'chart.js'
import 'hchs-vue-charts'

import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

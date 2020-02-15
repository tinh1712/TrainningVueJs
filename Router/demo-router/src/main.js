import Vue from 'vue'
import App from './App.vue'
import router from './Router/router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
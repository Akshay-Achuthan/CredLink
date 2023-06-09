import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue-google-oauth2'


Vue.config.productionTip = false

Vue.use(GAuth, {
  clientId: '768834812579-007e5802er7gj3c93p8qa9568h8bj3na.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

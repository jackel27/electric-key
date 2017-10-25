import Vue from 'vue'
import axios from 'axios'
import {remote} from 'electron'
import App from './App'
import router from './router'
import store from './store'
import 'semantic-ui-css/semantic.css'
import fsextra from 'fs-extra'
window.addEventListener('beforeunload', () => {
  remote.globalShortcut.unregisterAll()
})
Vue.prototype.$fsextra = fsextra
// console.log(remote.globalShortcut)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

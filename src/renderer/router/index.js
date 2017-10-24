import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hotkeys',
      component: require('@/components/Hotkeys').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

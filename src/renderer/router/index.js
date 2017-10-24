import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Settings',
      name: 'Settings',
      component: require('@/components/Settings/Settings').default
    },
    {
      path: '/About',
      name: 'About',
      component: require('@/components/About/About').default
    },
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

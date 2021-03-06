import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve=>require(["@/pages/index/Index"],resolve)
    },
    {
      path: 'index',
      name: 'Index',
      component: resolve=>require(["@/pages/index/Index"],resolve)
    }
  ]
})

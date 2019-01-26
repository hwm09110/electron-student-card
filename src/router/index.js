import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import NowLocation from '../views/NowLocation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/nowlocation',
      name: 'nowlocation',
      component: NowLocation
    },
    {
      path: '/limitrange',
      name: 'limitrange',
      component: () => import(/* webpackChunkName: "limitrange" */ '../views/LimitRange.vue')
    },
    {
      path: '/setlimitrange',
      name: 'setlimitrange',
      component: () => import(/* webpackChunkName: "setlimitrange" */ '../views/SetLimitRange.vue')
    },
    {
      path: '/addlimitrange',
      name: 'addlimitrange',
      component: () => import(/* webpackChunkName: "setlimitrange" */ '../views/AddLimitRange.vue')
    },
    {
      path: '/relphone',
      name: 'relphone',
      component: () => import(/* webpackChunkName: "relphone" */ '../views/RelPhone.vue')
    },
    {
      path: '/addrelphone',
      name: 'addrelphone',
      component: () => import(/* webpackChunkName: "relphone" */ '../views/AddRelPhone.vue')
    },
    {
      path: '/whiteList',
      name: 'whitelist',
      component: () => import(/* webpackChunkName: "whiteList" */ '../views/WhiteList.vue')
    },
    {
      path: '/addwhitephone',
      name: 'addwhitephone',
      component: () => import(/* webpackChunkName: "whiteList" */ '../views/AddWhitePhone.vue')
    }
  ]
})

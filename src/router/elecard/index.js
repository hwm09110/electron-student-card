//电子学生证模块
import Index from '../../views/elecard/Index'
import NowLocation from '../../views/elecard/NowLocation'
import DeviceInfo from '../../views/elecard/DeviceInfo'

export default [
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
    component: () => import(/* webpackChunkName: "limitrange" */ '../../views/elecard/LimitRange.vue')
  },
  {
    path: '/setlimitrange',
    name: 'setlimitrange',
    component: () => import(/* webpackChunkName: "setlimitrange" */ '../../views/elecard/SetLimitRange.vue')
  },
  {
    path: '/addlimitrange',
    name: 'addlimitrange',
    component: () => import(/* webpackChunkName: "setlimitrange" */ '../../views/elecard/AddLimitRange.vue')
  },
  {
    path: '/relphone',
    name: 'relphone',
    component: () => import(/* webpackChunkName: "relphone" */ '../../views/elecard/RelPhone.vue')
  },
  {
    path: '/addrelphone',
    name: 'addrelphone',
    component: () => import(/* webpackChunkName: "relphone" */ '../../views/elecard/AddRelPhone.vue')
  },
  {
    path: '/whiteList',
    name: 'whitelist',
    component: () => import(/* webpackChunkName: "whiteList" */ '../../views/elecard/WhiteList.vue')
  },
  {
    path: '/addwhitephone',
    name: 'addwhitephone',
    component: () => import(/* webpackChunkName: "whiteList" */ '../../views/elecard/AddWhitePhone.vue')
  },
  {
    path: '/bandisturb',
    name: 'bandisturb',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/BanDisturb.vue')
  },
  {
    path: '/setbandisturb',
    name: 'setbandisturb',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/SetBanDisturb.vue')
  },
  {
    path: '/sos',
    name: 'sos',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/Sos.vue')
  },
  {
    path: '/deviceinfo',
    name: 'deviceinfo',
    component: DeviceInfo
  }
]
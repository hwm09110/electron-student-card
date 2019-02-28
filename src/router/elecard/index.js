//电子学生证模块
import Index from '../../views/elecard/Index'
import NowLocation from '../../views/elecard/NowLocation'
import DeviceInfo from '../../views/elecard/DeviceInfo'

export default [
  {
    path: '/eleccard/index',
    name: 'index',
    component: Index
  },
  {
    path: '/eleccard/nowlocation',
    name: 'nowlocation',
    component: NowLocation
  },
  {
    path: '/eleccard/limitrange',
    name: 'limitrange',
    component: () => import(/* webpackChunkName: "limitrange" */ '../../views/elecard/LimitRange.vue')
  },
  {
    path: '/eleccard/setlimitrange',
    name: 'setlimitrange',
    component: () => import(/* webpackChunkName: "setlimitrange" */ '../../views/elecard/SetLimitRange.vue')
  },
  {
    path: '/eleccard/addlimitrange',
    name: 'addlimitrange',
    component: () => import(/* webpackChunkName: "setlimitrange" */ '../../views/elecard/AddLimitRange.vue')
  },
  {
    path: '/eleccard/relphone',
    name: 'relphone',
    component: () => import(/* webpackChunkName: "relphone" */ '../../views/elecard/RelPhone.vue')
  },
  {
    path: '/eleccard/addrelphone',
    name: 'addrelphone',
    component: () => import(/* webpackChunkName: "relphone" */ '../../views/elecard/AddRelPhone.vue')
  },
  {
    path: '/eleccard/whiteList',
    name: 'whitelist',
    component: () => import(/* webpackChunkName: "whiteList" */ '../../views/elecard/WhiteList.vue')
  },
  {
    path: '/eleccard/addwhitephone',
    name: 'addwhitephone',
    component: () => import(/* webpackChunkName: "whiteList" */ '../../views/elecard/AddWhitePhone.vue')
  },
  {
    path: '/eleccard/bandisturb',
    name: 'bandisturb',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/BanDisturb.vue')
  },
  {
    path: '/eleccard/setbandisturb',
    name: 'setbandisturb',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/SetBanDisturb.vue')
  },
  {
    path: '/eleccard/sos',
    name: 'sos',
    component: () => import(/* webpackChunkName: "bandisturb" */ '../../views/elecard/Sos.vue')
  },
  {
    path: '/eleccard/deviceinfo',
    name: 'deviceinfo',
    component: DeviceInfo
  }
]
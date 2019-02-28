import Vue from 'vue'
import Router from 'vue-router'
import ElecardRouterList from './elecard'
import ScoreRouterList from './score'
import MicrowebsiteRouterList from './microwebsite'
import Error from '../views/Error'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'rootHome',
      redirect: {name: 'score_home'}
    },
    ...ElecardRouterList,
    ...ScoreRouterList,
    ...MicrowebsiteRouterList,
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
});

//全局前置导航守卫
router.beforeEach((to,from,next)=>{
  // console.log('to',to)
  // console.log('from',from)
  window.scrollTo(0,0)
  next()
})

export default router

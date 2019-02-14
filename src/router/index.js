import Vue from 'vue'
import Router from 'vue-router'
import ElecardRouterList from './elecard'
import ScoreRouterList from './score'
import Error from '../views/Error'


Vue.use(Router)

export default new Router({
  routes: [
    ...ElecardRouterList,
    ...ScoreRouterList,
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})

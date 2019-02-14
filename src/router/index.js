import Vue from 'vue'
import Router from 'vue-router'
import ElecardRouterList from './elecard'
import ScoreRouterList from './score'


Vue.use(Router)

export default new Router({
  routes: [
    ...ElecardRouterList,
    ...ScoreRouterList
  ]
})

import * as types from './mutations-type'
import http from '@/request'

const getCourse = ({commit},params) =>{
  return http.getCourse(params).then(res=>{
    commit(types['SET_SUBJECT'],res.extraData)
  })
  .catch(er=>{
    console.log('getcourse',er)
  })
}

export default {
  getCourse
}
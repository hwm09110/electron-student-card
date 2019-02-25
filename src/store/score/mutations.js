import * as types from './mutations-type'

export default {
  [types.SET_SUBJECT](state,subjects) {
    state.subject_list = subjects
  }
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stu_guid: 'ha6195af1c3f52G47736528',
    subject_list: [],
  },
  mutations: {
    set_subject(state,subject) {
      state.subject_list = subject
    }
  },
  actions: {

  }
})

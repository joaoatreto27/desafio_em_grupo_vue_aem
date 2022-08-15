import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store = new Store({
  state: {
    tab: 'basic',
    fullname: '',
    nickname: '',
    email: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    age: '',
    checkbox: true,
    linkedin: '',
    github: '',
    certificates: '',
    teamname: '',
    institution: '',
    graduation: ''
  },
  getters: {},
  mutations: {
    setTab (state, tab) {
      state.tab = tab
    }
  },
  actions: {
    setTab ({ commit }, tab) {
      commit('setTab', tab)
    }
  },
  modules: {}
})

export default store

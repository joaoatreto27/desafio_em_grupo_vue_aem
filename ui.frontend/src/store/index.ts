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
    },

    setFullName (state, fullname) {
      state.fullname = fullname
    },

    setEmail (state, email) {
      state.email = email
    },

    setAge (state, age) {
      state.age = age
    }
  },
  actions: {
    setTab ({ commit }, tab) {
      commit('setTab', tab)
    },
    setFullName ({ commit }, fullname) {
      commit('setFullName', fullname)
    },

    setEmail ({ commit }, email) {
      commit('setEmail', email)
    },

    setAge ({ commit }, age) {
      commit('setAge', age)
    }
  },
  modules: {}
})

export default store

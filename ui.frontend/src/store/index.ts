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
    instagram: '',
    twitter: '',
    facebook: '',
    personalizada: '',
    certificates: '',
    teamname: '',
    institution: '',
    graduation: '',
    fieldLinkedin: true,
    fieldGithub: false,
    fieldInstagram: true,
    fieldTwitter: false,
    fieldFacebook: false,
    fieldPersonalizada: false,
    successLinkedin: false,
    successGithub: true,
    successInstagram: false,
    successTwitter: false,
    successFacebook: false,
    successPersonalizada: false

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

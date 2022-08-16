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

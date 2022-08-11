import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store = new Store({
  state: {
    basic: true,
    social: false,
    certificates: false,
    success: false
  },
  getters: {
    getBasic (state) {
      return state.basic
    },
    getSocial (state) {
      return state.social
    },
    getCertificates (state) {
      return state.certificates
    }
  },
  mutations: {
    setBasic (state, basic) {
      state.basic = basic
      console.log('aqui')
    },
    setSocial (state, social) {
      state.social = social
    },
    setCertificates (state, certificates) {
      state.certificates = certificates
    }

  },
  actions: {
    setSocial ({ commit }, social) {
      commit('setSocial', social)
    },
    setBasic ({ commit }, basic) {
      commit('setBasic', basic)
    },
    setCertificates ({ commit }, certificates) {
      commit('setCertificates', certificates)
    }
  },
  modules: {}
})

export default store

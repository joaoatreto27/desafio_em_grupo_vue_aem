import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const store = new Store({
  state: {
    tab: 'basic'
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

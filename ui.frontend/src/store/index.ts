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
    labelPersonalizada: '',
    placeholderPersonalizada: '',
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
      console.log(state.fullname)
    },
    setNickName (state, nickname) {
      state.nickname = nickname
    },
    setEmail (state, email) {
      state.email = email
    },
    setPhone (state, phone) {
      state.phone = phone
    },
    setDay (state, day) {
      state.day = day
    },
    setMonth (state, month) {
      state.month = month
    },
    setYear (state, year) {
      state.year = year
    },
    setAge (state, age) {
      state.age = age
    },
    setCheckbox (state, checkbox) {
      state.checkbox = checkbox
    },
    setLinkedin (state, linkedin) {
      state.linkedin = linkedin
      console.log(state.linkedin)
    },
    setGithub (state, github) {
      state.github = github
      console.log(state.github)
    },
    setInstagram (state, instagram) {
      state.instagram = instagram
      console.log(state.instagram)
    },
    setTwitter (state, twitter) {
      state.twitter = twitter
      console.log(state.twitter)
    },
    setFacebook (state, facebook) {
      state.facebook = facebook
      console.log(state.facebook)
    },
    setPersonalizada (state, personalizada) {
      state.personalizada = personalizada
      console.log(state.personalizada)
    }

  },
  actions: {
    setTab ({ commit }, tab) {
      commit('setTab', tab)
    },
    setFullName ({ commit }, fullname) {
      commit('setFullName', fullname)
    },
    setNickName ({ commit }, nickname) {
      commit('setNickName', nickname)
    },
    setEmail ({ commit }, email) {
      commit('setEmail', email)
    },
    setPhone ({ commit }, phone) {
      commit('setPhone', phone)
    },
    setDay ({ commit }, day) {
      commit('setDay', day)
    },
    setMonth ({ commit }, month) {
      commit('setMonth', month)
    },
    setYear ({ commit }, year) {
      commit('setYear', year)
    },
    setAge ({ commit }, age) {
      commit('setAge', age)
    },
    setCheckbox ({ commit }, checkbox) {
      commit('setCheckbox', checkbox)
    },
    setLinkedin ({ commit }, linkedin) {
      commit('setLinkedin', linkedin)
    },
    setGithub ({ commit }, github) {
      commit('setGithub', github)
    },
    setInstagram ({ commit }, instagram) {
      commit('setInstagram', instagram)
    },
    setTwitter ({ commit }, twitter) {
      commit('setTwitter', twitter)
    },
    setFacebook ({ commit }, facebook) {
      commit('setFacebook', facebook)
    },
    setPersonalizada ({ commit }, personalizada) {
      commit('setPersonalizada', personalizada)
    }

  },
  modules: {}
})

export default store

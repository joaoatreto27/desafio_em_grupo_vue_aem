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
    fieldFullname: true,
    fieldNickname: true,
    fieldEmail: true,
    fieldPhone: true,
    fieldBirthday: true,
    fieldAcept: true,
    fieldCertificates: true,
    fieldTeamname: true,
    fieldInstitution: true,
    fieldGraduation: true,
    fieldLinkedin: true,
    fieldGithub: false,
    fieldInstagram: true,
    fieldTwitter: false,
    fieldFacebook: false,
    fieldPersonalizada: false,
    successFullname: true,
    successNickname: false,
    successEmail: true,
    successPhone: false,
    successBirthday: true,
    successCertificates: true,
    successTeamname: true,
    successInstitution: true,
    successGraduation: true,
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
    },
    setCertificates (state, certificates) {
      state.certificates = certificates
      console.log(state.certificates)
    },
    setTeamName (state, teamname) {
      state.teamname = teamname
      console.log(state.teamname)
    },
    setInstitution (state, institution) {
      state.institution = institution
      console.log(state.institution)
    },
    setGraduation (state, graduation) {
      state.graduation = graduation
      console.log(state.graduation)
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
    setCertificates ({ commit }, certificates) {
      commit('setCertificates', certificates)
    },
    setTeamName ({ commit }, teamname) {
      commit('setTeamName', teamname)
    },
    setInstitution ({ commit }, institution) {
      commit('setInstitution', institution)
    },
    setGraduation ({ commit }, graduation) {
      commit('setGraduation', graduation)
    }

  },
  modules: {}
})

export default store

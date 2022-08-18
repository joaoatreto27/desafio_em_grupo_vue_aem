<template>
  <div class="main">
    <div class="card">
      <div class="title-card">
        <MyTitle
          msg="Team Sign Up"
          nameClass="main-title"
          type="h3"
          v-if="this.$store.state.tab !== 'success'"
        />
      </div>
      <MyMenu v-if="this.$store.state.tab !== 'success'" />
      <MyBasic v-if="this.$store.state.tab == 'basic'" />
      <MySocial v-if="this.$store.state.tab == 'social'" />
      <MyCertificates v-if="this.$store.state.tab == 'certificates'" />
      <MySuccess v-if="this.$store.state.tab == 'success'" />
    </div>
  </div>
</template>

<script>
import MyTitle from '../../Micro/MyTitle/MyTitle.vue'
import MyMenu from '../../Micro/MyMenu/MyMenu.vue'
import MyBasic from '../../Container/MyBasic/MyBasic.vue'
import MySocial from '../../Container/MySocial/MySocial.vue'
import MyCertificates from '../../Container/MyCertificates/MyCertificates.vue'
import MySuccess from '../../Container/MySuccess/MySuccess.vue'
export default {
  // eslint-disable-next-line
  name: 'MyMain',
  components: {
    MyBasic,
    MySocial,
    MyCertificates,
    MyMenu,
    MyTitle,
    MySuccess
  },
  props: {
    fieldFullname: {
      type: Boolean,
      default: true
    },
    fieldNickname: {
      type: Boolean,
      default: true
    },
    fieldEmail: {
      type: Boolean,
      default: true
    },
    fieldPhone: {
      type: Boolean,
      default: true
    },
    fieldBirthday: {
      type: Boolean,
      default: true
    },
    fieldAcept: {
      type: Boolean,
      default: true
    },
    fieldLinkedin: {
      type: Boolean,
      default: true
    },
    fieldGithub: {
      type: Boolean,
      default: true
    },
    fieldFacebook: {
      type: Boolean,
      default: false
    },
    fieldInstagram: {
      type: Boolean,
      default: false
    },
    fieldTwitter: {
      type: Boolean,
      default: false
    },
    fieldPersonalizada: {
      type: Boolean,
      default: false
    },
    fieldCertificates: {
      type: Boolean,
      default: true
    },
    fieldTeamname: {
      type: Boolean,
      default: true
    },
    fieldInstitution: {
      type: Boolean,
      default: true
    },
    fieldGraduation: {
      type: Boolean,
      default: true
    },
    successLinkedin: {
      type: Boolean,
      default: true
    },
    successGithub: {
      type: Boolean,
      default: true
    },
    successFacebook: {
      type: Boolean,
      default: false
    },
    successInstagram: {
      type: Boolean,
      default: false
    },
    successTwitter: {
      type: Boolean,
      default: false
    },
    successPersonalizada: {
      type: Boolean,
      default: false
    },
    successFullname: {
      type: Boolean,
      default: true
    },
    successNickname: {
      type: Boolean,
      default: false
    },
    successEmail: {
      type: Boolean,
      default: true
    },
    successPhone: {
      type: Boolean,
      default: false
    },
    successBirthday: {
      type: Boolean,
      default: true
    },
    successAcept: {
      type: Boolean,
      default: false
    },
    successCertificates: {
      type: Boolean,
      default: true
    },
    successTeamname: {
      type: Boolean,
      default: true
    },
    successInstitution: {
      type: Boolean,
      default: true
    },
    successGraduation: {
      type: Boolean,
      default: true
    },
    labelPersonalizada: {
      type: String,
      default: 'Personalizada'
    },
    placeholderPersonalizada: {
      type: String,
      default: 'https://www.foobar.com'
    }
  },
  methods: {
    initProps () {
      this.$store.state.fieldFullname = this.fieldFullname
      this.$store.state.fieldNickname = this.fieldNickname
      this.$store.state.fieldEmail = this.fieldEmail
      this.$store.state.fieldPhone = this.fieldPhone
      this.$store.state.fieldBirthday = this.fieldBirthday
      this.$store.state.fieldAcept = this.fieldAcept
      this.$store.state.fieldLinkedin = this.fieldLinkedin
      this.$store.state.fieldGithub = this.fieldGithub
      this.$store.state.fieldFacebook = this.fieldFacebook
      this.$store.state.fieldInstagram = this.fieldInstagram
      this.$store.state.fieldTwitter = this.fieldTwitter
      this.$store.state.fieldPersonalizada = this.fieldPersonalizada
      this.$store.state.fieldCertificates = this.fieldCertificates
      this.$store.state.fieldTeamname = this.fieldTeamname
      this.$store.state.fieldInstitution = this.fieldInstitution
      this.$store.state.fieldGraduation = this.fieldGraduation
      this.$store.state.successLinkedin = this.successLinkedin
      this.$store.state.successGithub = this.successGithub
      this.$store.state.successFacebook = this.successFacebook
      this.$store.state.successInstagram = this.successInstagram
      this.$store.state.successTwitter = this.successTwitter
      this.$store.state.successPersonalizada = this.successPersonalizada
      this.$store.state.successFullname = this.successFullname
      this.$store.state.successNickname = this.successNickname
      this.$store.state.successEmail = this.successEmail
      this.$store.state.successPhone = this.successPhone
      this.$store.state.successBirthday = this.successBirthday
      this.$store.state.successCertificates = this.successCertificates
      this.$store.state.successTeamname = this.successTeamname
      this.$store.state.successInstitution = this.successInstitution
      this.$store.state.successGraduation = this.successGraduation
      this.$store.state.labelPersonalizade = this.labelPersonalizada
      this.$store.state.placeholderPersonalizada = this.placeholderPersonalizada
    }
  },
  mounted () {
    this.initProps()
  }
}
</script>

<style lang="scss" scooped>
@import './MyMain.scss';
</style>

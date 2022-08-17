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
      default: true
    },
    fieldTwitter: {
      type: Boolean,
      default: true
    },
    fieldPersonalizada: {
      type: Boolean,
      default: true
    },
    successLinkedin: {
      type: Boolean,
      default: false
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
      this.$store.state.fieldLinkedin = this.fieldLinkedin
      this.$store.state.fieldGithub = this.fieldGithub
      this.$store.state.fieldFacebook = this.fieldFacebook
      this.$store.state.fieldInstagram = this.fieldInstagram
      this.$store.state.fieldTwitter = this.fieldTwitter
      this.$store.state.fieldPersonalizada = this.fieldPersonalizada
      this.$store.state.successLinkedin = this.successLinkedin
      this.$store.state.successGithub = this.successGithub
      this.$store.state.successFacebook = this.successFacebook
      this.$store.state.successInstagram = this.successInstagram
      this.$store.state.successTwitter = this.successTwitter
      this.$store.state.successPersonalizada = this.successPersonalizada
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

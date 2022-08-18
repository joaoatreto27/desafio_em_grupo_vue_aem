<template>
  <div class="card-social">

      <div class="inputs-input">
        <MyInput
          :LabelInput="socialLabelLinkedin"
          :Placeholder="socialPlaceholderLinkedin"
          idInputs="linkedin"
          :valueInput="valueLinkedin"
          v-if="this.$store.state.fieldLinkedin == true"/>
      </div>
      <div class="inputs-input">
        <MyInput
          :LabelInput="socialLabelGithub"
          :Placeholder="socialPlaceholderGithub"
          idInputs="github"
          idSpan="githubError"
          InvalidSpan="Please enter your Github"
          :valueInput="valueGithub"
          v-if="this.$store.state.fieldGithub == true" />
      </div>
      <div class="inputs-input">
        <MyInput
          :LabelInput="socialLabelFacebook"
          :Placeholder="socialPlaceholderFacebook"
          idInputs="facebook"
          :valueInput="valueFacebook"
          v-if="this.$store.state.fieldFacebook == true" />
      </div>
      <div class="inputs-input">
        <MyInput
          :LabelInput="socialLabelInstagram"
          :Placeholder="socialPlaceholderInstagram"
          idInputs="instagram"
          v-if="this.$store.state.fieldInstagram== true" />
      </div>
      <div class="inputs-input">
        <MyInput
          :LabelInput="socialLabelTwitter"
          :Placeholder="socialPlaceholderTwitter"
          idInputs="twitter"
          :valueInput="valueTwitter"
          v-if="this.$store.state.fieldTwitter == true" />
      </div>
      <div class="inputs-input">
        <MyInput
          :LabelInput="labelPersonalizada"
          :Placeholder="placeholderPersonalizada"
          idInputs="personalizada"
          :valueInput="valuePersonalizada"
          v-if="this.$store.state.fieldPersonalizada == true" />
      </div>

    <div class="containerButton" @click="next">
        <MyButton type="0" text="Next" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
import MyInput from '../../Micro/MyInput/MyInput.vue'
export default {
  // eslint-disable-next-line
  name: 'MySocial',
  components: {
    MyButton,
    MyInput
  },
  data () {
    return {
      valueLinkedin: '',
      valueGithub: '',
      valueFacebook: '',
      valueInstagram: '',
      valueTwitter: '',
      valuePersonalizada: ''
    }
  },
  methods: {
    next () {
      const githubError = document.getElementById('githubError')
      this.isOK = false
      if ( // eslint-disable-next-line no-useless-escape
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
          this.$store.state.github
        )
      ) {
        githubError.style.visibility = 'hidden'
        this.isOK = true
      } else {
        githubError.style.visibility = 'visible'
        this.isOK = false
      }
      if (this.isOK) {
        this.$store.state.tab = 'certificates'
      }
      // this.$store.state.tab = 'certificates'
    },
    fieldPersonalizada () {
      this.labelPersonalizada = this.$store.state.labelPersonalizada
      this.placeholderPersonalizada = this.$store.state.placeholderPersonalizada
    },
    getData () {
      this.valueLinkedin = this.$store.state.linkedin
      this.valueGithub = this.$store.state.github
      this.valueFacebook = this.$store.state.facebook
      this.valueInstagram = this.$store.state.instagram
      this.valueTwitter = this.$store.state.twitter
      this.valuePersonalizada = this.$store.state.personalizada
    }
  },
  props: {
    labelPersonalizada: {
      type: String,
      default: 'default'
    },
    placeholderPersonalizada: {
      type: String,
      default: 'default'
    },
    socialLabelLinkedin: {
      type: String,
      default: 'Linkedin'
    },
    socialLabelGithub: {
      type: String,
      default: 'Github'
    },
    socialLabelFacebook: {
      type: String,
      default: 'Facebook'
    },
    socialLabelInstagram: {
      type: String,
      default: 'Instagram'
    },
    socialLabelTwitter: {
      type: String,
      default: 'Twitter'
    },
    socialPlaceholderLinkedin: {
      type: String,
      default: 'https://www.linkedin.com/in/'
    },
    socialPlaceholderGithub: {
      type: String,
      default: 'https://github.com/foobar'
    },
    socialPlaceholderFacebook: {
      type: String,
      default: 'https://www.facebook.com/foobar'
    },
    socialPlaceholderInstagram: {
      type: String,
      default: 'https://www.instagram.com/foobar'
    },
    socialPlaceholderTwitter: {
      type: String,
      default: 'https://www.twitter.com/foobar'
    },
    socialPlaceholderPersonalizada: {
      type: String,
      default: 'https://www.foobar.com/'
    }

  },
  created () {
    this.fieldPersonalizada()
    this.getData()
  }

}
</script>

<style lang="scss" scooped>
@import "./MySocial.scss";
</style>

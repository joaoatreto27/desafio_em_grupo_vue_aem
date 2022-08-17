<template>
  <div class="card-social">

      <div class="inputs-input">
        <MyInput LabelInput="Linkedin" Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"  v-if="this.$store.state.fieldLinkedin == true"/>
      </div>
      <div class="inputs-input">
        <MyInput LabelInput="Github *" Placeholder="https://github.com/foobar" v-if="this.$store.state.fieldGithub == true" />
      </div>
      <div class="inputs-input">
        <MyInput LabelInput="Facebook *" Placeholder="https://www.facebook.com/foobar" v-if="this.$store.state.fieldFacebook == true" />
      </div>
      <div class="inputs-input">
        <MyInput LabelInput="Instagram *" Placeholder="https://www.instagram.com/foobar" v-if="this.$store.state.fieldInstagram== true" />
      </div>
      <div class="inputs-input">
        <MyInput LabelInput="Twitter *" Placeholder="https://www.twitter.com/foobar" v-if="this.$store.state.fieldTwitter == true" />
      </div>
      <div class="inputs-input">
        <MyInput :LabelInput="labelPersonalizada" :Placeholder="placeholderPersonalizada" v-if="this.$store.state.fieldPersonalizada == true" />
      </div>

    <div class="containerButton" @click="next">
        <MyButton text="Next" classButton="Button ButtonNext" />
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
  methods: {
    next () {
      this.$store.state.tab = 'certificates'
    },
    fieldPersonalizada () {
      this.labelPersonalizada = this.$store.state.labelPersonalizada
      this.placeholderPersonalizada = this.$store.state.placeholderPersonalizada
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
    }
  },
  created () {
    this.fieldPersonalizada()
  }

}
</script>

<style lang="scss" scooped>
@import "./MySocial.scss";
</style>

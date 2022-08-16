<template>
  <div class="card-social">
    <div class="inputs">
      <MyInput LabelInput="Linkedin" Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"  v-if="this.$store.state.fieldLinkedin == true"/>
      <MyInput LabelInput="Github *" Placeholder="https://github.com/foobar" v-if="this.$store.state.fieldGithub == true" />
      <MyInput LabelInput="Facebook *" Placeholder="https://www.facebook.com/foobar" v-if="this.$store.state.fieldFacebook == true" />
      <MyInput LabelInput="Instagram *" Placeholder="https://www.instagram.com/foobar" v-if="this.$store.state.fieldInstagram== true" />
      <MyInput LabelInput="Twitter *" Placeholder="https://twitter.com/foobar" v-if="this.$store.state.fieldTwitter == true" />

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
    }
  }

}
</script>

<style lang="scss" scooped>
@import "./MySocial.scss";
</style>

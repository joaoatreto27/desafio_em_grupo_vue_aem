<template>
  <div class="menu-flex">
    <div class="nav-basic" v-show="basic" @click="nav1()">
      <p class="nav ">Basic</p>
    </div>

    <div class="nav-basic-at" v-show="basicOn" @click="nav1()">
      <p class="nav-at">Basic</p>
    </div>

    <div class="menu-social" v-show="social" @click="nav2()">
      <p class="nav">Social</p>
    </div>

    <div class="menu-social-at" v-show="socialOn" @click="nav2()">
      <p class="nav-at">Social</p>
    </div>

    <div class="menu-certificates" v-show="certificates" @click="nav3()">
      <p class="nav">Certificates</p>
    </div>

    <div class="menu-certificates-at" v-show="certificatesOn" @click="nav3()">
      <p class="nav-at">Certificates</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MyMenu',
  data () {
    return {
      basic: false,
      basicOn: true,
      social: true,
      socialOn: false,
      certificates: true,
      certificatesOn: false
    }
  },
  created () {
    switch (this.item) {
      case 'basic':
        this.basic = false
        this.basicOn = true
        break
      case 'social':
        this.social = false
        this.socialOn = true
        break
      case 'certificates':
        this.certificates = false
        this.certificatesOn = true
        break
    }
  },
  methods: {
    nav1 () {
      this.basic = false
      this.basicOn = true
      this.social = true
      this.socialOn = false
      this.certificates = true
      this.certificatesOn = false
      this.$store.state.tab = 'basic'
      //console.log(this.$store.state.tab)
    },
    nav2 () {
      this.basic = true
      this.basicOn = false
      this.social = false
      this.socialOn = true
      this.certificates = true
      this.certificatesOn = false
      this.$store.state.tab = 'sicial'
    },
    nav3 () {
      this.basic = true
      this.basicOn = false
      this.social = true
      this.socialOn = false
      this.certificates = false
      this.certificatesOn = true
      this.$store.state.tab = 'certificates'
    }

  }
}
</script>

<style lang="scss" scooped>
@import "./MyMenu.scss";
</style>

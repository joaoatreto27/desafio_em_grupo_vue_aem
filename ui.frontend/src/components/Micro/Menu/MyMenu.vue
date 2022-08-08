<template>
  <div class="menu-flex">
    <div class="nav-basic" v-show="nav_basic" @click="nav1()">
      <MyText className="nav" msgHeader="Basic" />
    </div>

    <div class="nav-basic-at" v-show="nav_basic_at" @click="nav1()">
      <MyText className="nav-at" msgHeader="Basic" />
    </div>

    <div class="menu-social" v-show="nav_social" @click="nav2()">
      <MyText className="nav" msgHeader="Social" />
    </div>

    <div class="menu-social-at" v-show="nav_social_at" @click="nav2()">
      <MyText className="nav-at" msgHeader="Social" />
    </div>

    <div class="menu-certificates" v-show="nav_certificates" @click="nav3()">
      <MyText className="nav" msgHeader="Certificates" />
    </div>

    <div class="menu-certificates-at" v-show="nav_certificates_at" @click="nav3()">
      <MyText className="nav-at" msgHeader="Certificates" />
    </div>
  </div>
</template>

<script>
import MyText from '../../Micro/MyText/MyText.vue'
export default {
  name: 'MyMenu',
  componets: {
    MyText
  }

}
</script>

<style lang="scss" scooped>
@import "./MyMenu.scss";
</style>

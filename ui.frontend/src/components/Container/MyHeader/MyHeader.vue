<template>
  <div :style="{ 'font-family': headerFont , 'background-color': headerColor , 'border-bottom': headerColorBorder }">
    <div class="headercontainer" v-if="this.$store.state.tab == 'basic'">
      <MyText class="text-header" :msg="headerText" :color="headerTextColor" />
      <MyTitle class="text-header" :msg="headerTitleFirst" :color="headerTitleColor"/>
    </div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'social'">
      <MyText class="text-header" :msg="headerText" :color="headerTextColor" />
      <MyTitle class="text-header" :msg="headerTitleSecond" :color="headerTitleColor"/>
    </div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'certificates'">
      <MyText class="text-header" :msg="headerText" :color="headerTextColor"/>
      <MyTitle class="text-header" :msg="headerTitleThird" :color="headerTitleColor"/>
    </div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'success'">
      <MyText class="text-header" :msg="headerText" :color="headerTextColor"/>
      <MyTitle class="text-header" :msg="headerTitleSuccess" :color="headerTitleColor"/>
    </div>
  </div>

</template>

<script>
import MyText from '../../Micro/MyText/MyText.vue'
import MyTitle from '../../Micro/MyTitle/MyTitle.vue'
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line
  name: "MyHeader",
  components: {
    MyText,
    MyTitle
  },
  props: {
    headerText: {
      type: String,
      default: 'Forms'
    },
    headerTitleFirst: {
      type: String,
      default: 'First Tab'
    },
    headerTitleSecond: {
      type: String,
      default: 'Second Tab'
    },
    headerTitleThird: {
      type: String,
      default: 'Third Tab'
    },
    headerTitleSuccess: {
      type: String,
      default: 'Success Tab'
    },
    headerTextColor: {
      type: String,
      default: 'black'
    },
    headerFont: {
      type: String,
      default: 'Inter'
    },
    headerColor: {
      type: String,
      default: '#e5e5e5'
    },
    headerColorBorder: {
      type: String,
      default: '2px solid #aaaaaa'
    },
    headerTitleColor: {
      type: String,
      default: '#074ee8'
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MyHeader.scss";
</style>

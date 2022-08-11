<template>
  <div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'basic'">
      <MyText :msg="headerTextFist" :color="headerColorFirst" />
      <MyTitle TitleHeader="First"/>
    </div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'social'">
      <MyText msg="Forms" />
      <MyTitle TitleHeader="Second"/>
    </div>
    <div class="headercontainer" v-if="this.$store.state.tab == 'certificates'">
      <MyText msg="Forms" />
      <MyTitle TitleHeader="third"/>
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
    headerTextFist: {
      type: String,
      default: 'Forms'
    },
    headerColorFirst: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss" scooped>
.headercontainer {
  background: #e5e5e5;
  width: 100%;
  padding: 30px 0px 30px 100px;
  border-bottom: 2px solid #aaaaaa;
  text-align: left;
  @media (max-width: 1550px){
    padding-bottom: 10px;
  }
  @media (max-width: 1400px){
    padding-bottom: 5px;
    padding-top: 5px;
  }
  @media (max-width: 768px) {
    border-bottom: none;
    padding-bottom: 15px;
  }
  @media (max-width: 600px) {
    padding-left: 50px;
  }
}
</style>

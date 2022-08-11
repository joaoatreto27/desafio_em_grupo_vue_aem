<template>
    <div class="main">
        <p>Teste Main</p>
        <MyBasic v-if="this.$store.state.tab == 'basic'"/>
        <MySocial v-if="this.$store.state.tab == 'social'"/>
        <MyCertificates v-if="this.$store.state.tab == 'certificates'"/>
    </div>
</template>

<script>
import MyBasic from '../../Container/MyBasic/MyBasic.vue'
import MySocial from '../../Container/MySocial/MySocial.vue'
import MyCertificates from '../../Container/MyCertificates/MyCertificates.vue'
export default {
// eslint-disable-next-line
  name: 'MyMain',
  components: {
    MyBasic,
    MySocial,
    MyCertificates
  }

}
</script>

<style lang="scss" scooped>
@import "./MyMain.scss";
</style>

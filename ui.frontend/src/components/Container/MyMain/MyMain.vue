<template>
    <div class="main">
        <div class="card">
            <div class="title-card" >
                <MyTitle msg="Team Sign Up" nameClass="main-title" type="h3" v-if="this.$store.state.tab !== 'success'"/>
            </div>
            <MyMenu v-if="this.$store.state.tab !== 'success'"/>
            <MyBasic v-if="this.$store.state.tab == 'basic'"/>
            <MySocial v-if="this.$store.state.tab == 'social'"/>
            <MyCertificates v-if="this.$store.state.tab == 'certificates'"/>
            <MySuccess v-if="this.$store.state.tab == 'success'"/>
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
  }

}
</script>

<style lang="scss" scooped>
@import "./MyMain.scss";
</style>

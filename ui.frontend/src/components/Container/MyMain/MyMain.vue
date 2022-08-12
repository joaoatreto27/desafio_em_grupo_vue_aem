<template>
    <div class="main">
        <div class="card">
            <div class="title-card">
                <p>Teste Main</p>
            </div>
            <MyMenu />
            <MyBasic v-if="this.$store.state.tab == 'basic'"/>
            <MySocial v-if="this.$store.state.tab == 'social'"/>
            <MyCertificates v-if="this.$store.state.tab == 'certificates'"/>
        </div>

    </div>
</template>

<script>
import MyMenu from '../../Micro/MyMenu/MyMenu.vue'
import MyBasic from '../../Container/MyBasic/MyBasic.vue'
import MySocial from '../../Container/MySocial/MySocial.vue'
import MyCertificates from '../../Container/MyCertificates/MyCertificates.vue'
export default {
// eslint-disable-next-line
  name: 'MyMain',
  components: {
    MyBasic,
    MySocial,
    MyCertificates,
    MyMenu
  }

}
</script>

<style lang="scss" scooped>
@import "./MyMain.scss";
</style>

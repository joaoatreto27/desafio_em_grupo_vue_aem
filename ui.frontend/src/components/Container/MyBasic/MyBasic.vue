<template>
  <div>

    <div class="containerButton" @click="next">
        <MyButton text="Next" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
export default {
  // eslint-disable-next-line
  name: 'MyBasic',
  components: {
    MyButton
  },
  methods: {
    next () {
      this.$store.state.tab = 'social'
    }
  }

}
</script>

<style lang="scss" scooped>
@import "./MyBasic.scss";
</style>

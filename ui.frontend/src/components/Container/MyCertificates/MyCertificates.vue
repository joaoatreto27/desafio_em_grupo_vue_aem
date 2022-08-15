<template>
  <div>
    <div class="containerButton" @click="next">
        <MyButton text="Finish" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
export default {

  // eslint-disable-next-line
  name: 'MyCertificates',
  components: {
    MyButton
  },
  methods: {
    next () {
      this.$store.state.tab = 'success'
    }
  }

}
</script>

<style>

</style>

<template>
  <div>
    <div class="containerButton" @click="next">
        <MyButton text="Return" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
export default {
  // eslint-disable-next-line
    name: 'MySuccess',
  components: {
    MyButton
  },
  methods: {
    next () {
      this.$store.state.tab = 'basic'
    }
  }
}
</script>

<style>

</style>

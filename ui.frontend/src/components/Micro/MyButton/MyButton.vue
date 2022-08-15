<template>
<div class="containerButton">
    <button :class="classButton"  @click.prevent="event">{{ text }}</button>

</div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    classButton: {
      type: String
    },
    img: {
      type: String,
      default: 'url(("/../assets/Vector.png"))'
    }
  },
  methods: {
    event () {
      // this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './MyButton.scss';
</style>

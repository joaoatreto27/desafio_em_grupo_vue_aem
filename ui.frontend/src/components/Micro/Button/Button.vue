<template>
<div class="containerButton">
    <button :class="classButton" @click.prevent="event">{{ text }}</button>
</div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
    classButton: {
      type: String
    }
  },
  methods: {
    event () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>

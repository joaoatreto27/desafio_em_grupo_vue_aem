<template>
  <div>
    <p :class="className" :style="{ 'color' : color}">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyText",
  props: {
    msg: {
      type: String,
      default: 'Forms'
    },
    color: {
      type: String,
      default: '#111111'
    },
    className: {
      type: String,
      default: 'inter'

    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MyText.scss";
</style>

<template>
  <div class="containerTitle">
    <h1 :class="nameClass" :style="{ 'color' : color }"  v-if="type === 'h1'" >{{ msg }}</h1>
    <h2 :class="nameClass" :style="{ 'color' : color }"  v-if="type === 'h2'" >{{ msg }}</h2>
    <h3 :class="nameClass" :style="{ 'color' : color }"  v-if="type === 'h3'" >{{ msg }}</h3>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyTitle",
  props: {
    msg: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'black'
    },
    nameClass: {
      type: String,
      default: 'inter'
    },
    type: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MyTitle.scss";
</style>

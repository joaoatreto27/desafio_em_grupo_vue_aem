<template>
  <div>
    <p :style="{ 'color' : msgColor}">{{ msgHeader }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyText",
  props: {
    msgHeader: {
        type: String,
        default: 'Forms'
    },
    msgColor: {
        type: String,
        default: ''
    }
  },
};
</script>

<style lang="scss" scooped>
p {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
}
</style>
<template>
  <div>
    <p :class="TextHeaderClass" :style="{ 'color' : msgHeaderColor}">{{ msgHeader }}</p>
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
    msgHeaderColor: {
        type: String,
        default: '#111111'
    },
    TextHeaderClass: {
      type: String,
      default: 'inter'

    }
  }
}
</script>

<style lang="scss" scooped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

p {
  font-weight: 400;
  font-size: 1.2em;
  width: 100%;

  .inter {
    font-family: "Inter", sans-serif;
  }

  .nunito {
    font-family: 'Nunito', sans-serif;
  }

  .space-mono{
    font-family: "Space Mono", monospace;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
}
</style>

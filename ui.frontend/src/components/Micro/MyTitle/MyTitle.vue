<template>
  <div class="containerTitle">
    <h1 :style="{ 'color' : TitleColor }">{{ TitleHeader }} Tab</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "MyTitle",
  props: {
    TitleHeader: {
      type: String,
      default: 'First'
    },
    TitleColor: {
      type: String,
      default: '#074ee8'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
.containerTitle {
  font-family: "Inter", sans-serif;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  h1 {
    font-size: 3em;
    margin: 0;
    color: #074ee8;
    font-weight: 700;

    @media (max-width: 1550px){
      font-size: 2em;
    }
    @media (max-width: 1400px){
      font-size: 1.5em;
    }
  }
}

</style>

<template>
<div class="containerButton">

    <button
      class="classButton"
      v-if="type === '0'"
      id="button0"
      @click.prevent="event"
    >
    {{ text }} <img class="img0" src="@/assets/Vector.png" alt="Next"/>
    </button>
    <button
      class="classButton"
      v-if="type === '1'"
      id="button1"
      @click.prevent="event"
    >
    <img class="img1" src="@/assets/VectorFinish.png" alt="Finish"/>{{ text }}
    </button>
    <button
      class="classButton"
      v-if="type === '2'"
      id="button2"
      @click.prevent="event"
    ><img class="img2" src="@/assets/VectorMore.png" alt="More"/>
    {{ text }} <img class="img0" src="@/assets/Vector.png" alt="Next"/>
    </button>
    <button
      class="classButton"
      v-if="type === '3'"
      id="button3"
      @click.prevent="event"
    >
    {{ text }} <img class="img3" src="@/assets/VectorCertificates.png" alt="Certificates"/>
    </button>
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
    type: {
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

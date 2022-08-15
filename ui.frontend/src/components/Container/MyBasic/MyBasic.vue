<template>
  <div>

    <div class="basicBirthday">

      <MyBirthday />

    </div>

    <div class="basicFooter">
        <MyCheckbox
        checkboxid="checkbox"
        content="I accept the terms and privacy"
        class="chkx"/>

        <Button
        classButton="Button ButtonNext"
        text="Next >" class="btn"/>
      </div>
    <div class="containerButton" @click="next">
        <MyButton text="Next" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>

import MyCheckbox from '../../Micro/MyCheckbox/MyCheckbox'
import Button from '../../Micro/Button/Button'
import MyBirthday from '../../Container/MyBirthday/MyBirthday'
import MyButton from '../../Micro/MyButton/MyButton.vue'
export default {
  // eslint-disable-next-line
  name: 'MyBasic',
  components: {
<<<<<<< HEAD
    MyCheckbox,
    Button,
    MyBirthday
    MyButton
  },
  methods: {
    next () {
      this.$store.state.tab = 'social'
    }
  }

}
</script>

<style lang="scss" scooped>
@import "./MyBasic.scss";
</style>

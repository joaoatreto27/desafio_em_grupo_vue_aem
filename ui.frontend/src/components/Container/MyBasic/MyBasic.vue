<template>
  <div class="mainBody">

    <div class="basicBirthday">

        <MyBirthday />

    </div>

    <div class="basicFooter">
          <MyCheckbox
          checkboxid="checkbox"
          content="I accept the terms and privacy"
          class="chkx"/>

      <div class="containerButton" @click="next">
          <MyButton text="Next" classButton="Button ButtonNext" />
      </div>
    </div>
  </div>
</template>

<script>

import MyCheckbox from '../../Micro/MyCheckbox/MyCheckbox'
import MyButton from '../../Micro/MyButton/MyButton'
import MyBirthday from '../../Container/MyBirthday/MyBirthday'
export default {
  // eslint-disable-next-line
  name: 'MyBasic',
  components: {
    MyCheckbox,
    MyBirthday,
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

.mainBody {
  width: 84%;
}

</style>

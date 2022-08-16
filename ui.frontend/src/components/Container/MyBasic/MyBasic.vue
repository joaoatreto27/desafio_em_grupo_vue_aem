<template>
  <div class="mainBody">

    <MyInput LabelInput="Full Name *"
    Placeholder="Foo Bar"
    InvalidSpan="Please enter your name"/>

    <MyInput LabelInput="Nickname"
    Placeholder="Juanito"/>

    <div class="emailPhoneBody">

      <MyInput ClassDiv="emailDiv"
      LabelInput="Email *"
      Placeholder="foo@bar.com"
      InvalidSpan="Please enter your Email"
      idInputs="emailInput"/>

      <MyInput ClassDiv="phoneDiv"
      LabelInput="Phone"
      Placeholder="(83) 00000-0000"
      idInputs="phoneInput"/>

    </div>

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
import MyInput from '../../Micro/MyInput/MyInput'

export default {
  // eslint-disable-next-line
  name: 'MyBasic',
  components: {
    MyCheckbox,
    MyBirthday,
    MyButton,
    MyInput
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
  display: flex;
  flex-flow: column wrap;

  .emailPhoneBody {
    display: flex;
    justify-content: space-between;
  }

  div {
    font-family: 'Nunito';
  }
  input {
    width: 100%;
  }

  .basicFooter {
    margin: 20px 0 0;
  }

}

</style>

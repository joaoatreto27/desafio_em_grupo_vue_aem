<template>
  <div class="mainBody">
    <MyInput
      LabelInput="Full Name *"
      Placeholder="Foo Bar"
      idInputs="fullName"
      idSpan="fullNameError"
      InvalidSpan="Please enter your name"
    />

    <MyInput LabelInput="Nickname" Placeholder="Juanito" />

    <div class="emailPhoneBody">
      <MyInput
        ClassDiv="emailDiv"
        LabelInput="Email *"
        Placeholder="foo@bar.com"
        idSpan="emailError"
        InvalidSpan="Please enter your Email"
        idInputs="emailInput"
      />

      <MyInput
        ClassDiv="phoneDiv"
        LabelInput="Phone"
        Placeholder="(83) 00000-0000"
        idInputs="phoneInput"
      />
    </div>

    <div class="basicBirthday">
      <MyBirthday />
    </div>

    <div class="basicFooter">
      <MyCheckbox
        checkboxid="checkbox"
        content="I accept the terms and privacy"
        class="chkx"
      />

      <div class="containerButton" @click="next">
        <MyButton text="Next >" classButton="Button ButtonNext" />
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
  data () {
    return {
      isOK: undefined
    }
  },
  methods: {
    next () {
      const nameError = document.getElementById('fullNameError')
      const emailError = document.getElementById('emailError')
      const birthdayError = document.getElementById('birthdayError')
      const checkboxError = document.getElementById('footerError')
      this.isOK = true
      if (
        !/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/.test(
          this.$store.state.fullname
        )
      ) {
        nameError.style.visibility = 'visible'
        this.isOK = false
      } else {
        nameError.style.visibility = 'hidden'
      }

      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          this.$store.state.email
        )
      ) {
        emailError.style.visibility = 'visible'
        this.isOK = false
      } else {
        emailError.style.visibility = 'hidden'
      }

      if (this.$store.state.age === '') {
        birthdayError.style.visibility = 'visible'
        this.isOK = false
      } else {
        birthdayError.style.visibility = 'hidden'
      }

      const checkbox = document.getElementById('checkbox')
      if (!checkbox.checked) {
        checkboxError.style.visibility = 'visible'
        this.isOK = false
      } else {
        checkboxError.style.visibility = 'hidden'
      }

      if (this.isOK) {
        this.$store.state.tab = 'social'
      }
    }
  }
}
</script>

<style lang="scss" scooped>
@import './MyBasic.scss';

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

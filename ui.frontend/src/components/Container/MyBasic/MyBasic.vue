<template>
  <div class="mainBody">
    <MyInput
      LabelInput="Full Name *"
      Placeholder="Foo Bar"
      idInputs="fullName"
      idSpan="fullNameError"
      :valueInput="valueFullname"
      InvalidSpan="Please enter your name"
      v-if="this.$store.state.fieldFullname == true"
    />

    <MyInput
      LabelInput="Nickname"
      Placeholder="Juanito"
      idInputs="nickname"
      :valueInput="valueNickname"
      v-if="this.$store.state.fieldNickname == true"
     />

    <div class="emailPhoneBody">
      <MyInput
        ClassDiv="emailDiv"
        LabelInput="Email *"
        Placeholder="foo@bar.com"
        idSpan="emailError"
        InvalidSpan="Please enter your Email"
        idInputs="emailInput"
        :valueInput="valueEmail"
        v-if="this.$store.state.fieldEmail == true"
      />

      <MyInput
        ClassDiv="phoneDiv"
        LabelInput="Phone"
        Placeholder="(83) 00000-0000"
        idInputs="phoneInput"
        :valueInput="valuePhone"
        v-if="this.$store.state.fieldPhone == true"
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
        v-if="this.$store.state.fieldAcept == true"
      />

      <div class="containerButton" @click="next">
        <MyButton type="0" text="Next" classButton="Button ButtonNext" />
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
      isOK: undefined,
      valueFullname: '',
      valueNickname: '',
      valueEmail: '',
      valuePhone: '',
      valueAge: '',
      valueCheckbox: false

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
    },
    getData () {
      console.log('Getdatadabasic')
      this.valueFullname = this.$store.state.fullname
      this.valueNickname = this.$store.state.nickname
      this.valueEmail = this.$store.state.email
      this.valuePhone = this.$store.state.phone
      this.valueAge = this.$store.state.age
    }
  },
  created () {
    this.getData()
  }

}
</script>

<style lang="scss" scoped>
@import './MyBasic.scss';

.mainBody {
  width: 84%;
  display: flex;
  flex-flow: column wrap;

  input {
    height: 40px;
  }

  .emailPhoneBody {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
  }

  .birthdayBody {
    margin-top: 20px;
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

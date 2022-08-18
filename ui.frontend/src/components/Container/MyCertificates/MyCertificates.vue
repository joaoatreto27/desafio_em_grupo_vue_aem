<template>
  <div class="certificate-container">
    <MyInput
      ClassDiv="fullDiv"
      LabelInput="Certificates"
      ClassInput="Certificates"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="valueCertificates"
      v-if="this.$store.state.fieldCertificates == true"
    />
    <div class="buttons">
        <MyButton
          type="3"
          text="Certificate"
          classButton="certificateButton"
        ></MyButton>
        <MyButton
          type="2"
          text="More"
          classButton="moreButton"
        ></MyButton>
    </div>
    <MyInput
      ClassDiv="fullDiv"
      LabelInput="TeamName *"
      idSpan="teamnameError"
      ClassInput="Team"
      InvalidSpan="Please enter your Team Name"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="valueTeamName"
      v-if="this.$store.state.fieldTeamName == true"
    />
    <MyInput
      ClassDiv="fullDiv"
      LabelInput="Institution *"
      idSpan="institutionError"
      ClassInput="Institution"
      InvalidSpan="Please enter your Institution"
      Placeholder="Universidade Federal da Paraíba"
      Type="text"
      :valueInput="valueInstitution"
      v-if="this.$store.state.fieldInstitution == true"
    />
    <MyInput
      ClassDiv="fullDiv"
      LabelInput="Graduation *"
      idSpan="graduationError"
      ClassInput="Graduation"
      InvalidSpan="Please enter your Graduation"
      Placeholder="Ciências da Computação"
      Type="text"
      :valueInput="valueGraduation"
      v-if="this.$store.state.fieldGraduation == true"
    />
    <div class="containerButton" @click="next">
        <MyButton text="Finish" classButton="Button" type="1" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
import MyInput from '../../Micro/MyInput/MyInput.vue'

export default {
  // eslint-disable-next-line
  name: 'MyCertificates',
  components: {
    MyButton,
    MyInput
  },
  data () {
    return {
      valueCertificates: '',
      valueTeamName: '',
      valueInstitution: '',
      valueGraduation: ''
    }
  },
  methods: {
    next () {
      this.$store.state.tab = 'success'
    },
    getData () {
      this.valueCertificates = this.$store.state.certificates
      this.valueTeamName = this.$store.state.teamname
      this.valueInstitution = this.$store.state.institution
      this.valueGraduation = this.$store.state.graduation
    }
  }
}

</script>

<style lang="scss" scoped>
@import "./MyCertificates.scss";
</style>

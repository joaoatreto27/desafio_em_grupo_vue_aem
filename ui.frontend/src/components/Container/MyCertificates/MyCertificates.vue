<template>
  <div class="certificate-container">
    <MyInput
      ClassDiv="inputCertificates"
      LabelInput="Certificates"
      ClassInput="Certificates"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="certificatesValue"
    />
    <div class="buttons">
        <MyButton
          text="Certificate"
          classButton="certificateButton"
        ></MyButton>
        <MyButton
          text="More"
          classButton="moreButton"
        ></MyButton>
    </div>
    <MyInput
      ClassDiv="inputTeam"
      LabelInput="TeamName *"
      idSpan="teamSpan"
      ClassInput="Team"
      InvalidSpan="Please enter your Team Name"
      Placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
      Type="text"
      :valueInput="teamnameValue"
    />
    <MyInput
      ClassDiv="inputInstitution"
      LabelInput="Institution *"
      idSpan="institutionSpan"
      ClassInput="Institution"
      InvalidSpan="Please enter your Institution"
      Placeholder="Universidade Federal da Paraíba"
      Type="text"
      :valueInput="institutionValue"
    />
    <MyInput
      ClassDiv="inputGraduation"
      LabelInput="Graduation *"
      idSpan="graduationSpan"
      ClassInput="Graduation"
      InvalidSpan="Please enter your Graduation"
      Placeholder="Ciências da Computação"
      Type="text"
      :valueInput="graduationValue"
    />
    <div class="containerButton" @click="next">
        <MyButton text="Finish" classButton="Button ButtonNext" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
import MyInput from '../../Micro/MyInput/MyInput.vue'

export default {

  // eslint-disable-next-line
  name: "MyCertificates",
  components: {
    MyInput,
    MyButton
  }
}

</script>

<style lang="scss" scoped>
@import "./MyCertificates.scss";
</style>

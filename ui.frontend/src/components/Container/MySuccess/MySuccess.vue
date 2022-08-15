<template>
  <div class="data">
    <p class="text">Your data has been sent successfully!</p>
    <p class="text">Full Name: {{ fullname }}</p>
    <p class="text">Email: {{ email }}</p>
    <p class="text">Birthday: {{ day }}/{{ month }}/{{ year }}</p>
    <p class="text">Age: {{ age }}</p>
    <p class="text">GitHub: {{ github }}</p>
    <p class="text">Certificates: {{ certificates }}</p>
    <p class="text">Team Name: {{ teamname }}</p>
    <p class="text">Institution: {{ institution }}</p>
    <p class="text">Graduation: {{ graduation }}</p>
    <div class="containerButton" @click="resetPage">
      <MyButton text="Return" classButton="Button ButtonReturn" />
    </div>
  </div>
</template>

<script>
import MyButton from '../../Micro/MyButton/MyButton.vue'
export default {
  // eslint-disable-next-line
    name: 'MySuccess',
  components: {
    MyButton
  },
  methods: {
    resetPage () {
      this.$store.state.tab = 'basic'
    }
  },
  data () {
    return {
      fullname: this.$store.state.fullname,
      email: this.$store.state.email,
      day: this.$store.state.day,
      month: this.$store.state.month,
      year: this.$store.state.year,
      age: this.$store.state.age,
      github: this.$store.state.github,
      certificates: this.$store.state.certificates,
      teamname: this.$store.state.teamname,
      institution: this.$store.state.institution,
      graduation: this.$store.state.graduation
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./MySuccess.scss";
</style>

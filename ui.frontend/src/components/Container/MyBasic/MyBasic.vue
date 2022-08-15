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
  </div>
</template>

<script>
import MyCheckbox from '../../Micro/MyCheckbox/MyCheckbox'
import Button from '../../Micro/Button/Button'
import MyBirthday from '../../Container/MyBirthday/MyBirthday'

export default {
  // eslint-disable-next-line
  name: 'MyBasic',
  components: {
    MyCheckbox,
    Button,
    MyBirthday
  }

}
</script>

<style lang="scss" scoped>

.basicFooter {
  display: flex;
  width: 31.25em;
  justify-content: space-between;
  height: 100px;
  .chkx {
    align-self: flex-start;
  }

  .btn {
    align-self: flex-end;
  }

}

</style>

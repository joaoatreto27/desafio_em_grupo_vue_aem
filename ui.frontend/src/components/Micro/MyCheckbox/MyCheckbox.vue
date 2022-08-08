<template>
    <div class="checkbox">
        <input type="checkbox"
        :name="checkboxname"
        :id="checkboxid">
        <label :for="checkboxid">{{ content }}</label>
    </div>
</template>

<script>

export default {
  name: 'MyCheckbox',
  props: {
    content: {
      type: String
    }
  }
}

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.checkbox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    input {
        background-color: #074EE8;
        border: 2px solid #074EE8;
        border-radius: 2px;
        width: 20px;
        height: 20px;
    }

    label {
        font-family: "Nunito";
        font-weight: 400;
        font-size: 16px;
    }
}

</style>

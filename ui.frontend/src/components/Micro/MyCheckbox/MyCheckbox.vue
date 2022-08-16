<template>
    <div class="checkbox">
        <input type="checkbox"
        :name="checkboxname"
        :id="checkboxid">
        <label :for="checkboxid">{{ content }}</label>

        <span :id="idSpan"
        :class="ClassSpan"
        :style="{ 'color' : SpanColor}">
        {{ InvalidSpan }}</span>
    </div>
</template>

<script>

export default {
  name: 'MyCheckbox',
  props: {
    content: {
      type: String
    },
    idSpan: {
      type: String
    },
    ClassSpan: {
      type: String
    },
    SpanColor: {
      type: String,
      default: '#ff0000'
    },
    InvalidSpan: {
      type: String,
      default: 'Please confirm the terms'
    }
  }
}

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;

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
        color: #111111;
        margin-right: 2em;
    }
}

</style>

<template>
  <div :class="ClassDiv">
    <label :class="ClassLabel" :style="{ 'color' : LabelColor}">{{ LabelInput }} </label>
    <span :id="idSpan" :class="ClassSpan" :style="{ 'color' : SpanColor}">{{ InvalidSpan }}</span>
    <input
      :type="Type"
      :class="ClassInput"
      :placeholder="Placeholder"
      :id="idInputs"
      @input="getValue"
      :value="valueInput"
    />
  </div>
</template>

<script>
export default {
  name: 'MyInputs',
  props: {
    idSpan: {
      type: String,
      default: ''
    },
    ClassSpan: {
      type: String,
      default: 'nunito-span'
    },
    SpanColor: {
      type: String,
      default: '#ff0000'
    },
    InvalidSpan: {
      type: String,
      default: 'Invalid'
    },
    ClassLabel: {
      type: String,
      default: 'nunito-label'
    },
    LabelInput: {
      type: String,
      default: 'Label'
    },
    Type: {
      type: String,
      default: 'text'
    },
    ClassInput: {
      type: String,
      default: 'nunito-input'
    },
    Placeholder: {
      type: String,
      default: 'PlaceHolder'
    },
    idInputs: {
      type: String,
      default: ''
    },
    valueInput: {
      type: String,
      default: ''
    },
    LabelColor: {
      type: String,
      default: '#767676'
    },
    ClassDiv: {
      type: String,
      default: 'fullDiv'
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

.fullDiv {
  width: 100%;
}

.emailDiv {
  width: 51%;
}

.phoneDiv {
  width: 30%;
}

label {
  font-size: 1em;
  margin-right: 2em;

    .inter-label {
    font-family: "Inter", sans-serif;
    }

    .nunito-label {
    font-family: 'Nunito', sans-serif;
    }

    .space-mono-label{
    font-family: "Space Mono", monospace;
    }

  @media (max-width: 450px){
    font-size: 1em;
    margin-right: 1em;
  }
}

span {
  font-size: 1em;
  visibility: hidden;
    .inter-span {
    font-family: "Inter", sans-serif;
    }
    .nunito-span {
    font-family: 'Nunito', sans-serif;
    }
    .space-mono-span {
    font-family: "Space Mono", monospace;
    }
  @media (max-width: 450px){
    font-size: 0.75em;
  }
}

input {
  display: flex;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  width: 100%;
  height: 2.5em;
  background: transparent;
  color: #767676;
  font-size: 1em;
  padding-left: 10px;
  margin-top: 5px;
  box-sizing: border-box;
    .inter-input {
    font-family: "Inter", sans-serif;
    }
    .nunito-input {
    font-family: 'Nunito', sans-serif;
    }
    .space-mono-input {
    font-family: "Space Mono", monospace;
    }
  &:focus {
    outline: 0;
  }
}
</style>

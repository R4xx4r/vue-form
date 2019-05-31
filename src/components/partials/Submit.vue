<template>
  <button class="vue-form__button vue-form__button--submit" type="submit" v-text="text" :style="{'width': width, 'color': color, 'background-color': backgroundColor}"></button>
</template>

<script>
  export default {
    name: 'SubmitButton',
    props: {
      text: {
        type: String,
        default: 'Send'
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      align: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>
  .vue-form__button--submit {
    border: 0;
    padding: 10px 15px;
  }
</style>

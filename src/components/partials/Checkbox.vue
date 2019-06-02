<template>

  <div class="vue-form__input-wrapper" :style="{'width': width}">

    CHECKBOX

  </div>

</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>

  .vue-form__input-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  }

  .vue-form__error {
    color: #FF0000;
  }

</style>

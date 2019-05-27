<template>
  <div class="vue-form__form-row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FormRow"
  }
</script>

<style>
  .vue-form__form-row {
    display: flex;
    width: 100%;
  }
</style>

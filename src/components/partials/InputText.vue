<template>

  <div class="vue-form__input vue-form__input--text" :style="{'width': width}">

    <label :for="name" v-text="getLabel" v-if="label"></label>
    <input type="text" :name="name" :placeholder="getPlaceholder" />

    <span class="vue-form__error" v-text="errorMsg" v-if="showError"></span>

  </div>

</template>

<script>
  export default {
    name: 'InputText',
    data() {
      return {
        showError: false
      }
    },
    props: {
      width: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      errorMsg: {
        type: String,
        default: ''
      }
    },
    computed: {
      getPlaceholder() {
        return this.getRequiredText(this.required, this.placeholder);
      },
      getLabel() {
        return this.getRequiredText(this.required, this.label);
      }
    },
    methods: {
      getRequiredText(required, text) {
        if (required) {
          return text + ' *';
        }
        return text;
      }
    }
  }
</script>

<style scoped>

  .vue-form__input--text {
    display: flex;
    flex-direction: column;
  }

  .vue-form__error {
    color: #FF0000;
  }

</style>

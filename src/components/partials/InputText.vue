<template>

  <div class="vue-form__input-wrapper" :style="{'width': width}">

    <label class="vue-form__label" :for="name" v-text="getLabel" v-if="label"></label>
    <input class="vue_form__input vue_form__input--text" type="text" :name="name" :placeholder="getPlaceholder" />

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

  .vue-form__input-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
  }
  .vue-form__input-wrapper:first-child {
    margin-left: 0;
  }
  .vue-form__input-wrapper:last-child {
    margin-right: 0;
  }

  .vue-form__label {
    font-weight: bold;
    padding-left: 5px
  }

  .vue_form__input--text {
    padding: 10px 5px;
  }

  .vue-form__error {
    color: #FF0000;
  }

</style>

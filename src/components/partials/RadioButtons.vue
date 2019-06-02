<template>

  <div class="vue-form__input-wrapper" :style="{'width': width}">

    <div class="vue-form__radio-label" v-text="getLabel"></div>

    <div class="vue-form__radio-items">

      <div class="vue-form__radio-item" v-for="(option, index) in options" :key="index">

        <input class="vue_form__input vue_form__input--radio" type="radio" :id="getId(option)" :name="name" :value="option" >
        <label :for="getId(option)" v-text="option"></label>

      </div>

    </div>

    <span class="vue-form__error" v-text="errorMsg" v-if="showError"></span>

  </div>

</template>

<script>
  export default {
    name: 'RadioButtons',
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
      name: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      color: {
        type: String,
        default: ''
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
      },
      getId(option) {
        return this.name + '-' + option;
      }
    }
  }
</script>

<style>

  .vue-form__radio-label {
    font-weight: bold;
    padding-left: 5px;
    margin-bottom: 5px;
  }

  .vue-form__radio-items {
    display: flex;
    flex-direction: row;
  }

  .vue-form__radio-item {
    margin: 0 5px;
  }
  .vue-form__radio-item:first-child {
    margin-left: 0;
  }
  .vue-form__radio-item:last-child {
    margin-right: 0;
  }

  .vue-form__error {
    color: #FF0000;
  }

</style>

<template>
  <div id="vue-form">
    <!-- <Form :formData="form" :configuration="configuration" /> -->
    <ExampleForm :formData="form" :configuration="configuration" />
  </div>
</template>

<script>
  //import Form from './components/Form.vue';
  import ExampleForm from './components/Example.vue';

  export default {
    name: 'VueForm',
    components: {
      //Form,
      ExampleForm
    },
    data() {
      return {
        form: {

        },
        configuration: {

        }
      }
    }
  }
</script>

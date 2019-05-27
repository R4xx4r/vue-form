<template>

  <form class="vue-form__form" :id="formData.id">

    <FormRow v-for="(row, index) in formData.rows" :key="index">

      <template v-for="obj in row">
        

      </template>

    </FormRow>

  </form>

</template>

<script>
  import FormRow from '@/components/partials/FormRow.vue';

  export default {
    name: 'Form',
    components: {
      FormRow
    },
    props: {
      formData: {
        type: Object,
        required: true
      },
      config: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
 .vue-form__form {
   display: flex;
   flex-wrap: wrap;
   width: 100%;
 }
</style>

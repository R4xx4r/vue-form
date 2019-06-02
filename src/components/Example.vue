<template>

  <form class="vue-form__form" :id="formData.id">

    <FormRow v-for="(row, index) in formData.rows" :key="index">

      <template v-for="(obj, index) in row">

        <RadioButtons
          v-if="obj.type == 'radio'"
          :key="index"
          :label="obj.label"
          :name="obj.name"
          :options="obj.options"
          :color="obj.color"
          :required="obj.required"
          :errorMsg="obj.errorMsg"
          :width="getWidth(obj.width, row.length)" />

        <InputText
          v-if="obj.type == 'text'"
          :key="index"
          :label="obj.label"
          :placeholder="obj.placeholder"
          :name="obj.name"
          :required="obj.required"
          :errorMsg="obj.errorMsg"
          :width="getWidth(obj.width, row.length)" />

        <Group
          v-if="obj.type == 'group'"
          :key="index"
          :width="getWidth(obj.width, row.length)" />

        <TextArea
          v-if="obj.type == 'textarea'"
          :key="index"
          :label="obj.label"
          :placeholder="obj.placeholder"
          :rows="obj.rows"
          :columns="obj.columns"
          :name="obj.name"
          :required="obj.required"
          :errorMsg="obj.errorMsg"
          :width="getWidth(obj.width, row.length)" />

        <Checkbox
          v-if="obj.type == 'checkbox'"
          :key="index"
          :name="obj.name"
          :text="obj.text"
          :color="obj.color"
          :required="obj.required"
          :errorMsg="obj.errorMsg"
          :width="getWidth(obj.width, row.length)" />

        <Submit
          v-if="obj.type == 'submit'"
          :key="index"
          :text="obj.text"
          :backgroundColor="obj.backgroundColor"
          :color="obj.color"
          :width="getWidth(obj.width, row.length)" />

      </template>

    </FormRow>

  </form>

</template>

<script>
  import FormRow from '@/components/partials/FormRow.vue';
  import RadioButtons from '@/components/partials/RadioButtons.vue';
  import InputText from '@/components/partials/InputText.vue';
  import Group from '@/components/partials/Group.vue';
  import TextArea from '@/components/partials/TextArea.vue';
  import Checkbox from '@/components/partials/Checkbox.vue';
  import Submit from '@/components/partials/Submit.vue';

  export default {
    name: 'Form',
    components: {
      FormRow,
      RadioButtons,
      InputText,
      Group,
      TextArea,
      Checkbox,
      Submit
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
    },
    methods: {
      getWidth(configuredWidth, rowItems) {
        if (configuredWidth) {
          return configuredWidth;
        }
        // calculate width of given objects in row
        return 100 / rowItems + '%';
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

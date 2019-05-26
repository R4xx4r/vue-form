<template>
  <form>
    FORM
  </form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      formData: {
        type: Object,
        required: true
      },
      configuration: {
        type: Object,
        required: true
      }
    }
  }
</script>

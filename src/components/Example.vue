<template>
  <form>
    EXAMPLE FORM
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
      config: {
        type: Object,
        required: true
      }
    }
  }
</script>

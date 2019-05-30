<template>

  <div :style="{'width': width}">CHECKBOX</div>

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

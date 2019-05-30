<template>

  <div :style="{'width': width}">
    INPUT TEXT
  </div>

</template>

<script>
  export default {
    name: 'InputText',
    props: {
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>

  <div :style="{'width': width}">TEXTAREA</div>

</template>

<script>
  export default {
    name: 'TextArea',
    props: {
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>

  <div :style="{'width': width}">RADIO</div>

</template>

<script>
  export default {
    name: 'RadioButtons',
    props: {
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

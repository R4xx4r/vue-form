<template>

  <div :style="{'width': width}">GROUP</div>

</template>

<script>
  export default {
    name: 'Group',
    props: {
      width: {
        type: String,
        default: ''
      }
    }
  }
</script>

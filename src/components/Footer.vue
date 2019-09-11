<template>
  <footer id='page-footer'>
    {{ msg }}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  #page-footer {
    justify-content: center;
    font-weight: normal;
  }
</style>

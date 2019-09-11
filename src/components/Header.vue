<template>
  <header id='page-header'>
    <h2>mikedonovan.dev</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  #page-header {
    position: fixed;
		height: var(--header-height);
    justify-content: space-between;
		z-index: 1;

  }
</style>

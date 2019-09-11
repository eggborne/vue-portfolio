<template>
  <header id='page-header'>
    <h2>mikedonovan.dev</h2>
		<Hamburger />
  </header>
</template>

<script>
import Hamburger from './Hamburger.vue';
export default {
  name: 'Header',
  props: {
    msg: String
	},
	components: {
		Hamburger
	}
}
</script>

<style scoped>
  #page-header {
    position: fixed;
		height: var(--header-height);
    justify-content: space-between;
		align-items: stretch;
		z-index: 2;
		padding: var(--main-padding);
  }
</style>

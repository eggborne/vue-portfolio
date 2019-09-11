<template>
  <div id='hamburger' v-on:touchstart='toggle'>
    <div class='hamburger-bar'></div>
  </div>
</template>

<script>
export default {
	name: 'Hamburger',
	methods: {
		toggle: function() {
			console.log(this)
		}
	}
}
</script>

<style scoped>
#hamburger {
	width: var(--header-height);
	background: gray;
}
.hamburger-bar {

}
</style>

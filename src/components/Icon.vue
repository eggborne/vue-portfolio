<template>
	<div
		:class='[`icon`, `icon-${project.directory}`]'
		:style='{
			backgroundImage: `url(${project.iconUrl})`,
			width: `${size}px`,
			height: `${size}px`
		}'
	></div>
</template>

<script>
export default {
	name: 'Icon',
	props: {
		project: Object,
		listIndex: Number
	},
	computed: {
		size: function() {
			return this.$attrs.size
		}
	}
};
</script>

<style scoped>
.icon {
	/* background-image: url('/iconsheet.png'); */
	background-repeat: no-repeat;
	background-size: auto 100%;
}
</style>

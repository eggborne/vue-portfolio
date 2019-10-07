<template>
<div>
	<div class='label'>{{ option.title }}</div>
	<input 
		v-on:change='() => setOption(option.name, currentValue)' 
		v-model='currentValue'
		:label='option.name' 
		type='color'
	/>
</div>
</template>

<script>
export default {
	name: 'ColorPicker',
	data: () => ({ 
		currentValue: ''
	}),
	props: {
		option: Object,
		setOption: Function,
		colorValue: String
	},
	created() {
		},
	mounted() {
		console.log(this.option.name, 'color picker mounted with colorval', this.colorValue)
		this.currentValue = this.colorValue || this.option.defaultValue;
	}
};
</script>

<style scoped>
.color {
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: calc(var(--header-height) / 1.25);
	align-items: center;
	padding: 0 !important;	
}
.label {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: max-content;
	color: rgb(255, 255, 255); 
	mix-blend-mode: difference;
	pointer-events: none;
}
input[type="color" i] {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 100%;
	padding: 0;
	border: 0;
	outline: 0;
	background: transparent;
}
</style>

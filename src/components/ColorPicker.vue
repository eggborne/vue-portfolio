<template>
<div :class='$store.state.userOptions.darkMode && (option.name === `mainBgColor` || option.name === `cardBgColor`) ? `disabled-input` : ``'>
	<div class='label'>{{ option.title }}</div>
	<input 
		type='color'
		v-on:change='(e) => setColor(e, option.name)'
		:value='colorValue'
		:label='option.name'		
	/>
</div>
</template>

<script>
import { userOptionData } from '../projects.js';
export default {
	name: 'ColorPicker',
	data: () => ({ 
		currentValue: ''
	}),
	props: {
		option: Object,
		colorValue: String
	},
	mounted() {
		console.log(this.option.name, 'color picker mounted with colorval', this.colorValue)
	},
	methods: {
		setColor(e, colorType) {
			console.log('setColor arg', e);
			let newColor = e.target.value
			console.log('e', e)
			// let cssVar = userOptionData[colorType].cssVar;
			// console.log('setting', cssVar, 'to', newColor)
			// document.documentElement.style.setProperty(cssVar, newColor);
			this.$store.commit('userOptions/setOption', {
				optionName: colorType,
				value: newColor
			});
		},
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
.disabled-input {
	opacity: 0.25;
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

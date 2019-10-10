<template>
<div>
	<div>{{ option.title }}	{{ currentValue }}</div>
		
	<input 
		v-on:input='() => adjustRangedOption(option.name, currentValue)' 
		v-model='currentValue' 
		:label='option.name' 
		type='range' 
		:step='option.step'
		:min='option.minValue' 
		:max='option.maxValue'
		:style='{
			background: `linear-gradient(to right, #ffffff66 ${(currentValue / option.maxValue) * 100}%, #ffffff11 ${(currentValue / option.maxValue) * 100}%`
		}'
	/>
</div>
</template>

<script>
export default {
	name: 'Slider',
	data: () => ({ 
		currentValue: ''
	}),
	props: {
		option: Object,
    on: Boolean,
		adjustRangedOption: Function,
		rangeValue: Number
	},
	created() {
		this.currentValue = this.rangeValue || this.option.defaultValue;
	}
};
</script>

<style scoped>
#option-list .range {
	background: var(--sheer-white);
	border: 0;
	max-width: 100%;
	height: var(--header-height);
	border-radius: calc(var(--inner-padding) / 2);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr;
	justify-items: end;
	align-items: center;
	align-content: center;
	padding-top: calc(var(--main-padding) / 2);
	padding-bottom: calc(var(--main-padding) / 2);
	background: transparent;
}
#option-list .range:first-of-type {
	margin-top: calc(var(--main-padding));
}
div:first-child {
	justify-self: start;	
}
input {
	grid-column-end: span 2;
}

</style>

<template>
<div class='menu-slider'>
	<div>
		<span class='option-name'>{{ option.title }}</span>
		<span 
			class='option-value'>{{  (this.currentValue === '0') ? 'OFF' : this.displayValue }}{{ this.currentValue !== '0' ? option.unitSuffix : `` }}
		</span>
	</div>
		
	<input 
		v-on:input='() => handleAdjustSlider(option.name, currentValue)' 
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
import { userOptionData } from '../projects.js';

export default {
	name: 'Slider',
	data: () => ({ 
		currentValue: '',
		cssVar: String
	}),
	props: {
		option: Object,
    on: Boolean,
		rangeValue: Number
	},
	created() {
		this.cssVar = userOptionData[this.option.name].cssVar;
		console.log('userOptionData!!', userOptionData)
		console.log('this.cssVar', this.cssVar )
		this.currentValue = this.rangeValue || this.option.defaultValue;
	},
	computed: {
		displayValue() {
			return this.currentValue < 1000 ? this.currentValue : this.currentValue / 1000;
		}
	},
	methods: {
		handleAdjustSlider(option, value){
			let newValue = value;
			if (option === 'waveRadius') {
        newValue = Math.round(Math.round(window.HEADER_HEIGHT * 1.2) * (value / 100));
      } else if (option === 'borderSize') {
				newValue = value / 2;
				console.log('NEWVALUE', newValue)
      } else if (option === 'footerHeight') {
				if (newValue > 0) {
					newValue = Math.round((window.HEADER_HEIGHT * 0.75) + ((value) * (window.HEADER_HEIGHT / 12)));      
				} else {
					newValue = 0;      
				}
      } else if (option === 'screenshotCycleDuration') {
       	newValue = value;
      }
			console.error('newValue is', value, '% -> ', newValue)        
			let payload = {
				option: option, value: newValue
			}
			this.$store.commit(`userOptions/adjustSliderOption`, payload, option === 'footerHeight');
			if (this.cssVar) {
				document.documentElement.style.setProperty(this.cssVar, newValue + 'px');
			}
		}
	}
};
</script>

<style scoped>
.menu-slider > div {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.option-name {
	/* color: #ffffff88; */
}
.option-value {
	color: #ffffff88;
}
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
	/* padding-top: calc(var(--main-padding) / 2);
	padding-bottom: calc(var(--main-padding) / 2); */
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

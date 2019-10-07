<template>
<Touchable
  :class='[option.inputType, on && `on`]'
  :pointerDownAction='toggleOption'
>
	{{ option.title }}
  <div class='groove'> 
    <div class='knob'></div>
  </div>
</Touchable>
</template>

<script>
import Touchable from './Touchable';

export default {
	name: 'Toggle',
	props: {
    option: Object,
    on: Boolean,
    toggleOption: Function
	},
	created() {
		console.warn('toggle')
  },
  components: {
    Touchable
  }
};
</script>

<style scoped>
.toggle {	
	display: flex;
	background: var(--sheer-white);
	border-radius: calc(var(--inner-padding) / 2);
  align-items: center;
  box-sizing: content-box;
  width: unset;
  justify-self: center;
  width: max-content;
  min-width: 60%;
}
.groove {
	border: 1px solid var(--off-white);
	border-radius: var(--main-padding);
	width: calc(var(--header-height) / 1.5);
	height: var(--main-padding);
	background-color: #ffffff11;
	display: flex;
	align-items: center;
	opacity: 0.75;
  transition: opacity 210ms ease;
  margin-left: calc(var(--header-height) / 2);
}
.knob {
	position: absolute;
	width: var(--hamburger-size);
	height: var(--hamburger-size);
	background-color: var(--off-white);
	border-radius: 50%;
	transform: translateX(-25%);
	transform-origin: center;
	transition: transform 210ms ease;
}
.toggle.on .groove {
	background-color: #ffffff66
}
.toggle.on .knob {
	transform: translateX(calc(var(--header-height) / 3));
}
</style>

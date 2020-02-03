<template>
  <div id='hamburger' :class='$store.state.menuOn && `activated`'>
    <div class='hamburger-bar'></div>
    <div class='hamburger-bar'></div>
    <div class='hamburger-bar'></div>
  </div>
</template>

<script>
export default {
	name: 'Hamburger',
	props: {
	}
}
</script>

<style scoped>
#hamburger {
	width: var(--hamburger-size);
	height: var(--hamburger-size);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: transform var(--shift-speed) ease;
	transform-origin: 0% 50%;
	pointer-events: none;
	transform-origin: center;
}
#hamburger.on {
	background: blue;
}
#hamburger.off {
	background: green;
}
#hamburger.activated {
	transform: translateX(calc(var(--hamburger-size) / 6));
}
.hamburger-bar {
	width: inherit;
	height: calc(var(--header-height) / 11);
	background: var(--off-white);
	transition: transform var(--shift-speed) ease;
}
#hamburger > .hamburger-bar:first-child {
	transform-origin: 100% 0%;
}
#hamburger > .hamburger-bar:nth-child(2) {
	transform-origin: 100% 50%;
}
#hamburger > .hamburger-bar:last-child {
	transform-origin: 100% 100%;
}
#hamburger.activated > .hamburger-bar:first-child {
	transform: rotate(45deg) 
	scale(0.75, 0.9)
	translateX(calc(var(--hamburger-size) / 3))
	translateY(calc(var(--hamburger-size) / 2));
}
#hamburger.activated > .hamburger-bar:nth-child(2) {
	transform:
	translateX(calc(var(--hamburger-size) / -4));
}
#hamburger.activated > .hamburger-bar:last-child {
	transform: rotate(-45deg) 
	scale(0.75, 0.9)
	translateX(calc(var(--hamburger-size) / 3))
	translateY(calc(var(--hamburger-size) / -2));
}
@media screen and (orientation: landscape) {
	#hamburger.activated {
		transform: translateY(-20%) rotate(-90deg);
	}
}
</style>

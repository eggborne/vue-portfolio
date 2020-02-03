<template>
	<footer id='page-footer'>
		<div class='corner-arc southwest wavy-corner'>
			<div class='corner-arc-box'></div>
		</div>
		<div v-if='noScroll && $store.state.userOptions.footerHeight' id='footer-controls' :class='scrollDirection'>
			<!-- <div id='prev-button'> -->
				<Touchable
					id='prev'
					class='footer-nav-button'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
					<span class='nav-label stroke'>PREV</span>
				</Touchable>
			<!-- </div> -->
			<!-- <div id='next-button'> -->
				<Touchable
					id='next'
					class='footer-nav-button'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
				<span class='nav-label stroke'>NEXT</span>
				</Touchable>
			<!-- </div> -->
		</div>
	</footer>
</template>

<script>
import Touchable from './Touchable.vue';

export default {
	name: 'Footer',
	props: {
		noScroll: Boolean,
		switchProjects: Function,
		scrollDirection: String
	},
	methods: {
		handleClickNav(e) {
			console.log(e.target.id, 'clicked');
			e.target.classList.add('pressed')
			let direction = e.target.id === 'prev' ? -1 : 1;
			this.switchProjects(null, direction);			
		},
		handleReleaseNav(e) {
			console.log(e.target.id, 'released');
			e.target.classList.remove('pressed');		
		}
	},
	components: {
		Touchable
	}
};
</script>

<style scoped>
span {
	pointer-events: none;
}
#page-footer {
	position: relative;
	background: var(--footer-color);
	justify-content: center;
	align-self: stretch;
	--arrow-size: calc(var(--footer-height) - var(--main-padding));
}
#prev, #next {
	color: var(--header-color);
	width: calc(var(--header-height) * 2);
}
#next .nav-label {
	justify-content: flex-end;
}
.stroke {
	text-shadow:
    -1px -1px 0 var(--arrow-color),  
    1px -1px 0 var(--arrow-color),
    -1px 1px 0 var(--arrow-color),
     1px 1px 0 var(--arrow-color);
}
.nav-label {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: var(--arrow-color);
	display: flex;
	align-items: center;
	width: calc(var(--header-height) + var(--inner-padding));
	max-width: calc(var(--header-height) + var(--inner-padding));
	z-index: 1;
}
.nav-label::after {
	position: absolute;
	width: 0;
	height: 0;
	/* border-top: calc(var(--arrow-size) / 2.75) solid transparent;
	border-bottom: calc(var(--arrow-size) / 2.75) solid transparent; */
	transform-origin: center;
	content: '';
	z-index: -1;
}
#prev .nav-label::after {
	border-left: calc(var(--arrow-size) / 2) solid var(--arrow-color);
	transform: translate(calc(var(--footer-height) / -2.1), 0%) scaleX(-1);
	transform-origin: left;
	right: 0;
}
#next .nav-label::after {
	border-left: calc(var(--arrow-size) / 2) solid var(--arrow-color);
	transform: translate(calc(var(--arrow-size) / 2.1), 0%);
	right: 0;
}
#footer-controls.vertical .nav-label {
	justify-content: center;
	height: 45%;
}
#footer-controls.vertical .nav-label::after {
	border: unset;
	border-left: calc(var(--header-height) / 1) solid transparent;
	border-right: calc(var(--header-height) / 1) solid transparent;
	transform-origin: center;
	left: 50%;
}
#footer-controls.vertical #prev .nav-label {
	transform: translate(-50%, 0%);
	/* border-top-left-radius: 50%;
	border-top-right-radius: 50%; */
	padding-bottom: var(--inner-padding);
}
#footer-controls.vertical #next .nav-label {
	transform: translate(-50%, -65%);
	/* border-bottom-left-radius: 50%;
	border-bottom-right-radius: 50%; */
	padding-top: var(--inner-padding);
}
#footer-controls.vertical #prev .nav-label::after {
	top: 0;
	transform: translate(-50%, -65%);
	border-bottom: calc(var(--header-height) / 2.5) solid var(--arrow-color);
}
#footer-controls.vertical #next .nav-label::after {
	bottom: 0;
	transform: translate(-50%, 65%);
	border-top: calc(var(--header-height) / 2.5) solid var(--arrow-color);
}
/* .horizontal #prev .nav-label::after {
	border: unset;
	border-left: calc(var(--footer-height) / 2.75) solid transparent;
	border-right: calc(var(--footer-height) / 2.75) solid transparent;
}
.horizontal #next .nav-label::after {
	border-top: calc(var(--footer-height) / 2) solid var(--arrow-color);
} */
#page-footer {
	border-top-right-radius: var(--arc-radius);
}
#footer-controls {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
	width: 90%;
	height: 100%;
}
#footer-controls button {
	position: relative;
	width: 85%;
	height: var(--arrow-size);
	border: calc(var(--inner-padding) / 2) outset var(--sheer-white);
	border-radius: var(--inner-padding);
	font-size: calc(var(--header-height) / 4);
	font-weight: bold;
	color: var(--off-white);
}
#footer-controls .pressed {
	border-style: inset;
}
#footer-controls .pressed span {
	background-color: rgb(174, 216, 174) !important;
	color: #222;
}
#footer-controls .pressed span::after {
	border-left-color: rgb(174, 216, 174);
	border-right-color: rgb(174, 216, 174);
}
#footer-controls.vertical #prev.pressed span::after {
	border-top-color: rgb(174, 216, 174);
	border-bottom-color: rgb(174, 216, 174);
}
#footer-controls.vertical #next.pressed span::after {
	border-top-color: rgb(174, 216, 174);
	border-bottom-color: rgb(174, 216, 174);
}
.southwest > .corner-arc-box {
	left: calc(var(--arc-radius) - var(--highlight-width) * 2);
	top: 0;
}
</style>

<template>
	<footer id='page-footer'>
		<div class='corner-arc southwest wavy-corner'>
			<div class='corner-arc-box'></div>
		</div>
		<div v-if='noScroll' id='footer-controls' :class='scrollDirection'>
			<div id='prev-button'>
				<Touchable
					id='prev'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
					<span class='nav-label stroke'>PREV</span>
				</Touchable>
			</div>
			<div id='next-button'>
				<Touchable
					id='next'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
				<span class='nav-label stroke'>NEXT</span>
				</Touchable>
			</div>
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
			let direction = e.target.id === 'prev' ? -1 : 1;
			// e.target.classList.add(`pressed`);
			this.switchProjects(null, direction);
		},
		handleReleaseNav(e) {
			// e.target.classList.remove(`pressed`);
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
}
#prev, #next {
	color: var(--header-color);
	width: calc(var(--header-height) * 2);
}
.nav-label {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: var(--off-white);
	display: flex;
	align-items: center;
	width: var(--header-height);
	height: calc(var(--header-height) / 2.25);
	z-index: 1;
}
#next .nav-label {
	justify-content: flex-end;
}
.stroke {
	text-shadow:
    -1px -1px 0 #aaa,  
    1px -1px 0 #aaa,
    -1px 1px 0 #aaa,
     1px 1px 0 #aaa;
}
.nav-label::after {
	position: absolute;
	width: 0;
	height: 0;
	border-top: calc(var(--header-height) / 2.75) solid transparent;
	border-bottom: calc(var(--header-height) / 2.75) solid transparent;
	transform-origin: center;
	content: '';
	z-index: -1;
}
#prev .nav-label::after {
	border-left: calc(var(--header-height) / 2) solid var(--off-white);
	transform: translate(calc(var(--header-height) / -2.1), 0%) scaleX(-1);
	transform-origin: left;
	right: 0;
}
#next .nav-label::after {
	border-left: calc(var(--header-height) / 2) solid var(--off-white);
	transform: translate(calc(var(--header-height) / 2.1), 0%);
	right: 0;
}
#footer-controls.vertical .nav-label {
	justify-content: center;
	height: 45%;
}
#footer-controls.vertical .nav-label::after {
	border: unset;
	border-left: calc(var(--header-height) / 1.25) solid transparent;
	border-right: calc(var(--header-height) / 1.25) solid transparent;
	transform-origin: center;
	left: 50%;
}
#footer-controls.vertical #prev .nav-label {
	transform: translate(-50%, -40%);
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
}
#footer-controls.vertical #next .nav-label {
	transform: translate(-50%, -70%);
	border-bottom-left-radius: 50%;
	border-bottom-right-radius: 50%;
}
#footer-controls.vertical #prev .nav-label::after {
	top: 0;
	transform: translate(-50%, -45%);
	border-bottom: calc(var(--header-height) / 2.5) solid var(--off-white);
}
#footer-controls.vertical #next .nav-label::after {
	bottom: 0;
	transform: translate(-50%, 45%);
	border-top: calc(var(--header-height) / 2.5) solid var(--off-white);
}
/* .horizontal #prev .nav-label::after {
	border: unset;
	border-left: calc(var(--footer-height) / 2.75) solid transparent;
	border-right: calc(var(--footer-height) / 2.75) solid transparent;
}
.horizontal #next .nav-label::after {
	border-top: calc(var(--footer-height) / 2) solid var(--off-white);
} */
#app.wavy #page-footer {
	border-top-right-radius: var(--arc-radius);
}
#footer-controls {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
	width: 80%;
}
#footer-controls button {
	position: absolute;
	font-size: calc(var(--header-height) / 4);
	height: var(--header-height);
	font-weight: 700;
	transform: translate(-50%, -50%);
	border: 0 !important;
}
#footer-controls .pressed span {
	background-color: rgb(174, 216, 174) !important;
	color: #222;
}
#footer-controls .pressed span::after {
	border-left-color: rgb(174, 216, 174);
	border-right-color: rgb(174, 216, 174);
}
#footer-controls.vertical #prev-button.pressed span::after {
	border-top-color: rgb(174, 216, 174);
	border-bottom-color: rgb(174, 216, 174);
}
#footer-controls.vertical #next-button.pressed span::after {
	border-top-color: rgb(174, 216, 174);
	border-bottom-color: rgb(174, 216, 174);
}
#footer-controls .vertical .pressed button {
	/* color: white */
}

.southwest > .corner-arc-box {
	left: calc(var(--arc-radius) - var(--highlight-width) * 2);
	top: 0;
}
</style>

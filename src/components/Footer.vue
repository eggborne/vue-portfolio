<template>
	<footer id='page-footer'>
		<div class='corner-arc southwest wavy-corner'>
			<div class='corner-arc-box'></div>
		</div>
		<div v-if='spaMode' id='footer-controls'>
			<div>
				<div class='arrow-up'></div>
				<Touchable
					id='prev'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
					PREV
				</Touchable>
			</div>
			<div>
				<div class='arrow-down'></div>
				<Touchable
					id='next'
					:pointerDownAction='handleClickNav'
					:pointerUpAction='handleReleaseNav'
				>
					NEXT
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
		spaMode: Boolean,
		switchProjects: Function
	},
	methods: {
		handleClickNav(e) {
			console.log(e.target.id, 'clicked');
			let direction = e.target.id === 'prev' ? -1 : 1;
			e.target.classList.add(`pressed`);
			this.switchProjects(null, direction);
		},
		handleReleaseNav(e) {
			e.target.classList.remove(`pressed`);
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
	background: var(--header-color);
	justify-content: center;
	align-self: stretch;
}
#prev, #next {
	color: var(--header-color);
	width: calc(var(--header-height) * 2);
}
#prev {
	padding-top: calc(var(--header-height) / 2.5);
}
#next {
	padding-bottom: calc(var(--header-height) / 0);
}
.arrow-up,
.arrow-down {
	position: absolute;
	width: 0;
	height: 0;
	border-left: calc(var(--header-height) / 0.9) solid transparent;
	border-right: calc(var(--header-height) / 0.9) solid transparent;
	transform-origin: center;
	transform: translate(
		-50%,
		calc((var(--footer-height) / 2) - (var(--header-height) / 2.6))
	);
}
.arrow-up {
	border-bottom: calc(var(--header-height) / 1.3) solid var(--off-white);
}
.arrow-down {
	border-top: calc(var(--header-height) / 1.3) solid var(--off-white);
}
#app.wavy #page-footer {
	border-top-right-radius: var(--arc-radius);
}
#footer-controls {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	align-items: stretch;
	justify-items: center;
	width: 80%;
	height: 100%;
	/* margin: 0 calc(var(--header-height)); */
	/* outline: 1px solid #222; */
}
#footer-controls button {
	position: absolute;
	border-radius: var(--inner-padding);
	font-size: calc(var(--header-height) / 3.5);
	height: 90%;
	font-weight: 700;
	transition: transform 150ms ease;
	transform: translateX(-50%);
}
#footer-controls button:first-of-type {
}
#footer-controls button:last-of-type {
}
#footer-controls button.pressed {
	color: rgb(174, 216, 174);
}

.southwest > .corner-arc-box {
	left: calc(var(--arc-radius) - var(--highlight-width) * 2);
	top: 0;
}
</style>

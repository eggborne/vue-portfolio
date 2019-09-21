<template>
	<div id="main-body">
		<transition name='fade'>
		<div v-if='loaded' id="project-list">
			<BodyPane
				v-for="(proj, i) in projects"
				v-bind:key="proj.id"
				v-bind:project="proj"
				v-bind:index="i"
				v-bind:observer='scrollObserver'
				v-bind:menuOn='!menuOn'
			/>
		</div>
		</transition>
		<Header v-if='true' v-bind:projects='projects' v-bind:toggleMenu='toggleMenu' v-bind:menuOn='menuOn' v-bind:titleText='`web projects of Mike Donovan`' />
	</div>
</template>

<script>
import BodyPane from './BodyPane.vue';
import Header from './Header.vue';

window.HEADER_HEIGHT =
	window.innerWidth < window.innerHeight
		? window.innerWidth * 0.16 - window.innerHeight * 0.01
		: window.innerHeight * 0.12 - window.innerWidth * 0.01;
window.MAIN_PADDING = window.HEADER_HEIGHT / 5.5;
console.log('h', window.HEADER_HEIGHT);
console.log('mp', window.MAIN_PADDING);

export default {
	name: 'MainBody',
	data: () => ({
		scrollObserver: null,
		intersected: false,
		panesShowing: [],
		loaded: false
	}),
	props: {
		msg: String,
		projects: Array,
		menuOn: Boolean,
		toggleMenu: Function,
		landscape: Boolean
	},
	components: {
		BodyPane,
		Header
	},
	mounted() {
		this.loaded = true
	}
};
</script>

<style scoped>
ul {
	list-style: none;
}
#main-body {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: var(--main-padding);
	width: 100vw;
	
}

@media screen and (orientation: landscape) {
	#main-body {
		width: var(--main-column-width);
	}
}
</style>

<template>
	<div id="main-body">
		<transition name='fade'>
		<div v-if='loaded' id="project-list">
			<BodyPane
				v-for="(proj, i) in projects"
				:key="proj.id"
				:project="proj"
				:index="i"
				:observer='scrollObserver'
				:menuOn='!menuOn'
			/>
		</div>
		</transition>		
	</div>
</template>

<script>
import BodyPane from './BodyPane.vue';

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
		BodyPane
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
	/* padding: var(--main-padding); */
	width: 100vw;
	
}

@media screen and (orientation: landscape) {
	#main-body {
		/* width: var(--main-column-width); */
	}
}
</style>

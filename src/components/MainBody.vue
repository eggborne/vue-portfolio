<template>
	<div id='main-body'>
		<div v-if='loaded && !noScroll' id='project-list'>
			<ProjectCard
				v-for='(proj, i) in projects'
				:key='proj.id'
				:project='proj'
				:index='i'
				:listIndex='sortedProjectList.indexOf(proj)'
				:menuOn='!menuOn'
				:seen='projectsSeen.includes(i)'
				:selected='currentProject === i'
				:reportScreenUrls='reportScreenUrls'
			/>
		</div>
		<div v-if='loaded && noScroll' id='project-list'>
			<transition-group :name='previousProject < currentProject ? `card-up` : `card-down`'>
			<ProjectCard
				v-for='(proj, i) in projectsToShow'
				:key='proj.id'
				:noScroll='noScroll'
				:project='proj'
				:index='i'
				:listIndex='sortedProjectList.indexOf(proj)'
				:menuOn='!menuOn'
				:seen='projectsSeen.includes(i)'
				:selected='currentProject === i'
				:reportScreenUrls='reportScreenUrls'
			/>
			</transition-group>
		</div>
	</div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';

export default {
	name: 'MainBody',
	data: () => ({
		loaded: false
	}),
	props: {
		projects: Array,
		menuOn: Boolean,
		toggleMenu: Function,
		landscape: Boolean,
		noScroll: Boolean,
		currentProject: Number,
		previousProject: Number,
		projectsSeen: Array,
		reportScreenUrls: Function
	},
	components: {
		ProjectCard
	},
	computed: {
		projectsToShow: function() {
			return this.projects.filter((proj, i) => i === this.currentProject)
		},
		sortedProjectList: function() {
			return [...this.projects].sort((a, b) => {
				if (b.directory > a.directory) {
					return -1
				} else {
					return 1;
				}
			})
		}
	},
	mounted() {
		this.loaded = true;
		console.warn('MOUNTED MAIN BODY')
	},
	updated() {
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
	overflow-x: hidden;
}
@media screen and (orientation: landscape) {
	#main-body {
		/* width: var(--main-column-width); */
	}
}
</style>

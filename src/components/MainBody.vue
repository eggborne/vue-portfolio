<template>
	<div id='main-body' :class='[menuOn ? `menu-on` : ``]'>
		<div v-if='loaded && !userOptions.noScroll' id='project-list'>
			<ProjectCard
				v-for='(proj, i) in projects'
				:key='proj.id'
				:project='proj'
				:projectIndex='i'
				:listIndex='sortedProjectList.indexOf(proj)'
				:seen='projectsSeen.includes(i)'
				:selected='currentProject === i'
				:reportScreenUrls='reportScreenUrls'
			/>
		</div>
		<div v-if='loaded && userOptions.noScroll' id='project-list'>
			<transition-group :name='panelTransition'>
			<ProjectCard
				v-for='(proj, i) in projectsToShow'
				:key='proj.id'
				:project='proj'
				:projectIndex='projectList.indexOf(proj)'
				:seen='projectsSeen.includes(2)'
				:selected='projectIndex(currentProject) === projectList.indexOf(proj)'
				:switchProjects='switchProjects'
				:reportScreenUrls='reportScreenUrls'
			/>
			</transition-group>
		</div>
	</div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'MainBody',
	data: () => ({
		loaded: false,
		landscape: window.IS_LANDSCAPE,
	}),
	props: {
		projectsSeen: Array,
		switchProjects: Function,
		reportScreenUrls: Function
	},
	components: {
		ProjectCard
	},
	mounted() {
		this.loaded = true;
		console.warn('MOUNTED MAIN BODY')
	},
	computed: {
		panelTransition: function() {
			const currentIndex = this.currentProject;
			const prevIndex = this.previousProject;
			console.log('curr, prev', currentIndex, prevIndex)
			return prevIndex < currentIndex ? 
			window.IS_LANDSCAPE ? `card-back` : `card-up` 
			: 
			window.IS_LANDSCAPE ? `card-forward` : `card-down`
		},
		projectList() {
			return Object.values(this.projects);
		},
		projectsToShow: function() {
			return this.projectList.filter((proj, i) => i === this.currentProject);
		},
		sortedProjectList: function() {
			return Object.values(this.projects).sort((a, b) => {
				if (b.directory > a.directory) {
					return -1
				} else {
					return 1;
				}
			})
		},
		...mapState({menuOn: 'menuOn', projects: 'projectObj', currentProject: 'currentProject', previousProject: 'previousProject'}),
		...mapState('userOptions', {
      userOptions: state => state
		}),
	},
	methods: {
		...mapMutations([
			'toggleMenuOn'
		]),
		clickBody() {
			this.toggleMenuOn('on');
		},
		projectIndex(projectName) {
			return Object.values(this.projects).findIndex(proj => proj.name === projectName);
		}
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
	width: 100vw;	
	overflow-x: hidden;
}
#main-body:after {
	content: '';
	pointer-events: none;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000000cc;
	opacity: 0;
	transition: opacity 210ms ease;
}
#main-body.menu-on:after {
	opacity: 1;
}
@media screen and (orientation: landscape) {
	#main-body {
		width: var(--body-width);
	}
}
</style>

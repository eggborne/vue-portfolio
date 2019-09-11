<template>
  <div id='main-body'>
		<div id='project-list'>
			<BodyPane
				v-for='proj in projects'
				v-bind:project='proj'
				v-bind:key='proj.id'
			/>							
		</div>
  </div>
</template>

<script>
import { projects }  from '../projects.js';
import BodyPane from './BodyPane.vue';

let projectArray = [];

const display_project = () => {
	console.log('this', this)
}

export default {	
	data: function() {return {projects: projects}},
  name: 'MainBody',
  props: {
    msg: String
	},
	components: {
		BodyPane
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
  align-items: stretch;
}
#project-list {
	/* margin: var(--header-height) var(--main-padding) var(--pane-spacing) var(--main-padding); */
	margin-top: var(--header-height);
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 
	repeat(12, var(--pane-height)) calc(var(--pane-height) - var(--footer-height));
	align-items: center;
	justify-items: center;
}
#project-list > * {
	/* outline: 1px solid red; */
}
</style>

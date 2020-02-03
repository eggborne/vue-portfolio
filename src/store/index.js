import Vue from 'vue';
import Vuex from 'vuex';
// import { userOptionData } from '../projects.js';
import userOptions from './useroptions';
import { projects } from '../projects.js';
import createLogger from 'vuex/dist/logger';

const logger = createLogger({
	collapsed: false, // auto-expand logged mutations
	filter(mutation, stateBefore, stateAfter) {
		// returns `true` if a mutation should be logged
		// `mutation` is a `{ type, payload }`
		return mutation.type !== 'aBlacklistedMutation';
	},
	transformer(state) {
		// transform the state before logging it.
		// for example return only a specific sub-tree
		return state.subTree;
	},
	mutationTransformer(mutation) {
		// mutations are logged in the format of `{ type, payload }`
		// we can format it any way we want.
		return mutation.type;
	},
	logger: console // implementation of the `console` API, default `console`
});

Vue.use(Vuex);

let projectObj = {};
projects.forEach((proj, p) => {
	projectObj[proj.name] = proj;
	projects[p].index = p;
});
console.warn('made obj', projectObj)

const store = new Vuex.Store({
	plugins: [createLogger()],
	modules: {
		userOptions
	},
	state: {
		menuOn: false,
		currentProject: projects[0].index,
		previousProject: undefined,
		projectObj,
		projects
	},
	mutations: {
		toggleMenuOn(state, onlyIf) {
			if (onlyIf === 'on') {
				return state.menuOn ? (state.menuOn = false) : null;
			} else {
				state.menuOn = !state.menuOn;
			}
			console.log('toggleing menu to', state.menuOn);
		},
		setCurrentProject(state, newCurrentProject) {
			console.log('setCurrentProject began with currentProj', state.currentProject)
			console.log('setCurrentProject began with prevtProj', state.previousProject)
			console.log('setCurrentProject began with applying newCurrent', newCurrentProject)
			state.previousProject = state.currentProject;
			state.currentProject = newCurrentProject;
			console.log('setCurrentProject ends with currentProj', state.currentProject)
			console.log('setCurrentProject ends with prevtProj', state.previousProject)
		}
	},
	actions: {}
});

export default store;

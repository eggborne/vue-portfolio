<template>
	<div id="menu" 
		:class='[
			mode === `projectsMode` && `projects-mode`,
			mode === `settingsMode` && `settings-mode`,
		]'
	>		
		<div class='corner-arc northeast upper wavy-corner'>
			<div class='corner-arc-box'>
			</div>
		</div>
		<!-- PROJECTS -->
		<span v-if='mode === `projectsMode`'>
			<div class='menu-header-area'>
				<Touchable class='list-button clickable'
					:class='listMode === `icons` && `activated`'
					:pointerDownAction='changeListMode'>
					<span>Icons</span>
					<i class="material-icons"> view_comfy </i>
				</Touchable>
				<Touchable class='list-button clickable'
					:class='listMode === `list` && `activated`'
					:pointerDownAction='changeListMode'>
					<span>List</span>
					<i class="material-icons"> list </i>
				</Touchable>
			</div>

			<div :class='listMode' id="project-listings">
				<div
					v-for="(proj, i) in projects"
					:key="proj + `-` + i"
					class="project-listing clickable"			
					@click="() => switchToProject(i)"
				>
					<!-- <img :src="`/icons2/${proj.directory}.png`" /> -->
					<Icon :project='proj' :size='listMode == `icons` ? (headerHeight / 1.5) : (headerHeight / 2)' :listIndex='sortedProjectList.indexOf(proj)' />
					<div>{{ proj.name }}</div>
				</div>
			</div>

		</span>


		<!-- SETTINGS -->

		<span v-else-if='mode === `settingsMode`'>

			<div id='options-header' class='menu-header-area'>
				<Touchable class='list-button clickable activated'
					:pointerDownAction='() => null'
				>
					<span>Site settings</span>
				</Touchable>
			</div>
			
			<div id='option-list'>
				<Toggle 
					v-for='option in toggledOptions'
					:key='option.inputType + option.id'					
					:option='option'
					:on='options[option.name]'
					:toggleOption='() => toggleOption(option.name)'
				/>
				<Slider 
					v-for='option in rangedOptions'
					:key='option.inputType + option.id'
					:class='[option.inputType]'
					:option='option'
					:adjustRangedOption='adjustRangedOption'
					:rangeValue='parseInt(options[option.name])'
				>
				</Slider>
				<!-- <div id='color-area'>
					<ColorPicker
						v-for='option in colorOptions'
						:key='option.inputType + option.id'
						:class='[option.inputType]'
						:option='option'
						:setOption='setOption'
						:colorValue='options[option.name]'
					/>
				</div> -->
			</div>

		</span>

		<div class='corner-arc northeast lower wavy-corner'>
			<div class='corner-arc-box'>
			</div>
		</div>
	</div>
</template>
<script>
import { optionData } from '../projects.js';
import Touchable from './Touchable.vue';
import Icon from './Icon.vue';
import Toggle from './Toggle.vue';
import Slider from './Slider.vue';
import ColorPicker from './ColorPicker.vue';

export default {
	name: 'Menu',
	data: () => {
		return {
			listMode: 'icons',
			headerHeight: window.HEADER_HEIGHT		
		}
	},
	props: {
		mode: String,
		projects: Array,
		options: Object,
		toggleMenu: Function,
		switchProjects: Function,
		toggleOption: Function,
		setOption: Function,
		adjustRangedOption: Function
	},
	components: {
		Touchable,
		Icon,
		Toggle,
		Slider,
		ColorPicker
	},
	computed: {
		optionData() {
			return optionData;
		},
		toggledOptions() {
			return optionData.filter(option => option.inputType === 'toggle');
		},
		rangedOptions() {
			return optionData.filter(option => option.inputType === 'range');
			// return [];
		},
		colorOptions() {
			return optionData.filter(option => option.inputType === 'color');
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
	methods: {
		changeListMode(e) {
			console.log('inner is', e.target.innerText)
			let newMode = e.target.innerText.indexOf('Icons') > -1 ? 'icons' : 'list';
			console.log('changing to', newMode);
			this.listMode = newMode;
		},
		switchToProject(ind) {
			this.switchProjects(ind);
			requestAnimationFrame(() => this.toggleMenu());
		},
		goToProject: function(e) {
			let projectIndex = [...e.target.parentElement.children].indexOf(e.target);			
			console.log('clicked is', e.target);
			console.log('parent is', e.target.parentElement)
			console.log('------------clickced proj ind', projectIndex)
			let targetCard = document.getElementById('project-list').children[
				projectIndex
			];
			let scrollEl = document.getElementById('app');
			targetCard.scrollIntoView({ block: 'start', behavior: 'smooth' });
			// scrollEl.scrollBy({
			// 	top: -(window.HEADER_HEIGHT + window.MAIN_PADDING)
			// 	//  behavior: 'smooth'
			// });
			this.toggleMenu();
		}
	}
};
</script>

<style scoped>
#menu {
	--badge-size: calc(var(--header-height) * 1.35);
	--list-row-height: calc(var(--header-height) / 1.5);
	--max-row-height: calc((var(--view-height) - var(--header-height) - (var(--header-height) / 1.75) - var(--footer-height) - (var(--main-padding) * 3) - var(--badge-size) - (var(--highlight-width) * 2)) / 13);
	position: absolute;
	width: calc((var(--badge-size) * 3) + (var(--main-padding) * 2) + (var(--inner-padding) * 2));
	width: calc((var(--badge-size) * 3) + (var(--main-padding) * 4));
	top: var(--header-height);
	right: 0;
	color: var(--main-text-color);
	font-size: calc(var(--main-font-size) * 1.1);
	transition: transform var(--shift-speed) ease;
	z-index: 2;
	border-bottom-left-radius: var(--arc-radius);
	background: var(--header-color);
}
.northeast.upper > .corner-arc-box {
	top: 0;
	left: calc(var(--arc-radius) * -1);
}
.northeast.lower > .corner-arc-box {
	bottom: calc(var(--arc-radius) * -1);
	right: calc(var(--highlight-width) * -1);
	/* right: 0; */
}
#menu:not(.activated) {
	transform: translateX(calc(100% + var(--highlight-width)));
}
.menu-header-area {
	padding: 0 calc(var(--main-padding) * 1.5);
	width: 100%;
	height: calc(var(--header-height) / 1.75);
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-header-area > button > * {
	pointer-events: none;
}
#options-header {
	flex-direction: column;
	align-items: stretch;
	/* display: none; */
}
#options-header > button {
	margin: 0;
}
#option-list {
	display: grid;
	grid-row-gap: var(--main-padding);
	padding: calc(var(--main-padding) * 1.5);
}
#option-list * {
	padding: 0 calc(var(--header-height) / 2);
	justify-content: space-between;
	min-height: calc(var(--header-height) - (var(--main-padding) * 1.25));
}
#color-area {
	display: grid;
	grid-template-columns: 0.5fr 0.5fr;
	grid-template-rows: auto;
	justify-items: stretch;
	padding: var(--main-padding);
	grid-column-gap: calc(var(--inner-padding) / 1.5);
}
.list-button {
	border: 1px solid;
	border-radius: calc(var(--inner-padding) / 1.5);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	height: 100%;
	width: auto;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border: unset;
	border: 1px solid transparent;
	opacity: 0.6;
	margin: var(--inner-padding);
	border-bottom-color: var(--header-color);
}
.list-button > i {
	pointer-events: none;
	margin-left: var(--inner-padding);
}
.list-button:last-of-type > i {
	transform-origin: center;
	transform: scaleY(1.35);
}
.list-button.activated {
	border-bottom-color: #999;
	opacity: 1;
}
.list-button.clickable:hover > * {
	opacity: 1;
}
#project-listings {
	width: 100%;
	font-weight: 700;
	display: grid;	
	justify-content: center;	
	padding: calc(var(--main-padding) * 1.5);
	overflow: hidden;
}
#project-listings > .project-listing {
	border-radius: calc(var(--inner-padding) / 1.5);
}
#project-listings.icons {
	grid-template-columns: repeat(3, var(--badge-size));
	grid-row-gap: calc(var(--badge-size) / 12);
	grid-column-gap: calc(var(--badge-size) / 12);
}
#project-listings.list {
	grid-template-columns: 1fr;
	grid-row-gap: calc(var(--list-row-height) / 6);
	padding: var(--main-padding) 0;
}
#project-listings.icons > .project-listing {
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: auto 1fr;
	text-align: center;	
	width: var(--badge-size);
	height: var(--badge-size);
}
#project-listings.list > .project-listing {
	display: grid;
	grid-template-columns: 1fr calc(var(--list-row-height) + var(--main-padding));
	grid-auto-rows: auto;
	text-align: right;
	align-items: center;
	grid-column-gap: var(--main-padding);	
	width: 100%;
	height: 100%;
	justify-self: end;
}
.project-listing > * {
	pointer-events: none;
}
.project-listing.clickable:hover {
	background: var(--sheer-white) !important;
}
#project-listings.icons .icon {	
	border-radius: 50%;
}
#project-listings.list .icon {	
	grid-column-start: 2;
}
#project-listings.list > .project-listing > div:not(.icon) {	
	grid-row-start: 1;
	grid-column-start: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: calc(var(--badge-size) / 2);
	max-height: var(--max-row-height);
	/* background-color: var(--sheer-white); */
	border-radius: calc(var(--inner-padding) / 2);
	background-image: linear-gradient(to left, var(--sheer-white) 60%, transparent 100%);
	padding-right: var(--main-padding);
}
@media screen and (orientation: landscape) {
	#menu {
		--max-row-height: unset;
		width: calc((var(--badge-size) * 4) + (var(--main-padding) * 4) + var(--inner-padding) * 3);
		padding-top: var(--header-height);
		top: 0;
		height: unset;
		border-bottom-right-radius: calc(var(--inner-padding));
	}
	#menu:not(.activated) {
		transform: translateY(-100%);
	}
	#project-listings.icons {
		grid-template-columns: repeat(4, var(--badge-size));
	}
	#project-listings.list {
		grid-template-columns: 0.5fr 0.5fr;
		grid-column-gap: var(--main-padding);
	}
}
</style>

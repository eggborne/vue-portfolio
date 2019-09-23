<template>
	<div id="menu">
		<div id='button-area'>
			<div 
				class='list-button clickable'
				:class='listMode === `icon` && `activated`'
				@click='changeListMode'
			>
			<span>Icon View</span>
			<img src='https://eggborne.com/icons/viewiconsicon.png' />
			</div>
			<div 
				class='list-button clickable'
				:class='listMode === `list` && `activated`'
				@click='changeListMode'
			>
			<span>List View</span>
			<img src='https://eggborne.com/icons/viewlisticon.png' />
			</div>
		</div>
		<div :class='listMode' id="project-listings">
			<div
				v-for="(proj, i) in projects"
				:key="proj + `-` + i"
				class="project-listing clickable"				
				@click="goToProject"
			>
				<img :src="proj.iconUrl" />
				<div>{{ proj.name }}</div>
			</div>
		</div>
	</div>
</template>
<script>
import Hamburger from './Hamburger.vue';
export default {
	name: 'Menu',
	data: () => {
		return {
			listMode: 'icon'
		}
	},
	props: {
		projects: Array,
		menuOn: Boolean,
		toggleMenu: Function
	},
	methods: {
		toggleProjectList: function(e) {
			e.target.classList.toggle('open');
			e.target.classList.toggle('showing');
		},
		toggleContactForm: function(e) {
			e.target.classList.toggle('open');
			e.target.classList.toggle('showing');
		},
		changeListMode(e) {
			let newMode = e.target.innerText.split(' ')[0].toLowerCase();
			console.log('changing to', newMode);
			this.listMode = newMode;
		},
		goToProject: function(e) {
			let projectIndex = [...e.target.parentElement.children].indexOf(e.target);			
			console.log('clicked is', e.target);
			console.log('parent is', e.target.parentElement)
			console.log('------------clickced proj ind', projectIndex)
			let targetPane = document.getElementById('project-list').children[
				projectIndex
			];
			let scrollEl = document.getElementById('app');
			targetPane.scrollIntoView({ block: 'start' });
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
	--badge-size: calc(var(--header-height) * 1.5);
	--list-row-height: calc(var(--header-height) / 1.5);
	--max-row-height: calc((var(--view-height) - (var(--header-height) * 1.625) - (var(--main-padding) * 3) - (var(--inner-padding) * 12)) / 13);
	position: absolute;
	width: calc((var(--badge-size) * 3) + (var(--pane-spacing) * 2) + var(--inner-padding) * 2);
	/* height: calc(var(--view-height) - var(--header-height)); */
	top: calc(var(--header-height) - var(--inner-padding));
	right: 0;
	background: #080808;
	color: var(--off-white);
	font-size: 1rem;
	padding: var(--main-padding);
	padding-top: 0;
	border-bottom-left-radius: calc(var(--inner-padding));
	transition: transform 440ms ease;
	padding-top: var(--inner-padding);	
}
#menu:not(.activated) {
	transform: translateX(100%);
}
#button-area {
	width: 100%;
	height: calc(var(--header-height) / 1.5);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: calc(var(--header-height) / 5);
}
.list-button {
	background: transparent;
	border-radius: calc(var(--inner-padding) / 1.5);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	height: 100%;
	width: calc(var(--header-height) * 1.75);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border: 1px solid transparent;
	border-bottom-color: #080808;
	background: #080808;
	/* transform-origin: center;		 */
}
.list-button > * {
	opacity: 0.4;
}
.list-button > img {
	height: 50%;
	pointer-events: none;
}
.list-button:last-child {
	margin-left: var(--inner-padding);
}
.list-button.activated {
	/* background: #111; */
	border-color: #222;
	border-bottom-color: #080808;
	transform: scaleY(1.01);
}
.list-button.activated > * {
	transform: scaleY(0.95);
}
.list-button.clickable:hover > * {
	opacity: 1;
}
#project-listings {
	width: 100%;
	font-weight: 700;
	display: grid;
	grid-row-gap: var(--inner-padding);
	padding: var(--main-padding);
	border: 1px solid #222;
	border-radius: calc(var(--inner-padding) / 1.5);	
	background: #080808;
}
#project-listings > .project-listing {
	border-radius: calc(var(--inner-padding) / 1.5);
}
#project-listings.icon {
	font-size: calc(var(--badge-size) / 9);
	grid-template-columns: repeat(3, var(--badge-size));
	grid-column-gap: var(--inner-padding);	
}
#project-listings.list {
	font-size: calc(var(--badge-size) / 8);
	grid-template-columns: 1fr;
	/* padding: var(--main-padding); */
}
#project-listings.icon > .project-listing {
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 1fr calc(var(--header-height) / 2);
	text-align: center;	
	width: var(--badge-size);
	height: var(--badge-size);
	background: #111;
}
#project-listings.list > .project-listing {
	display: grid;
	grid-template-columns: 1fr var(--list-row-height);
	grid-auto-rows: auto;
	text-align: right;
	align-items: center;
	grid-column-gap: var(--main-padding);
	background: #111;
	width: 100%;
	height: 100%;
	justify-self: end;
	padding: 0 var(--inner-padding);	
}
.project-listing > * {
	pointer-events: none;
}
.project-listing.clickable:hover {
	background: #222 !important;
}
#project-listings.icon > .project-listing > img {
	border-radius: 50%;
	width: 45%;
	height: auto;
}
#project-listings.list > .project-listing > img {
	width: calc(100% - var(--main-padding));
	height: auto;
	grid-row-start: 1;
	grid-column-start: 2;
}
#project-listings.icon > .project-listing > div {	
	align-self: start;
}
#project-listings.list > .project-listing > div {	
	grid-row-start: 1;
	grid-column-start: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: calc(var(--badge-size) / 2);
	max-height: var(--max-row-height);
}
.category.showing + #project-listings > .project-listing,
.category.showing + #contact-form > * {
	transition: opacity 105ms ease;
	transition-delay: 210ms;
	opacity: 1;
}
@media screen and (orientation: landscape) {
	#menu {
		--max-row-height: unset;
		width: calc((var(--badge-size) * 4) + (var(--pane-spacing) * 2) + var(--inner-padding) * 3);
		padding-top: var(--header-height);
		top: 0;
		height: unset;
		border-bottom-right-radius: calc(var(--inner-padding));
	}
	#menu:not(.activated) {
		transform: translateY(-100%);
	}
	#project-listings.icon {
		grid-template-columns: repeat(4, var(--badge-size));
	}
	#project-listings.list {
		grid-template-columns: 0.5fr 0.5fr;
		grid-column-gap: var(--main-padding);
	}
}
</style>

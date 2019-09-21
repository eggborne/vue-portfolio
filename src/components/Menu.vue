<template>
	<div id="menu">
		<div id="project-listings">
			<div
				v-for="(proj, i) in projects"
				v-bind:key="proj + `-` + i"
				class="project-listing clickable"
				v-on:click="goToProject"
			>
				<img v-bind:src="proj.iconUrl" />
				<div v-bind:class='proj.name.length > 20 && `small-text`'>{{ proj.name }}</div>
			</div>
		</div>
	</div>
</template>
<script>
import Hamburger from './Hamburger.vue';
export default {
	name: 'Menu',
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
		goToProject: function(e) {
			let projectIndex = [...e.target.parentElement.children].indexOf(e.target);			
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
	--badge-size: calc(var(--header-height) * 1.65);
	padding: var(--inner-padding);
	position: absolute;
	height: calc(var(--view-height) - var(--header-height));
	top: var(--header-height);
	right: 0;
	background: #111;
	color: var(--off-white);
	font-size: 1rem;
	transition: transform 320ms ease;
}
.category > .down-arrow {
	width: 0;
	height: 0;
	border-left: var(--main-padding) solid transparent;
	border-right: var(--main-padding) solid transparent;
	border-top: var(--main-padding) solid var(--off-white);
	transform: rotate(0deg);
	pointer-events: none;
	transition: transform 210ms ease;
}
.category.open > .down-arrow {
	transform: scaleY(-1);
}
.category {
	background: #181818;
	padding: var(--main-padding);
	margin-bottom: var(--inner-padding);
	border-radius: calc(var(--main-padding) / 4);
}
.category {
	display: flex;
	align-items: center;
	align-self: stretch;
	justify-content: space-between;
	padding: calc(var(--main-padding) * 1.5);
	font-size: 1rem;
}
#project-listings,
#contact-form {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	align-items: stretch;
}
#project-listings {
	width: inherit;
	padding: inherit;
	display: grid;
	grid-template-columns: 33% 1fr 33%;
	grid-row-gap: var(--inner-padding);
	font-size: calc(var(--badge-size) / 8);
	/* font-weight: 700; */
}
#contact-form {
	width: 100%;
}
#contact-form > * {
	margin: var(--main-padding) var(--inner-padding);
	padding: var(--main-padding);
	opacity: 0;
	transition: opacity 210ms ease;
}
#contact-form > textarea {
	height: calc(var(--header-height) * 2);
}
.category.open + #project-listings {
	transform: scaleY(1);
	height: 100%;
}
.category.open + #contact-form {
	transform: scaleY(1);
	height: 100%;
	padding: var(--main-padding);
}
.project-listing {
	padding: var(--inner-padding);
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 1fr calc(var(--header-height) / 1.25);
	text-align: center;	
	width: var(--badge-size);
	height: var(--badge-size);
}
.small-text {
	font-size: calc(var(--badge-size) / 9);
}
.project-listing.clickable:hover {
	background: #151515;
}
.project-listing > img {
	border-radius: 50%;
	width: 45%;
	height: auto;
	pointer-events: none;
	/* border-radius: 50%; */
}
.project-listing > div {
	/* align-self: end; */
	pointer-events: none;
}
.category.showing + #project-listings > .project-listing,
.category.showing + #contact-form > * {
	transition: opacity 105ms ease;
	transition-delay: 210ms;
	opacity: 1;
}
@media screen and (orientation: landscape) {
	#menu {
		/* position: absolute; */
		/* right: unset; */
		/* width: calc(var(--main-column-width) / 2); */
		height: unset;
		z-index: 0;
	}
	#project-listings {
		grid-template-columns: repeat(4, 0.25fr);
	}
}
</style>

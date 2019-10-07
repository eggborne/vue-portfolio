<template>
<div 				
	class='project-card'				
>
	<a :name='`proj-${index}`' />
	
	<header class='project-header stroke'>
		<div class='corner-arc southwest wavy-corner'>
			<div class='corner-arc-box'>
			</div>
		</div>
		<!-- <img :src='seen && `../assets/icons2/${project.directory}.png`' /> -->
		<!-- <img :src='`/icons2/${project.directory}.png`' /> -->
		<Icon :project='project' :size='headerHeight / 1.5' :listIndex='listIndex' />
		<h2 id='title-display'>
			{{ project.name }}
		</h2>
		<div class='title-description'>{{ project.description }}</div>
	</header>
	<div class='tech-area'>
		<div
			v-for='(tech, i) in project.technologies'
			:key='tech + `-` + i'
		>
			<TechTag
				:tech='tech'
				:style='{ backgroundColor: techTagColors[tech] }'
			/>
		</div>
	</div>

	<!-- <div class='screenshot-area'>
		<Screenshot
			v-for='(screenArray, deviceType) in project.screenshots'
			:key='project.name + `screen` + deviceType'
			:deviceType='deviceType'
			:screenUrl='project.screenshots[deviceType][screenIndexes[deviceType]]'
			:cycleScreen='cycleScreenshot'
		>
		</Screenshot>
	</div> -->
	<div class='screenshot-area'>
		<!-- <div @click='cycleDevice(-1)' class='nav-column left'>
			<i class='material-icons'> arrow_forward_ios </i>
		</div> -->
		<Screenshot
			v-for='(screenArray, deviceType) in project.screenshots'
			:key='project.name + `screen` + deviceType'
			:deviceType='deviceType'
			:alternate='project.id % 2 === 1'
			:featuredDevice='showingDevice'
			:screenUrl='project.screenshots[deviceType][screenIndexes[deviceType]]'
			:cycleScreen='cycleScreenshot'
		>
		</Screenshot>
		<!-- <div @click='cycleDevice(1)' class='nav-column right'>
			<i class='material-icons'> arrow_forward_ios </i>
		</div> -->
	</div>

	<div class='bullet-area'>
		<div
			class='bullet-entry'
			v-for='(bullet, i) in project.descriptionBullets'
			:key='bullet + `-` + i'
		>
			<div class='bullet-knob'>👍</div>
			<div class='bullet-text'>{{ bullet }}</div>
		</div>
	</div>
	<footer class='card-footer'>
		<div class='project-link clickable' @click='handleClickLink(`repo`)' >
			<div>View GitHub</div>
			<img src='../assets/icons/github.png' />
		</div>
		<div class='project-link clickable' @click='handleClickLink(`url`)'>
			<i class="material-icons">
				open_in_new
			</i>
			<div>Visit Website</div>
		</div>
	<div class='corner-arc northeast wavy-corner'>
		<div class='corner-arc-box'>
		</div>
	</div>
	</footer>	
</div>
</template>

<script>
import { techTagColors } from '../projects.js';
import Icon from './Icon.vue';
import TechTag from './TechTag.vue';
import Screenshot from './Screenshot.vue';

export default {
	data: () => {
		return {
			loaded: false,
			techTagColors: techTagColors,
			observer: null,
			intersected: false,
			// seen: false,
			screenIndexes: {
				tablet: 0,
				portrait: 0,
				desktop: 0
			},
			screenTimers: {
				tablet: null,
				portrait: null,
				desktop: null,
			},
			showingDevice: 1,
			headerHeight: window.HEADER_HEIGHT
		};
	},
	name: 'ProjectCard',
	props: {
		spaMode: Boolean,
		msg: String,
		project: Object,
		index: Number,
		menuOn: Boolean,
		seen: Boolean,
		selected: Boolean,
		reportScreenUrls: Function,
		listIndex: Number
	},
	components: {
		Icon,
		TechTag,
		Screenshot
	},
	created() {
		if (typeof this.project.screenshots.portrait === 'number') {
			let screenshots = {}; // the urls
			for (let screenType in this.project.screenshots) {
				let screensOfType = this.project.screenshots[screenType];
				let screenInitial = screenType === 'tablet' ? 'l' : screenType[0];
				screenshots[screenType] = [];
				for (let i = 0; i < screensOfType; i++) {
					let url = `https://eggborne.com/screenshots/${this.project.directory}/${screenType}/${i}.${window.IMG_EXTENSION}`
					screenshots[screenType][i] = url;
				}		
				
			}
			console.log(this.project.name, 'made screenshots', screenshots)			
			this.reportScreenUrls(this.project.id, screenshots)
		}		
	},
	mounted() {
		if (!window.CARD_HEIGHT) {
			window.CARD_HEIGHT = this.$el.offsetHeight;
		}
		for (let timerType in this.screenTimers) {
			if (this.project.screenshots[timerType].length > 1) {
				let delay = Object.keys(this.screenTimers).indexOf(timerType) * 1000;
				this.screenTimers[timerType] = setTimeout(() => {
					this.cycleScreenshot(timerType);
				}, 2000 + delay)
			}
		}
		
		// let options = {
		// 	root: document.querySelector('#app'),
		// 	rootMargin: `${window.HEADER_HEIGHT * 1}px 0px ${window.HEADER_HEIGHT * 1}px 0px`,
		// 	threshold: 0,
		// }
		// this.observer = new IntersectionObserver(entries => {
		// 	let card = entries[0];
		// 	if (this.intersected !== card.isIntersecting) {
		// 		if (card.isIntersecting) {
		// 			// JUST INTERSECTED
		// 			// if (!this.seen) {
		// 			// 	console.log('---', this.project.name, 'seen for first time!')
		// 			// 	this.seen = true;
		// 			// }
		// 			for (let timer in this.screenTimers) {
		// 				let delay = Object.keys(this.screenTimers).indexOf(timer) * 1000;
		// 				this.screenTimers[timer] = setTimeout(() => {
		// 					this.cycleScreenshot(timer);
		// 				}, 2000 + delay)
		// 			}
		// 		} else {
		// 			// JUST UNINTERSECTED
		// 			for (let timer in this.screenTimers) {
		// 				if (this.screenTimers[timer] !== null) {
		// 					window.clearTimeout(this.screenTimers[timer]);
		// 					this.screenTimers[timer] = null;
		// 				}
		// 			}
		// 		}
		// 		this.intersected = card.isIntersecting;
		// 	} else {
		// 		console.log('>> no change.')
		// 	}
		// }, options)
		// // this.observer.observe(this.$el);	
		// this.observer.observe(this.$el);		
	},
	beforeDestroy() {
		for (let timer in this.screenTimers) {
			if (this.screenTimers[timer] !== null) {
				window.clearTimeout(this.screenTimers[timer]);
				this.screenTimers[timer] = null;
			}
		}
	},
	methods: {		
		handleClickLink(linkType) {
			// window.location.href = this.project[linkType];
			window.open(this.project[linkType]);
		},
		cycleScreenshot(type, halt) {
			let currentIndex = this.screenIndexes[type];
			let newIndex = currentIndex + 1 < this.project.screenshots[type].length ? 
			currentIndex + 1 : 0;
			this.screenIndexes[type] = newIndex;
			window.clearTimeout(this.screenTimers[type]);
			if (halt) {
				window.clearTimeout(this.screenTimers[type]);
				this.screenTimers[type] = null;
			} else {
				this.screenTimers[type] = setTimeout(() => {
					this.cycleScreenshot(type);
				}, 5000);
			}			
		},
		cycleDevice(direction) {
			let currentIndex = this.showingDevice;
			if (currentIndex + direction > 2) {
				currentIndex = 0;
			} else if (currentIndex + direction < 0) {
				currentIndex = 2;
			} else {
				currentIndex = currentIndex + direction;
			}
			this.showingDevice = currentIndex;
			console.log('new device is', this.showingDevice)
		}
	}
};
</script>
<style scoped>
.project-card {
	width: 100vw;
	height: var(--card-height);
	min-height: 100vw;
	display: grid;
	grid-template-rows: 
		var(--footer-height)
		calc( var(--header-height) / 1.25) 
		/* auto */
		var(--screenshot-area-height)
		1fr
		var(--footer-height)
	;
	justify-items: stretch;
	background-color: var(--card-bg-color);
	color: var(--main-text-color);
	transition: transform var(--shift-speed) ease, opacity var(--shift-speed) ease, border-radius calc(var(--shift-speed) / 2) ease;
	will-change: transform;
	transform-origin: center;
}
#app:not(.spa) .project-card {
	height: unset;
}
#app:not(.dark) .project-card {
	/* box-shadow: 0 0 0 var(--highlight-width) var(--highlight-color); */
}
#app:not(.dark) .project-header {
	/* box-shadow: 0 0 0 var(--highlight-width) var(--highlight-color); */
}
/* #app.dark .project-card .northeast .corner-arc-box::after{
	border: 0;
}
#app .project-card .northeast .corner-arc-box::after{
	border: 0;
} */
#app .project-card .southwest .corner-arc-box::after {
	border: 0;
}
.southwest > .corner-arc-box {
	top: 0;
	left: calc(var(--arc-radius) - (var(--highlight-width) * 2));
}
.southwest > .corner-arc-box::after {
	box-shadow: calc(var(--arc-radius) / -3) calc(var(--arc-radius) / 3) 0px var(--card-header-color);
}
.northeast > .corner-arc-box {
	bottom: calc(var(--arc-radius) * -1);
	right: calc(var(--highlight-width) * -3);
}
.northeast > .corner-arc-box::after {
	box-shadow: calc(var(--arc-radius) / 3) calc(var(--arc-radius) / -3) 0px var(--card-header-color);
	border: 0;
}
#app.wavy .project-card {
	border-top-right-radius: var(--arc-radius);
	border-bottom-left-radius: var(--arc-radius);
}
.project-card.offscreen {
	opacity: 0;
}
a {
	position: absolute;
}
.project-header {	
	background: var(--card-header-color);
	display: grid;
	grid-template-columns: var(--header-height) 1fr;
	grid-template-rows: 1fr calc(var(--main-padding) * 3.5);
	align-content: flex-start;
	justify-items: center;
	font-size: var(--main-font-size);
}
#app.wavy .project-header {
	border-radius: inherit;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border-top-right-radius: var(--arc-radius);
}
.project-link {
	font-size: var(--main-font-size);
	color: rgb(197, 194, 234);
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	font-size: calc(var(--header-height) / 4.2);
	width: 30%;
	font-weight: 700;
	background: #111;
	border: calc(var(--inner-padding) / 3) solid var(--highlight-color);
	border-radius: var(--inner-padding);
	margin: 0 var(--inner-padding);
}
.project-link > * {
	pointer-events: none;
}
.project-link:hover {
	background-color: #222;
}
.project-link:nth-of-type(1) {
	color: rgb(182, 228, 253);
	text-align: right;
	justify-content: flex-end;
}
.project-link:nth-of-type(2) {
	color: rgb(182, 253, 202);
}
.project-link > img {
	width: calc(var(--main-padding) * 2.25);
	margin: 0 var(--main-padding)
}
.project-link:nth-of-type(2) > i {
	width: calc(var(--main-padding) * 2.25);
	margin-left: var(--inner-padding);
	margin-right: var(--main-padding);
}
.project-link > div {
	width: min-content;
	height: min-content;
}
.project-header > img {
	grid-column-start: 1;
	grid-row-start: 1;
	grid-row-end: span 2;
	width: calc(var(--header-height) / 1.5)
}
.icon {
	grid-column-start: 1;
	grid-row-start: 1;
	grid-row-end: span 2;
	width: calc(var(--header-height) / 1.5);
	height: calc(var(--header-height) / 1.5);
}
.project-header > #title-display {
	grid-row-start: 1;
	/* grid-row-end: span 2; */
	grid-column-start: 2;
	width: auto;
	/* text-align: center; */
	/* font-size: var(--title-font-size); */
	/* font-size: calc(var(--header-height) / 3); */
	font-weight: 700;
	justify-self: flex-start;
	align-self: flex-end;
	padding: 0 var(--inner-padding);
}
.title-description {
	padding: var(--inner-padding);
	grid-row-start: 2;
	grid-column-start: 2;
	font-style: italic;
	font-size: calc(var(--main-font-size) * 1.2);
	width: 105%;
	justify-self: flex-start;
	align-self: center;
}
.tech-area {
	display: flex;
	align-items: center;
	padding: 0 var(--main-padding);
}
.bullet-area {
	display: flex;
	flex-wrap: wrap;
	flex-flow: row wrap;
	align-items: stretch;
	justify-content: space-evenly;
	max-height: 100%;
	padding: var(--main-padding);
	/* background: rgba(207, 207, 34, 0.19); */
}
.bullet-entry {
	display: flex;
	align-items: center;
	flex-grow: 1;
	width: 50%;
	font-size: calc(var(--main-font-size) * 1.1);
	/* display: none; */
}
.bullet-knob {
	font-size: calc(var(--header-height) / 2.5);
	min-width: calc(var(--header-height) / 1.5);
	text-align: center;
	line-height: 0;
}
.bullet-text {
	
}
.nav-column {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	height: var(--screenshot-area-height);
	padding: 0 calc(var(--main-padding) * 1.25);
	z-index: 6;
	transition: background 105ms ease;
	background: #00000022;
}
.nav-column:active {
	background: #00000033;
}
.nav-column > i {
	pointer-events: none;
	font-size: 2rem;
}
.nav-column.left > i {
	transform: scaleX(-1);
}
.nav-column.left {
	left: 0;
}
.nav-column.right {
	right: 0;	
}
.screenshot-area {
	position: relative;
	width: var(--screenshot-area-width);
	max-width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	justify-self: center;
}
.card-footer {
	/* margin: var(--inner-padding); */
	display: flex;
	align-items: stretch;
	justify-content: center;
	justify-self: center;
	padding: var(--main-padding);
	width: 100vw;
	max-width: 100vw;
	min-width: calc(var(--header-height * 3));
	background-color: var(--card-header-color);
	border-bottom-left-radius: var(--arc-radius);
}
.hidden {
	opacity: 0;
}
@media screen and (orientation: landscape) {
	.project-card {
		min-width: unset;
		width: calc(var(--screenshot-area-height) * 1.75);
		grid-template-rows: calc(var(--header-height) * 1.15) min-content var(
				--screenshot-area-height
			) min-content;
		/* grid-template-rows: calc(var(--header-height) * 1.15) auto calc(var(--header-height) / 1.5) auto 1fr auto; */
		/* grid-template-rows: calc(var(--header-height) * 1.15) auto calc(var(--header-height) / 1.5) var(--screenshot-area-height) 1fr; */
		grid-template-columns: auto 1fr;
		border-radius: var(--inner-padding);
	}
	.title-description {
		grid-column-end: span 2;
	}
	.tech-area {
		flex-direction: column;
		align-items: flex-start;
		padding-top: var(--main-padding);
		grid-column-start: 1;
		grid-row-start: 3;
		grid-row-end: span 2;
	}
	.tech-area > div {
		margin-bottom: var(--inner-padding);
	}
	.project-header {
		border-top-right-radius: var(--inner-padding);
	}
	.project-link.clickable {
		border-radius: calc(var(--inner-padding) / 2);
	}
	.project-header,
	.bullet-area {
		grid-column-end: span 2;
	}
	.card-footer {
		grid-column-end: span 2;
	}
	#upper-left-piece, #lower-right-piece {
		display: none;
	}
}
</style>

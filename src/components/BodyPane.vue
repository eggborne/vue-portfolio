<template>
			<div 
				class='body-pane'
				:class='[!intersected && `offscreen`]'
			>
			<a :name='`proj-${index}`' />
			<header class='project-header'>
				<img :src='seen && project.iconUrl' />
				<div id='title-display'>{{ project.name }}</div>
				<div class='project-link clickable' @click='handleClickLink(`repo`)' >
					<img src='../assets/icons/githubicon.png' />
					<div>View GitHub</div>
				</div>
				<div class='project-link clickable' @click='handleClickLink(`url`)'>
					<img src='../assets/icons/openinnew.png' />
					<div>Visit Website</div>
				</div>
				<div id='upper-left-piece'></div>
			</header>
			<div class='title-description'>{{ project.description }}</div>
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

			<div class='screenshot-area'>
				<div
					v-for='(screenArray, deviceType) in project.screenshots'
					:key='project.name + `screen` + deviceType'
					:class='`screenshot ${deviceType}`'
					:style='seen && intersected && { backgroundImage: `url(${screenArray[screenIndexes[deviceType]]})`}'
					@click='() => cycleScreenshot(deviceType, true)'
				>
					<!-- <img :src='seen && intersected && screenArray[0]' /> -->
				</div>
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
			<!-- <footer class='pane-footer'>
			footer
			</footer> -->	
			<div id='lower-right-piece'></div>
		
		</div>
</template>

<script>
import { techTagColors } from '../projects.js';
import TechTag from './TechTag.vue';

export default {
	data: () => {
		return {
			loaded: false,
			techTagColors: techTagColors,
			show: false,
			observer: null,
			intersected: false,
			seen: false,
			screenIndexes: {},
			screenTimers: {
				tablet: null,
				portrait: null,
				desktop: null,
			}
		};
	},
	name: 'BodyPane',
	props: {
		msg: String,
		project: Object,
		index: Number,
		menuOn: Boolean,
	},
	components: {
		TechTag
	},
	created() {
		for (let screenType in this.project.screenshots) {
			let screensOfType = this.project.screenshots[screenType];
			let screenInitial = screenType === 'tablet' ? 'l' : screenType[0];
			this.project.screenshots[screenType] = [];
			for (let i = 0; i < screensOfType; i++) {
				let url = `https://eggborne.com/screenshots/${this.project.directory}/${screenType}/${i}.${window.IMG_EXTENSION}`
				this.project.screenshots[screenType][i] = url;
			}
		}
	},
	mounted() {	
		this.screenIndexes = {...this.project.screenshots};
		for (let type in this.screenIndexes) {
			this.screenIndexes[type] = 0;
		}
		let options = {
			root: document.querySelector('#app'),
			rootMargin: `${window.HEADER_HEIGHT * 1}px 0px ${window.HEADER_HEIGHT * 1}px 0px`,
			threshold: 0,
		}
		this.observer = new IntersectionObserver(entries => {
			let pane = entries[0];
			if (this.intersected !== pane.isIntersecting) {
				if (pane.isIntersecting) {
					if (!this.seen) {
						console.log('---', this.project.name, 'seen for first time!')
						this.seen = true;
					}
					for (let timer in this.screenTimers) {
						let delay = Object.keys(this.screenTimers).indexOf(timer) * 1000;
						this.screenTimers[timer] = setTimeout(() => {
							this.cycleScreenshot(timer);
						}, 2000 + delay)
					}
				} else {
					for (let timer in this.screenTimers) {
						if (this.screenTimers[timer] !== null) {
							window.clearTimeout(this.screenTimers[timer]);
							this.screenTimers[timer] = null;
						}
					}
				}
				this.intersected = pane.isIntersecting;
			} else {
				console.log('>> no change.')
			}
		}, options)
		// this.observer.observe(this.$el);	
		this.observer.observe(this.$el);		
	},
	beforeDestroy() {
		console.log('BBBAAALLLLSSS', this)
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
			this.screenTimers[type] = halt ? null : setTimeout(() => {
				this.cycleScreenshot(type);
			}, 4000);
		}
	}
};
</script>
<style scoped>
.body-pane {
	width: 100%;
	display: grid;
	position: relative;
	grid-template-rows: calc(var(--header-height) * 1.15) auto calc(
			var(--header-height) / 1.5
		) var(--screenshot-area-height) min-content;
	justify-items: stretch;
	/* border-radius: var(--inner-padding); */
	background-color: var(--pane-bg-color);
	color: var(--main-text-color);
	/* transform-origin: center; */
	/* transform: scale(1.02); */
	/* height: var(--pane-height); */
	/* transition: all 420ms ease; */
	border-top-right-radius: var(--header-height);
	border-bottom-left-radius: var(--header-height);
}
#lower-right-piece::after {
	position: absolute;
	content: 'cocks';
	width: calc(var(--header-height) * 2);
	height: calc(var(--header-height) * 2);
	background: #00ff0055;
	border-radius: 50%;
	bottom: 0;
	right: 0;
	transform: translateY(50%);
	background: transparent;
	pointer-events: none;
  box-shadow: calc(var(--header-height) / 3) calc(var(--header-height) / -3) 0px var(--pane-bg-color);
}
a {
	position: absolute;
}
.project-header {
	border-radius: inherit;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	background: #080808;
	display: grid;
	grid-template-columns: var(--header-height) 1fr auto auto;
	grid-template-rows: 0.5fr 0.5fr;
	align-content: flex-start;
	justify-items: center;
	font-size: var(--main-font-size);
	padding-right: calc(var(--main-padding) / 4);
	border-top-right-radius: var(--header-height);
}
#upper-left-piece, #lower-right-piece {
  position: absolute;
  left: 0;
  top: 0 ;
  width: var(--header-height);
  height: var(--header-height);
  overflow: hidden;
	transform: translateY(-100%);
}
#lower-right-piece {
	transform: translateY(100%);
	top: unset;
	bottom: 0;
	left: unset;
	right: 0;
	pointer-events: none;
}
#upper-left-piece::before {
  position: absolute;
  content: '';
  border-radius: 50%;
  width: calc(var(--header-height) * 2);
  height: calc(var(--header-height) * 2);
  transform: translate(0, -50%);
	background: pink;
	left: 0;
	top: 0;
	width: calc(var(--header-height) * 2);
	height: calc(var(--header-height) * 2);
  pointer-events: none;
	background: transparent;
  box-shadow: calc(var(--header-height) / -3) calc(var(--header-height) / 3) 0px #080808;
}
.project-link {
	grid-column-start: 3;
	grid-row-start: 1;
	grid-row-end: span 2;
	font-size: var(--main-font-size);
	color: rgb(197, 194, 234);
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: calc(var(--header-height) * 0.8);
	width: calc(var(--header-height) * 1.5);
	align-self: center;
	margin: var(--inner-padding);
	font-weight: 700;
	font-size: calc(var(--main-padding));
	background: #111;
}
.project-link > * {
	pointer-events: none;
}
.project-link:hover {
	background-color: #222;
}
.project-link:nth-of-type(3) {
	grid-column-start: 4;
	color: rgb(182, 253, 202);
	margin-left: 0;
	border-top-right-radius:  calc(var(--header-height) * 1.2);
	padding-right: var(--main-padding);
	width: calc(var(--header-height) * 1.65);
	border-right-color: #61616166;
	border-left-color: transparent;	
}
.project-link > img {
	width: calc(var(--main-padding) * 2.25);
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
.project-header > #title-display {
	grid-row-start: 1;
	grid-row-end: span 2;
	grid-column-start: 2;
	width: auto;
	justify-self: flex-start;
	/* text-align: center; */
	font-size: var(--title-font-size);
	font-size: calc(var(--header-height) / 3.5);
	font-weight: 700;
}
.title-description {
	border-bottom: 1px solid #00000055;
	background-color: rgba(0, 0, 0, 0.258);
	font-style: italic;
	font-size: calc(var(--main-font-size) * 1.2);
	padding: var(--inner-padding);
	margin-bottom: var(--inner-padding);
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	padding: var(--main-padding) var(--main-padding);
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
	padding: calc(var(--main-padding) * 1.5) calc(var(--main-padding) * 3) calc(var(--main-padding) * 3);
	/* background: gray; */
	
}
.bullet-entry {
	display: flex;
	align-items: center;
	flex-grow: 1;
	width: 50%;
	font-size: calc(var(--main-font-size) * 1.1);
}
.bullet-knob {
	font-size: calc(var(--header-height) / 2.5);
	min-width: calc(var(--header-height) / 1.5);
	text-align: center;
	line-height: 0;
}
.bullet-text {
	
}
.screenshot-area {
	position: relative;
	min-height: var(--screenshot-area-height);
	padding: calc(var(--pane-spacing) / 2);
	display: flex;
	justify-content: center;
}
.screenshot {
	position: absolute;
	background-size: 100% auto;
	background-position: center;
	background-repeat: no-repeat;
	box-sizing: content-box;
	background-clip: content-box;
	background-color: #090909;
	border: solid transparent;
	border-image-repeat: stretch;
	z-index: 1;
	transition: all 600ms ease;
}
/* .body-pane:not(.loaded) .screenshot {
	transform: translate(0, 0) scale(0.75) !important;
} */
/* .screenshot > img {
	height: 100%;
	width: auto;
	max-width: 100%;
	max-height: 100%;
} */
.body-pane .screenshot.portrait::after {
	transition-delay: 100ms;
}
.body-pane .screenshot.tablet::after {
	transition-delay: 200ms;
}
.body-pane .screenshot.desktop::after {
	transition-delay: 300ms;
}
.body-pane .screenshot::after {
	/* background-image: url('../assets/static.gif'); */
	background-size: 100%;
	opacity: 0;
	position: absolute;
	content: '';
	background-color: black;
	width: inherit;
	height: inherit;
	transition: opacity 320ms linear;
}
.body-pane.offscreen .screenshot::after {
	opacity: 0.5;
	transition-duration: 0ms;
}
.screenshot.portrait {
	transform: translate(100%, 35%);
	height: var(--phone-screenshot-height);
	width: var(--phone-screenshot-width);
	border-image-source: url('../assets/galaxys9.png');
	border-width: calc(var(--phone-height) * 0.0835)
		calc(var(--phone-width) * 0.025) calc(var(--phone-height) * 0.1058);
	border-image-slice: 8.5% 25% 10.58%;
	border-image-width: 8.5% 25% 10.58%;
}
.screenshot.tablet {
	transform: translate(-30%, 125%);
	border-image-source: url('../assets/blacktablet2.png');
	height: var(--tablet-screenshot-height);
	width: var(--tablet-screenshot-width);
	border-width: calc(var(--tablet-height) * 0.05)
		calc(var(--tablet-width) * 0.0725);
	border-image-width: calc(var(--tablet-height) * 0.08)
		calc(var(--tablet-width) * 0.11);
	border-image-slice: 10% 12%;
}
.screenshot.desktop {
	transform: translate(-7%, 0%);
	border-image-source: url('../assets/desktopmonitor.png');
	width: var(--screenshot-width);
	height: calc(var(--screenshot-width) * var(--desktop-ratio));
	border-width: calc(var(--monitor-height) * 0.045)
		calc(var(--monitor-width) * 0.035) calc(var(--monitor-height) * 0.3)
		calc(var(--monitor-width) * 0.035);
	border-image-width: calc(var(--monitor-height) * 0.045)
		calc(var(--monitor-width) * 0.035) calc(var(--monitor-height) * 0.3)
		calc(var(--monitor-width) * 0.035);
	border-image-slice: 4.43% 3.1% 25.1% 3.1%;
	z-index: 0;
}
.pane-footer {
	margin: var(--main-padding);
	display: flex;
	align-items: center;
	justify-content: center;
}
.hidden {
	opacity: 0;
}
@media screen and (orientation: landscape) {
	.body-pane {
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
	.pane-footer {
		grid-column-end: span 2;
	}
	#upper-left-piece, #lower-right-piece {
		display: none;
	}
}
</style>

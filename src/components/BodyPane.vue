<template>
  <div class='body-pane'>
		<header class='project-header'>
			<img v-bind:src='project.iconUrl' />
			<h3>{{ project.name }}</h3>
		</header>
			<div class='screenshot-area'>
				<div class='screenshot desktop' v-bind:style='{ backgroundImage: `url(${project.screenshots.desktop[0]})`}' />
				<div v-if='project.screenshots.landscape.length' class='screenshot landscape' v-bind:style='{ backgroundImage: `url(${project.screenshots.landscape[0]})`}' />
				<div v-else-if='!project.screenshots.landscape.length' class='screenshot landscape hidden' v-bind:style='{ backgroundImage: `url(${project.screenshots.landscape[0]})`}' />
				<div class='screenshot mobile' v-bind:style='{ backgroundImage: `url(${project.screenshots.portrait[0]})`}' />
			</div>
		<ul
			v-for='(bullet, index) in project.descriptionBullets'
			v-bind:key='project.name + `desc` + index'
		>
			<div class='desc-bullet'>{{ bullet }}</div>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'BodyPane',
  props: {
		msg: String,
		project: Object
	},
	created: function() {
		// console.log('this!', this);
		// this.project.screenshots.portrait = this.project.screenshots.portrait.reverse();
	}
};
</script>

<style scoped>
.body-pane {
  background: #e5e5e5;
	align-self: stretch;
	border-radius: calc(var(--main-padding) / 1.5);
	box-shadow: 0px 2px 12px rgba(0,0,0,0.1), 0 5px 8px rgba(0,0,0,0.48);
	margin: var(--main-padding);
	transition: transform 320ms ease;
	color: #222;
	display: flex;
	flex-direction: column;
	padding-bottom: var(--main-padding);
}
.project-header {
	border-radius: inherit;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	background: black;
	height: calc(var(--header-height) * 1.25);
	color: var(--main-text-color);
	padding: 0;
	display: flex;
}
.project-header > img {
	height: 60%;
	width: auto;
	margin: var(--main-padding);
	/* image-rendering: pixelated;	 */
}
.screenshot-area {
	align-self: stretch;
	height: calc(var(--phone-height) * 2.05);
	padding: var(--pane-spacing);
	display: flex;
	justify-content: space-between;
}
.screenshot {
	box-sizing: content-box;
	background-clip: content-box;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-color: black;
}

.screenshot.mobile {
	height: var(--phone-height);
	min-width: calc(var(--phone-height) * (9 / 16));
	border: calc(var(--phone-height) / 30) solid transparent;
	border-top-width: calc(var(--phone-height) / 9);
	border-bottom-width: calc(var(--phone-height) / 8);
	border-image-source: url('../assets/blackphone.png');
	border-image-slice: 9% 4% 10% 4%;
	border-image-repeat: stretch;
	align-self: flex-end;
	z-index: 1;
}
.screenshot.landscape {
	min-width: var(--phone-height);
	height: calc(var(--phone-height) * (9 / 16));
	border: calc(var(--phone-height) / 30) solid transparent;
	border-left-width: calc(var(--phone-height) / 9);
	border-right-width: calc(var(--phone-height) / 8);
	border-image-source: url('../assets/blackphonelandscape.png');
	border-image-slice: 4% 10% 4% 9%;
	border-image-repeat: stretch;
	align-self: flex-end;
	margin-bottom: var(--main-padding);
	z-index: 1;
}
.screenshot.desktop {
	position: absolute;
	width: var(--screenshot-width);
	height: calc(var(--screenshot-width) * (9 / 16));
	border: 5vmin solid transparent;
	border-left-width: calc(var(--screenshot-width) / 40);
	border-right-width: calc(var(--screenshot-width) / 40);
	border-top-width: calc(var(--screenshot-width) / 24);
	border-bottom-width: calc(var(--screenshot-width) / 3.5);
	border-image-source: url('../assets/desktopmonitor.png');
	border-image-slice: 3% 2% 24% 2%;
	border-image-outset: -2px 0 0 0;
	border-image-repeat:stretch stretch;
	align-self: flex-start;
	z-index: 0;
}
.hidden {
	opacity: 0;
}
ul {
	margin: var(--main-padding) var(--pane-spacing);
	padding: 0;
	align-self: stretch;
	align-self: flex-start !important;
}
</style>

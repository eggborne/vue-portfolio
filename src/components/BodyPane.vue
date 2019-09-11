<template>
  <div class='body-pane'>
		<header class='project-header'>
			<img v-bind:src='project.iconUrl' />
			<h2>{{ project.name }}</h2>
		</header>
			<div class='screenshot-area'
			v-for='(screenUrl, index) in project.screenshots'
			v-bind:key='project.name + `screen` + index'
			>
			<div class='screenshot mobile' v-bind:style='{ backgroundImage: `url(${screenUrl})`}' />
			<div class='screenshot desktop' v-bind:style='{ backgroundImage: `url(${screenUrl})`}' />
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
  }
};
</script>

<style scoped>
.body-pane {
  background: #e5e5e5;
	align-self: stretch;
	/* height: calc(100% - var(--pane-spacing)); */
	border-radius: calc(var(--main-padding) / 1.5);
	box-shadow: 0px 2px 12px rgba(0,0,0,0.1), 0 5px 8px rgba(0,0,0,0.48);
	/* transform: scale(0.95); */
	margin: var(--main-padding);
	transition: transform 320ms ease;
	color: #222;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.body-pane:last-child {
	/* height: calc(100% - var(--pane-spacing) - (var(--pane-spacing) / 2)); */
}
.project-header {
	border-radius: inherit;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	background: black;
	height: calc(var(--header-height) * 1.5);
	color: var(--main-text-color);
	padding: 0;
	display: flex;
}
.project-header > img {
	height: 65%;
	width: auto;
	margin: var(--main-padding);
}
.screenshot-area {
	align-self: stretch;
	padding: var(--pane-spacing);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
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
	position: absolute;
	height: calc(var(--screenshot-width) * (9 / 16));
	width: calc(var(--screenshot-width) * (9 / 16) * (9 / 16));
	border: calc(var(--screenshot-width) / 64) solid transparent;
	border-top-width: calc(var(--screenshot-width) / 14);
	border-bottom-width: calc(var(--screenshot-width) / 14);
	border-image-source: url('../assets/blackphone.png');
	border-image-slice: 9% 4% 10% 4%;
	border-image-repeat: stretch;
	align-self: flex-end;
}
.screenshot.desktop {
	width: var(--screenshot-width);
	height: calc(var(--screenshot-width) * (9 / 16));
	border: 5vmin solid transparent;
	border-left-width: calc(var(--screenshot-width) / 40);
	border-right-width: calc(var(--screenshot-width) / 40);
	border-top-width: calc(var(--screenshot-width) / 40);
	border-bottom-width: calc(var(--screenshot-width) / 3.5);
	border-image-source: url('../assets/desktopmonitor.png');
	border-image-slice: 2% 2% 24% 2%;
	border-image-repeat:stretch stretch;
	align-self: flex-start;
}
.live-screen {
	align-self: center;
	width: 40vmin;
	height: calc(40vmin * (16/10));
	border: 0;	
	border-radius: calc(var(--main-padding) / 4);	
}
ul {
	margin: var(--main-padding) var(--pane-spacing);
	padding: 0;
	align-self: stretch;
	align-self: flex-start !important;
}
@media (orientation: landscape) {
	:root {
		
	}
	.body-pane {
		--screenshot-width: 40vw;
		width: 60vw;
	}
	
}
</style>

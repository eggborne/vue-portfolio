<template>
	<div id="screen-grabber">
		<iframe remote src='https://eggborne.com/frogracer' class='portrait' />
		<iframe src='https://eggborne.com/frogracer' class='desktop' />
		<iframe src='https://eggborne.com/frogracer' class='tablet' />
	</div>
</template>

<script>

export default {
	name: 'ScreenGrabber',
	methods: {
		takeScreenshot(e) {
			console.log('clcicked iframe', e)
			var browser = document.querySelector(`iframe`);
	console.log(browser)
			var request = browser.getScreenshot(100, 100);

			request.onsuccess = function() {
				var blob = request.result;
				var url = URL.createObjectURL(blob);
			}
		}
	}
};
</script>

<style scoped>
ul {
	list-style: none;
}
#screen-grabber {
	box-sizing: border-box;
	position: fixed;
	top: var(--header-height);
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	/* align-items: center; */
	justify-content: space-evenly;
	background: darkkhaki;
	width: 100vw;
	height: 90vh;
	padding: 2rem;
	z-index: 24;
	overflow: auto;
	pointer-events: all;
}
button {
	width: auto;
	height: 3rem;
}
iframe {
	margin: 1rem;
	pointer-events: all;
	z-index: 8;
	border: 0;
}
iframe.portrait {
	width: var(--screenshot-width);
	height: calc(var(--screenshot-width) / var(--portrait-ratio));
}
iframe.desktop {
	width: 80vw;
	height: calc(80vw * var(--desktop-ratio));
}
iframe.tablet {
	width: 70vw;
	height: calc(70vw * var(--tablet-ratio));
}

@media screen and (orientation: landscape) {
}
</style>

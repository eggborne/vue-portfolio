<template>
  <div
    :class='[`screenshot`, `${deviceType}`, alternate && `alternate`]'
    :style='{ backgroundImage: `url(${screenUrl})` }'
    v-on:click='cycleScreen(deviceType, true)'
  >
  </div>
</template>

<script>
export default {
  name: 'Screenshot',
  props: {
    deviceType: String,
    alternate: Boolean,
    featuredDevice: Number,
    screenUrl: String,
    cycleScreen: Function
  },
  computed: {
    isFeatured() { return ['desktop', 'portrait', 'tablet'][this.featuredDevice] === this.deviceType},
  }
}
</script>

<style scoped>
.screenshot {
  /* position: absolute; */
	background-size: 100% auto;
	background-position: center;
	background-repeat: no-repeat;
	box-sizing: content-box;
	background-clip: content-box;
	background-color: #090909;
	border: solid white;
	border-image-repeat: stretch;
	transition: all 600ms ease;  
}
.screenshot.portrait {
  /* right: var(--main-padding); */
	height: var(--phone-screenshot-height);
	width: var(--phone-screenshot-width);
	border-image-source: url('../assets/galaxys.png');
	border-width: calc(var(--phone-height) * 0.0835)
		calc(var(--phone-width) * 0.025) calc(var(--phone-height) * 0.1058);
	border-image-slice: 8.5% 25% 10.58%;
	border-image-width: 8.5% 25% 10.58%;
}
.screenshot.portrait.alternate {
  border-image-source: url('../assets/blackphone.png');
}
.screenshot.tablet {
  /* align-self: flex-end; */
  /* left: var(--main-padding); */
	border-image-source: url('../assets/blacktablet.png');
	height: var(--tablet-screenshot-height);
	width: var(--tablet-screenshot-width);
	border-width: 
    calc(var(--tablet-height) * 0.05)
		calc(var(--tablet-width) * 0.0725);
	border-image-width: 
    calc(var(--tablet-height) * 0.08)
		calc(var(--tablet-width) * 0.11);
	border-image-slice: 10% 12%;
  display: none;
}
.screenshot.desktop {
	border-image-source: url('../assets/desktopmonitor.png');
	width: var(--monitor-width);
	height: var(--monitor-height);
	border-width: calc(var(--monitor-height) * 0.045)
		calc(var(--monitor-width) * 0.035) calc(var(--monitor-height) * 0.3)
		calc(var(--monitor-width) * 0.035);
	border-image-width: calc(var(--monitor-height) * 0.045)
		calc(var(--monitor-width) * 0.035) calc(var(--monitor-height) * 0.3)
		calc(var(--monitor-width) * 0.035);
	border-image-slice: 4.43% 3.1% 25.1% 3.1%;
}
.tech-tag {
  height: calc(var(--header-height) / 2.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--main-font-size) * 1.1);
  padding: 0 1em;
  border-radius: calc(var(--inner-padding) / 2);
  border: 1px solid #00000055;;
  color: var(--main-text-color);
  text-shadow: 0px 1px black;
  margin-right: 0.5em;
}
</style>

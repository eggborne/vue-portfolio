<template>
  <div id='app'>
    <div id='header-space'></div>
    <!-- <Header v-if='!landscape' v-bind:toggleMenu='toggleMenu' v-bind:menuOn='menuOn' v-bind:titleText='titleText' /> -->
    <MainBody v-bind:landscape='landscape' v-bind:toggleMenu='toggleMenu' v-bind:projects='projects' v-bind:menuOn='menuOn' />
    <Footer msg='Footer'/>
    <!-- <transition name='slide'>	
      <Menu 
        v-bind:toggleMenu='toggleMenu' 
        v-bind:projects='projects' 
        v-if='menuOn' 
      />
    </transition> -->
  <!-- <ScreenGrabber /> -->
  </div>
</template>

<script>
import { projects }  from './projects.js';
import Header from './components/Header.vue';
import MainBody from './components/MainBody.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

import ScreenGrabber from './components/ScreenGrabber.vue';

export default {
  data: function() { 
    return {
      landscape: false,
      titleText: 'web projects of Mike Donovan',
      menuOn: false,
      projects: projects,
      toggleMenu: () => {
        this.menuOn = !this.menuOn;
      }   
    }
  },
  name: 'app',
  components: {
    Header,
    Footer,
    MainBody,
    Menu,
    ScreenGrabber
  },
  created: function() {
    this.landscape = window.innerWidth > window.innerHeight;
    // this.titleText = (window.innerWidth / window.innerHeight).toPrecision(3);
    // window.addEventListener('resize', () => {
    //   this.titleText = (window.innerWidth / window.innerHeight).toPrecision(3);
    // })
  }
}
</script>

<style>
:root {
  --view-height: 100vh;
  --main-column-width: calc(var(--screenshot-area-height) * 3.3);
  /* --header-height: calc(var(--view-height) * 0.08); */
  --header-height: calc(16vw - 1vh);
  --footer-height: calc(var(--view-height) * 0.09);
  /* --main-padding: 3vmin; */
  --main-padding: calc(var(--header-height) / 5.5);
  --inner-padding: calc(var(--main-padding) / 2);
  --pane-height: calc(var(--view-height) - var(--header-height) - (var(--main-padding) * 2.5));
  --pane-spacing: calc(var(--main-padding) * 2);
  --main-text-color: #d8d8d8;
  --pane-bg-color: rgb(116, 112, 105);
  --desktop-ratio: 0.5625;
  --tablet-ratio: 0.75;
  --tablet-ratio: 0.625;
  --portrait-ratio: 0.5;
  --screenshot-area-height: 80vw;
  --screenshot-width: 60vw;
  --screenshot-height: calc(var(--screenshot-width) * var(--desktop-ratio));

  --phone-screenshot-height: calc(var(--screenshot-height) * 1.3);  
	--phone-screenshot-width: calc(var(--phone-screenshot-height) * (var(--desktop-ratio)));
	--phone-width: calc(var(--phone-screenshot-width) * 1.035);
	--phone-height: calc(var(--phone-screenshot-height) * 1.2);
	--monitor-width: calc(var(--screenshot-width) * 1.06);
	--monitor-height: calc(var(--screenshot-height) * 1.42);
	--tablet-screenshot-height: calc(var(--monitor-height) * 0.6);
	--tablet-screenshot-width: calc(var(--tablet-screenshot-height) / var(--tablet-ratio));
	--tablet-width: calc(var(--tablet-screenshot-width) * 1.1);
	--tablet-height: calc(var(--tablet-screenshot-height) * 1.1);
  --hamburger-size: calc(var(--header-height) - (var(--main-padding) * 3));
  --off-white: rgb(185, 185, 185);

  --main-font-size: calc((var(--header-height) / 16) + 0.4rem);
  --title-font-size: calc((var(--header-height) / 5) + 0.4rem);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-enter {
	transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #222;    
}
/* body::after {
  position: fixed;
  bottom: 0;
  left: 0;
  height: var(--header-height);
  color: #333;
  content: '';
  padding: 1vh;
  font-size: var(--main-font-size);
  font-family: Roboto;
  z-index: 2;
  pointer-events: none;
} */
.clickable {
  cursor: pointer;
}
#body-shade {
	content: '';
	position: fixed;
	top: var(--header-height);
	left: 0;
	width: 100vw;
	height: calc(var(--view-height) - var(--header-height));
	background-color: #000000ee;
  z-index: 2;
	transition: all 320ms ease;
  display: none;
}
header, footer {
  display: flex;
  align-items: center;
  background: #111;
  /* width: 100%; */
}
#app {
  height: var(--view-height);
  /* width: 100%; */
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-rows: var(--header-height) 1fr var(--footer-height);
  scroll-padding-top: calc(var(--header-height) + (var(--main-padding)));
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
}
#project-list {
	display: grid;
	grid-row-gap: var(--pane-spacing);
	grid-column-gap: var(--pane-spacing);
  transition: opacity 600ms ease;
}
@media (orientation: landscape) {
	:root {
    --header-height: calc(5vh + 2vw);
    --screenshot-area-height: calc(var(--header-height) * 4);
    --screenshot-height: calc(var(--screenshot-area-height) / 2.35);
    --screenshot-width: calc(var(--screenshot-height) / var(--desktop-ratio));
    --pane-height: calc(var(--view-height) - var(--header-height) - (var(--pane-spacing) * 2));
	}
  .slide-enter {
	transform: translateY(-100%);
  }
  .slide-enter-to {
    transform: translateY(0%);
  }
  .slide-leave {
    transform: translateY(0%);
  }
  .slide-leave-to {
    transform: translateY(-100%);
  }
  #project-list {
    grid-template-columns: 0.5fr 0.5fr;
    width: var(--main-column-width);
    /* background: orange; */
    /* padding: var(--main-padding);
    grid-row-gap: var(--main-padding);
    grid-column-gap: var(--main-padding); */
    /* max-width: 120vh; */
  }
  #header-space {
    width: var(--main-column-width);
  }
}

@media (min-aspect-ratio: 16/9) {
  body {
    /* background: rgba(255, 0, 0, 0.5); */
  }
}
@media (max-aspect-ratio: 16/9) {
  body {
    /* background: rgba(0, 64, 0, 0.5); */
  }
}

/* @media only screen and (min-width: 320px) and (max-width: 479px) {
  body::after {
    content: 'mobile portrait'
  }
}
@media only screen and (orientation:landscape) and (min-width: 480px) and (max-width: 767px) {
  body::after {
    content: 'mobile landscape'
  }
}
@media only screen and (min-width: 768px) and (max-width: 979px) {
  body::after {
    content: 'small desktop'
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1199px) {
  body::after {
    content: 'med desktop'
  }
}
@media only screen and (min-width: 1200px) {
  body::after {
    content: 'large desktop'
  }
} */
</style>

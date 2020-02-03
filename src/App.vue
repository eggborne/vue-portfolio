<template>
  <div :class='[
      userOptions.noScroll && `spa`, 
      userOptions.darkMode && `dark`,
      !userOptions.animations && `no-animations`
    ]' 
    id='app'
  >
  
    <div id='header-space'></div>
    <Header 
			:toggleMenu='toggleMenu' 
      :switchProjects='switchProjects'
			:menuOn='menuOn' 
			:titleText='`web projects of Mike Donovan`'
      :toggleOption='toggleOption'
      :setOption='setOption'
		/>
    <MainBody 
      v-if='dataReady'
      :menuOn='menuOn'
      :previousProject='previousProject'
      :projectsSeen='projectsSeen'
      :switchProjects='switchProjects'
      :reportScreenUrls='reportScreenUrls'
    />
    <Footer v-if='!landscape' :noScroll='userOptions.noScroll' :switchProjects='switchProjects' :scrollDirection='scrollDirection'/>
    <video v-if='userOptions.darkMode' muted autoplay loop id='space-bg'>
      <source src='./assets/starfield.mp4' type='video/mp4'>
    </video>
  <!-- <ScreenGrabber /> -->
  <div id='debug'></div>
  </div>
</template>

<script>
import SwipeDetector from './swipe.js';
import { projects, optionData }  from './projects.js';
import Header from './components/Header.vue';
import MainBody from './components/MainBody.vue';
import Footer from './components/Footer.vue';
import { mapState } from 'vuex';

function setScreenDimensions() {
  window.IS_LANDSCAPE = window.innerWidth > window.innerHeight;
  window.HEADER_HEIGHT =
    !window.IS_LANDSCAPE
      ?  Math.round(window.innerWidth * 0.16 - window.innerHeight * 0.01)
      : Math.round(window.innerHeight * 0.1 - window.innerWidth * 0.01);
      window.HEADER_HEIGHT += window.HEADER_HEIGHT % 4;
  window.MAIN_PADDING = Math.round(window.HEADER_HEIGHT / 5.5);
  window.MAIN_PADDING += window.MAIN_PADDING % 2;
  window.DEFAULT_HIGHLIGHT_WIDTH = Math.ceil(window.MAIN_PADDING / 12);
  window.FOOTER_HEIGHT = window.DEFAULT_FOOTER_HEIGHT = window.HEADER_HEIGHT;
  window.ARC_RADIUS = 50;
  window.HIGHLIGHT_WIDTH = Math.ceil(window.MAIN_PADDING / 12);
  window.CARD_SPACING = window.MAIN_PADDING * 1;
  // document.documentElement.style.setProperty('--view-height', window.innerHeight + 'px');
  // document.documentElement.style.setProperty('--header-height', window.HEADER_HEIGHT + 'px');
  // document.documentElement.style.setProperty('--footer-height', window.FOOTER_HEIGHT + 'px');
  // document.documentElement.style.setProperty('--main-padding', window.MAIN_PADDING + 'px');
  document.documentElement.style.setProperty('--highlight-width', window.HIGHLIGHT_WIDTH + 'px');
  document.documentElement.style.setProperty('--card-spacing', window.CARD_SPACING + 'px');  
}
window.addEventListener('resize', setScreenDimensions);


export default {
  data: function() { 
    return {
      scrollDirection: 'vertical',

      // noScroll: true,
      darkMode: false,
      // animations: true,
      waveRadius: 50,
      borderSize: 1,      
      footerHeight: 3,
      headerColor: '#193219',
      cardBgColor: '#222031',
      mainBgColor: '#080808',
      cardHeaderColor: '#252f33',
      highlightColor: '#5e7e3e',
      textColor: '#d8d8d8',

      titleText: 'web projects of Mike Donovan',
      // menuOn: false,
      // projects: projects,
      numberOfProjects: null,
      projectsSeen: [0],
      // currentProject: 0,
      previousProject: 0,
      optionData: [],
      dataReady: false,
      landscape: window.IS_LANDSCAPE,  
    }
  },
  name: 'app',
  components: {
    Header,
    Footer,
    MainBody
  },
  computed: {
    currentProjectIndex() {
      let ind = Object.values.indexOf()
    },
    scrollAmount() {
      return window.CARD_HEIGHT + (window.CARD_SPACING);
    },
    ...mapState(['menuOn', 'projectObj', 'projects', 'currentProject']),
    ...mapState('userOptions', {
      userOptions: state => state,      
    }),
    projectList() {
      return Object.values(this.projectObj);
    }
  },
  created: function() {
    console.log(this.$store.state)
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
    })
    this.numberOfProjects = Object.keys(projects).length;
    setScreenDimensions();
    window.CLICK_METHOD = 'onpointerdown' in window ? 'onpointerdown' : 'ontouchstart' in window ? 'ontouchstart' : 'onclick';   
    // console.error('HEADER_HEIGHT', window.HEADER_HEIGHT);
    // console.error('MAIN_PADDING', window.MAIN_PADDING);
    // console.error('HIGHLIGHT_WIDTH', window.HIGHLIGHT_WIDTH);
    // console.error('CARD_SPACING', window.CARD_SPACING);
    // console.error('CLICK_METHOD', window.CLICK_METHOD);
    // console.error('IMG_EXTENSION', window.IMG_EXTENSION);
    // if (window.innerWidth > window.innerHeight) {
      //   this.waveRadius = 0;
    // }
    
    this.dataReady = true;    
  },
  mounted() {
    this.optionData = this.userOptions;
    console.warn('app useroptions', this.userOptions)
    let swipeDetector = new SwipeDetector(this);
    swipeDetector.setInputs(document.getElementById('main-body'));
    // document.getElementById('debug').innerText = `
    //   H_H: ${window.HEADER_HEIGHT} | F_H: ${window.FOOTER_HEIGHT}
    // `;
  },
  methods: {
    toggleMenu() {
      this.menuOn = !this.menuOn;

    },
    reportScreenUrls(projectName, screensArray) {
      console.error('this is', projectName)
      console.log('ok projects is', this.projects)
      this.projectObj[projectName].screenshots = screensArray;
      // for (let screenType in screensArray) {
      //   screensArray[screenType].map((screenUrl, i) => {
      //     console.log('creating image with url', screenUrl)
      //     let image = new Image(screenUrl);
      //     image.classList.add('screenshot')
      //     console.log('created', image)
      //     this.projects[projectIndex].screenshots[screenType][i] = image;
      //   })
      // }
    },
    scrollProjects(direction) {
      let newIndex = this.currentProject + direction;
      if (newIndex >= 0 && newIndex < this.numberOfProjects) {
        let listEl = document.getElementById('app');
        console.log('curent', this.scrollAmount)
        listEl.scrollBy({ top:( this.scrollAmount ) * direction, behavior: 'smooth' });
        console.warn('on proj', this.currentProject)
        // listEl.style.transform = `translateY(${this.scrollAmount * direction})`;
        this.currentProject = newIndex;
        if (this.projectsSeen.indexOf(this.currentProject) === -1) {
          this.projectsSeen.push(this.currentProject);
          if (this.projectsSeen.length === this.numberOfProjects) {
            console.error('ALL SEEN');
          }
        }
      }
    },
    switchProjects(projectIndex, direction, swiped) {
      console.log('projectIndex, direction, swiped', ...arguments);
      let listEl = document.getElementById('app');
      let newIndex = projectIndex;
      if (direction) {
        newIndex = this.currentProject + direction;
        if (newIndex < 0 || newIndex >= this.numberOfProjects) {
          return;
        } else {
          let buttonObj = document.getElementById(direction == -1 ? 'prev-button' : 'next-button');
          if (buttonObj) {
            buttonObj.classList.add('pressed');
            setTimeout(() => {
              buttonObj.classList.remove('pressed');
            }, 220)
          }
        }
      }
      this.$store.commit('setCurrentProject', newIndex)
      // this.currentProject = newIndex;
      if (this.projectsSeen.indexOf(this.currentProject) === -1) {
        this.projectsSeen.push(this.currentProject);
        if (this.projectsSeen.length === this.numberOfProjects) {
          console.error('ALL SEEN');
        }
      }
    },
    toggleOption(option) {
      console.log('changing', option, 'to', !this[option], 'while', this[option]);
      let newValue = !this[option];
      this[option] = newValue;
    },
    setOption(option, newValue) {
      console.log('changing', option, 'to', newValue, 'while', this[option]);
      let cssVar = this.optionData.filter(opt => opt.name === option)[0].cssVar;
      console.log('setting var', cssVar)
      this[option] = newValue;
      document.documentElement.style.setProperty(cssVar, newValue);
    },
    adjustRangedOption(option, newValue) {
      let cssVar = this.optionData.filter(opt => opt.name === option)[0].cssVar;
      if (option === 'waveRadius') {
        this.waveRadius =  parseInt(newValue);
        let newRadius = Math.round(Math.round(window.HEADER_HEIGHT * 1.2) * (newValue / 100));
        // newRadius += newRadius % 2;
        console.error('new radius is', newValue, '% -> ', newRadius)        
        // this.$store.userOptions.commit('adjustSliderOption', { option, newRadius });
      } else if (option === 'borderSize') {
        this.borderSize = parseInt(newValue);
        window.HIGHLIGHT_WIDTH = window.DEFAULT_HIGHLIGHT_WIDTH + ((this.borderSize) - window.DEFAULT_HIGHLIGHT_WIDTH);
        document.documentElement.style.setProperty(cssVar, window.HIGHLIGHT_WIDTH + 'px');
      } else if (option === 'footerHeight') {
        this.footerHeight = parseInt(newValue);
        window.FOOTER_HEIGHT = Math.round((window.HEADER_HEIGHT) + ((this.footerHeight - 2) * (window.HEADER_HEIGHT / 12)));
        document.documentElement.style.setProperty(cssVar, window.FOOTER_HEIGHT + 'px');
      }
    }
  }
}
</script>

<style>
:root {
  --view-height: 100vh;  
  /* --header-height: calc(var(--view-height) * 0.08); */
  --header-height: calc(16vmin - 1vmax);
  --footer-height: var(--header-height);
  /* --footer-height: calc(var(--header-height) + (var(--main-padding))); */

  --arc-radius: calc(var(--main-padding) * 2);
  --arc-radius: calc(var(--header-height) / 1.5);
  --arc-diameter: calc(var(--arc-radius) * 2);
  
  /* --footer-height: var(--header-height); */

  --main-padding: calc(var(--header-height) / 5.5);
  --inner-padding: calc(var(--main-padding) / 2);

  --highlight-width: calc(var(--main-padding) / 12);

  /* --card-spacing: calc(var(--highlight-width) * 8); */
  --card-spacing: calc(var(--main-padding) * 0.1);

  /* --card-height: calc(var(--view-height) - var(--header-height) - var(--footer-height) - (var(--card-padding) * 2)); */
  --card-height: calc(var(--view-height) - var(--header-height) - var(--footer-height) -  var(--card-spacing) -  var(--card-spacing));

  --main-font: 'Roboto';
  
  --header-color: #2d382a;
  --footer-color: var(--header-color);
  --card-bg-color: #33323b;
  --main-bg-color: #080808;
  --card-header-color: #252f33;
  --highlight-color: #4e5c40;
  --main-text-color: #d8d8d8;
  
  --off-white: #b9b9b9;
  --sheer-white: #ffffff09;

  --desktop-ratio: 0.5625;
  --tablet-ratio: 0.75;
  --tablet-ratio: 0.625;
  --portrait-ratio: 0.5625;

  /* --screenshot-area-height: calc(var(--header-height) * 5.75); */
  --screenshot-area-height: calc(var(--card-height) / 2.75);
  --screenshot-area-width: calc(var(--main-column-width) - var(--main-padding));
  
  /* --monitor-height: calc(var(--screenshot-area-height) / 1.9);
  --monitor-width: calc(var(--monitor-height) / var(--desktop-ratio)); */

  --monitor-width: calc(var(--screenshot-area-width) * 0.65);
  --monitor-height: calc(var(--monitor-width) * var(--desktop-ratio));

  /* --phone-screenshot-height: calc(var(--screenshot-area-height) / 1.35);  
	--phone-screenshot-width: calc(var(--phone-screenshot-height) * (var(--portrait-ratio))); */

	--phone-screenshot-width: calc(var(--screenshot-area-width) * 0.25);
  --phone-screenshot-height: calc(var(--phone-screenshot-width) / var(--portrait-ratio));  


	--phone-width: calc(var(--phone-screenshot-width) * 1.035);
  --phone-height: calc(var(--phone-screenshot-height) * 1.2);
  
	--tablet-screenshot-height: calc(var(--screenshot-area-height) * 0.45);
	--tablet-screenshot-width: calc(var(--tablet-screenshot-height) / var(--tablet-ratio));
	/* --tablet-screenshot-height: calc(var(--tablet-screenshot-width) * var(--tablet-ratio)); ; */
	--tablet-width: calc(var(--tablet-screenshot-width) * 1.1);
	--tablet-height: calc(var(--tablet-screenshot-height) * 1.1);
  
  --hamburger-size: calc(var(--header-height) - (var(--main-padding) * 3));

  --main-font-size: calc((var(--header-height) / 16) + 0.4rem);
  --title-font-size: calc((var(--header-height) / 4.25) + 0.4rem);

  --main-column-width: calc(100vw - (var(--main-padding) * 2));
  --animation-setting: initial;
  --shift-speed: 540ms;
  --arrow-color: #777;
}

#debug {
  position: fixed;
  bottom: 2px;
  left: 4px;
  color: white;
  font-size: 0.75rem;  
  z-index: 12;
}

h2 {
  margin: 0;
  padding: 0;
  font-size: var(--title-font-size);
}
#app.no-animations * {
  transition: none !important;
}
#app.dark {
  /* --header-color: #111111; */
  --footer-color: #11111199;
  /* --card-header-color: #15380a55; */

  /* --highlight-color: rgb(94, 126, 62); */

  --card-bg-color: transparent;
  --off-white: #999;
  --arrow-color: #333;
}
#app.dark #page-footer, #app.dark #page-footer .corner-arc-box::after {
  border-width: 0 !important;
}
#app.dark #menu {

}
#app #page-header {
  box-sizing: content-box;
  border-bottom: var(--highlight-width) solid var(--highlight-color);
  border-left: var(--highlight-width) solid var(--highlight-color);
}
#app #page-footer {
  box-sizing: content-box;
  border-top: var(--highlight-width) solid var(--highlight-color);
  border-right: var(--highlight-width) solid var(--highlight-color);
  max-height: unset;
}
#app #menu {
  border-left: var(--highlight-width) solid var(--highlight-color);
  border-bottom: var(--highlight-width) solid var(--highlight-color);
  /* box-shadow: 0 0 0 var(--highlight-width) var(--highlight-color); */
}
.nav-label.left {
  /* transform: rotate(-90deg); */
}

.fade-enter, .fade-leave-to {
  opacity: 0.5;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

.dim-enter, .dim-leave-to {
  opacity: 0.5;
}
.dim-enter-to, .dim-leave {
  opacity: 1;
}

.switch-enter, .switch-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
.switch-leave-to, .switch-enter {
  opacity: 0;
  transform: scale(0.8);
}

.card-up-enter-to, .card-down-enter-to {
  /* transform: translateY(0%); */
  /* opacity: 1; */
}
.card-up-enter, .card-down-leave-to {
  transform: translateY(calc(var(--card-height) + var(--card-spacing) + var(--card-spacing)));
  opacity: 0;
}
.card-up-leave-to, .card-down-enter {
  opacity: 0;
  transform: translateY(calc((var(--card-height) + var(--card-spacing) + var(--card-spacing)) / -1 ));
}

.card-forward-enter-to, .card-back-enter-to {
  /* transform: scale(1); */
  /* opacity: 1; */
}
.card-forward-enter, .card-back-leave-to {
  transform: translateX(calc(var(--body-width) * -1));
  opacity: 0;
}
.card-forward-leave-to, .card-back-enter {
  opacity: 0;
  transform: translateX(calc(var(--body-width)));
}

.fade-menu-enter-active, .fade-menu-leave-active {
  transition: transform 210ms ease, opacity 210ms ease;
}
.fade-menu-enter, .fade-menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scaleY(0.95);
}
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: transform var(--shift-speed) ease, opacity 210ms ease;
}
.slide-menu-enter, .slide-menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(100%); */
  position: absolute;
  opacity: 0;
}

/* .card-next-enter {
  transform: translate(100vw, 0);
}
.card-next-enter-to {
  transform: translate(0%, 0);
}
.card-next-leave-to {
  transform: translate(-100vw, 0);
} */

/* .card-previous-enter {
  transform: translateX(-50vw);
}
.card-previous-enter-to {
  transform: translateX(0%);
}
.card-previous-leave-to {
  transform: translateX(100vw);
} */

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
.clickable {
  cursor: pointer;
}
.stroke {  
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
}
.corner-arc-box {
  position: absolute;
  overflow: hidden;
  width: var(--arc-radius);
  height: var(--arc-radius);
  background: transparent;
}
.corner-arc-box::after {
  position: absolute;
  width: calc(var(--arc-diameter) - (var(--highlight-width) * 2));
  height: calc(var(--arc-diameter) - (var(--highlight-width) * 2));
  content: '';
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  border: var(--highlight-width) solid var(--highlight-color);
}
.northeast > .corner-arc-box {
  transform-origin: top right;
}
.northeast > .corner-arc-box::after {
  transform: translate(calc(var(--arc-radius) * -1), 0);
  box-shadow: calc(var(--arc-radius) / 3) calc(var(--arc-radius) / -3) 0px var(--header-color);
}

/* northwest only appear on card headers/footers */
.northwest > .corner-arc-box::after {
  transform: translate(0, 0);
  box-shadow: calc(var(--arc-radius) / -3) calc(var(--arc-radius) / -3) 0px var(--card-header-color);
  border: 0;
}
/* southeast only appear on card headers/footers */
.southeast > .corner-arc-box {
  transform: translate(0%, calc(var(--arc-radius) * -1));
}
.southeast > .corner-arc-box::after {
  box-shadow: calc(var(--arc-radius) / 3) calc(var(--arc-radius) / 3) 0px var(--card-header-color);
  border: 0;
  transform: translate(-50%, -50%);
}


.southwest > .corner-arc-box {
  transform: translate(-100%, -100%);
}
.southwest > .corner-arc-box::after {
  left: 0;
  bottom: 0;
  box-shadow: calc(var(--arc-radius) / -3) calc(var(--arc-radius) / 3) 0px var(--footer-color);  
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
	/* transition: all 320ms ease; */
  display: none;
}
header, footer {
  display: flex;
  align-items: center;
  /* background: #111; */
  /* width: 100%; */
}
#app {
  
  height: var(--view-height);  
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
  /* overflow-y: auto; */
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
}
#project-list {
	display: grid;
	grid-row-gap: var(--card-spacing);
	grid-column-gap: var(--main-padding);
  transition: opacity 600ms ease;
  padding: var(--card-spacing) 0;  
}
@media (orientation: portrait) {
  #app.spa {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .spa #project-list {
    margin-bottom: var(--footer-height);
  }
  .spa #page-footer {
    position: fixed;
    width: 100vw;
    height: var(--footer-height);
    /* bottom: 0;     */
    top: calc(var(--view-height) - var(--footer-height));
    z-index: 1;
  }
  .spa .project-card {
    position: absolute;
    top: calc(var(--header-height) + var(--card-spacing));
    left: 0;
    /* height: var(--card-height); */
    /* margin-bottom: calc(var(--card-spacing) * 2); */
  }
}

@media screen and (orientation:landscape) and (min-width: 768px) {
  :root {    
    --header-height: calc(10vh - 1vw);
    --card-height: calc(var(--view-height) - var(--header-height) - (var(--card-spacing) * 2));
    --body-width: 120vh;
    --main-column-width: 100vh;
    --screenshot-area-width: 50vw;
  }
  body {
    width: var(--body-width);
    left: calc((100vw - var(--body-width)) / 2);
  }
  #app {
    position: relative;
  }
  #app.spa {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  #project-list {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  #header-space {
    width: var(--main-column-width);
  }
  #page-header {
    border-bottom-left-radius: var(--arc-radius);
    border-bottom-right-radius: var(--arc-radius);
  }
  #hamburger-button.clickable, #hamburger {
    background: transparent;
  }
  #page-footer {
	  border-top-left-radius: var(--footer-height);
  }
  #page-footer #upper-left-piece {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 979px) {

}
@media only screen and (orientation: landscape) and (min-width: 1024px) and (max-width: 1199px) {

}
@media only screen and (orientation: landscape) and (min-width: 1200px) {

}
</style>

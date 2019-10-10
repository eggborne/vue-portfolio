<template>
  <div :class='[
      noScroll && `spa`, 
      wavyMode && `wavy`, 
      darkMode && `dark`,
      !animations && `no-animations`
    ]' 
    id='app'
  >
    <div id='header-space'></div>
    <Header 
			:projects='projects'
			:toggleMenu='toggleMenu' 
      :switchProjects='switchProjects'
			:menuOn='menuOn' 
			:titleText='`web projects of Mike Donovan`'
      :options='{noScroll: noScroll, wavyMode: wavyMode, waveRadius: waveRadius, darkMode: darkMode, 
      animations: animations,
      highlightColor: highlightColor,
      headerColor: headerColor,
      mainBgColor: mainBgColor,
      cardBgColor: cardBgColor,
      cardHeaderColor: cardHeaderColor,
      textColor: textColor,
      borderSize: borderSize
       }'
      :toggleOption='toggleOption'
      :setOption='setOption'
      :adjustRangedOption='adjustRangedOption'
		/>
    <MainBody 
      v-if='dataReady'
      :landscape='landscape' 
      :toggleMenu='toggleMenu' 
      :projects='projects' 
      :menuOn='menuOn'
      :noScroll='noScroll'
      :currentProject='currentProject'
      :previousProject='previousProject'
      :projectsSeen='projectsSeen'
      :reportScreenUrls='reportScreenUrls'
    />
    <Footer :noScroll='noScroll' :switchProjects='switchProjects' :scrollDirection='scrollDirection'/>
    <video v-if='darkMode' muted autoplay loop id='space-bg'>
      <source src='./assets/starfield.mp4' type='video/mp4'>
    </video>
  <!-- <ScreenGrabber /> -->
  <div id='debug'></div>
  </div>
</template>

<script>
import SwipeDetector  from './swipe.js';
import { projects, optionData }  from './projects.js';
import Header from './components/Header.vue';
import MainBody from './components/MainBody.vue';
import Footer from './components/Footer.vue';

function setScreenDimensions() {
  window.HEADER_HEIGHT =
    window.innerWidth < window.innerHeight
      ?  Math.round(window.innerWidth * 0.16 - window.innerHeight * 0.01)
      : Math.round(window.innerHeight * 0.12 - window.innerWidth * 0.01);
      window.HEADER_HEIGHT += window.HEADER_HEIGHT % 4;
  window.MAIN_PADDING = Math.round(window.HEADER_HEIGHT / 5.5);
  window.MAIN_PADDING += window.MAIN_PADDING % 2;
  window.DEFAULT_HIGHLIGHT_WIDTH = Math.ceil(window.MAIN_PADDING / 12);
  window.FOOTER_HEIGHT = window.DEFAULT_FOOTER_HEIGHT = window.HEADER_HEIGHT;
  window.ARC_RADIUS = 50;
  window.HIGHLIGHT_WIDTH = Math.ceil(window.MAIN_PADDING / 12);
  window.CARD_SPACING = window.MAIN_PADDING * 1;
  document.documentElement.style.setProperty('--view-height', window.innerHeight + 'px');
  document.documentElement.style.setProperty('--header-height', window.HEADER_HEIGHT + 'px');
  document.documentElement.style.setProperty('--footer-height', window.FOOTER_HEIGHT + 'px');
  document.documentElement.style.setProperty('--main-padding', window.MAIN_PADDING + 'px');
  document.documentElement.style.setProperty('--highlight-width', window.HIGHLIGHT_WIDTH + 'px');
  document.documentElement.style.setProperty('--card-spacing', window.CARD_SPACING + 'px');  
}

export default {
  data: function() { 
    return {
      landscape: false,
      noScroll: true,
      scrollDirection: 'vertical',
      wavyMode: true,
      waveRadius: 50,
      borderSize: 1,      
      footerHeight: 3,
      highlightColor: '#5e7e3e',
      headerColor: '#193219',
      mainBgColor: '#080808',
      cardBgColor: '#222031',
      cardHeaderColor: '#252f33',
      textColor: '#d8d8d8',
      darkMode: false,
      animations: true,
      titleText: 'web projects of Mike Donovan',
      menuOn: false,
      projects: projects,
      numberOfProjects: null,
      projectsSeen: [0],
      currentProject: 0,
      previousProject: 0,
      optionData: [],
      dataReady: false,
      toggleMenu: () => {
        this.menuOn = !this.menuOn;
      }
    }
  },
  name: 'app',
  components: {
    Header,
    Footer,
    MainBody
  },
  computed: {
    scrollAmount: () => {
      // second one must equal card spacing!
      return window.CARD_HEIGHT + (window.CARD_SPACING);
    }
  },
  created: function() {   
    window.addEventListener('scroll', (e) => {
      alert('cocks')
      e.preventDefault();
    })
    this.landscape = window.innerWidth > window.innerHeight;
    this.numberOfProjects = Object.keys(projects).length;
    setScreenDimensions();
    window.CLICK_METHOD = 'onpointerdown' in window ? 'onpointerdown' : 'ontouchstart' in window ? 'ontouchstart' : 'onclick';   
    // console.error('HEADER_HEIGHT', window.HEADER_HEIGHT);
    // console.error('MAIN_PADDING', window.MAIN_PADDING);
    // console.error('HIGHLIGHT_WIDTH', window.HIGHLIGHT_WIDTH);
    // console.error('CARD_SPACING', window.CARD_SPACING);
    // console.error('CLICK_METHOD', window.CLICK_METHOD);
    // console.error('IMG_EXTENSION', window.IMG_EXTENSION);
    this.optionData = optionData;
    
    this.dataReady = true;    
    window.addEventListener('resize', setScreenDimensions)
  },
  mounted() {
    let swipeDetector = new SwipeDetector(this);
    console.log(this.$el)
    swipeDetector.setInputs(document.getElementById('main-body'));
    this.applyStoredOptions();
    document.getElementById('debug').innerText = `
      H_H: ${window.HEADER_HEIGHT} | F_H: ${window.FOOTER_HEIGHT}
    `;
  },
  methods: {
    // setScreenDimensions() {
    //   window.HEADER_HEIGHT =
    //     window.innerWidth < window.innerHeight
    //       ? Math.round(window.innerWidth * 0.16 - window.innerHeight * 0.01)
    //       : Math.round(window.innerHeight * 0.12 - window.innerWidth * 0.01);
    //   window.HEADER_HEIGHT += window.HEADER_HEIGHT % 2;          
    //   window.MAIN_PADDING = Math.round(window.HEADER_HEIGHT / 5.5);
    //   window.DEFAULT_HIGHLIGHT_WIDTH = 1;
    //   window.HIGHLIGHT_WIDTH = 1;
    //   window.CARD_SPACING = window.MAIN_PADDING * 1;
    //   document.documentElement.style.setProperty('--header-height', window.HEADER_HEIGHT + 'px');
    //   document.documentElement.style.setProperty('--main-padding', window.MAIN_PADDING + 'px');
    //   document.documentElement.style.setProperty('--highlight-width', window.HIGHLIGHT_WIDTH + 'px');
    //   document.documentElement.style.setProperty('--card-spacing', window.CARD_SPACING + 'px');
    // },
    reportScreenUrls(projectIndex, screensArray) {
      this.projects[projectIndex].screenshots = screensArray;
      // for (let screenType in screensArray) {
      //   screensArray[screenType].map((screenUrl, i) => {
      //     console.log('creating image with url', screenUrl)
      //     let image = new Image(screenUrl);
      //     image.classList.add('screenshot')
      //     console.log('created', image)
      //     this.projects[projectIndex].screenshots[screenType][i] = image;
      //   })
      // }
      console.log('CHANGED TO', this.projects[projectIndex].screenshots)
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
      let listEl = document.getElementById('app');
      let newIndex = projectIndex;
      if (direction) {
        newIndex = this.currentProject + direction;
        if (newIndex < 0 || newIndex >= this.numberOfProjects) {
          return;
        } else {
          let buttonObj = document.getElementById(direction == -1 ? 'prev-button' : 'next-button');
          buttonObj.classList.add('pressed');
          setTimeout(() => {
            buttonObj.classList.remove('pressed');
          }, 220)
        }
      }
      this.previousProject = this.currentProject;
      this.currentProject = newIndex;
      if (this.projectsSeen.indexOf(this.currentProject) === -1) {
        this.projectsSeen.push(this.currentProject);
        if (this.projectsSeen.length === this.numberOfProjects) {
          console.error('ALL SEEN');
        }
      }
    },
    applyStoredOptions() {
      console.warn('now this is', this)
      optionData.map(option => {
        if (this.hasOwnProperty(option.name)) {
            console.warn('setting', option.name, this[option.name], 'to', option.defaultValue)
            this[option.name] = option.defaultValue;
            if (option.inputType === 'range') {
              console.warn('ADJUSTING RANGED', option.name)
              this.adjustRangedOption(option.name, this[option.name]);
            }
        }
      });
      console.error('HEADER_HEIGHT', window.HEADER_HEIGHT);
      console.error('FOOTER_HEIGHT', window.FOOTER_HEIGHT);
      console.error('MAIN_PADDING', window.MAIN_PADDING);
      console.error('HIGHLIGHT_WIDTH', window.HIGHLIGHT_WIDTH);
      console.error('ARC_RADIUS', window.ARC_RADIUS);
      console.error('CARD_SPACING', window.CARD_SPACING);
      console.error('CLICK_METHOD', window.CLICK_METHOD);
      console.error('IMG_EXTENSION', window.IMG_EXTENSION);
    },
    toggleOption(option) {
      console.log('changing', option, 'to', !this[option], 'while', this[option]);
      let newValue = !this[option];
      // if (option === 'wavyMode') {
      //   document.querySelector('#app').classList.remove('wavy')
      //   return;
      // }
      this[option] = newValue;
      if (option === 'darkMode') {
        if (newValue) {
          console.error('starting starfield');
          window.SPACE_BACKGROUND.classList.add('showing');
          document.getElementById('space-bg').play();
        } else {
          console.error('stopping starfield')
          window.SPACE_BACKGROUND.classList.remove('showing');
          document.getElementById('space-bg').pause();
        }
      }
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
        if (newRadius === 0) {
          this.wavyMode = false;
        } else if (!this.wavyMode) {
          this.wavyMode = true;
        }
        console.error('new radius is', newValue, '% -> ', newRadius)
        document.documentElement.style.setProperty(cssVar, newRadius + 'px');
        window.ARC_RADIUS = newRadius;
      } else if (option === 'borderSize') {
        this.borderSize = parseInt(newValue);
        window.HIGHLIGHT_WIDTH = window.DEFAULT_HIGHLIGHT_WIDTH + ((this.borderSize) - window.DEFAULT_HIGHLIGHT_WIDTH);
        document.documentElement.style.setProperty(cssVar, window.HIGHLIGHT_WIDTH + 'px');
      } else if (option === 'footerHeight') {
        this.footerHeight = parseInt(newValue);
        window.FOOTER_HEIGHT = Math.round((window.HEADER_HEIGHT) + ((this.footerHeight - 2) * (window.HEADER_HEIGHT / 12)));
        document.documentElement.style.setProperty(cssVar, window.FOOTER_HEIGHT + 'px');
      }
      document.getElementById('debug').innerText = `
          H_H: ${window.HEADER_HEIGHT} | F_H: ${window.FOOTER_HEIGHT} | RAD: ${window.ARC_RADIUS}px | BOR: ${window.HIGHLIGHT_WIDTH}
        `;
    }
  }
}
</script>

<style>
:root {
  --view-height: 100vh;  
  /* --header-height: calc(var(--view-height) * 0.08); */
  --header-height: calc(16vmin - 1vmax);
  --footer-height: calc(var(--header-height) + (var(--main-padding)));

  --arc-radius: calc(var(--main-padding) * 2);
  --arc-radius: calc(var(--header-height) / 1.5);
  --arc-diameter: calc(var(--arc-radius) * 2);
  
  /* --footer-height: var(--header-height); */

  --main-padding: calc(var(--header-height) / 5.5);
  --inner-padding: calc(var(--main-padding) / 2);

  --highlight-width: 1;

  /* --card-spacing: calc(var(--highlight-width) * 8); */
  --card-spacing: calc(var(--main-padding) * 0.1);

  --card-height: calc(var(--view-height) - var(--header-height) - var(--footer-height) - (var(--card-padding) * 2));

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
  --header-color: #111111;
  --footer-color: var(--header-color);
  --card-header-color: #15380a;
  --highlight-color: rgb(94, 126, 62);
  --card-bg-color: transparent;
  --off-white: #999;
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
  transform: translateX(0%);
  opacity: 1;
}
.card-forward-enter, .card-back-leave-to {
  transform:  scale(0.9) translateX(calc(var(--card-height) / 3 ));
  opacity: 0;
}
.card-forward-leave-to, .card-back-enter {
  opacity: 0;
  transform: scale(0.9) translateX(calc(var(--card-height) / -3 ));;
}

.card-next-enter {
  transform: translateX(calc(var(--card-height) + var(--card-spacing)));
}
.card-next-enter-to {
  transform: translateX(0%);
}
.card-next-leave-to {
  transform: translateX(calc((var(--card-height) + var(--card-spacing)) * -1));
}
.card-previous-enter {
  transform: translateX(calc((var(--card-height) + var(--card-spacing)) * -1));
}
.card-previous-enter-to {
  transform: translateX(0%);
}
.card-previous-leave-to {
  transform: translateX(calc(var(--card-height) + var(--card-spacing)));
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
.corner-arc .corner-arc-box::after, 
header, 
footer, 
.project-card, 
.project-header, 
.card-footer, 
#menu {
  /* transition: border-radius calc(var(--shift-speed) / 2) ease; */
}
#app:not(.wavy) .corner-arc .corner-arc-box::after, 
#app:not(.wavy) header, 
#app:not(.wavy) footer, 
#app:not(.wavy) .project-card, 
#app:not(.wavy) .project-header, 
#app:not(.wavy) .card-footer, 
#app:not(.wavy) #menu {
  border-radius: 0;
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
  /* width: 100%; */
  
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
  :root {
    --card-height: calc(var(--view-height) - var(--header-height) - var(--footer-height) -  var(--card-spacing) -  var(--card-spacing)); 
  }
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
@media (orientation: landscape) {
	:root {    
    --header-height: calc(16vw - 1vh);
    --main-column-width: calc(var(--screenshot-area-height) * 3.3);
    --screenshot-area-height: calc(var(--header-height) * 4);
    --screenshot-height: calc(var(--screenshot-area-height) / 2.35);
    --screenshot-width: calc(var(--screenshot-height) / var(--desktop-ratio));
    --card-height: calc(var(--view-height) - var(--header-height) - (var(--card-spacing) * 2));
	}
  .slide-enter {
	  transform: translateY(-100%);
  }
  .slide-enter-to {
    transform: translateY(0%);
    display: none;
  }
  .slide-leave {
    transform: translateY(0%);
  }
  .slide-leave-to {
    transform: translateY(-100%);
    display: none;
  }
  #project-list {
    grid-template-columns: 0.5fr 0.5fr;
    width: var(--main-column-width);
    grid-row-gap: var(--main-padding);
    /* background: orange; */
    /* padding: var(--main-padding);
    grid-column-gap: var(--main-padding); */
    /* max-width: 120vh; */
  }
  #header-space {
    width: var(--main-column-width);
  }
}

/* @media (min-aspect-ratio: 16/9) {
  body {
    background: rgba(255, 0, 0, 0.5);
  }
}
@media (max-aspect-ratio: 16/9) {
  body {
    background: rgba(0, 64, 0, 0.5);
  }
} */
/* 
@media only screen and (min-width: 320px) and (max-width: 479px) {
  body::after {
    content: 'mobile portrait'
  }
} */
/* @media only screen and (orientation:landscape) and (min-width: 480px) and (max-width: 767px) {
  body {
    background: green;
  }
} */
@media only screen and (orientation:landscape) and (min-width: 768px) {
  #app {
    scroll-padding-left: calc((100vw - (var(--screenshot-area-height) * 1.75)) / 2);
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
    /* grid-template-columns: calc(var(--screenshot-area-height) * 1.75); */
    display: flex;
    flex-direction: row;
    padding: 0 calc((100vw - (var(--screenshot-area-height) * 1.75)) / 2);
    /* width: calc(var(--screenshot-area-height) * 1.75); */
    /* height: calc(var(--view-height) - var(--header-height)); */
    /* justify-content: center; */
    width: 100%;
    align-items: stretch;
    justify-content: space-between;
    overflow: hidden;
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
  .project-card {
    min-width: calc(var(--screenshot-area-height) * 1.75);
    margin: 0;
  }
  .project-card:not(:last-of-type) {
    margin-right: var(--card-spacing);
  }
}
@media only screen and (min-width: 768px) and (max-width: 979px) {

}
@media only screen and (orientation: landscape) and (min-width: 1024px) and (max-width: 1199px) {

}
@media only screen and (orientation: landscape) and (min-width: 1200px) {

}
</style>

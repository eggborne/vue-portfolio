<template>
<header id='page-header'>
  <transition name='slide'>	
    <Menu 
      :mode='menuMode'
      :toggleMenu='toggleMenu' 
      :projects='projects'
      :switchProjects='switchProjects'
      :class='menuOn && `activated`'
      :options='options'
      :toggleOption='toggleOption'
      :setOption='setOption'
      :adjustRangedOption='adjustRangedOption'
    />
  </transition>
  <div id='menu-button-area' :class='[menuOn && `showing`, menuMode === `projectsMode` ? `projects-mode` : `settings-mode`]'>
    <Touchable id='settings-button' class='menu-button clickable' :pointerDownAction='() => menuMode = `settingsMode`'>
      <i class="material-icons"> settings </i>
    </Touchable>
    <Touchable id='projects-button' class='menu-button clickable' :pointerDownAction='() => menuMode = `projectsMode`'>
      <i class="material-icons"> computer </i>
    </Touchable>
  </div>
  <h1 
    :class='menuOn && `truncated`'
    id='title-text'    
  >
    <span
      v-for='(letter, i) in titleArray'
      :key='letter + i'
      :class='i >= lettersRevealed && `hidden`'
    >
    {{ letter === ' ' ? `&nbsp;` : letter }}
    </span>
  </h1>
  <Touchable id='hamburger-button' :pointerDownAction='toggleMenu'>
    <Hamburger :menuOn='menuOn' />
  </Touchable>
  <!-- </div> -->
  <!-- <div class='lower-right-piece wavy-corner'> -->
    
  <!-- </div> -->
</header>
</template>

<script>
import Hamburger from './Hamburger.vue';
import Menu from './Menu.vue';
import Touchable from './Touchable.vue';

export default {
  name: 'Header',
  data: function() { return { 
    titleArray: [],
    lettersRevealed: -1,
    menuMode: 'projectsMode'
  }},
  props: {
    titleText: String,
    toggleMenu: Function,
    menuOn: Boolean,
    projects: Array,
    switchProjects: Function,
    options: Object,
    toggleOption: Function,
    setOption: Function,
    adjustRangedOption: Function
  },
  mounted() {
    this.titleArray = this.titleText.split('');
    console.log('titleArray', this.titleArray);
    this.revealLetters();
  },
  methods: {
    revealLetters() {
      if (this.lettersRevealed < this.titleArray.length) {
        this.lettersRevealed++;
        setTimeout(() => {
          this.revealLetters();
        }, 50)
      }
    }
  },
	components: {
    Hamburger,
    Menu,
    Touchable
	}
}
</script>

<style scoped>
#page-header {
  font-size: var(--title-font-size);
  /* width: calc(100vw - var(--header-height)); */
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  height: var(--header-height);
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background: var(--header-color);
  /* transition: border var(--shift-speed) ease; */
}
h1 {
  font-weight: normal 
}
#app.wavy #page-header {
  border-bottom-left-radius: var(--arc-radius);
}
#title-text {
  font-size: calc(var(--header-height) / 4);
  margin-left: calc(var(--header-height) / 1.75);
  z-index: 2;
  display: flex;
  align-items: center;
}
#title-text.truncated {
  /* transform: scale(0.7) translate(calc(var(--header-height) / -3.5), calc(var(--header-height) / -4)); */
}
#title-text > span {
  transform-origin: center right;
  transition: opacity 200ms ease, transform 100ms ease;
}
#title-text > span.hidden {
  opacity: 0;
  transform: translateX(100%);
}
#page-header.extended::before {
  /* height: calc(var(--header-height) * 2); */
}
#hamburger-button {
  /* position: absolute; */
  /* top: 0;
  right: 0px; */
  width: var(--header-height);
  height: calc(var(--header-height) * 0.9);
  transition: opacity 320ms ease;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  background: var(--header-color);
  border: 0;
}
#menu-button-area {
  position: absolute;
  top: 0;
  right: 0;
	height: calc(var(--header-height));
	display: flex;
	align-items: center;
	justify-content: flex-end;
  margin-right: calc(var(--header-height));
  z-index: 12;
  pointer-events: none;
	/* background: var(--header-color); */
}
#menu-button-area.showing {
  pointer-events: all;
}
.menu-button {
	width: calc(var(--header-height) - var(--main-padding));
	height: calc(var(--header-height) - var(--main-padding));
	/* margin: var(--inner-padding); */
	margin-right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border: calc(var(--inner-padding) / 2) solid transparent;
	opacity: 0;
	transition-delay: 0ms;
  border-radius: 10%;
  transform: translateY(-10%);
	transition: opacity 320ms ease, transform 320ms ease;
}
#menu-button-area.showing .menu-button {
	opacity: 1;
	transform: translateY(0);
	/* transition-delay: 300ms; */
}
#menu-button-area .menu-button:first-of-type {
	transition-delay: 0ms;
}
#menu-button-area .menu-button:nth-of-type(2) {
	transition-delay: 100ms;
}
#menu-button-area.showing .menu-button:first-of-type {
	transition-delay: 210ms;
}
#menu-button-area.showing .menu-button:nth-of-type(2) {
	transition-delay: 100ms;
}
.projects-mode #projects-button, .settings-mode #settings-button {
	border-color: var(--off-white);
}
@media screen and (orientation: landscape) {
  #page-header {
    /* width: var(--main-column-width); */
    width: 100vw;
    padding-left: 6vw;
    padding-right: calc(var(--hamburger-size) * 1.5);
  }
  #page-header::before, #lower-right-piece {
    display: none;
  }
  #title-text {
    margin: 0;
  }
}

</style>

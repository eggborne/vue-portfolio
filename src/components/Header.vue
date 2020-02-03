<template>
<header id='page-header'>
  <div v-if='landscape' class='corner-arc northwest lower wavy-corner'>
    <div class='corner-arc-box'>
    </div>
  </div>
  <div id='menu-button-area' :class='[(landscape || menuOn) && `showing`, menuMode === `projectsMode` ? `projects-mode` : `settings-mode`, menuOn && `menu-on`]'>
    <Touchable id='settings-button' class='menu-button clickable' :pointerDownAction='() => handleSubMenuClick(`settingsMode`)'>
      <div v-if='landscape'>SITE SETTINGS</div>
      <i class="material-icons"> settings </i>
    </Touchable>
    <Touchable id='projects-button' class='menu-button clickable' :pointerDownAction='() => handleSubMenuClick(`projectsMode`)'>
      <div v-if='landscape'>FULL LIST</div>
      <i class="material-icons"> computer </i>
    </Touchable>
  </div>
  <h1 
    :class='[menuOn && `truncated`, `stroke`]'
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
  <Touchable v-if='!landscape' id='hamburger-button' :pointerDownAction='toggleMenuOn'>
    <Hamburger :menuOn='menuOn' />
  </Touchable>
  <transition name='slide'>	
    <Menu      
      :mode='menuMode'
      :switchProjects='switchProjects'
      :class='menuOn && `activated`'
      :toggleOption='toggleOption'
      :toggleMenuOn='toggleMenuOn'
      :setOption='setOption'
    />
  </transition>
</header>
</template>

<script>
import Hamburger from './Hamburger.vue';
import Menu from './Menu.vue';
import Touchable from './Touchable.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Header',
  data: function() { return { 
    titleArray: [],
    lettersRevealed: -1,
    menuMode: 'projectsMode'
  }},
  props: {
    landscape: Boolean,
    titleText: String,
    // toggleMenu: Function,
    menuOn: Boolean,
    switchProjects: Function,
    toggleOption: Function,
    setOption: Function,
  },
  mounted() {
    this.titleArray = this.titleText.split('');
    console.log('titleArray', this.titleArray);
    this.revealLetters();
  },
  methods: {
    ...mapMutations([
			'toggleMenuOn'
		]),
    revealLetters() {
      if (this.lettersRevealed < this.titleArray.length) {
        this.lettersRevealed++;
        setTimeout(() => {
          this.revealLetters();
        }, 50)
      }
    },
    handleSubMenuClick(newMode) {
      window.IS_LANDSCAPE && 
      (!this.menuOn || this.menuMode === newMode) && 
      this.toggleMenuOn();      
      this.menuMode = newMode;
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
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  height: var(--header-height);
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background: var(--header-color);
}
h1 {
  font-weight: normal 
}
#page-header {
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
  width: min-content;
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
  border-radius: calc(var(--header-height) / 6);
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

@media screen and (orientation: landscape) and (min-width: 768px) {
  #page-header {
    text-align: left;
    width: var(--body-width);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0 !important;
    border-left: 0;
  }
  #menu-button-area {
    margin-right: calc(var(--header-height) / 8);
  }
  .northwest.lower > .corner-arc-box::after {
    box-shadow: calc(var(--arc-radius) / -3) calc(var(--arc-radius) / -3) 0px var(--header-color);
    border: var(--highlight-width) solid var(--highlight-color);
  }
  .northwest.lower > .corner-arc-box {
    bottom: calc(var(--arc-radius) * -1);
    /* left: calc(var(--highlight-width) * -2); */
    left: -2px;
  }
  .menu-button {
    width: auto;
    padding: 0 calc(var(--header-height) / 8);
    margin-left: calc(var(--header-height) / 12);
    display: flex;
    font-size: calc(var(--header-height) / 5);
    border-color: #b9b9b999 !important;
  }
  .projects-mode.menu-on #projects-button, .settings-mode.menu-on #settings-button {
    border-color: #afa !important;
    color: #afa !important;
  }
  .menu-button > div {
    min-width: max-content;
    padding-right: calc(var(--header-height) / 16);
  }
  #page-header::before, #lower-right-piece {
    /* display: none; */
  }
  #title-text {
    flex-grow: 1;
  }
}

</style>

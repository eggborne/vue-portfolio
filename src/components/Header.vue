<template>
<header id='page-header'>
  <transition name='slide'>	
    <Menu 
      v-bind:toggleMenu='toggleMenu' 
      v-bind:projects='projects' 
      v-if='menuOn' 
    />
  </transition>
  <div id='title-text'>{{ titleText }}</div>
  <div v-on:click='toggleMenu' id='hamburger-button' class='clickable'>
    <Hamburger v-bind:menuOn='menuOn' />
  </div>
</header>
</template>

<script>
import Hamburger from './Hamburger.vue';
import Menu from './Menu.vue';
export default {
  name: 'Header',
  props: {
    titleText: String,
    // titleText: Number,
    toggleMenu: Function,
    menuOn: Boolean,
    projects: Array
	},
	components: {
    Hamburger,
    Menu
	}
}
</script>

<style scoped>
#page-header {
  font-size: var(--title-font-size);
  width: 100vw;
  /* padding: 0 calc(var(--main-padding) * 1.5); */
  /* padding-left: calc(var(--main-padding) * 1.5); */
  position: absolute;
  top: 0;
  /* left: 0; */
  height: var(--header-height);
  /* height: calc(var(--header-height) * 0.75); */
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}
#page-header::before {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  background: #111;
  content: '';
  z-index: 1;

}
#title-text {
  padding-left: calc(var(--main-padding) * 1.5);
  z-index: 2;
}
#page-header.extended::before {
  /* height: calc(var(--header-height) * 2); */
}
/* #page-header::before {
  position: fixed;
  content: ' ';
  width: 100%;
  top: 0;
  left: 0;
  height: calc(var(--header-height) * 0.75);
  transform-origin: top;
  transform: skewX(45deg);
  background: #111;
  z-index: -1;
  transition: all 320ms ease;
} */
#hamburger-button {
  /* position: absolute; */
  /* top: 0;
  right: 0px; */
  width: var(--header-height);
  height: var(--header-height);
  background: #111;
  transition: opacity 320ms ease;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
#hamburger-button.clickable:hover {
	background: #151515;
}
/* #hamburger-button::before {
  position: absolute;
  content: ' ';
  width: inherit;
  height: inherit;
  transform-origin: bottom;
  transform: skewX(45deg);
  background: #111;
  z-index: -1;
} */
@media screen and (orientation: landscape) {
  #page-header {
    width: var(--main-column-width);
  }
}

</style>

<template>
<header id='page-header'>
  <transition name='slide'>	
    <Menu 
      :toggleMenu='toggleMenu' 
      :projects='projects' 
      :class='menuOn && `activated`' 
    />
  </transition>
  <div 
    id='title-text'    
  >
    <span
      v-for='(letter, i) in titleArray'
      :key='letter + i'
      :class='i >= lettersRevealed && `hidden`'
    >
    {{ letter === ' ' ? `&nbsp;` : letter }}
    </span>
  </div>
  <div 
    @click='toggleMenu' 
    id='hamburger-button' 
    class='clickable'    
  >
    <Hamburger :menuOn='menuOn' />
  </div>
  <div id='lower-right-piece'>
    
  </div>
</header>
</template>

<script>

import Hamburger from './Hamburger.vue';
import Menu from './Menu.vue';
export default {
  name: 'Header',
  data: function() { return { 
    titleArray: [],
    lettersRevealed: -1
  }},
  props: {
    titleText: String,
    toggleMenu: Function,
    menuOn: Boolean,
    projects: Array,    
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
    Menu
	}
}
</script>

<style scoped>
#page-header {
  font-size: var(--title-font-size);
  width: calc(100vw - var(--header-height));
  position: absolute;
  top: 0;
  right: 0;
  height: var(--header-height);
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  background: #080808;
}
#page-header::before, #lower-right-piece::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: #080808;
  width: calc(var(--header-height) * 2);
  height: calc(var(--header-height) * 2);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
#lower-right-piece {
  position: absolute;
  /* left: calc(100vw - var(--header-height)); */
  right: 0;
  top: var(--header-height);
  width: var(--header-height);
  height: var(--header-height);
  overflow: hidden;
  pointer-events: none;
  /* border: 2px solid red; */
  /* background: blue; */
}
#lower-right-piece::before {
  transform: translateX(-50%);
  transform-origin: unset;
  background: transparent;
  box-shadow: calc(var(--header-height) / 3) calc(var(--header-height) / -3) 0px #080808;
}
#title-text {
  font-size: calc(var(--header-height) / 4);
  margin-left: calc(var(--main-padding) * -2);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  height: var(--header-height);
  transition: opacity 320ms ease;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  background: #080808;
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

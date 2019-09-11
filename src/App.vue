<template>
  <div id='app'>
    <Header msg='Header' />
    <MainBody />
    <Footer msg='Footer'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainBody from './components/MainBody.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    MainBody
  },  
}
</script>

<style>
:root {
  --view-height: 100vh;
  --header-height: calc(var(--view-height) * 0.06);
  --footer-height: calc(var(--view-height) * 0.09);
  --main-padding: 3vmin;
  --pane-height: calc(var(--view-height) - var(--header-height));
  --pane-spacing: calc(var(--main-padding) * 2);
  --main-text-color: #eee;
  --screenshot-width: 70vw;
} 
* {
  box-sizing: border-box;
}
body {
  margin: 0;
   background: #bbb;
}
h2, h3 {
  margin: 0;
}
header, footer {
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 0 var(--main-padding);
}
#page-header, #page-footer {
  width: 100vw;
  background: #000000;  
}
#app {
  height: var(--view-height);
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-rows: 1fr var(--footer-height);
  font-weight: bold; 
}
</style>

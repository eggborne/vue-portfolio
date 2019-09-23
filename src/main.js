import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
document.documentElement.style.setProperty('--view-height', document.documentElement.clientHeight + 'px');
console.warn('seet view height to', document.documentElement.clientHeight + 'px')
window.IMG_EXTENSION = 'png';

new Vue({
  render: h => h(App),
}).$mount('#app')

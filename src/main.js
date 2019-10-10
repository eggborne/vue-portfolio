import Vue from 'vue';
import App from './App.vue';

requestAnimationFrame(() => { document.body.classList.remove('hidden') });

Vue.config.productionTip = false;
// document.documentElement.style.setProperty('--view-height', window.innerHeight + 'px');
console.warn('seet view height to', window.innerHeight + 'px');
window.IMG_EXTENSION = 'png';

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.directive('click-action', {
  bind(el, binding, vnode) {
    el.style.background = 'darksalmon'
  }
});

import Vue from 'vue';
import App from './App.vue';
import store from './store';

requestAnimationFrame(() => { document.body.classList.remove('hidden') });

Vue.config.productionTip = false;
window.IMG_EXTENSION = 'png';

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');

Vue.directive('click-action', {
  bind(el, binding, vnode) {
    el.style.background = 'darksalmon'
  }
});

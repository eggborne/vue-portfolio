import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
document.documentElement.style.setProperty('--view-height', window.innerHeight + 'px');

new Vue({
  render: h => h(App),
}).$mount('#app')

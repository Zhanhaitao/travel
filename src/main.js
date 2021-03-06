// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import router from './router';

import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

import Fastclick from 'fastclick';
Fastclick.attach(document.body);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

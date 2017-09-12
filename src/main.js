// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResourse from 'vue-resource';
import App from './App';
import router from './router';

import '@/common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueResourse);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
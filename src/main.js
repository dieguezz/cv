// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import routes from './routes';
import locales from './locales/main';

import './styles/main.styl';

import App from './App';

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueI18n);

Vue.config.lang = 'en';

// Set locales
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import App from './App.vue';
import { routes } from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'leaflet/dist/leaflet.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

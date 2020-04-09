import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faMapMarker,
  faPlusCircle,
  faUser,
  faCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

library.add(
  faFacebookSquare,
  faEnvelope,
  faGithub,
  faMapMarker,
  faPlusCircle,
  faUser,
  faCircle,
  faTimesCircle,
  faBars
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

import { BootstrapVue } from 'bootstrap-vue';
import './scss/custom.scss';

Vue.use(BootstrapVue);

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

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
  faBars
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers
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

import {
  BContainer,
  BRow,
  BCol,
  BNavbar,
  BLink,
  BFormCheckbox,
  BFormRadioGroup,
  ModalPlugin,
  BCard,
  BCardBody,
  BCardTitle,
  BTable,
  BButton
} from 'bootstrap-vue';
import './scss/custom.scss';

Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
Vue.component('b-navbar', BNavbar);
Vue.component('b-form-checkbox', BFormCheckbox);
Vue.use(ModalPlugin);
Vue.component('b-link', BLink);
Vue.component('b-form-radio-group', BFormRadioGroup);
Vue.component('b-card', BCard);
Vue.component('b-card-body', BCardBody);
Vue.component('b-card-title', BCardTitle);
Vue.component('b-table', BTable);
Vue.component('b-button', BButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

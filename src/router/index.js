import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import AppAux from '../components/layout/AppAux.vue';
import TheMap from '../components/Map.vue';
import Table from '../components/Table.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'App',
    component: App,
    redirect: {
      name: 'AppAux'
    },
    children: [
      {
        path: '',
        name: 'AppAux',
        component: AppAux,
        redirect: {
          name: 'Map'
        },
        children: [
          {
            path: 'demo/map',
            name: 'Map',
            component: TheMap
          },
          {
            path: 'demo/table',
            name: 'Table',
            component: Table
          },
          {
            path: 'about',
            name: 'About',
            component: About
          },
          {
            path: 'contact',
            name: 'Contact',
            component: Contact
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: {
      name: 'App'
    }
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import AppAux from '../components/layout/AppAux.vue';
import DemoAux from '../components/layout/DemoAux.vue';
import TheMap from '../components/Map.vue';
import Table from '../components/Table.vue';

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
          name: 'DemoAux'
        },
        children: [
          {
            path: 'demo',
            name: 'DemoAux',
            component: DemoAux,
            redirect: {
              name: 'Map'
            },
            children: [
              { path: 'map', name: 'Map', component: TheMap },
              { path: 'table', name: 'Table', component: Table }
            ]
          }
        ]
      }
    ]
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
});

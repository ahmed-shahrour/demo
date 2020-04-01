import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router';

import * as final from '../DummyData/final.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nav: {
      isOpt: false,
      formatToggle: 'map'
    },
    data: {
      hospitals: final.default
    }
  },
  getters: {
    isOpt(state) {
      return state.nav.isOpt;
    },
    formatToggle(state) {
      return state.nav.formatToggle;
    },
    isMap(state) {
      return state.nav.formatToggle === 'map';
    },
    hospitals(state) {
      return state.data.hospitals;
    }
  },
  mutations: {
    updateIsOpt(state, payload) {
      state.nav.isOpt = payload;

      if (!payload && state.nav.formatToggle === 'table') {
        state.nav.formatToggle = 'map';
        router.push({ name: 'Map' });
      }
    },
    updateFormatToggle(state, payload) {
      state.nav.formatToggle = payload;

      if (payload === 'map') {
        router.push({ name: 'Map' });
      } else if (payload === 'table') {
        router.push({ name: 'Table' });
      }
    }
  }
});

import Vue from 'vue';
import Vuex from 'vuex';
import round from 'lodash/round';

import router from '../router';

import * as final from '../DummyData/final.json';
import conditions from '../DummyData/conditionTranslate';

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

      if (payload === 'map' && state.nav.isOpt) {
        router.push({ name: 'Map' });
      } else if (payload === 'table' && state.nav.isOpt) {
        router.push({ name: 'Table' });
      }
    },
    incrementInv(state) {
      const MAX_ER_WAIT = 4;

      for (let hospital of state.data.hospitals) {
        let occupiedInv = 0;
        let totalInv = 0;

        if (hospital.health === 100) continue;

        for (let resource in hospital.inventory) {
          if (
            hospital.inventory[resource].total >
            hospital.inventory[resource].occupied
          ) {
            hospital.inventory[resource].occupied++;
          }
          occupiedInv += hospital.inventory[resource].occupied;
          totalInv += hospital.inventory[resource].total;
        }

        const health = occupiedInv / totalInv;

        hospital.health = round(health * 100);
        hospital.er_time = round(health * MAX_ER_WAIT, 1);

        hospital.condition =
          hospital.health > 80
            ? conditions.CRITICAL
            : hospital.health > 50
            ? conditions.MILD
            : conditions.STABLE;
      }
    }
  },
  actions: {
    incrementInv(context) {
      setInterval(() => {
        if (context.state.nav.isOpt) {
          context.commit('incrementInv');
        }
      }, 1500);
    }
  }
});

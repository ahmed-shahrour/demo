import Vue from 'vue';
import Vuex from 'vuex';
import round from 'lodash/round';

import router from '../router';

import * as final from '../DummyData/final.json';
import conditions from '../DummyData/conditionTranslate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window: {
      innerHeight: 0,
      innerWidth: 0,
    },
    nav: {
      isOpt: false,
      formatToggle: 'map',
      height: 0,
    },
    data: {
      hospitals: final.default,
      incrementInt: null,
    },
    showMapModal: true,
    visitedAbout: false,
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
    },
    showMapModal(state) {
      return state.showMapModal;
    },
    visitedAbout(state) {
      return state.visitedAbout;
    },
    innerHeight(state) {
      return state.window.innerHeight;
    },
    innerWidth(state) {
      return state.window.innerWidth;
    },
    navHeight(state) {
      return state.nav.height;
    },
  },
  mutations: {
    updateWindowDim(state, payload) {
      state.window.innerHeight = payload.innerHeight;
      state.window.innerWidth = payload.innerWidth;

      state.nav.height =
        payload.innerHeight < 768
          ? payload.innerHeight * 0.11
          : payload.innerHeight * 0.08;
    },
    updateShowMapModal(state, payload) {
      state.showMapModal = payload;
    },
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
    switchOff(state) {
      state.nav.isOpt = false;
      state.nav.formatToggle = 'map';
    },
    mutateHospitals(state) {
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
    },
    updateVisitedAbout(state, payload) {
      state.visitedAbout = payload;
    },
  },
  actions: {
    incrementInv(context) {
      context.state.data.incrementInt = setInterval(() => {
        if (context.state.nav.isOpt) context.commit('mutateHospitals');
      }, 2500);
    },
    stopIncrement(context) {
      context.commit('switchOff');
      clearInterval(context.state.data.incrementInt);
      context.state.data.incrementInt = null;
    },
    aboutTimeout(context, payload) {
      if (!context.state.visitedAbout) {
        setTimeout(() => {
          payload.show('visit-about');
        }, 60 * 1000);
        context.commit('updateVisitedAbout', true);
      }
    },
  },
});

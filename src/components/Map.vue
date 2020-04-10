<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      :style="
        `height: ${$store.getters.innerHeight - $store.getters.navHeight}px`
      "
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <l-marker
        v-for="hospital in $store.getters.hospitals"
        :lat-lng="[
          hospital.geometry.location.lat,
          hospital.geometry.location.lng
        ]"
        :key="hospital.id"
        @mouseover="onHover"
        @mouseout="onNotHover"
      >
        <l-icon :icon-anchor="[19, 37]">
          <font-awesome-layers class="fa-3x">
            <font-awesome-icon
              :icon="['fas', 'map-marker']"
              :style="{
                color: !$store.getters.isOpt
                  ? 'black'
                  : hospital.condition === conditions.CRITICAL
                  ? 'red'
                  : hospital.condition === conditions.MILD
                  ? '#ff8c00'
                  : 'green',
              }"
            ></font-awesome-icon>
            <font-awesome-icon
              :icon="['fas', 'plus-circle']"
              transform="shrink-7 up-2 right-0.25"
              style="color: white;"
            >
            </font-awesome-icon>
          </font-awesome-layers>
        </l-icon>
        <l-popup style="width: 200px;" :options="{ offset: [0, -25] }">
          <p class="text-center text-wrap" style="font-size: 14px;">
            <strong>{{ hospital.name }}</strong>
          </p>

          <div v-show="$store.getters.isOpt" class="pb-2">
            <hr />
            <b-row class="mt-1">
              <b-col cols="7" class="my-0">
                <p class="label my-0">Condition:</p></b-col
              >
              <b-col class="my-0"
                ><p class="my-0">
                  {{ convConToStr(hospital.condition) }}
                </p></b-col
              >
            </b-row>

            <b-row class="mt-1">
              <b-col cols="7" class="py-0 my-0">
                <p class="label my-0">Occupancy Rate:</p></b-col
              >
              <b-col class="py-0 my-0"
                ><p class="my-0">{{ hospital.health }}%</p></b-col
              >
            </b-row>
            <b-row class="mt-1">
              <b-col cols="7" class="py-0 my-0">
                <p class="label my-0">ER Wait Time:</p></b-col
              >
              <b-col class="py-0 my-0"
                ><p class="my-0">{{ hospital.er_time }} hr</p></b-col
              >
            </b-row>
          </div>
        </l-popup>
      </l-marker>

      <l-marker
        :lat-lng="[40.729162, -73.870219]"
        @mouseover="onHover"
        @mouseout="onNotHover"
      >
        <l-icon :icon-anchor="[18, 20]">
          <font-awesome-layers class="fa-3x">
            <font-awesome-icon
              :icon="['fas', 'circle']"
              style="color: #007BFF;"
            />
            <font-awesome-icon
              :icon="['fas', 'user']"
              transform="shrink-7 up-0.5"
              style="color: white;"
            />
          </font-awesome-layers>
        </l-icon>
        <l-popup
          >I called 911! Which hospital will I be transported to?</l-popup
        >
      </l-marker>
    </l-map>

    <TopCards />
    <TheMapModal />
    <TheAboutModal />
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import TopCards from './TopCards';
import TheMapModal from './TheMapModal';
import TheAboutModal from './TheAboutModal';
import conditions from '../DummyData/conditionTranslate';

// import { Icon } from 'leaflet';

// delete Icon.Default.prototype._getIconUrl;
// Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

import 'leaflet/dist/leaflet.css';

export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    TopCards,
    TheMapModal,
    TheAboutModal,
  },
  data() {
    return {
      conditions,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [40.732338, -73.914771],
    };
  },
  created() {
    this.$store.dispatch('incrementInv');
  },
  mounted() {
    if (this.$store.getters.showMapModal) {
      this.$bvModal.show('heads-up');
      this.$store.commit('updateShowMapModal', false);
    }

    if (!this.$store.getters.visitedAbout) {
      this.$store.dispatch('aboutTimeout', this.$bvModal);
    }
  },
  methods: {
    onHover(ev) {
      ev.target.openPopup();
    },
    onNotHover(ev) {
      ev.target.closePopup();
    },
    convConToStr(condition) {
      switch (condition) {
        case conditions.CRITICAL:
          return 'Critical';
        case conditions.MILD:
          return 'Mild';
        case conditions.STABLE:
          return 'Stable';
      }
    },
  },
};
</script>

<style></style>

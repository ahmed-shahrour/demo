<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height: 100%;">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <l-marker
        v-for="hospital in $store.getters.hospitals"
        :lat-lng="[
          hospital.geometry.location.lat,
          hospital.geometry.location.lng,
        ]"
        :key="hospital.id"
      >
        <l-icon :icon-anchor="[12, 14]">
          <b-iconstack font-scale="2">
            <b-icon
              stacked
              icon="circle-fill"
              scale="1.2"
              variant="dark"
            ></b-icon>
            <b-icon
              stacked
              icon="plus-circle-fill"
              :variant="
                !$store.getters.isOpt
                  ? 'light'
                  : hospital.condition === conditions.CRITICAL
                  ? 'danger'
                  : hospital.condition === conditions.MILD
                  ? 'warning'
                  : 'success'
              "
              scale="1"
            ></b-icon>
          </b-iconstack>
        </l-icon>
        <l-popup style="width: 200px;">
          <p class="text-center" style="font-size: 14px;">
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

      <l-marker :lat-lng="center">
        <l-icon>
          <b-icon
            icon="person-fill"
            scale="2.5"
            variant="primary"
            animation="cylon-vertical"
          >
          </b-icon>
        </l-icon>
        <l-popup
          >I called 999! Which hospital will I be transported to?</l-popup
        >
      </l-marker>
    </l-map>

    <TopCards />
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import TopCards from './TopCards';
import conditions from '../DummyData/conditionTranslate';
import pointInPoly from '../helpers/pointInPolygon';

export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    TopCards,
  },
  data() {
    return {
      conditions,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [25.14468, 55.305078],
      noLocation: true,
    };
  },
  created() {
    this.$store.dispatch('incrementInv');
    this.getLocation();
  },
  methods: {
    async getLocation() {
      try {
        const coordinates = await this.$getLocation({
          enableHighAccuracy: true,
        });

        const { lat, lng } = coordinates;

        const dubaiPoly = [
          [25.0669411, 54.9934387],
          [25.3781519, 55.2735901],
          [25.2478012, 55.5091095],
          [24.90699, 55.2296448],
          [25.0669411, 54.994812],
        ];

        if (pointInPoly([lat, lng], dubaiPoly)) {
          this.center = coordinates;
        }
        this.noLocation = false;
      } catch (error) {
        this.noLocation = true;
      }
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

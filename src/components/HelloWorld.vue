<template>
  <l-map :zoom="zoom" :center="center" class="rounded-right">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="hospital in hospitals"
      :lat-lng="[
        hospital.geometry.location.lat,
        hospital.geometry.location.lng
      ]"
      :key="hospital.id"
    >
      <l-icon :icon-anchor="[30, 30]">
        <b-iconstack font-scale="5">
          <b-icon
            stacked
            icon="circle-fill"
            scale="0.5"
            variant="dark"
          ></b-icon>
          <b-icon
            stacked
            icon="plus-circle-fill"
            :variant="
              hospital.condition === conditions.CRITICAL
                ? 'danger'
                : hospital.condition === conditions.MILD
                ? 'warning'
                : 'success'
            "
            scale="0.4"
          ></b-icon>
        </b-iconstack>
      </l-icon>
      <l-popup>{{ hospital.name }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import * as final from '../DummyData/final.json';
import conditions from '../DummyData/conditionTranslate';

export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon
  },
  data() {
    return {
      conditions,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [25.069429, 55.247841],
      hospitals: final.default
    };
  }
};
</script>

<style scoped></style>

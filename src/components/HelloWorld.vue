<template>
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="hospital in hospitals"
      :lat-lng="hospital.coordinates"
      :key="hospital.id"
    >
      <l-popup>{{ hospital.name }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import { googleRes2 } from '../DummyData/googleRes2Clean';

export default {
  name: 'HelloWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  created() {
    this.transformGoogle(googleRes2);
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [25.069429, 55.247841],
      hospitals: []
    };
  },
  methods: {
    transformGoogle(apiRes) {
      this.hospitals = apiRes.results.map(x => {
        return {
          id: x.id,
          name: x.name,
          coordinates: [x.geometry.location.lat, x.geometry.location.lng]
        };
      });
    }
  }
};
</script>

<style scoped></style>

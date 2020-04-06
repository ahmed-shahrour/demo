<template>
  <div style="text-align: center;" class="container">
    <transition-group name="top-cards">
      <b-card
        key="1"
        class="shadow position-fixed"
        style="
          z-index: 1050;
          right: 20px;
          bottom: 64vh;
          width: 40vw;
          max-width: 250px;
          height: 25vh;
          max-height: 250px;
        "
        v-show="$store.getters.isOpt"
      >
        <div class="my-auto h-100 align-middle" style="display: inline-block;">
          <b-card-title>Critical</b-card-title>
          <b-card-body
            :class="[windowWidth < 500 ? 'pt-1' : '', 'align-middle']"
          >
            <hr class="m-0" />
            <h1 :class="displayClass" style="color: red;">
              {{ criticalCount }}
            </h1>
          </b-card-body>
        </div>
      </b-card>

      <b-card
        key="2"
        class="shadow position-fixed"
        style="
          z-index: 1050;
          right: 20px;
          bottom: 35vh;
          width: 40vw;
          max-width: 250px;
          height: 25vh;
          max-height: 250px;
        "
        v-show="$store.getters.isOpt"
      >
        <b-card-title>Mild</b-card-title>
        <b-card-body :class="[windowWidth < 500 ? 'pt-1' : '', 'align-middle']">
          <hr class="m-0" />
          <h1 :class="displayClass" style="color: orange;">{{ mildCount }}</h1>
        </b-card-body>
      </b-card>

      <b-card
        key="3"
        class="shadow position-fixed"
        style="
          z-index: 1050;
          right: 20px;
          bottom: 6vh;
          width: 40vw;
          max-width: 250px;
          height: 25vh;
          max-height: 250px;
        "
        v-show="$store.getters.isOpt"
      >
        <b-card-title>Stable</b-card-title>
        <b-card-body :class="[windowWidth < 500 ? 'pt-1' : '', 'align-middle']">
          <hr class="m-0" />
          <h1 :class="displayClass" style="color: green;">{{ stableCount }}</h1>
        </b-card-body>
      </b-card>
    </transition-group>
  </div>
</template>

<script>
import { vueWindowSizeMixin } from 'vue-window-size';
import conditions from '../DummyData/conditionTranslate';

export default {
  mixins: [vueWindowSizeMixin],
  computed: {
    displayClass() {
      return this.windowWidth > 500 ? 'display-2' : 'display-4';
    },
    criticalCount() {
      return this.$store.getters.hospitals.filter(
        (hospital) => hospital.condition === conditions.CRITICAL
      ).length;
    },
    mildCount() {
      return this.$store.getters.hospitals.filter(
        (hospital) => hospital.condition === conditions.MILD
      ).length;
    },
    stableCount() {
      return this.$store.getters.hospitals.filter(
        (hospital) => hospital.condition === conditions.STABLE
      ).length;
    },
  },
};
</script>

<style>
.top-cards-enter-to,
.top-cards-leave {
  opacity: 1;
}

.top-cards-enter {
  opacity: 0;
  transform: translateY(10px);
}

.top-cards-leave-to {
  opacity: 0;
}

.top-cards-enter-active {
  transition: all 0.8s ease;
}

.top-cards-leave-active {
  transition: all 0.8s ease;
  transform: translateY(10px);
}

/* .card > div.card-body {
  height: 300px !important;
} */
</style>

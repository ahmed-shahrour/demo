<template>
  <div style="text-align: center;" class="container">
    <transition-group name="top-cards">
      <b-card
        key="1"
        class="shadow position-fixed top-card card-one"
        v-show="$store.getters.isOpt"
      >
        <div class="my-auto h-100 align-middle" style="display: inline-block;">
          <b-card-title>Critical</b-card-title>
          <b-card-body
            :class="[
              $store.getters.innerWidth < 500 ? 'pt-1' : '',
              'align-middle',
            ]"
          >
            <hr class="m-0" />
            <h1 class="display-2" style="color: red;">
              {{ criticalCount }}
            </h1>
          </b-card-body>
        </div>
      </b-card>

      <b-card
        key="2"
        class="shadow position-fixed top-card card-two"
        v-show="$store.getters.isOpt"
      >
        <b-card-title>Mild</b-card-title>
        <b-card-body
          :class="[
            $store.getters.innerWidth < 500 ? 'pt-1' : '',
            'align-middle',
          ]"
        >
          <hr class="m-0" />
          <h1 class="display-2" style="color: orange;">{{ mildCount }}</h1>
        </b-card-body>
      </b-card>

      <b-card
        key="3"
        class="shadow position-fixed top-card card-three"
        v-show="$store.getters.isOpt"
      >
        <b-card-title>Stable</b-card-title>
        <b-card-body
          :class="[
            $store.getters.innerWidth < 500 ? 'pt-1' : '',
            'align-middle',
          ]"
        >
          <hr class="m-0" />
          <h1 class="display-2" style="color: green;">{{ stableCount }}</h1>
        </b-card-body>
      </b-card>
    </transition-group>
  </div>
</template>

<script>
import conditions from '../DummyData/conditionTranslate';

export default {
  computed: {
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

.top-card {
  z-index: 1050;
  width: 40vw;
  height: 25%;
  max-width: 250px;
  max-height: 250px;
}

.card-one {
  right: 20px;
  bottom: 60%;
}

.card-two {
  right: 20px;
  bottom: 32%;
}

.card-three {
  right: 20px;
  bottom: 4%;
}

@media only screen and (max-width: 992px) {
  .top-card {
    z-index: 1050;
    width: 35vw;
    height: 23%;
    max-width: 250px;
    max-height: 250px;
  }
}

@media only screen and (max-width: 768px) {
  .top-card {
    z-index: 1050;
    width: 35vw;
    max-width: 250px;
    min-width: 135px !important;
    height: 20%;
    max-height: 250px;
    min-height: 130px;
  }
}

@media only screen and (max-width: 576px) {
  .top-card {
    z-index: 1050;
    width: 35vw;
    max-width: 250px;
    min-width: 135px !important;
    height: 20%;
    max-height: 250px;
  }
}
</style>

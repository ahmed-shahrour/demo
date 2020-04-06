<template>
  <div class="h-100">
    <TheNavBar :style="`height: ${navHeight}vh;`"></TheNavBar>
    <transition name="slide-fade" mode="out-in" appear>
      <router-view :style="`height: ${100 - navHeight}vh`" mode="out-in">
      </router-view>
    </transition>
  </div>
</template>

<script>
import TheNavBar from '../TheNavBar';
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],
  name: 'AppAux',
  components: { TheNavBar },
  computed: {
    navHeight() {
      return this.windowHeight < 700 ? 11 : 8;
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
}
</style>

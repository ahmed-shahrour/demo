<template>
  <div :style="`height: ${$store.getters.innerHeight}px;`">
    <TheNavBar :style="`height: ${$store.getters.navHeight}px;`"></TheNavBar>
    <transition name="slide-fade" mode="out-in" appear>
      <router-view
        :style="
          `height: ${$store.getters.innerHeight - $store.getters.navHeight}px`
        "
        mode="out-in"
      >
      </router-view>
    </transition>
  </div>
</template>

<script>
import TheNavBar from '../TheNavBar';

export default {
  name: 'AppAux',
  components: { TheNavBar },
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

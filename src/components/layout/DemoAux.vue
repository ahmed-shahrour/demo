<template>
  <transition name="slide-fade" mode="out-in" appear>
    <router-view mode="out-in" appear></router-view>
  </transition>
</template>

<script>
export default {
  name: 'DemoAux',
  created() {
    this.$store.dispatch('incrementInv');
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

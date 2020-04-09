<template>
  <div id="app" :style="{ height: $store.getters.innerHeight + 'px' }">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.$store.commit('updateWindowDim', {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

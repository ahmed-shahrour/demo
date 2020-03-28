<template>
  <div id="app">
    <TheNavBar style="height: 8%;" />
    <HelloWorld style="height: 92%;" class="w-100" />
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>

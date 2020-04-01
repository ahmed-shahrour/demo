<template>
  <div class="h-100">
    <TheNavBar style="height: 8vh;"></TheNavBar>
    <router-view style="height: 92vh"></router-view>
  </div>
</template>

<script>
import TheNavBar from '../TheNavBar';
export default {
  name: 'AppAux',
  components: { TheNavBar }
};
</script>

<style></style>

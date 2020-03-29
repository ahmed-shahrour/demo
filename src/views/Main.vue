<template>
  <div>
    <HelloWorld style="height: 100%;" />

    <b-card
      class="shadow position-fixed"
      style="z-index: 1500; right: 20px; bottom: 64vh; width: 250px;"
    >
      <b-card-title>Critical</b-card-title>
      <b-card-body>
        <hr class="m-0" />
        <h1 class="display-2" style="color: red;">38</h1>
      </b-card-body>
    </b-card>

    <b-card
      class="shadow position-fixed"
      style="z-index: 1500; right: 20px; bottom: 35vh; width: 250px;"
    >
      <b-card-title>Mild</b-card-title>
      <b-card-body>
        <hr class="m-0" />
        <h1 class="display-2" style="color: orange;">14</h1>
      </b-card-body>
    </b-card>

    <b-card
      class="shadow position-fixed"
      style="z-index: 1500; right: 20px; bottom: 6vh; width: 250px"
    >
      <b-card-title>Stable</b-card-title>
      <b-card-body>
        <hr class="m-0" />
        <h1 class="display-2" style="color: green">24</h1>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
export default {
  name: 'Main',
  components: { HelloWorld }
};
</script>

<style></style>

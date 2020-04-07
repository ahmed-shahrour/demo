<template>
  <b-modal id="visit-about" centered title="What is this?">
    <p>
      We're not confident that we're sending the message across to you clearly
      using the demo and that's our fault. Have a look at our
      <strong>About</strong> page, it describes what we're trying to accomplish.
    </p>
    <template v-slot:modal-footer>
      <b-button class="w-50 mx-auto" variant="primary" :to="{ name: 'About' }">
        Show Me!
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'TheAboutModal',
};
</script>

<style></style>

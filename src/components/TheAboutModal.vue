<template>
  <b-modal id="visit-about" centered title="Curious?">
    <p>
      Have a look at our
      <strong>About</strong> page! it describes what we're trying to accomplish.
    </p>
    <template v-slot:modal-footer>
      <b-button class="w-50 mx-auto" variant="primary" :to="{ name: 'About' }">
        Take me there!
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'TheAboutModal',
};
</script>

<style>
#visit-about___BV_modal_outer_ {
  z-index: 1200 !important;
  position: fixed;
}
</style>

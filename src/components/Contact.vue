<template>
  <div class="container pt-5 w-50">
    <b-row>
      <b-col>
        <h1 class="title text-center">Contact</h1>
        <hr />
      </b-col>
    </b-row>
    <b-row class="mt-3 pb-5">
      <b-col>
        <h5 class="text-justify" style="line-height: 1.5em">
          If you're interested in having a discussion on starting a motion, or
          you're just simply curious and want to bounce your ideas off the
          problem/solution presented, then by all means bring it to light! (Do
          you think it's too ambitious? Would there would be enough time to
          implement it even if it got the green light? Is there a better
          solution? Is this even a problem? etc.)
        </h5>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-5">
      <b-button
        :href="'#'"
        class="p-0 mr-4"
        style="background-color: transparent; border-width: 0px"
      >
        <font-awesome-icon
          :icon="['fab', 'facebook-square']"
          size="5x"
          style="color: #4267B2"
        />
      </b-button>
      <b-button
        :href="'mailto:ahmadshahrour951@gmail.com'"
        class="p-0 mx-4"
        style="background-color: transparent; border-width: 0px"
      >
        <font-awesome-icon
          :icon="['far', 'envelope']"
          size="5x"
          style="color: #D44638"
        />
      </b-button>
      <b-button
        href="https://github.com/ahmadshahrour951/syringe"
        class="p-0 ml-4"
        style="background-color: transparent; border-width: 0px"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          size="5x"
          style="color: black"
        />
      </b-button>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

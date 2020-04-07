<template>
  <div class="container pt-5">
    <b-row align-h="center">
      <b-col cols="12" sm="11" md="9">
        <h1 class="title text-center">Contact</h1>
        <hr />
      </b-col>
    </b-row>
    <b-row class="mt-3 pb-5" align-h="center">
      <b-col cols="12" sm="11" md="9">
        <h5 class="text-justify" style="line-height: 1.5em;">
          If you're interested in having a discussion on starting a motion, or
          you're just simply curious and want to bounce your ideas off the
          problem/solution presented, then by all means bring it to light in our
          Facebook Group page! (Do you think it's too ambitious? Would there be
          enough time to implement it even if it got the green light? Is there a
          better solution? Is this even a problem? etc.)
          <br />
          <br />
          We particuarly encourage you to contact us if you have any skill you'd
          like donate, whether you work in software development, marketing,
          healthcare, graphic design, etc. any advice or effort will be
          appreciated.
          <br />
          <br />
          This is a community driven effort and the idea is not meant for
          monetary gain. If you like the idea and you want to use it to help us
          fellow humans (monetary intentions or not), go ahead and STEAL it! We
          think it might be useful if we all combine our efforts rather than
          spread ourselves thin with multiple projects with the same aim of
          saving lives, nonetheless, our code is available at our github page
          (which is still under construction).
        </h5>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-4">
      <b-button
        :href="'fb.me/covidoptimize'"
        class="p-0 mr-4"
        style="background-color: transparent; border-width: 0px;"
      >
        <font-awesome-icon
          :icon="['fab', 'facebook-square']"
          size="4x"
          style="color: #4267b2;"
        />
      </b-button>
      <b-button
        :href="'mailto:covidoptimize@gmail.com'"
        class="p-0 mx-4"
        style="background-color: transparent; border-width: 0px;"
      >
        <font-awesome-icon
          :icon="['far', 'envelope']"
          size="4x"
          style="color: #d44638;"
        />
      </b-button>
      <b-button
        href="https://github.com/ahmadshahrour951/covidoptimize"
        class="p-0 ml-4"
        style="background-color: transparent; border-width: 0px;"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          size="4x"
          style="color: black;"
        />
      </b-button>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <b-modal
    id="heads-up"
    centered
    hide-header
    hide-header-close
    no-close-on-backdrop
    no-close-on-esc
    ok-only
    title-tag="h5"
  >
    <template v-slot:default>
      <p>
        There's a few things you ought to know before you get started
      </p>
      <ul>
        <li>
          <p>
            <span>
              <font-awesome-layers class="fa-2x">
                <font-awesome-icon
                  :icon="['fas', 'map-marker']"
                  :style="{
                    color: 'black',
                  }"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fas', 'plus-circle']"
                  transform="shrink-7 up-2 "
                  style="color: white;"
                >
                </font-awesome-icon> </font-awesome-layers
            ></span>
            represents a hospital.
          </p>
        </li>
        <li>
          <p>
            <span>
              <font-awesome-layers class="fa-2x">
                <font-awesome-icon
                  :icon="['fas', 'circle']"
                  style="color: #007BFF;"
                />
                <font-awesome-icon
                  :icon="['fas', 'user']"
                  transform="shrink-7 up-0.5"
                  style="color: white;"
                />
              </font-awesome-layers>
            </span>
            represents a person.
          </p>
        </li>
        <li>
          Click the <strong>"Optimize"</strong> switch at the top of the screen
          to get the show started!
        </li>
        <li class="mt-2">
          Try figuring out which hospital is best for the person on the map.
        </li>
        <li class="mt-2">
          This is a demonstration and the data you will see is
          <strong>NOT</strong> real.
        </li>
      </ul>
    </template>
    <template v-slot:modal-footer="{ ok }">
      <b-button class="w-50 mx-auto" variant="primary" @click="ok()">
        OK
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'TheMapModal',
};
</script>

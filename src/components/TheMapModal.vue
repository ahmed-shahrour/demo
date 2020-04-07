<template>
  <b-modal
    id="heads-up"
    centered
    title="Hey There!"
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
            <span
              ><b-iconstack font-scale="2" class="mt-2">
                <b-icon
                  stacked
                  icon="circle-fill"
                  scale="1"
                  variant="dark"
                ></b-icon>
                <b-icon
                  stacked
                  icon="plus-circle-fill"
                  variant="light"
                  scale="0.8"
                ></b-icon> </b-iconstack
            ></span>
            represents a hospital
          </p>
        </li>
        <li>
          <p>
            <span>
              <b-icon
                icon="person-fill"
                scale="2"
                variant="primary"
                animation="cylon-vertical"
                class="ml-2 mr-2"
              >
              </b-icon>
            </span>
            represents a person calling 911
          </p>
        </li>
        <li>
          Make sure to click the <strong>"Optimize"</strong> switch at the very
          top of the screen to get the show started!
        </li>
        <li class="mt-2">
          Try to look at this through the lens of the person answering the 911
          call, you will essentially play the role of instructuing the ambulance
          to take the caller to the hospital thats most appropriate.
        </li>
        <li class="mt-2">
          This is a demonstration and the data you will see is
          <strong>NOT</strong> real, however, locations and names of hospitals
          are.
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

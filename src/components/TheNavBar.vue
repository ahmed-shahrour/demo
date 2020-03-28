<template>
  <b-navbar class="px-4" style="background-color: #7dc2af;">
    <div
      class="sidenav rounded-right"
      :style="{ width: navWidth + 'px' }"
      @focusout="closeNav"
    >
      <b-icon-x-circle
        class="closebtn mt-3"
        @click="closeNav"
        font-scale="2.5"
      ></b-icon-x-circle>

      <b-link
        class="text-nowrap mt-5"
        :active="$route.name == 'Messages'"
        @click="closeNav"
        >Messages</b-link
      >
      <b-link
        class="text-nowrap"
        :active="$route.name == 'Market'"
        @click="closeNav"
        >Market</b-link
      >
      <b-link
        class="text-nowrap"
        @click="closeNav"
        :active="$route.name == 'Test'"
        >Account</b-link
      >
    </div>

    <b-button
      @click="openNav"
      size="sm"
      variant="outline-light"
      class="px-1 py-0"
      ><b-icon-list font-scale="2.5" class="p-0 m-0"></b-icon-list
    ></b-button>

    <b-navbar-brand href="#" class="ml-4" style="color: #fff;"
      >Covid Optimize</b-navbar-brand
    >
  </b-navbar>
</template>

<script>
export default {
  name: 'TheNavBar',
  data() {
    return {
      navWidth: 0,
      isNavOpen: false
    };
  },
  methods: {
    openNav() {
      this.isNavOpen = true;
      this.navWidth = 300;
    },
    closeNav() {
      this.isNavOpen = false;
      this.navWidth = 0;
    }
  }
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  /* width: 0; */
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  background-color: rgba(71, 71, 71, 0.9);
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #aaaaaa;
  display: block;
  transition: 0.3s;
}

.sidenav a.active {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  color: #aaaaaa;
  margin-left: 50px;
}

.sidenav a:hover,
.sidenav .closebtn:hover {
  color: #f1f1f1;
  text-decoration: none;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>

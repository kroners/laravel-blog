<template>
  <div class="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/NavComponent.vue";
export default {
  components: {
    Nav
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style>
</style>
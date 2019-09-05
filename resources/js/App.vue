<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      posts: []
    };
  },
  mounted() {
    console.log("mounted");
  },
  methods: {}
};
</script>

<style>
</style>
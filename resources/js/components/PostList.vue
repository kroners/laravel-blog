<template>
  <b-card v-for:="(item, index) in items"></b-card>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style>
</style>
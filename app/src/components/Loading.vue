<script setup lang="ts">
import RingLoader from "vue-spinner/src/RingLoader.vue";
const loading = true;
const color = "#4289b9";
</script>

<template>
  <ring-loader :loading="loading" :color="color" />
</template>

<style scoped>
</style>

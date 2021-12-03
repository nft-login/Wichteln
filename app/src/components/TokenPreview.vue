<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
  <img v-if="url.startsWith('http')" :src="url" />
  <div v-if="url.startsWith('<')" v-html="url" />
</template>

<style scoped>
img {
  width: 400px;
}
</style>

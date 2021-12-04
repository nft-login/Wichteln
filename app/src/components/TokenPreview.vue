<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
  <div v-if="url.startsWith('<')" v-html="url" />
  <img v-else :src="url" />
</template>

<style scoped>
img {
  width: 400px;
}
</style>

<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
  <img :src="url" />
</template>

<style scoped>
img {
  width: 400px;
}
</style>

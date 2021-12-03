<script setup lang="ts">
import TokenPreview from "./TokenPreview.vue";
defineProps<{ tokenId: number, url: string }>()
</script>

<template>
  <h1>Token: {{ tokenId }}</h1>
  <TokenPreview :url="url" />
</template>

<style scoped>

</style>

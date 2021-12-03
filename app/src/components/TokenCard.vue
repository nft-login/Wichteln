<script setup lang="ts">
import TokenPreview from "./TokenPreview.vue";
defineProps<{ tokenId: number; url: string }>();
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h1>Token: {{ tokenId }}</h1>
      <TokenPreview :url="url" />
    </div>
  </div>
</template>

<style scoped>
</style>

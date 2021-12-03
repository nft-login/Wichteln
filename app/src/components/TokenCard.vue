<script setup lang="ts">
import TokenPreview from "./TokenPreview.vue";
import FileUpload from "./FileUpload.vue";
defineProps<{ tokenId: number; url: string; api: string }>();
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h1>Token: {{ tokenId }}</h1>
      <TokenPreview :url="url" />
      <FileUpload :tokenId="tokenId" :api="api" />
    </div>
  </div>
</template>

<style scoped>
</style>

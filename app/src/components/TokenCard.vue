<script setup lang="ts">
import TokenMedia from "./TokenMedia.vue";
import FileUpload from "./FileUpload.vue";
const props = defineProps<{ tokenId: number; url: string; api: string }>();
const flipUrl = `${props.api}files/${props.tokenId}`;
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h1>Token: {{ tokenId }}</h1>
      <TokenMedia :url="url" :flipUrl="flipUrl" />
      <FileUpload :tokenId="tokenId" :api="api" />
    </div>
  </div>
</template>

<style scoped>
</style>

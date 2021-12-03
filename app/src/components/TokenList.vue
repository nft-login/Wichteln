<script setup lang="ts">
import TokenCard from "./TokenCard.vue";
import { Token } from "../models/token";
defineProps<{ tokens: Token[] }>();
</script>

<template>
  <div v-for="token of tokens" :key="token.tokenId">
    <TokenCard
      :key="token.tokenId"
      :token-id="token.tokenId"
      :url="token.url"
    />
  </div>
</template>

<style scoped>
</style>

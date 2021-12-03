<script setup lang="ts">
import TokenList from "./TokenList.vue";
/*const tokens = [
  {
    tokenId: 0,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
  },
  {
    tokenId: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
  },
];*/

const props = defineProps<{ api: string }>();

let tokens = await fetch(`${props.api}token/me`).then((r) =>
  r.json()
);
tokens = tokens.map((token: number) => {
  return {
    tokenId: token,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png",
  };
});
</script>

<template>
  <TokenList :tokens="tokens" />
</template>

<style scoped>
</style>

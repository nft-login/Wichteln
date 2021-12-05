<script setup lang="ts">
import TokenList from "./TokenList.vue";
import { toSvg } from "jdenticon";

const props = defineProps<{ api: string }>();

let tokens = await fetch(`${props.api}token/me`).then((r) => r.json());

let baseuri = await fetch(`${props.api}token/baseuri`).then((r) => r.json());

tokens = tokens.map((token: number) => {
  const svgString = toSvg(`${baseuri}${token}`, 200);
  return {
    tokenId: token,
    url: svgString,
  };
});
</script>

<template>
  <div id="dashboard">
    <TokenList :tokens="tokens" :api="api" />
  </div>
</template>

<style scoped>
#dashboard {
  padding: 5em;
}
</style>

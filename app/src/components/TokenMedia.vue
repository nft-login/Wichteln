<script setup lang="ts">
import { ref } from "vue";
import TokenPreview from "./TokenPreview.vue";
const props = defineProps<{ url: string; flipUrl: string }>();
const imgUrl = ref(props.url);
const flip = () => {
  imgUrl.value = props.flipUrl;
};
</script>

<template>
  <div v-on:click="flip()">
    <TokenPreview :url="imgUrl" />
  </div>
</template>

<style scoped>
</style>

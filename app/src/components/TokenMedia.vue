<script setup lang="ts">
import { ref } from "vue";
import { Main } from "tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import TokenPreview from "./TokenPreview.vue";
const props = defineProps<{ url: string; flipUrl: string }>();
const imgUrl = ref(props.url);
const flipped = ref(false);
const flip = () => {
  flipped.value = true;
  imgUrl.value = props.flipUrl;
};

const particlesInit = (main: Main) => {
  loadConfettiPreset(main);
};

const options = {
  preset: "confetti",
};
</script>

<template>
  <div v-on:click="flip()">
    <Particles
      v-if="flipped"
      id="confetti"
      :options="options"
      :particlesInit="particlesInit"
    />
    <TokenPreview :url="imgUrl" />
  </div>
</template>

<style scoped>
</style>

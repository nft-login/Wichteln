<script setup lang="ts">
import christmas from "../assets/christmas.mp3";
</script>
<template>
  <div
    title="We Wish You A Merry Christmas - Twin Musicom from http://www.twinmusicom.org/ (C) Creative Commons By Attribution License"
  >
    <audio
      controls
      loop="true"
      autoplay="true"
      :src="christmas"
      preload="auto"
    ></audio>
  </div>
</template>

<style scoped>
</style>

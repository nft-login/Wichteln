<script setup lang="ts">
import { ref } from "vue";
defineProps<{ tokenId: number }>();
const fileInput = ref<any>();
const file = ref<File>();

const handleFileUpload = async () => {
  file.value = fileInput.value.files[0];
  console.log("selected file", file.value);
};
</script>

<template>
  <div class="form-group">
    <input ref="fileInput" v-on:change="handleFileUpload()" type="file" class="form-control" />
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{ tokenId: number; api: string }>();
const fileInput = ref<any>();
const file = ref<File>();

const handleFileUpload = async () => {
  file.value = fileInput.value.files[0];
  if (file.value) {
    let data = new FormData();
    data.append("tokenId", props.tokenId.toString());
    data.append("file", file.value, file.value.name);
    await fetch(`${props.api}files/upload`, {
      method: "post",
      body: data,
    });
  }

  console.log("selected file", file.value);
};
</script>

<template>
  <div class="form-group">
    <input
      ref="fileInput"
      v-on:change="handleFileUpload()"
      type="file"
      class="form-control"
    />
  </div>
</template>

<style scoped>
</style>

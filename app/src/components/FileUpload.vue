<script setup lang="ts">
import { ref } from "vue";
import Loading from "./Loading.vue";
const props = defineProps<{ tokenId: number; api: string }>();
const fileInput = ref<any>();
const file = ref<File>();
const loading = ref(false);
const handleFileUpload = async () => {
  file.value = fileInput.value.files[0];
  if (file.value) {
    loading.value = true;
    let data = new FormData();
    data.append("tokenId", props.tokenId.toString());
    data.append("file", file.value, file.value.name);
    await fetch(`${props.api}files/upload`, {
      method: "post",
      body: data,
    });
    loading.value = false;
  }

  console.log("selected file", file.value);
};
</script>

<template>
  <form v-on:submit.prevent>
    <div class="form-row">
      <div class="col">
        <input ref="fileInput" type="file" class="form-control" />
      </div>
      <div class="col">
        <button
          v-if="!loading"
          class="btn btn-primary form-control"
          v-on:click="handleFileUpload()"
        >
          wrap gift
        </button>
        <Loading v-if="loading" />
      </div>
    </div>
  </form>
</template>

<style scoped>
</style>

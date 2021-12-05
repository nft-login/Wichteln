<script setup lang="ts">
import { ref } from "vue";
import TokenMedia from "./TokenMedia.vue";
import FileUpload from "./FileUpload.vue";
import gift_box from "../assets/gift-box.png";

const props = defineProps<{ tokenId: number; url: string; api: string }>();
const flipUrl = `${props.api}files/${props.tokenId}`;

const uploadEnabled = ref(false);
const showUpload = () => {
  uploadEnabled.value = !uploadEnabled.value;
};
</script>

<template>
  <div id="tokencard" class="card">
    <div class="card-body">
      <h1>Token: {{ tokenId }}</h1>
      <TokenMedia :url="url" :flipUrl="flipUrl" />
      <div id="uploadbox" title="change gift by uploading new file">
        <img id="giftbox" @click="showUpload" :src="gift_box" />
        <FileUpload v-if="uploadEnabled" :tokenId="tokenId" :api="api" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#tokencard {
  margin: 2em;
}

#giftbox {
  float: left;
  width: 64px;
}

#uploadbox {
  display: inline-block;
}
</style>

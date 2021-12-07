<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{ api: string }>();
const me = ref(null);

fetch(`${props.api}profile/me`)
  .then((r) => r.json())
  .then((profile) => (me.value = profile));

const login = () => {
  const search = window.location.search;
  const contract = new URLSearchParams(search).get("contract");
  window.open(`${props.api}login/${contract}`, "_self");
};
const logout = () => {
  window.open(`${props.api}logout`, "_self");
};
</script>
<template>
  <div>
    {{ me }}
    <button v-if="!me" type="button" @click="login()" class="btn btn-primary">
      Login
    </button>
    <button v-if="me" type="button" @click="logout()" class="btn btn-primary">
      Logout
    </button>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{ api: string }>();
const loggedIn = ref(false);
const me = ref(null);

fetch(`${props.api}profile/me`)
  .then((r) => r.json())
  .then((profile) => (me.value = profile));

const login = () => {
  window.open(`${props.api}login`, "_self");
};
const logout = () => {
  window.open(`${props.api}logout`, "_self");
};
</script>
<template>
  {{ me }}
  <button
    v-if="!me"
    type="button"
    @click="login()"
    class="btn btn-primary"
  >
    Login
  </button>
  <button
    v-if="me"
    type="button"
    @click="logout()"
    class="btn btn-primary"
  >
    Logout
  </button>
</template>

<style scoped>
</style>

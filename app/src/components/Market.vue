<script setup lang="ts">
const gotoMarket = () => {
  window.open(`https://market.nft-login.net`, "_self");
};
</script>
<template>
  <button type="button" @click="gotoMarket()" class="btn btn-primary">
    No Tokens? Goto Market!
  </button>
</template>

<style scoped>
</style>

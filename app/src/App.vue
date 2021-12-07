<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue";
import Music from "./components/Music.vue";
import Login from "./components/Login.vue";
import Market from "./components/Market.vue";
import Loading from "./components/Loading.vue";
const api = "/";
const search = window.location.search;
const contract = new URLSearchParams(search).get("contract");
if (!contract) {
  window.open("/?contract=0xa0d4E5CdD89330ef9d0d1071247909882f0562eA", "_self");
}
</script>

<template>
  <div id="app">
    <Particles id="tsparticles" url="/particles.json" />
    <Music />
    <Login :api="api" />
    <Suspense>
      <template #default>
        <Dashboard :api="api" />
      </template>
      <template #fallback>
        <div id="loading">
          <Loading />
        </div>
      </template>
    </Suspense>
    <Market />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#loading {
  margin: auto;
  padding: 2em;
  width: 10%;
}
</style>

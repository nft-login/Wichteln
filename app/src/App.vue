<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue";
</script>

<template>
  <div id="app">
    <Particles id="tsparticles" url="/particles.json" />

    <Suspense>
      <template #default>
        <Dashboard api="/" />
      </template>
      <template #fallback>
        <div style="text-align: center; padding-top: 20px">Loading</div>
      </template>
    </Suspense>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0d47a1;
}
</style>

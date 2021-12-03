<script setup lang="ts">
import Dashboard from "./components/Dashboard.vue";
</script>

<template>

    <Suspense>
    <template #default>
      <Dashboard api="http://localhost:8000/" />
    </template>
    <template #fallback>
      <div style="text-align: center; padding-top: 20px">
        Loading
      </div>
    </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

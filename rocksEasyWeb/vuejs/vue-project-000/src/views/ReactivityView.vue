<script setup>
import { ref } from "vue";
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
<template>
  <div class="layout">
    <h1>This is an Reactivity page</h1>
    <hr />
    <button @click="count++" disabled>+ ver.1</button>
    <button @click="increment">+ ver.2</button>
    <div>{{ count }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

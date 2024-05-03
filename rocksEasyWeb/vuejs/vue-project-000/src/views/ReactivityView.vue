<script setup>
import { ref } from "vue";
const count = ref(0);
console.log(count);
console.log(count.value);
count.value++;
console.log(count.value);
</script>
<template>
  <div class="layout">
    <h1>This is an Reactivity page</h1>
    <hr />
    <button @click="count++">+</button>
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

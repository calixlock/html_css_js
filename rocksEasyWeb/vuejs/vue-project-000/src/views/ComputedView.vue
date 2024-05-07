<script setup>
import { reactive } from "vue";
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
</script>
<template>
  <div class="layout">
    <h1>This is an computed properties page</h1>
    <hr />
    {{ author }}
    <hr />
    {{ author.books.length }}
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

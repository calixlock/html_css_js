<script setup>
const awesome = true;
</script>
<template>
  <div class="layout">
    <h1>This is an conditionalRender page</h1>
    <hr />
    {{ awesome }}
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

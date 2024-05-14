<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an Form Input Bindings page</h1>
    <hr />
    <h2>Text</h2>
    <!-- input bind -->
    <!-- <input
      type="text"
      :value="msg"
      @input="(event) => (msg = event.target.value)"
    /> -->
    <input v-model="msg" />
    <p>msg : {{ msg }}</p>
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

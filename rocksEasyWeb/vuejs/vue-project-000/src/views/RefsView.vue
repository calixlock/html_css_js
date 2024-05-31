<script>
export default {
  mounted() {
    // mounted가 되면 ref가 input인 곳에 focus를 해라
    this.$refs.input.focus();
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is refs page</h1>
    <hr />
    <input ref="input" />
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

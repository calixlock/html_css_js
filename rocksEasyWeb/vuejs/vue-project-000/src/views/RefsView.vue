<script>
export default {
  data() {
    return {
      list: [11, 22, 33, 44],
    };
  },
  mounted() {
    // mounted가 되면 ref가 input인 곳에 focus를 해라
    // this.$refs.input.focus();
    // document.querySelector("#username").focus();
    console.log(this.$refs.items);
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is refs page</h1>
    <hr />
    <!-- <input ref="input" /> -->
    <!-- <input type="text" id="username" /> -->
    <ul>
      <li v-for="item in list" ref="items" :key="item.id">{{ item }}</li>
    </ul>
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

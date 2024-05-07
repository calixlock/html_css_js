<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      firstName: "MJ",
      lastName: "Ahn",
    };
  },
  computed: {
    messageBooks() {
      return this.author.books.length;
    },
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an computed properties page</h1>
    <hr />
    <!-- computed 방식 -->
    {{ author }}
    <hr />
    <span>책장 : {{ messageBooks }}</span>
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

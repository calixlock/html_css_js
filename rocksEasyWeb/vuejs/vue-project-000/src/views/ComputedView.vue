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
    fullName: {
      get() {
        return this.lastName + " " + this.firstName;
      },
      set(newValue) {
        // es6 구조분해 할당
        [this.lastName, this.firstName] = newValue.split(" ");
      },
    },
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an computed properties page</h1>
    <hr />
    author : {{ author }}
    <hr />
    <!-- computed 방식 -->
    <span>책장 : {{ messageBooks }}</span>
    <hr />
    <!-- fullName.get 실행 -->

    <div>수정 : {{ (this.fullName = "홍 길동") }}</div>
    <div>lastName : {{ this.lastName }}</div>
    <div>firstName : {{ this.firstName }}</div>
    <hr />
    <!-- check -->
    <div>{{}}</div>
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

<script>
export default {
  // data 초기값 설정
  data() {
    return {
      awesome: true,
      type: "d",
      page: true,
    };
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an conditionalRender page</h1>
    <hr />
    <button @click="awesome = !awesome">전환</button>
    <h2 v-if="awesome">awesome : {{ awesome }}</h2>
    <h2 v-else>awesome : {{ awesome }}</h2>
    <hr />
    <h2 v-if="type === 'a'">{{ type }} : type</h2>
    <h2 v-else-if="type === 'b'">{{ type }} : type</h2>
    <h2 v-else-if="type === 'c'">{{ type }} : type</h2>
    <h2 v-else>{{ type }} : type</h2>
    <hr />

    <button @click="page = !page" :class="{ active: page }">전환</button>
    <template v-if="page">
      <h1>제목 1</h1>
      <ul>
        <li>단락 1</li>
        <li>단락 2</li>
      </ul>
    </template>
    <template v-else>
      <h1>제목 2</h1>
      <ul>
        <li>단락 1</li>
        <li>단락 2</li>
      </ul>
    </template>
  </div>
</template>

<style>
button.active {
  background-color: black;
  color: white;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      parentLangs: "Web",
      items: [
        { id: 1, title: "HTML", desc: "HTML..." },
        { id: 2, title: "CSS", desc: "CSS..." },
        { id: 3, title: "Javascript", desc: "Javascript..." },
      ],
      myObject: {
        title: "vue에서 목록을 작성하는 방법",
        author: "홍길동",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an List Rendering page</h1>
    <hr />
    <ul>
      <li v-for="(item, idx) in items" :key="item.id">
        {{ parentLangs }} - {{ idx }} - {{ item.title }} - {{ item.desc }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="(value, idx) in myObject" :key="value">
        {{ idx }} : {{ value }}
      </li>
    </ul>
    <hr />
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <hr />
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.desc }}</li>
      </template>
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

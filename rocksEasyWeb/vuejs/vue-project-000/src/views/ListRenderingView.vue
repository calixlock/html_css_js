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
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  // evenNumbers는 numbers의 data가 변경되었을 때 실행됨
  computed: {
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((numbers) => numbers % 2 === 0);
    },
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an List Rendering page</h1>
    <hr />
    <h2>v-for : basic render</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="item.id">
        {{ parentLangs }} - {{ idx }} - {{ item.title }} - {{ item.desc }}
      </li>
    </ul>
    <hr />
    <h2>v-for : data list render</h2>
    <ul>
      <li v-for="(value, idx) in myObject" :key="value">
        {{ idx }} : {{ value }}
      </li>
    </ul>
    <hr />
    <h2>v-for numbering render</h2>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <hr />
    <h2>v-for template tag render</h2>
    <ul>
      <template v-for="(item, idx) in items" :key="item.id">
        <li>{{ idx }} - {{ item.desc }}</li>
      </template>
    </ul>
    <hr />
    <h2>v-for computed data render</h2>
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
    <hr />
    <h2>v-for method / double for loop</h2>
    <ul v-for="numbers in sets" :key="numbers">
      <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
      <hr />
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

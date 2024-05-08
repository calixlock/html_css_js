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

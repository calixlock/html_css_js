<script>
export default {
  mounted() {
    console.log(`3: 컴포넌트 마운트 되었습니다.`);
  },
  beforeMount() {
    console.log(`0: beforeMount 실행`);
  },
  beforeUpdate() {
    console.log(`1-0: update 전 실행`);
  },
  updated() {
    console.log(`2-1: update 후 실행`);
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<template>
  {{ console.log(`1: 템플릿 컴파일 시작`) }}
  <div class="layout">
    <h1>This is an lifecycle hooks page</h1>
    <hr />
    <button @click="count++">+</button>
    <div id="counter">count : {{ count }}</div>
  </div>
  {{ console.log(`2: 템플릿 컴파일 완료`) }}
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

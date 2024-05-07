<script setup>
import { nextTick, reactive, ref } from "vue";
const count = ref(0);

const countReactive = reactive({ count: 0 });
console.log(countReactive);

const increment = async () => {
  count.value++;
  // 업데이트 전
  console.log(document.getElementById("counter").textContent);
  await nextTick(); // 업데이트 기다린 후 완료 후 진행
  console.log(document.getElementById("counter").textContent);
};
</script>
<template>
  {{ console.log("reactivity template 실행") }}
  <div class="layout">
    <h1>This is an Reactivity page</h1>
    <hr />
    <button @click="count++" disabled>+ ver.1</button>
    <button @click="increment" disabled>+ ver.2</button>
    <div id="counter">{{ count }}</div>
    <hr />

    <button @click="countReactive.count++">+ ver.3</button>
    <div id="counter">{{ countReactive.count }}</div>
    <hr />
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

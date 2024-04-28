<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  msg2: {
    type: String,
    required: true,
  },
});
const rawHtml = '<a href="#">Link</a>';
const pid = 10;
let isBtnDisavled = false;
const idcl = {
  id: "id00",
  class: "cl00",
};
const number = 20;
const ok = false;
const message = "12345";
const id = 30;
let sayHello = (msg) => {
  // alert(msg);
  console.log(msg);
};
const url = "http://www.google.com";
const attributeName = "href";
const items = [
  { id: 0, value: "html" },
  { id: 1, value: "css" },
  { id: 2, value: "javascript" },
];
</script>

<template>
  <div class="greetings">
    <!-- 데이터 변수 출력 -->
    <h1 class="green">{{ msg }} {{ msg2 }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <hr />
    <!-- 텍스트 보간 -->
    <p>{{ rawHtml }}</p>
    <p><span v-html="rawHtml"></span></p>
    <hr />
    <!-- 속성 바인딩 -->
    <div v-bind:id="pid">{{ pid }}</div>
    <!-- bind 생략 (:) -->
    <div :id="pid">{{ pid }}</div>
    <!-- boolean .bind -->
    <hr />
    <button :disabled="isBtnDisavled">button</button>
    <button :disabled="!isBtnDisavled">button</button>
    <hr />
    <!-- 멀티속성 바인딩 id/class-->
    <div :="idcl">멀티속성 바인딩</div>
    <hr />
    <!-- js expression -->
    {{ number + 1 }}
    {{ ok ? "예" : "아니오" }}
    {{ message.split("").reverse().join("") }}
    <div :id="`list-${id}`">list check</div>
    <hr />
    <!-- 함수 호출 -->
    <!-- <span :title="sayHello('헬로')">호출용</span> -->
    <span>{{ sayHello("헬로~") }}</span>
    <hr />
    <a :href="url">google</a>
    <a :href="[url]">구글</a>
    <a :[attributeName]="[url]">goo글</a>
    <hr />
    <!-- 반복문 -->
    <div v-for="item in items" :key="item.id">
      {{ item.value }}
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  msg2: {
    type: String,
    required: true
  }
})

const rawHtml = '<a href="#">Link</a>'
const pid = 10
let isBtnDisavled = false
const multiProps = {
  id: 'id01',
  class: 'cl01'
}
</script>

<template>
  <div class="greetings">
    <!-- 데이터 변수 출력 -->
    <h1 class="green">{{ msg }} {{ msg2 }}</h1>
    <h3>
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
    <div :="multiProps">멀티속성 바인딩</div>
    <hr />
    <!--  -->
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

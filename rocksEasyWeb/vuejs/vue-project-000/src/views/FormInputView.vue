<script>
export default {
  data() {
    return {
      msg: "",
      multiple: "",
    };
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an Form Input Bindings page</h1>
    <hr />
    <h2>Text</h2>
    <!-- input bind -->
    <!-- <input
      type="text"
      :value="msg"
      @input="(event) => (msg = event.target.value)"
    /> -->
    <!-- 한글/중국어/일본어 문자의 합쳐짐이 있으면 즉각 반영어려움 / 영어 숫자 가능 -->
    <input v-model="msg" />
    <p>msg : {{ msg }}</p>
    <hr />
    <h2>Multiple Texts</h2>
    <p style="white-space: pre-line">{{ multiple }}</p>
    <textarea
      v-model="multiple"
      placeholder="여러 줄을 추가해보세요"
    ></textarea>
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

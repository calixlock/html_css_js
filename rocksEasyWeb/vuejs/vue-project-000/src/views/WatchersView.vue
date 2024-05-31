<script>
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      loading: false,
    };
  },
  watch: {
    // whenever question changes, this function will run
    // watch > newQuestion 값이 들어오는지 감시
    question(newQuestion, oldQuestion) {
      // newQuestion에 ?가 들어있으면 getAnswer실행
      if (newQuestion.includes("?")) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.loading = true;
      // 입력 후 응답받기 전 대기기간 동안 thinking... 출력
      this.answer = "Thinking...";
      try {
        // fetch된 사이트에서 비동기로 response를 기다림
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        // error 발생시 answer 출력
        this.answer = "Error! Could not reach the API. " + error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
;
<template>
  <div class="layout">
    <h1>This is watchers page</h1>
    <hr />
    <p>
      Ask a yes/no question:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
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

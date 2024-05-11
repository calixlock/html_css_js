<script>
export default {
  data() {
    return {
      count: 0,
      name: "ahn",
    };
  },
  methods: {
    greet(event) {
      // this는 메서드가 활성화된 현재의 인스턴스(script>default)
      alert(`hello, ${this.name}`);
      if (event) {
        alert(event.target.tagName);
        console.log(event);
      }
    },
    say(msg) {
      // console.log(msg);
      alert(msg);
    },
    warn(msg, event) {
      if (event) {
        event.preventDefault(); // 해당 요소의 기본기능(이벤트) 차단
        // event.preventDefault(); // 부모로 전달되는 이벤트만 차단 / 부모 이벤트 전달됨
      }
      alert(msg);
    },
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an Event page</h1>
    <hr />
    <h2>Inline handler</h2>
    <button @click="count++">click : {{ count }}</button>
    <hr />
    <h2>Method handler</h2>
    <button @click="greet">Hello</button>
    <hr />
    <h2>inline > method handler > call</h2>
    <button @click="say(name)">hello</button>
    <button @click="say('bye')">bye</button>
    <hr />
    <h2>inline > event handler</h2>
    <button @click="warn('양식을 제출할 수 없습니다.', $event)">submit</button>
    <button @click="(event) => warn('양식을 제출할 수 없습니다.', event)">
      submit_2
    </button>
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

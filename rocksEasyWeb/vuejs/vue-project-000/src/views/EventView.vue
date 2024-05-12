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
    doThis() {
      //.stop
      alert("링크 전파를 차단했습니다.");
    },
    onSubmit() {
      // .onSubmit
      alert("폼 제출을 막습니다.");
    },
    doThat() {
      // .stop.prevent
      alert("기본 속성 차단 / 링크 전파 차단");
    },
    boxClick() {
      alert("boxClick");
    },
    spanClick() {
      alert("spanClick");
    },
    submit() {
      alert("enter 키가 입력되었습니다.");
    },
    onPageDown() {
      alert("pageDown키가 입력되었습니다");
    },
  },
};
</script>
<template>
  <div class="layout">
    <h1>This is an Event handlerpage</h1>
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
    <h2>Event Modifier</h2>
    <!-- the click event's propagation will be stopped -->
    <!-- 클릭 이벤트 부모에게 전달되는거 중지 / 본인 이벤트 실행 / target="_blank" / 새창에서 열리도록-->
    <a @click.stop="doThis" href="http://www.naver.com" target="_blank">
      doThis
    </a>

    <!-- the submit event will no longer reload the page / action 동작 중지-->
    <form @submit.prevent="onSubmit" action="http://www.naver.com">
      <button>submit</button>
    </form>

    <!-- modifiers can be chained / 기본 이벤트 차단 및 이벤트 전달 둘다 중지 -->
    <a @click.stop.prevent="doThat">stop & prevent</a>

    <!-- just the modifier  / 기본기능 중지-->
    <form @submit.prevent action="http://www.naver.com">
      <button>submit.prevent</button>
    </form>

    <!-- span click 시 box도 포함되어 둘다 실행됨  -->
    <div @click="boxClick" class="box">
      <span @click="spanClick" class="box">spanClick</span>
    </div>

    <!-- span / box의 클릭 범위(영역) 나눠짐 구분됨 -->
    <div @click.self="boxClick" class="box">
      <span @click.self="spanClick" class="box">spanClick.self</span>
    </div>
    <hr />
    <h2>Key Modifier</h2>
    <!-- 특정키 지정 가능 /'keyup'의 'enter' 눌릴 시 submit 호출 -->
    <input type="" @keyup.enter="submit" />
    <input type="" @keyup.page-down="onPageDown" />
  </div>
</template>

<style>
.box {
  border: 1px solid;
  padding: 20px;
  display: inline-block;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      msg: "none",
      multiple: "none",
      checked: false,
      checkedList: [],
      picked: "none",
      selected: "none",
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
    <h2>Multiple Texts v-model</h2>
    <p style="white-space: pre-line">{{ multiple }}</p>
    <textarea
      v-model="multiple"
      placeholder="여러 줄을 추가해보세요"
    ></textarea>
    <hr />
    <h2>check box vind</h2>
    <input type="checkbox" name="" id="checkboxx" v-model="checked" />
    <!-- checked : true / !checked: false -->
    <label for="checkbox">{{ checked }}</label>
    <hr />
    <h2>check List v-model</h2>
    <input type="checkbox" name="" id="jack" value="잭" v-model="checkedList" />
    <label for="jack">잭</label>
    <input type="checkbox" name="" id="kim" value="김" v-model="checkedList" />
    <label for="kim">김</label>
    <input type="checkbox" name="" id="ahn" value="안" v-model="checkedList" />
    <label for="ahn">안</label>
    <div>checked List : {{ checkedList }}</div>
    <hr />
    <h2>radio btn : picked v-model</h2>
    <div>selected : {{ picked }}</div>
    <input type="radio" name="" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>
    <input type="radio" name="" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
    <input type="radio" name="" id="three" value="셋" v-model="picked" />
    <label for="three">셋</label>
    <hr />
    <h2>select : v-model</h2>
    <select name="" id="" v-model="selected">
      <option disabled value="">다음 중 하나를 고르시오</option>
      <option value="a">가</option>
      <option value="b">나</option>
      <option value="c">다</option>
    </select>
    <div>selected : {{ selected }}</div>
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

console.log("----contentJs----");
// background.js에서 온 데이터 수신 및 처리
let receivedUserText = "";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "POPUP_DATA_TO_CONTENT" && message.data) {
    const receivedData = message.data;
    // console.log("Received data from popup:", receivedData);
    // Do something with the received data
    receivedUserText = receivedData.popupText;
    //에러발생
    // Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.
  }
});

// body text 가져오기
let bodyText = document.querySelector("body").innerText;
// body text에서 공백으로 단어 컷팅 후 갯수 카운트
let bodyNum = bodyText.split(" ").length;

// 자신이 알고 있는 단어가 몇번 등장하는지 카운트
let myNum = bodyText.match(
  new RegExp("\\b(" + receivedUserText + ")\\b", "gi")
).length;
// 전체 단어중 내가 아는 단어 비율 계산
let perNum = ((myNum / bodyNum) * 100).toFixed(2);
// 보여줄 데이터 양식 확인
let returnText = `${myNum}/${bodyNum} (${perNum})%`;

console.log(returnText);

// background.js에 보낼 데이터를 묶어 보낸다
const extractedData = {
  myNum: myNum,
  perNum: perNum,
  returnText: returnText,
};
// background.js에 데이터 전송
chrome.runtime.sendMessage({
  type: "DATA_EXTRACTED",
  data: extractedData,
});
console.log("----contentJs----");

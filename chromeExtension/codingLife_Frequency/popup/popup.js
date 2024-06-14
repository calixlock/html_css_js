// DOM이 완전히 로드 되었을때 실행되도록
document.addEventListener("DOMContentLoaded", () => {
  // contents page의 (popup>textarea)에 입력값이 변경되었을 때
  document
    .querySelector("#userTextArea")
    .addEventListener("change", function () {
      // contents page의 몇개의 단어가 등장하는지 계산해주시오.
      let userText = document.querySelector("#userTextArea").value;

      // 데이터 포장
      const dataToSend = {
        popupText: userText,
      };
      // 데이터 전송 (popup > background)
      chrome.runtime.sendMessage({ type: "POPUP_DATA", data: dataToSend });
    });
  // popup.js 데이터를 background.js로 data 전송하기

  // background.js에서 data 가져오기
  chrome.runtime.sendMessage({ type: "GET_STORED_DATA" }, (response) => {
    if (response) {
      document.getElementById("myNum").textContent =
        response.myNum || "No myNum";
      document.getElementById("perNum").textContent =
        response.perNum || "No perNum";
      document.getElementById("returnText").textContent =
        response.returnText || "No returnText";
    } else {
      console.error("Unable to access background page or stored data");
      document.getElementById("myNum").textContent = "Error";
      document.getElementById("perNum").textContent = "Error";
      document.getElementById("returnText").textContent = "Error";
    }
  });
});

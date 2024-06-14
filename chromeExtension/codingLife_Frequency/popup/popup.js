// background.js에서 data 가져오기
document.addEventListener("DOMContentLoaded", () => {
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

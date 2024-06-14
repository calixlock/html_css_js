let storedData = {};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "DATA_EXTRACTED" && message.data) {
    storedData = message.data;
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_STORED_DATA") {
    sendResponse(storedData);
  }
  return true; // sendResponse is asynchronous
});
// popup.js에서 온 데이터 저장 및 content.js로 전송
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "POPUP_DATA" && message.data) {
    const dataToSend = message.data;

    // Get all tabs and send data to content scripts
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "POPUP_DATA_TO_CONTENT",
        data: dataToSend,
      });
    });
  }
});

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

console.log(storedData);

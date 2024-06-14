// popup창에서 실행됨 / action보다 먼저 실행됨
// console.log("background_Js ----START----");

chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed");
});

// console.log("background_Js ----END----");

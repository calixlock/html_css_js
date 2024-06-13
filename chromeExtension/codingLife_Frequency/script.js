// content page의 모든 body의 text 가져오기
// let bodyText = document.querySelector('body').innerText;

// 크롬확장에서 tabs와 관련된 기능 중에 컨텐츠 페이지를 대상으로 코드를 실행
// chrome.tabs.executeScript는 manifest v2에서 사용 되던 api 임으로 동작x
// chrome.tabs.executeScript(
//   {
//     code: 'document.querySelector("body").innerText',
//   },
//   function (result) {
//     //위 의 code:~~~ 가 실행된 후 이 함수를 실행하여 result에 그 결과를 연결
//     alert(result);
//   }
// );

// 백그라운드 스크립트에서 chrome.scripting.executeScript를 사용하여 content script를 실행
// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript(
//     {
//       target: { tabId: tab.id },
//       func: () => document.body.innerText,
//     },
//     (results) => {
//       if (results && results[0] && results[0].result) {
//         console.log(results[0].result);
//       }
//     }
//   );
// });

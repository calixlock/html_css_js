console.log("contentScript 실행");

// body text 가져오기
let bodyText = document.querySelector("body").innerText;
// body text에서 공백으로 단어 컷팅 후 갯수 카운트
let bodyNum = bodyText.split(" ").length;
/* 
 - RegExp 정규표현식 
\\b : 공백제거 
g : 전역검색 
i : 대소문자 구분없이
m : 여러줄 검색
*/
// 자신이 알고 있는 단어가 몇번 등장하는지 카운트
let myNum = bodyText.match(new RegExp("\\b(the|is|was|of)\\b", "gi")).length;
// 전체 단어중 내가 아는 단어 비율 계산
let perNum = ((myNum / bodyNum) * 100).toFixed(2);
// 보여줄 데이터 양식 확인
let returnText = `${myNum}/${bodyNum} (${perNum})%`;
console.log(returnText);

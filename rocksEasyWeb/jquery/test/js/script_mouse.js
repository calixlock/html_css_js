// $(() => {
//   // mouse 작동
//   // 다중선택
//   $("#typo,h1")
//     .on("mouseover", function () {
//       // 이벤트가 일어난 범위 : this
//       $(this).css({
//         // backgroundColor: "black",
//         color: "white",
//       });
//     })
//     //chain Method & shortCut(on 생략)
//     .mouseout(function () {
//       $(this).css({
//         // backgroundColor: "black",
//         color: "black",
//       });
//     });
// });

$(() => {
  // mouse 작동
  // 다중선택
  $("#typo,h1")
    .on("mouseover", function () {
      // 이벤트가 일어난 범위 : this
      $(this).css({
        // backgroundColor: "black",
        color: "white",
      });
    })
    //chain Method & shortCut(on 생략)
    .mouseout(() => {
      $(this).css({
        // backgroundColor: "black",
        color: "black",
      });
    });
});

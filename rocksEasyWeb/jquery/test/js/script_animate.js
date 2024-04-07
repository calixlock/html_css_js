$(() => {
  $("#typo .inner").click(function () {
    //selector.animate({props: values}, 값, 효과작동방식, 익명함수)
    // 이징 : linear / swing
    $(this).animate(
      {
        opacity: 0,
        fontSize: "0px",
      },
      1000,
      "easeInOutElastic",
      function () {
        $(this).animate(
          {
            opacity: 1,
            fontSize: "110px",
          },
          500,
          "easeInOutElastic"
        );
      }
    );
  });
});

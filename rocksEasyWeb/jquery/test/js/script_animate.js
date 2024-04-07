$(() => {
  $("#typo .inner").click(function () {
    //selector.animate({props: values}, 값, 효과작동방식, 다른할일)
    // 이징 : linear / swing
    $(this).animate(
      {
        opacity: 0,
        fontSize: "0px",
      },
      1000,
      "easeInOutElastic"
    );
  });
});

$(() => {
  $(".menu li")
    .mouseover(function () {
      $(this).css({
        backgroundColor: "white",
      });
    })
    .mouseout(function () {
      $(this).css({
        backgroundColor: "#656565",
      });
    });
  //
  $("button#menu-open").click(function () {
    $(".menu").css({
      display: "block",
    });
  });
  //
  $("#box-animate").click(function () {
    $(".box")
      // 중재 기능 stop default true
      .stop(true)
      .animate(
        {
          left: "250px",
        },
        500,
        "swing",
        function () {
          $(this).stop(true).animate(
            {
              left: "100px",
            },
            500,
            "swing"
          );
        }
      );
  });
  // 기본 제이쿼리는 값이 수치적으로 변하는 것만 지원
  // 색상이 변하거나 하는 건 제이쿼리 UI 라이브러리가 필요
  $(".box-height").click(function () {
    $(".box").animate(
      {
        height: "500px",
      },
      "swing",
      function () {
        $(this).stop().animate(
          {
            height: "100px",
          },
          500,
          "swing"
        );
      }
    );
  });
  $(".box")
    .mouseover(function () {
      $(this).stop().animate(
        {
          backgroundColor: "#3498db",
        },
        100
      );
    })
    .mouseout(function () {
      $(this).stop().animate(
        {
          backgroundColor: "#98bf21",
        },
        100
      );
    });
});

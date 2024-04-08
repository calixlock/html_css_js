$(() => {
  let $duration = 300,
    $button = $("#buttons2 button");

  $button.each(function (idx) {
    let newTop = 40 * (idx - 1) + "px";
    $(this)
      .css({ top: newTop })
      .mouseover(function () {
        $(this)
          .stop()
          .animate({ backgroundColor: "yellow", color: "black" }, $duration);
        $(this)
          .find("img:first-child")
          .stop()
          .animate({ opacity: 0 }, $duration);
        $(this)
          .find("img:nth-child(2)")
          .stop()
          .animate({ opacity: 1 }, $duration);
      })
      .mouseout(function () {
        $(this)
          .stop()
          .animate({ backgroundColor: "white", color: "#01b169" }, $duration);
        $(this)
          .find("img:first-child")
          .stop()
          .animate({ opacity: 1 }, $duration);
        $(this)
          .find("img:nth-child(2)")
          .stop()
          .animate({ opacity: 0 }, $duration);
      });
  });
});

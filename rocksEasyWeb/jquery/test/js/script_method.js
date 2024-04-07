$(() => {
  $("h1").css({ color: "red" });

  $("#typo").css({
    display: "flex",
  });
  $(".inner")
    .css({
      // display: "inline-block",
      textDecoration: "underline",
      border: "5px solid red",
      // transform: "rotate(180deg)",
    })
    .css({
      opacity: 0.5,
    });
});

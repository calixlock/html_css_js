$(() => {
  let $duration = 300,
    $image = $("#images p");
  //공백o : #image p span {} -> $image.find('span')
  //공백x : #image p.strong {} -> $image.filter('strong')

  $image
    .filter(":nth-child(1)")
    .mouseover(function () {
      $(this).stop().find("span").animate(
        {
          opacity: 1,
        },
        $duration
      );
      $(this).stop().find("strong").animate(
        {
          opacity: 1,
        },
        $duration
      );
    })
    .mouseout(function () {
      $(this).find("span,strong").stop().animate(
        {
          opacity: 0,
        },
        $duration
      );
    });
  //# image p:nth-child(2)
  $image
    .filter(":nth-child(2)")
    .mouseover(function () {
      $(this).find("span").stop().animate({ opacity: 1 }, $duration);
      $(this)
        .find("strong")
        .stop()
        .animate({ opacity: 1, left: "0%" }, $duration);
    })
    .mouseout(function () {
      $(this).find("span").stop().animate({ opacity: 0 }, $duration);
      $(this)
        .find("strong")
        .stop()
        .animate({ opacity: 0, left: "-200%" }, $duration);
    });
  //
  $image
    .filter(":nth-child(3)")
    .mouseover(function () {
      $(this).find("span").stop().animate({ opacity: 1 }, $duration);
      $(this)
        .find("strong")
        .stop()
        .animate({ opacity: 1, bottom: 0 }, $duration);
      $(this).find("img").stop().animate({ top: "-30px" }, $duration);
    })
    .mouseout(function () {
      $(this).find("span").stop().animate({ opacity: 0 }, $duration);
      $(this)
        .find("strong")
        .stop()
        .animate({ opacity: 1, bottom: "-70px" }, $duration);
      $(this).find("img").stop().animate({ top: "0px" }, $duration);
    });
});

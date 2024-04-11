$(() => {
  let $aside = $("aside"),
    $button = $aside.find("button"),
    $duration = 300;

  $button.click(function () {
    //jquery 클래스
    //추가 A.addClass('b'); //제거 A.removeClass('b');
    //A.toggleClass('b'); //없으면 add 있으면 remove
    $aside.toggleClass("open");
    //A.hasClass('b'); //조건문 A에 b요소가 있으면 true 없으면 false
    if ($aside.hasClass("open")) {
      $aside.stop().animate({ left: "-70px" }, $duration, "easeOutBack");
      // 속성변경 / 속성 값 가져오기
      //let c = A.attr('b') : A라는 요소의 b라는 속성의 값을 c에 저장
      //A.attr('b','c') : A라는 요소의 b속성의 값을 c속성으로 변경
      let c = $button.find("img").attr("src", "img/btn_close.png");
      console.log(c);
    } else {
      $aside.stop().animate({ left: "-350px" }, $duration, "easeOutBack");
      $button.find("img").attr("src", "img/btn_open.png");
    }
    //버튼 클릭 첫클릭 > aside 나오도록
  });
  //
});

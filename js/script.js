// ナビメニューをマウスオーバーするとラインがスライドしてついてくる
var $nav = $(".header__nav"),
  $slideLine = $(".header__slide-line"),
  $currentItem = $(".current-item");

$(function () {
  // Menu has active item
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.outerWidth(),
      left: $currentItem.position().left,
    });
  }

  // line transition
  $($nav)
    .find("a")
    .hover(
      // Hover on
      function () {
        $slideLine.css({
          width: $(this).outerWidth(),
          left: $(this).position().left,
        });
      }
    );
});

// 画面リサイズ時に処理を実行する
$(window).on("resize", function () {
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.outerWidth(),
      left: $currentItem.position().left,
    });
  }
});

// ハンバーガーメニュー
$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});


// アコーディオン
$(".js-accordion").click(function (e) {
  e.preventDefault();

  if ($(this).parent().attr("open")) {
    $(this)
      .next()
      .slideUp( function () {
        $(this).parent().removeAttr("open");
      });
  } else {
    $(this).parent().attr("open", "true");
    $(this).next().hide().slideDown();
  }
});

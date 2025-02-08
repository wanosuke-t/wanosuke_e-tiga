// ナビメニューをマウスオーバーするとラインがスライドしてついてくる
var $nav = $(".header__nav"),
  $slideLine = $(".header__slide-line"),
  $currentItem = $(".current-item"),
  $linePaddingX = 22;

$(function () {
  // Menu has active item
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width() + $linePaddingX * 2,
      left: $currentItem.position().left - $linePaddingX,
    });
  }

  // line transition
  $($nav)
    .find("a")
    .hover(
      // Hover on
      function () {
        $slideLine.css({
          width: $(this).width() + $linePaddingX * 2,
          left: $(this).position().left - $linePaddingX,
        });
      }
    );
});

// 画面リサイズ時に処理を実行する
$(window).on('resize', function() {
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width() + $linePaddingX * 2,
      left: $currentItem.position().left - $linePaddingX,
    });
  }
});

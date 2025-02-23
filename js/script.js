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
      .slideUp(function () {
        $(this).parent().removeAttr("open");
      });
  } else {
    $(this).parent().attr("open", "true");
    $(this).next().hide().slideDown();
  }
});

// スワイパー
const swiper = new Swiper(".swiper", {
  spaceBetween: 18,

  slidesPerView: "auto",
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// タブ
const activeClass = "is-tab-active";
const tabLinks = document.querySelectorAll(".company__tab-link");

tabLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function (e) {
    e.preventDefault();

    // タブがすでにアクティブな場合は何もしない
    if (this.classList.contains(activeClass)) {
      return;
    }

    // クリックされたタブリンクにis-tab-activeクラスを付与する
    tabLinks.forEach(function (tabLink) {
      tabLink.classList.remove(activeClass);
    });
    this.classList.add(activeClass);

    // タブのアクティブ状態を切り替える
    const tabId = this.getAttribute("data-tab");
    const tabContents = document.querySelectorAll(".company__content");
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove(activeClass);
    });
    document.getElementById(tabId).classList.add(activeClass);
  });
});

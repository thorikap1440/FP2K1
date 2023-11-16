var backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 450) {
    backToTop.classList.add("show");

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });
  } else {
    backToTop.classList.remove("show");
  }
});

$(document).ready(function () {
  $.fakeLoader({
    bgColor: "#146C94",
    spinner: "spinner6",
  });
});

(function ($) {
  $.fakeLoader = function (options) {
    var settings = $.extend(
      {
        targetClass: "fakeLoader",
        timeToHide: 1500,
        spinner: "spinner6",
      },
      options
    );

    var spinner06 =
      '<div class="fl fl-spinner spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';

    var el = $("body").find("." + settings.targetClass);

    el.each(function () {
      var a = settings.spinner;

      switch (a) {
        case "spinner6":
          el.html(spinner06);
          break;
        default:
          el.html(spinner06);
      }
    });

    el.css({
      backgroundColor: settings.bgColor,
    });

    setTimeout(function () {
      $(el).fadeOut();
    }, settings.timeToHide);
  };
})(jQuery);
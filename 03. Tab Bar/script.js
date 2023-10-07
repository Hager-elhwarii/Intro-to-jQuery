
$(function () {
  $(".tab").on("click", function () {
    // Add class so when on click it's color opacity increase.
    $(this).addClass("is_active").siblings().removeClass("is_active");
    // Move tab-indicator depending on it's left position.
    let tabIndicator = $('.tab_indicator');
    let tabPosition = $(this).position();
    tabIndicator.css({
        left: tabPosition.left + 'px',
    })
  });
});

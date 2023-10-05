

$(function () {
  $("#color-input").on("change input", function () {
    // Change body background color.
    $("body").css("background-color", $(this).val());

    //  Change h1 color to white if body color is black.
    if ($("#color-input").val() <= "#282828") {
      $("h1").css("color", "white");
    } else {
      $("h1").css("color", "black");
    }
  });
});

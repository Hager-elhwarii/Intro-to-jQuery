$(function () {
  $("#toggle-btn").on("click", function () {
    // Toggle between class that add a black background color.
    $("body").toggleClass("background-changer");

    // Add white border to toggle button.
    $(this).css("border", "1px solid #eee");

    // Toggle between light mode and dark mode text.
    $("span").text(
      $("span").text() == "light mode" ? "dark mode" : "light mode"
    );

    // Toggle between moon and sun icons.
    $("i").toggleClass("fa-moon fa-sun");
  });
});

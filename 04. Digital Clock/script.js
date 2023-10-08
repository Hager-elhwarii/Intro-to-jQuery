$(function () {
  const timeFunction = () => {
    // To get current time/date.
    let date = new Date();

    // Get and Store hours, min, sec in variables.
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // AM PM setting
    let session = "AM";

    // Set conditions for time behavior.
    if (hours == 0) {
      hours = 12;
    }
    if (hours >= 12) {
      session = "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
    }

    // Change time format. From 24-hour format, to 12-hour format.
    hours = hours < 12 ? 0 + hours : hours;
    min = min < 12 ? 0 + min : min;
    sec = sec < 12 ? 0 + sec : sec;

    // Add time in html.
    $("#hours").text(hours);
    $("#min").text(min);
    $("#sec").text(sec);
    $("#perios").text(session);

    // Update time every second with "recursive" setTimeout.
    setTimeout(timeFunction, 1000);
  };
  timeFunction();
});

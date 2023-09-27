$(document).ready(function () {
  $(".click").click(function () {
    $(".popup-box").css({
      opacity: "1",
      "pointer-events": "auto",
    });
  });
  $(".btn1").click(function () {
    $(".popup-box").css({
      opacity: "0",
      "pointer-events": "none",
    });
  });
  $(".btn2").click(function () {
    $(".popup-box").css({
      opacity: "0",
      "pointer-events": "none",
    });
    alert("Your Account Deleted Successfully.");
    $(".click").text("Account Deleted");
  });
});

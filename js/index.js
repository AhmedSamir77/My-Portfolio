// change color of navbar && Up Icon
let { top: aboutTop } = $("#about").offset();

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > aboutTop - 100) {
    $("#navbar").css({ backgroundColor: "black" });
    $(".upIcon").fadeIn(1000);
  } else {
    $("#navbar").css({ backgroundColor: "transparent" });
    $(".upIcon").fadeOut(1000);
  }
});

$(".upIcon").click(function () {
  // $(window).scrollTop(0); supported by bootstrap only

  $("html, body").animate({ scrollTop: 0 }, 1000);
});

$(document).ready(function () {
  $(".colorBoxIcon").click(function () {
    let colorBoxWidth = $(".colorBox-content").outerWidth();
    let colorBoxOffset = $(".colorBox").offset().left;

    if (colorBoxOffset < 0) {
      $(".colorBox").animate({ left: 0 }, 1000);
    } else {
      $(".colorBox").animate({ left: -colorBoxWidth }, 1000);
    }
  });

  function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
  }

  let spans = $(".colorBox-content span");
  spans.each(function () {
    $(this).css("backgroundColor", randomColor());
  });

  spans.click(function (e) {
    let currentColor = $(e.target).css("backgroundColor");

    $("h1, h2,h3").css("color", currentColor);
    $(":root").css("--main-color", currentColor);
  });

  $(".loader").fadeOut(600, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
});

//sending data from the form
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);

      // Clear all inputs
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    });
});

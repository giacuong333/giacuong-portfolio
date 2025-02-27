$(document).ready(function () {
  // Smooth scrolling when clicking on navigation links
  $("nav > ul > li > a").click((event) => {
    event.preventDefault();

    $("nav > ul > li > a").removeClass("active");
    $(event.target).addClass("active");

    var targetId = $(event.target).attr("href");
    var targetElement = $(targetId);

    $(window).scrollTop(targetElement.position().top);
  });
});

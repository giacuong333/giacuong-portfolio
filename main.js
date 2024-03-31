$(document).ready(function () {
  // Function to update active class based on scroll position
  function updateActiveNav() {
    // get the current position
    var scrollPosition = $(window).scrollTop();

    $("nav > ul > li > a").each(function () {
      var targetId = $(this).attr("href");
      var targetElement = $(targetId);

      if (targetElement.position().top <= scrollPosition && targetElement.position().top + targetElement.outerHeight() >= scrollPosition) {
        $("nav > ul > li > a").removeClass("active");
        $(this).addClass("active");
      }
    });
  }

  // Smooth scrolling when clicking on navigation links
  $("nav > ul > li > a").click(function (e) {
    e.preventDefault();

    $("nav > ul > li > a").removeClass("active");
    $(this).addClass("active");

    var targetId = $(this).attr("href");
    var targetElement = $(targetId);

    $("html, body").animate(
      {
        scrollTop: targetElement.offset().top,
      },
      600
    );
  });

  // Update active class on initial page load
  updateActiveNav();

  // Update active class on scroll
  $(window).scroll(function () {
    updateActiveNav();
  });
});

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

  // Update active class on scroll
  $(window).scroll(() => {
    var scrollPosition = $(window).scrollTop();

    $("section").each(function () {
      var sectionTop = $(this).offset().top - 50;
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr("id");

      // Check if the current scroll position is within this section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all nav links
        $("nav > ul > li > a").removeClass("active");
        // Add active class to the corresponding nav link
        $(`nav > ul > li > a[href="#${sectionId}"]`).addClass("active");
      }
    });
  });
});

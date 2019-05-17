$(document).ready(function() {
  $(".sidenav").sidenav();
});

$(document).ready(function() {
  $(".carousel").carousel();

  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });

  $(".next").click(function() {
    $(".carousel").carousel("next");
  });
  $(".prev").click(function() {
    $(".carousel").carousel("prev");
  });
});

$(document).ready(function() {
  $(".materialboxed").materialbox();
});
$(document).ready(function() {
  $(".tabs").tabs();
});
$(document).ready(function() {
  $(".collapsible").collapsible();
});

//JQuery Module Pattern

// An object literal
var app = {
  init: function () {
    app.functionOne();
  },
  functionOne: function () {},
};
$("document").ready(function () {
  app.init();
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
  });

  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    groupCells: "80%",
    imagesLoaded: true,
    pageDots: false,
  });
});

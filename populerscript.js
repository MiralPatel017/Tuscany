
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left' data-aos='fade-left'><img src='./images/icon_ left arrow.png' /></i>",
        "<i class='fa fa-chevron-right' data-aos='fade-left'><img src='./images/icon_ right arrow.png' /></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },        // Mobile: 1 slide
        768: { items: 2 },      // Tablets: 2 slides
        1024: { items: 3 },     // 1024px: 3 slides
        1200: { items: 4 }      // Full screen: 4 slides
      }
    });
  });
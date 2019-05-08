window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

$(".owl-carousel").owlCarousel({
  autoplay: true,
  dots: false,
  nav: true,
  loop: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

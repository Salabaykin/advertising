document.addEventListener("DOMContentLoaded", function() {

  // About Us Swiper
  const aboutusSlide = document.querySelectorAll('.aboutus-slider.swiper-container .swiper-slide');
  if (document.documentElement.clientWidth > 991) {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      allowTouchMove: false,
      spaceBetween: 15,
      slidesPerView: 4
    });
  } else {
    var aboutusSwiper = new Swiper('.aboutus-slider.swiper-container', {
      speed: 400,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        991: {
          slidesPerView: 4,
          loop: false
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          loopFillGroupWithBlank: true,
          loop: true
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          loop: true
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loopFillGroupWithBlank: true,
          loop: true
        }
      }
    });
  }

});
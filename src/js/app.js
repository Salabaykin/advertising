document.addEventListener("DOMContentLoaded", function() {

  var configurationProblemsSwiper = new Swiper('.configuration-problems-slider.swiper-container', {
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  const costSlide = document.querySelectorAll('.articles__tabs.swiper-container .swiper-slide');
  if (costSlide.length <= 3 && document.documentElement.clientWidth < 991) {
    var configurationProblemsSwiper = new Swiper('.cost-slider.swiper-container', {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
  } else {
    var configurationProblemsSwiper = new Swiper('.cost-slider.swiper-container', {
      slidesPerView: 3,
      simulateTouch: false
    })
  }

});
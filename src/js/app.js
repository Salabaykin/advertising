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
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
        }
      }
    })
  } else {
    var configurationProblemsSwiper = new Swiper('.cost-slider.swiper-container', {
      slidesPerView: 3,
      simulateTouch: false
    })
  }

  // Menu 
  const navHeader = document.querySelector('.nav'),
        burgerMenu = document.querySelector('.burger-menu');

  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    navHeader.classList.toggle('active');
    document.body.classList.toggle('hidden');
  });

  // Modal 
  const modal = document.getElementById('modal'),
        buttonModalOpen = document.querySelectorAll('.button'),
        modalClose = document.querySelector('.modal-close');
 
  buttonModalOpen.forEach(item => {
    item.addEventListener('click', () => {
      modal.classList.toggle('open');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.toggle('open');
  });

});
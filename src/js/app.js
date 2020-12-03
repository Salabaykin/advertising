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
  const navBar = {
    navHeader: document.querySelector('.nav'),
    burgerMenu: document.querySelector('.burger-menu'),
    toggleNav: function() {
      navBar.burgerMenu.classList.toggle('active');
      navBar.navHeader.classList.toggle('active');
    }
  }

  navBar.burgerMenu.addEventListener('click', function() {
    navBar.toggleNav();
  });

  // Modal 
  const modal = {
    modal: document.getElementById('modal'),
    buttonModalOpen: document.querySelectorAll('.button'),
    modalClose: document.querySelector('.modal-close'),
    html: document.documentElement,
    marginSize: function() {
      return (window.innerWidth - document.documentElement.clientWidth);
    },
    modalWindow: document.querySelector('.modal__window'),
    closeModal: function() {
      modal.modal.classList.remove('open');
      modal.html.style.marginRight = "";
      document.body.classList.remove('hidden');
    },
    openModal: function() {
      modal.modal.classList.add('open');
      if (modal.marginSize()) {
        modal.html.style.marginRight = modal.marginSize() + "px";
      } 
      document.body.classList.add('hidden');
    } 
  }

  modal.modalClose.addEventListener('click', function() {
    modal.closeModal();
  });

  modal.buttonModalOpen.forEach(item => {
    item.addEventListener('click', () => {
      modal.openModal();
    });
  });
  
});
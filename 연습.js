// 마우스 휠 이벤트

$('.event').each(function () {
  $(this).on('wheel', function (evt) {
    evt.preventDefault();

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;
    const nextBox = this.nextElementSibling;
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      if (nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop;
      }
    } else {
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        return;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: 'smooth',
    });
  });
});

// 햄버거 메뉴

var menuButton = document.querySelector('.menu-button');
var openMenu = function () {
  swiper.slidePrev();
};
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true);
      }
    },
  },
});

// 스크롤 이벤트

$(document).ready(function() {
  const $counters = $(".scroll_on");
  const exposurePercentage = 100;
  const loop = true;

  $(window).on('scroll', function() {
      $counters.each(function() {
          const $el = $(this);
  
          const rect = $el[0].getBoundingClientRect();
          const winHeight = window.innerHeight;
          const contentHeight = rect.bottom - rect.top;

          if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
              $el.addClass('active');
          }
          if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
              $el.removeClass('active');
          }
      });
  }).scroll();
});
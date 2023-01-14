import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';

export function mainSlider() {
  var swiper1 = new Swiper('.main__swiper-1', {
    modules: [Pagination, Navigation, Autoplay],
    // loop: true,
    // slidesPerView: 'auto',

    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    slideToClickedSlide: true,
    speed: 500,

    navigation: {
      nextEl: '.main__btn-next',
      prevEl: '.main__btn-prev',
    },
    pagination: {
      el: '.main__pagination-js',
    },
  });

  var swiper2 = new Swiper('.main__swiper-2', {
    modules: [Pagination, Navigation, Autoplay],
    // loop: true,
    // slidesPerView: 'auto',

    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    slideToClickedSlide: true,
    speed: 500,

    navigation: {
      nextEl: '.main__btn-next',
      prevEl: '.main__btn-prev',
    },
    pagination: {
      el: '.main__pagination-js',
    },
  });

  const link1 = document.querySelector('.tab-slide-1');
  const link2 = document.querySelector('.tab-slide-2');
  const link3 = document.querySelector('.tab-slide-3');
  const link4 = document.querySelector('.tab-slide-4');
  const link5 = document.querySelector('.tab-slide-5');
  const link6 = document.querySelector('.tab-slide-6');
  const link7 = document.querySelector('.tab-slide-7');
  const link8 = document.querySelector('.tab-slide-8');
  const link9 = document.querySelector('.tab-slide-9');
  const link10 = document.querySelector('.tab-slide-10');

  if ((link1, link2, link3, link4, link5, link6, link7, link8, link9, link10)) {
    link1.addEventListener('mouseover', function () {
      swiper1.slideTo(0, 800);
    });
    link2.addEventListener('mouseover', function () {
      swiper1.slideTo(1, 800);
    });
    link3.addEventListener('mouseover', function () {
      swiper1.slideTo(2, 800);
    });
    link4.addEventListener('mouseover', function () {
      swiper1.slideTo(3, 800);
    });
    link5.addEventListener('mouseover', function () {
      swiper1.slideTo(4, 800);
    });
    link6.addEventListener('mouseover', function () {
      swiper2.slideTo(0, 800);
    });
    link7.addEventListener('mouseover', function () {
      swiper2.slideTo(1, 800);
    });
    link8.addEventListener('mouseover', function () {
      swiper2.slideTo(2, 800);
    });
    link9.addEventListener('mouseover', function () {
      swiper2.slideTo(3, 800);
    });
    link10.addEventListener('mouseover', function () {
      swiper2.slideTo(4, 800);
    });
  }

  let sliderContent1 = document.querySelector('.swiper');

  let imgContent1 = document.querySelector('.main__swiper-img-content');
  let sliderBtns1 = document.querySelectorAll('.main__btns-js');

  let textContent1 = document.querySelector('.main__swiper-content');
  let sliderPagination1 = document.querySelectorAll('.main__pagination-js');

  console.log(sliderContent1.offsetHeight);
  console.log(imgContent1.offsetHeight);
  console.log(textContent1.offsetHeight);

  const sliderBtnHeight = (sliderContent, imgContent, sliderBtns, textContent, sliderPagination) => {
    if ((sliderContent, imgContent, textContent)) {
      let slideEmpty = sliderContent.offsetHeight - (imgContent.offsetHeight + textContent.offsetHeight);

      let imgHeight = Math.floor(imgContent.offsetHeight / 2) + 'px';
      let textHeight = Math.floor(textContent.offsetHeight + slideEmpty + 30) + 'px';

      sliderBtns.forEach((item) => {
        item.style.top = imgHeight;
      });

      sliderPagination.forEach((item) => {
        item.style.bottom = textHeight;
      });
    }
  };

  sliderBtnHeight(sliderContent1, imgContent1, sliderBtns1, textContent1, sliderPagination1);
  // window.addEventListener(
  //   'resize',
  //   sliderBtnHeight(sliderContent1, imgContent1, sliderBtns1, textContent1, sliderPagination1)
  // );

  const tabsBtn = document.querySelectorAll('.tab__nav-btn');
  const tabsItems = document.querySelectorAll('.tab__items');
  if (tabsBtn) {
    tabsBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
          swiper1.autoplay.stop();
          swiper2.autoplay.start();
          tabsBtn.forEach(function (item) {
            item.classList.remove('active');
          });
          tabsItems.forEach(function (item) {
            item.classList.remove('active');
          });

          currentBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    });
  }
}

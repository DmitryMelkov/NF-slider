var swiper = new Swiper('.own-intro__swiper', {
  navigation: {
    nextEl: '.own-intro__btn-next',
    prevEl: '.own-intro__btn-prev',
  },
  pagination: {
    el: '.own-intro__pagination',
  },
});

const sliderBtnHeight = () => {
  const sliderContent = document.querySelector('.own-intro__swiper-slide');

  const imgContent = document.querySelector('.own-intro__swiper-img-content');
  const sliderBtns = document.querySelector('.own-intro__btns');

  const textContent = document.querySelector('.own-intro__swiper-content');
  const sliderPagination = document.querySelector('.own-intro__pagination');

  let slideEmpty = sliderContent.offsetHeight - (imgContent.offsetHeight + textContent.offsetHeight);

  let imgHeight = Math.floor(imgContent.offsetHeight / 2) + 'px';
  let textHeight = Math.floor(textContent.offsetHeight + slideEmpty + 20) + 'px';





  sliderBtns.style.top = imgHeight;
  sliderPagination.style.bottom = textHeight;
};

sliderBtnHeight();

window.addEventListener('resize', sliderBtnHeight);

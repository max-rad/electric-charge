const initIntroSlider = () => {
  const slider = document.querySelector('[data-slider="intro"]');

  if (!slider) {
    return;
  }

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
};

export {initIntroSlider};

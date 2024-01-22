const initCategoriesSlider = () => {
  const slider = document.querySelector('[data-slider="categories"]');

  if (!slider) {
    return;
  }

  const controls = document.querySelector('[data-buttons="categories"]');

  const controlPrev = controls.querySelector('[data-button-prev]');
  const controlNext = controls.querySelector('[data-button-next]');

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1279: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1439: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      prevEl: controlPrev,
      nextEl: controlNext,
    },
  });
};

export {initCategoriesSlider};

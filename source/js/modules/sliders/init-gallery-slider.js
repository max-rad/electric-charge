const initGallerySlider = () => {
  const slider = document.querySelector('[data-slider-gallery="main"]');
  const thumbs = document.querySelector('[data-slider-gallery="thumbs"]');

  if (!slider) {
    return;
  }

  const controls = document.querySelector('[data-buttons="thumbs"]');

  const controlPrev = controls.querySelector('[data-button-prev]');
  const controlNext = controls.querySelector('[data-button-next]');

  const swiperThumbs = new Swiper(thumbs, {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      prevEl: controlPrev,
      nextEl: controlNext,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 24,
        direction: 'horizontal',
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 20,
        direction: 'vertical',
      },
    }
  });

  const swiperMain = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: swiperThumbs,
    },
  });
};

export {initGallerySlider};

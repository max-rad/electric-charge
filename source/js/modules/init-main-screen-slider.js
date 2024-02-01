const initMainScreenSlider = () => {
  const sliderDesktop = document.querySelector('[data-slider="main-screen-desktop"]');
  const sliderMobile = document.querySelector('[data-slider="main-screen-mobile"]');
  const breakpointMedia = window.matchMedia('(max-width: 767px)');
  let swiperDesktop = null;
  let swiperMobile = null;

  if (!sliderDesktop || !sliderMobile) {
      return;
  }

  const pagination = document.querySelector('[data-pagination="main-screen"]');
  const paginationMobile = document.querySelector('[data-pagination="main-screen-mobile"]');

  const breakpointCheckerSlider = function () {
      if (breakpointMedia.matches) {
          if (swiperDesktop !== null) {
              swiperDesktop.destroy();
          }
          initMobileSlider();
      } else {
          if (swiperMobile !== null) {
              swiperMobile.destroy();
          }
          initDesktopSlider();
      }
      breakpointMedia.addListener(breakpointCheckerSlider);
  };

  function initDesktopSlider() {
      const swiperDesktop = new Swiper(sliderDesktop, {
          speed: 1200,
          slidesPerView: 1,
          watchProgress: true,
          autoplay: {
              delay: 6000,
          },
          loop: true,
          pagination: {
              el: pagination,
              clickable: true,
          },
      });
  }

  function initMobileSlider() {
      const swiperDesktop = new Swiper(sliderMobile, {
          speed: 1200,
          slidesPerView: 1,
          watchProgress: true,
          autoplay: {
              delay: 6000,
          },
          loop: true,
          pagination: {
              el: paginationMobile,
              clickable: true,
          },
      });
  }

  breakpointCheckerSlider();
};

export {initMainScreenSlider};

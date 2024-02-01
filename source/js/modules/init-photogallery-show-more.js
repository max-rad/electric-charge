const photogallery = document.querySelector('[data-photogallery-list]');
const button = document.querySelector('[data-photogallery-button]');
const breakpointMediaTablet = window.matchMedia('(max-width: 990px)');
const breakpointMediaMobile = window.matchMedia('(max-width: 767px)');
let photogalleryScrollHeight;
let gap;
let offsetHeight;
let photogalleryHeight;

const breakpointChecker = () => {
  if (breakpointMediaMobile.matches) {
      offsetHeight = 1058;
      gap = 4;
  } else if (breakpointMediaTablet.matches) {
      offsetHeight = 781;
      gap = 8;
  } else {
      offsetHeight = 1204;
      gap = 12;
  }
  photogalleryScrollHeight = photogallery.scrollHeight;// + gap;
  photogalleryHeight = offsetHeight;
  photogallery.style.maxHeight = photogalleryHeight + 'px';

  if (button) {
      if (button.innerText === 'Свернуть'.toUpperCase()) {
          button.innerText = 'Загрузить еще...';
      }
  }

  breakpointMediaTablet.addListener(breakpointChecker);
  breakpointMediaMobile.addListener(breakpointChecker);
};

const initPhotogalleryShowMore = () => {
  if (!photogallery) {
      return;
  }

  const photoLength = photogallery.querySelectorAll('a').length;
  const photogalleryOffsetHeight = photogallery.offsetHeight;
  photogalleryHeight = photogalleryOffsetHeight;

  if (photoLength <= 12) {
      button.style.display = 'none';
  } else {
      button.addEventListener('click', (evt) => {
          evt.preventDefault();

          photogalleryHeight += photogalleryOffsetHeight + gap;
          photogallery.style.maxHeight = photogalleryHeight + 'px';

          if (photogalleryHeight > photogalleryScrollHeight && button.innerText === 'Свернуть'.toUpperCase()) {
              photogallery.style.maxHeight = photogalleryOffsetHeight + 'px';
              photogalleryHeight = photogalleryOffsetHeight;
              button.innerText = 'Загрузить еще...';
              document.getElementById('foto').scrollIntoView();
          } else if (photogalleryHeight >= photogalleryScrollHeight || (photogalleryHeight > photogalleryScrollHeight && button.innerText === 'Смотреть еще'.toUpperCase())) {
              photogallery.style.maxHeight = 'none';
              button.innerText = 'Свернуть';
          }
      });
  }
  breakpointChecker();
};

export {initPhotogalleryShowMore};

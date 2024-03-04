const showMore = document.querySelector('[data-show-more]');
const breakpointMedia = window.matchMedia('(max-width: 1023px)');

let list = null;
let items = null;
let button = null;

const breakpointChecker = () => {
  const itemsCount = items.length;

  if (breakpointMedia.matches) {
    if (itemsCount <= 4) {
      button.style.display = 'none';
    } else {
      button.style.display = '';
    }
  } else {
    if (itemsCount <= 8) {
      button.style.display = 'none';
    } else {
      button.style.display = '';
    }
  }
  breakpointMedia.addListener(breakpointChecker);
};

const initShowMore = () => {
  if (!showMore) {
    return;
  }

  list = showMore.querySelector('[data-show-more="list"]');
  button = showMore.querySelector('[data-show-more="button"]');

  items = list.querySelectorAll('[data-show-more="item"]');

  breakpointChecker();

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (list.classList.contains('is-open')) {
      list.classList.remove('is-open');
      button.innerHTML = 'Смотреть все';
      showMore.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      list.classList.add('is-open');
      button.innerHTML = 'Свернуть';
    }
  });
};

export {initShowMore};

const menu = document.querySelector('[data-menu]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const breakpointMedia = window.matchMedia('(min-width: 990px)');

const openMenu = () => {
  menu.classList.add('is-active');
};

const closeMenu = () => {
  menu.classList.remove('is-active');
};

const breakpointCheckerHeader = () => {
  if (breakpointMedia.matches) {
    if (menu.classList.contains('is-active')) {
      closeMenu();
    }
  }
  breakpointMedia.addListener(breakpointCheckerHeader);
};

const initHeaderMenu = () => {
  if (!menu) {
    return;
  }

  const links = menu.querySelectorAll('.menu-item a');

  if (menuToggle) {
    menuToggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (menu.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  breakpointCheckerHeader();
};

export {initHeaderMenu};

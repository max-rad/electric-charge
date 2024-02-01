const initInputLabel = () => {
  const items = document.querySelectorAll('[data-date]');

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    const label = item.querySelector('[data-date-label]');
    const input = item.querySelector('[data-date-input]');

    if (input.value) {
      label.style.display = 'none';
      input.style.color = '#ffffff';
    } else {
      label.style.display = 'block';
      input.style.color = 'transparent';
    }

    input.addEventListener('focus', (evt) => {
      evt.preventDefault();

      label.style.display = 'none';
      input.style.color = '#ffffff';
    });

    input.addEventListener('blur', (evt) => {
      evt.preventDefault();

      if (input.value) {
        label.style.display = 'none';
        input.style.color = '#ffffff';
      } else {
        label.style.display = 'block';
        input.style.color = 'transparent';
      }
    });
  });
};

export {initInputLabel};

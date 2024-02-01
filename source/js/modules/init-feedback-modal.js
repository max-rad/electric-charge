const initFeedbackModal = () => {
  const modal = document.querySelector('[data-modal="feedback"]');

  if (!modal) {
    return;
  }

  const overlay = modal.querySelector('[data-modal-overlay]');
  const closeButton = modal.querySelector('[data-modal-close]');

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-open-modal="feedback"]')) {
      return;
    }

    evt.preventDefault();

    modal.classList.add('is-active');
  });

  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
    }
  });

  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
    }
  });
};

export {initFeedbackModal};

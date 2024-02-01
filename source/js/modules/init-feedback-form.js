const initFeedbackForm = () => {
  const modal = document.querySelector('[data-modal="feedback"]');

  if (!modal) {
    return;
  }

  const serviceName = modal.querySelector('[data-feedback-service-name]');
  const serviceInfo = modal.querySelector('[data-feedback-service-info]');

  document.addEventListener('click', (evt) => {
    const target = evt.target;

    if (!target.closest('[data-cost-item]')) {
      return;
    }

    const item = target.closest('[data-cost-item]');
    serviceName.value = item.querySelector('[data-cost-name]').innerHTML;

    if (item.querySelector('[data-cost-info]')) {
      const info = item.querySelector('[data-cost-info]').querySelectorAll('li');
      info.forEach((element) => {
        serviceInfo.value += element.innerHTML + '\n';
      });
    }
  });
};

export {initFeedbackForm};

const initRecaptcha = () => {
  const forms = document.querySelectorAll('[data-form]');

  if (!forms.length) {
    return;
  }

  forms.forEach((form) => {
    const response = form.querySelector('[data-recaptcha-response]');

    grecaptcha.ready(() => {
      grecaptcha.execute('6LdmI4YpAAAAABJ0YUZS-VzsryFK2f56McQ2kPPt', {action: 'submit'}).then((token) => {
        response.value = token;
      });
    });
  });
};

export {initRecaptcha};

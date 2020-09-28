const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputValidCheck);

function onInputValidCheck(event) {
  if (
    event.currentTarget.getAttribute('data-length') >
      event.currentTarget.value.length ||
    event.currentTarget.getAttribute('data-length') <
      event.currentTarget.value.length
  ) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.replace('invalid', 'valid');
  }
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);

function onDecrementBtn(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtn(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

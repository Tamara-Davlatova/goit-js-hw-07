const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createElements = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
});
ingredientsListEl.append(...createElements);
console.log(ingredientsListEl);

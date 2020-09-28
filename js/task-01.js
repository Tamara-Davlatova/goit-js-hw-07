const itemEl = document.querySelectorAll('.item');
console.log(`В списке ${itemEl.length} категории.`);
const categoryFn = array => {
  array.forEach(item => {
    const title = item.querySelector(`h2`);
    const itemElement = item.querySelectorAll(`li`);
    const message = `Категория: ${title.textContent}. Количество элементов ${itemElement.length}`;
    console.log(message);
  });
};
categoryFn(itemEl);

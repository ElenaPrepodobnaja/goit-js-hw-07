const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const createProductCard = (product) => {
  const createItem = document.createElement("li");
  createItem.textContent = product;
  return createItem;
};

const createList = document.querySelector("#ingredients");
const productCards = ingredients.map((product) => createProductCard(product));
console.log(productCards);
createList.append(...productCards);
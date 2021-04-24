const elementsByTagName = document.querySelector("p");

const ulCategories = document.createElement('ul');
ulCategories.id = 'categories';

const liCategories = document.createElement('li');
liCategories.classList.add('item');

const hCategories = document.createElement('h2');
hCategories.textContent = 'Животные';

const ulItems = document.createElement('ul');
function getListContent() {
  let result = [];
const animals = ['Кот', 'Хомяк', 'Лошадь', 'Попугай'];
  for (let i = 0; i <= animals.length-1; i++) {
    let li = document.createElement('li');
    li.append (animals[i]);
    result.push(li);
    }
  
  return result;
  
}
ulItems.append(...getListContent());

liCategories.appendChild(hCategories);
liCategories.appendChild(ulItems);
ulCategories.appendChild(liCategories);

const liCategoriesProducts = document.createElement('li');
liCategoriesProducts.classList.add('item');

const hCategoriesProducts = document.createElement('h2');
hCategoriesProducts.textContent = 'Продукты';

const ulItemsProducts = document.createElement('ul');
function getListContentProducts() {
  let result = [];
const products = ['Хлеб', 'Петрушка', 'Творог'];
  for (let i = 0; i <= products.length-1; i++) {
    let li = document.createElement('li');
    li.append (products[i]);
    result.push(li);
    }
  
  return result;
  
}
ulItemsProducts.append(...getListContentProducts());

liCategoriesProducts.appendChild(hCategoriesProducts);
liCategoriesProducts.appendChild(ulItemsProducts);
ulCategories.appendChild(liCategoriesProducts);

const liCategoriesTechnologies = document.createElement('li');
liCategoriesTechnologies.classList.add('item');

const hCategoriesTechnologies = document.createElement('h2');
hCategoriesTechnologies.textContent = 'Технологии';

const ulItemsTechnologies = document.createElement('ul');
function getListContentTechnologies() {
  let result = [];
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
  for (let i = 0; i <= technologies.length-1; i++) {
    let li = document.createElement('li');
    li.append (technologies[i]);
    result.push(li);
    }
  
  return result;
  
}
ulItemsTechnologies.append(...getListContentTechnologies());

liCategoriesTechnologies.appendChild(hCategoriesTechnologies);
liCategoriesTechnologies.appendChild(ulItemsTechnologies);
ulCategories.appendChild(liCategoriesTechnologies);

document.body.append(elementsByTagName, ulCategories , );
const categoriesItem = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItem.length} категорий`);
categoriesItem.forEach((item) => {
  const categoriesHeader = item.querySelector("h2").textContent;
  const subCategoriesItem = item.querySelector("ul").children.length;
  console.log(
    `Категория: ${categoriesHeader} \nКоличество элементов: ${subCategoriesItem}`
  );
});
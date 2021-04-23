const elementsByTagName = document.querySelectorAll("p");

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
// В HTML есть список категорий `ul#categories`.

// ```html
/* <ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>
Products
    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>
Technologies
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul> */
// ```

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.

// Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).

// Например для первой категории получится:

// - Категория: Животные
// - Количество элементов: 4


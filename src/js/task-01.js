
const categoriesItem = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItem.length} категорий`);
categoriesItem.forEach((item) => {
  const categoriesHeader = item.querySelector("h2").textContent;
  const subCategoriesItem = item.querySelector("ul").children.length;
  console.log(
    `Категория: ${categoriesHeader} \nКоличество элементов: ${subCategoriesItem}`
  );
});
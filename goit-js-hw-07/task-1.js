const categoriesRef = document.querySelector("#categories");
console.log(`TASK 1: В списке ${categoriesRef.children.length} категории.`);

const itemClassRef = categoriesRef.querySelectorAll(".item");
itemClassRef.forEach(function (item) {
  console.log("TASK 1: Категория:", item.querySelector("h2").textContent);
  console.log(
    "TASK 1: Количество элементов:",
    item.querySelector("ul").children.length
  );
});

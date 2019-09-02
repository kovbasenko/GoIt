const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listItemArray = ingredients.map(function (ing) {
  const li = document.createElement("li");
  li.textContent = ing;
  return li;
});

document.querySelector("#ingredients").prepend(...listItemArray);

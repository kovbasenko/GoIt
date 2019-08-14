"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of products) {
    if (product.name === productName) {
      return `Total price: ${product.price * product.quantity} credits`;
    }
  }
  return "Product is not available";
};

//? Ф-ция возвращает стоимость обьекта "Name" = цена * кол-во

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "asdsadas")); // Product is not available

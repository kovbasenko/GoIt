"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число:");
  if (isNaN(Number(input)) === true) {
    alert("Это не число!");
  } else if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total = total + numbers[i];
}

console.log(`Общая сумма чисел равна: ${total}`);

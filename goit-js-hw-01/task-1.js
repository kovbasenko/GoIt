// =================TASK 1

const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// =================TASK 2

const total = 100;
const ordered = 20;

total < ordered
  ? console.log("На складе недостаточно товаров!")
  : console.log("Заказ оформлен, с вами свяжется менеджер");

// =================TASK 3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let password = prompt("Введите пароль!");

switch (password) {
  case null:
    console.log("Отменено пользователем!");
    break;

  case "jqueryismyjam":
    console.log("Добро пожаловать!");
    break;

  default:
    console.log("Доступ запрещен, неверный пароль!");
    break;
}

// =================TASK 4

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let quantity = prompt("Введите желаемое количество дроидов:");

if (quantity !== null) {
  totalPrice = pricePerDroid * quantity;
  if (totalPrice <= credits) {
    totalPrice = pricePerDroid * quantity;
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов`
    );
  } else console.log("Недостаточно средств на счету!");
} else console.log("Отменено пользователем!");

// =================TASK 5

const japanPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const yamaikaPrice = 120;

let countrie = prompt("Введите страну для доставки!");

if (countrie !== null) {
  countrie = countrie.toLowerCase();
  switch (countrie) {
    case "китай":
      console.log(`Доставка в Китай будет стоить ${japanPrice} кредитов`);
      break;

    case "чили":
      console.log(`Доставка в Чили будет стоить ${chiliPrice} кредитов`);
      break;

    case "австралия":
      console.log(
        `Доставка в Австралию будет стоить ${australiaPrice} кредитов`
      );
      break;

    case "индия":
      console.log(`Доставка в Индию будет стоить ${indiaPrice} кредитов`);
      break;

    case "ямайка":
      console.log(`Доставка в Ямайку будет стоить ${yamaikaPrice} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
} else console.log("Отменено пользователем!");

// =================TASK 6

let total = 0;
let input = 0;

while (input != null) {
  input = prompt("Введите число:");
  isNaN(Number(input)) === true
    ? alert("Это не число!")
    : (total = total + Number(input));
}

alert(`Общая сумма чисел равна ${total}`);

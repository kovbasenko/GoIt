"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const { DEPOSIT, WITHDRAW } = Transaction;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   */
  createTransaction(amount, type) {
    this.transactions = [
      ...this.transactions,
      { id: this.transactions.length + 1, type, amount },
    ];
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   */
  deposit(amount) {
    if (isNaN(amount) !== true) {
      this.createTransaction(amount, "deposit");
      this.balance += amount;
      console.log(`Account credited to ${amount} credits`);
    } else console.log("Enter number!");
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   */
  withdraw(amount) {
    if (amount <= this.balance && amount > 0) {
      this.createTransaction(amount, "withdraw");
      this.balance -= amount;
      console.log(`You are deducted from the account ${amount} credits`);
    } else
      console.log("Transaction FAILED! Insufficient account balance!"),
        this.createTransaction(amount, "FAILED: withdraw");
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Your balance: ${this.balance} credits`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return console.log(`Your transaction:`), console.log(transaction);
      }
    }
    console.log("No such transaction.");
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let counter = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        counter += 1;
      }
    }
    console.log(`The number of transactions of type ${type}: ${counter}`);
  },
};

//* Buttons

document.querySelector(".deposit-button").addEventListener("click", () => {
  account.deposit(parseInt(document.querySelector(".deposit-input").value));
  document.querySelector(".deposit-input").value = "";
});

document.querySelector(".withdraw-button").addEventListener("click", () => {
  account.withdraw(parseInt(document.querySelector(".withdraw-input").value));
  document.querySelector(".withdraw-input").value = "";
});

document.querySelector(".balance-button").addEventListener("click", () => {
  account.getBalance();
});

document.querySelector(".details-button").addEventListener("click", () => {
  account.getTransactionDetails(
    parseInt(document.querySelector(".details-input").value)
  );
  document.querySelector(".details-input").value = "";
});

document
  .querySelector(".total-deposit-button")
  .addEventListener("click", () => {
    account.getTransactionTotal(DEPOSIT);
  });

document
  .querySelector(".total-withdraw-button")
  .addEventListener("click", () => {
    account.getTransactionTotal(WITHDRAW);
  });

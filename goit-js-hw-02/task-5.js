"use strict";

const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes("spam") === true) {
    return true;
  } else if (message.includes("sale") === true) {
    return true;
  } else return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

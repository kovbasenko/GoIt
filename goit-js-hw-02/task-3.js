"use strict";

const findLongestWord = function (string) {
  let largestWord = 0;
  let largestWordIndex = 0;
  const array = string.split(" ");
  for (let i = 0; i < array.length; i += 1) {
    const elementLength = array[i].length;
    if (elementLength > largestWord) {
      largestWord = elementLength;
      largestWordIndex = i;
    }
  }
  return `Largest element : ${array[largestWordIndex]}`;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

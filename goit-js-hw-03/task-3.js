"use strict";

const findBestEmployee = function (employees) {
  let mostTasks = 0;
  let result = 0;
  for (const employ in employees) {
    if (employees[employ] > mostTasks) {
      mostTasks = employees[employ];
      result = `Best employee: ${employ}`;
    }
  }
  return result;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

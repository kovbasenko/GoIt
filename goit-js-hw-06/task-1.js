import users from "./users.js";

//? TASK 1

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log("TASK 1: ", getUserNames(users));
[
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
];

//? TASK 2

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log("TASK 2: ", getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//? TASK 3

const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log("TASK 3: ", getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//? TASK 4

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log("TASK 4: ", getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//? TASK 5

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log("TASK 5: ", getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log("TASK 5: ", getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//? TASK 6

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log("TASK 6: ", getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log("TASK 6: ", getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//? TASK 7

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => (acc += user.balance), 0);
};

console.log("TASK 7: ", calculateTotalBalance(users)); // 20916

//? TASK 8

const getUsersWithFriend = (users, friendName) => {
  return users.reduce(
    (acc, user) =>
      user.friends.includes(friendName)
        ? (acc = [...acc, user.name])
        : [...acc],
    []
  );
};

console.log("TASK 8: ", getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log("TASK 8: ", getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//? TASK 9

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((first, second) => first.friends.length - second.friends.length)
    .reduce((acc, user) => [...acc, user.name], []);
};

console.log("TASK 9: ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//? TASK 10

const getSortedUniqueSkills = (users) => {
  return users
    .reduce(function (acc, user) {
      user.skills.forEach((skill) => {
        if (!acc.includes(skill)) {
          acc = [...acc, skill];
        } else acc = [...acc];
      });
      return acc;
    }, [])
    .sort();
};

console.log("TASK 10: ", getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

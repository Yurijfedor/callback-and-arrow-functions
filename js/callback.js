// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");

//

// const numbers = [5, 10, "jnj", 15, 20, "jdsnvdsj", 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   //   console.log(`${index * number}`);
//   if (isNaN(number)) {
//     console.log(`зачення ${number} не є числом`);
//     return;
//   }
//   console.log(number);
// });

// const add = (a, b, c) => a + b + c;

// const result = add(3, 5, 7) + 10;
// console.log(result);

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];
// const sortedByAscendingScore = [...students];
// console.log(sortedByAscendingScore);

// function foo(callback) {
//   callback(10);
// }

// function logger(value) {
//   console.log(value);
// }
// foo(logger);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!pizzaPalace.pizzas.includes(pizzaName)) {
//       return onError(pizzaName);
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Ultracheese", makePizza, onOrderError));
// console.log(pizzaPalace.order("big", makePizza, onOrderError));
// console.log(pizzaPalace.order("zfmbgsjkdbn", makePizza, onOrderError));
// ---------------------------------------------------------------------------------------------------------------------------------------

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//       return;
//     }
//     newArray.push(element);
//   });
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// const series = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// changeEven(series, 10);
// ----------------------------------------------------------------------------------------------------------------------------------------

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// const getUsersWithFriend = (users, friendName) => {
//   const getUsersFriends = users.filter((user) =>
//     user.friends.includes(friendName)
//   );
//   return getUsersFriends;
// };

// getUsersWithFriend(users, "Briana Decker");
// console.log(getUsersWithFriend(users, "Briana Decker"));

// ------------------------------------------------------------------------------------------------------------------------------------------------------

const getTotalFriendCount = (users) => {
  return users
    .flatMap(({ friends }) => friends.length)
    .reduce((totalCountFriend, count) => totalCountFriend + count, 0);
};

getTotalFriendCount(users);
console.log(getTotalFriendCount(users));

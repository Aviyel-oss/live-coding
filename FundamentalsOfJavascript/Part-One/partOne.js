// what is variables ?

// var, let and const

// var name = "joshua"; //
// let firstName = "pramit";
// const programmingLanguage = "javaScript";

// console.log(name);

// // the message can be strings,arrays, objects and booleans

// // primitive data types

// // strings
// let thisStrings = ""; // single quote or a double quotes

// let templateStr = `this is also a string`; // template literals (template strings)

// // Numbers

// let age = 100;
// let ageFloat = 10.1;

// // Airthmatic operations in JavaScript

// console.log("Add");

// console.log(1 + 1);

// console.log("Substract");

// console.log(10 - 5);

// console.log("Divide");

// console.log(10 / 5);

// console.log("Multiply");

// console.log(5 * 5);

// booleans
// "Either true or false

// let isOnline = true;
// let isOffline = false;

// undefined -> It simply represent the lack of defined value

// let anotherName;

// console.log(anotherName);

// null -> Null is simply an absense of a value

// let b = null;

// console.log(b);

// non -primitive data types

// objects

// const information = {
//   name: "Joshua",
//   isOnline: true,
//   age: 19,
// };

// console.log(information.firstName);  Err = undefined

// delete information.isOnline;

// information.age = 1000;

// console.log(information);

// const car = {
//   name: "Lambo",
//   color: "orange",
//   numberPlate: 1345263738,
// };

// for (let key in car) {
//   console.log(`${key} :${car[key]}`);
// }

// Passing an object as an arguments

// const age = 10;
// const information = { name: "joshua" };

// const changeObjArgs = (ag, obj) => {
//   ag = 7;
//   obj.name = "Pramit";
// };

// changeObjArgs(age, details);

// console

// arrays
// functions
// it should take some input and return output where there is obvisous relationship between input and output

// Function decleartion

// function sub(a, b) {
//   return;
//   a - b;
// }

// }
// console.log(sub);

// console.log(sub(1, 2));

// function expression
// the function keyword can be used to define function inside an expression
// These types of function can be anonymous

// const add = function (a, b) {
//   return a + b;
// };

// let addSomething = add(1, 2);

// console.log(addSomething);

// Immediately invoked function expression(IIFE)

// (function (x = 2) {
//   console.log(`${x * x}`);
//   console.log(`This is immidiately invoked`);
// })();

// Arrays

// const stringNameArrays = ["my", "name", "is", "thanos"];
// const numArray = [1, 2, 3, 4, 5, 6, 7];

// mixed

// const mixedArrays = [1, "my", 2, "name", 3, "is", 4, "thanos"];

// Array elements are arranged by an index value

// index value always starts with 0

// console.log(marvelHeroes);

// check an length of an array

// let arrLength = marvelHeroes.length;

// console.log(arrLength);

// let firstMarvelHeroes = marvelHeroes[0];
// let firstDcHeroes = dcHeroes[0];

// console.log(firstMarvelHeroes);
// console.log(firstDcHeroes);

// To access the last items of an arrays

// let lastMarvelHeroes = marvelHeroes[marvelHeroes.length - 1];

// console.log(lastMarvelHeroes);

// loop an array

// const dcHeroes = ["superman", "batman", "wonderwoman"];

// marvelHeroes.forEach(function (item, index) {
//   console.log(item, index);
// });

//  Add an item to an end of an arrays

// let newArray = marvelHeroes.push("captain america");

// console.log(marvelHeroes);

// removes from the last

// let poppingOutArray = marvelHeroes.pop();

// console.log(marvelHeroes);

// add to the start
// adds to the front of an array
// const marvelHeroes = ["Thor", "captainmarvel", "hulk"];

// let addToStartArray = marvelHeroes.unshift("IronMan");

// console.log("unshift", marvelHeroes);

// let addToLastStartArray = marvelHeroes.shift();

// console.log("shift", marvelHeroes);

// console.log("add to start", marvelHeroes);

// let removeFromStartOfAnArray = marvelHeroes.shift();

// console.log("remove from start", marvelHeroes);

// finding the idex of an item in an array

// let position = marvelHeroes.indexOf("captainmarvel");

// console.log(position);

//

// Conditionals
// conditional statements controls the behaviour and determines wheather or not a piece of code can run or not

// if- statement

// if the expression is truthy then only the code executes

// const isOnline = true;

// if (isOnline) {
//   console.log("You are connected to the internet");
// }

// else block executes if the "if" condition fails

// const isOnline = true;

// if (isOnline) {
//   console.log("You are connected to the internet");
// } else {
//   console.log("You are not connected to the internet");
// }

// switch-case statements

// the switch statement is used to perform different actions based upon different conditions

// - switch is evaluated only once
// - values of the expression arecompared with each case
// - if there is a match the code block gets executed
// if there is no match the default code block gets executed

// const foobar = "barrrrrr";

// switch (foobar) {
//   case "foo": {
//     let x = 20;
//     console.log(x + 20);
//     break;
//   }
//   case "bar": {
//     let y = 30;
//     console.log(y + 30);
//     break;
//   }
//   default: {
//     console.log("YESSSS!!!");
//   }
// }

// OPERATORS
// comparison OPERATORS

// === strict equal
// !== strict not equal
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// console.log(2 > 3); // false
// console.log(7 < 1); //false
// console.log(2 >= 2); // true
// console.log(1 === 1); // true
// console.log(1 == 1); // true
// console.log(1 === 2); // false

// const name = "bineeth";

// const nameTwo = "joshua";
// console.group("strings");
// console.log(name == "bineeth"); // true
// console.log(name == nameTwo); // false
// console.log(name == nameTwo.toLowerCase()); // false
// console.groupEnd();

// const firstNumber = 60;
// const secondNumber = 50;

// console.group("numbers");
// console.log(firstNumber > secondNumber); //  trues
// console.log(firstNumber < secondNumber); // false
// console.log(firstNumber >= secondNumber); // true
// console.log(firstNumber <= secondNumber); // false
// console.log(firstNumber === secondNumber); // false
// console.log(firstNumber !== secondNumber); // true
// console.groupEnd();

// Terenary operator

// "condition ? expression_IF_IT_is_TRUE : expression_IF_IT_is_FALSE"

// const age = 100;

// console.log(age === 100 ? "Correct" : "Incorrect");

// logical operator

// logical OR ( || ) operator
//              A         B       A || B
// console.log(false || false); // false
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(true || true); // true

// logical AND operator (&&) operator

//              A         B       A && B
// console.log(false && false); // false
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(true && true); // true

// LOOPS

// for loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// changing an iteration

// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("two");
//   }
//   console.log(i);
// }

//NOTE: the continue statement is used to skip the rest of the code block and continue with the next iteration

// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("two");
//     continue;
//   }
//   console.log(i);
// }

// NOTE: break => it simply breaks the loop

// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("two");
//     break;
//   }
//   console.log(i);
// }

// loop through the array using old method

// const name = ["bineeth", "joshua", "pramit", "sobin"];

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// const nameTwo = ["bineeth", "joshua", "pramit", "sobin"];

// nameTwo.forEach((nam, index) => {
//   console.log(`${nam}, ${index}`);
// });

// map method

// const users = [
//   { id: 1, name: "bineeth" },
//   { id: 2, name: "joshua" },
//   { id: 3, name: "pramit" },
//   { id: 4, name: "jsew2" },
// ];

// const ids = users.map((user) => {
//   return user.id;
// });

// console.log(ids);

// while and do while loops

// Endless loops

// for in loops

// for of loops

// break statements

// continue statement

// labeled statement

// retrun statement

// retrun without the value

// return with the value
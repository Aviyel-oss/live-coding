# Fundamentals and Baiscs of JavaScript [Part-Two]

# Conditionals

Conditional statements control behavior and determine whether or not pieces of code can run.

## If-statement

- If the expression is truthy then only the code executes

```
const isOnline = true;

if(isOnline){
console.log("Thanos is Online")
}

```

## else statement

- else block executes if the "if" condition fails.

```
const isOnline = false;

if(isOnline){
console.log("Thanos is Online")
} else{
console.log("Thanos is Not Online")
}

```

## If-else statement

```
const age = 100;

// equal to
if (age == "100") {
  console.log("true");
} else {
  console.log("wrong");
}

// Not equal to
if (age != 100) {
  console.log("true");
} else {
  console.log("wrong");
}

//NOTE equal to Value and type
if (age === 100) {
  console.log("true");
} else {
  console.log("wrong");
}

// Not equal to Value and type
if (age === 100) {
  console.log("true");
} else {
  console.log("wrong");
}
// Testing if the age is undefined
if (typeof age !== "undefined") {
  console.log(`Your age is ${age}`);
} else {
  console.log(`Either you died or you are immortal`);
}

// Greater than or less than
if (age >= 100) {
  console.log("true");
} else {
  console.log("wrong");
}
if (age < 100) {
  console.log("true");
} else {
  console.log("wrong");
}

// If Else statement
const color = "purple";

if (color === "red") {
  console.log("Color is red");
} else if (color === "green") {
  console.log("Color is green");
} else {
  console.log("Color is Neither red nor green");
}

// LOGICAL Operator

// Ampersand operator
const name = "pramit";
const hisAge = 23;

if (hisAge > 0 && hisAge < 20) {
  console.log(`${name} is a Teenager`);
} else if (hisAge > 20 && hisAge < 30) {
  console.log(`${name} is in his Twenties`);
} else {
  console.log("He is OLD");
}

// OR operator
if (hisAge > 16 || hisAge < 25) {
  console.log(`${name} he can join the army`);
} else {
  console.log(`${name} cannot run in race`);
}

// TERENARY OPerator
console.log(hisAge === 23 ? "Correct" : "Incorrect");

// Without braces
if (hisAge > 16 || hisAge < 25) console.log(`${name} he can join the army`);
else console.log(`${name} cannot run in race`);
```

## switch-case statement

The switch statement is used to perform different actions based on different conditions.

- switch is evaluated once.
- value of the expression is compared with each case.
- if there is a match the code block gets executed.
- if there is not no match the default code block gets executed.

```
const foobar = "bar";

switch (foobar) {
  case "foo": {
    let x = 60;
    console.log(x + 9);
    break;
  }
  case "bar": {
    let y = 400;
    console.log(y + 20);
    break;
  }
  default: {
    console.log("REEEE!!!!!!!!!");
  }
}

```

## Comparison operator

- compares two value and return either true or false

```
// comparisons operator in javascript

const name = "pramit";
const name2 = "PRAMIT";

console.group("strings");
console.log(name == "pramit"); // true
console.log(name == name2); //false
console.log(name == name2.toLowerCase());
console.groupEnd();

// numbers
const firstNumber = 69;
const secondNumber = "69";

console.group("numbers");
console.log(firstNumber == secondNumber); // true
console.log(firstNumber === secondNumber); // false
console.log(firstNumber != secondNumber); //false
console.log(firstNumber !== secondNumber); //true

console.groupEnd();

// booleans

let yolo;
let nothing = null;

console.group("booleans");
console.log(Boolean("")); //false
console.log(Boolean("this")); //true
console.log(Boolean(yolo)); //false
console.log(Boolean(nothing)); //false
console.log(Boolean({})); //true
console.log(Boolean([])); //true

console.groupEnd();

// objects and arrays

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [1, 2, 3, 4, 5, 6];
const obj1 = { name: "pramit" };
const obj2 = { name: "pramit" };

console.group("objects and arrays");
console.log(array1 == array2); // false
console.log(obj1 == obj2); // false
console.log(array1 === array2); // false
console.log(obj1 === obj2); // false

console.groupEnd();


// AND and OR operator

console.group("And");

console.log(Boolean("true_") && Boolean("true_")); // true
console.log(Boolean("true_") && Boolean("")); // false
console.log(Boolean("") && Boolean("true")); // false
console.log(Boolean("") && Boolean("")); // false

console.groupEnd();

console.group("OR");

console.log(Boolean("true_") || Boolean("true_")); // true
console.log(Boolean("true_") || Boolean("")); // true
console.log(Boolean("") || Boolean("true")); // true
console.log(Boolean("") || Boolean("")); // false

console.groupEnd();

```

## Ternary operator

It's an operator which takes three operands: a condition followed by a question mark (?), and then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

> condition ? expressionIfTrue : expressionIfFalse

```
const age = 230

console.log(age === 230 ? "Correct" : "Incorrect");

```

## Logical OR (||) operator

```
false || false      //  false
false || true       // true
true || false      //  true
true || true       // true

```

## Logical AND (&&) operator

```
false && false      //  false
false && true       // false
true && false      //  false
true && true       // true

```

# Loops

#### For loops

```
// Loops and Iteration

// For Loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// changing iteration
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log("Two");
  }
  console.log(i);
}

//NOTE continue => It keep on cotinuing the loop
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log("Two");
    continue;
  }
  console.log(i);
}

//NOTE breaks => It breaks the loop
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    console.log("Two");
    break;
  }
  console.log(i);
}

// Looping through arrays

const names = ["pramit", "ram", "shyam", "hari", "krishna", "gopal"];

for (let a = 0; a < names.length; a++) {
  console.log(names[a]);
}

//NOTE Looping through arrays using forEach

const namesTwo = ["pramit", "ram", "shyam", "hari", "krishna", "gopal"];

namesTwo.forEach((nam, index, array) => {
  console.log(`${index} : ${nam}`);
  console.log(array);
});

//NOTE Looping through arrays of objects using map

const users = [
  { id: 1, name: "pramit" },
  { id: 2, name: "marattha" },
  { id: 3, name: "ram" },
  { id: 4, name: "hari" },
  { id: 5, name: "gopal" },
  { id: 6, name: "krishna" },
  { id: 7, name: "shanker" },
  { id: 8, name: "chaudhary" },
];

const ids = users.map((user) => {
  return user.id;
});

console.log(ids);

//NOTE for in loop used in objects

const userBase = {
  firstName: "pramit",
  lastName: "marattha",
  age: 23,
};

for (let x in userBase) {
  console.log(`${x} :==> ${userBase[x]}`);
}

```

#### While Loops and do-while

```
// while loops

let i = 0;
let j = 0;

while (i < 10) {
  console.log("Numbers " + i);
  i++;
}

// Do while loops
do {
  console.log("Numbers " + j);
  j++;
} while (j < 10);


```

#### Endless loop

```
for (;;) {
  console.log("Stuck in an endless loop");
}

while (true) {
  console.log("Stuck in an endless loop");
}

do {
  console.log("Stuck in an endless loop");
} while (true);

```

#### For in loop

```
let arr1 = [1, 2, 3, 4, 5, 6, 7, 899, 99, 98, 7, 653, 32, 4];
let sum = 0;

for (let i in arr1) {
  //   console.log(arr1.hasOwnProperty(i));

  if (arr1.hasOwnProperty(i)) {
    sum += arr1[i];
  }
}

console.log(sum);
```

#### For of loop

```
let arr1 = [1, 2, 3, 4, 5, 6, 7, 899, 99, 98, 7, 653, 32, 4];
let sum = 0;

// for (let i of arr1) {
//   sum += i;
// }

for (let i of arr1) {
  sum += i;
}

console.log(sum);

```

#### break statement

```
let arr1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 13, 21, 11, 333, 556, 66,
];

let str = "";

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 10) break;
  str += (str === "" ? "" : "; ") + arr1[i];
}

console.log(str);

```

#### continue statement

```
let arr1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 13, 21, 11, 333, 556, 66,
];

let str = "";

for (let i = 0; i < arr1.length; i++) {
  if (i % 2 === 1) continue;
  str += (str == "" ? "" : ";") + arr1[i];

  //   str = str.split(";").sort((a, b) => a - b);
}

console.log(str);

```

#### labeled statement

```
let firstMatch = -1;

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = arr1.filter((i) => i % 2 === 0);
// console.log(arr2);

firstLoop: for (let i in arr1) {
  for (let x in arr2) {
    if (arr1[i] === arr2[x]) {
      firstMatch = arr1[i];
      break firstLoop;
    }
  }
}

console.log("🚀 ~ file: labeledStatement.js ~ line 2 ~ firstMatch", firstMatch);

```

#### return statement

```
function containNumber(numbers, number) {
  for (let i in numbers) {
    if (numbers.hasOwnProperty(i)) {
      if (numbers[i] == number) {
        return true;
      }
    }
  }
  return false;
}

let arr1 = [1, 23, 4, 5, 67, 60];

let conatinsTwo = containNumber(arr1, 23);

console.log(
  "🚀 ~ file: returnStatement.js ~ line 15 ~ conatinsTwo",
  conatinsTwo
);

```

#### return without value

```
function someDataWithValue(value) {
  someData();
  if (!value) {
    return;
  }
  someOtherData();
}

function someData() {
  console.log("Some Data");
}

function someOtherData() {
  console.log("Some Other Data");
}

someDataWithValue(false);

```

# Error handling

#### Catch all exception

```
function catchWhenNullEmpty(array) {
  if (array.length == null) {
    throw "array is null";
  }

  if (array.length === 0) {
    throw new RangeError();
  }

  return array;
}

try {
  catchWhenNullEmpty(["null"]);
  console.log(catchWhenNullEmpty(["null"]));
} catch (error) {
  console.log(error);
}
```

#### Catch the specifc exception

```
function throwNewNullOrEmpty(array) {
  if (array == null) {
    throw "Array is null";
  }
  if (array.length === 0) {
    throw new RangeError();
  }
}

try {
  throwNewNullOrEmpty([]);
} catch (e) {
  if (e.name === "RangeError") {
    console.log("Array is Empty");
  } else {
    console.log("Array is not specified");
  }
}

```

#### Define Exception Type

```
function simepleExeption() {}

function exception(name, message) {
  this.name = name;
  this.message = message;
}

throw new exception("exception", "this is a message");

```

# Scope

```
// Global Scope
var a = 1;
let b = 22;
const c = 333;

function check() {
  var a = 4444;
  let b = 55555;
  const c = 666666;
  console.log(`Function Scope: ${a} ${b} ${c}`);
}

if (true) {
  var a = 4444;
  let b = 55555;
  const c = 666666;
  console.log(`If block Scope: ${a} ${b} ${c}`);
}

for (var a = 0; a < 10; a++) {
  console.log(`Loop block Scope : ${a}`);
}
check();

console.log(`Global Scope: ${a} ${b} ${c}`);

```

# Classes

- Classes are a template for creating objects.
- Class syntax has two components
  - class declaration.
  - class expression.

#### Constructor:

> The constructor method is a special method of a class for creating and initializing an object of that class.

> A constructor can use the super keyword to call the constructor of the super class.

#### Class Decleration

```
class sum {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
}

```

#### Class Expression

- named expression

```
let Sum = class sumTwo {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
};
console.log(Sum.name);
// output: "sumTwo"

```

- unnamed expression

```
let Sum = class {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
};
console.log(Sum.name);

// output: "Sum";

```

#### Prototype method:

```

class Sum {
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
  // Getter
  get totalSum() {
    return this.calculateSum();
  }
  // Method
  calculateSum() {
    return this.numberA + this.numberB;
  }
}

const tSum = new Sum(10, 10);

console.log(tSum.totalSum); // 20

```

#### Binding "this" :

When a static or prototype method is called without a value for this, such as by assigning the method to a variable and then calling it, then "this" value will be undefined inside the method.

```
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined

```

#### Field declaration:

- public field declaration.

```
class Sum {
  numberA = 0;
  numberB;
  constructor(numberA, numberB) {
    this.numberA = numberA;
    this.numberB = numberB;
  }
}

```

- private field declaration.

```
class Sum {
  #numberA = 0;
  #numberB;
  constructor(numberA, numberB) {
    this.#numberA = numberA;
    this.#numberB = numberB;
  }
}

```

#### Subclassing with extends

- extends is used to create a class of another class.

```
class Instrument {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log(`${this.name} creates a melodic harmony.`);
  }
}

class Guitar extends Instrument {
  constructor(name) {
    super(name);
  }

  play() {
    console.log(`${this.name} creates a melody.`);
  }
}

let strum = new Guitar("Ibanez");
strum.play();  // Ibanez creates a melody.

```

#### Superclass call with super keyword:

The super keyword is used to access and call functions on an object's parent.

```
class Instrument {
  constructor(name) {
    this.name = name;
  }

  play() {
    console.log(`${this.name} creates a melodic harmony.`);
  }
}

class Guitar extends Instrument {
    play() {
    super.play()
    console.log(`${this.name} creates a melody.`);
  }
}

let strum = new Guitar("Ibanez");
strum.play();

// Ibanez creates a melodic harmony.
// Ibanez creates a melody.

```

---

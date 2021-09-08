# Fundamentals and Baiscs of JavaScript [Part-One]

# Variables

- Variables are the containers that store the value.
- It contains data that can be used throughout the entire program.
- You can declare a variable using var, let, and const.
- "var" is the less preferred way. So, "let" and "const" are highly recommended for declaring the variables.

```
var username = "JoseAviyel"

let firstName = "Jose"

const lastName = "Kuttan"

// console.log(username)
// console.log(firstName)
// console.log(lastName)

```

## Using Variables:

To declare variables we use "var","let" and "const"

- "var" is not recommended way for declaring the variables. It is only used in the previous version of JavaScript (version before es6)
- "let" is recommended way to declare the variable. It can be reassigned.
- "const" is also recommended way to declare the variable. It cannot be redeclared and can only have a constant value.

```
// var let const

var name = "pramit marattha";
console.log(name);
name = "yolo yolo";
console.log(name);

// Initializing the variables
var greetings;
console.log(greetings);
greetings = "yoo there";
console.log(greetings);

// rules and conventions of javascript
// letters
// numbers
// _
// $
// cannot start with a numbers

var name = "thanos";
// var 1name // not valid

// multi word variables
var firstName = "thanos"; // camel casing
var first_name = "promear"; // underscore convention
var FirstName = "yolomeat"; // pascal case

// let

let name = "narayan gopal";
console.log(name);
name = "yolo kumar";
console.log(name);

// const => constant

const name = "promeat";
console.log(name);
// cannot reassign
name = "pramit";
// have to assign the value
const greetings;

// but we can change the data inside the object

const person = {
  name: "pramit",
  age: 230,
};
person.name = "promeat";
person.age = 100;
console.log(person);

// same goes to the array

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.push(8);

console.log(numbers);


```

---

### console.log()

console.log() method helps to print the message in the web console. The message can be simple JavaScript strings, numbers, boolean, objects, and arrays.

```
// log to console
console.log("hello there");
console.log(123456789);
console.log(true);
console.log(false);
var hey = "yolo";
console.log(hey);
console.log([1, 2, 3]);
console.table({ a: 1, b: 2 });

console.error("This is an error");
console.clear();
console.warn("This is an warning");

// console time (check the scripts how long does the code takes)
console.time("Hello");
console.log("hello there");
console.log("hello there");
console.log("hello there");
console.log("hello there");
console.log("hello there");
console.log("hello there");
console.timeEnd("Hello");

```

---

# Data Types:

## Primitive Data Type:

- Strings
- Number
- Boolean
- Undefined
- Null

### Strings:

It is a primitive data type that represents and manipulates a sequence of characters such as letters, spaces numbers, and characters. Strings are usually wrapped around in quotes. (either double-quote or single)

```
let stringOne = "I am a string";
const StringTwo = "I am also a string"

let stringThree = "1234567890";
let stringSingleQuote = 'This is also a string'

```

##### Template literals (Template strings)

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```
`This is a string`

`This
  is
  also
  a
  string
`

let name = "Thanos";

let str = `${name} is powerfull. He is ${500 + 500} years old.`

console.log(str);

```

### Numbers:

It is also a primitive data type. It includes all sets of integers and floating-point numbers.

```
let firstNumber  = 12345;

let secondNumber = 56789;

let floatNumber = 123.456;

const numberOne = 100;
const numberTwo = 3;

let val;

val = numberOne + numberTwo;
val = numberOne * numberTwo;
val = numberOne - numberTwo;
val = numberOne / numberTwo;
val = numberOne % numberTwo;

//NOTE Math Object (its an object because it contains both properties as well as function)
val = Math.PI;
val = Math.E;
val = Math.round(2.111);
val = Math.ceil(1.4);
val = Math.floor(1.4);
val = Math.sqrt(49);
val = Math.abs(-11); // converts into positive Numbers
val = Math.pow(2, 2);
val = Math.min(1222, 123, 123342, 2829028, 226262, 626, 11, 1726, 10, 13, 62);
val = Math.max(1222, 123, 123342, 2829028, 226262, 626, 11, 1726, 10, 13, 62);
val = Math.random();

val = Math.random() * 10; // if we want random number from max numebr of 20
val = Math.floor(Math.random() * 10 + 1);

// results
console.log(val);


```

- Airthematic operators.

```
const a = 10,
  b = 11,
  c = 30;

const str = "10",
  st2 = "11",
  str3 = "12";

// addition
console.group("Addition");
console.log(a + b);

console.log(b + c);

// addign string
console.log(str + str2);

// dynamically type language means you can change the type on the fly

// adding number nad string

console.log(a + str);

// substraction
console.group("Substration");
console.log(a - b);
console.log(b - c);

console.groupEnd();

// multiplication operator

console.group("Multiplication");

console.log(b * c);

console.log(a * b);

console.groupEnd();

// division operator
console.group("Division");
console.log(b / c);
console.log(a / b);
console.groupEnd();

// Increment

console.group("Increment");
console.log(a + 1);
console.log(a++);
console.log((c = c + a));
console.log((c += a));
a++;
++a;
b--;
--b;
c += a;
console.groupEnd();

```

### Booleans:

It is a primitive data type that can be either "true" or "false"

```
let isOnline = true;

let isOffline = false;

```

### Null:

It is also a primitive data type. It is simply an absence of value.

```
let a = null;

```

### Undefined:

It is a primitive data type. It simply represents a lack of defined value.
If the variables are declared but not assigned/initialized a specific value to it, that variable will have an undefined value.

```
let name;

console.log(name) // undefined

```

---

## Non-Primitive Data Types:

- Functions
- Objects
- Arrays

### Functions:

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

```
function add(a,b){
    return a + b;
}

console.log(add(1,2));

// es6 arrow function

const add= (a,b)=> a + b ;

console.log(add(1,2))


```

#### Defining Functions:

A function is a reusable set of statements to perform a task or calculate a value.

#### 1 . Function Decleration ( Function definition or Function statement):

- name of a function.
- list of parameter to that function.

example,

```
function sub(a,b){
    return a - b
};

```

The function "sub" takes two parameters a and b. This function consists of one return statement that returns the subtracted value of a - b.

##### return

- Functions return values using the return.
- It ends function execution and returns the specified value to the location where it was called.
- If a return statement is not declared the function will throw "undefined" by default.

#### 2 . Function expression:

The function keyword can be used to define a function inside an expression.
These types of functions can be anonymous. It doesn't have to have a name.

##### Anonymous Functions:

- It does not have a name property.
- It can be defined only by using the function keyword.

```
const add = function(a,b){
      return a + b;
};

let x = add(2,3)

console.log(x); // 5

```

#### IFFEs

```

// Immidiately Invocable Functions Expressions - IFFEs
//NOTE functions that can be declared nad run at the same time
(function (x = 2) {
  console.log(`${x * x}`);
  console.log(`Immidiately Invocable Functions Expressions - IFFEs`);
})();

(function (y, name) {
  console.log(`${y * y}`);
  console.log(`${name} yooooooo`);
})(9, "nine");

```

#### Parameters VS Arguments

Parameters:

- A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.

Arguments:

- An argument is a value (primitive or object) passed as input to a function.

#### Calling the function:

Defining a function does not execute it. Defining it names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters.

```
add(1,2)

sub(4,3)

```

**_NOTE_**: Functions must be in scope when they are called, but the function declaration can be hoisted

```

console.log(multiply(2,4));


function multiply(a,b){
    return a * b;
}

```

### Objects:

JavaScript objects are containers for named values called properties or methods.

- A built-in non-primitive data type for storing key-value pairs.
- Data inside of that objects is not in order and the values can be of any type.

#### Property and value of an Object:

- Object literal is enclosed with curly braces.
- Values are mapped to the key with the colon symbol.
- All keys must be unique, but values can be declared whatever/anything.
- Key-value pairs are also referred to as object properties.
- key-value pairs are separated by commas.

```
const details = {
    name:"Pramit",
    isOnline : true,
    phoneNumber: 123456789
}

```

#### Objects are mutable:

- The content inside the objects can be changed even if they are declared with const.
- New properties can be added, deleted, and can be changed.

```
const details = {
    name: "Thanos",
    age:1000,
    phoneNumber: 6781367092
}

delete details.phoneNumber;

details.age = 1001;

console.log(details)

// {name:"Thanos",age:1001}

```

#### Dot(.) for accessing object properties

- Properties of an object can be accessed by "Object.propertyName"

```
const car = {
   name: "Hummer",
   color:"black",
   licensePlate:1234
}

console.log(car.name) // Hummer

console.log(car.color) // Black

```

- JavaScript will throw "undefined" if we try to access the property which is not declared ( which does not exist).
  example,

```
const car = {
   name: "Hummer",
   color:"black",
   licensePlate:1234
}

console.log(car.age) // Undefined

```

#### for-in loop in object

- It iterates over the keys of an Object

```
const car = {
   name: "Hummer",
   color:"black",
   licensePlate:1234
}

for(let key in car){
 console.log(`${key} : ${cars[key]}`)
}

```

#### Passing Objects as an argument:

- If the object is passed as arguments to a function, they passed by reference

```

const age = 100;
const details = { name: "pramit" };

const chngObjArgs = (ag, obj) => {
  ag = 7;
  obj.name = "Thanos";
};
chngObjArgs(age, details);

console.log(age);  // 100

console.log(details.name); // Thanos


```

#### Object Methods:

- If the property value of an Object is functions then they are called Object Method.

```
const details = {
    name:()=>{
    console.log("Hello there , I am general Kenobi")
};

details.name() ;

// Hello there , I am general Kenobi

```

#### Object destructuring:

```
const details = {
    name:"Pramit",
    profession:"web developer",
    isOnline: true,
    isOffline:false,
    username:"ppp",
}

const {name,profession,isOnline,isOffline,username} = details;

console.log(name)

console.log(profession)

console.log(isOnline)

console.log(isOffline)

console.log(username)

```

#### Shorthand technique for Object Creations:

```
const name = "Thanos";

const details = {name};

console.log(details)

```

#### this keyword

"this" is a reserved keyword in JavaScript.It refers to the method's calling object and it can be used to access the method belonging to that object.

```
const details = {
    name:"Pramit",
    isOnline:true
   thisName(){
    return this.name;
    }
}

console.log(detail.thisName())
// Pramit

```

```

const ageCalc = {
   oldAge: 100,
   newAge:23,
   calculateAge(){
   return this.oldAge - this.newAge;
   }
}

console.log(ageCalc.calculateAge());


```

#### Factory Function:

- function that returns an object is called the factory function.

```
const car = (name,color,engineType) => {
return {
    name:name,
    color:color,
    engineType:engineType
    startEngine(){
     console.log("Starting Engine.....")
    }
}
}

```

### Arrays:

- JavaScript arrays are used to store multiple values in a single variable.
- An array can hold many values under a single name, and you can access the values by referring to an index number.

```
const stringArray = ["my","name","is","thanos"]

const numArray = [1,2,3,4,5,6,7,8,9]

// mixed array

const mixedArray = [1,"my",2,"name",8,"is",7,"thanos",true,false]


```

##### Index:

- Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
- Array elements are arranged by an index value.
- Index value always starts with 0.

#### Creating an array

```
let comics = ['DC', 'Marvel']

console.log(comics)

```

#### Checking the length of an array.

```
console.log(comics.length)
```

#### Accessing array items using index position

```
let first = comics[0]
let second = comics[1]
```

#### Accessing the last item of an array

```
let last = comics[comics.length - 1]
```

#### Looping an array

```
comics.forEach(function(item, index, array) {

console.log(item, index)

})
// DC 0
// Marvel 1
```

#### Adding Items to an end of an array.

```
let newLength = comics.push('Capcom')

// ["DC", "Marvel", "Capcom"]

```

#### Removing an item from the end of an Array

```
let last = comics.pop() // remove Capcom

// ["DC", "Marvel"]
```

#### Removing an item from the beginning of an Array

```
let first = comics.shift() // remove DC from the front

// ["Marvel"]
```

#### Adding an item to the beginning of an Array

```
let newLength = comics.unshift('Nintendo') // add to the front

// ["Nintendo", "Marvel"]
```

#### Find the index of an item in the Array

```
let pos = comics.indexOf('Marvel')

// 1
```

#### Removing an item by index position

```
let removedItem = comics.splice(1, 1)

// ["Nintendo"]

```

#### Removing items from an index position

```
let comics = ['Nintendo', 'DC', 'Marvel', 'Capcom']
console.log(comics)
// ['Nintendo', 'DC', 'Marvel', 'Capcom']

let removedItems = comics.splice(1, 2)

console.log(comics)

// [ 'Nintendo', 'Capcom' ]

console.log(removedItems)

// [ 'DC', 'Marvel' ]

```

#### Copy an Array

```
let shallowCopy = comics.slice() // this is how to make a copy
// or
let copyArray = [...comics]

```

---

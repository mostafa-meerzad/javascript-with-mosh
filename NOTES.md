# JavaScript

## what is JS?

JavaScript is the programming language for the WEB and to make websites interactive.

JS is interpreted, dynamically-typed language originally made to work on web-browsers but nowadays it's evolved and capable of executing on backend thus becoming a general purpose language.

## what can JS do?

In the early days of the language it was just executed on browsers and even some developers used to call it a _toy language_ but those days are long gone and now JS can do everything fronted, backend, desktop applications to mobile application and even games.

## where does JS run?

JS was originally designed to run only on browsers but in **2009** a clever engineer named _Brian Doll_ toke the open-source JS engine and embedded in a C++ program he called that program _None_, now with this we can run JS outside of a browser which means now we can build backend with JS.

## ECMA-Script vs JavaScript

**ECMA-script** is the specifications of the language and **JavaScript** is a programming language that confirms to this specifications.

ECMA is the organization responsible for defining standards, they take care of this ECMA-Script specifications.

the _first_ version of the ECMA-Script was released in _1997_ and since _2015_ ECMA has been working on annual releases of a new specification. in _2015_ they released _ECMA version 6_ or _ES6_ which this release defined many new and modern features for the language

## Basics

### variables

Variables are locations in memory that are given a name and allow us to store data temporarily.

#### variable declaration rules

1. cannot be a reserved word
2. should be meaningful
3. cannot contain a space or hyphen (-)
4. can not start with a number
5. are case sensitive

```js
let name = "Mostafa";
let lastName = "Meerzad";
// not valid
let x = "something";
let 1name = "something";
let favorite color = "something";
let if = "something";
```

### constants

Are variables that we don't want their values to be changed in the codebase.

```js
const interestRate = 1.4;
```

### Primitive/ Value Types

In JS we have two category of types

1. Primitive Types
   1. String: a string value
   2. Number: a number value
   3. Booleans: true/ false
   4. Null: absence of an object
   5. Undefined: default value for every variable that hasn't been initialized
2. Reference Types

### Dynamically Typed language

JavaScript is Dynamic which means the variables can hold different types of data unlike Statically Typed Language that we have to explicitly define the type of the value a variable is going to hold

The **typeof** operator in JS is used to view the type of values

```js
console.log(typeof "string"); // string
console.log(typeof 124); // number
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined because undefined is a type and also a value
console.log(typeof null); // object
```

### Objects

An object is just like anything in the real world for example: a person who has a name, age, family, job and so on.

when working with multiple related variables we can put them inside an object-literal

there are two way to access properties of an object:

1. dot notation: this approach is more concise and used when you do know the property/method name of the object.
2. bracket notation: used to access property/methods of an object that we don't know until runtime.

```js
let name = "Mostafa";
let age = 23;
// create an object and put them all in one place

let person = {
  name: "Mostafa",
  age: 23,
};

console.log(person.name);
console.log(person["name"]);

person.name = "new name";
person.age = 100;

person["name"] = "new name";
person["age"] = 100;
```

### Arrays

An array is simple a list of objects like favorite colors, members of a group, your hobbies and so on.

array elements are index based starting from 0 up-to the number of elements - 1

arrays can hold any kind of values unlike other programming languages that can hold only one kind of values you define

```js
let selectedColor = ["red", "green", "blue"];

console.log("first element ", selectedColor[0]);
console.log("second element ", selectedColor[2]);

selectedColor[3] = "yellow";
```

### Functions

A function is a block of code or set of statements that performs a task or calculates a value, functions have names and can accept values as arguments and return the results of calculations or tasks.

function parameter: is the variable/s name that is only accessible inside that function and allows functions to take values from the outside.

function arguments: is the actual value passed to a function when it's called

if a function expects the user to pass a value as an argument when it's called and you don't pass that argument the value for that argument is **undefined** by default.

```js
// name is this function's parameter which is only accessible inside this function
function greet(name) {
  // here is the body of the function
  // console.log("Hello World")
  console.log("Hello ", name);
}

greet(); // call the function
greet("Mostafa"); // call the function with an argument
```

#### Function types

there are two types of functions:

1. value returning functions
2. void functions

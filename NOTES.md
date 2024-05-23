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

## Operators

**Operators** are used along with other **operators/ variables** to create **Expressions** which is then used to create **Algorithms**.

Operator types in JS:

1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Bitwise operators

### Arithmetic Operators

Are those operators used to calculate mathematic values

1. **+** : addition operator used to sum two values
2. **-** : subtraction operator used to subtract two values
3. **\*** : multiplication operator used to multiply two values
4. **/** : division operator used to divide one value onto another value
5. **%** : remainder operator used to divide one value onto the second value and get the remainder of the division
6. **\*\*** : exponentiation operator is used to raise the first value to the power of the second one
7. **++** : increment it does both pre-increment and post-increment
8. **--** : decrement it does both pre-decrement and post-decrement

### Assignment Operator

Assignment operator is used to assign a value to a variable which is well `=`.

there are also:

1. addition assignment operator:

```js
x = x + 1;
x += 1;
// in this case the same as
x++;
```

2. subtraction assignment operator:

```js
x = x - 1;
x -= 1;
// in this case the same as
x--;
```

3. multiplication assignment operator:

```js
x = x * 1;
x *= 1;
```

4. division assignment operator:

```js
x = x / 1;
x /= 1;
```

5. remainder assignment operator:

```js
x = x % 1;
x %= 1;
```

### Comparison Operators

are those that compare two values and results in a boolean

1. **<**: less than operator
2. **<=**: less than or equal-to operator
3. **>**: greater than operator
4. **>=**: greater than or equal-to operator
5. **==**: lose equality operator compare two values but first converts the operand types to match each other
6. **===**: strict equality operator compares tow operands without type conversion

### Logical Operators

A logical operator is a symbol or word used to connect two or more expressions.

there are three logical operators

1. logical **and** **&&**: results true if both operands evaluate to true
2. logical **or** **||**: results true if at least one of the operands evaluate to true
3. logical **not** **!**: used to reverse the result of an expression

**NOTE**:
the result of a logical operator is not necessarily a boolean value it depends what the value of the operands we have. well when JS engine runs an expression containing logical operators it first looks at each operand and if they are not boolean values it will try to interpret it as **truthy** or **falsy** values thus the result of the operation will be that truthy/falsy value.

falsy values:

1. false
2. "" empty string
3. 0
4. undefined
5. null
6. NaN not a number

truthy values:

anything that is not falsy is truthy

```js
false || true; // true
false || "Hello"; // Hello
true || "Hello": // true
false || "Hello" || 100 : // hello
```

when it comes to logical operators it doesn't matter how many operands we have as soon the operation can be completed it completes and the rest is skipped

this behavior is called **short-circuiting**

general rules:

`false/falsy || expression => expression`
`true/truthy || expression => true`

`true/truthy && expression => expression`
`false/falsy && expression => false`

### Bitwise Operator

well we skip this one

## Control Flow

### If...Else

if and else statements allow us to execute blocks of code conditionally.

```js
if (condition) {
  // if condition is true this block will run
} else if (secondCondition) {
  // if first condition is false the control flow is passed to this if/else statement
  //and if the condition evaluates to true this block will run
} else {
  // otherwise this block will run
}
```

### Switch-Case

Switch and case is similar to if/else statements and allows to check for multiple states of the condition

```js
switch (condition) {
  // the condition variable is the variable you want to check for different cases
  case "state1":
    // if condition is equal to state1 this block will run
    break; // we have to use break statement to stop the operation and jump out of switch/case

  case "state2":
    // if condition is equal to state2 this block will run
    break;

  // here you can have as many case statements as you need

  default:
  // this block will run if none of the conditions match just like else statement
  // for the default statement we don't need break statement
  // the switch/case has already reached the end
}
```

if you don't use **break** statement the switch/case will continue running to the end

```js
let role = "guestss";

switch (role) {
  case "guest":
    console.log("guest user");
    break;

  case "moderator":
    console.log("moderator user");
    break;

  default:
    console.log("default user");
}
```

### For Loop

if you want to repeat an action over and over

```js
for (initialExpression; condition; incrementExpression) {
  // loop body
  statements
  statements...
}

for (let i = 0; i < 5; i++){
  console.log("Hello")
}
```

### While Loop

while loop is just the same as for loop with a difference that the loop condition is not part of the loop syntax and has to be defined externally

```js
let loopVariable;
while (condition){
  loop body
  // this will run as long the condition is evaluated to true

  loopVariableUpdated
}
```

```js
let i = 0;
while (i < 5) {
  console.log("Hello");
  i++;
}
```

### Do-While Loop

Do While loops are similar to While loop with one major difference that do/wile loops run at least once no matter the loopConditionStatement

```js

let loopCondition

do {
loop body
// statements
// statements
loopCondition updated
} while(loopCondition)
```

```js
let i = 0;
do {
  console.log("Hello");
  i++;
} while (i < 5);
```

### Infinite Loops

are those loops that run forever or until the program crashes

```js
let i = 0;
while (i < 5) {
  console.log("Hello");
}
```

### For-in Loop

for-in loop is a special loop that is used to iterate of indices of an array or keys of an object

```js
let obj = {};

for (let i in obj) {
  // i will hold each keys of the target object
  console.log(i);
  // access the values of each object key
  console.log(obj[i]);
}
let arr = [];
for (let i in arr) {
  // i will be the indices of the array elements
  console.log(i);
  // access the values of each array index
  console.log(arr[i]);
}
```

### For-of Loop

this loop is a new feature added in ES6 and is designed to iterate over the values of an iterable object like arrays, strings

```js
let arr = [];
for (let x of arr){
  // x here will be the elements of the array
  console.log(x)
}
```

### Break and Continue

Break and Continue are tow important keywords that can change the behavior of the loops:

**Break**: statement causes the loop to stop right there and the flow of the program moved to the outside of the loop.

**Continue**: statement stops the loop and moves to the top of the loop and start the next iteration.
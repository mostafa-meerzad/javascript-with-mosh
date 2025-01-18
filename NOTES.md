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
5. **==**: loose equality operator compare two values but first converts the operand types to match each other
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
for (let x of arr) {
  // x here will be the elements of the array
  console.log(x);
}
```

### Break and Continue

Break and Continue are tow important keywords that can change the behavior of the loops:

**Break**: statement causes the loop to stop right there and the flow of the program moved to the outside of the loop.

**Continue**: statement stops the loop and moves to the top of the loop and start the next iteration.

## Objects

Objects are collections of highly related variables and functions

```js
// an example of object literal
cont circle = {
  radius: 1.4,
  location: {x: 1, y:10},
  draw: function(){
    console.log("drawing")
  }
}
```

### factory function

factory function are literally factories that produce objects in other words factory functions are those functions that generate objects

with factory-functions the logic is isolated into one single place which is a lot easier when it comes to debugging

```js
function createCircle(radius) {
  return {
    // other properties are remove for simplicity
    radius,
    draw() {
      console.log("drawing");
    },
  };
}

const myCircle = createCircle(1.2);
myCircle.draw();
```

**Note**: in ES6 if an object key and value are the same like above we're allowed to just use the key part, functions that are inside objects are referred to as methods or object-methods and to define them this is the pattern `{methodName(){//some logic}, key:value}`

### Constructor Function

Constructor functions are just like factory-function and are used to generate objects but the approach to do so is different

Naming conventions for constructor-functions are different which their name must follow the **PascalNaming** convention

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("drawing");
  };
}

let myCircle = new Circle(1.6);
myCircle.draw();
```

**Note**: when it comes to constructor-functions we need to use the **new** keyword when initializing a new object

when we use the **new** keyword three things happen

1. JS creates a new empty object
2. JS makes the **this** keyword to point to that newly created empty object
3. Lastly the constructor-function automatically returns that object

so when we create a new object using a constructor-function we get a newly created empty object with all the properties and methods defined in the constructor-function

**Note**: constructor-functions and factory-functions both do the same thing and both are legit

### Dynamic Nature of Objects

objects are dynamic which means you can add properties/methods to an object or delete existing ones using **delete** operator

```js
const circle = {
  radius: 1.4,
};
// add new properties
circle.color = "Yellow";
circle.draw = function () {
  console.log("drawing");
};

// delete properties

delete circle.color;
delete circle.draw;
```

**Note**: the `circle` variable is a constant and we cannot reassign a new value to is but the object it is holding is mutable and it's properties and methods can be altered

### Constructor Property

every object has a property called **constructor** which references the function used to construct/create that object

the constructor property of an object returned form a **factory-function** is the default **Object** constructor

the constructor property of an object created using a **constructor-function** is the **constructor-function** itself, because we use **new** keyword and that internally creates a new empty object.

there are other constructor functions in JS as well: String(), Number(), Boolean(), and so on

### Functions are Objects

functions are objects

### Value vs Reference Types

there are two type of values in javascript

1. Primitive types
   1. Number
   2. String
   3. Boolean
   4. Symbol
   5. undefined
   6. null
2. Reference types
   1. Object
   2. Function
   3. Array

Primitive types are stored inside the variables on the other hand Reference types are stored in a location of memory and then a reference of that location is stored inside the variable

```js
let x = 10;
let y = x;

// now if you assign another value to the x the value of y doesn't change
// variables are independent
x = 20;

console.log(x); //=> 20
console.log(y); //=> 10

let j = { value: 10 };
let k = j;

console.log(j.value); //=> 10
console.log(k.value); //=> 10
// now if you modify the value property of k that will effect the value of j as well

k.value = 20;
console.log(j.value); //=> 20
console.log(k.value); //=> 20
```

Primitives are copied by their value
Objects are copied by their references

```js
// here we have a variable that holds a number and we pass it to a function which adds one to it what do you think will happen?
let number = 10;

function increase(number) {
  // this number variable in scoped inside this function only and it's value is increased only here
  number++;
}

increase(number);

console.log(number); //=> 10
// the number variable still showing 10

function increaseGlobal() {
  // in this case the number variable is a global variable and it's value in increased by one
  number++;
}
increaseGlobal();
console.log(number);
```

### Enumerating Properties of an Object

if we have an object and want to get each property/ methods of it we would use a loop

```js
let circle = {
  radius: 1,
  draw() {
    console.log("drawing");
  },
};

for (let key in circle) {
  console.log(key, circle[key]); // => key value of circle
}

for (let key of circle) {
  console.log(key); // => typeError: circle is not iterable
}
```

Objects are not iterable so **for-of** loop is not going to work

but `Object.keys(targetObj)` will return an array of all the keys of the **target** in the form of strings

`Object.entries(targetObj)` returns an array of each key-value pairs of an object in the form of an array

```js
let myOjb = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  method() {
    console.log("something");
  },
};
console.log(Object.keys(myOjb));
// [ 'prop1', 'prop2', 'prop3', 'method' ]

console.log(Object.entries(myOjb));
// [
//   [ 'prop1', 'value1' ],
//   [ 'prop2', 'value2' ],
//   [ 'prop3', 'value3' ],
//   [ 'method', [Function: method] ]
// ]

for (const entry of Object.entries(myObj)) {
  console.log(entry);
}
```

to check if a property exists in an object we use the `in` operator

```js
let obj = {
  color: "red",
  width: 100,
  height: 100,
  draw() {
    console.log("drawing");
  },
};

"color" in obj; // => this expression returns a boolean
```

### Cloning an Object

cloning an object means to copy each and every property/method of an object another object, we have several ways

```js
let square = {
  color: "red",
  width: 100,
  height: 100,
  draw() {
    console.log("drawing");
  },
};

let another = {};
// using a for-in loop
for (let key in square) {
  another[key] = square[key];
}

console.log(square);
console.log(another);
// using Object.assign(targetObjectWhichYouWantToCopyTheOtherOne, sourceObjectWhichYouWantToCloneFrom) method
let another = Object.assign({}, square);
// using spread operator which is the best and modern way
let another = { ...square };
```

### Garbage Collector

A garbage collector is what responsible for deallocating variables and constants that are no longer being used.
deallocating memory that was allocated to them earlier.

this process is fully automatic and we have no control over it and we don't need to worry about it at all

## Arrays

Arrays are lists of objects stored in one place. In JS we can store different types of data in a single array

### Adding elements

just like objects we can add element to an array because it is mutable but if **const** is used to create the variable to hold the array we cannot reassign another value to that variable

```js
const myArray = [3, 5];
// add elements to an array

// End
myArray.push(one, orMoreElements);

// Beginning
myArray.unshift(element);

// Middle
myArray.splice(start, numberOfElementToRemove, elementsToAdd);
```

`Array.push(elements)` this array method takes one or many elements or even another array/ object and adds at the end of the array.

`Array.unshift(element)` this array method takes one or many elements or even another array/ object and adds at the beginning of the array.

`Array.splice(startIndex, numberOfElementToRemove, numberOfElementsToAdd)` this array method takes one or many elements or even another array/object and adds/removes them from the specified location of the array. if you remove elements it returns a new array of those elements if you don't it will return an empty array

### Finding elements (primitives)

`Array.indexOf(element, searchStart)` returns the index of the provided element if not existing returns **-1** optionally you can pass a second argument which is the index you want the search to begin.

`Array.lastIndexOf(element, searchStart)`return the index of the last element matching the provided element, optionally takes a second argument which is the index you want the search to begin.

`Array.includes(element)` returns true if the provided element exists in the array otherwise returns false.

### Finding elements (objects)

```js
Array.find(callBack(currentElement){
  return "A Boolean expressing checking if the current element is what we want or not"
})
```

this method return the element if exists other wise returns **undefined**

for finding elements that are reference-type we need to use `find` method this is also useful for the primitive-type elements

```js
Array.findIndex(callBack(currentElement){
  return "A Boolean expressing checking if the currentElement is what we want or not"
})
```

this method return the index of the element that matches the criteria otherwise return **-1**

### Removing elements

`Array.pop()` this array method removes the last array element and returns it.

`Array.shift()` this array method removes the first array element and returns it.

`Array.splice(startIndex, numberOfElementToRemove, numberOfElementsToAdd)` this array method takes one or many elements or even another array/object and adds/removes them from the specified location of the array. if you remove elements it returns a new array of those elements if you don't it will return an empty array

### Emptying an array

If you need to clear all elements of an array there are several options

```js
let numbers = [1, 2, 4, 5];
let another = numbers;

numbers = []; // if your array is referenced anywhere else this approach is not working

numbers.length = 0; // by setting the length of an array to 0 you can empty it

numbers.splice(0, numbers.length); // this method is a little noisy and might ge confusing
// this method is also not great specially when dealing with a large array
while (numbers.length > 0) {
  numbers.pop();
}
```

### Combining Arrays

for combining there are following ways

`firstArray.concat(secondArray)` this method returns a new arrays containing all the elements of both arrays

for slicing arrays are following ways

`Array.slice(startIndex, endIndex)` returns a new array containing elements from startingIndex-element to the endIndex-element but not the endIndex-element.

**startIndex** is 0 by default and the **endIndex** is the **targetArray.length-1**

`Array.slice()` with no start/end indices this method returns a new copy of the target element

`Array.slice(startIndex)` with just starting index returns a new arrays containing all elements starting from the specified index to the end.

in ES6 we have **spread** operator which is very flexible makes those array operations easy and returns all the element of target array

```js
let arr1 = [1, 2, 4, 5];
let arr2 = [...arr]; // create a new copy of an array
let arr2 = [...arr, 33, 88, 00]; // copy all elements form arr1 to arr2 before specified elements
let arr2 = ["something", 77, 99, ...arr]; // copy all elements form arr1 to arr2 after specified elements
let arr2 = ["something", 77, ...arr, "another"]; // copy all elements form arr1 to arr2 between it's elements
```

**Note**: when combining/slicing array primitive-type elements are copied by their values and they are completely independent on the other hand reference/object-type elements are copied and sliced by their references which means any changes appear in those values they will be reflected in all of them.

### Iterating an Array

here are the ways to iterate over elements of an array

```js
let array = [1, 2, 3, 4, 6];
for (const element of array) {
  // here element will represent each element of the array
  console.log(element);
}

array.forEach(function (currentElement, indexOfCurrentElement) {
  // here element will represent each element of the array
  // indexOfCurrentElement will represent the index of currentElement
  // some logic here...
});
```

the **forEach** array method takes a **callback** an that callback is executed on each element of the target array

### Joining Arrays

joining arrays

`Array.join(separator)` this method takes a **separator** and return a string with all array elements separated using the specified separator

```js
let arr = [1, 2, 3, 5];
let joined = arr.join(" "); // returns a string with each element separated with given separator
```

`Array.join(separator)` works hand in hand with `String.split(separator)` which returns an array of all elements separated with specified separator

### Sorting Arrays

for sorting arrays we have `Array.sort(callback)` method that takes a callback function used to determine the order of the elements.

It is expected to return a **negative** value if the first argument is less than the second argument, **zero** if they're equal, and a **positive** value otherwise. If omitted, the elements are sorted in ascending, **ASCII** character order.

**Note**: think of this algorithm like this: if **a** must go before **b** return (-1), if **b** must go before **a** return (+1), if they are the same return (0) in ascending order and for descending order it's the opposite.

`Array.sort()` // sorts elements in ascending order by default (no callback provided)

```js
let arr = [1, 4, 2, 3];

arr.sort(function (a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
```

`Array.reverse()` // reverses the order of elements in an array

**Note**: these methods mutate the array and returns a reference to the same array

**Note**: **sort** method works just fine for primitive-types but for reference-types you need to do more work and define bottlenecks

```js
let courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Node.js" },
];
```

### Testing the Elements of an Array

if you need to test elements of an array to verify each or some of the elements match a certain criteria or not

`Array.every()` and `Array.some()` returns a boolean

```js
Array.every(function (currentElement) {
  // here define a criteria that returns a boolean
  return currentElement >= 100;
});
```

### Filtering an Array

to get all the elements of an array based on some condition you can use `Array.filter()` which returns a new array containing all the elements matching the specified criteria

```js
let numbers = [1, 2, 5, 76, 8, 9];

let evenNumbers = numbers.filter(function (num) {
  return rum % 2 === 0;
});
```

### Mapping an Array

with **map** method we can map each element of an array to something else

```js

const numbers = [1, 2,3 5,6]

const items = numbers.map(n => {value: n})
```

### Reducing an Array

`Array.reduce()` is a very useful method which can do pretty much every operation we can do with an array reduce method runs over each element in an array.

**Note**: remember whenever you need to reduce an array into a single value consider using **reduce** method

````js
Array.reduce(callback(accumulator, currentElement){
  // some logic
  return //the result of the operation
}, accumulatorInitialValue)```

```js
let numbers = [1, -1, 4, 8];

let sum = numbers.reduce((acc, elem) => acc + elem, 0);
````

## Functions

function declaration

```js
function walk() {
  console.log("walking");
}
```

function expression

```js
// this function is stored in a location of memory and a reference of it is stored in this variable
let run = function () {
  console.log("running");
};

let move = run;
// these both reference to the same function
move();
run();
```

a function tha has no name is called an **anonymous-function**

### Hoisting

hoisting is the act of moving **function declaration** and **variables declared using var** to the top of the code file

```js
// we can call walk function before it's actually defined like so:
walk(); // doing this doesn't crashes the app

function walk() {
  console.log("walking");
}

run(); // but here we can't call run even though it's a function but it is defined as a function expressing and acts like a variable holding some value and we can't call it before declaration
let run = function () {
  console.log("running");
};
```

### Arguments

in JS a function can take a varying number of arguments

```js
function sum(a, b) {
  return a + b;
}

sum(1, 2); // 1 + 2 => 3
sum(1); // 1 + undefined => NaN
sum(); //undefined + undefined => NaN
sum(1, 2, 4, 5, 6); // 1 + 2 => 3
```

every function has a special object called **arguments** which looks like an array but is an iterable-object and we can loop through, it has a **length** property which returns the number of function arguments

```js
function total() {
  // when using arguments object it doesn't matter if the function has any parameters or not
  let total = 0;
  for (let arg of arguments) total += arg;
  return total;
}

console.log(total(1, 2, 4, 5));
```

### the Rest Operator

in functions if you need to accept a varying number of arguments you can use the **rest-operator** which returns an array of all the arguments passed to the function.

```js
function total(...args) {
  return args.reduce((a, b) => a + b);
}
```

rest-operator must be the last parameter to a function

### Default Parameters

if you want to define default values for function parameters here is how to:

`((principle * rate) / 100) * years` is the formula of calculating interest

```js
function interest(principle, rate, years) {
  return ((principle * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));

function interest(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}
console.log(interest(10000));
```

**Note**: the parameter that has a default value must be the last parameter if you don't have a value for it otherwise you need to pass value for all parameters.

### Getters and Setter

are special object methods that allow us to access or set values to properties of an object

**getters**: used to access properties

**setters**: used to change properties

if you want to create immutable properties you can use getters

```js
const circle = {
    radius:2,
    get area(){
        return Math.PI * this.radius**2
    }
}
console.log(circle.radius);
console.log(circle.area); // area is a getter method and is called just like a property
circle.area = ()=> "something else" // trying to mutate the area property you get an exception
console.log(circle.area);

```

```js
let person = {
  name: "Mostafa",
  lastName: "Meerzad",
  // fullName() { // a normal object method
  // return `${this.name} ${this.lastName}`;
  // },
  get fullName() {
    // a getter method
    return `${this.name} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.name = parts[0];
    this.lastName = parts[1];
  },
};

person.name;
person.lastName;
person.fullName; //=> Mostafa Meerzad  // this is a normal method so we need to put a pair of parentheses
person.fullName; //=> Mostafa Meerzad // this is a getter method so no need to put parentheses
person.fullName = "John Smith"; // this is how to change object-property using setter method
person.fullName; //=> John Smith
```

### Try and Catch

The **try/catch/finally** statement is JavaScript’s exception handling mechanism.

The **try** clause of this statement simply defines the block of code whose exceptions are to be handled. The **try** block is followed by a **catch** clause, which is a block of statements that are invoked when an exception occurs anywhere within the **try** block. The **catch** clause is followed by a finally block containing cleanup code that is guaranteed to be executed, regardless of what happens in the try block. Both the **catch** and finally blocks are optional, but a try block must be accompanied by at least one of these blocks. The try, **catch**, and **finally** blocks all begin and end with curly braces. _These braces are a required part of the syntax and cannot be omitted, even if a clause contains only a single statement_.

```js
try {
  // Normally, this code runs from the top of the block to the bottom
  // without problems. But it can sometimes throw an exception,
  // either directly, with a throw statement, or indirectly, by calling
  // a method that throws an exception.
} catch (e) {
  // The statements in this block are executed if, and only if, the try
  // block throws an exception. These statements can use the local variable
  // e to refer to the Error object or other value that was thrown.
  // This block may handle the exception somehow, may ignore the
  // exception by doing nothing, or may rethrow the exception with throw
} finally {
  // This block contains statements that are always executed, regardless of
  // what happens in the try block. They are executed whether the try
  // block terminates:
  // 1) normally, after reaching the bottom of the block
  // 2) because of a break, continue, or return statement
  // 3) with an exception that is handled by a catch clause above
  // 4) with an uncaught exception that is still propagating
}
```

### Local vs Global Scope

Scope is the area or block in which a variable/constant is accessible, global variables are accessible everywhere but local variables are not accessible outside their scope, local variable has precedence over global variables in case they have the same name

**Note**: Declaring global variables is not a best-practice and should be avoided as much as possible.

### Let vs Var

Both **let** adn **var** declares variables **var** is function scoped **let** is block scoped, declaring variables using **var** outside functions creates a global scoped variable and is attached to **Window** object in browsers or **Global** object in node.js apps.

**Note**: functions are also globally scoped which means they are attached to **Window**/**Global**
objects

### The "This" keyword

**this** is the Object that is executing the current function

**General rule of thumb**

**this** in an object method => object itself:
**this** in a regular function => global object which is (window in browser) and (global in node)

```js
const video = {
  title: "a",
  play() {
    console.log(this); // "this" references the object itself
  },
};
video.stop = function () {
  console.log(this); // this refers to the object you're adding a method to
};
video.play();
video.stop();

function playVideo() {
  console.log(this); // "this" references the global/window object
}
playVideo();
```

```js
function Video(title) {
  this.title = title;
  console.log(this); // "this" will reference to the newly created object cause we use "new" operator
}

const v = new Video("a");
```

```js
const video = {
  title: "a",
  tags: ["b", "c", "f"],

  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // "this" references the global/window object, because a callback function is just a normal function
    }, this); // forEach method takes a second argument which "this" keyword inside this callback function will reference
  },
};

video.showTags();
```

### Changing the value of "This"

not all methods have the ability to take a reference

```js
const video = {
  title: "a",
  tags: ["b", "c", "f"],

  showTags() {
    // some programmers use this technique
    // let that = this
    // or
    let self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // "self" is now a reference to the object itself
    });
  },
};

video.showTags();
```

**Note**: the above approach is not recommended just know some programmers are using it.

here is another approach

functions are technically objects and they have **call**, **apply** and **bind** methods which allows to change the value of **this** keyword

```js
function play(a, b) {
  console.log(a, b);
  console.log(this);
}

// console.log()
play.call({ name: "Mostafa" }, "first", "second"); // call method takes an object which "this" keyword inside the target function will reference

play.apply({ name: "John" }, ["first", "second"]); // apply method takes an object which "this" keyword inside the target function will reference
```

the difference between **call** and **apply** is in the way they accept arguments for the target function **call** takes function arguments individually but **apply** takes function arguments in an array

another approach is to use **bind** method which takes an object and makes the target functions **this** to always point to the provided object and returns a new function which then can take the arguments of the target function as if it was the same as the target function.

```js
function play(a, b) {
  console.log(a, b);
  console.log(this);
}

let playFunction = play.bind({ name: "John" });
```

back to the previous example:

```js
const video = {
  title: "a",
  tags: ["b", "c", "f"],

  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
      // this references to the parent object because we are outside of the callback function. bind returns a new function which is identical to the provided callback with this pointing to the parent object
    );
  },
};

video.showTags();
```

the modern approach **arrow functions**

arrow functions inherit their **this** from the **containing function**

```js
const video = {
  title: "a",
  tags: ["b", "c", "f"],

  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
      // this arrow function inherited its "this" from "showTags" method which is the containing function
    });
  },
};

video.showTags();
```

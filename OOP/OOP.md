# Object Oriented Programming

OOP is a programming paradigm centered around objects rather than functions.

## 4 Pillars of OOP

1. **Encapsulation**:

   grouping related **variables** and **functions** into properties and methods of object

   ```js
   //---------------- this approach is called procedural-paradigm -----------------
   let baseSalary = 30000;
   let overTime = 10;
   let rate = 20;

   function getWage(baseSalary, overTime, rate) {
     return baseSalary + overtime * rate;
   }
   //----------------- OOP-paradigm --------------------
   let employee = {
     baseSalary: 30000,
     overTime: 10,
     rate: 20,
     wage() {
       return this.baseSalary + this.overTime * this.rate;
     },
   };
   ```

2. **Abstraction**:

   hiding internal complexities of an object to the outside world and exposing just those parts that are needed.

   think about a TV: it has a complex internal circuit-board handing all the processes but it provides a remote-control that has buttons and allow users to be able to use the TV without being worried about all of it's internal complexities.

   In programming we can hide some properties and methods of an object and expose those that are needed

   doing this gives several advantages:

   1. simpler interface
   2. reduce the impact of change:
      meaning if tomorrow we need to change some of the inner props or methods none of them will leak to the outside

3. **Inheritance**:

   is a mechanism that allow us to eliminate redundant code. for example:

   we have several HTML elements that share the same properties and methods, instead of defining them for each one of them we just create a parent object and put all those commonalities init and then inherit it by every element

4. **Polymorphism**:

   **Poly** means many and **morph** means forms, is a technic that allow us to get rid of long if/else or switch/case statements.

**Benefits of OOP**:

1. Encapsulation: reduce complexity + increase reusability
2. **Abstraction**: reduce complexity + isolate impact of changes
3. **Inheritance**: eliminate redundant code
4. **Polymorphism**: refactor ugly switch/case statements

## Objects

In object-oriented programming (OOP), an object is a fundamental unit of abstraction that represents a real-world entity or concept. Objects encapsulate both data (attributes or properties) and behaviors (methods or functions) that operate on that data.

Here's a breakdown of key concepts related to objects in OOP:

1. **Class**: A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that all objects of that class will have.

2. **Instance**: An instance, also known as an object, is a concrete realization of a class. When you create an object, you're instantiating a class, which means you're creating a specific instance of that class with its own unique set of data.

3. **Attributes (Properties)**: Attributes are the data members or variables associated with an object. They represent the state of the object. For example, if you have a class representing a car, its attributes might include things like color, make, model, and year.

4. **Methods (Functions)**: Methods are the functions associated with an object. They define the behaviors or actions that an object can perform. For example, a car object might have methods like start(), stop(), accelerate(), and brake().

5. **Encapsulation**: Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (i.e., the object). It hides the internal state of an object from the outside world and only exposes a public interface for interacting with the object.

6. **Abstraction**: Abstraction refers to the concept of simplifying complex systems by modeling them at a high level of abstraction. Objects in OOP provide a way to abstract real-world entities by representing only the relevant characteristics and behaviors.

7. **Inheritance**: Inheritance is a mechanism in OOP that allows a class (subclass or child class) to inherit properties and methods from another class (superclass or parent class). This promotes code reuse and allows for the creation of a hierarchy of classes with increasing levels of specialization.

8. **Polymorphism**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and extensibility in object-oriented systems by allowing different classes to implement the same interface or method in different ways.

In summary, objects in OOP are the building blocks that allow developers to model real-world entities in their programs, providing a powerful way to organize and structure code.

## Private Properties and Methods

```js
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function (factor) {
    //...
  };
  this.draw = function () {
    this.computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(10);
```

```js
//--------------------------------------------
// all properties and methods are exposed and can be accessed and modified everywhere
//--------------------------------------------
// function Circle(radius){
// this.radius = radius;
// this.defaultLocation = {x: 0, y: 0};
// this.computeOptimumLocation = function(factor){
//     //...
// }
// this.draw = function(){
//     this.computeOptimumLocation(0.1)
//     console.log("draw")
// }
// }

// const circle = new Circle(10)
// circle.draw()
//--------------------------------------------
// here is how to apply "abstraction" in JS
//--------------------------------------------

function Circle(radius) {
  this.radius = radius;
  // let's say we don't want this "default" location to be accessible to the consumers of this Constructor
  // this.defaultLocation = {x: 0, y: 0};// this way it's part of the new object which will be created at initialization time
  let defaultLocation = { x: 0, y: 0 }; // by defining it as a variable it's scoped to this Constructor function and will not be accessible to the consumers of this Constructor

  //   this.computeOptimumLocation = function (factor) {
  let computeOptimumLocation = function (factor) {
    // wa want the same thing for computeOptimalLocation
    //...
  };
  this.draw = function () {
    //  this.computeOptimumLocation(0.1); // now this line will not work since computeOptimumLocation is not part of the new object that will be created
    computeOptimumLocation(this.radius); // this method is accessible due to "closures" in JS
    console.log("draw");
  };
}

const circle = new Circle(10);
// all these properties/methods are available before applying "abstraction"
// circle.draw()
// circle.radius
// circle.computeOptimumLocation

// these are the only ones available after applying "abstraction"
circle.radius;
circle.draw();
```

## Getters and Setters

if you have a constructor function and it has some properties that you want to access them on the instance object

### one way to create a getter

```js
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.name} ${lastName}`;
  };
}
let person = new Person("John", "Doe");
person.name; // John
person.getFullName(); // John Doe
```

### the other way

```js
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  // one way to create a getter

  Object.defineProperty(this, "getFullName", {
    get: function () {
      return `${this.name} ${this.lastName}`;
    },
    set: function (fullName) {
      this.name = fullName;
    },
  });
}
let person = new Person("John", "Doe");
console.log(person.name);
// console.log(person.getFullName());
console.log(person.getFullName);
person.getFullName = "something new";
console.log(person.getFullName);
```

## Closure

A closure in JavaScript is a fundamental concept that occurs when a function is able to remember and access its lexical scope, even when that function is executed outside its lexical scope. Closures are a powerful feature because they allow functions to retain access to variables and parameters that were in scope when the function was created.

Here's a more detailed explanation:

### Lexical Scoping

JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the source code. Nested functions have access to variables declared in their outer scope.

### Closure Definition

A closure is created when a function (the inner function) is defined inside another function (the outer function) and the inner function retains access to the outer function’s variables.

### Example of a Closure

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing variable from outer function
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: "I am from outer function"
```

In this example:

- `outerFunction` is defined and within it, `outerVariable` is declared.
- `innerFunction` is defined inside `outerFunction` and accesses `outerVariable`.
- `outerFunction` returns `innerFunction`, and `myClosure` is assigned this returned function.
- When `myClosure` is called, it still has access to `outerVariable` because it was in the scope when `innerFunction` was defined. This is a closure.

### Uses of Closures

Closures are used in many situations in JavaScript:

1. **Data Privacy**: To create private variables.

   ```javascript
   function createCounter() {
     let count = 0;
     return {
       increment: function () {
         count++;
         return count;
       },
       decrement: function () {
         count--;
         return count;
       },
     };
   }

   const counter = createCounter();
   console.log(counter.increment()); // 1
   console.log(counter.increment()); // 2
   console.log(counter.decrement()); // 1
   ```

2. **Function Factories**: To create functions with shared common configurations.

   ```javascript
   function createGreeting(greeting) {
     return function (name) {
       console.log(greeting + ", " + name);
     };
   }

   const sayHello = createGreeting("Hello");
   const sayHi = createGreeting("Hi");

   sayHello("Alice"); // Hello, Alice
   sayHi("Bob"); // Hi, Bob
   ```

3. **Event Handlers**: Closures are often used in event listeners and callbacks.

Understanding closures is crucial for mastering JavaScript, as they are widely used in various frameworks and libraries, as well as in asynchronous programming.

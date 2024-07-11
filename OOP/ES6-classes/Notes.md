# ES6 Classes

ES6 classes in JavaScript provide a simpler and clearer syntax for creating objects and dealing with inheritance. They are a syntactical sugar over JavaScript's existing prototype-based inheritance, making it easier to define and inherit classes. Here’s a detailed explanation of ES6 classes:

### Class Definition

To define a class in ES6, you use the `class` keyword followed by the class name. Inside the class, you define a constructor and methods.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.
```

### Constructor

The `constructor` method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.describe(); // Output: This car is a Toyota Corolla.
```

### Methods

Methods can be defined within the class, and they are added to the prototype of the class. This means they are shared across all instances of the class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.
```

### Inheritance

ES6 classes support inheritance through the `extends` keyword. A class can inherit from another class, gaining access to its methods and properties.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy barks.
```

### Static Methods

Static methods are defined on the class itself, not on instances of the class. They are called on the class rather than on instances.

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // Output: 8
```

### Getters and Setters

Getters and setters can be defined using the `get` and `set` keywords to create methods that act like properties.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value / this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.area = 100;
console.log(rect.width); // Output: 20
```

### Summary

ES6 classes provide a more intuitive and cleaner syntax for creating objects and handling inheritance in JavaScript. They encapsulate data and functionality, making it easier to manage and extend code. With classes, JavaScript developers can write more maintainable and organized object-oriented code.

## Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope (either global or function scope) during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in your code.

Here are some key points to understand about hoisting:

### Variable Hoisting

1. **`var` Keyword**: Variables declared with `var` are hoisted to the top of their function scope (or global scope if declared outside a function). However, only the declaration is hoisted, not the initialization.

   ```javascript
   console.log(myVar); // undefined
   var myVar = 5;
   console.log(myVar); // 5
   ```

   In this example, `var myVar` is hoisted to the top, so the first `console.log` outputs `undefined`. The assignment `myVar = 5` happens at the original place in the code.

2. **`let` and `const` Keywords**: Variables declared with `let` and `const` are also hoisted, but they are not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.

   ```javascript
   console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
   let myLet = 5;
   console.log(myLet); // 5
   ```

   Here, accessing `myLet` before its declaration throws a `ReferenceError`.

### Function Hoisting

1. **Function Declarations**: Function declarations are hoisted along with their definitions. This means you can call the function before its declaration in the code.

   ```javascript
   myFunction(); // "Hello, world!"
   function myFunction() {
     console.log("Hello, world!");
   }
   ```

   In this example, the function `myFunction` is hoisted with its body, so it can be called before its declaration.

2. **Function Expressions**: Function expressions, whether named or anonymous, are not hoisted. They are treated like variables and are only initialized when the interpreter reaches that line of code.

   ```javascript
   myFunction(); // TypeError: myFunction is not a function
   var myFunction = function () {
     console.log("Hello, world!");
   };
   ```

   Here, `myFunction` is hoisted as a variable, so it is `undefined` when called before the assignment.

### Example of Hoisting

To illustrate hoisting, consider the following example:

```javascript
console.log(myVar); // undefined
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
myFunction(); // "Hello, world!"
myFunctionExpression(); // TypeError: myFunctionExpression is not a function

var myVar = 10;
let myLet = 20;
const myConst = 30;

function myFunction() {
  console.log("Hello, world!");
}

var myFunctionExpression = function () {
  console.log("Hello again!");
};
```

In this example:

- `var myVar` is hoisted to the top, so `myVar` is `undefined` at the first `console.log`.
- `let myLet` and `const myConst` are hoisted, but accessing them before initialization throws a `ReferenceError`.
- `function myFunction` is hoisted with its body, so it can be called before its declaration.
- `myFunctionExpression` is hoisted as a variable, so it is `undefined` when called before the assignment, resulting in a `TypeError`.

Understanding hoisting helps in writing more predictable and error-free JavaScript code.


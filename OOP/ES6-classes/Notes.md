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

## Event-Loop

The event loop is a fundamental concept in JavaScript that enables asynchronous programming and handles the execution of non-blocking operations. Understanding the event loop is crucial for grasping how JavaScript handles operations like I/O, timers, and user interactions without blocking the execution of code. Here’s an in-depth explanation:

### How the Event Loop Works

1. **Call Stack**: This is where JavaScript keeps track of function calls. When a function is invoked, it is added to the call stack. When the function returns, it is removed from the call stack.

2. **Web APIs**: These are provided by the browser (or Node.js in a server environment) and include features like `setTimeout`, `DOM events`, and AJAX requests. When these functions are called, they are handled outside of the call stack.

3. **Callback Queue (Task Queue)**: This is where callbacks from asynchronous operations (like timers or event listeners) are queued. Once the main execution stack is empty, the event loop picks the next callback from this queue and pushes it onto the call stack.

4. **Event Loop**: This is the mechanism that coordinates the call stack and the callback queue. It constantly checks if the call stack is empty. If it is, it pushes the first callback from the callback queue to the call stack, thus executing it.

### Event Loop Cycle

Here’s a simplified view of the event loop cycle:

1. **Check Call Stack**: If the call stack is not empty, the event loop waits until it is empty.
2. **Check Callback Queue**: If the call stack is empty, the event loop checks the callback queue.
3. **Execute Callbacks**: The event loop pushes the first callback from the callback queue onto the call stack and executes it.
4. **Repeat**: This process repeats continuously, enabling JavaScript to handle asynchronous operations.

### Example

Consider the following example to illustrate how the event loop works:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");
```

1. **Execution Begins**: The `console.log('Start')` statement is pushed to the call stack and executed.
2. **setTimeout**: The `setTimeout` function is called and a timer is set. The callback is sent to the Web APIs to wait for the timer.
3. **End Log**: The `console.log('End')` statement is pushed to the call stack and executed.
4. **Event Loop**: After 1000ms, the timer expires, and the callback from `setTimeout` is moved to the callback queue.
5. **Callback Execution**: The event loop sees the call stack is empty and pushes the `setTimeout` callback to the call stack, which is then executed, logging 'Timeout callback'.

### Microtasks and Macrotasks

In addition to the callback queue, JavaScript has a concept of microtasks and macrotasks:

- **Microtasks**: These include promises and `process.nextTick` in Node.js. Microtasks are executed immediately after the currently executing script and before the event loop continues.
- **Macrotasks**: These include `setTimeout`, `setInterval`, and I/O tasks. They are handled in the callback queue.

Microtasks have higher priority and are processed before the event loop continues to the next macrotask.

### Example with Promises

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
```

1. **Execution Begins**: `console.log('Start')` is executed.
2. **setTimeout**: `setTimeout` callback is added to the macrotask queue.
3. **Promise**: Promise callback is added to the microtask queue.
4. **End Log**: `console.log('End')` is executed.
5. **Microtask Execution**: Promise callback is executed before the macrotask.
6. **Macrotask Execution**: `setTimeout` callback is executed.

The output will be:

```
Start
End
Promise callback
Timeout callback
```

The event loop ensures that JavaScript can handle asynchronous operations efficiently, maintaining a smooth user experience and preventing blocking code execution.

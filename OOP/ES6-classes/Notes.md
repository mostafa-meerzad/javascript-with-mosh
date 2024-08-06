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

### Method Overriding

If it happens to have an super-class that already implements a method with a specific name and you need to redefine that method in the sub-class you can just define a new method right in the sub-class with the exact name as in the super-class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

class Student extends Person {
  constructor(name, age, lang, height) {
    super(name, age);
    this.lang = lang;
    this.height = height;
  }

  greet() {
    console.log(`Hello there, this it ${this.name}`);
  }
}

const student = new Student("Mostafa", 24, "English", 175);
student.greet(); // Hello there, this is Mostafa
```

the same way if you need to preserve the method implementation from the super-class into the sub-class in other words if you need some of that method's implementation logic from the super-class you can do so by calling the `super.methodName()` as the first line of method body

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

class Student extends Person {
  constructor(name, age, lang, height) {
    super(name, age);
    this.lang = lang;
    this.height = height;
  }

  greet() {
    super.greet();
    console.log(`Hello there, this it ${this.name}`);
  }
}

const student = new Student("Mostafa", 24, "English", 175);
student.greet(); // Hello
/////////////////// Hello there, this it Mostafa
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

## "This" Keyword in Classes

The `this` keyword in JavaScript refers to the object it belongs to. Its value depends on where it is used and how the function it appears in is called. In the context of classes, `this` refers to the instance of the class that the method is called on.

### Understanding `this` in Classes

In JavaScript classes, `this` is used to refer to the current instance of the class, allowing you to access and manipulate the instance's properties and methods. Here's a detailed explanation with examples:

### Example Class

Let's start with a simple class to illustrate how `this` works:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  haveBirthday() {
    this.age += 1;
    console.log(`It's my birthday! I am now ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet(); // "Hello, my name is John and I am 30 years old."
john.haveBirthday(); // "It's my birthday! I am now 31 years old."
```

### How `this` Works in the Example

1. **Constructor**:

   - When a new instance of `Person` is created (e.g., `const john = new Person('John', 30);`), the constructor method is called.
   - Inside the constructor, `this` refers to the new instance being created. So, `this.name` sets the `name` property of `john` to `'John'`, and `this.age` sets the `age` property of `john` to `30`.

2. **Methods**:
   - In the `greet` method, `this.name` and `this.age` refer to the `name` and `age` properties of the instance calling the method. So, `john.greet()` logs `"Hello, my name is John and I am 30 years old."`.
   - Similarly, in the `haveBirthday` method, `this.age` refers to `john`'s `age` property. The method increments `john`'s age by 1 and logs the updated age.

### Important Points about `this`

1. **Context**: The value of `this` is determined by the context in which a function is called. In class methods, `this` refers to the instance of the class.

2. **Arrow Functions**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context (i.e., the enclosing function or class).

   ```javascript
   class Counter {
     constructor() {
       this.count = 0;
     }

     increment() {
       // Regular function
       setTimeout(function () {
         console.lo g(this.count); // undefined (or error in strict mode)
       }, 1000);

       // Arrow function
       setTimeout(() => {
         console.log(this.count); // Correctly refers to the Counter instance
       }, 1000);
     }
   }

   const counter = new Counter();
   counter.increment();
   ```

   In this example, the regular function inside `setTimeout` has its own `this` (which is `undefined` in strict mode or refers to the global object in non-strict mode). The arrow function inherits `this` from the `increment` method, correctly referring to the `Counter` instance.

3. **Binding `this`**: If you need to ensure a function uses the correct `this`, you can explicitly bind it using `Function.prototype.bind`, or use arrow functions for callbacks to preserve the context.

   ```javascript
   class Counter {
     constructor() {
       this.count = 0;
       this.increment = this.increment.bind(this); // Binding `this`
     }

     increment() {
       console.log(this.count); // Correctly refers to the Counter instance
     }
   }

   const counter = new Counter();
   const increment = counter.increment;
   increment(); // 0 (correctly refers to the Counter instance due to binding)
   ```

### Summary

- In classes, `this` refers to the instance of the class.
- The context of `this` is determined by how a function is called.
- Arrow functions inherit `this` from the enclosing context.
- You can use `bind` to ensure functions use the correct `this`.

Understanding how `this` works in classes helps in managing instance properties and methods effectively, leading to more robust and predictable code.

## Computed Property Names

Computed property names in JavaScript allow you to use dynamic expressions as property keys in objects. This feature, introduced in ECMAScript 6 (ES6), enables you to create property names dynamically based on variables or expressions.

### Syntax

Computed property names are defined by enclosing the expression in square brackets `[]` within an object literal. The expression inside the brackets is evaluated, and the result is used as the property key.

### Examples

#### Using Variables

You can use a variable as a computed property name:

```javascript
const propName = "name";
const person = {
  [propName]: "John",
};

console.log(person.name); // 'John'
```

In this example, the `propName` variable contains the string `'name'`, which is used as the property key for the `person` object.

#### Using Expressions

You can also use any valid expression as a computed property name:

```javascript
const propName = "age";
const person = {
  ["first" + "Name"]: "John",
  [propName]: 30,
};

console.log(person.firstName); // 'John'
console.log(person.age); // 30
```

In this example, `'first' + 'Name'` evaluates to `'firstName'`, which becomes a property key, and the value of `propName` is `'age'`, which is also used as a property key.

### Using Computed Property Names in Methods

Computed property names can also be used to define methods in an object:

```javascript
const methodName = "sayHello";
const person = {
  [methodName]() {
    console.log("Hello!");
  },
};

person.sayHello(); // 'Hello!'
```

### Combining Static and Computed Property Names

You can combine static and computed property names within the same object literal:

```javascript
const propName = "dynamicProp";
const obj = {
  staticProp: "This is a static property",
  [propName]: "This is a dynamic property",
};

console.log(obj.staticProp); // 'This is a static property'
console.log(obj.dynamicProp); // 'This is a dynamic property'
```

### Dynamic Property Names in Classes

Computed property names can also be used in classes to define dynamic method names:

```javascript
const methodName = "greet";

class Person {
  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.greet(); // 'Hello, my name is John'
```

### Summary

- **Computed Property Names**: Allow you to use dynamic expressions as property keys in object literals.
- **Syntax**: Enclose the expression in square brackets `[]` within an object literal.
- **Usage**: Useful for creating properties based on variables or expressions.
- **Methods and Classes**: Can also be used to define dynamic method names in objects and classes.

Computed property names enhance the flexibility and expressiveness of object literals in JavaScript, enabling you to create objects with dynamic and context-dependent property names.

## Symbols

Symbols in JavaScript are a relatively new and unique primitive data type introduced in ECMAScript 6 (ES6). They provide a way to create unique and immutable identifiers, which can be used as keys for object properties. Unlike other primitive data types (like strings, numbers, or booleans), every Symbol is unique, even if they have the same description.

### Creating Symbols

You can create a Symbol using the `Symbol()` function. Each call to `Symbol()` creates a new, unique Symbol.

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false
```

You can also provide an optional description to a Symbol for debugging purposes. However, the description does not affect the uniqueness of the Symbol.

```javascript
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");

console.log(symbol1 === symbol2); // false
```

### Using Symbols as Object Properties

Symbols are often used as property keys for objects to avoid property name collisions and ensure the properties are unique.

```javascript
const sym = Symbol("uniqueKey");
const obj = {
  [sym]: "value",
};

console.log(obj[sym]); // 'value'
```

### Symbols and Object Properties

Symbols do not appear in `for...in` loops or `Object.keys()` method, but they can be accessed using `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()`.

```javascript
const sym = Symbol("uniqueKey");
const obj = {
  [sym]: "value",
  normalKey: "normalValue",
};

for (let key in obj) {
  console.log(key); // 'normalKey'
}

console.log(Object.keys(obj)); // ['normalKey']
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(uniqueKey) ]
console.log(Reflect.ownKeys(obj)); // ['normalKey', Symbol(uniqueKey)]
```

### Symbol.for() and Symbol.keyFor()

The `Symbol.for()` method checks the global symbol registry to see if a Symbol with the given key already exists. If it does, it returns the existing Symbol. Otherwise, it creates a new Symbol and adds it to the global registry. This allows for the sharing of Symbols across different parts of your code.

```javascript
const globalSym1 = Symbol.for("globalKey");
const globalSym2 = Symbol.for("globalKey");

console.log(globalSym1 === globalSym2); // true
```

The `Symbol.keyFor()` method returns the key for a Symbol in the global symbol registry.

```javascript
const globalSym = Symbol.for("globalKey");
console.log(Symbol.keyFor(globalSym)); // 'globalKey'
```

### Well-Known Symbols

JavaScript includes several built-in Symbols, known as well-known symbols, which represent internal language behaviors that can be customized. Some of these include:

- `Symbol.iterator`: Used to define the default iterator for an object.
- `Symbol.asyncIterator`: Used to define the default async iterator for an object.
- `Symbol.hasInstance`: Determines if a constructor object recognizes an object as its instance.
- `Symbol.isConcatSpreadable`: Indicates if an object should be flattened to its array elements.
- `Symbol.match`: Used to match a string against a regular expression.
- `Symbol.replace`: Used to replace matched substrings of a string.
- `Symbol.search`: Used to search for a substring within a string.
- `Symbol.split`: Used to split a string at a specified delimiter.
- `Symbol.toPrimitive`: Used to convert an object to a primitive value.
- `Symbol.toStringTag`: Used to create a default string description for an object.
- `Symbol.unscopables`: Used to specify which properties are excluded from the `with` environment bindings.

### Example with `Symbol.iterator`

Here's an example of how to use `Symbol.iterator` to make an object iterable:

```javascript
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let value of myIterable) {
  console.log(value); // 1, 2, 3
}
```

### Summary

- **Symbols** are a primitive data type used to create unique and immutable identifiers.
- Symbols can be used as property keys for objects, ensuring the properties are unique and avoiding name collisions.
- Symbols do not appear in normal property enumeration methods but can be accessed using `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()`.
- `Symbol.for()` and `Symbol.keyFor()` provide a way to create and retrieve Symbols from a global symbol registry.
- Well-known symbols represent internal language behaviors that can be customized.

Symbols are a powerful feature in JavaScript that help in creating unique keys for object properties and customizing object behaviors.

## Private Properties using Symbols

Here's how each approach works:

### Using Symbols

Symbols are unique and immutable, making them useful for creating "hidden" properties.

```javascript
const _privateProperty = Symbol("privateProperty");

class MyClass {
  constructor(value) {
    this[_privateProperty] = value;
  }

  getPrivateProperty() {
    return this[_privateProperty];
  }

  setPrivateProperty(value) {
    this[_privateProperty] = value;
  }
}

const obj = new MyClass("initial value");
console.log(obj.getPrivateProperty()); // Outputs: initial value

obj.setPrivateProperty("new value");
console.log(obj.getPrivateProperty()); // Outputs: new value

console.log(obj[_privateProperty]); // Outputs: new value, but it's not truly private
console.log(Object.getOwnPropertySymbols(obj)); // Outputs: [ Symbol(privateProperty) ]
```

### Using WeakMaps

WeakMaps are collections of key/value pairs where keys are objects and values can be arbitrary values. WeakMaps are not enumerable, which makes them a good choice for private properties.

```javascript
const privateProperties = new WeakMap();

class MyClass {
  constructor(value) {
    privateProperties.set(this, { privateProperty: value });
  }

  getPrivateProperty() {
    return privateProperties.get(this).privateProperty;
  }

  setPrivateProperty(value) {
    privateProperties.get(this).privateProperty = value;
  }
}

const obj = new MyClass("initial value");
console.log(obj.getPrivateProperty()); // Outputs: initial value

obj.setPrivateProperty("new value");
console.log(obj.getPrivateProperty()); // Outputs: new value

console.log(privateProperties.get(obj)); // Outputs: { privateProperty: 'new value' }, but it's not accessible without the WeakMap reference
```

### Comparison and Usage

1. **Symbols**:

   - Symbols can be used to create property keys that are not accessible through typical property enumeration.
   - However, they are not truly private, as they can still be accessed if the symbol is known or retrieved through `Object.getOwnPropertySymbols`.

2. **WeakMaps**:
   - WeakMaps provide a more robust way of encapsulating private data.
   - They ensure the data is only accessible within the scope where the WeakMap is defined and not enumerable.
   - They also help with garbage collection, as the entries are removed when the key objects are no longer reachable.

### Example Using Both Symbols and WeakMaps

Here's a combined example showing both methods:

```javascript
const _symbolPrivateProperty = Symbol("privateProperty");
const weakMapPrivateProperties = new WeakMap();

class MyClass {
  constructor(value1, value2) {
    this[_symbolPrivateProperty] = value1;
    weakMapPrivateProperties.set(this, { privateProperty: value2 });
  }

  getSymbolPrivateProperty() {
    return this[_symbolPrivateProperty];
  }

  setSymbolPrivateProperty(value) {
    this[_symbolPrivateProperty] = value;
  }

  getWeakMapPrivateProperty() {
    return weakMapPrivateProperties.get(this).privateProperty;
  }

  setWeakMapPrivateProperty(value) {
    weakMapPrivateProperties.get(this).privateProperty = value;
  }
}

const obj = new MyClass("symbol value", "weakmap value");

console.log(obj.getSymbolPrivateProperty()); // Outputs: symbol value
console.log(obj.getWeakMapPrivateProperty()); // Outputs: weakmap value

obj.setSymbolPrivateProperty("new symbol value");
obj.setWeakMapPrivateProperty("new weakmap value");

console.log(obj.getSymbolPrivateProperty()); // Outputs: new symbol value
console.log(obj.getWeakMapPrivateProperty()); // Outputs: new weakmap value

console.log(Object.getOwnPropertySymbols(obj)); // Outputs: [ Symbol(privateProperty) ]
console.log(weakMapPrivateProperties.get(obj)); // Outputs: { privateProperty: 'new weakmap value' }
```

### Conclusion

Using Symbols and WeakMaps for private properties in JavaScript provides a level of encapsulation and helps manage data in a way that is not directly accessible through usual object property enumeration. However, the `#` syntax introduced in ES2019 offers a more straightforward and native approach for creating private properties.

## Private Properties the new Way

In JavaScript, private properties in classes can be created using the `#` syntax. These properties are only accessible within the class they are defined in and cannot be accessed or modified directly from outside the class. Here's how you can do it:

### Basic Example

```javascript
class MyClass {
  // Define a private property with the #
  #privateProperty;

  constructor(value) {
    this.#privateProperty = value;
  }

  // Public method to access the private property
  getPrivateProperty() {
    return this.#privateProperty;
  }

  // Public method to modify the private property
  setPrivateProperty(value) {
    this.#privateProperty = value;
  }
}

const obj = new MyClass("initial value");
console.log(obj.getPrivateProperty()); // Outputs: initial value

obj.setPrivateProperty("new value");
console.log(obj.getPrivateProperty()); // Outputs: new value

console.log(obj.#privateProperty); // SyntaxError: Private field '#privateProperty' must be declared in an enclosing class
```

### Key Points

1. **Declaration**: Private properties are declared using the `#` prefix.
2. **Access**: They are only accessible within the class. Attempting to access them directly from outside the class will result in a syntax error.
3. **Methods**: Public methods within the class can access and modify private properties.

### Example with Multiple Private Properties

```javascript
class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }
}

const person = new Person("John", "Doe");
console.log(person.getFullName()); // Outputs: John Doe

person.setFirstName("Jane");
console.log(person.getFullName()); // Outputs: Jane Doe

console.log(person.#firstName); // SyntaxError: Private field '#firstName' must be declared in an enclosing class
```

### Using Getter and Setter Methods

Using getter and setter methods allows controlled access to private properties:

```javascript
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Getter method
  get balance() {
    return this.#balance;
  }

  // Setter method
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("Invalid balance amount");
    }
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // Outputs: 1000

account.balance = 1500;
console.log(account.balance); // Outputs: 1500

account.balance = -500; // Outputs: Invalid balance amount
console.log(account.balance); // Outputs: 1500
```

### Conclusion

Using the `#` syntax is the most straightforward way to create private properties in JavaScript classes. This feature ensures encapsulation and keeps the internal state of objects secure from outside interference.

## Maps explained

A `Map` in JavaScript is a collection of key-value pairs where both keys and values can be of any data type. Unlike plain JavaScript objects, `Map` instances maintain the order of their elements and provide a variety of methods to manipulate the entries.

Here are some key characteristics and features of `Map`:

1. **Ordered**: `Map` maintains the order of the key-value pairs based on the insertion sequence. When you iterate over a `Map`, the entries are returned in the order they were added.

2. **Key Flexibility**: Keys in a `Map` can be of any type, including objects, functions, and primitives. This is different from objects, where keys are typically strings or symbols.

3. **Size Property**: A `Map` has a `size` property that returns the number of key-value pairs in the map.

4. **Iteration**: `Map` provides several methods to iterate over its elements:

   - `keys()`: Returns an iterator over the keys in the map.
   - `values()`: Returns an iterator over the values in the map.
   - `entries()`: Returns an iterator over the key-value pairs in the map.
   - `forEach(callback)`: Executes a provided function once for each key-value pair in the map.

5. **Methods**: `Map` provides several methods for interacting with the entries:
   - `set(key, value)`: Adds or updates an element with the specified key and value.
   - `get(key)`: Returns the value associated with the specified key, or `undefined` if the key is not found.
   - `has(key)`: Returns a boolean indicating whether an element with the specified key exists.
   - `delete(key)`: Removes the element with the specified key.
   - `clear()`: Removes all elements from the map.

Here is an example demonstrating the usage of `Map`:

```javascript
let map = new Map();

// Adding key-value pairs
map.set("name", "Alice");
map.set(1, "one");
map.set(true, "boolean");

// Accessing values
console.log(map.get("name")); // Output: Alice
console.log(map.get(1)); // Output: one
console.log(map.get(true)); // Output: boolean

// Checking for keys
console.log(map.has("name")); // Output: true
console.log(map.has("age")); // Output: false

// Removing a key-value pair
map.delete("name");
console.log(map.has("name")); // Output: false

// Size of the map
console.log(map.size); // Output: 2

// Iterating over the map
map.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// 1 one
// true boolean

// Using for...of loop to iterate
for (let [key, value] of map) {
  console.log(key, value);
}
// Output:
// 1 one
// true boolean

// Clearing all elements
map.clear();
console.log(map.size); // Output: 0
```

In this example, we create a `Map`, add key-value pairs using `set`, retrieve values with `get`, check for the presence of keys using `has`, remove entries with `delete`, and clear all entries with `clear`. The iteration methods `forEach` and `for...of` are also demonstrated to show how to loop through the map's elements.

## WeakMap explained

A `WeakMap` in JavaScript is a special kind of `Map` that holds "weak" references to its keys. This means that if there are no other references to an object that is used as a key in a `WeakMap`, the garbage collector can free the memory used by that object. This makes `WeakMap` useful for scenarios where you want to associate data with objects but don't want to prevent those objects from being garbage collected if they are no longer needed elsewhere.

Here are some key points about `WeakMap`:

1. **Keys Must Be Objects**: Unlike a regular `Map`, the keys in a `WeakMap` must be objects. Primitive values (like strings, numbers, etc.) cannot be used as keys.

2. **No Enumeration**: You cannot get a list of keys or entries in a `WeakMap`. There are no methods like `keys()`, `values()`, or `entries()` available. This is because the keys are held weakly and can be garbage collected at any time, making it impossible to enumerate them reliably.

3. **Garbage Collection**: If no other references to an object used as a key exist, that object can be garbage collected, and its entry in the `WeakMap` will be removed automatically.

4. **Methods**: `WeakMap` provides four main methods:
   - `set(key, value)`: Adds a new element with the specified key and value to the `WeakMap`.
   - `get(key)`: Returns the value associated with the specified key, or `undefined` if the key doesn't exist in the `WeakMap`.
   - `delete(key)`: Removes the specified element from the `WeakMap`.
   - `has(key)`: Returns a boolean indicating whether an element with the specified key exists in the `WeakMap`.

Here's a simple example demonstrating the use of `WeakMap`:

```javascript
let weakMap = new WeakMap();

let obj1 = { name: "John" };
let obj2 = { name: "Doe" };

weakMap.set(obj1, "Engineer");
weakMap.set(obj2, "Designer");

console.log(weakMap.get(obj1)); // Output: Engineer
console.log(weakMap.get(obj2)); // Output: Designer

obj1 = null; // Now the object { name: 'John' } is eligible for garbage collection

// After garbage collection, the entry for obj1 in the WeakMap will be removed
console.log(weakMap.get(obj1)); // Output: undefined
console.log(weakMap.has(obj1)); // Output: false
```

In this example, when `obj1` is set to `null`, the `{ name: 'John' }` object can be garbage collected, and its associated entry in the `WeakMap` will be removed.

`WeakMap` is particularly useful for memory-sensitive tasks, such as caching or storing metadata for objects without affecting their lifecycle.

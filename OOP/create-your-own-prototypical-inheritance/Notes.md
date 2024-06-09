# Creating Your Own Prototypical Inheritance

Creating your own prototypical inheritance in JavaScript involves defining a constructor function and setting up the prototype chain manually. This can be done by using the `Object.create` method to set the prototype of a constructor function to an instance of another constructor function. Here’s how you can do it step by step:

### Step-by-Step Guide

1. **Define a Base Constructor Function**: This will be the parent class.
2. **Add Methods to the Base Constructor's Prototype**: These methods will be inherited by all instances.
3. **Define a Derived Constructor Function**: This will be the child class.
4. **Set the Prototype of the Derived Constructor**: Use `Object.create` to set the prototype of the derived constructor to an instance of the base constructor.
5. **Set the Constructor Property**: Ensure the constructor property points to the derived constructor.
6. **Add Methods to the Derived Constructor's Prototype**: These methods will be specific to instances of the derived constructor.

### Example

Here’s an example to demonstrate prototypical inheritance:

```javascript
// Step 1: Define a Base Constructor Function
function Animal(name) {
  this.name = name;
}

// Step 2: Add Methods to the Base Constructor's Prototype
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

// Step 3: Define a Derived Constructor Function
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Step 4: Set the Prototype of the Derived Constructor
Dog.prototype = Object.create(Animal.prototype);

// Step 5: Set the Constructor Property
Dog.prototype.constructor = Dog;

// Step 6: Add Methods to the Derived Constructor's Prototype
Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

// Creating instances
let dog = new Dog("Rex", "German Shepherd");

// Using methods from both the base and derived constructors
dog.speak(); // Rex makes a sound
dog.bark(); // Rex barks

// Checking prototype chain
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog.hasOwnProperty("speak")); // false, inherited
console.log(dog.hasOwnProperty("bark")); // false, inherited
```

### Explanation

1. **Base Constructor Function**: `Animal` is defined with a property `name` and a method `speak` added to its prototype.
2. **Derived Constructor Function**: `Dog` is defined and calls `Animal` using `Animal.call(this, name)` to inherit the `name` property.
3. **Prototype Chain**: `Dog.prototype` is set to `Object.create(Animal.prototype)`, creating an object that inherits from `Animal.prototype`.
4. **Constructor Property**: `Dog.prototype.constructor` is set to `Dog` to ensure the correct constructor reference.
5. **Adding Methods**: `bark` is added to `Dog.prototype` to provide additional functionality specific to `Dog`.

This sets up a proper prototypical inheritance chain where instances of `Dog` inherit properties and methods from `Animal`, while also having their own specific properties and methods.

## Resetting the constructor property whenever resetting the prototype

Setting the constructor of `Dog.prototype` to `Dog` is important for maintaining the correct reference to the constructor function within the prototype chain. Here are the reasons why you should do this:

### 1. **Preserve Constructor Reference:**

When you set `Dog.prototype = Object.create(Animal.prototype)`, you create a new object whose prototype is `Animal.prototype`. This means that `Dog.prototype.constructor` now points to `Animal` instead of `Dog`. By explicitly setting `Dog.prototype.constructor = Dog`, you correct this reference so that it accurately reflects the constructor function that created instances of `Dog`.

### 2. **Instance Identification:**

Setting the correct constructor reference ensures that instances of `Dog` can be correctly identified. This is useful when checking the constructor property of an instance:

```javascript
let dog = new Dog("Rex", "German Shepherd");
console.log(dog.constructor === Dog); // true
console.log(dog.constructor === Animal); // false (correct behavior after setting the constructor)
```

### 3. **Prototypal Inheritance Clarity:**

Maintaining the correct constructor reference makes the prototype chain more understandable and maintains the logical relationship between the constructor function and its prototype. This clarity is beneficial for debugging and maintaining code.

### 4. **Consistency with Native JavaScript Behavior:**

In native JavaScript objects, the `constructor` property of an object points to the function that was used to construct it. By setting `Dog.prototype.constructor = Dog`, you ensure that your custom objects behave in a consistent manner with native objects.

### Example

Here's an example demonstrating why setting the constructor is necessary:

```javascript
// Base constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to Animal's prototype
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

// Derived constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Setting up inheritance
Dog.prototype = Object.create(Animal.prototype);

// By default, constructor is now Animal, not Dog
console.log(Dog.prototype.constructor === Animal); // true

// Correcting the constructor reference
Dog.prototype.constructor = Dog;

// Now constructor is correctly set to Dog
console.log(Dog.prototype.constructor === Dog); // true

// Adding a method to Dog's prototype
Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

// Creating an instance of Dog
let dog = new Dog("Rex", "German Shepherd");

// Using methods from both the base and derived constructors
dog.speak(); // Rex makes a sound
dog.bark(); // Rex barks

// Checking the constructor property
console.log(dog.constructor === Dog); // true
```

**Note**: in cases that the **Base Constructor** function takes arguments we need to call the Base-Constructor and pass needed arguments inside the **Derived Constructor** function as shown above

### Summary

Setting `Dog.prototype.constructor = Dog` is a crucial step in ensuring that the constructor property correctly references the `Dog` constructor function. This practice maintains the integrity of the prototype chain, aids in debugging and maintenance, and ensures consistency with native JavaScript behavior.

## Method Overriding

If a method or property inherited from the base constructor needs to be overridden in the derived constructor, you can simply define the method or property on the derived constructor's prototype with the same name. This will replace the inherited method or property with the one defined in the derived constructor.

Here’s a step-by-step guide on how to override methods and properties:

### Example

1. Define the Base Constructor Function with a method.
2. Define the Derived Constructor Function and call the base constructor.
3. Set Up Inheritance by setting the prototype of the derived constructor to an object created from the base constructor's prototype.
4. Override the Method by defining a method with the same name on the derived constructor's prototype.

### Step-by-Step Implementation

#### Step 1: Define the Base Constructor Function

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};
```

#### Step 2: Define the Derived Constructor Function

```js
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}
```

### Step 3: Set Up Inheritance

```js
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
```

### Step 4: Override the Method

```js
Dog.prototype.speak = function () {
  console.log(this.name + " barks");
};
```

### Full Example

```js
// Base constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

// Derived constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Setting up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Overriding the speak method in Dog
Dog.prototype.speak = function () {
  console.log(this.name + " barks");
};

// Creating an instance of Dog
let dog = new Dog("Rex", "German Shepherd");

// Using the overridden method
dog.speak(); // Rex barks

// Checking prototype chain
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
```

## Polymorphism

Polymorphism is a fundamental concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common super class. It enables methods to be used interchangeably across different objects, even if these objects are instances of different classes. Polymorphism enhances flexibility and maintainability in code by allowing a single interface to represent different underlying forms (data types).

### Types of Polymorphism

There are two main types of polymorphism:

1. **Compile-Time Polymorphism (Static Binding):**

   - Achieved through method overloading and operator overloading.
   - Determined at compile time.
   - JavaScript does not natively support method overloading or operator overloading like some other languages (e.g., C++, Java).

2. **Run-Time Polymorphism (Dynamic Binding):**
   - Achieved through method overriding.
   - Determined at runtime.
   - JavaScript supports run-time polymorphism through prototypal inheritance and method overriding.

### Polymorphism in JavaScript

In JavaScript, polymorphism is primarily achieved through method overriding. Here’s how you can implement and understand polymorphism using JavaScript's prototypal inheritance:

### Example: Polymorphism with Method Overriding

1. **Define a Base Class:**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
```

2. **Define Derived Classes:**

```javascript
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows`);
  }
}
```

3. **Create Instances of the Derived Classes:**

```javascript
const animals = [new Dog("Rex"), new Cat("Whiskers")];

animals.forEach((animal) => animal.speak());
// Output:
// Rex barks
// Whiskers meows
```

### Explanation

1. **Base Class (`Animal`):**
   - Defines a generic `speak` method.
2. **Derived Classes (`Dog` and `Cat`):**
   - Override the `speak` method to provide specific implementations for `Dog` and `Cat`.
3. **Polymorphic Behavior:**
   - An array of `Animal` objects (containing instances of `Dog` and `Cat`) is iterated over, and the `speak` method is called on each object.
   - The correct `speak` method is called based on the actual object type (either `Dog` or `Cat`), demonstrating polymorphic behavior.

### Practical Use of Polymorphism

Polymorphism allows for writing more generic and reusable code. Consider a function that processes a list of animals:

```javascript
function makeAnimalsSpeak(animals) {
  animals.forEach((animal) => animal.speak());
}

const animals = [
  new Dog("Rex"),
  new Cat("Whiskers"),
  new Animal("Generic Animal"),
];

makeAnimalsSpeak(animals);
// Output:
// Rex barks
// Whiskers meows
// Generic Animal makes a sound
```

In this function, `makeAnimalsSpeak`, the same code works for different types of `Animal` objects. The function doesn't need to know the specific type of animal; it simply calls `speak` on each one, and the appropriate method is executed based on the actual object type.

### Summary

Polymorphism in JavaScript, mainly achieved through method overriding, allows objects of different classes to be treated as objects of a common super class. This enables the same method to behave differently based on the object it is called on, providing flexibility and reusability in code. By leveraging polymorphism, developers can write more abstract and generalized code, reducing duplication and improving maintainability.

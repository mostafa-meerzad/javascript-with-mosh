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


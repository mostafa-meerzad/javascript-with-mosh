# Prototypes

## Inheritance

inheritance is one of the core concepts of OOP that enables an object to take on the properties and methods of another object and this makes it easy to reuse code in different parts of application.

Inheritance divides into two category

1. Classical Inheritance
2. Prototypical Inheritance

### Classical Inheritance

here's an example:

imagine we have a **Circle** and a **Square** Object/Class each one has a **computeOptimumLocation** method with the same implementation and if there is a bug with it we have to apply changes on different places that's where **Inheritance** comes to rescue.

![two classes with same method](<Screenshot%20(11).png>)

we define a new Object/Class call it **Shape** put **computeOptimumLocation** in

![extract commonalities](<Screenshot%20(12).png>)

and make **Circle** and **Square** Objects/Classes inherit from the **Shape** class

![extract commonalities](<Screenshot%20(13).png>)

#### Terminologies

![extract commonalities](<Screenshot%20(14).png>)

**Shape** class is called **Base/Super/Parent**

**Circle** and **Square** are called **Derived/Sub/Child**

**The relationship** is called **IS-A**: Circle is-a Shape

### Prototypical Inheritance

in JS we don't have classes we have objects, now how to implement inheritance in JS:

well we create a **Circle** object and a **Shape** object and put all common properties/methods such as **computeOptimumLocation()** init and then somehow we can link this **Circle** object to **Shape** object and we call this **Shape** object **Prototype** of the **Circle** object

**Note**: Prototype is just a parent object for another object

![prototype](<Screenshot%20(16).png>)

**Note**: all object in JS has a prototype that inherits all the members defined in this prototype except one **special object** we call it **Base Object** remember this is not an official term.

every object in JS directly or indirectly inherits from **Object Base**.

**Object Base** is the root of all objects in javascript and it doesn't have a prototype or parent

here is the **Object Base** in action

object **x** and **y** is created and their prototype is shown which is that **Object Base** and it has no prototype property which means it itself is the base implementation
![objectBase](<Screenshot%20(18).png>)

the object that we call **Object Base** has just one instance on memory here is the prove
![objectBase](<Screenshot%20(19).png>)

`Object.getPrototypeOf()` is the same for both **x** and **y**

#### Implement Prototypical Inheritance

consider the following example

```js
let x = {};

x.toString();
```

how **x** got **toString** method when we didn't define it?

when we access a method/property on an object JS engine first looks for that property or method on the object itself. if it can't find it then it looks at the prototype of that object again if it can't find that member it will look at the prototype of that object all the way up to the root object that we called **Base Object**.

so this is prototypical inheritance in action, when accessing property/method on an object, JS engine walks up the prototype-chain to find the target member

## Multilevel Inheritance

Multi-level inheritance is the situation in which one object is derived form another object, which itself is derived form another object

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const myCircle = new Circle(10);
```

when we inspect `myCircle` in the console

![multilevel-inheritance](<./Screenshot (21).png>)

we can see the prototype of `myCircle` is another object let's call it `circleBase` which is created by `Circle` constructor and this object itself has a prototype which is the `objectBase` (the root implementation of Object or parent of all objects in JS)

![multilevel-inheritance](<./Screenshot (22).png>)

**Note**: Objects created by a given constructor will have the same prototype.

![multilevel-inheritance](<./Screenshot (23).png>)

## Property Descriptors

Property descriptors in JavaScript are objects that describe the configuration and behavior of a property on an object. They provide more control over how properties are defined and interacted with, beyond simple value assignment. Property descriptors can specify characteristics such as whether a property is writable, enumerable, or configurable.

### Types of Property Descriptors

There are two main types of property descriptors:

1. **Data Descriptors**: Describe properties that have a value.
2. **Accessor Descriptors**: Describe properties that are defined by getter and setter functions.

### Data Descriptors

A data descriptor has the following attributes:

- **value**: The value associated with the property (default is `undefined`).
- **writable**: A boolean indicating if the value of the property can be changed (default is `false`).
- **enumerable**: A boolean indicating if the property will show up during enumeration of the properties on the object (default is `false`).
- **configurable**: A boolean indicating if the property descriptor can be changed and if the property can be deleted from the object (default is `false`).

### Accessor Descriptors

An accessor descriptor has the following attributes:

- **get**: A function that serves as a getter for the property, or `undefined` if there is no getter (default is `undefined`).
- **set**: A function that serves as a setter for the property, or `undefined` if there is no setter (default is `undefined`).
- **enumerable**: A boolean indicating if the property will show up during enumeration of the properties on the object (default is `false`).
- **configurable**: A boolean indicating if the property descriptor can be changed and if the property can be deleted from the object (default is `false`).

### Example Usage

Here is an example of defining properties with property descriptors:

```javascript
let obj = {};

// Defining a data property
Object.defineProperty(obj, "dataProp", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj.dataProp); // 42

// Defining an accessor property
Object.defineProperty(obj, "accessorProp", {
  get: function () {
    return "getter called";
  },
  set: function (value) {
    console.log("setter called with value:", value);
  },
  enumerable: true,
  configurable: true,
});

console.log(obj.accessorProp); // getter called
obj.accessorProp = "new value"; // setter called with value: new value

// Checking property descriptors
console.log(Object.getOwnPropertyDescriptor(obj, "dataProp"));
// { value: 42, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(obj, "accessorProp"));
// { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }
```

### Modifying Property Attributes

You can also modify the attributes of existing properties using property descriptors:

```javascript
let obj = { prop: 10 };

// Make the property non-writable
Object.defineProperty(obj, "prop", {
  writable: false,
});

obj.prop = 20; // This will not change the value
console.log(obj.prop); // 10

// Make the property non-enumerable
Object.defineProperty(obj, "prop", {
  enumerable: false,
});

console.log(Object.keys(obj)); // []

// Make the property non-configurable
Object.defineProperty(obj, "prop", {
  configurable: false,
});

// Trying to delete the property will fail
delete obj.prop;
console.log(obj.prop); // 10

// Attempting to reconfigure the property will throw an error
// Object.defineProperty(obj, 'prop', { writable: true }); // TypeError: Cannot redefine property: prop
```

### Summary

Property descriptors provide a powerful way to control the behavior of properties in JavaScript objects. They allow developers to define properties with specific characteristics, such as being read-only, non-enumerable, or having custom getter and setter functions. This feature is essential for creating more robust and secure JavaScript applications.

## Constructor Prototypes

Constructor functions also have prototype which inherits all their members from and that prototype is the same for all objects created using that constructor function.

## Prototype vs Instance Members

In JavaScript, objects can have both prototype members and instance members. Understanding the difference between these two types of members is crucial for effective object-oriented programming in JavaScript.

### Prototype Members

Prototype members are properties and methods that are defined on an object's prototype. Every JavaScript object has a prototype, which is an object itself, and objects inherit properties and methods from their prototypes. When a method or property is defined on a prototype, all instances of that object share that method or property.

#### Example:

```javascript
// Constructor function
function Animal(name) {
  this.name = name; // Instance member
}

// Defining a prototype method
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

// Creating instances
let dog = new Animal("Dog");
let cat = new Animal("Cat");

// Both instances share the same speak method from the prototype
dog.speak(); // Dog makes a sound
cat.speak(); // Cat makes a sound

// Checking prototype members
console.log(dog.hasOwnProperty("speak")); // false
console.log(Animal.prototype.hasOwnProperty("speak")); // true
```

### Instance Members

Instance members are properties and methods that are defined directly on the instance of the object, typically inside the constructor function. Each instance of the object has its own copy of these properties and methods.

#### Example:

```javascript
// Constructor function
function Animal(name) {
  this.name = name; // Instance member

  // Defining an instance method
  this.speak = function () {
    console.log(this.name + " makes a sound");
  };
}

// Creating instances
let dog = new Animal("Dog");
let cat = new Animal("Cat");

// Both instances have their own speak method
dog.speak(); // Dog makes a sound
cat.speak(); // Cat makes a sound

// Checking instance members
console.log(dog.hasOwnProperty("speak")); // true
console.log(cat.hasOwnProperty("speak")); // true
```

### Key Differences

1. **Shared vs. Individual**:

   - **Prototype Members**: Shared among all instances of the object. Any changes to the prototype member are reflected in all instances.
   - **Instance Members**: Unique to each instance. Changes to an instance member affect only that particular instance.

2. **Memory Usage**:

   - **Prototype Members**: More memory-efficient as the method or property is stored once on the prototype and shared.
   - **Instance Members**: Each instance has its own copy, which can consume more memory if many instances are created.

3. **Inheritance**:
   - **Prototype Members**: Inherited by all instances. If a method is not found on the instance, JavaScript looks up the prototype chain.
   - **Instance Members**: Not inherited by other instances. They are specific to the instance where they are defined.

### Combining Prototype and Instance Members

It is common to use both prototype and instance members to balance memory efficiency and flexibility:

```javascript
function Animal(name) {
  this.name = name; // Instance member
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

Animal.prototype.walk = function () {
  console.log(this.name + " is walking");
};

let dog = new Animal("Dog");
let cat = new Animal("Cat");

// Using instance and prototype members
dog.speak(); // Dog makes a sound
cat.speak(); // Cat makes a sound
dog.walk(); // Dog is walking
cat.walk(); // Cat is walking
```

In this combined approach, instance-specific data (like `name`) is stored in instance members, while shared behavior (like `speak` and `walk` methods) is defined on the prototype. This approach leverages the benefits of both instance and prototype members.

## Iterating Properties

When adding members to the prototype it doesn't matter you apply changes to the prototype before creating an instance or after because there is only one reference in the memory and changes to that is reflected to all the instances

**Note**: `Object.keys(targetObj)` only returns instance members not prototype members, but a for loop iterates over all keys of an object no matter the object members are coming from **instance** or **prototype**

`targetObj.hasOwnProperty(propertyName)` method is used to check if a property is defined in the instance or prototype

**Note**: **instance properties** are also known as **own properties**

In JavaScript, you can check if a property is not an own property (i.e., it's inherited from the prototype) by using the `hasOwnProperty` method. This method checks if the object itself has the specified property, without looking up the prototype chain.

If you want to determine whether a property is inherited (not an own property), you can combine `hasOwnProperty` with the `in` operator. The `in` operator checks if a property exists in the object or its prototype chain.

Here is how you can do it:

1. Use `hasOwnProperty` to check if the property is an own property.
2. Use the `in` operator to check if the property exists in the object or its prototype chain.
3. If the property exists (checked with `in`) but is not an own property (checked with `hasOwnProperty`), it means the property is inherited.

### Example

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound');
};

let dog = new Animal('Dog');

// Checking if 'speak' is an own property
console.log(dog.hasOwnProperty('speak')); // false

// Checking if 'name' is an own property
console.log(dog.hasOwnProperty('name')); // true

// Checking if 'speak' is inherited
if ('speak' in dog && !dog.hasOwnProperty('speak')) {
    console.log("'speak' is an inherited property");
}

// Checking if 'name' is inherited
if ('name' in dog && !dog.hasOwnProperty('name')) {
    console.log("'name' is an inherited property");
} else {
    console.log("'name' is an own property");
}
```

### Explanation

1. **`hasOwnProperty` Method**:
   - `dog.hasOwnProperty('speak')` returns `false` because `speak` is not an own property of `dog`; it is inherited from `Animal.prototype`.
   - `dog.hasOwnProperty('name')` returns `true` because `name` is an own property of `dog`.

2. **`in` Operator**:
   - `'speak' in dog` returns `true` because `speak` exists in the prototype chain of `dog`.
   - `'name' in dog` returns `true` because `name` exists as an own property of `dog`.

3. **Combined Check**:
   - The condition `if ('speak' in dog && !dog.hasOwnProperty('speak'))` evaluates to `true`, confirming that `speak` is inherited.
   - The condition `if ('name' in dog && !dog.hasOwnProperty('name'))` evaluates to `false`, confirming that `name` is an own property.

This approach allows you to distinguish between own properties and inherited properties effectively.


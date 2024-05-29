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

object **x** and **y** is created and their prototype is shown which is that **Object Base** and it has not prototype property which means it itself is the base implementation
![objectBase](<Screenshot%20(18).png>)

the object that we call **Object Base** has just one instance on memory here is the prove
![objectBase](<Screenshot%20(19).png>)

`Object.getPrototypeOf()` is the same for both **x** and **y**

#### Implement Prototypical Inheritance

consider the following example

```js
let x = {}

x.toString() 
```
how **x** got **toString** method when we didn't define it?

when we access a method/property on an object JS engine first looks for that property or method on the object itself. if it can't find it then it looks at the prototype of that object again if it can't find that member it will look at the prototype of that object all the way up to the root object that we called **Base Object**.

so this is prototypical inheritance in action, when accessing property/method on an object, JS engine walks up the prototype-chain to find the target member
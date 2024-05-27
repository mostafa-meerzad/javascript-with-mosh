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

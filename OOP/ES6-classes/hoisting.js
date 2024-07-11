// ---------------- Each Block should be executed once at a time ----------------

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

// ------------------------------------------------
// console.log(myLet) // ReferenceError: Cannot access 'myLet' before initialization
// let myLet = 10
// console.log(myLet) // 10

// ----------------------------------------------
// myFunction(); // "Hello, world!"
// function myFunction() {
//   console.log("Hello, world!");
// }

// ------------------------------------------------------------
myFunction(); // TypeError: myFunction is not a function
var myFunction = function () {
  console.log("Hello, world!");
};

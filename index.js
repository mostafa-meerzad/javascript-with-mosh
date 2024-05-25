// console.log(typeof "string")
// console.log(typeof 124)
// console.log(typeof false)
// console.log(typeof undefined)
// console.log(typeof null)

function greet() {
  console.log("Hello World");
}

// console.log(true || false)
// console.log(false || true )
// console.log(true || "something")
// console.log( "something" || true )
// console.log( "something" || false)
// console.log(  false || "something")
// console.log(false || "Hello" || 100)

// console.log(false || 10 + 44)
// console.log(true && 10 + 44)

// let role = "guestss";

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("moderator user");
//     break;

//   default:
//     console.log("default user");
// }

// for(let i = 0; i < 5; i++){
//     console.log("hello, ", i);
// }

// let y = 0;
// while(y < 5){
// console.log("Hello ")
// }

// limit is 70km/h
// 5 km/h over limit 1 point
// total points 12 or more suspend their license

function Circle(radius) {
  this.radius = radius;
  this.color = "Yellow";
}

// const circle = new Circle(4);
// console.log(circle.radius)
// console.log(Circle.constructor)
// console.log(Circle.length)
// console.log(Circle.name)
// console.log(Object.name)
// console.log(Array.name)

let x = 10;
let y = x;

// now if you assign another value to the x the value of y doesn't change
// variables are independent
x = 20;

console.log(x); //=> 20
console.log(y); //=> 10

let j = { value: 10 };
let k = j;

console.log(j.value); //=> 10
console.log(k.value); //=> 10
// now if you modify the value property of k that will effect the value of j as well

k.value = 20;
console.log(j.value); //=> 20
console.log(k.value); //=> 20

console.log("--------------------");
// here we have a variable that holds a number and we pass it to a function which adds one to it what do you think will happen?
let number = 10;

function increase(number) {
  // this number variable in scoped inside this function only and it's value is increased only here
  number++;
}

increase(number);

console.log(number); //=> 10
// the number variable still showing 10

function increaseGlobal() {
  // in this case the number variable is a global variable and it's value in increased by one
  number++;
}
increaseGlobal();
console.log(number);

let myObj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  method() {
    console.log("something");
  },
};

// for (const key in myOjb) {
//   console.log(key);
// }

// for (const key of Object.keys(myOjb)) {
//   console.log(key);
// }

// console.log(Object.keys(myObj))
// console.log(Object.entries(myObj))

// for(const entry of Object.entries(myObj)){
//   console.log(entry)
// }

// console.log("first" in myObj)

let square = {
  color: "red",
  width: 100,
  height: 100,
  draw() {
    console.log("drawing");
  },
};

// let other = {}

// for(let key in square){
//   other[key] = square[key];
// }

// console.log(square)
// console.log(other)

// let other = Object.assign({}, square);
// console.log(square);
// console.log(other);

let other = { ...square };
console.log(square);
console.log(other);

console.log("----------------------------------");
let myArray = [1, 3, 5];

myArray.push("something");
console.log(myArray);
myArray.push("something", "something else");
console.log(myArray);

let myArray1 = [1, 3, 5];
myArray1.unshift("something");
console.log(myArray1);
myArray1.unshift("something", "something else");
console.log(myArray1);

let myArray2 = [1, 2, 4];
myArray2.splice(1, 0, "somethingElse");
console.log(myArray2);
myArray2.splice(1, 0, "somethingElse", "something else");
console.log(myArray2);

console.log("----------------------------");
console.log(1 in myArray2);
console.log(myArray2.includes(1));

let myNewArray = myArray.findIndex(function (e) {
  return e === 2;
});

console.log(myNewArray);
console.log("-----------------------------------");

console.log(myArray.pop());
console.log(myArray.shift());
console.log(myArray.splice(1, 1));
console.log("-----------------------------");

let arr = [1, 2, 3];

console.log(arr.splice(1, 0, 22));

console.log(arr);

console.log("first".split("r"));
console.log("----------------------------------");

let array3 = [1, 4, 2, 4];

console.log(array3.sort());
console.log(array3.reverse());
console.log("-----------------------------------");

let courses = [
  { id: 2, name: "BNode.js" },
  { id: 1, name: "AJavascript" },
];

console.log(
  courses.sort(function (a, b) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  })
);
console.log(
  courses.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
);

console.log("N" < "J");

console.log("------------------------");

const numbers = [1, 2, 3, 5, 6];

const items = numbers.map((n) => ({
  value: n,
}));

console.log(items);

console.log("--------------------------");

let nums = [1, -1, 4, 8];

let sum = nums.reduce((acc, elem) => acc + elem, 10);
console.log(sum);

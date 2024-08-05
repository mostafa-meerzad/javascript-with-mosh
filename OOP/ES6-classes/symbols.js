const mySym = Symbol();

const guy = { [mySym]: "Mostafa", age: 24 };
console.log(guy); // { age: 24, [Symbol()]: 'Mostafa' }
console.log();

console.log(guy[mySym]); // Mostafa

const mySymbol1 = Symbol("description");
const mySymbol2 = Symbol("description");

console.log(mySymbol1 == mySymbol2); // false

const sym = Symbol("a unique prop");

const person = {
  name: "Mostafa",
  age: 24,
  [sym]: "something unique",
};

console.log(person);

console.log(mySymbol1 === mySymbol2); // Symbols are unique

// create Symbols with provided descriptions/keys
const sym1 = Symbol.for("mySymbol1");
const sym2 = Symbol.for("mySymbol2");

console.log(Symbol.for("mySymbol1") === sym1); // confirming symbol with "mySymbol1" returned form the global Symbol registry is the same as the one created before

const mySymbol1 = Symbol("description")
const mySymbol2 = Symbol("description")

console.log(mySymbol1 == mySymbol2) // false

const sym = Symbol("a unique prop")

const person = {
    name: "Mostafa",
    age: 24,
    [sym]: "something unique"
}

console.log(person)

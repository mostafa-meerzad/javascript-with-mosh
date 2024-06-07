function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("drawing");
  };
}

const myCircle = new Circle(4);

Circle.prototype.location = () => {console.log("default location")}

console.log(myCircle.hasOwnProperty("radius"))
console.log(myCircle.hasOwnProperty("draw"))
console.log(myCircle.hasOwnProperty("location"))


//-----------------------------

let person = {name:"John"}
// let objectBase = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString")
// 
// console.log(descriptor)

// property descriptors in action

Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
})

console.log(person.name)
person.name = "Smith"
console.log(person.name)

console.log(Object.keys(person))
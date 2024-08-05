const obj1 = {name:"John", age: 34}
const obj2 = {name:"James", age: 50}

const weakmap = new WeakMap()
weakmap.set(obj1, "Software Engineer")
weakmap.set(obj2, "Journalist")

console.log(weakmap.get(obj1)) // Software Engineer
console.log(weakmap.get(obj2)) // Journalist

console.log(weakmap.get({name: "Mostafa"})) // => undefined, because {name: "Mostafa"} doesn't exists on weakmap "WeakMap"
console.log(weakmap.has(obj1)) // true
weakmap.delete(obj1) // remove obj1 object from the weakmap
console.log(weakmap.has(obj1)) // => false, obj1 no longer exists on the weakmap

console.log()
// One way to use WeakMaps to create private properties, each private property is a separate WeakMap
// this approach is cleaner and easier to read
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("move ", this);
    });
  }

  draw() {
    _move.get(this)();
    console.log("draw");
  }
}

const c = new Circle();
c.draw();

// the other way in which one WeakMap is created and all private properties are added to 
// this approach is a little bit noisy and might be hard to read
console.log()
const privateProps = new WeakMap();

class NewCircle{
    constructor(radius) {

        privateProps.set(this, {
            radius,
            move: ()=>{
                console.log("move", this)}
        })
    }

    draw() {
        console.log("this is the radius ", privateProps.get(this)["radius"])
    }

    privateMethod(){
        console.log(privateProps.get(this)["move"])
        privateProps.get(this)["move"]()
    }
}

const newC = new NewCircle(10);
newC.draw();
newC.privateMethod();
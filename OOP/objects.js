//--------------------------------------------
// all properties and methods are exposed and can be accessed and modified everywhere
//--------------------------------------------
// function Circle(radius){
// this.radius = radius;
// this.defaultLocation = {x: 0, y: 0};
// this.computeOptimumLocation = function(factor){
//     //...
// }
// this.draw = function(){
//     this.computeOptimumLocation(0.1)
//     console.log("draw")
// }
// }

// const circle = new Circle(10)
// circle.draw()
//--------------------------------------------
// here is how to apply "abstraction" in JS
//--------------------------------------------

function Circle(radius) {
  this.radius = radius;
  // let's say we don't want this "default" location to be accessible to the consumers of this Constructor
  // this.defaultLocation = {x: 0, y: 0};// this way it's part of the new object which will be created at initialization time
  let defaultLocation = { x: 0, y: 0 }; // by defining it as a variable it's scoped to this Constructor function and will not be accessible to the consumers of this Constructor

//   this.computeOptimumLocation = function (factor) {
    let computeOptimumLocation = function(factor){ // wa want the same thing for computeOptimalLocation
    //...
  };
  this.draw = function () {
    // this.computeOptimumLocation(0.1); // now this line will not work since computeOptimumLocation is not part of the new object that will be created
    computeOptimumLocation(this.radius);
    console.log("draw");
  };
}

const circle = new Circle(10);
// all these properties/methods are available before applying "abstraction"
// circle.draw()
// circle.radius
// circle.computeOptimumLocation

// these are the only ones available after applying "abstraction"
circle.radius;
circle.draw();

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const c = new Circle(10);
const s = new Shape();

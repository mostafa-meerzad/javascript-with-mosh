const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(10);

console.log(c._radius)
console.log(c._draw)

// a hack to get around the private properties defined using symbols
const key = Object.getOwnPropertySymbols(c)[0]
console.log(c[key])
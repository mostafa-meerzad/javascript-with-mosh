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
  getWage() {
    return this.baseSalary + this.overTime * this.rate;
  },
};

employee.getWage();

// --------------------

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  // one way to create a getter

  Object.defineProperty(this, "getFullName", {
    get: function () {
      return `${this.name} ${this.lastName}`;
    },
    set: function (fullName) {
      this.name = fullName;
    },
  });
}
let person = new Person("John", "Doe");
console.log(person.name);
// console.log(person.getFullName());
console.log(person.getFullName);
person.getFullName = "something new" 
console.log(person.getFullName);

js;
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

employee.getWage()

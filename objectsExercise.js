const address = {
  street: "12th",
  city: "Kabul",
  zipCode: 101,
};

function showAddress(address) {
  for (const key in address) {
    console.log(`${key}, ${address[key]}`);
  }
}

showAddress(address);
console.log("----------------------");
function createAddress(street, city, zipCode) {
  return { street, city, zipCode };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const myAddress = createAddress("12th", "Kabul", 101);
showAddress(myAddress);
console.log("----------------------");

const myNewAddress = new Address("12th", "Kabul", 101);
showAddress(myNewAddress);

const myMap = new Map();

myMap.set("name", "Mostafa");
myMap.set(1, "24");
myMap.set(true, "Software Engineer");

console.log(myMap.get("name")); // Mostafa
console.log(myMap.get(1)); // 24
console.log(myMap.get(true)); // Software Engineer

console.log(myMap.has("name")); // true
console.log(myMap.has("lastName")); // false

myMap.delete("name"); // delete name property
console.log(myMap.get("name")); // undefined since name has been removed from the myMap Map

console.log(myMap); // Map(2) { 1 => '24', true => 'Software Engineer' }
myMap.clear();
console.log(myMap); // Map(0) {}

function sum(...args) {
  if (Array.isArray(args[0])) {
    return args[0].reduce((a, b) => a + b);
  }
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 6, 6, 7));
console.log(sum([1, 2, 6, 6, 7]));
console.log(sum([1]));


const circle = {
    radius:2,
    get area(){
        return Math.PI * this.radius**2
    }
}
console.log(circle.radius);
console.log(circle.area);
// circle.area = ()=> "something else"
console.log(circle.area);

try{

    const numbers = [1, 2, 3,4]
    // const count = countOccurrences(numbers, 1)
    const count = countOccurrences(null, 1)
    console.log(count)
}

catch(e){
    console.log("something went wrong")
    console.log(e)
}
    
function countOccurrences(array, searchElement) {
    if(!Array.isArray(array)) throw new Error("Invalid arg")

    return array.reduce((accumulator, current) => {
        const occurrence = current === searchElement ? 1 : 0;
        return accumulator + occurrence
    }, 0)
}
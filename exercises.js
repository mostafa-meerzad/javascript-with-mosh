function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    console.log("License suspended");
  } else {
    console.log(points, " Points");
  }
}

//   checkSpeed(60);
//   checkSpeed(70);
//   checkSpeed(72);
//   checkSpeed(75);
//   checkSpeed(80);
//   checkSpeed(85);
//   checkSpeed(130);

// number is given
// should display number from 0 to the given number saying they're even or odd
function showNumbers(limit) {
  if (typeof limit !== "number") return;

  for (let n = 0; n <= limit; n++) {
    // if (n % 2 === 0) console.log(n, "Even");
    // else console.log(n, " Odd");
    const message = n % 2 === 0 ? " Even" : " Odd";
    console.log(n, message);
  }
}

//   showNumbers(10);

// an array is given and you should log the number of truthy values
function countTruthy(arr) {
  let truthyCount = 0;
  for (let e of arr) {
    if (e) truthyCount++;
  }
  console.log(truthyCount);
}

const arr = [1, 2, 3];
const arr2 = [1, false, NaN, 5, 2, 3];
countTruthy(arr);
countTruthy(arr2);

// an object is given and you should log all string properties in that object

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, " ", obj[key]);
  }
}

const obj = {
  name: "My Movie",
  director: "John Smith",
  releaseDate: 2024,
  rating: 4.5,
};
showProperties(obj);

// a number is given you should log return the sum of all multiplies of 3 and 5 from 0 up to the number provided
function sum(num) {
  let total = 0;

  for (let n = 0; n <= num; n++) {
    if (n % 3 === 0 || n % 5 === 0) total += n;
  }

  return total;
}

console.log("sum ", sum(10));
console.log("sum ", sum(15));
// 3 6 9 12
// 5 10 15

// an array of points is given, calculate the average and return the grade accordingly

function calculateGrade(marks) {
  let totalMarks = 0;
  for (let mark of marks) totalMarks += mark;

  let average = totalMarks / marks.length;

  //   if (average >= 0 && average <= 59) {
  //     return "F";
  //   }
  //   if (average >= 60 && average <= 69) {
  //     return "D";
  //   }
  //   if (average >= 70 && average <= 79) {
  //     return "C";
  //   }
  //   if (average >= 80 && average <= 89) {
  //     return "B";
  //   }
  //   if (average >= 90 && average <= 100) {
  //     return "A";
  //   }
  // here is another approach to just check the upper limit.
  // like so: for 0 to 59 you can take 60 as the upper limit

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A"; // here because this is the end of the conditions and there is nothing else to execute we can omit the if(average < 100) return "A"
}

// const marks = [10, 20, 30, 0];
// const marks = [80, 80, 90];
const marks = [90, 90, 90];
// console.log(calculateGrade(marks));

// here is another principle to learn
// Single Responsibility Principle: which is saying each part of the code mush do just one thing

function calculateGradeBetterWay(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let i of array) sum += i;

  return sum / array.length;
}

console.log(calculateGradeBetterWay(marks));

// function showStars(starNum) {
//   let totalStars = "*";
//   for (let i = 1; i <= starNum; i++) {
//     console.log(totalStars);
//     totalStars += "*";
//   }
// }

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

showStars(10);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

// showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    // let isPrime = isPrime(number)

    if (isPrime(number)) {
      console.log(number);
    }
  }
}

function isPrime(number) {
  // for checking if a number is prime or not you just need
  //to find if it is divisible on any number other than itself and 1 or not
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(7));
// console.log(isPrime(5));
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(10));

showPrimes(10);
showPrimes(15);
showPrimes(21);

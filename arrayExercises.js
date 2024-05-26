// a min and a max value is given must return an array of all numbers in that range

function arrayFromRange(min, max) {
  let output = [];
  for (let n = min; n <= max; n++) {
    output.push(n);
  }
  return output;
}

// console.log(arrayFromRange(1, 10));
// console.log(arrayFromRange(-10, -4));

function includes(array, searchElement) {
  for (const e of array) {
    if (e === searchElement) return true;
  }
  return false;
}

let arr = [1, 2, 5, 6];
console.log(includes(arr, 5));
console.log(arr.includes(5));
console.log("------------------------");

function except(array, excluded) {
  let result = [];
  for (const element of array) {
    if (!excluded.includes(element)) result.push(element);
  }
  return result;
}

let numbers = [1, 2, 4, 5, 5, 1, 1, 1];

console.log(except(numbers, [5, 2]));
console.log("--------------------------------");

function move(array, index, offset) {
  const position = index + offset;

  if (position > array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);

  return output;
}

let number2 = [1, 2, 5, 6];
console.log(number2);
console.log(move(number2, 100, 1));
console.log("----------------------------");

function countOfOccurrence(array, searchElement) {
  // let count = 0;

  // for (const element of array) {
  //   if (searchElement === element) count++;
  // }
  // return count;

  return array.reduce((accumulator, current) => {
    let occurrence = current === searchElement ? 1 : 0;

    // if (element === searchElement) accumulator++;
    return accumulator + occurrence;
  }, 0);
}

let number3 = [2, 2, 2, 2, 3, 3, 3, 3, 3];
console.log(countOfOccurrence(number3, 3));
console.log(countOfOccurrence(number3, 2));

console.log("------------------------");

function getMax(array) {
  if (array.length <= 0) return undefined;
  // let max = array[0];
  // for (const element of array) {
  //   if (element > max) max = element;
  // }
  // return max;

  // return array.reduce((max, current) => {
  //   if (current > max) return current;
  //   return max;
  // }, array[0]);

  return array.reduce((max, current) => (max > current ? max : current));
  // return array.reduce((a, b) => (a > b ? a : b));
}

let number4 = [2, 3, 8, 5, 1];
console.log(getMax(number4));
console.log(getMax([]));
console.log("--------------------");

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2018, rating: 7.5 },
];

function listTitles(array) {
  const result = array
    .filter((movie) => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((movie) => movie.title);
  console.log(result);
}

listTitles(movies);

let person = {
  name: "Mostafa",
  lastName: "Meerzad",
  // fullName() { // a normal object method
  // return `${this.name} ${this.lastName}`;
  // },
  get fullName() {
    // a getter method
    return `${this.name} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.name = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.name);
console.log(person.lastName);
console.log(person.fullName);
//   person.fullName = "John Smith"
//   person.fullName = null

console.log(person.fullName); //=> John Smith
console.log("----------------------------------");

const video = {
  title: "a",
  play() {
    console.log(this); // "this" references the object itself
  },
};
video.stop = function () {
  console.log(this); // this refers to the object you're adding a method to
};
video.play();
video.stop();

function playVideo() {
  console.log(this); // "this" references the global/window object
}
// playVideo()

function Video(title) {
  this.title = title;
  console.log(this); // "this" will reference to the newly created object cause we use "new" operator
}

const v = new Video("a");
// console.log(new Video())
// console.log(vi)

const vid = {
  title: "a",
  tags: ["b", "c", "f"],

  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // "this" references the global/window object, because a callback function is just a normal function
    }, this); // forEach method takes a second argument which "this" keyword inside this callback function will reference
  },
};

vid.showTags();

console.log("---------------------------------");

function play(a, b) {
  console.log(a, b);
  console.log(this);
}

// console.log()
play.call({ name: "Mostafa" }, "first", "second"); // call method takes an object which "this" keyword inside the target function will reference

play.apply({ name: "John" }, ["first", "second"]); // apply method takes an object which "this" keyword inside the target function will reference

function play(a, b) {
  console.log(a, b);
  console.log(this);
}

let playFunction = play.bind({ name: "John" });

playFunction("new", "thing");




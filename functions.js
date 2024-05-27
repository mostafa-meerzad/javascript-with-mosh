console.log("--------------------------");

function sum(a, b) {
//   return a + b;
console.log(arguments)
}
sum(1,2,3,4,5,6,7,)

// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum(1,2,4,5,6));
// console.log(sum());



function total(){
    let total = 0;
    for (let arg of arguments) total+= arg
    return total
  }

  console.log(total(1,2,4,5))

  console.log("-----------------------")

  function interest(principle, rate, years) {
    return ((principle * rate) / 100) * years;
  }
  console.log(interest(10000, 3.5, 5))
  

  // const video = {
  //   title: "a",
  //   tags: ["b", "c", "f"],
  
  //   showTags() {
  //     this.tags.forEach(
  //       function (tag) {
  //         console.log(this.title, tag);
  //       }.bind(this)
  //       // this references to the parent object because we are outside of the callback function. bind returns a new function which is identical to the provided callback with this pointing to the parent object
  //     );
  //   },
  // };
  
  // video.showTags();

  const video = {
    title: "a",
    tags: ["b", "c", "f"],
  
    showTags() {
      this.tags.forEach((tag) => {
        console.log(this.title, tag);
      });
    },
  };
  
  video.showTags();
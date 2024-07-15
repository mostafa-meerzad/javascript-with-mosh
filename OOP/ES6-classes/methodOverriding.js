class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

class Student extends Person {
  constructor(name, age, lang, height) {
    super(name, age);
    this.lang = lang;
    this.height = height;
  }

  greet() {
    super.greet()
    console.log(`Hello there, this it ${this.name}`);
  }
}

const student = new Student("Mostafa", 24, "English", 175);
student.greet();

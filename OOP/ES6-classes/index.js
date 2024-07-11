class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }

    getAge(){
        console.log(`I'm ${this.age} years old`)
    }
}

const john = new Person("Mostafa", 24)

john.greet()
john.getAge()
console.log(john.age)

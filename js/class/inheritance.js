"use strict";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Hello World!");
  }
}

class Student extends Person {
  constructor(name, age, level) {
    super(name, age);
    this.level = level;
  }

  hello() {
    console.log("Hello There! Your are a student");
  }

  hello2() {
    console.log("Hello World! This from Studnet");
  }
}
const person = new Student("Ammar", 24, "3");
console.log(person.name);
person.hello();
person.hello2();

console.log("-----")
console.log(person instanceof Person)
console.log(person instanceof Student)
console.log(person instanceof Object)

console.log("-----")
let arr = [];
console.log(arr instanceof Array)

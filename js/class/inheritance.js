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

  hello2() {
    console.log("Hello World! This from Studnet");
  }
}
const person = new Student("Ammar", 24, "3");
console.log(person.name);
person.hello();
person.hello2();

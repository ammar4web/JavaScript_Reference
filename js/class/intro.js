class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log("Hello World!");
  }

  static staticMethodExample() {
    console.log("hello from static method");
  }
}

Person.staticMethodExample();

const person = new Person("Ammar");

console.log(person);
console.log(Person);
console.log(typeof person, ": object");
console.log(typeof Person, ": class");
console.log(person.name);
person.hello();

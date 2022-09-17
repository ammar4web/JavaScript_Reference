class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log("Hello World!");
  }
}

const person = new Person("Ammar");

console.log(person);
console.log(Person);
console.log(typeof person, ": object");
console.log(typeof Person, ": class");
console.log(person.name);
person.hello();

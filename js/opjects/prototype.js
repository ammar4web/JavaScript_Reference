function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.hello = function () {
  console.log("Hello World!");
};

const person1 = new Person("Ammar", 23, "Male");
const person2 = new Person("Mohammed", 24, "Male");
console.log(person1);
console.log(person2);
person1.hello();
person2.hello();

// review
// 09. النموذج المبدئي Prototype

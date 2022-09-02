function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.hello = () => console.log("Hello World!");
}

const person1 = new Person("Ammar", "24", "Male");

// Dot Notation
console.log(person1.name);
// Bracket Notation
console.log(person1["name"]);
// Bracket Notation is useful in the following case
const AGE = "age";
console.log(person1[AGE]);

//
person1.age = 23;
console.log(person1[AGE]);
// Just in JavaScript, we can add a new attribute to the object.
// فهذا كائن وليس كلاس
person1.address = "Damascus";
console.log(person1.address);
// Just in JavaScript, we can delete attributes to the object.
// فهذا كائن وليس كلاس
console.log(person1);
delete person1.address;
delete person1.gender;
console.log(person1);



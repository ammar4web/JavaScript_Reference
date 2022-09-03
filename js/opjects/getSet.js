function Person(name, age, gender) {
  let id = Math.floor(Math.random() * 10);

  this.name = name;
  this.age = age;
  this.gender = gender;

  this.hello = () => console.log("Hello World!");

  // this.getId = () => id;

  Object.defineProperty(this, "id", {
    get: () => id,
    set: (value) => {
      if (value <= 0) throw new Error("Invalid ID");
      else id = value;
    },
  });
}

const person1 = new Person("Ammar", 23, "Male");
console.log(person1);
// console.log(person1.getId());
console.log(person1.id);
person1.id = "0";
console.log(person1.id);

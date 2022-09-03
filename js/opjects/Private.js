function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.hello = () => {
    // if (this.canTalk0()) console.log("Hello World!");
    if (canTalk()) console.log("Hello World!");
  };

  // Without Abstraction
  this.canTalk0 = function () {
    return this.age > 3;
  };

  // Abstraction التجريد
  let canTalk = function () {
    return this.age > 3;
  };
}

const person1 = new Person("Ammar", 23, "Male");
person1.hello();

// Object نستطيع استخدامه خارج ال
console.log(person1.canTalk0());

// Abstraction التجريد
// Object لا نستطيع استخدامه خارج ال
console.log(person1.canTalk());

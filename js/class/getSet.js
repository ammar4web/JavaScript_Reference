"use strict";
// الوضع الصارم
// مطبق بشكل افترضي داخل الكلاس

class Person {
  constructor(name, age) {
    // "_"name, "_"age
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (n < 0) throw new Error("Invalid age!");
    this._name = n;
  }

  get age() {
    return this._age;
  }

  hello() {
    console.log("Hello World!");
  }
}

const person = new Person("Ammar", 24);
console.log(person.name)
person.name = 1;
console.log(person.name)
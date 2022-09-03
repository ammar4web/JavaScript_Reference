function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.hello = () => console.log("Hello World!");
}

const person1 = new Person("Ammar", "24", "Male");

for (let key in person1) {
  // بهذا الطريقة يمكننا فصل التوابع عن الخواص
  if (typeof person1[key] === "function") continue;
  //

  // Bracket Notation is useful in the following case
  console.log(`${key}: ${person1[key]}`);
}

//
console.log("-----");
//

// معرفة إذا كان الكائن يحتوي على خاصية معينة
if ("name" in person1) console.log(`Yes. The name is ${person1.name}.`);
else console.log("No.");

//
console.log("-----");
//

const keys = Object.keys(person1);
console.log(keys);
// بهذا الطريقة لا يمكننا فصل التوابع عن الخواص

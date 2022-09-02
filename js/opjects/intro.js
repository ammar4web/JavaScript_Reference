// Literal Way.
let webSkiles = {
  frontEnd: ["HTML", "CSS", "JavaScript"],
  backEnd: "Laravel",

  famousFramework: {
    php: "Laravel",
    JavaScript: "Node js",
  },

  fullStack: function () {
    let full = this.frontEnd.concat(this.backEnd);
    return full;
  },
};

console.log(webSkiles);
console.log(webSkiles.frontEnd[0]);
console.log(webSkiles.backEnd);
console.log(webSkiles.fullStack());
console.log(webSkiles.famousFramework.JavaScript);
// End intro


// constructor
function WebSkilesC(frontEnd, backEnd, famousFramework) {
  this.frontEnd = frontEnd;
  this.backEnd = backEnd;
  this.famousFramework = famousFramework;

  this.fullStack = function () {
    let full = this.frontEnd.concat(this.backEnd);
    return full;
  };
}

let person1 = new WebSkilesC(
  webSkiles.frontEnd,
  webSkiles.backEnd,
  webSkiles.famousFramework
);
console.log(person1);
console.log(person1.fullStack());

let person2 = new WebSkilesC(
  webSkiles.frontEnd.concat("Bootstrab", "React"),
  "Node Js",
  webSkiles.famousFramework
);
console.log(person2);
console.log(person2.fullStack());

// يمكننا أيضا إنشاء مصفوفة من الكائنات
// 02. دالة البناء constructor
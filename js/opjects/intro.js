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

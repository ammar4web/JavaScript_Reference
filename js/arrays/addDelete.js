let webSkiles = ["HTML", "CSS", "JavaScript"];

// Add
// add to start
webSkiles.unshift("ICDL", "Comptia A+", "Comptia Network+");

// add to end
webSkiles.push("React", "UI");
webSkiles[webSkiles.length] = "Vue Js";

// add to the middel
webSkiles.splice(5, 0, "sass", "Bootstrab");
// 0 for not delete

// Delete from start
const dFirst = webSkiles.shift();
const dLast = webSkiles.pop();
const dMany = webSkiles.splice(0, 2);

console.log(dFirst);
console.log(dLast);
console.log(dMany);
console.log(webSkiles);

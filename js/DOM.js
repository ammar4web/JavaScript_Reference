// DOM (Document Object Model)

let heading = document.getElementById("title");
let content = document.getElementsByClassName("content");
let allParagraphs = document.getElementsByTagName("p");

console.log(heading);
heading.innerHTML = "This is a title from JavaScrit.";
//
console.log(content);
console.log(allParagraphs);
content[0].style.color = "#f00";

//
console.log("-----");
//

let fantasticQuerySelector = document.querySelector("p.description");
fantasticQuerySelector.innerHTML = "querySelector";

//
console.log("-----");
//

let newParagrhp = document.createElement("p");
newParagrhp.innerHTML = "Newly Paragraph";

document.body.appendChild(newParagrhp);

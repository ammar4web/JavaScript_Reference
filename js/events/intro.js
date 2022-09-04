function func() {
  console.log("This is The first events. it is in the html file.");
}

//
// .ondblclick = () | .addEventListener("dblclick", myScript);
//

// document.querySelector("input").ondblclick = () =>
//   console.log("This is The first events. it is in the javaScript file.");

// Importent: myScript without ()
document.querySelector("input").addEventListener("dblclick", myScript);
function myScript() {
  console.log("This is The first events. it is in the javaScript file.");
}

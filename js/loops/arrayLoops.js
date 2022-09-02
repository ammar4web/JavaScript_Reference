let webSkiles = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < webSkiles.length; i++) {
  document.writeln(`<p>${webSkiles[i]}<p/>`);
}

//
document.writeln(`<br />`);
//

// Array loops (for of)
for (let webSkile of webSkiles) {
  document.writeln(`<p>${webSkile}<p/>`);
}


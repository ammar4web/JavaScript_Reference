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

//
document.writeln(`<br />`);
//

// Opject loops (for in) or index of Array
for (let webSkile in webSkiles) {
  document.writeln(`<p><b>${webSkile}</b> ${webSkiles[webSkile]}<p/>`);
}

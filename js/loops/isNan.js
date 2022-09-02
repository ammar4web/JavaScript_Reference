let z = 1;
while (+z != 0) {
  z = prompt("Enter a number not a string, please.");
  if (isNaN(z) || z == 0) continue;
  document.writeln(z);
}

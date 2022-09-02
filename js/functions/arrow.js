let sum = (nume1, nume2) => nume1 * nume2;
document.writeln(sum(4, 5));

//
document.writeln(`<br />`);
//

let square = (num) => num * num;
document.writeln(square(5));

//
document.writeln(`<br />`);
//

let hello = () => document.writeln("Hello World!");
hello();

//
document.writeln(`<br />`);
//

let add = (nume1, nume2) => {
  return nume1 + nume2; // shoude be with return
  // nume1 * nume2; // wrong
};
document.writeln(add(4, 5));

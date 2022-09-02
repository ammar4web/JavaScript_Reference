function greetings() {
  let name = "Ammar";
  document.writeln(`<p>Hello World! I'm <b>${name}</b></p>`);
}
greetings();

//
document.writeln(`<br />`);
//

// يجب وضع المعاملات التي تحوي قيمة افتراضية بعد المعلومات التي لا تحويها
// وإلا سيتم تجاهل القيم الافتراضية
function greetingsPara(name, job = "Web Developer") {
  document.writeln(
    `<p>Hello World! I'm <b>${name}</b>. I work as a ${job}.</p>`
  );
}
greetingsPara("Ahmad", "FrontEnd");
greetingsPara("Mohammed", "BackEnd");
greetingsPara("Hady");

//
document.writeln(`<br />`);
//

function greetingsParaRe(num1 = 0, num2 = 0) {
  return num1 + num2;
}

let result = greetingsParaRe(2, 2);
document.writeln(result * 10);

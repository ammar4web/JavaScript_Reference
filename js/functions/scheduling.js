// scheduling الجدولة
// setTimeout & setInterval

// setTimeout
// للتشغيل مرة واحدة بعد فاصل زمني
function hello(name) {
  document.writeln(`<p>Hello World!. I'm ${name}</p>`);
}

let timerId = setTimeout(hello, 3000, "ammar");
// 2 parameters: method | the time, then parameters of the method
// method 'hello' with out '()'

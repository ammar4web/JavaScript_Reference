// rest from ES6
// هذا المعامل يجب أن يكون آخر معامل في الدالة وإلا سيظهر خطأ في تنفيذ الشيفرة
function sum(num1, ...numbers) {
  console.log(numbers);

  let total = 0;
  for (let number of numbers) total += number;
  return total * num1;
}

// num1 = 10 and ...numbers = rest
document.writeln(sum(10, 5, 4, 6, 10));

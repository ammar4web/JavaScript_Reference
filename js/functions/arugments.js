function sum() {
  // arguments
  // خاصية لكل دالة تحتوي على (مصفوفة) بداخلها جميع المعاملات التي تم تمريرها إلى الدالة
  console.log(arguments);

  let total = 0;

  for (let Item of arguments) {
    total += Item;
  }

  return total;
}

document.writeln(sum(5, 4, 6, 10));

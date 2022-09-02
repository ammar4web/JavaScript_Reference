// Developer usually use while, not do-while.
// لن يدخل إلى الحلقة
let x = 0;
while (x != 0) {
  document.writeln(x, " from whiel");
}

// سيدخل إلى الحلقة
let y = 0;
do {
  document.writeln(y, " from do-whiel");
} while (y != 0);

//
document.writeln("<br>");
//

for (let i = 1; i <= 10; i++) {
  if (i == 3) continue;
  if (i == 7) break;
  document.writeln(i);
}

// do while, while
// تستخدم غالبا في الحالات التي لا نعرف فيها بشكل محدد عدد مرات التكرار

// do while
// تستخدم في المهام التي تستوجب تكرارا واحدا على الأقل حتى وإن لم يتحقق شرط التكرار في البداية

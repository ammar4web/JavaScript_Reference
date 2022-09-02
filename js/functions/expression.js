// Declaration

// after or before Declaration, no problem
start();

function start() {
  document.writeln("Start");
}

// -----------------------------------------

// Expression.
// anonymous function
let stop = function () {
  document.writeln("Stop");
}

// Should be after expression
stop();

// الدوال هي قيم ويمكننا إسنادها أو نسخها أو التصريح عنها في إي مكان ضمن الشيفرة

// Declaration تصريح
// تعريف دالة على أنها عبارة منفصلة عن سياق البرنامج الرئيسي
// يقوم محرك شيفرة هذه اللغة برفع الدالة لتصبح مرئية في أي جزء من الشفيرة

// Expression تعبير
// إنشاء الدالة ك جسم من تعبير معين 
// يتم إنشاء تعبيرات الدوال عندما يصل إليها تدفق التنفيذ
let testVar = 0,
  testVar2 = "0",
  testVar3 = "Ammar",
  testVar4;

// String(), Boolean()
console.log(testVar, typeof testVar);
console.log(String(testVar), typeof String(testVar));
console.log(Boolean(testVar), typeof Boolean(testVar));
console.log("_____");

// Number()
console.log(testVar2, typeof testVar2);
console.log(Number(testVar2), typeof Number(testVar2));
console.log("_____");

// Number() | NaN, true = 1 | false = 0
console.log(testVar3, typeof testVar3);
console.log(testVar3, Number(testVar3), typeof Number(testVar3));
console.log(testVar3, Number(testVar3), typeof Number(testVar3));
console.log(true, Number(true));
console.log(false, Number(false));
console.log("_____");

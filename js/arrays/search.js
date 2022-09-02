let arr = [10, 20, 30, 40, 60, 10];
// includes(): false or true
console.log(arr.includes(50));

// indexOf() | lastIndexOf(): index or -1
console.log(arr.indexOf(50));
console.log(arr.indexOf(10)); // it will return the first index
console.log(arr.lastIndexOf(10)); // it will return the last index

// findIndex(): the first index or -1
let fIndex = arr.findIndex(function (item) {
  return item > 30; // or == 30
});
console.log(fIndex);

// find(): the first value or undefined
let val = arr.find(function (item) {
  return item > 30; // or == 30
});
console.log(val);

// filter(): Multi values in the form of an array. or [] (empty array)
let valArr = arr.filter(function (item) {
  return item > 30; // or == 30
});
console.log(valArr);
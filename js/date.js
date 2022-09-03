let currentDate = new Date();
console.log(currentDate);

// date
console.log(currentDate.getFullYear());
// + 1
console.log(currentDate.getMonth()) + 1;
console.log(currentDate.getDate());

// time
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

let fullDate =
  currentDate.getFullYear() +
  "/" +
  currentDate.getMonth() +
  "/" +
  currentDate.getDate();

console.log(fullDate);

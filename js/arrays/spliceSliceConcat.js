let webSkiles = ["HTML", "CSS", "JavaScript", "less", "React"];

// splice()
// 1: index start, 2: number of value that will be delete, 3: parameter to add (related to index)
// أو ابتداء من 3 أحذف عنصر واحد ثم أضف العناصر التالية
webSkiles.splice(3, 1, "sass", "Bootstrab");
webSkiles.splice(webSkiles.length - 1, 1);

// slice(start, end)
// with (start) and without (end)
// قم بالقص من 1 إلى 3 وبدون الرقم 3
let part = webSkiles.slice(0, 2);
let partToEnd = webSkiles.slice(3);
console.log(part);
console.log(partToEnd);

// concat
let concatArray = part.concat(
  partToEnd,
  "Tailwind",
  ["JavaScrip", "React"],
  "Vue js"
);
console.log(concatArray);

//
console.log(webSkiles);

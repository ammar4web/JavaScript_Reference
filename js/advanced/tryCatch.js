try {
  ammar; // error
  console.log("try");
} catch (error) {
  console.log("catch");
  console.log(error);
} finally {
  console.log("finally");
}

function area(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("para is not a number");
  }
  return width * height;
}

console.log("-----");
try {
  console.log(area(5, "a"));
} catch (error) {
  console.log("catch");
  console.log(error);
}

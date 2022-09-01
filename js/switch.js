// prompet() return a string
// + turn the string to number
let userInput = +prompt("Enter day's Number, please: ");

switch (userInput) {
  case 1:
    console.log("Saturday");
    break;

  case 2:
    console.log("Sunday");
    break;

  case 3:
    console.log("Monday");
    break;

  case 4:
    console.log("Tuesday");
    break;

  case 5:
    console.log("Wednesday");
    break;

  case 6:
    console.log("Thursday");
    break;

  case 7:
    console.log("Friday");
    break;

  default:
    console.log("You soulde enter a number between 1 and 7");
    break;
}

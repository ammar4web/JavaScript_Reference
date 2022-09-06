function testAge() {
  document.querySelector("inp#age");
  let ageInputValue = document.querySelector("input#age").value;
  if (isNaN(ageInputValue)) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

function testAggre() {
  let agreeInputValue = document.querySelector("input#agree").checked;
  console.log(agreeInputValue);
  return agreeInputValue;
}

function validate() {
  let isValid = false;
  let agreeInputValue = document.querySelector("input#agree").checked;
  let ageInputValue = document.querySelector("input#age").value;

  if (agreeInputValue == true && !isNaN(ageInputValue) && ageInputValue != "") {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function validateShort() {
  let agreeInputValue = document.querySelector("input#agree").checked;
  let ageInputValue = document.querySelector("input#age").value;
  let isValid =
    agreeInputValue == true && !isNaN(ageInputValue) && ageInputValue != "";

  return isValid;
}

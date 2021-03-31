// Design an app which accepts a number from the user and tells you if the number is divisible by 2 and 5 or not

const isDivisibleBy2And5 = function (number) {
  return number % 2 === 0 && number % 5 === 0;
};

const isValidNumber = function (number) {
  return Number.isNaN(number);
};

const promptInput = prompt("Enter your number");

const parsedNumber = parseInt(promptInput, 10);

if (isValidNumber(parsedNumber)) {
  alert("Please enter a valid number. Eg. 20, 50, etc.");
} else {
  if (isDivisibleBy2And5(parsedNumber)) {
    alert("Number is divisible by 2 and 5");
  } else {
    alert("Number is NOT divisible by 2 and 5");
  }
}

// Ask user if they want to try again

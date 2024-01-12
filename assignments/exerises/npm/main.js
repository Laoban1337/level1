const readLineSync = require("readline-sync");
//npm package manager practice

let isValid = false;

while (!isValid) {
  var userInput1 = readLineSync.question("please enter the first number ");

  var userInput2 = readLineSync.question("please enter your second number ");

  var operationQuestion = readLineSync.question(
    " please enter the operation you which to perform(add, subtract, divide, multiply)"
  );
  switch (operationQuestion) {
    case "add":
      result = add(userInput1, userInput2);
      break;
    case "subtract":
      result = subtract(userInput1, userInput2);
      break;
    case "divide":
      result = divide(userInput1, userInput2);
      break;
    case "multiply":
      result = multiply(userInput1, userInput2);
      break;

    default:
      " no operation choosen";
      process.exit(1);
      break;
  }

  if (!isNaN(userInput1) && userInput2) {
    isValid = true;
  } else {
    console.log("Invalid input, please enter a valid number");
  }
  console.log("result : ", result);
}

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}
function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

// if (typeof num1Question !=='number'&& typeof num2Question !=='number') {
//     console.log("invalid input, type was not a number")
//     num1Question = readLineSync.question("please enter the first number " );

// } else{
//     console.log("addin number", num1Question)
//     console.log("code reached")

// }

// var num2Question = readLineSync.question("please enter your second number " );

// var operationQuestion = readLineSync.question(" please enter the operation you which to perform(add, subtract, divide, multiply)")
// console.log(operationQuestion)

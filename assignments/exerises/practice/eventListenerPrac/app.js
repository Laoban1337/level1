var button = document.getElementById("btn");
var inputElement = document.getElementById("textInput");


button.addEventListener("click", function () {
  var userInput = inputElement.value;

  if (userInput.trim() !== "") {
    console.log("User input : " + userInput);
  } else {
    console.log("Please enter a correct string");
  }
});

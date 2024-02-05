const form = document["my-form"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = form.num1.value;
  form.num1.value = "";

  const num2 = form.num2.value;
  form.num2.value = "";
  const operation = form.operation.value;
  if (operation === "add") {
    add(num1, num2);
  }
   else if (operation === "sub") {
    sub(num1, num2);
  }
  else if (operation === "multiply") {
    multiply(num1, num2);
  }
});

function add(num1, num2) {
  const result = " the result of your calculation is :";
  const h3 = document.createElement("h3");
  h3.textContent = +num1 + +num2;
  document.getElementsByTagName("body")[0].append(result);
  document.getElementsByTagName("body")[0].append(h3);
}

function sub(num1, num2) {
  const result = " the result of your calculation is :";
  const h3 = document.createElement("h3");
  h3.textContent = +num1 - +num2;
  document.getElementsByTagName("body")[0].append(result);
  document.getElementsByTagName("body")[0].append(h3);
}

function multiply(num1, num2) {
  const result = " the result of your calculation is :";
  const h3 = document.createElement("h3");
  h3.textContent = +num1 * +num2;
  document.getElementsByTagName("body")[0].append(result);
  document.getElementsByTagName("body")[0].append(h3);
}

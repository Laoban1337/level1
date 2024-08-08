const form = document.myForm
const subForm = document.myForm1
const multiplyForm = document.myForm2

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = form.num1.value;
  form.num1.value = "";

  const num2 = form.num2.value;
  form.num2.value = "";
  add(num1, num2)
  
});

subForm.addEventListener("submit", function(event){
  event.preventDefault();
  const num1 = subForm.num1.value;
  form.num1.value = "";

  const num2 = subForm.num2.value;
  form.num2.value = "";
  sub(num1, num2)
})

multiplyForm.addEventListener("submit", function(event){
  event.preventDefault();
  const num1 = multiplyForm.num1.value;
  form.num1.value = "";

  const num2 = multiplyForm.num2.value;
  form.num2.value = "";
  multiply(num1, num2)
})

function add(num1, num2) {
  const result1 = " the result of your add calculation is :";
  const h3 = document.createElement("h3");
  h3.textContent = +num1 + +num2;
  document.getElementsByTagName("body")[0].append(result1);
  document.getElementsByTagName("body")[0].append(h3);
}

function sub(num1, num2) {
  const result2 = " the result of your subtraction calculation is :";
  const h3 = document.createElement("h3");
  h3.textContent = +num1 - +num2;
  document.getElementsByTagName("body")[0].append(result2);
  document.getElementsByTagName("body")[0].append(h3);
}

function multiply(num1, num2) {
  const result3 = " the result of your multiplication calculation is :";
    h3 = document.createElement("h2");
  h3.textContent = num1 * num2;
  document.getElementsByTagName("body")[0].append(result3);
  document.getElementsByTagName("body")[0].append(h3);
}

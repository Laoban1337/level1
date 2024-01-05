var result = document.querySelectorAll(".favorite-things>li");
var result1 = document.getElementById("rude");
var element = document.getElementsByClassName("fish")
 
element.style.color = "white";
result.forEach((result) => {
  result.textContent = " I won't tell";
});

result1.textContent = "Very rude people";
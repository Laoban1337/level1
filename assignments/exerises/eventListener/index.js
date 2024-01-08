var box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "blue";
});
box.addEventListener("mousedown", function () {
  box.style.backgroundColor = "red";
});
box.addEventListener("mouseup", function () {
  box.style.backgroundColor = "yellow";
});
box.addEventListener("dblclick", function () {
  box.style.backgroundColor = "green";
});
box.addEventListener("wheel", function () {
  box.style.backgroundColor = "orange";
});
document.body.addEventListener("keydown", function (event) {
  var pressedKey = event.key.toLowerCase();

  var color = getColorByKeyPressed(pressedKey);
  box.style.backgroundColor = color;
});

function getColorByKeyPressed(key) {
  switch (key) {
    case "r":
      return "red";

    case "g":
      return "green";
    case "b":
      return "blue";

    case "y":
      return "yellow";
    case "o":
      return "orange";

    default:
      return "white";
  }
  
}

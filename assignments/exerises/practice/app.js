// var result = document.querySelectorAll(".rarity  > li");

var edgemireLocation = document.querySelector(".edge");

var legendText = document.querySelector(".legend");
var epicText = document.querySelector(".epic");
var pristineText = document.querySelector(".pristine");
var rareText = document.querySelector(".rare");
var uncommonText = document.querySelector(".uncommon");
var normalText = document.querySelector(".normal");

document.body.style.backgroundColor = "black";

legendText.style.color = "#FF004D";
epicText.style.color = "#FAEF9B";
pristineText.style.color = "#80BCBD";
rareText.style.color = "#B15EFF";
uncommonText.style.color = "#65B741";
normalText.style.color = "#FBF6EE";

edgemireLocation.textContent = "Extremely rare location";

var powerRangers = [
  { name: "Jason Lee Scott", color: "Red", weapon: "Power Sword" },
  { name: "Kimberly Hart", color: "Pink", weapon: "Power Bow" },
  { name: "Zack Taylor", color: "Black", weapon: "Power Axe" },
  { name: "Trini Kwan", color: "Yellow", weapon: "Power Daggers" },
  { name: "Billy Cranston", color: "Blue", weapon: "Power Lance" },
  { name: "Tommy Oliver", color: "Green/White", weapon: "Dragon Dagger/Saba" }
];

var rangersList = document.getElementById("rangers");

for(var i = 0; i < powerRangers.length; i++){
  var ranger = powerRangers[i];
  var listItem = document.createElement("li")

  listItem.textContent = "Name : " + " " + ranger.name + " Suit color: " +  ranger.color  + "  weapon of choice  " + ranger.weapon;
  rangersList.appendChild(listItem);
}

const gameStart = require("readline-sync");

gameStart.question("Welcome to the Labyrinth, think you can make it out?");
let heroName = gameStart.question("What is your name, great hero?");
console.log("Welcome " + " to the great and Mighty " + heroName);
let menu = gameStart.question("Press W to Walk");

isAlive = true;
isWalking = true;

function walking() {
  while (isWalking) {
    let enemyAppear = Math.ceil(Math.random() * 4);
    if (menu === "w") {
      console.log("You have walked a few yards");
    }
    if (enemyAppear === 4) {
      console.log("An enemy appeared");
      isWalking = false;
      combatMenu();
    }
    if (menu === "e") {
        console.log("exiting game loop")
        break;
    }
  }
}
 function combatMenu(){
    while (!isWalking) {
        let combatMenu = gameStart.question("enter a to attack or D to run: ")
        let runChance = Math.ceil(Math.random()*2)

        if (combatMenu === "a") {
            console.log("You have decided to attack")
        }
        if (combatMenu === "d") {
            
        }
       
    }
   
 }
walking();

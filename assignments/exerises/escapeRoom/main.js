const readline = require("readline-sync");

isDead = false;
hasKey = false;
gamesPlayed = 0;

while (!isDead) {
  //game start

  const gameStart = readline.question(
    "You find yourself locked in a room, in this room is a door, a hole in the wall.. what do you do?" +
      "\n 1: search the room 2: put your had in the hole in the wall 3: try to open the door: "
  );
     //should all this logic be inside of the while loop instead of outside?
  if (gameStart === "1") {
    console.log(" You search the room for a key "); // add more itens to search such as "desk", "cabinet" and "Box"
    const search = readline.question(
      "Where do you want to look? \n 1: Desk 2: cabinet 3: footlocker: "
    );
    //would a switchcase be better???
    if (search === "1") {
      console.log("You looked in the desk and it was empty ");
    }
    if (search === "2") {
      console.log("You looked in the cabinet and it was empty ");
    }
    if (search === "3") {
      console.log("You looked in the footlocker");
      hasKey = true;
    }
    if (gameStart === "1" && hasKey) {
      console.log(" You've found the key");
    }
  }
  if (gameStart === "2") {
    //Not using DRY will find a way to refactor code later.
    console.log("You reach your hand into the hole in the wall \n ");
    console.log("You feel something on the otherside bite your hand" +  "\n you recoil in pain. Looking down at your hand you see two puncture marks."+
    "\n In real time your hand begins to swell as incredible pain over takes you as your visions blurs , you lose conscienceness and die");
    console.log("\n You have Died!!! \n GAME OVER!")
    isDead = true;
  }

  if (gameStart === "3" && !hasKey) {
    console.log("You need a key for the door");
  }
  if (gameStart === "3" && hasKey) {
    console.log(" \n you have escaped!");
    gamesPlayed++;// why is ths here?
    break;
  }
  if (gameStart.toLowerCase() === "e") {
    console.log("\n exiting game");
    gamesPlayed = 0;
    break;
  }
}

const gameStart = require("readline-sync");

gameStart.question(
  "Step into the mysterious realm of Labyrinth, a survival challenge like no other.\n As you find yourself within its perplexing corridors, the reasons for your presence remain elusive.\n The air is thick with an eerie quiet, broken only by distant echoes and the unsettling rustle of unseen movements. \n Your sole objective: survive. \n The labyrinth is a merciless enigma, its twists and turns fraught with potential dangers. "
);

const heroName = gameStart.question(
  "Adventurous soul,amidst this labyrinth's mysterious confines, \n what name do you claim? Speak, and let your appellation resonate through the twisting corridors. Name thy self :"
);

console.log("Salutations great: " + heroName + "!");
console.log(`
${heroName}, gird thyself with valor, for within these cryptic corridors, unseen perils abound. Ready thy spirit, for the labyrinth demands resilience.`);
//Booleans to control while loop flows
isAlive = true;
isFighting = false;
isWalking = true;
let enemyKill = 0;

// Declare enemies
let enemies = [
  {
    name: "Goblin",
    attack: 5,
    health: 60,
    item: ["Lesser-Potion", "potion", "Useless junk", "Nothing"],
  },
  {
    name: "Hob-Goblin",
    attack: 15,
    health: 85,
    item: ["Potion", "Potion+", "Useless junk", "nothing"],
  },
  {
    name: "Red Cap Goblin",
    attack: 16,
    health: 115,
    item: ["Nothing" + "Potion", "Greater potion", "Goblin trinket"],
  },
  {
    name: "Goblin king " + " Boss",
    attack: 18,
    health: 200,
    item: [
      "Potion",
      "High potion+",
      "Useless junk",
      "Gold coin",
      "goblin goodluck charm",
    ],
  },
];

let hero = {
  name: heroName,
  health: 100,
  attack: 15,
  items: ["potion"],
};
//Random enemy Gen
function getRandomEnemy() {
  let enemyIndex = Math.floor(Math.random() * enemies.length);
  return enemies[enemyIndex];
}
//25% spawn rate???
function enemySpawner() {
  let enemySpawn = Math.ceil(Math.random() * 100);
  if (enemySpawn >= 75) {
    //calling getRandom and passing it in as a VAR
    let randomEnemy = getRandomEnemy();
    console.log(randomEnemy.name + " Has appeared!");
    combat(hero, randomEnemy);
  } else {
    console.log("No monsters have appeared");
  }
}
//build walking function
while (isWalking) {
  let walkingMenu = gameStart
    .question("Press (w) to WALK (P) for Stats and inventory (e) to EXIT :")
    .toLowerCase();

  if (walkingMenu === "w") {
    console.log("You take a few steps forward");
    enemySpawner();
  } else if (walkingMenu === "e") {
    console.log(`
    ${hero.name}, as you depart, your echo fades from this labyrinth's digital embrace. 
    \nUntil our paths entwine again, may your adventures elsewhere be equally resolute and beguiling.`);
    isAlive = false;
    break;
  } else if (walkingMenu === "p") {
    displayItemsAndStats(walkingMenu);
  } else {
    console.log("Invalid input");
  }
}

//Build Combat and Combat options in one function
//check if enemy or player is dead after combat

function combat(hero, enemy) {
  isWalking = false;
  isFighting = true;
  let healthRegen = 40;
  while (isFighting) {
    let combatMenu = gameStart
      .question(" Press (A) to attack (D) attempt to escape : ")
      .toLowerCase();

    if (combatMenu === "a") {
      let heroDamage = Math.floor(Math.random() * hero.attack + 1);
      enemy.health -= heroDamage;
      console.log(
        hero.name + " has dealt " + heroDamage + " damage to " + enemy.name
      );
      console.log(enemy.name + " Current health \n" + enemy.health);

      if (enemy.health <= 0) {
        isFighting = false;
        enemyKill++;
        console.log(
          "You have slain  " +
            enemy.name +
            " and you have regained " +
            healthRegen +
            "health" +""
        );
        hero.health += healthRegen;
        console.log(hero.name + " Current health " + hero.health);
        rewardPlayer();
       
      }

      let enemyDamage = Math.floor(Math.random() * enemy.attack + 1);
      hero.health -= enemyDamage;

      console.log(
        enemy.name + " Has dealt " + enemyDamage + " damage to " + hero.name
      );
      console.log(hero.name + " Current health \n" + hero.health);

      if (hero.health <= 0) {
        isAlive = false;
        isFighting = false;
        console.log(`
        Alas, ${hero.name}, \n 
         thy indomitable spirit, once ablaze with courage, hath succumbed to the inscrutable forces of the labyrinth.
        As shadows envelop thee, know that thy journey ends here, a mere mortal ensnared by the enigma that pervades these cryptic corridors. 
        May thy memory linger in the echoes of this arcane realm, and thy tale be whispered among those who dare tread the path of survival.
        Knowest that thou hast slain ${enemyKill} enemies before falling victim to ${enemy.name}`);
      }
    } else if (combatMenu === "d") {
      escapeCombat();
    } else {
      console.log("Please enter a valid input");
    }
  }
}

//escape function should return hero to main path (50% chance of escape)
function escapeCombat() {
  let escapeChance = Math.floor(Math.random() * 100);
  if (escapeChance >= 50) {
    console.log("You have escaped \n returning to the main path");
    isFighting = false;
    isWalking = true;
  } else {
    console.log("Enemy has blocked your path");
  }
}
//build item rewards

function rewardPlayer() {
  let randomEnemy = getRandomEnemy();
  //set index of items in array of items
  let randomItemIndex = Math.floor(Math.random() * randomEnemy.item.length);
  // item at a specific index chosen randomly
  let randomItem = randomEnemy.item[randomItemIndex];
  //item is pushed into players inventory
  hero.items.push[randomItem];
  //display item
  console.log(` \n You have been awarded ${randomItem}`);
  isFighting = false;
  isWalking = true;
}
// Handle displaying inventory and hero health and stats
//build inventory to allow use of rewarded items
//Will not display stats in combat or if a monster is encountered
function displayItemsAndStats(menu) {
  isWalking = true;

  if (menu === "p") {
    console.log(
      hero.name +
        "s" +
        " Stats: " +
        " Health: " +
        hero.health +
        "" +
        " Attack: " +
        hero.attack +
        "" +
        " Items: " +
        hero.items
    );
  } else if (menu === "print") {
    console.log(
      hero.name +
        "s" +
        " Stats " +
        "Health: " +
        hero.health +
        "Attack: " +
        hero.attack +
        " Items: " +
        hero.items
    );
  } else {
    console.log(" Please enter a valid input.");
  }
}

const gameStart = require("readline-sync");

gameStart.question("The labyrinth: Think you can survive?");

const heroName = gameStart.question("What is your name, Hero? :");

console.log("Welcome great: " + heroName);

isAlive = true;
isFighting = false;
isWalking = true;

// Declare enemies
let enemies = [
  {
    name: "Goblin",
    attack: 5,
    health: 100,
    item: ["Lesser-Potion", "potion", "Useless junk", "Nothing"],
  },
  {
    name: "Hob-Goblin",
    attack: 15,
    health: 125,
    item: ["Potion", "Potion+", "Useless junk", "nothing"],
  },
  {
    name: "Red Cap Goblin",
    attack: 20,
    health: 125,
    item: ["Nothing" + "Potion", "Greater potion", "Goblin trinket"],
  },
  {
    name: "Goblin king " + " Boss",
    attack: 25,
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
  armour: 10,
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
    .question("Press (w) to WALK or (e) to EXIT :")
    .toLowerCase();

  if (walkingMenu === "w") {
    console.log("You take a few steps forward");
    enemySpawner();
  } else if (walkingMenu === "e") {
    console.log("You chose to leave the labyrinth\n Game Over");
    isAlive = false;
    break;
  } else {
    console.log("Invalid input");
  }
}

//Build Combat and Combat options in one function
//check if enemy or player is dead after combat

function combat(hero, enemy) {
  isWalking = false;
  isFighting = true;
  let healthRegen = (hero.health += 20);
  while (isFighting) {
    let combatMenu = gameStart
      .question("Press (A) to attack Or (D) to attempt to escape :")
      .toLowerCase();

    if (combatMenu === "a") {
      let heroDamage = Math.floor(Math.random() * hero.attack + 1);
      enemy.health -= heroDamage;
      console.log(
        hero.name + " has dealt " + heroDamage + " damage to " + enemy.name
      );
      console.log(enemy.name + " Current health \n" + enemy.health);

      if (enemy.health <= 0) {
        console.log(
          "You have slain  " +
            enemy.name +
            " and you have regained " +
            healthRegen +
            "health"
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
        console.log("You have died! \n Game over!");
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
    isFighting = true;
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
}
// Handle displaying inventory and hero health and stats

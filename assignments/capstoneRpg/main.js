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
let letisAlive = true;
let isFighting = false;
let isWalking = true;
let isShopping = false;
let enemyKill = 0;
let stepsTaken = 0;
let goldCoin = 0;

// Declare enemies
let enemies = [
  {
    name: " Blue Goblin",
    attack: 6,
    health: 60,
    item: ["Potion", "potion"],
  },
  {
    name: " Green Goblin",
    attack: 7,
    health: 60,
    item: ["Potion", "potion"],
  },
  {
    name: " Gray Goblin",
    attack: 8,
    health: 60,
    item: ["Potion", "potion"],
  },
  {
    name: "Hob-Goblin",
    attack: 9,
    health: 85,
    item: ["Potion", "Potion"],
  },
  {
    name: "Red Cap Goblin",
    attack: 10,
    health: 95,
    item: ["Potion", "potion"],
  },
  {
    name: "Goblin king " + " Boss",
    attack: 18,
    health: 115,
    item: ["Potion", "Gold coin"],
  },
  {
    name: " Dagger Goblin",
    attack: 9,
    health: 60,
    item: ["Potion", "potion"],
  },
  {
    name: "Goblin Boss Eunki: Ender of all things",
    attack: 50,
    health: 600,
    item: ["Potion", "potion"],
  },
];

let hero = {
  name: heroName,
  health: 100,
  attack: 15,
  items: ["potion"],
};

let currentEnemy = null;
let randomEnemy = null;
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
    // console.clear();
    console.log(randomEnemy.name + " Has appeared!");

    combat(hero, randomEnemy);
    return randomEnemy;
  } else {
    // console.clear();
    console.log(`
    Fear not,\n noble traveler, for the current moment unfolds in serene tranquility — no monsters assail your path. Proceed with confidence.`);
    return null;
  }
}
//build walking function
function walking() {
  while (isWalking) {
    let walkingMenu = gameStart
      .question("Press (w) to WALK (P) for Stats and inventory (e) to EXIT :")
      .toLowerCase();
    hidderVendor();

    if (walkingMenu === "w") {
      console.log("You take a few steps forward");
      stepsTaken++;
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
}

//Build Combat and Combat options in one function
//check if enemy or player is dead after combat

function combat(hero, enemy) {
  isWalking = false;
  isFighting = true;
  let healthRegen = 25;

  randomEnemy = getRandomEnemy();

  while (isFighting) {
    currentEnemy = enemy;
    let combatMenu = gameStart
      .question(" Press (A) to attack (D) attempt to escape : " + " ")
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
            "health" +
            ""
        );
        hero.health += healthRegen;
        resetEnemyHealth(enemy);
        console.log(hero.name + " Current health " + hero.health);
        rewardPlayer();
      }

      let enemyDamage = Math.floor(Math.random() * enemy.attack + 1);
      hero.health -= enemyDamage;

      console.log(
        enemy.name + " Has dealt " + enemyDamage + " damage to " + hero.name
      );
      console.log(hero.name + " Current health \n" + hero.health);

      checkHeroDeath();
    } else if (combatMenu === "d") {
      escapeCombat();
    } else {
      console.log("Please enter a valid input");
    }
  }
}

//escape function should return hero to main path (50% chance of escape)
function escapeCombat() {
  if (randomEnemy) {
    let escapeChance = Math.floor(Math.random() * 100);
    escapePenalty(randomEnemy);

    if (escapeChance >= 50) {
      console.log("You have escaped \n returning to the main path");

      isFighting = false;
      isWalking = true;
    } else {
      console.log(randomEnemy.name + " has blocked your path");
      isFighting = true;
    }
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
  hero.items.push(randomItem);
  //display item
  console.log(` \n You have been awarded ${randomItem} + a gold coin!`);
  goldCoin++;
  isFighting = false;
  isWalking = true;
}
// Handle displaying inventory and hero health and statsOfplayer
//build inventory to allow use of rewarded items
//Will not display statsOfplayer in combat or if a monster is encountered
function displayItemsAndStats(menu) {
  isWalking = true;

  if (menu === "p") {
    useItem(hero.items);
    statsOfplayer();
  } else if (menu === "print") {
    statsOfplayer();
  } else {
    console.log(" Please enter a valid input.");
  }
}
//inventory functions
function useItem(arrayOfItems) {
  console.log(`Inventory`);
  statsOfplayer();
  console.log("You have " + hero.items.length + " item(s) in your inventory");
  console.log(
    "You have " +
      hero.items.length +
      " potion(s) in your inventory" +
      " Gold coins: " +
      goldCoin
  );
  let usePotion = gameStart.question("Would you like to use a potion? y/n ");

  if (usePotion === "y") {
    if (hero.items.length <= 0) {
      console.log("You have no items to use");
    } else {
      if (hero.health >= 100) {
        console.log(
          `At full health, preserve resources wisely, lest their value be needlessly squandered.`
        );
        useItem(arrayOfItems);
      } else {
        arrayOfItems.pop();
        console.log("You have used a potion!");
        hero.health += 40;
        if (hero.health >= 100) {
          hero.health = 100;
        }
        isWalking = true;
      }
    }
  } else if (usePotion === "n") {
    console.log("Leaving inventory");
    isWalking = true;
  } else {
    console.log("Please enter a valid input.");
  }
}
//- After the player attacks or runs the enemy attacks back for a random damage amount
function escapePenalty(enemy) {
  let enemyDamage = Math.floor(Math.random() * enemy.attack + 1);
  hero.health -= enemyDamage;
  console.log(`
    In seeking escape, a price was paid; wounds now bear witness to the fleeting pursuit of safety.
    You hear the sounds of scurrying behind you as ${enemy.name} attacks you from behind`);

  console.log(
    enemy.name +
      " Has dealt " +
      enemyDamage +
      " damage to " +
      hero.name +
      " for trying to escape trying to escape"
  );

  checkHeroDeath();
}
//display stats
function statsOfplayer() {
  let heroStats = hero.name + `'s` + " Stats " + "Health: " + hero.health + " ";
  "Attack: " + hero.attack + " ";
  " Items: " + " ";
  hero.items;

  console.log("Labyrinth : " + heroStats);
}

//build secret shop

function hidderVendor() {
  if (enemyKill > 5 && stepsTaken >= 15) {
    let secretMenu =
      gameStart.question(`In the hushed corridors of the labyrinth, a subtle whisper echoes, revealing the clandestine presence of a secret door. 
    As you approach, its hidden mechanism yields to your touch, unveiling a chamber bathed in an ethereal glow. 
    Do you enter? y/n : `);

    if (secretMenu === "y") {
      isShopping = true;
      console.log(
        "you step inside, a mysterious figure draped in shadows materializes, offering curious wares for barter."
      );
      hidderVendorMenu();
    } else if (secretMenu === "n") {
      console.log("You depart from the dark merchant");
      isShopping = false;
    } else {
      console.log("Enter a valid input");
    }
  }
}
function resetEnemyHealth(enemy) {
  enemy.health += 65;
}

function hidderVendorMenu() {
  while (isShopping) {
    let shopMenu = gameStart
      .question(
        "Would you like to buy potions or perhaps a weapon? (P)= potion (w) = weapon (E) = Exit Shop: "
      )
      .toLowerCase();
    let potionBottle = "Potion";
    if (shopMenu === "p") {
      let potion = gameStart
        .question(
          "Potions are 1 for 1 gold. Do you want to buy a potion? y/n: "
        )
        .toLowerCase();
      if (potion === "y") {
        console.log(
          "You purchased a potion, returning you to the main shop menu."
        );
        stepsTaken = 0;
        isWalking = true;
        if (goldCoin < 1) {
          console.log("You don't have enough gold coins.");
        }
      } else {
        goldCoin--;
        console.log("You have purchased a Potion.");
        hero.items.push(potionBottle);
      }
    } else if (shopMenu === "w") {
      let weaponUpgrade = gameStart
        .question(
          "Weapons are (5) gold are you sure you want buy a weapon Upgrade?  y/n: "
        )
        .toLowerCase();
      let weaponPower = " + 5 Attack Power";
      if (weaponUpgrade === "y") {
        if (goldCoin < 5) {
          console.log("You don't have enough coins!");
        } else {
          console.log("You have just purchased " + weaponPower);
          console.log("You will be returned to the main shop menu.");
          goldCoin -= 5;
          hero.attack += 5;
        }
      }
    } else if (shopMenu === "e") {
      isShopping = false;
      stepsTaken = 0;
      isWalking = true;
    }
  }
}
function checkHeroDeath() {
  if (hero.health <= 0) {
    isAlive = false;
    isFighting = false;
    console.log(`
        Alas, ${hero.name}, \n 
         thy indomitable spirit, once ablaze with courage, hath succumbed to the inscrutable forces of the labyrinth.
        As shadows envelop thee, know that thy journey ends here, a mere mortal ensnared by the enigma that pervades these cryptic corridors. 
        May thy memory linger in the echoes of this arcane realm, and thy tale be whispered among those who dare tread the path of survival.
        Knowest that thou hast slain ${enemyKill} enemies before falling victim to ${currentEnemy.name} and taking ${goldCoin} : Gold coins with thee to thine grave`);
  }
}
walking();

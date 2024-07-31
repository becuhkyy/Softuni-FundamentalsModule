function dungeonestDark(roomsArr) {
  let health = 100;
  let coins = 0;

  roomsArr = roomsArr[0].split("|");

  for (let i = 0; i < roomsArr.length; i++) {
    const action = roomsArr[i].split(" ");

    if (action[0] === "potion") {
      let healedFor = 0;

      if (Number(action[1]) + health >= 100) {
        healedFor = 100 - health;
        health = 100;
      } else {
        health += Number(action[1]);
        healedFor = Number(action[1]);
      }

      console.log(`You healed for ${healedFor} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (action[0] === "chest") {
      coins += Number(action[1]);
      console.log(`You found ${action[1]} coins.`);
    } else {
      health -= Number(action[1]);

      if (health > 0) {
        console.log(`You slayed ${action[0]}.`);
      } else {
        console.log(`You died! Killed by ${action[0]}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

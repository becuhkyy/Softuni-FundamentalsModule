function muOnline(inputStr) {
  const rooms = inputStr.split("|");
  let health = 100;
  let bitcoins = 0;
  let bestRoom = 0;

  for (room of rooms) {
    bestRoom++;
    const [command, number] = room.split(" ");

    switch (command) {
      case "potion":
        let healed =
          health + Number(number) > 100 ? 100 - health : Number(number);
        health += healed;

        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        console.log(`You found ${number} bitcoins.`);
        bitcoins += Number(number);
        break;
      default:
        health -= Number(number);
        if (health > 0) console.log(`You slayed ${command}.`);
        else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${bestRoom}`);
          return;
        }
        break;
    }
  }

  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

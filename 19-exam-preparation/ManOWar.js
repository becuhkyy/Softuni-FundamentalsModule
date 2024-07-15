function manOWar(inputArr) {
  let [pirateShip, warShip, maxHealth, ...commands] = inputArr;

  pirateShip = pirateShip.split(">").map(Number);
  warShip = warShip.split(">").map(Number);
  maxHealth = Number(maxHealth);

  for (command of commands) {
    const [action, ...stats] = command.split(" ");

    switch (action) {
      case "Fire":
        const [index, damage] = stats.map(Number);

        if (!warShip[index]) continue;

        if (warShip[index] - damage <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }

        warShip[index] -= damage;

        break;
      case "Defend":
        const [startIndex, endIndex, damageDealt] = stats.map(Number);

        if (!pirateShip[startIndex] || !pirateShip[endIndex]) continue;

        for (let i = startIndex; i <= endIndex; i++) {
          if (pirateShip[i] - damageDealt <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }

          pirateShip[i] -= damageDealt;
        }

        break;
      case "Repair":
        const [repairIndex, health] = stats.map(Number);

        if (repairIndex < 0 || repairIndex >= pirateShip.length) continue;

        pirateShip[repairIndex] += health;

        if (pirateShip[repairIndex] > maxHealth)
          pirateShip[repairIndex] = maxHealth;

        break;
      case "Status":
        let repairSectionsCount = pirateShip.filter((i) => i < maxHealth * 0.2);

        console.log(`${repairSectionsCount.length} sections need repair.`);

        break;
      case "Retire":
        const pirateShipStatus = pirateShip.reduce((acc, val) => acc + val, 0);
        const warShipStatus = warShip.reduce((acc, val) => acc + val, 0);

        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warShipStatus}`);

        break;
    }
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);

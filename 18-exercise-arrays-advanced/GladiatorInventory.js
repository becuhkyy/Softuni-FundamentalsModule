function gladiatorInventory(inputArr) {
  let inventory = inputArr.shift().split(" ");

  for (command of inputArr) {
    const [action, item] = command.split(" ");

    switch (action) {
      case "Buy":
        if (!inventory.includes(item)) inventory.push(item);
        break;
      case "Trash":
        inventory = inventory.filter((i) => i !== item);
        break;
      case "Repair":
        if (inventory.includes(item)) {
          inventory = inventory.filter((i) => i !== item);
          inventory.push(item);
        }
        break;
      case "Upgrade":
        const [equipment, upgrade] = item.split("-");
        const upgradeIndex = inventory.indexOf(equipment);
        if (upgradeIndex !== -1)
          inventory.splice(upgradeIndex + 1, 0, `${equipment}:${upgrade}`);
        break;
    }
  }

  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

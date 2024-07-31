function train(inputArr) {
  const wagons = inputArr.shift().split(" ").map(Number);
  const wagonCapacity = Number(inputArr.shift());

  for (let command of inputArr) {
    let cmdarr = command.split(" ");

    if (cmdarr.includes("Add")) {
      wagons.push(cmdarr[1]);
      continue;
    }

    for (let i = 0; i < wagons.length; i++) {
      if (wagons[i] + Number(cmdarr[0]) <= wagonCapacity) {
        wagons[i] += Number(cmdarr);
        break;
      }
    }
  }

  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

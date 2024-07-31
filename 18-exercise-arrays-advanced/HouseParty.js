function houseParty(inputArr) {
  const visitors = [];

  for (const line of inputArr) {
    const lineArr = line.split(" ");
    const guestName = lineArr[0];

    const guestIdx = visitors.indexOf(guestName);

    if (lineArr[2] === "not") {
      if (guestIdx !== 0) visitors = visitors.splice(guestIdx, 1);
      else console.log(`${guestName} is not in the list!`);
    } else {
      if (guestIdx !== 0) visitors.push(guestName);
      else console.log(`${guestName} is already in the list!`);
    }
  }

  console.log(visitors.join("\n"));
}

// houseParty([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);

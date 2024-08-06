function jeweler(inputArr) {
  const [whiteGold, yellowGold] = inputArr.map((i) => i.split(" ").map(Number));
  let spareGold = 0;
  let pairs = 0;

  for (let i = 0; i < whiteGold.length; i++) {
    let yellow = yellowGold[i];
    let white = whiteGold[i];

    let gold = white + yellow;

    while (gold !== 10 && yellow >= 0) {
      if (gold < 10) {
        spareGold += gold;
        break;
      }

      yellow -= 2;
      gold = white + yellow;
    }

    if (gold === 10) pairs++;
  }

  pairs += Math.floor(spareGold / 10);

  if (pairs >= 7) {
    console.log(`Great success, you created ${pairs} earrings.`);
  } else {
    console.log(`Keep trying, you need ${7 - pairs} more earrings.`);
  }
}

jeweler(["2 7 8 5 1 6 1 7 5", "8 3 2 7 9 4 9 2 3"]);
jeweler(["5 3 2 2 4", "5 5 8 2 6"]);

function cardGame(stringsArr) {
  const players = {};
  const cardTypes = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  const cardValues = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  for (const input of stringsArr) {
    const [playerName, draw] = input.split(": ");
    const cards = new Set(draw.split(", "));

    if (!players[playerName]) {
      players[playerName] = new Set();
    }

    cards.forEach((card) => players[playerName].add(card));
  }

  for (const key in players) {
    let totalPower = 0;

    for (const card of players[key]) {
      const value = card.slice(0, -1);
      const type = card.slice(-1);

      totalPower += cardValues[value] * cardTypes[type];
    }

    console.log(`${key}: ${totalPower}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);

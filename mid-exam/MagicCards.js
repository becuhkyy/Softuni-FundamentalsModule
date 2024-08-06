function magicCards(inputArr) {
  const [originalDeckStr, ...commands] = inputArr;
  const originalDeck = originalDeckStr.split(":");
  const newDeck = [];

  for (const item of commands) {
    const [command, token1, token2] = item.split(" ");

    if (command === "Ready") break;

    switch (command) {
      case "Add":
        if (originalDeck.includes(token1)) newDeck.push(token1);
        else console.log("Card not found.");
        break;
      case "Insert":
        const insertIndex = Number(token2);
        if (
          originalDeck.includes(token1) &&
          insertIndex < newDeck.length &&
          insertIndex >= 0
        )
          newDeck.splice(insertIndex, 0, token1);
        else console.log("Error!");
        break;
      case "Remove":
        const idx = newDeck.indexOf(token1);
        if (idx !== -1) newDeck.splice(idx, 1);
        else console.log("Card not found.");
        break;
      case "Swap":
        const idx1 = newDeck.indexOf(token1);
        const idx2 = newDeck.indexOf(token2);

        if (idx1 !== -1 && idx2 !== -1) {
          newDeck.splice(idx1, 1, token2);
          newDeck.splice(idx2, 1, token1);
        }
        break;
      case "Shuffle":
        if (token1 === "deck") newDeck.reverse();
        break;
    }
  }

  console.log(newDeck.join(" "));
}

magicCards([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Bite",
  "Insert Claw 0",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Ready",
]);

magicCards([
  "Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
  "Add UndergroundSea",
  "Add Timetwister",
  "Remove Wrath",
  "Add CopyArtifact",
  "Shuffle deck",
  "Ready",
]);

magicCards([
  "BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
  "Add BlackLotus",
  "Insert Claw 1",
  "Add Moonfire",
  "Add Bite",
  "Ready",
]);

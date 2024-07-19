function legendaryFarming(strInput) {
  const tokens = strInput.toLowerCase().split(" ");
  const junkMaterialQuantities = {};

  const legendaryItems = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };

  const keyMaterialQuantities = {
    motes: 0,
    shards: 0,
    fragments: 0,
  };

  for (let index = 0; index < tokens.length; index += 2) {
    const quantity = Number(tokens[index]);
    const material = tokens[index + 1];

    if (material in keyMaterialQuantities) {
      keyMaterialQuantities[material] += quantity;

      if (keyMaterialQuantities[material] >= 250) {
        console.log(`${legendaryItems[material]} obtained!`);
        keyMaterialQuantities[material] -= 250;
        break;
      }
    } else if (material in junkMaterialQuantities) {
      junkMaterialQuantities[material] += quantity;
    } else {
      junkMaterialQuantities[material] = quantity;
    }
  }

  const materialEntries = Object.entries(keyMaterialQuantities);

  materialEntries.sort(
    ([keyA, valA], [keyB, valB]) => valB - valA || keyA.localeCompare(keyB)
  );

  for (const [material, quantity] of materialEntries) {
    console.log(`${material}: ${quantity}`);
  }

  const junkEntries = Object.entries(junkMaterialQuantities);

  junkEntries.sort(([a], [b]) => a.localeCompare(b));

  for (const [material, quantity] of junkEntries) {
    console.log(`${material}: ${quantity}`);
  }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");

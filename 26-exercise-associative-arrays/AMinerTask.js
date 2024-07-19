function minerTask(inputArr) {
  const resourcesQuantities = {};

  while (inputArr.length > 0) {
    const res = inputArr.shift();
    const qty = inputArr.shift();

    if (res in resourcesQuantities) resourcesQuantities[res] += Number(qty);
    else resourcesQuantities[res] = Number(qty);
  }

  for (const key in resourcesQuantities) {
    console.log(`${key} -> ${resourcesQuantities[key]}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);

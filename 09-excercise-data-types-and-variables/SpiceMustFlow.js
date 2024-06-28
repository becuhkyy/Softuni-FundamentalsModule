function spiceMustFlow(yield) {
  let totalSpice = 0;
  let days = 0;

  while (yield >= 100) {
    totalSpice += yield;

    if (totalSpice >= 26) totalSpice -= 26;

    days++;
    yield -= 10;
  }

  if (totalSpice >= 26) totalSpice -= 26;

  console.log(days);
  console.log(totalSpice);
}

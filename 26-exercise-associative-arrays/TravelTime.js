function travelTime(inputArr) {
  const destinations = {};

  for (const line of inputArr) {
    const [country, town, priceStr] = line.split(" > ");
    const price = Number(priceStr);

    if (!destinations[country]) destinations[country] = {};

    if (!destinations[country][town] || destinations[country][town] > price)
      destinations[country][town] = price;
  }

  const sortedDestinations = Object.entries(destinations).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [country, towns] of sortedDestinations) {
    const sortedTowns = Object.entries(towns)
      .sort((a, b) => a[1] - b[1])
      .map((town) => town.join(" -> "))
      .join(" ");

    console.log(`${country} -> ${sortedTowns}`);
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);

function softuniBarIncome(inputArr) {
  let totalIncome = 0;

  const pattern =
    /%(?<customer>[A-Z][a-z]+)%[^\$\|\%\.]*<(?<product>\w+)>[^\$\|\%\.]*\|(?<count>\d+)\|[^\$\|\%\.]*(?<price>\d+\.?\d+)\$/;

  while (inputArr.length > 0) {
    const command = inputArr.shift();
    if (command === "end of shift") break;

    const match = command.match(pattern);

    if (match) {
      const { customer, product, count, price } = match.groups;
      const income = Number(count) * Number(price);
      totalIncome += income;
      console.log(`${customer}: ${product} - ${income.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);

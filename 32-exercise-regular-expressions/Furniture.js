function furniture(input) {
  const pattern =
    />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;

  let totalPrice = 0;

  console.log("Bought furniture:");

  let command = input.shift();

  while (command !== "Purchase") {
    let match = pattern.exec(command);

    if (match) {
      let { name, price, quantity } = match.groups;

      totalPrice += Number(price) * Number(quantity);

      console.log(name);
    }

    command = input.shift();
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);

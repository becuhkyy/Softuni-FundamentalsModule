function catalogue(inputArr) {
  const parsed = [];
  const letters = [];

  for (const product of inputArr) {
    const [productName, productPrice] = product.split(" : ");
    parsed.push({ productName, productPrice: Number(productPrice) });

    if (!letters.includes(productName[0])) {
      letters.push(productName[0]);
    }
  }

  parsed.sort((a, b) => a.productName.localeCompare(b.productName));
  letters.sort();

  for (const letter of letters) {
    console.log(letter);
    for (const product of parsed) {
      if (product.productName[0] === letter)
        console.log(`\t${product.productName}: ${product.productPrice}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

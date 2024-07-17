function storeProvision(stockArr, newStockArr) {
  const stock = {};

  while (stockArr.length) {
    const item = stockArr.shift();
    const quantity = stockArr.shift();

    stock[item] = Number(quantity);
  }

  while (newStockArr.length) {
    const item = newStockArr.shift();
    const quantity = newStockArr.shift();

    if (stock[item]) stock[item] += Number(quantity);
    else stock[item] = Number(quantity);
  }

  for (const key in stock) {
    console.log(`${key} -> ${stock[key]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

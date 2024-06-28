function bitcoinMining(goldArr) {
  const BITCOIN_PRICE = 11949.16;
  const GOLD_PRICE_PER_GRAM = 67.51;

  let dayOfFirstBitcoin = 0;
  let totalMinedGold = 0;

  goldArr.forEach((day, idx) => {
    if ((idx + 1) % 3 === 0) {
      totalMinedGold += day - day * 0.3;
    } else {
      totalMinedGold += day;
    }

    if (
      totalMinedGold * GOLD_PRICE_PER_GRAM >= BITCOIN_PRICE &&
      dayOfFirstBitcoin === 0
    )
      dayOfFirstBitcoin = idx + 1;
  });

  let totalMoney = totalMinedGold * GOLD_PRICE_PER_GRAM;

  let totalBitcoinsBought = Math.floor(totalMoney / BITCOIN_PRICE);

  let moneyLeft = totalMoney - totalBitcoinsBought * BITCOIN_PRICE;

  console.log(`Bought bitcoins: ${totalBitcoinsBought}`);
  if (dayOfFirstBitcoin !== 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  }

  console.log(`Left money: ${Number(moneyLeft).toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);

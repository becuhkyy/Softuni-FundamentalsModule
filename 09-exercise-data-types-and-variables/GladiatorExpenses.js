function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;

  let shieldBreakCount = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) expenses += helmetPrice;
    if (i % 3 === 0) expenses += swordPrice;
    if (i % 3 === 0 && i % 2 === 0) {
      expenses += shieldPrice;
      shieldBreakCount++;
    }
    if (shieldBreakCount === 2) {
      expenses += armorPrice;
      shieldBreakCount = 0;
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

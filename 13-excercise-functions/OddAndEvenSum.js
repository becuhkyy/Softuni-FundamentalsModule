function oddAndEvenSum(num) {
  const numStringified = num.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (digit of numStringified) {
    const currDigit = Number(digit);

    if (currDigit % 2 === 0) evenSum += currDigit;
    else oddSum += currDigit;
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

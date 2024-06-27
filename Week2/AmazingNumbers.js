function amazingNumbers(num) {
  const numStringified = num.toString();
  let sum = 0;

  for (let i = 0; i < numStringified.length; i++) {
    sum += Number(numStringified[i]);
  }

  let isAmazing = false;
  const sumStringified = sum.toString();

  for (let i = 0; i < sumStringified.length; i++) {
    if (sumStringified[i] === "9") {
      isAmazing = true;
      break;
    }
  }

  console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);
}

function reverseAnArrayOfNumbers(n, numArr) {
  const numArrReversed = [];

  for (let i = n - 1; i >= 0; i--) numArrReversed.push(numArr[i]);

  console.log(numArrReversed.join(" "));
}

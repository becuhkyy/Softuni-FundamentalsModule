function bombNumbers(numbers, bombNumber) {
  while (numbers.indexOf(bombNumber[0]) > -1) {
    const startIdx = Math.max(
      numbers.indexOf(bombNumber[0]) - bombNumber[1],
      0
    );

    const endIdx = Math.min(
      numbers.indexOf(bombNumber[0]) + bombNumber[1],
      numbers.length - 1
    );

    const count = endIdx - startIdx;

    numbers.splice(startIdx, count + 1);
  }

  let sum = numbers.reduce((a, b) => a + b, 0);
  console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([2, 2, 2, 1, 1, 1, 1, 1, 1], [2, 1]);

function sorting(inputArr) {
  const result = [];

  inputArr = inputArr.sort((a, b) => a - b);

  while (inputArr.length !== 0) {
    if (inputArr.length === 1) {
      result.push(inputArr.pop());
      break;
    }

    result.push(inputArr.pop(), inputArr.shift());
  }

  console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

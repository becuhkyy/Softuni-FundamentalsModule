function equalSums(numArr) {
  let leftSum = 0;
  const equalSumIndexes = [];

  for (let i = 0; i < numArr.length; i++) {
    let rightSum = 0;
    for (let j = i + 1; j < numArr.length; j++) {
      rightSum += numArr[j];
    }

    if (leftSum === rightSum) equalSumIndexes.push(i);

    leftSum += numArr[i];
  }

  if (equalSumIndexes.length > 0) console.log(equalSumIndexes.join(" "));
  else console.log("no");
}

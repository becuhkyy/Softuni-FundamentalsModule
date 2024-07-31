function magicSum(numArr, targetSum) {
  for (let i = 0; i < numArr.length - 1; i++)
    for (let j = i + 1; j < numArr.length; j++)
      if (numArr[i] + numArr[j] === targetSum)
        console.log(`${numArr[i]} ${numArr[j]}`);
}

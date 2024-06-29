function addAndSubtract(numArr) {
  let oldArrSum = 0;
  let newArrSum = 0;

  for (let i = 0; i < numArr.length; i++) {
    oldArrSum += numArr[i];

    if (numArr[i] % 2 === 0) numArr[i] += i;
    else numArr[i] -= i;

    newArrSum += numArr[i];
  }

  console.log(numArr);
  console.log(oldArrSum);
  console.log(newArrSum);
}

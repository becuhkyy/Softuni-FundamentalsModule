function maxNumber(numArr) {
  const topIntegers = [];
  for (let i = 0; i < numArr.length; i++) {
    let isTop = true;

    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] <= numArr[j]) {
        isTop = false;
        break;
      }
    }

    if (isTop) topIntegers.push(numArr[i]);
  }

  console.log(topIntegers.join(" "));
}

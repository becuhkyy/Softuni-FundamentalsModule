function maxSequenceOfElements(numArr) {
  let longestSequence = [];
  let currentSequence = [];

  for (let i = 0; i < numArr.length; i++) {
    currentSequence.push(numArr[i]);

    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] === numArr[j]) {
        currentSequence.push(numArr[j]);
      } else {
        i = j - 1;
        break;
      }
    }

    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }
    currentSequence = [];
  }

  console.log(longestSequence.join(" "));
}

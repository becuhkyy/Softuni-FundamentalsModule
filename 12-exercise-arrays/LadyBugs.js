function ladyBugs(inputArr) {
  const fieldSize = Number(inputArr[0]);
  const initialState = inputArr[1].split(" ");

  const currentState = Array.from({ length: fieldSize }, () => 0);

  for (let i = 0; i < initialState.length; i++) {
    if (initialState[i] >= 0 && initialState[i] < currentState.length)
      currentState[initialState[i]] = 1;
  }

  for (let i = 2; i < inputArr.length; i++) {
    const command = inputArr[i].split(" ");
    const lbIndex = Number(command[0]);
    const direction = command[1];
    const flyLength = Number(command[2]);

    if (
      lbIndex < 0 ||
      lbIndex >= currentState.length ||
      currentState[lbIndex] === 0
    ) {
      continue;
    }

    currentState[lbIndex] = 0;

    let targetIndex =
      direction === "left" ? lbIndex - flyLength : lbIndex + flyLength;

    while (targetIndex >= 0 && targetIndex < currentState.length) {
      if (currentState[targetIndex] === 0) {
        currentState[targetIndex] = 1;
        break;
      }

      targetIndex =
        direction === "left"
          ? targetIndex - flyLength
          : targetIndex + flyLength;
    }
  }

  console.log(currentState.join(" "));
}

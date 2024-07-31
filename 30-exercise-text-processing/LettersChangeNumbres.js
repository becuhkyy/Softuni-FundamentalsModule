function lettersChangeNumbers(inputStr) {
  const tokens = inputStr.split(" ").filter((t) => t !== "");
  let sum = 0;

  for (let token of tokens) {
    token = token.split("");

    const leftModificator = token.shift();
    const rightModificator = token.pop();
    let number = Number(token.join(""));

    if (
      leftModificator.charCodeAt() >= 65 &&
      leftModificator.charCodeAt() <= 90
    ) {
      const letterPosition = leftModificator.charCodeAt() - 64;
      number /= letterPosition;
    } else {
      const letterPosition = leftModificator.charCodeAt() - 96;
      number *= letterPosition;
    }

    if (
      rightModificator.charCodeAt() >= 65 &&
      rightModificator.charCodeAt() <= 90
    ) {
      const letterPosition = rightModificator.charCodeAt() - 64;
      number -= letterPosition;
    } else {
      const letterPosition = rightModificator.charCodeAt() - 96;
      number += letterPosition;
    }

    sum += number;
  }

  console.log(sum.toFixed(2));
}

lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("a1A");

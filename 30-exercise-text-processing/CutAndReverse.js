function cutAndReverse(text) {
  const middle = text.length / 2;

  const leftPart = text.substring(0, middle);
  const rightPart = text.substring(middle);

  console.log(leftPart.split("").reverse().join(""));
  console.log(rightPart.split("").reverse().join(""));
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");

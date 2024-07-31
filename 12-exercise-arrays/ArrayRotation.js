function arrayRotation(numArr, rotations) {
  for (let i = 0; i < rotations; i++) {
    const temp = numArr.shift();
    numArr.push(temp);
  }

  console.log(numArr.join(" "));
}

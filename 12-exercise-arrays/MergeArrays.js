function mergeArrays(arrA, arrB) {
  const arrC = [];
  for (let i = 0; i < arrA.length; i++) {
    if (i % 2 === 0) {
      arrC.push(Number(arrA[i]) + Number(arrB[i]));
    } else {
      arrC.push(arrA[i] + arrB[i]);
    }
  }

  console.log(arrC.join(" - "));
}

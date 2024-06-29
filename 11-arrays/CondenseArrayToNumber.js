function condenseArrayToNumber(arr) {
  while (arr.length > 1) {
    const condensed = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = [...condensed];
  }
  console.log(arr[0]);
}

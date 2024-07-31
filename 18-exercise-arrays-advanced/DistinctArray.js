function distinctArray(inputArr) {
  const uniqueNums = [];

  for (const num of inputArr)
    if (!uniqueNums.includes(num)) uniqueNums.push(num);

  console.log(uniqueNums.join(" "));
}

distinctArray([1, 2, 3, 4]);

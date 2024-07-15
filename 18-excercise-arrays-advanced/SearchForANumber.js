function searchForANumber(elementsArr, modArr) {
  const sliced = elementsArr.slice(0, modArr[0]);

  sliced.splice(0, modArr[1]);

  let occurances = 0;
  for (item of sliced) {
    if (item === modArr[2]) occurances++;
  }

  console.log(`Number ${modArr[2]} occurs ${occurances} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

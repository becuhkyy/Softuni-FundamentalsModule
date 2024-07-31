function buildAWall(initialHArr) {
  let parsedH = initialHArr.map((h) => Number(h)).sort((a, b) => a - b);

  const maxIterations = 30 - parsedH[0];

  const concrete = [];
  for (let i = 0; i < maxIterations; i++) {
    let dailyConcreteUsage = 0;
    parsedH = parsedH.map((section) => {
      if (section < 30) {
        dailyConcreteUsage += 195;
        return ++section;
      }
    });
    concrete.push(dailyConcreteUsage);
  }

  console.log(concrete.join(", "));
  const totalPrice = concrete.reduce((acc, curr) => acc + curr * 1900, 0);
  console.log(`${totalPrice} pesos`);
}

buildAWall([17, 22, 17, 19, 17]);

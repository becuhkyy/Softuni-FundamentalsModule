function race(inputArr) {
  const participants = inputArr.shift().split(", ");
  result = {};

  participants.forEach((participant) => {
    result[participant] = 0;
  });

  const lettersPattern = /([A-Za-z])/g;
  const digitsPattern = /\d/g;

  let command = inputArr.shift();

  while (command !== "end of race") {
    const lettersMatch = command.match(lettersPattern);
    const name = lettersMatch.join("");

    const numberSearch = command.match(digitsPattern);
    const totalKilometers = numberSearch.reduce(
      (acc, kilometers) => acc + Number(kilometers),
      0
    );

    if (name in result) {
      result[name] += totalKilometers;
    }

    command = inputArr.shift();
  }

  const resultArr = Object.entries(result).sort(
    ([, kilometersA], [, kilometersB]) => kilometersB - kilometersA
  );

  console.log(`1st place: ${resultArr[0][0]}`);
  console.log(`2nd place: ${resultArr[1][0]}`);
  console.log(`3rd place: ${resultArr[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

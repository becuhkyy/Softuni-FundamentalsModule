function arrayManipulator(numArray, commands) {
  for (command of commands) {
    const commandArr = command.split(" ");

    switch (commandArr[0]) {
      case "add":
        numArray.splice(Number(commandArr[1]), 0, Number(commandArr[2]));
        break;
      case "addMany":
        numArray.splice(
          commandArr[1],
          0,
          ...commandArr.slice(2).map((i) => Number(i))
        );
        break;
      case "contains":
        console.log(numArray.indexOf(Number(commandArr[1])));
        break;
      case "remove":
        numArray.splice(commandArr[1], 1);
        break;
      case "shift":
        Array.from({ length: Number(commandArr[1]) }, (_, i) => i).map((i) => {
          const item = numArray.shift();
          numArray.push(item);
        });
        break;
      case "sumPairs":
        let result = [];
        for (let i = 0; i < numArray.length; i += 2) {
          if (i + 1 < numArray.length)
            result.push(numArray[i] + numArray[i + 1]);
          else result.push(numArray[i]);
        }
        numArray = result;
        break;
      case "print":
        console.log(`[ ${numArray.join(", ")} ]`);
        break;
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );
// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains -3", "print"]
// );
// arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);

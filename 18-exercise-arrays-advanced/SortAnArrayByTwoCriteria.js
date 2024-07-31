function sortByTwoCriteria(inputArr) {
  const result = inputArr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });

  console.log(result.join("\n"));
}

// sortByTwoCriteria(["alpha", "beta", "gamma"]);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

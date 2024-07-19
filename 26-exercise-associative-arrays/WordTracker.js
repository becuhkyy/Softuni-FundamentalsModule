function wordTracker(wordsArr) {
  const targetWords = wordsArr.shift().split(" ");
  const wordOccurances = {};

  for (const word of targetWords) {
    wordOccurances[word] = 0;
  }

  for (const word of wordsArr)
    if (word in wordOccurances) wordOccurances[word]++;

  const result = Object.entries(wordOccurances);
  result.sort(([_, a], [_, b]) => a - b);

  for (const [word, occur] of result) {
    console.log(`${word} - ${occur}`);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

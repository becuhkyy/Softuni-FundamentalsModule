function messageTranslator(inputArr) {
  // Not sure if we even need that:
  const n = Number(inputArr.shift());

  for (const message of inputArr) {
    const pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[a-zA-Z]{8,})\]/;

    const match = message.match(pattern);

    if (!match) {
      console.log("The message is invalid");
      continue;
    }

    const { command, text } = match.groups;

    const translated = [];

    for (const char of text) {
      translated.push(char.charCodeAt());
    }

    console.log(`${command}: ${translated.join(" ")}`);
  }
}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);

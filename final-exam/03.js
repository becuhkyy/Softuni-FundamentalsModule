function wildZoo(inputArr) {
  let command = inputArr.shift();
  const zoo = {};

  while (command !== "EndDay") {
    const [action, actionDetails] = command.split(": ");

    if (action === "Add") {
      const [name, food, location] = actionDetails.split("-");

      if (zoo.hasOwnProperty(name)) {
        zoo[name].food += Number(food);
      } else
        zoo[name] = {
          food: Number(food),
          location,
        };
    } else if (action === "Feed") {
      const [name, food] = actionDetails.split("-");

      if (name in zoo) {
        zoo[name].food -= Number(food);

        if (zoo[name].food <= 0) {
          delete zoo[name];
          console.log(`${name} was successfully fed`);
        }
      }
    }

    command = inputArr.shift();
  }

  const locations = {};
  console.log("Animals:");

  for (const [animalName, animalDetails] of Object.entries(zoo)) {
    if (!locations.hasOwnProperty(animalDetails.location))
      locations[animalDetails.location] = [];

    locations[animalDetails.location].push({ [animalName]: animalDetails });

    console.log(` ${animalName} -> ${animalDetails.food}g`);
  }

  console.log("Areas with hungry animals:");
  for (const [location, animals] of Object.entries(locations)) {
    console.log(` ${location}: ${animals.length}`);
  }
}

wildZoo([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);

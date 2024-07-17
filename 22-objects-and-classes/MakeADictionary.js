function makeADictionary(stringArr) {
  let dictionary = {};

  for (const item of stringArr) {
    const parsed = JSON.parse(item);

    dictionary = { ...dictionary, ...parsed };
  }

  const dictKeys = Object.keys(dictionary);

  dictKeys.sort();

  for (const key of dictKeys) {
    console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
  }
}

makeADictionary([
  '{"Coffee":"A hot drink madefrom the roasted and groundseeds (coffee beans) of atropical shrub."}',
  '{"Boiler":"kenef"}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for afare."}',
  '{"Boiler":"A fuel-burning apparatus or container forheating water."}',
  '{"Tape":"A narrow strip of material, typically used to holdor fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

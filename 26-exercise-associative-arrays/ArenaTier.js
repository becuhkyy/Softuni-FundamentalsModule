function arenaTier(inputArr) {
  const gladiators = {};

  for (const line of inputArr) {
    if (line === "Ave Cesar") break;

    if (line.includes("->")) {
      const [name, technique, skill] = line.split(" -> ");
      const skillValue = Number(skill);

      if (!gladiators[name]) {
        gladiators[name] = {};
      }

      if (
        !gladiators[name][technique] ||
        gladiators[name][technique] < skillValue
      )
        gladiators[name][technique] = skillValue;
    } else if (line.includes("vs")) {
      const [gladiatorA, gladiatorB] = line.split(" vs ");

      if (!gladiators[gladiatorA] || !gladiators[gladiatorB]) break;

      for (const technique of Object.keys(gladiators[gladiatorA])) {
        if (gladiators[gladiatorB][technique]) {
          if (
            gladiators[gladiatorA][technique] >
            gladiators[gladiatorB][technique]
          ) {
            delete gladiators[gladiatorB];
          } else {
            delete gladiators[gladiatorA];
          }
          break;
        }
      }
    }
  }

  const gladiatorEntries = Object.entries(gladiators)
    .map(([name, techniques]) => ({
      name,
      techniques,
      totalSkill: Object.values(techniques).reduce(
        (acc, skill) => acc + skill,
        0
      ),
    }))
    .sort(
      (a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name)
    );

  for (const { name, techniques, totalSkill } of gladiatorEntries) {
    console.log(`${name}: ${totalSkill} skill`);

    for (const power of Object.entries(techniques)) {
      console.log(`- ${power[0]} <!> ${power[1]}`);
    }
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 350",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);

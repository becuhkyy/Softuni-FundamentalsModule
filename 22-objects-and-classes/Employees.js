function employees(nameStrings) {
  const employeesArr = [];

  for (const name of nameStrings) {
    const personalNumber = name.length;
    employeesArr.push({
      name,
      personalNumber,
    });
  }

  for (const employee of employeesArr) {
    console.log(
      `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

function companyUsers(stringsArr) {
  const companyEmployees = {};

  for (const data of stringsArr) {
    const [companyName, employeeId] = data.split(" -> ");

    if (!companyEmployees[companyName])
      companyEmployees[companyName] = new Set();

    companyEmployees[companyName].add(employeeId);
  }

  const sortedKeys = Object.keys(companyEmployees).sort();

  for (const companyName of sortedKeys) {
    console.log(companyName);

    for (const employeeId of companyEmployees[companyName]) {
      console.log(`-- ${employeeId}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

function picollo(inputArr) {
  const parkingLot = new Set();

  for (const evt of inputArr) {
    const [dir, regNum] = evt.split(", ");
    dir === "IN" ? parkingLot.add(regNum) : parkingLot.delete(regNum);
  }

  if (parkingLot.size === 0) console.log("Parking Lot is Empty");

  const result = Array.from(parkingLot.keys());
  result.sort();

  for (const regNum of result) {
    console.log(regNum);
  }
}

picollo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

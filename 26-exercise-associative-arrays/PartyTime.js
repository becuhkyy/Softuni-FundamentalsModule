function partyTime(inputArr) {
  const guestList = {
    vip: [],
    regular: [],
  };

  const partyIndex = inputArr.indexOf("PARTY");

  for (let i = 0; i < partyIndex; i++) {
    const guest = inputArr[i];

    if (isNaN(guest[0])) {
      guestList.vip.push(guest);
    } else {
      guestList.regular.push(guest);
    }
  }

  for (let i = partyIndex + 1; i < inputArr.length; i++) {
    const guest = inputArr[i];

    if (guestList.vip.includes(guest)) {
      guestList.vip.splice(guestList.vip.indexOf(guest), 1);
    } else if (guestList.regular.includes(guest)) {
      guestList.regular.splice(guestList.regular.indexOf(guest), 1);
    }
  }

  console.log(guestList.vip.length + guestList.regular.length);

  for (const guest of guestList.vip) {
    console.log(guest);
  }

  for (const guest of guestList.regular) {
    console.log(guest);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);

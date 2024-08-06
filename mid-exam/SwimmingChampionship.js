function swimmingChampionship(inputArr) {
  const [
    championshipDays,
    targetPoints,
    swimmersCount,
    hotelRoomPricePerDayPerSwimmer,
    participationFeePerSwimmer,
    ...swimmersPointsPerDay
  ] = inputArr.map(Number);

  const hotelFee =
    hotelRoomPricePerDayPerSwimmer * swimmersCount * championshipDays;

  const participationFee = participationFeePerSwimmer * swimmersCount;

  const totalPoints = swimmersPointsPerDay.reduce((acc, today, idx, arr) => {
    if (idx > 0) return acc + today + arr[idx - 1] * 0.05;
    return acc + today;
  }, 0);

  const totalFee = hotelFee + participationFee;

  const isSuccessful = targetPoints > totalPoints ? false : true;

  const totalDue = isSuccessful ? totalFee * 0.75 : totalFee * 0.9;

  console.log(`Money left to pay: ${totalDue.toFixed(2)} BGN.`);

  isSuccessful
    ? console.log(`The championship was successful!`)
    : console.log(`The championship was not successful.`);
}

swimmingChampionship([
  "3",
  "400",
  "5",
  "70.6",
  "15.0",
  "100.6",
  "300.59",
  "250.9",
]);

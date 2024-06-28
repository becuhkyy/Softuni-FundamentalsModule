function Vacation(groupCount, groupType, dayOfWeek) {
  let totalPrice = 0;

  switch (groupType) {
    case "Students":
      if (dayOfWeek === "Friday") totalPrice = groupCount * 8.45;
      else if (dayOfWeek === "Saturday") totalPrice = groupCount * 9.8;
      else if (dayOfWeek === "Sunday") totalPrice = groupCount * 10.46;

      if (groupCount >= 30) totalPrice -= totalPrice * 0.15;

      break;
    case "Business":
      if (groupCount >= 100) groupCount -= 10;

      if (dayOfWeek === "Friday") totalPrice = groupCount * 10.9;
      else if (dayOfWeek === "Saturday") totalPrice = groupCount * 15.6;
      else if (dayOfWeek === "Sunday") totalPrice = groupCount * 16.0;

      break;
    case "Regular":
      if (dayOfWeek === "Friday") totalPrice = groupCount * 15.0;
      else if (dayOfWeek === "Saturday") totalPrice = groupCount * 20.0;
      else if (dayOfWeek === "Sunday") totalPrice = groupCount * 22.5;

      if (groupCount >= 10 && groupCount <= 20) totalPrice -= totalPrice * 0.05;

      break;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

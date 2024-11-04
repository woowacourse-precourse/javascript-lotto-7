export const getLottoPrizeAmount = (prizeStatisticsArray) => {
  const calculThree = prizeStatisticsArray[0].matchedThree * 5000;
  const calculFour = prizeStatisticsArray[1].matchedFour * 50000;
  const calculFive = prizeStatisticsArray[2].matchedFive * 1500000;
  const calculFiveAndBonus =
    prizeStatisticsArray[3].matchedFiveAndBonus * 30000000;
  const calculSix = prizeStatisticsArray[4].matchedSix * 2000000000;

  const sum =
    calculThree + calculFour + calculFive + calculFiveAndBonus + calculSix;

    return sum;
};

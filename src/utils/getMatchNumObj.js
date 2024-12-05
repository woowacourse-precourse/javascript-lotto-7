export const getMatchNumObj = (commonNumbersResult) => {
  const howManyNumberThree = commonNumbersResult.filter((object) => object.matchNum === 3).length;
  const howManyNumberFour = commonNumbersResult.filter((object) => object.matchNum === 4).length;
  const howManyNumberFive = commonNumbersResult.filter((object) => object.matchNum === 5 && object.matchBonusNum === 0).length;
  const howManyNumberFiveAndBonus = commonNumbersResult.filter((object) => object.matchNum === 5 && object.matchBonusNum === 1).length;
  const howManyNumberSix = commonNumbersResult.filter((object) => object.matchNum === 6).length;
  const prizeStatisticsAraay = [
    { matchedThree: howManyNumberThree },
    { matchedFour: howManyNumberFour },
    { matchedFive: howManyNumberFive },
    { matchedFiveAndBonus: howManyNumberFiveAndBonus },
    { matchedSix: howManyNumberSix },
  ];
  return prizeStatisticsAraay;
};
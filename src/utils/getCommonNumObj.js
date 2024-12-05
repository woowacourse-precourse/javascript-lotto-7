export const getCommonNumObj = (randomNumbers, prizeNumbers, bonusNumber) => {
  let commonNumbers = [];
  randomNumbers.map((randomNumber) => {
    const findCommonNumber = randomNumber.filter((array) => prizeNumbers.includes(array)).length;
    const bonusNumChangeArray = [bonusNumber];
    const bonusNumberInclusion = randomNumber.filter((array) => 
      bonusNumChangeArray.includes(array)).length;
    const commonNerberResult = {
      matchNum: findCommonNumber,
      matchBonusNum: bonusNumberInclusion,
    };
    return (commonNumbers = [...commonNumbers, commonNerberResult]);
  });
  return commonNumbers;
};
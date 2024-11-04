// number[], number[], number => string
const checkWinning = (numbers, basicNumbers, bonusNumber) => {
  const matchCount = getMatchCount(numbers, basicNumbers);
  const hasBounsNumber = numbers.includes(bonusNumber);

  if (winningRules.isFirst(matchCount)) return 'first';
  if (winningRules.isSecond(matchCount, hasBounsNumber)) return 'second';
  if (winningRules.isThird(matchCount, hasBounsNumber)) return 'third';
  if (winningRules.isFourth(matchCount)) return 'fourth';
  if (winningRules.isFifth(matchCount)) return 'fifth';
  return 'miss';
};

const winningRules = {
  isFirst: (matchCount) => matchCount === 6,
  isSecond: (matchCount, hasBonusNumber) => matchCount === 5 && hasBonusNumber,
  isThird: (matchCount, hasBonusNumber) => matchCount === 5 && !hasBonusNumber,
  isFourth: (matchCount) => matchCount === 4,
  isFifth: (matchCount) => matchCount === 3,
};

const getMatchCount = (firstArray, secondArray) => {
  return firstArray.filter((element) => secondArray.includes(element)).length;
};

export default checkWinning;

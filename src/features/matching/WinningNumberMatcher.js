const matchResults = {
  three: 0,
  four: 0,
  five: 0,
  fiveBonus: 0,
  six: 0,
};
const calculateMatchCount = (lotto, winningNumbers) =>
  lotto.getNumbers().filter((number) => winningNumbers.includes(number)).length;

const checkBonusMatch = (lotto, bonusNumber, matchCount) =>
  matchCount === 5 && lotto.getNumbers().includes(bonusNumber);

const getMatchResult = (matchCount, hasBonusMatch) => {
  const matchMap = {
    3: 'three',
    4: 'four',
    5: hasBonusMatch ? 'fiveBonus' : 'five',
    6: 'six',
  };

  return matchMap[matchCount] || 'none';
};

export const WinningNumberMatcher = (lottos, winningNumbers, bonusNumber) => {
  lottos.forEach((lotto) => {
    const matchCount = calculateMatchCount(lotto, winningNumbers);
    const hasBonusMatch = checkBonusMatch(lotto, bonusNumber, matchCount);
    const result = getMatchResult(matchCount, hasBonusMatch);
    if (result !== 'none') matchResults[result] += 1;
  });
  console.log(matchResults);
  return matchResults;
};

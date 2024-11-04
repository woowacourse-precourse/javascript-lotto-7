const calculateWinningSum = (matchCountList) => {
  const totalWinning = Object.keys(matchCountList)
    .map((matchCount) => {
      const { winning, isBonusMatchWinning = 0 } = matchCountList[matchCount];

      return winning + isBonusMatchWinning;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return totalWinning;
};

export default calculateWinningSum;

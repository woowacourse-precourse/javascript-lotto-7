const calculateWinningSum = (matchCountList) => {
  const totalWinning = Object.keys(matchCountList)
    .map((matchCount) => {
      const {
        count,
        winning,
        isBonusMatchCount = 0,
        isBonusMatchWinning = 0,
      } = matchCountList[matchCount];

      return winning * count + isBonusMatchWinning * isBonusMatchCount;
    })
    .reduce((acc, curr) => acc + curr, 0);
  console.log("calculateWinningSum", matchCountList, totalWinning);
  return totalWinning;
};

export default calculateWinningSum;

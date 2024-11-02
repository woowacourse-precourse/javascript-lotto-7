const matchCounts = {
  threeMatches: 0,
  fourMatches: 0,
  fiveMatches: 0,
  fiveMatchesAndBonus: 0,
  sixMatches: 0,
};

const countLottoWinning = (winningNumbers, lottoList, getWinningNumPlusBonusNum) => {
  lottoList.forEach((element) => {
    const matchFilter = element.filter((it) => winningNumbers.includes(it)).length;
    for (let i = 3; i < 7; i += 1) {
      const arr = i - 3;
      if (matchFilter === i) {
        matchCounts[Object.keys(matchCounts)[arr]] += 1;
      }
    }

    if (element.filter((it) => getWinningNumPlusBonusNum.includes(it)).length === 5) {
      matchCounts[Object.keys(matchCounts)[3]] += 1;
    }
  });
};

const getWinningNumPlusBonus = (winningNum, bonusNum) => {
  const getWinningNumPlusBonusNum = winningNum;
  getWinningNumPlusBonusNum.push(Number(bonusNum));
  return getWinningNumPlusBonusNum;
};

const produceStatistics = (winningNum, bonusNumber, lottoList) => {
  const getWinningNumPlusBonusNum = getWinningNumPlusBonus(winningNum, bonusNumber);
  countLottoWinning(winningNum, lottoList, getWinningNumPlusBonusNum);
};

const calculateWinningAmount = () => {
  const winningAmount =
    matchCounts.threeMatches * 5000 +
    matchCounts.fourMatches * 50000 +
    matchCounts.fiveMatches * 1500000 +
    matchCounts.fiveMatchesAndBonus * 30000000 +
    matchCounts.sixMatches * 2000000000;
  return winningAmount;
};

export { produceStatistics, calculateWinningAmount, matchCounts };

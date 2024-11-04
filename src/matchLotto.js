const matchLotto = (lottoList, winningNumbers, bonusNumber) => {
  const matchCountList = {
    3: { count: 0, winning: 5000 },
    4: { count: 0, winning: 50000 },
    5: {
      count: 0,
      isBonusMatchCount: 0,
      winning: 1500000,
      isBonusMatchWinning: 30000000,
    },
    6: { count: 0, winning: 2000000000 },
  };
  lottoList.forEach((lotto) => {
    const matchedCount = lotto.getMatchedCount(winningNumbers);
    const bonusMatch = lotto.getIsBonusMatch(bonusNumber);

    if (3 <= matchedCount && matchedCount <= 6) {
      if (matchedCount == 5 && bonusMatch)
        matchCountList[matchedCount].isBonusMatchCount += 1;
      else matchCountList[matchedCount].count += 1;
    }
  });

  return matchCountList;
};

export default matchLotto;

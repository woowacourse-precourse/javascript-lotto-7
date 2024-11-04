const matchLotto = (lottoList, winningNumbers, bonusNumber) => {
  const matchCountList = {
    3: { count: 0 },
    4: { count: 0 },
    5: { count: 0, isBonusMatchCount: 0 },
    6: { count: 0 },
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

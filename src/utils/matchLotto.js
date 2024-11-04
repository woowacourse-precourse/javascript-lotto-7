import { WinningInfo } from "../constants.js";

const matchLotto = (lottoList, winningNumbers, bonusNumber) => {
  const matchCountList = {};

  for (const key in WinningInfo) {
    const { count, WINNING, isBonusMatch } = WinningInfo[key];

    matchCountList[count] = {
      count: 0,
      winning: WINNING,
    };

    if (isBonusMatch) {
      matchCountList[count].isBonusMatchCount = 0;
      matchCountList[count].isBonusMatchWinning = WinningInfo.second.WINNING;
    }
  }

  lottoList.forEach((lotto) => {
    const matchedCount = lotto.getMatchedCount(winningNumbers);
    const bonusMatch = lotto.getIsBonusMatch(bonusNumber);

    if (3 <= matchedCount || matchedCount <= 5) {
      if (matchedCount == 5 && bonusMatch)
        matchCountList[matchedCount].isBonusMatchCount += 1;
      else matchCountList[matchedCount].count += 1;
    }
  });

  return matchCountList;
};

export default matchLotto;

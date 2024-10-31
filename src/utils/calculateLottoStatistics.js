import { LOTTO_PRIZES } from '../constants/lottoPrize.js';

export const calculateLottoStatistics = (matchResults) => {
  const statistics = { ...LOTTO_PRIZES };

  matchResults.forEach(({ matchCount, hasBonus }) => {
    if (matchCount === 5 && hasBonus) {
      statistics['5+bonus'].count += 1;
    } else if (matchCount >= 3) {
      statistics[matchCount].count += 1;
    }
  });

  return statistics;
};

import { LOTTO_PRIZES } from '../constants/lottoPrize.js';

const getInitialStatistics = () => ({
  3: { count: 0, prize: LOTTO_PRIZES[3].prize },
  4: { count: 0, prize: LOTTO_PRIZES[4].prize },
  5: { count: 0, prize: LOTTO_PRIZES[5].prize },
  '5+bonus': { count: 0, prize: LOTTO_PRIZES['5+bonus'].prize },
  6: { count: 0, prize: LOTTO_PRIZES[6].prize },
});

const getRank = ({ matchCount, hasBonus }) => {
  if (matchCount < 3) {
    return null;
  }

  if (matchCount === 5 && hasBonus) {
    return '5+bonus';
  }

  return matchCount;
};

export const calculateLottoStatistics = (matchResults) => {
  const statistics = getInitialStatistics();

  matchResults
    .map(getRank)
    .filter(Boolean)
    .forEach((rank) => {
      statistics[rank].count += 1;
    });

  return statistics;
};

import { LOTTO_PRIZES } from '../constants/lottoPrize.js';
import { NUMBER, WINNING_RANK } from '../constants/lottoConstants.js';

const getInitialStatistics = () => ({
  [WINNING_RANK.FIFTH]: {
    count: NUMBER.ZERO,
    prize: LOTTO_PRIZES[WINNING_RANK.FIFTH].prize,
  },
  [WINNING_RANK.FOURTH]: {
    count: NUMBER.ZERO,
    prize: LOTTO_PRIZES[WINNING_RANK.FOURTH].prize,
  },
  [WINNING_RANK.THIRD]: {
    count: NUMBER.ZERO,
    prize: LOTTO_PRIZES[WINNING_RANK.THIRD].prize,
  },
  [WINNING_RANK.SECOND]: {
    count: NUMBER.ZERO,
    prize: LOTTO_PRIZES[WINNING_RANK.SECOND].prize,
  },
  [WINNING_RANK.FIRST]: {
    count: NUMBER.ZERO,
    prize: LOTTO_PRIZES[WINNING_RANK.FIRST].prize,
  },
});

const getRank = ({ matchCount, hasBonus }) => {
  if (matchCount < NUMBER.THREE) {
    return null;
  }

  if (matchCount === NUMBER.FIVE && hasBonus) {
    return WINNING_RANK.SECOND;
  }

  return matchCount;
};

export const calculateLottoStatistics = (matchResults) => {
  const statistics = getInitialStatistics();

  matchResults
    .map(getRank)
    .filter(Boolean)
    .forEach((rank) => {
      statistics[rank].count += NUMBER.ONE;
    });

  return statistics;
};

import { WINNING_RANK } from './lottoConstants.js';

export const LOTTO_PRIZES = {
  [WINNING_RANK.FIFTH]: { count: 0, prize: 5000 },
  [WINNING_RANK.FOURTH]: { count: 0, prize: 50000 },
  [WINNING_RANK.THIRD]: { count: 0, prize: 1500000 },
  [WINNING_RANK.SECOND]: { count: 0, prize: 30000000 },
  [WINNING_RANK.FIRST]: { count: 0, prize: 2000000000 },
};

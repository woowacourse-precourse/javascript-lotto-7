import deepFreeze from '../utils/deepFreeze.js';

const CONFIG = Object.freeze({
  PURCHASE_AMOUNT_UNIT: 1000,
  LOTTO_COUNT: 6,
  LOTTO_MIN_NUMBER: 1,
  LOTTO_MAX_NUMBER: 45,
  BONUS_NUMBER_COUNT: 1,
});

const RANK = deepFreeze({
  FIRST: {
    matchCount: 6,
    prize: 2_000_000_000,
  },
  SECOND: {
    matchCount: 5.5,
    prize: 30_000_000,
  },
  THIRD: {
    matchCount: 5,
    prize: 1_500_000,
  },
  FOURTH: {
    matchCount: 4,
    prize: 50_000,
  },
  FIFTH: {
    matchCount: 3,
    prize: 5_000,
  },
});

export { CONFIG, RANK };

export const LOTTO = Object.freeze({
  SEPARATOR: ',',
  NO_LUCK_RANK: 0,
  PRICE: 1000,
  NUMBER_RANGE: Object.freeze({
    MIN: 1,
    MAX: 45,
  }),
});

export const WIN_WITH_BONUS_RANK = 2;
export const NEED_TO_CHHECK_BONUS_RANK = 3;
export const UPGRADE_RANK_NUMBER = -1;

export const PRIZE_TUPLE = Object.freeze([
  [1, 2_000_000_000],
  [2, 30_000_000],
  [3, 1_500_000],
  [4, 50_000],
  [5, 5_000],
]);

export const RANK_TUPLE = Object.freeze([
  [6, 1],
  [5, 3],
  [4, 4],
  [3, 5],
  [2, LOTTO.NO_LUCK_RANK],
  [1, LOTTO.NO_LUCK_RANK],
  [0, LOTTO.NO_LUCK_RANK],
]);

export const matchedAmoutMap = new Map([[1, 6],
  [2, 5],
  [3, 5],
  [4, 4],
  [5, 3]]);

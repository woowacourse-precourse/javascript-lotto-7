const LOTTO_INFO = Object.freeze({
  PRICE: 1000,
  LENGTH: 6,
  MIN_RANGE_NUM: 1,
  MAX_RANGE_NUM: 45,
  WINNING_MONEY: Object.freeze({
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  }),
  MIN_RANK: 5,
});

const LOTTO_RANKING_SYSTEM = Object.freeze([
  Object.freeze({ RANK: 1, MATCH_COUNT: 6, SHOULD_CONTAIN_BONUS_NUM: false }),
  Object.freeze({ RANK: 2, MATCH_COUNT: 5, SHOULD_CONTAIN_BONUS_NUM: true }),
  Object.freeze({ RANK: 3, MATCH_COUNT: 5, SHOULD_CONTAIN_BONUS_NUM: false }),
  Object.freeze({ RANK: 4, MATCH_COUNT: 4, SHOULD_CONTAIN_BONUS_NUM: false }),
  Object.freeze({ RANK: 5, MATCH_COUNT: 3, SHOULD_CONTAIN_BONUS_NUM: false }),
]);

export { LOTTO_INFO, LOTTO_RANKING_SYSTEM };
